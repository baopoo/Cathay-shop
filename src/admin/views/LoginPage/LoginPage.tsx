import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useAuth } from "@/services";
import type { ISignInPayload } from "@/interfaces";

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const onFinish = (values: ISignInPayload) => {
    signIn(values);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-7">
        <span className="text-gray-900 mr-1">CATHAY</span>
        <span className="text-gray-500 font-normal">STORE</span>
      </div>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: "360px", width: "100%" }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
