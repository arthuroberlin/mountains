import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Logo from '../header/components/Logo';
import MakeWithLove from '../structure/components/MakeWithLove';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;    
    flex-direction: row;
    flex-wrap: wrap;
    
    width: 100%;

    text-align: left;
    `
const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1200px) {
        width: 100%;
        padding-top: 50px;:
    }
    `
const Column2 = styled.div`
    @media (max-width: 1200px) {
        width: 100%;
        padding-top: 50px;:
    }
    `
const Column3 = styled.div`
    @media (max-width: 1200px) {
        width: 100%;
        padding-top: 50px;:
    }
    `
const Text = styled.p`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;

    width: 60%;
    `
const Copyright = styled.p`
    display: flex;
    align-items: flex-end;
    
    height: 100%;

    font-family: Gilroy;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    opacity: 0.5;
    `
const TitleColumn = styled.span`
    display: flex;
    padding-bottom: 25px;
    
    font-family: Gilroy;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #FBD784;
    `
const LinksColumn = styled.li`
    padding-bottom: 15px;
    
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    `

export default function Footer() {
    return (
        <div className="site__wrapper">
            <Wrapper>
                <Column1>
                    <Logo/>
                    <Text>Get out there & discover your next slope, mountain & destination !</Text>
                    <Copyright>Copyright 2019 MNTN, Inc. Terms & Privacy</Copyright>
                </Column1>
                <Column2>
                    <TitleColumn>More on The Blog</TitleColumn>
                    <ul>
                        <LinksColumn>About MNTN</LinksColumn>
                        <LinksColumn>Contributors & Writers</LinksColumn>
                        <LinksColumn>Write For Us</LinksColumn>
                        <LinksColumn>Contact US</LinksColumn>
                        <LinksColumn>Privacy Policy</LinksColumn>
                    </ul>
                </Column2>
                <Column3>
                    <TitleColumn>More on MNTN</TitleColumn>
                    <ul>
                        <LinksColumn>The Team</LinksColumn>
                        <LinksColumn>Jobs</LinksColumn>
                        <LinksColumn>Press</LinksColumn>
                    </ul>
                </Column3>
                <MakeWithLove/>
            </Wrapper>
        </div>
    )
}
