import React from 'react'
import { useParams } from 'react-router-dom'
import ProductForm from '../../../components/ProductForm'
import { StyledAdminHeadline } from '../../../components/styled-components'

type Props = {}

const UpdatePhone = (props: Props) => {
  const { id } = useParams();
  return (
    <div>
      <StyledAdminHeadline>
        Cập nhật sản phẩm
      </StyledAdminHeadline>
      <ProductForm id={id ?? ""} />
    </div>
  )
}

export default UpdatePhone