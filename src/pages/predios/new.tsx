import { Button, Card, Form, Input, InputNumber } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import { ChangeEvent, FormEvent, useState } from "react"
import { Predio } from "src/interfaces/predio"
import { useRouter } from "next/router"
import Layout from 'src/components/Layout'

export default function newPage() {

    const router = useRouter()

    const [predio, setPredio] = useState({
        numero_predial: '',
        avaluo: '',
        nombre: '',
        departamento: '',
        municipio: ''
    })

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setPredio({
        ...predio, [name]: value
    })

    const createPredio = async (predio: Predio) => {
        await fetch('http://localhost:3000/api/predios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(predio)
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        try {
            await createPredio(predio)
            router.push("/")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Layout>
            <Card style={{ width: 300 }}>
                    <Form onFinish={handleSubmit}>
                        <Form.Item name="numero_predial" label="Numero Predial">
                            <Input name="numero_predial" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item name="avaluo" label="Avaluo">
                            <Input name="avaluo" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item name="nombre" label="Nombre">
                            <Input name="nombre" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item name="departamento" label="Departamento">
                            <Input name="departamento" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item name="municipio" label="Municipio">
                            <Input name="municipio" onChange={handleChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                <SaveOutlined />
                                Agregar
                            </Button>
                        </Form.Item>
                    </Form>
            </Card>
        </Layout>
    )
}