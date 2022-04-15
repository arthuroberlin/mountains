import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Number from './components/Number';
import GetStarted from './components/GetStarted';
import Title from './components/Title';
import Text from './components/Text';
import ReadMore from './components/ReadMore';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import ImageFile from '../../../assets/img/img-sections/3.png';

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

    @media screen and (max-width: 900px) {
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
                    <Number number='03'/>
                    <GetStarted text='where you go is the key'/>
                    <Title text='Understand Your Map & Timing'/>
                    <Text
                        text='To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.'/>
                    <ReadMore/>
                </MainContainer>
                <div>
                    <Image src={ImageFile} alt="A hand holding a compass on the background of a mountain range."/>
                </div>
            </Wrapper>
        </div>
    )
}
