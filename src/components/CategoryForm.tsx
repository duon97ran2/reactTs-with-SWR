import { Button, Form, Input, message, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { read } from '../api/category'
import useCategory from '../hooks/useCategory'

type Props = {
  id: string
}

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
      form.setFieldsValue({ name: data.name })
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
        <Button type='primary' htmlType='submit' style={{ "borderRadius": "5px" }}>{props.id.length != 0 ? "Update" : "Add"}</Button>
      </Form>
    </div>
  )
}

export default CategoryForm