import React from 'react'
import { FaPhone } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import { StyledSideNav } from './styled-components'

type Props = {}

const SideNav = (props: Props) => {
  return (
    <StyledSideNav>
      <ul>
        <li>
          <div>
            <FaPhone />
            <span>Điện thoại</span>
          </div>
          <IoIosArrowForward />
        </li>
      </ul>
    </StyledSideNav>
  )
}

export default SideNav