import React from 'react'
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

type Props = {}

const ClientLayout = (props: Props) => {
  return (
    <Layout>
      <Header style={{ "lineHeight": "initial" }}>
        <AppHeader />
      </Header>
      <Content style={{ "background": "white" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default ClientLayout