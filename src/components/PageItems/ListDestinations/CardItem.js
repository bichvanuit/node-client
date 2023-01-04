import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import 'antd/dist/antd.min.css';

const { Meta } = Card;
const Img = styled.img`
  height: 150px;
`;
const Wrapper = styled.div`
  padding: 10px;
`;


const CardItem = (props) => {

  const navigate = useNavigate();
  const onClickCardHandler = () => {
    navigate("/travel-experience");
  }

  return (
    <Wrapper>
      <Card
        hoverable
        style={{
          width: "100%",
        }}
        cover={<Img alt="example" src={props.src} />}

        onClick={onClickCardHandler}
      >
        <Meta title={props.name} description="www.instagram.com" />
      </Card>
    </Wrapper>
  )
};

export default CardItem;