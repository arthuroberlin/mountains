import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Number from './components/Number';
import GetStarted from './components/GetStarted';
import Title from './components/Title';
import Text from './components/Text';
import ReadMore from './components/ReadMore';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import ImageFile from '../../../assets/img/img-sections/1.png';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row;
    justify-content: space-around;
    
    width: 100%;
    `
const MainContainer = styled.div`
    width: 50%;
    text-align: left;

    @media screen and  (max-width: 900px) {
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        margin-top: 40px;
    }
    `
const Image = styled.img`
    max-width: 520px;
    
    @media screen and (max-width: 1200px) {
        width: 400px;
    }

    @media screen and (max-width: 900px) {
        padding-top: 25px;
    }

    @media screen and (max-width: 600px) {
        width: 255px;    
    }
`

export default function Section1() {
    return (
        <div className="site__wrapper">
            <Wrapper>
                <MainContainer>
                    <Number number='01'/>
                    <GetStarted text='Get Started'/>
                    <Title text='What level of hiker are you ?'/>
                    <Text
                        text='Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?'/>
                    <ReadMore/>
                </MainContainer>
                <div>
                    <Image src={ImageFile} alt="A man walk on a mountain, alone."/>
                </div>
            </Wrapper>
        </div>
    )
}
