import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Number from './components/Number';
import GetStarted from './components/GetStarted';
import Title from './components/Title';
import Text from './components/Text';
import ReadMore from './components/ReadMore';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import ImageFile from '../../../assets/img/img-sections/2.png';

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
                    <Number number='02'/>
                    <GetStarted text='Hiking Essentials'/>
                    <Title text='Picking the right Hiking Gear !'/>
                    <Text
                        text='The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.'/>
                    <ReadMore/>
                </MainContainer>
                <div className="image-container-reverse">
                    <Image src={ImageFile} alt="A man looking multiple mountains."/>
                </div>
            </Wrapper>
        </div>
    )
}
