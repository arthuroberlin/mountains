import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const TheNumber = styled.span`    
    position: absolute;
    margin-top: -80px;
    margin-left: -60px;
    
    font-family: Gilroy;
    font-weight: bold;
    font-size: 240px;
    line-height: 240px;
    opacity: 0.1;

    @media screen and (max-width: 1200px) {
        display: flex;
    }

    @media screen and (max-width: 900px) {
        margin-top: -50px;
        margin-left: 20px;

        font-size: 200px;
        line-height: 240px;
    }

    @media screen and (max-width: 600px) {
        margin-top: -80px;
        margin-left: 10px;

        font-size: 180px;
        line-height: 240px;
    }
    `
export default function Number(props) {
    return (
        <TheNumber>{props.number}</TheNumber>
    )
}
