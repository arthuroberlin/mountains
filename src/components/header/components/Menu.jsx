import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    @media (max-width: 900px) {
        display: flex;
        justify-content: space-around;
        
        width: 100%;

        position: absolute;
        top: 80px;
    }
    `
const MenuLink = styled.span`
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 18px;
    line-height: 22px;
    position: relative;

    margin-right: 40px;

    &:hover {
        cursor: pointer;
    }

    &:after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        bottom: -5px;
        left: 0;
        background-color: #ffffff;
        transition: all 0.6s ease-in-out 0s;
    }

    &:hover:after {
        width: 100%;
    }

    @media (max-width: 900px) {
        margin-right: 0px;
    }
    `

export default function Menu() {
    return (
        <Wrapper>
            <MenuLink onClick={() => window.fullpage_api.moveTo(2)}>Equipment</MenuLink>
            <MenuLink onClick={() => window.fullpage_api.moveTo(3)}>About us</MenuLink>
            <MenuLink onClick={() => window.fullpage_api.moveTo(4)}>Blog</MenuLink>
        </Wrapper>
    )
}
