import React from 'react';
import styled from '@emotion/styled';


const ProfileHeader = () => {
    return (
        <>
            <Container>
                <ImageContainer>
                    <img src="/images/headshot.jpg" alt="Therin Mody" width='100px' height='100px' />
                </ImageContainer>
            </Container>
            <Container>
                <ProfileContent>
                    <b>Therin Mody</b> <br />
                        <i>Full Stack Web Developer</i> <br />
                        <PicLink>
                            <a href="https://github.com/therinMody" target="_blank" rel="noreferrer">
                                <img src="/images/git.png" alt="Go to Therin's Github" width='40px' height='40px' />
                            </a>
                        </PicLink>
                        <PicLink>
                            <a href="https://www.linkedin.com/in/therin-mody-3b16b51b5/" target="_blank" rel="noreferrer">
                                <img src="/images/linkedin.png" alt="Go to Therin's LinkedIn" width='45px' height='45px' />
                            </a>
                        </PicLink>
                </ProfileContent>
            </Container>
        </>
    );

};

export default ProfileHeader;

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
    verticalAlign: 'middle',
    marginLeft: '1%',
    //border: '3px solid #2887b8',
    borderRadius: '25%',
    overflow: 'hidden',
    //':hover': {
        //border: '3px solid #FFFFFF',
    //},
});