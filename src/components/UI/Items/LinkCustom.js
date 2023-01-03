import React from 'react';
import styled from 'styled-components';

const LinkStyle = styled.span`
    color: #007bff;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
`;

const LinkCustom = props => {
    return (<LinkStyle className={props.className}>{ props.children }</LinkStyle>);
}

export default LinkCustom;