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
    <div className={styles.login_wrapper}>
      <div className={styles.login_container}>
        <h1>Log in</h1>
        <Form
          name="normal_login"
          className={styles.login_form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item>
            <Input
              className={styles.input}
              prefix={<UserOutlined className={styles.site_form_item_icon} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              className={styles.input}
              prefix={<LockOutlined className={styles.site_form_item_icon} />}
              type="password"
              placeholder="Password"
            />
            <Form.Item>
              <a className={styles.login_form_forgot} href="/">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.login_form_button}
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
              <Checkbox className={styles.checkbox}>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <span className={styles.span}>Don't have an account yet?</span>

            <Button
              type="primary"
              htmlType="submit"
              className={styles.register_form_button}
            >
              Register
            </Button>
          </Form.Item>

          <Form.Item>
            <div className={styles.social_login_container}>
              <div className={styles.or}>or continue with:</div>
              <Button className={styles.social_login_button}>
                {/* <GoogleOutlined
                  className={`${styles.social_login_icon} ${styles.google_icon}`}
                /> */}
                <img
                  src="./img/icons/google.png"
                  alt="Google"
                  className={styles.social_login_icon}
                />
                Google
              </Button>
              <Button className={styles.social_login_button}>
                {/* <AppleFilled
                  className={`${styles.social_login_icon} ${styles.apple_icon}`}
                /> */}
                <img
                  src="./img/icons/apple-logo.png"
                  alt="Apple"
                  className={styles.social_login_icon}
                />
                Apple
              </Button>
              <Button className={styles.social_login_button}>
                {/* <FacebookOutlined
                  className={`${styles.social_login_icon} ${styles.facebook_icon}`}
                /> */}
                <img
                  src="./img/icons/facebook.png"
                  alt="Google"
                  className={styles.social_login_icon}
                />
                Facebook
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
