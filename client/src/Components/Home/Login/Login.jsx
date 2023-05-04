import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  AppleFilled,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import styles from "./Login.module.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <h1>Log in</h1>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className={styles.loginFormForgot} href="/">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginFormButton}
            >
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <div className={styles.socialLoginContainer}>
              <Button className={styles.socialLoginButton}>
                <GoogleOutlined className={styles.socialLoginIcon} />
                {/* <img
                  
                  src="/google.png"
                  alt="Google"
                /> */}
                Continue with Google
              </Button>
              <Button className={styles.socialLoginButton}>
                <AppleFilled className={styles.socialLoginIcon} />
                {/* <img
                  
                  src="/apple.png"
                  alt="Apple"
                /> */}
                Continue with Apple
              </Button>
              <Button className={styles.socialLoginButton}>
                <FacebookOutlined className={styles.socialLoginIcon} />
                {/* <img
                  
                  src="/facebook.png"
                  alt="Facebook"
                /> */}
                Continue with Facebook
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
