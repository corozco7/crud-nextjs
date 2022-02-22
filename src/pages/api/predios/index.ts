import { NextApiRequest, NextApiResponse } from "next"
import { conn } from "src/utils/db";

export default async (req:NextApiRequest, res:NextApiResponse) => {
    
    const {method, body} = req

    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM learn.predios';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (error: any) {
                return res.status(400).json({error: error.message});
            }
        case 'POST':
            try {
                const {numero_predial, avaluo, nombre, departamento, municipio} = body;
                const query = 'INSERT INTO learn.predios(numero_predial, avaluo, nombre, departamento, municipio) VALUES ($1, $2, $3, $4, $5) RETURNING *';
                const values = [numero_predial, avaluo, nombre, departamento, municipio];

                const response = await conn.query(query, values);

                return res.status(200).json(response.rows[0]);
            } catch (error: any) {
                return res.status(400).json({error: error.message});
            }
        default:
            return res.status(400).json('invalid method');
    }

}