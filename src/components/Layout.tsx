import { Layout, Menu } from "antd"
import { Content, Footer, Header } from "antd/lib/layout/layout"
import { useRouter } from "next/router"

export default function LayoutDiv({children}){
    const router = useRouter()
    return(
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1" onClick={() => router.push("/")}>Predios</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}