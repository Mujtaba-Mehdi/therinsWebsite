import React from 'react';
import styled from '@emotion/styled';

const DesktopNav = () => {
    return (
        <>
            <NavBox>
                <Container>
                    <h1>Contact</h1>
                </Container>
                <Container>
                    <h1>Blog</h1>
                </Container>
                <Container>
                    <h1>Portfolio</h1>
                </Container>
                <Container>
                    <h1>About</h1>
                </Container>
            </NavBox>
        </>
    );

};

export default DesktopNav;

const NavBox = styled.div({
    //border: '3px solid #BC986A',
    width: '98%',
    float: 'right',
    display: 'block',
});

const Container = styled.div({
    marginRight: '5%',
    position: 'relative',
    display: 'inline-block',
    float: 'right',
    fontSize: '100%',
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
});