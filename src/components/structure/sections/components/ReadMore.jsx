import React from 'react';
import styled from 'styled-components';

/* \-\-\-\-\-\-\-\-\-\ IMAGES /-/-/-/-/-/-/-/-/-/ */
import ArrowIcon from '../../../../assets/img/icons/arrow-down.png'

/* \-\-\-\-\-\-\-\-\-\ STYLES /-/-/-/-/-/-/-/-/-/ */
const Wrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 933px) {
        justify-content: center;
    }
    `
const Text = styled.span`
    font-family: Gilroy;
    font-size: 18px;
    line-height: 22px;
    color: #FBD784;

    padding-right: 20px;
    `
const Icon = styled.img`
    transform: rotate(-90deg);
    `

export default function ReadMore() {
    return (
             <Wrapper>
                <Text>read more</Text>
                <Icon src={ArrowIcon} alt="Icon of an arrow pointing down."/>
            </Wrapper>
    )
}
