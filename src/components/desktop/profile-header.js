import React from 'react';
import styled from '@emotion/styled';


const ProfileHeader = () => {
    return (
        <HeaderBox>
            <Container>
                <ImageContainer>
                    <img src="/images/headshot.jpg" alt="Therin Mody" width='100px' height='100px' />
                </ImageContainer>
            </Container>
            <Container>
                <ProfileContent>
                    <p><b>Therin Mody</b> <br />
                        <i>Full Stack Web Developer</i> <br />
                        <img src="/images/github.jpg" alt="Go to Therin's Github" width='40px' height='40px' />
                        <img src="/images/linkedIn.jpg" alt="Go to Therin's LinkedIn" width='40px' height='40px' />
                    </p>
                </ProfileContent>
            </Container>
        </HeaderBox>
    );

};

export default ProfileHeader;

const HeaderBox = styled.div({
    //border: '3px solid #BC986A',
});

const Container = styled.div({
    marginLeft: '2%',
    position: 'relative',
    display: 'inline-block',
});

const ImageContainer = styled.div({
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #BC986A',
    backgroundColor: '#FFFFFF',
});

const ProfileContent = styled.div({
    fontFamily: 'Helvetica',
    color: '#FFFFFF',
    fontSize: '180%',
});