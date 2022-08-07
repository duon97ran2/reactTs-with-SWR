import { Button, Result, Spin } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import useProduct from '../hooks/useProduct'
import ProductItem from './ProductItem';
import { StyledProductContainer, StyledSpace } from './styled-components';

type Props = {
  products: any;
}

const ProductPanel = ({ products }: Props) => {

  return (
    <StyledProductContainer>
      {products.length ? products.slice(0, 10).map((item: any) => <Link key={item._id} to={`/products/${item._id}`}> <ProductItem product={item} /></Link>) : <span style={{ "margin": "10px" }}>Không có sản phẩm nào</span>}
    </StyledProductContainer>
  )
}

export default ProductPanel