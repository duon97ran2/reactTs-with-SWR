import React from 'react'
import { StyledButton, StyledHeader, StyledSearchBar } from './styled-components'
import logoImage from "../assets/img/anhhtus-logo.png"
import { FaSearch } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiTruck } from "react-icons/fi"
import { RiShoppingBagLine } from "react-icons/ri"

type Props = {}

const AppHeader = (props: Props) => {
  return (
    <StyledHeader>
      <img src={logoImage} alt="" />

      <div >
        <StyledButton>
          <FiPhone style={{ fontSize: "30px", margin: "0px 5px" }} />
          <span>Gọi mua hàng  <br /> 0123456789</span>
        </StyledButton>
        <StyledButton>
          <FiMapPin style={{ fontSize: "30px", margin: "0px 5px" }} />
          <span>Cửa hàng  <br /> gần bạn</span>
        </StyledButton>
        <StyledButton>
          <FiTruck style={{ fontSize: "30px", margin: "0px 5px" }} />
          <span>Tra cứu <br /> đơn hàng</span>
        </StyledButton>
        <StyledButton>
          <RiShoppingBagLine style={{ fontSize: "30px", margin: "0px 5px" }} />
          <span>Giỏ  <br />hàng</span>
        </StyledButton>
      </div>
    </StyledHeader>
  )
}

export default AppHeader