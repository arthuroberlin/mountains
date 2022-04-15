import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import ArrowDown from '../../../assets/img/icons/arrow-down.png';
import Follow from './Follow';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    margin-top: 20vh;

    @media screen and (max-width: 1200px) {
        margin-left: 10%;      
    }   

    @media screen and (max-width: 600px) {
        margin-left: 0%;      
        margin-top: 50%;   
    } 
    `
const BarText = styled.div`
    display: flex;
    align-items: center;
    
    margin: 32px 0px;
    `
const Bar = styled.div`
    width: 72px;
    height: 2px;
    
    background: #FBD784;
    `
const Text = styled.h2`
    font-family: Gilroy;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #FBD784;

    padding-left: 30px;
    `
const Title = styled.h1`
    font-family: Chronicle Display;
    font-weight: 600;
    font-size: 88px;
    line-height: 100px;
    text-transform: capitalize; 

    @media screen and (max-width: 600px) {
        font-size: 60px; 
        line-height: 65px;
    } 
    `
const ScrollDown = styled.div`
    display: flex;
    align-items: center;
    
    margin-top: 32px;
    `
const ScrollText = styled.span`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    `
const ScrollIcon = styled.img`
    padding-left: 20px;
`

export default function Intro() {
    return (
        <div className="site__wrapper intro-wrapper">
            <Follow/>
            <Wrapper>
                <BarText>
                    <Bar/>
                    <Text>A Hiking guide</Text>
                </BarText>

                <Title>Be prepared for the <br/> Mountains and beyond !</Title>

                <ScrollDown>
                    <ScrollText>scroll down</ScrollText>
                    <ScrollIcon src={ArrowDown} alt="Icon for scroll"/>
                </ScrollDown>
            </Wrapper>
        </div>
    )
}
