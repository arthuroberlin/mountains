import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import LogoImg from '../../../assets/img/logo.svg';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Image = styled.img`
    width: 108px;
    height: 24px;
    `

export default function Logo() {
    return (
        <Image src={LogoImg} alt="Mountains Logo"/>
    )
}
