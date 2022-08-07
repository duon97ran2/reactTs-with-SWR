import { Card } from 'antd'
import Item from 'antd/lib/list/Item'
import React from 'react'
import { FaStar } from "react-icons/fa"
import { CurrencyConvert } from '../utils/common'
import { StyledItemProduct } from './styled-components'

type Props = {
  product: any
}

const ProductItem = ({ product }: Props) => {
  return (
    <StyledItemProduct>
      <img src={product.image[0]} alt="" />

      <span style={{ "fontSize": "16px" }}>{product.name}</span>
      <div style={{ "margin": "10px 0px" }}><span style={{ "color": "red", "marginRight": "5px" }}>{CurrencyConvert(product.newPrice)}</span><span style={{ "color": "gray" }}> {CurrencyConvert(product.price)}</span></div>
      <div className="desc">
        <span> {product.shortDescription}</span>
        <span> {product.description}</span>
      </div>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>14 Đánh giá</span>
      </div>
    </StyledItemProduct>
  )
}

export default ProductItem