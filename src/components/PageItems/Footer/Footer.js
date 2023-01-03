import React from 'react';
import { Col, Row, Space } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <Row gutter={16}>
                <Col className="gutter-row" span={16}>
                    <span>Copyright ©2022 All rights reserved</span>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Space>
                        <FacebookFilled />
                        <InstagramFilled />
                        <LinkedinFilled />
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;