import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout, AboutMenu, AboutContent } from '../../components';

const About = () => {
    return (

        <>
            <DesktopLayout page={"About"} />
            <ContentContainer>
                <Title>
                    <TitleContent>
                        <b>About</b>
                    </TitleContent>
                </Title>
                <AboutContainer>
                    <hr />
                    <br />
                    <AboutMenu />
                    <AboutContent />                   
                </AboutContainer>
                
            </ContentContainer>
        </>
        
    );
};

export default About;

const ContentContainer = styled.div({
    marginTop: '2%',
    width: '100%',
    marginBottom: '5%'
});

const Title = styled.div({
    width: '100%',
    fontSize: '400%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    verticalAlign: 'middle',
});

const TitleContent = styled.div({
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});

const AboutContainer = styled.div({
    width: '80%',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '25%',
});