import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Logo from './components/Logo';
import Menu from './components/Menu';
import Account from './components/Account';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 64px;
    margin-left: 80px;
    margin-right: 80px;

    z-index: 5;

    @media (max-width: 900px) {
        justify-content: space-around;
        margin-top: 20px;
        margin-left: 0px;
        margin-right: 0px;
    }
`

export default function header() {
    return (
        <Header id="header">
            <Logo />
            <Menu />
            <Account />
        </Header>
    )
}
