import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES  /-/-/-/-/-/-/-/-/-/ */
const Gradient = styled.div`
    position: absolute;
    left: 0px;
    top: -24vh;
    
    width: 100%;
    height: 45vh;

    background: linear-gradient(180deg,rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);
    z-index: -1;
    `

export default function GradientBackground() {
    return (
        <Gradient/>
    )
}
