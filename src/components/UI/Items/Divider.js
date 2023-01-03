import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: #000000;
    text-shadow: 0 1px 1px #FFFFFF;
    margin-left: 20px;
`;

const Div = styled.div`
    background-color: #DADADA;
    height: 1px;
    margin: 0px 0px 20px;
`;

const Span = styled.span`
    display: block;
    width: 150px;
    height: 1px;
    background-color: #000000;
`;

const Divider = (props) => {
    return (
        <React.Fragment>
            <H1>{ props.children }</H1>
            <Div><Span /></Div>
        </React.Fragment>
    );
};

export default Divider;