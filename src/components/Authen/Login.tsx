import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, type FormProps } from 'antd';
import { motion } from "framer-motion";
// import robotDoctor from "../../assets/images/robot_doctor.svg";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import '../../styles/Login.scss';

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: boolean;
};

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={`login-page`}>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        {/* Đăng ký */}
        <div className="form-container sign-up-container">
          <Form
            name="signup"
            className="form-box"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <h1>Tạo tài khoản</h1>
            <div className="social-container">
              <a href="#" className="social"><InstagramOutlined /></a>
              <a href="#" className="social"><GooglePlusOutlined /></a>
              <a href="#" className="social"><FacebookOutlined /></a>
            </div>
            <span>Hoặc sử dụng email của bạn</span>

            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
              <Input placeholder="Tên" />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Button htmlType="submit">Đăng ký</Button>
          </Form>
        </div>

        {/* Đăng nhập */}
        <div className="form-container sign-in-container">
          <Form
            name="signin"
            className="form-box"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <h1>Đăng nhập</h1>
            <div className="social-container">
              <a href="#" className="social"><InstagramOutlined /></a>
              <a href="#" className="social"><GooglePlusOutlined /></a>
              <a href="#" className="social"><FacebookOutlined /></a>
            </div>
            <span>Hoặc sử dụng tài khoản email của bạn</span>

            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
              <Input placeholder="Tên đăng nhập" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Ghi nhớ tôi</Checkbox>
            </Form.Item>

            <Form.Item>
              <a className="login-form-forgot" href="#">
                Quên mật khẩu?
              </a>
            </Form.Item>

            <Button htmlType="submit">Đăng nhập</Button>
          </Form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng bạn trở lại!</h1>
              <p>Đăng nhập để kết nối cùng chúng tôi</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào!</h1>
              <p>Điền thông tin để tạo tài khoản và bắt đầu hành trình</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <footer>
          <p>Deadline mục tiêu: Tháng 10/2023!</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
