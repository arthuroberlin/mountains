import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-family: Gilroy;
    font-weight: inherit;
    font-size: 18px;
    line-height: 32px;

    @media screen and (max-width: 1200px) {
        font-size: 16px;
        line-height: 24px;
    }
    `

export default function Text(props) {
    return (
        <Paragraph>{props.text}</Paragraph>
    )
}
