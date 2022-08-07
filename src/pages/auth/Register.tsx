import React from 'react'
import AuthForm from '../../components/AuthForm'
import { StyledAuthContainer } from '../../components/styled-components'

type Props = {}

const Register = (props: Props) => {
  return (
    <StyledAuthContainer><AuthForm type="register" /></StyledAuthContainer>
  )
}

export default Register