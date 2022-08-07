import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { StyledFormBox } from './styled-components'
import logoImage from "../assets/img/anhhtus-logo.png"
import { AuthRequest } from '../types/Auth'
import useAuth from '../hooks/useAuth'
import { register } from '../api/auth'
import { useNavigate } from 'react-router-dom'

type Props = {
  type: string
}

function AuthForm({ type }: Props) {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const onFinishFailed = () => {
    message.error("Bạn chưa điền đủ thông tin");
  }
  const onFinish = (values: AuthRequest) => {
    if (type == "login") {
      userLogin(values);
    }
    if (type == "register") {
      const signUp = async () => {
        await register(values).then(res => { message.success("Đăng ký tài khoản thành công"); navigate("/login") }).catch(err => { message.error("Đăng ký tài khoản thất bại") })
      }
      signUp();
    }
  }
  return (
    <StyledFormBox>
      <div style={{ "padding": "45px", "alignSelf": "center" }}>
        <Form
          name="authForm"
          layout='vertical'
          requiredMark={false}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Hãy điền email của bạn" }, { type: "email", message: "Hãy điền đúng định dạng email" }]}
          >
            <Input />
          </Form.Item>
          {(type == "register") && <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[{ required: true, message: "Hãy điền số điện thoại của bạn" }, {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Sai định dạng số điện thoại"
            }, { len: 10, message: "Số điện thoại cần phải có đủ 10 số" }]}
          >
            <Input />
          </Form.Item>}
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Hãy điền password của bạn" }, { min: 5, message: "Password phải có ít nhất 5 kí tự" }, { max: 12, message: "Password chỉ có tối đa 12 kí tự" }]}
          >
            <Input type='password' />
          </Form.Item>
          <Button danger type='primary' htmlType="submit" >{type == "login" ? "Đăng nhập" : "Đăng ký"}</Button>
        </Form>
        Hoặc đăng nhập bằng
        <div className="social">
          <div style={{ "background": "blue", "borderRadius": "50%", "width": "40px", "height": "40px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <FaFacebookF style={{ "color": "white", }} />
          </div>
          <div style={{ 'border': "1px solid gray", "background": "white", "borderRadius": "50%", "width": "40px", "height": "40px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <FcGoogle />
          </div>
        </div>
      </div>
      <div style={{ "background": "#F8F8F8", "padding": "45px", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <img src={logoImage} alt="" />
      </div>
    </StyledFormBox >
  )
}

export default AuthForm