import React from 'react'
import { Layout } from 'antd';
import AppHeader from '../components/AppHeader';
import { Outlet } from 'react-router-dom';
import AppFooter from '../components/Footer';
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
      <AppFooter />
    </Layout>
  )
}

export default ClientLayout