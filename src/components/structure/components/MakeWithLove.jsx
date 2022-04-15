import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES  /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div `
    display: flex;
    justify-content: flex-end;
    width: 100%;

    position: absolute;
    bottom: 25px;
    right:25px
    `
const Text = styled.span `
    font-family: Gilroy;
    font-size: 14px;
    letter-spacing: 0.5px;
    `

export default function MakeWithLove() {
    return (
        <Wrapper>
            <Text>Make with ❤️</Text>
        </Wrapper>
    )
}
