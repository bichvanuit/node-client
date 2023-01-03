import React from "react";
import { Row, Col } from 'antd';
import styled from "styled-components";
import Divider from "../../../UI/Items/Divider";

const images = [
    "https://image.thanhnien.vn/w1024/Uploaded/2022/bfznsfyr-bn/2022_03_27/the-aston-residence-1-7474.jpg",
    "https://vcdn1-vnexpress.vnecdn.net/2021/03/19/NhaTrang-KhoaTran-23-1616121015.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=l6y5sEG_OLlJ0FP1OHwVGw",
    "https://media.vneconomy.vn/images/upload/2022/04/30/nha-trang1.jpg",
    "https://pix10.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=1920x822",
    "https://vietnaminsider.vn/wp-content/uploads/2022/03/e5.jpg"
];

const Wrapper = styled.div`
    height: ${props => props.height};
    background-image: url("${props => props.src}");
    background-size: cover;
    margin: 2px;
`;

const ImageTravel = () => {
    return (
        <React.Fragment>
            <Divider>Top hình ảnh đẹp về Nha Trang</Divider>
            <div style={{ "margin": "auto 100px" }}>
                <Row>
                    <Col span={12}><Wrapper src={images[0]} height="300px" /></Col>
                    <Col span={12}>
                        <Row>
                            <Col span={24}>
                                <Wrapper src={images[1]} height="150px" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Wrapper src={images[2]} height="150px" />
                            </Col>
                            <Col span={12}>
                                <Wrapper src={images[3]} height="150px" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Wrapper src={images[4]} height="220px" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default ImageTravel;