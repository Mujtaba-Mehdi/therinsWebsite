import React from 'react';
import styled from '@emotion/styled';

//The container imports
import Intro from '../../containers/intro';
import KeySkills from '../../containers/key-skills';
import Education from '../../containers/education';
import Activities from '../../containers/act-ints';
import Services from '../../containers/services';

const AboutContent = () => {
    return (
        <ContentContainer>
            <Intro />
            <Services />
            <KeySkills />  
            <Education />                   
            <Activities />
        </ContentContainer>
    );
};

export default AboutContent;

const ContentContainer = styled.div({
    width: '70%',
});