import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Title = styled.h2`
    font-family: Chronicle Display;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;

    @media screen and (max-width: 1200px) {
        font-size: 54px;
        line-height: 70px;
    }

    @media screen and (max-width: 900px) {
        font-size: 44px;
        line-height: 42px; 
    }
    
    @media screen and (max-width: 600px) {
        font-size: 38px;
        line-height: 46px; 
    }
    `
export default function Text(props) {
    return (
        <Title>{props.text}</Title>
    )
}
