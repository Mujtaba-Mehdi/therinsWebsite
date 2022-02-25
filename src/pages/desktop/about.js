import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout, AboutPage } from '../../components';

const About = () => {
    return (

        <>
            <DesktopLayout page={"About"} />
            <ContentContainer>
                <AboutPage/>
            </ContentContainer>
        </>
        
    );
};

export default About;

const ContentContainer = styled.div({
    
});