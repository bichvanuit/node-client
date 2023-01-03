import React from 'react';
import InputFloat from '../UI/FormControl/InputFloat';
import LinkCustom from '../UI/Items/LinkCustom';
import { LoginOutlined } from '@ant-design/icons';
import { Row, Col, Checkbox, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import './SignIn.scss';

const SignIn = () => {

  const navigate = useNavigate();

  const onChangeCheckBoxHandler = () => {

  };

  const onClickLoginHandler = () => {
    navigate("/");
  };

  return (
    <Row className="login">
      <Col span={12} className="login__image"></Col>
      <Col span={12} className="login__content">
        <div className="login__content_header">
          <LoginOutlined />
          <div>
            <span>Login</span>
          </div>
        </div>
        <div className="login__content_body">
          <InputFloat type="text" name="username" placeholder="Email Address (*)" />
          <InputFloat type="password" name="password" placeholder="Password (*)" />
          <Checkbox onChange={ onChangeCheckBoxHandler }>Reminder me</Checkbox>
        </div>
        <div className="login__content_footer">
        <Button type="primary" block onClick={ onClickLoginHandler } >Login</Button>
          <Row className="login__content_footer_signup">
            <Col span={8} className="login__content_footer_signup_forget">
              {/* <Link>Forget password</Link> */}
            </Col>
            <Col span={16} className="login__content_footer_signup_signup">
              <LinkCustom><Link to="/sign-up">Don't have an password? Sign Up</Link></LinkCustom>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default SignIn;