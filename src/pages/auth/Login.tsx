import React from 'react'
import AuthForm from '../../components/AuthForm'
import { StyledAuthContainer } from '../../components/styled-components'

type Props = {}

const Login = (props: Props) => {
  return (
    <StyledAuthContainer><AuthForm type="login" /></StyledAuthContainer>
  )
}

export default Login