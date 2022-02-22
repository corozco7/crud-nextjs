import { Space, Table } from 'antd'
import {Predio} from 'src/interfaces/predio'
import { useRouter } from "next/router"

interface Props {
    predios: Predio[]
}

function PrediosList({predios}: Props) {
    const router = useRouter()

    const columns = [
        {
          title: 'Numero Predial',
          dataIndex: 'numero_predial',
          key: 'numero_predial',
        },
        {
            title: 'Avaluo',
            dataIndex: 'avaluo',
            key: 'avaluo',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Departamento',
            dataIndex: 'departamento',
            key: 'departamento',
        },
        {
            title: 'Municipio',
            dataIndex: 'municipio',
            key: 'municipio',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
          },
    ]
    return (<div>
        
        <Table
        pagination={false}
        columns={columns}
        dataSource={
            predios.map((predio) => (
                {
                    key: predio.id,
                    numero_predial: predio.numero_predial,
                    avaluo: predio.avaluo,
                    nombre: predio.nombre,
                    departamento: predio.departamento,
                    municipio: predio.municipio
                }
            ))
        }
        />
        </div>
    )
}

export default PrediosList