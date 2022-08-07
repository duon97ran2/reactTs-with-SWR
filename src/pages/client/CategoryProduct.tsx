import { Button, Result, Spin } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductPanel from '../../components/ProductPanel'
import useProduct from '../../hooks/useProduct'
import { StyledSpace } from '../../components/styled-components';
import useSWR from 'swr'

type Props = {}

const CategoryProduct = (props: Props) => {
  const { data, error, getProductByCategory } = useProduct();
  const { id } = useParams();
  const { data: category, error: categoryError } = useSWR(`/category/${id}`);

  useEffect(() => { if (id) getProductByCategory(id) }, [id])
  if (!data || !category) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (error || categoryError) {
    return <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Button type="primary" key="console" onClick={() => { window.location.reload() }}>
          Tải lại
        </Button>
      }
    />
  }
  return (
    <>
      <h4 style={{ "margin": "10px" }}>Danh mục: {category.name}</h4>
      <ProductPanel products={data.filter((item: any) => item.status == 0)} />
    </>
  )
}

export default CategoryProduct