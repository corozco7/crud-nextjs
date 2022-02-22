import {NextApiRequest, NextApiResponse} from 'next'
import { conn } from 'src/utils/db'

type Data = {
  message: string,
  time: string
}

export default async function index(req: NextApiRequest, res:NextApiResponse<Data>) {

  const response = await conn.query('SELECT NOW()');

  return res.json({message: "pong", time: response.rows[0].now})
}
