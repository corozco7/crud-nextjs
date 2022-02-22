import {Predio} from 'src/interfaces/predio'
import PrediosList from 'src/components/predios/PrediosList'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import Layout from 'src/components/Layout'

interface Props {
  predios: Predio[]
}

export default function index({predios}: Props){
  const router = useRouter()

  return <Layout>
    <Button style={{ width: 120 }} onClick={() => router.push("/predios/new")}>Crear Predio</Button>
    <PrediosList predios={predios}/>
  </Layout>
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/predios')
  const predios = await res.json()

  return {
    props: {
      predios: predios,
    }
  }
}