import { Badge, Button, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import { StyledCartContainer } from '../../components/styled-components'
import useCart from '../../hooks/useCart'
import { CurrencyConvert } from '../../utils/common'

type Props = {}

const Cart = (props: Props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { cache, removeCart, decrease, increase } = useCart();
  const cartData = cache.get("cart");
  const sum = cartData?.reduce(
    (previousValue: number, currentValue: any) => previousValue + currentValue.newPrice * currentValue.amount,
    0,);
  useEffect(() => {
    setCart(cartData);
    setTotal(sum)
  }, [cartData, sum])

  return (

    <StyledCartContainer>
      <Row>
        <Col span={12}>
          <AiOutlineLeft /><span style={{ "color": "#D70018" }}> Trở về</span>
        </Col>
        <span style={{ "color": "#D70018" }}> Giỏ hàng</span>
      </Row>
      {cart?.map((item: any) => <Row className="item" key={item._id}>
        <Col span={8}>
          <img style={{ "width": "100%", "objectFit": "contain", "padding": "10px", "objectPosition": "center" }} src={item.image[0]} alt="" />
        </Col>
        <Col span={16}>
          <span>{item.name}</span>
          <div style={{ "marginBottom": "20px" }}>
            <span style={{ "color": "#D70018", "marginRight": "5px", "fontSize": "14px" }}>{CurrencyConvert(item.newPrice)}</span>
            <span style={{ "color": "gray", "fontSize": "12px" }}> {CurrencyConvert(item.price)}</span>
            <Badge style={{ "backgroundColor": "#D70018", "padding": "5px", "color": "white", "marginLeft": "10px", "borderRadius": "5px" }} count={<span> Giảm {Math.floor(100 * (1 - +item.newPrice / +item.price))}%</span>}></Badge>
          </div>
          <span style={{ "marginRight": "10px" }}>Chọn số lượng</span>
          <Button size="small" onClick={() => { decrease(item) }}>-</Button>
          <Button size='small' style={{ "padding": "0 16px" }}>{item.amount}</Button>
          <Button size="small" onClick={() => { increase(item) }}>+</Button>
        </Col>
        <FiX style={{ "position": "absolute", "top": "0", "right": "0" }} onClick={() => { removeCart(item) }} />
      </Row>)}

      <div>
        <Row justify='space-between'>
          Tổng tiền tính tạm thời: <span style={{ "color": "#D70018" }}> {CurrencyConvert(total)}</span>
        </Row >
        <Button type='primary' style={{ "width": "100%", "marginBottom": "5px", "backgroundColor": "#D70018", "borderColor": "#D70018" }} >TIẾN HÀNH ĐẶT HÀNG</Button>
        <Button style={{ "width": "100%", "color": "#D70018", "borderColor": "#D70018" }} >CHỌN THÊM SẢN PHẨM KHÁC</Button>
      </div>
    </StyledCartContainer>
  )

}

export default Cart