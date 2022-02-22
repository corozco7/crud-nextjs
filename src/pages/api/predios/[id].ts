import { NextApiRequest, NextApiResponse } from "next"
import { conn } from "src/utils/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, query, body} = req;

    switch (method) {
        case 'GET':
            try {
                const text = 'SELECT * FROM learn.predios WHERE id = $1';
                const values = [query.id];
                const result = await conn.query(text, values);
                if (result.rows.length === 0){
                    return res.status(404).json({message: "Predio no encontrado"})
                }
                return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({message: error.message})
            }
        case 'PUT':
            try {
                const text = 'UPDATE learn.predios SET numero_predial = $1, avaluo = $2, nombre = $3, departamento = $4, municipio = $5 WHERE id = $6 RETURNING *';
                const {numero_predial, avaluo, nombre, departamento, municipio} = body
                const values = [numero_predial, avaluo, nombre, departamento, municipio, query.id];
                const result = await conn.query(text, values);
                if (result.rows.length === 0){
                    return res.status(404).json({message: "Predio no encontrado"})
                }
                return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({message: error.message})
            }
        case 'DELETE':
            try {
                const text = 'DELETE FROM learn.predios WHERE id = $1 RETURNING *';
                const values = [query.id];
                const result = await conn.query(text, values);
                if (result.rowCount === 0){
                    return res.status(404).json({message: "Predio no encontrado"})
                }
                return res.json(result.rows[0]);
            } catch (error: any) {
                return res.status(500).json({message: error.message});
            }
        default:
            return res.status(400).json('method not allowed');
    }
}