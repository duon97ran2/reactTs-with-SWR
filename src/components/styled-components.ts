import { FiTrash, FiX } from 'react-icons/fi';

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
  z-index:2;
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
  display: flex;
  position: relative;
  & input {
    border: none;
    outline: none;
  } 
  & .result{
    width: 100%;
    top:50px;
    position: absolute;
    max-height: 300px;
    overflow: auto;
    display: flex;
    border-radius: 0px 0px 5px 5px;
    flex-direction: column;
    justify-content: start;
    background-color: white;
    /* width */
    & ::-webkit-scrollbar {
      width: 100px;
    }

/* Track */
    & ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
 
/* Handle */
    & ::-webkit-scrollbar-thumb {
      background: #888; 
    }

/* Handle on hover */
    & ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
    & .result-item{
      width: 100%;
      padding: 10px;
      & div{
        & h5{
          font-weight: bold;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
      }
    }
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
  & span{
    font-size: 11px;
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
position: relative;
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
export const StyledAuthContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
`

export const StyledFormBox = styled.div`
  border-radius: 15px;
  text-align: center;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  background: white;
  overflow: hidden;
  min-height: 508px;
  & Button{
    margin-top: 5px;
    width: 100%;
    margin-bottom:20px;
  }
  & .ant-form-item{
    margin-bottom:0
  }
  & .social{
    display: flex;
    margin:10px; 
    justify-content: center;
    gap:10px;
  }
  
`
export const StyledProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
`
export const StyledItemProduct = styled(Card)`
display: flex;
flex-direction: column;
border:0;
& img{
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  object-fit: contain;
}
& .desc {
  display:flex;
  flex-direction: column;
  background-color: #E5E7EB;
  padding: 5px;
}
`
export const StyledDetailContainer = styled.div`
  & h3{
    margin:10px 0px;
  }

`

export const StyledCartContainer = styled.div`
  width: 400px;
  margin: 20px auto;
  min-height: 400px;
  position: relative;
  & .item{
    margin:10px 0px;
    position: relative;
  }
  
`