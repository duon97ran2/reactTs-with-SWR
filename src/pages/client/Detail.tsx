import { Button, Col, Result, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import useSWR from 'swr'
import { cache } from 'swr/dist/utils/config'
import { getByCategory } from '../../api/product'
import ProductPanel from '../../components/ProductPanel'
import { StyledDetailContainer, StyledSpace } from '../../components/styled-components'
import useCart from '../../hooks/useCart'
import useProduct from '../../hooks/useProduct'
import { CurrencyConvert } from '../../utils/common'

type Props = {}

const Detail = (props: Props) => {
  const { id } = useParams();
  const { data, error } = useSWR(`products/${id}`);
  const [quantity, setQuantity] = useState(1);
  const { data: productData, getProductByCategory } = useProduct();
  const { addCart, cache } = useCart();
  useEffect(() => {
    if (data) {
      getProductByCategory(data.category)
    }

  }, [])
  const addHandle = (item: any) => {
    addCart({ ...item, amount: quantity })
  }
  const navigate = useNavigate();
  if (!data || !productData) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (error) {
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
    <StyledDetailContainer>
      <h3>{data.name}</h3>
      <hr style={{ "height": "2px" }} />
      <Row >
        <Col span={8}>

          <img style={{ "height": "350px", "objectFit": "contain", "padding": "20px", "objectPosition": "center" }} src={data.image[0]} alt="" />

        </Col>
        <Col span={16} >
          <div style={{ "marginBottom": "20px" }}><span style={{ "color": "red", "marginRight": "5px", "fontSize": "20px" }}>{CurrencyConvert(data.newPrice)}</span><span style={{ "color": "gray", "fontSize": "14px" }}> {CurrencyConvert(data.price)}</span></div>
          <p>Mô tả ngắn: {data.shortDescription}, Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
          </p>
          <Button size="large" onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>-</Button>
          <Button size='large' style={{ "padding": "0 16px" }}>{quantity}</Button>
          <Button size="large" onClick={() => { setQuantity(quantity + 1) }}>+</Button>
        </Col>
      </Row>
      <Row align='middle'>
        <Col span={8}>
          <Row>
            {data.image.map((item: any, index: number) => <Col span={8} key={index}> <img style={{ "width": "100%", "objectFit": "cover", "padding": "20px" }} src={item} alt="" /></Col>)}
          </Row>
        </Col>
        <Button style={{ "width": "250px", "marginRight": "10px" }} type='primary' size='large' danger onClick={() => { addHandle(data); navigate("/cart") }}>Mua ngay</Button>
        <Button icon={<FaShoppingCart />} onClick={() => { addHandle(data) }} type='ghost' size='large' danger />
        <span style={{ "width": "80px", "marginLeft": "10px", "textAlign": "center" }} >Thêm vào giỏ hàng</span>
      </Row>
      <h5>Sản phẩm cùng loại</h5>
      <ProductPanel products={productData.filter((item: any) => item.status == 0).slice(0, 5)} />
      <div style={{ "background": "#F2F2F2", "padding": "30px", "display": "flex", "flexDirection": "column", "marginBottom": "10px" }}>
        <h4 style={{ "color": "red", 'textAlign': "center" }}>ĐẶC ĐIỂM NỔI BẬT</h4>
        <span>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</span>
        <span>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</span>
        <span>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</span>
        <span>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</span>
        <span>{data.description}</span>
      </div>
      <p>
        Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
      </p>
      <h5>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h5>
      <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
      <h5>Thiết kế sang trọng, màn hình Super AMOLED</h5>
      <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
      <Row>
        <Button style={{ "width": "250px", "borderRadius": "10px", "margin": "20px auto" }} size="large">Xem thêm</Button>
      </Row>
    </StyledDetailContainer>
  )
}

export default Detail