import { Button, Col, Form, Input, message, Result, Row, Select, Spin, Upload } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload'
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { add } from '../api/product'
import useCategory from '../hooks/useCategory'
import useProduct from '../hooks/useProduct'
import { categoryType } from '../types/categoryType'
import { StyledAddButton, StyledCancelButton, StyledFormContainer, StyledFormInput, StyledFormSelect, StyledSpace, StyledUploadContainer } from './styled-components'

type Props = {
  id: string;
}
const { Option } = Select

const ProductForm = ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>();
  const { data: category, error: categoryError } = useCategory();
  const { productAdd } = useProduct();
  const [productForm] = Form.useForm();
  if (id.length != 0) {
    const { data: product, error: productError } = useSWR(`/products/${id}`);

    if (!product) {
      message.loading("Đang tải");
    }
    if (productError) {
      message.error("Không lấy được dữ liệu sản phẩm")
    }
    if (product) {
      productForm.setFieldsValue(product);

    }
  }
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj as RcFile, url => {
      setLoading(false);
      console.log(info.file.response)
      setImageUrl(info.file.response);
      productForm.setFieldsValue({
        image: info.file.response
      })

      //   setImageUrl(url);
      // });
    }
  };
  if (loading) {
    message.loading("Đang tải")
  }
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const payload = { ...values, price: +values.price, newPrice: +values.newPrice };
    productAdd(payload);
    message.success("Thêm sản phẩm thành công", () => { navigate("/admin/cellphone") })
    navigate("/admin/cellphone");
  }
  const onFinishFailed = () => {
    message.error("Hãy điền đầy đủ các trường")
  }
  if (!category) {
    return <StyledSpace >
      <Spin size="large" />
    </StyledSpace>
  }
  if (categoryError) {
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
  const activeCate = category.filter((item: any) => item.status == 1);
  return (<Form
    name="productForm"
    layout='vertical'
    requiredMark={false}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    form={productForm}
  >
    <StyledFormContainer>
      <div>
        <Form.Item name='image' rules={[{ required: true }]} >
          {imageUrl ?
            <div style={{ "position": "relative" }}>
              <StyledCancelButton onClick={() => {
                productForm.setFieldsValue({
                  image: null
                });
                setImageUrl(null)
              }} />
              <img style={{ "width": "100%" }} src={imageUrl} alt="" />
            </div> : <StyledUploadContainer>

              <Upload
                action="https://angular-server.vercel.app/api/upload"
                headers={{
                  authorization: 'authorization-text',
                  contentType: "multipart/form-data",
                  accept: "application/json"
                }}
                name="image"
                maxCount={1}
                onChange={handleChange}
                beforeUpload={beforeUpload}
              >
                <StyledAddButton>
                  <FaPlus />
                </StyledAddButton>
              </Upload>
              <span>Thêm ảnh</span>


            </StyledUploadContainer>}
        </Form.Item>
        <hr />
        <Form.Item
          name="shortDescription"
          label="Mô tả ngắn"
          rules={[{ required: true }]}
        ><StyledFormInput />
        </Form.Item>
      </div>
      <div>
        <span>Thông tin sản phẩm</span>
        <hr />
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          rules={[{ required: true }]}
        ><Input />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá sản phẩm"
              rules={[{ required: true }, {
                pattern: /^(?:\d*)$/,
                message: "Giá sản phẩm bắt buộc phải là 1 số",
              },]}
              validateTrigger="onBlur"
            ><Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="newPrice"
              label="Giá khuyến mãi"
              rules={[{ required: true }, {
                pattern: /^(?:\d*)$/,
                message: "Giá khuyến mãi bắt buộc phải là 1 số",
              },]}
              validateTrigger="onBlur"
            ><Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="category"
          label="Danh mục"
          initialValue={activeCate[0]._id}
          wrapperCol={{ span: 12 }}
        >
          <StyledFormSelect  >
            {activeCate.map((item: categoryType) => <Option key={item._id} value={item._id}>{item.name}</Option>)}
          </StyledFormSelect>
        </Form.Item>
        <Form.Item name="feature"
          label="Đặc điểm nổi bật">
          <TextArea rows={4} style={{ "borderRadius": "5px" }} />
        </Form.Item>
        <Form.Item name="description"
          label="Mô tả dài">
          <TextArea rows={4} style={{ "borderRadius": "5px" }} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12 }}>
          <Button type="primary" htmlType="submit" style={{ "borderRadius": "5px" }}>
            {id.length == 0 ? "Thêm mới" : "Cập nhật"}
          </Button>
        </Form.Item>
      </div>

    </StyledFormContainer>
  </Form >
  )
}

export default ProductForm