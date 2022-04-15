import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    margin: 32px 0px;

    @media screen and (max-width: 600px) {
        margin: 16px 0px;
        padding-bottom: 10px;
    }
    `
const Bar = styled.div`
    width: 72px;
    height: 2px;
    background: #FBD784;
    `
const Text = styled.span`
    font-family: Gilroy;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #FBD784;

    padding-left: 30px;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 22px;
    }
    `
export default function GetStarted(props) {
    return (
        <div>
            <Wrapper>
                <Bar/>
                <Text>{props.text}</Text>
            </Wrapper>
        </div>
    )
}
