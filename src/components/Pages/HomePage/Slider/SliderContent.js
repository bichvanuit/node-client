import React from 'react';
import styled from 'styled-components';

import './SliderContent.scss';

const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    background-image: url("${props => props.src}");
    background-size: cover;
`;

const SliderContent = (props) => {
    return (
        <div className="slider-content">
            <Wrapper src={ props.src }>
            <div className="slider-content__summary">
                    <span>{props.name}</span>
                </div>
            </Wrapper>
        </div>
    );
};

export default SliderContent