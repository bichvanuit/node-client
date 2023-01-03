import React from 'react';
import InputFloat from '../UI/FormControl/InputFloat';
import LinkCustom from '../UI/Items/LinkCustom';
import { LoginOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';

import { Link, useNavigate } from 'react-router-dom';

import './SignUp.scss';

const SignUp = () => {
    const navigate = useNavigate();

    const onClickSignUpHandler = () => {
        navigate("/");
    };

    return (
        <div className="sign-up">
            <div className="sign-up__content">
                <div className="sign-up__header">
                    <LoginOutlined />
                    <div>
                        <span>Sign in</span>
                    </div>
                </div>
                <div className="sign-up__body">
                    <Row className="sign-up__body_name">
                        <Col span={12}>
                            <InputFloat type="text" name="firstname" placeholder="First Name (*)" />
                        </Col>
                        <Col span={12}>
                            <InputFloat type="text" name="lastname" placeholder="Last Name (*)" />
                        </Col>
                    </Row>
                    <InputFloat type="text" name="email" placeholder="Email Address (*)" />
                    <InputFloat type="password" name="firstname" placeholder="Password(*)" />
                </div>
                <div className="sign-up__footer">
                    <Button type="primary" block onClick={ onClickSignUpHandler } >Sign Up</Button>
                    <div className="sign-up__footer_sign_in">
                        <LinkCustom><Link to="/login">Already have an account? Sign in</Link></LinkCustom>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;