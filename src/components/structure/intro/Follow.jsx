import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES  /-/-/-/-/-/-/-/-/-/ */
import TwitterImg from '../../../assets/img/icons/twitter.svg';
import InstagramImg from '../../../assets/img/icons/instagram.svg';

/* \-\-\-\-\-\-\-\-\-\ STYLES  /-/-/-/-/-/-/-/-/-/ */
const FollowUs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    height: 130px;
    
    position: absolute;
    top: 39%;
    left: 35px;

    @media (max-width: 1200px) {
        flex-direction: inherit;
        top: initial;
        bottom: 0vh;
        left: 15%;
    } 

    @media (max-width: 600px) {
        left: 10px;
    } 
`
const Text = styled.span`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    transform: rotate(90deg);

    @media screen and (max-width: 1200px) {
        padding-right: 12px;
        transform: rotate(0deg);
    } 
    `
const Twitter = styled.img`
    display: block;
    width: 20px;
    height: 20px;

    padding-top: 25px;
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 0px;
        padding-right: 12px;
    } 
    `
const Instagram = styled.img`
    display: block;
    width: 20px;
    height: 20px;

    padding-top: 55px;
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 0px;
        padding-right: 12px;
    } 
    `

export default function Follow() {
    return (
        <FollowUs>
            <Text>Follow us</Text>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram src={InstagramImg} alt="Instagram logo"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter src={TwitterImg} alt="Twitter logo"/>
            </a>
        </FollowUs>
    )
}
