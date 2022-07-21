import { FiTrash } from 'react-icons/fi';

import styled, { keyframes } from "styled-components"
import logo from '../logo.svg'
import { Layout, Card, Input, Select, Space } from "antd"


const { Header } = Layout;

const AppLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`
export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  height: 64px;
  left: 0px;
  top: 0px;
  padding: 0 10%;
  gap:40px;
  display: inline-flex;
  align-items: center;
  background: #D70018;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
  & img{
    width: 65px;
    height: auto;
  }
  & div{
    display: flex;
    gap:10px;
    align-items: center;
  }
  
`

export const StyledSearchBar = styled.div`
  background-color: white;
  padding  :5px ;
  width: 500px;
  border-radius: 5px;
  text-align: start;
  & input {
    border: none;
    outline: none;
  } 
`
export const StyledButton = styled.a`
  color: white;
  display:flex;
  text-decoration: none;
  text-align: start;
  align-items: center;
  align-items: center;
  border-radius: 5px;
  :hover{
    color: white;
    background-color: rgba(255, 255, 255, 0.3);
  }
`
export const StyledSideNav = styled.div`
  color: #343A40;
  & li{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`
export const StyledAdminHeader = styled(Header)`
background: #00B0D7;
display: flex;
line-height: initial;
align-items: center;
gap:20px;
& span{
  color: white;
}

`
export const StyledAdminHeadline = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #5F5E61;

`
export const StyledAddButton = styled.a`
  color: #00B0D7;
  width: 36px;
  height: 34px;
  padding: 7px;
  border: 2px solid #00B0D7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledFormContainer = styled.div`
  display: grid;
  grid-template-columns: 395px auto;
  border-radius: 5px;
  min-height: 100vh;
  background: white;
  border: none;
  gap:16px;
  & Input{
    border-radius: 5px;
  }
`
export const StyledUploadContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  height: 260px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledFormInput = styled(Input)`
  border: none;
  outline: none;
  border-radius: 0 !important;
  border-bottom: 1px solid gray;
  :focus{
    box-shadow: none;
    border-color: #1890ff;
  }
`
export const StyledFormSelect = styled(Select)`
& .ant-select-selector{
  border-radius: 5px !important;
}
  
`

export const StyledCancelButton = styled(FiTrash)`
  position: absolute;
  top:10px;
  left: 10px;
  :hover{
    color: #5F5E61 !important ;
  }
`
export const StyledSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`