import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';

import CardItem from './CardItem';
import Divider from "../../UI/Items/Divider";

const Wrapper = styled.div`
    margin-top: 20px;
`;

const ListDestinations = props => {
    return (
        <Wrapper>
            <Divider>{props.title}</Divider>
            <Row>
                {props.locations.map((location) => (
                    <Col span={4} key={location.id}>
                        <CardItem src={location.src} name={location.name} />
                    </Col>
                ))}
            </Row>
        </Wrapper>
    );
};

export default ListDestinations;