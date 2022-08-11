import { Breadcrumb, Button, Layout, Menu, MenuProps, Result, Spin } from 'antd'
import { AiOutlineAudio, AiOutlineLaptop, AiOutlinePhone, AiOutlineSetting, AiOutlineShop, AiOutlineTablet } from "react-icons/ai"
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logoImage from "../assets/img/anhhtus-logo.png"
import SearchBar from '../components/SearchBar';
import { StyledAdminHeader, StyledLayout, StyledSpace } from '../components/styled-components';
import "./AdminLayout.css"
import useCategory from '../hooks/useCategory';

type Props = {}
const { Header, Content, Sider } = Layout;
const AdminLayout = (props: Props) => {
  const { data, error } = useCategory();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    if (data) {
      const categoryList = data.map((item: any) => {
        return { key: item._id, label: <Link to={`/admin/products/list/${item._id}`}>{item.name}</Link> }
      });
      setCategory(categoryList);
    }
  }, [])

  const items2: MenuProps['items'] = [
    {
      key: "products", icon: <AiOutlineShop />, label: <Link to="/admin/products">Sản phẩm</Link>, children: category
    },
    { key: "categories", icon: <AiOutlineSetting />, label: <Link to="/admin/category">Danh mục</Link> },
  ]
  const navigate = useNavigate();
  if (!data) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (error) {
    return <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Button type="primary" key="console" onClick={() => { window.location.reload() }}>
          Tải lại
        </Button>
      }
    />
  }
  return (
    <StyledLayout>
      <StyledAdminHeader>
        <div className="logo" onClick={() => { navigate("/") }}>
          <img src={logoImage} style={{ "width": "64px", "height": "auto" }} alt="" />
        </div>
        <span>Dashboard</span>
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