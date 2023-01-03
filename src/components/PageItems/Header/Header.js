import React from 'react';
import { Col, Row, Space } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import TextEllipsis from '../../UI/Items/TextEllipsis';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Row>
                <Col span={16}>
                    <TextEllipsis><span>HELLO WORLD, MY NAME IS VVV VVV</span></TextEllipsis>
                </Col>
                {/* <Col span={12}>
                    <TextEllipsis><span>BICHVANCT2@GMAIL.COM</span></TextEllipsis>
                </Col> */}
                <Col span={6}>
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

export default Header;