import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES  /-/-/-/-/-/-/-/-/-/ */
import BackgroundImg from '../../../assets/img/background/background.png';

/* \-\-\-\-\-\-\-\-\-\ STYLES  /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;

    z-index: -5;
    `
const Image = styled.img`
    width: 100%;
    height: 120vh;

    object-fit: cover;
    `

export default function Background() {
    return (
        <Wrapper>
            <Image src={BackgroundImg}/>
        </Wrapper>
    )
}
