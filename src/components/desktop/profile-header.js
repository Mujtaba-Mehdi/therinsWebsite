import React from 'react';
import styled from '@emotion/styled';


const ProfileHeader = () => {
    return (
        <HeaderBox>
            <Container>
                <ImageContainer>
                    <img src="/images/headshot.jpg" alt="Therin Mody" width='150px' height='150px' />
                </ImageContainer>
            </Container>
            <Container>
                <ProfileContent>
                    <b>Therin Mody</b> <br />
                        <i>Full Stack Web Developer</i> <br />
                        <PicLink>
                            <a href="https://github.com/therinMody">
                                <img src="/images/github.jpg" alt="Go to Therin's Github" width='40px' height='40px' />
                            </a>
                        </PicLink>
                        <PicLink>
                            <a href="https://www.linkedin.com/in/therin-mody-3b16b51b5/">
                                <img src="/images/linkedIn.jpg" alt="Go to Therin's LinkedIn" width='40px' height='40px' />
                            </a>
                        </PicLink>
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


const PicLink = styled.div({
    display: 'inline-block',
    marginLeft: '1%',
    border: '3px solid #2887b8',
    borderRadius: '25%',
    overflow: 'hidden',
    ':hover': {
        border: '3px solid #FFFFFF',
    },
});