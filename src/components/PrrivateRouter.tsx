import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSWRConfig } from 'swr'

type Props = {
  role: number
  children: JSX.Element
}

const PrrivateRouter = (props: Props) => {
  if (props.role != 1) {
    return <Navigate to="/" replace />
  }
  return (
    props.children
  )
}

export default PrrivateRouter