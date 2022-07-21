import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { AiOutlineAudio, AiOutlineLaptop, AiOutlinePhone, AiOutlineSetting, AiOutlineTablet } from "react-icons/ai"
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logoImage from "../assets/img/anhhtus-logo.png"
import SearchBar from '../components/SearchBar';
import { StyledAdminHeader, StyledLayout } from '../components/styled-components';
import "./AdminLayout.css"

type Props = {}
const { Header, Content, Sider } = Layout;
const AdminLayout = (props: Props) => {
  const items2: MenuProps['items'] = [
    { key: "cellphone", icon: <AiOutlinePhone />, label: <Link to="/admin/cellphone">Điện thoại</Link> },
    { key: "laptop", icon: <AiOutlineLaptop />, label: <Link to="/admin">Laptop</Link> },
    { key: "tablet", icon: <AiOutlineTablet />, label: <Link to="/admin">Máy tính bảng</Link> },
    { key: "audio", icon: <AiOutlineAudio />, label: <Link to="/admin">Âm thanh</Link> },
    { key: "categories", icon: <AiOutlineSetting />, label: <Link to="/admin/category">Danh mục</Link> },
  ]
  return (
    <StyledLayout>
      <StyledAdminHeader>
        <div className="logo">
          <img src={logoImage} style={{ "width": "64px", "height": "auto" }} alt="" />
        </div>
        <span>Dashboard</span>
        <SearchBar />
        <span style={{ "position": "absolute", "right": "10%", "fontWeight": "600" }}>Hello Admin</span>
      </StyledAdminHeader>
      <Layout>
        <Sider width={300} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout >
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  )
}

export default AdminLayout