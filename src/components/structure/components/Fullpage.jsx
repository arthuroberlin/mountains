import React from 'react';

/* \-\-\-\-\-\-\-\-\-\ STRUCTURE /-/-/-/-/-/-/-/-/-/ */
import ReactFullpage from '@fullpage/react-fullpage';

/* \-\-\-\-\-\-\-\-\-\ COMPONENTS /-/-/-/-/-/-/-/-/-/ */
import Header from '../../header/Header';
import Background from './Background';
import Footer from '../../footer/Footer';

/* \-\-\-\-\-\-\-\-\-\ SECTIONS /-/-/-/-/-/-/-/-/-/ */
import Intro from '../intro/Intro';
import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import GradientBackground from './GradientBackground';

const Fullpage = () => (
    <ReactFullpage
        scrollingSpeed={1000}
        navigation={true}

        render={() => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section intro">
                        <Header/>
                        <Intro/>
                        <Background/>
                    </div>
                    <div className="section">
                        <GradientBackground/>
                        <Section1/>
                    </div>
                    <div className="section">
                        <Section2/>
                    </div>
                    <div className="section">
                        <Section3/>
                    </div>
                    <div className="section">
                        <Footer/>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
