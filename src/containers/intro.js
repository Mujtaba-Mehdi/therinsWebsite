import React from 'react';
import styled from '@emotion/styled';

const Intro = () => {
    return (
        <ContentContainer id="intro">
            <ContentHeader><b>Introduction</b></ContentHeader>
            <IntroContent>
                
                <Message>
                    <i>Hello, I am Therin Mody.</i><br />
                    <br />
                    <i>I specialize in web development and design. I offer database adminstration services as well.</i><br />
                    <br />
                    <i>Currently accepting clients.</i><br />
                    <i>I would love to work with you!</i>
                </Message>

                <ProfilePic src="/images/profile.jpg" alt="Myself"/>

            </IntroContent>

            <hr />
        </ContentContainer>
    );
};

export default Intro;

const ContentContainer = styled.div({
    marginBottom: '2%',
});

const ContentHeader = styled.div({
    textAlign: 'center',
    textShadow: '0.5px 0.5px #000000',
    color: '#BC986A',
    fontSize: '300%',
    fontFamily: 'Helvetica',
    marginBottom: '5%',
});

const IntroContent = styled.div({
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
});

const ProfilePic = styled.img({
    width: '40%',
    marginLeft: '5%',
    borderRadius: '50%',
    border: '2px solid #BC986A',
    display: 'inline-block',
    verticalAlign: 'middle'
});

const Message = styled.div({
    width: '50%',
    display: 'inline-block',
    fontSize: '175%',
    verticalAlign: 'middle'
});