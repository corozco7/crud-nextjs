import {Pool} from 'pg'

let conn: any

if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: '93051207007tibia',
        host: 'localhost',
        port: 5432,
        database: 'crud'
    })
}

export {conn};