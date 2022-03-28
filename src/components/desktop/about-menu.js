import React from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-scroll'

const AboutMenu = () => {
    return (
        <ContentContainer>
            <MenuTitle>
                <b>Index</b>
            </MenuTitle>
            <hr />
            <MenuButton>
                <Link activeClass="active" to="top" spy={true} smooth={true}>- Intro</Link>
            </MenuButton>
            <MenuButton>
                <Link to="services" spy={true} smooth={true}>- Services</Link>
            </MenuButton>
            <MenuButton>
                <Link to="keySkills" spy={true} smooth={true}>- Key Skills</Link>
            </MenuButton> 
            <MenuButton>
                <Link to="certifications" spy={true} smooth={true}>- Certifications</Link>
            </MenuButton>                     
            <MenuButton>
                <Link to="activities" spy={true} smooth={true}>- Interests</Link>
            </MenuButton>
        </ContentContainer>
    );

};

export default AboutMenu;

const ContentContainer = styled.div({
    marginLeft: '58%',
    width: '19%',
    border: '3px solid #BC986A',
    borderRadius: '1em',
    padding: '1%',
    background: 'linear-gradient(90deg, #d9d9d9, #f5f5f5, #ffffff, #f5f5f5, #d9d9d9)',
    position: 'fixed',
});

const MenuTitle = styled.div({
    fontSize: '175%',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: '#BC986A',
    textShadow: '0.5px 0.5px #000000',
});

const MenuButton = styled.div({
    fontSize: '125%',
    fontFamily: 'monospace',
    marginBottom: '2%',
    ':hover': {
        color: '#BC986A',
        cursor: 'pointer',
    }
});

