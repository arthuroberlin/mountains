import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import AccountImg from '../../../assets/img/icons/account.svg';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Container = styled.div`
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    width: 24px;
    height: 24px;

    &:hover {
        cursor: pointer;
    }
`
const Text = styled.span`     
    font-family: Gilroy;
    font-size: 18px;
    line-height: 21px;
    font-weight: bold;
    letter-spacing: 2px;

    margin-left: 8px;  

    &:hover {
        cursor: pointer;
    }
`
export default function Account() {
    return (
        <Container>
            <Logo src={AccountImg} alt="Account icon"/>
            <Text>Account</Text>
        </Container>
    )
}
