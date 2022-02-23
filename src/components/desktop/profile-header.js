import React from 'react';
import styled from '@emotion/styled';


const ProfileHeader = () => {
    return (
        <Container>
            <ImageContainer>
                <img src="/images/headshot.jpg" alt="Therin Mody"/>
            </ImageContainer>

            <ProfileContent >
                <h1>Therin Mody</h1>
            </ProfileContent>

        </Container>
    );

};

export default ProfileHeader;

const Container = styled.div({
    marginLeft: '5%',
    width: '35%',
    position: 'relative',
});

const ImageContainer = styled.div({
    borderRadius: '60%',
    width: 'fit-content',
    overflow: 'hidden',
    position: 'absolute',
    left: '0%',
});

const ProfileContent = styled.div({
    position: 'absolute',
    width: '100%',
    left: '30%',
    top: '5%',
});