import { Button, Form, Input, message, Row, Select } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { read } from '../api/category'
import useCategory from '../hooks/useCategory'
import { AiOutlineAudio, AiOutlineDesktop, AiOutlineFundProjectionScreen, AiOutlineLaptop, AiOutlinePhone, AiOutlineSetting, AiOutlineTablet } from "react-icons/ai"
import { StyledFormSelect } from './styled-components'

type Props = {
  id: string
}

const { Option } = Select
const CategoryForm = (props: Props) => {
  const { addCategory, updateCategory } = useCategory();
  const [form] = Form.useForm();
  if (props.id.length != 0) {
    const { data, error } = useSWR(`/category/${props.id}`);
    if (!data) {
      message.loading("Đang tải");
    }
    if (error) {
      message.error("Không lấy được dữ liệu sản phẩm")
    }
    if (data) {
      form.setFieldsValue(data)
    }
  }
  const navigate = useNavigate();
  const onFinish = (values: any) => {

    if (props.id.length !== 0) {
      updateCategory(props.id, values);
      navigate("/admin/category");

    }
    else {
      addCategory({ ...values, status: 1 })
    }
  };
  const onFinishFailed = () => { }
  return (
    <div style={{ "margin": "20px 0px" }}>
      <Form name="productForm"
        layout='inline'
        requiredMark={false}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          name="name"
          label="Tên danh mục"
          rules={[{ required: true, message: "Vui lòng điền tên danh mục" }]}
        ><Input />
        </Form.Item>
        <Form.Item
          name="icon"
          label="Biểu tượng danh mục"
          rules={[{ required: true, message: "Vui lòng chọn biểu tượng danh mục" }]}
        >
          <StyledFormSelect>
            <Option value="AiOutlineAudio">
              <AiOutlineAudio />
            </Option>
            <Option value="AiOutlineLaptop">
              <AiOutlineLaptop />
            </Option>
            <Option value="AiOutlinePhone">
              <AiOutlinePhone />
            </Option>
            <Option value="AiOutlineSetting">
              <AiOutlineSetting />
            </Option>
            <Option value="AiOutlineTablet">
              <AiOutlineTablet />
            </Option>
            <Option value="AiOutlineFundProjectionScreen">
              <AiOutlineFundProjectionScreen />
            </Option>
            <Option value="AiOutlineDesktop">
              <AiOutlineDesktop />
            </Option>
          </StyledFormSelect>
        </Form.Item>
        <Button type='primary' htmlType='submit' style={{ "borderRadius": "5px" }}>{props.id.length != 0 ? "Update" : "Add"}</Button>
      </Form>
    </div>
  )
}

export default CategoryForm