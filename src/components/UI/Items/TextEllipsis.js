import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;


const TextEllipsis = (props) => {
    return (
        <Wrapper>{ props.children }</Wrapper>
    );
};

export default TextEllipsis;