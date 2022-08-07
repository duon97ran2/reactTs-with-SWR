import React from 'react'
import { StyledButton, StyledHeader, StyledSearchBar } from './styled-components'
import logoImage from "../assets/img/anhhtus-logo.png"
import { BiUserCircle } from 'react-icons/bi';
import { FiMapPin, FiPhone, FiTruck } from "react-icons/fi"
import { RiShoppingBagLine } from "react-icons/ri"
import useAuth from '../hooks/useAuth';
import SearchBar from './SearchBar';
import { Avatar, Badge, Dropdown, Menu, Space } from 'antd';
import { FaArrowDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useSWR, { useSWRConfig } from 'swr';
import useProduct from '../hooks/useProduct';

type Props = {}

const AppHeader = (props: Props) => {
  const { cache } = useAuth();

  const user = cache.get("user");
  const cart = cache.get("cart");
  const { mutate } = useProduct();
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link to="admin">Admin </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link to="/">Profile</Link>
          ),
        },
        {
          key: '4',
          danger: true,
          label: <div onClick={() => { cache.delete("user"), navigate("/") }}>Log out</div>,
        },
      ]}
    />
  );

  return (
    <StyledHeader>
      <img src={logoImage} alt="" onClick={() => { navigate("/") }} />
      <SearchBar />
      <div >
        <StyledButton>
          <FiPhone style={{ "fontSize": "30px", "margin": "0px 5px" }} />
          <span>Gọi mua hàng  <br /> 0123456789</span>
        </StyledButton>
        <StyledButton>
          <FiMapPin style={{ "fontSize": "30px", "margin": "0px 5px" }} />
          <span>Cửa hàng  <br /> gần bạn</span>
        </StyledButton>
        <StyledButton>
          <FiTruck style={{ "fontSize": "30px", "margin": "0px 5px" }} />
          <span>Tra cứu <br /> đơn hàng</span>
        </StyledButton>
        <Badge size="small" color='yellow' count={cart.length}>
          <StyledButton onClick={() => { navigate("/cart") }}>
            <RiShoppingBagLine style={{ "fontSize": "30px", "margin": "0px 5px" }} />
            <span>Giỏ  <br />hàng</span>
          </StyledButton>
        </Badge>
        {user ?
          <Dropdown overlay={menu} placement="bottomLeft" arrow>

            <Space>
              <StyledButton>
                <Avatar src={user.avatar[0][0]} />
                <span>Hello  <br />{user.username ?? user.email} </span>
              </StyledButton>
            </Space>

          </Dropdown>

          : <StyledButton onClick={() => { navigate("/login") }}>
            <BiUserCircle style={{ "fontSize": "30px", "margin": "0px 5px" }} />
            <span>Đăng  <br />nhập </span>
          </StyledButton>}

      </div>
    </StyledHeader>
  )
}

export default AppHeader