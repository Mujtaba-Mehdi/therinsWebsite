import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';


const DesktopNav = ({ page }) => {

    return (
        <>
            <NavBox>
                <Container>
                    {
                        page === "Contact" ?
                            (
                                <SelectedLink to="/contact">
                                    <h1>Contact</h1>
                                    <hr/>
                                </SelectedLink>
                            )
                            :
                            (
                                <NavLink to="/contact">
                                    <h1>Contact</h1>
                                </NavLink>
                            )
                    }
                </Container>
                <Container>
                    {
                        page === "Blog" ?
                            (
                                <SelectedLink to="/blog">
                                    <h1>Blog</h1>
                                    <hr/>
                                </SelectedLink>
                            )
                            :
                            (
                                <NavLink to="/blog">
                                    <h1>Blog</h1>
                                </NavLink>
                            )
                    }
                </Container>
                <Container>
                    {
                        page === "Portfolio" ?
                            (
                                <SelectedLink to="/portfolio">
                                    <h1>Portfolio</h1>
                                    <hr/>
                                </SelectedLink>
                            )
                            :
                            (
                                <NavLink to="/portfolio">
                                    <h1>Portfolio</h1>
                                </NavLink>
                            )
                    }
                </Container>
                <Container>
                    {
                        page === "About" ?
                            (
                                <SelectedLink to="/">
                                    <h1>About</h1>
                                    <hr/>
                                </SelectedLink>
                                
                            )
                            :
                            (
                                <NavLink to="/">
                                    <h1>About</h1>
                                </NavLink>
                            )
                    }
                </Container>
            </NavBox>
        </>
    );

};

export default DesktopNav;

const NavBox = styled.div({
    width: '98%',
    float: 'right',
    display: 'block',
});

const Container = styled.div({
    marginRight: '5%',
    position: 'relative',
    display: 'inline-block',
    float: 'right',
    fontSize: '75%',
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
});

const NavLink = styled(Link)({
    textAlign: 'center',
    color: '#FFFFFF',
    textDecoration: 'none',
    ':hover': {
        color: '#FBEEC1',
    },
});

const SelectedLink = styled(Link)({
    color: '#FBEEC1',
    textDecoration: 'none',
    ':hover': {
        color: '#FFFFFF',
    },
});