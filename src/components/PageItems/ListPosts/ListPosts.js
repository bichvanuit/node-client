import React from 'react';
import { Col, Row } from 'antd';
import Divider from "../../UI/Items/Divider";
import styled from 'styled-components';

import './ListPosts.scss';

const Img = styled.div`
    width: 100%;
    height: 140px;
    background-image: url('${props => props.src}');
    background-size: cover;
    text-align: center;
    color: #ffffff;
    line-height: 140px;
    font-size: 20px;
    font-style: bold;
`;

const ListPosts = (props) => {
    return (
        <div className="list-item">
            <Divider>{ props.title }</Divider>
            {
                props.posts.map((data) => {
                    return (<Row gutter={16} key={ data.id }>
                        <Col className="gutter-row" span={6}>
                            <div className="list-item__image">
                                <Img src={ data.src } />
                            </div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className="list-item__content">
                                <div className="list-item__content_title">
                                    <span>{ data.title }</span>
                                </div>
                                <div className="list-item__content_description">
                                    <span>{ data.description }</span>
                                </div>
                                <div className="list-item__content_read_more">
                                    <a href="#">Xem thêm</a>
                                </div>
                            </div>
                        </Col>
                        <Divider></Divider>
                    </Row>)
                })
            }
        </div>
    );
};

export default ListPosts;