import React from 'react'
import ProductForm from '../../../components/ProductForm'
import { StyledAdminHeadline } from '../../../components/styled-components'

type Props = {}

const CreatePhone = (props: Props) => {
  return (
    <div>
      <StyledAdminHeadline>
        Thêm mới Điện thoại
      </StyledAdminHeadline>
      <ProductForm id="" />
    </div>
  )
}

export default CreatePhone