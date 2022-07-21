import { message } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import CategoryForm from '../../../components/CategoryForm'
import { StyledAdminHeadline } from '../../../components/styled-components'

type Props = {}

const EditCate = (props: Props) => {
  const { id } = useParams();
  return (
    <div>
      <StyledAdminHeadline>
        Cập nhật danh mục
      </StyledAdminHeadline>
      <CategoryForm id={id ?? ""} />
    </div>
  )
}

export default EditCate