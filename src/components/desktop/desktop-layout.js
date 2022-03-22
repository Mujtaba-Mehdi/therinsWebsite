import React from 'react';
import styled from '@emotion/styled';
import { DesktopHeader, DesktopFooter } from '../../components';


const DesktopLayout = ({page}) => {
    return (
        <>
            <HeaderContainer>
                <DesktopHeader page={page}/>
            </HeaderContainer> 

            <FooterContainer>
                <DesktopFooter />
            </FooterContainer>
            
        </>
    );

};

export default DesktopLayout;

const HeaderContainer = styled.div({
    border: '3px solid #BC986A',
    background: 'linear-gradient(45deg, #2a9df4, #187bcd, #1167b1, #03254c)',
    animation: 'gradient 1s ease infinite',
});

const FooterContainer = styled.div({
    bottom: '0',
    position: 'fixed',
    background: 'linear-gradient(45deg, #03254c, #1167b1, #187bcd, #2a9df4 )',
    border: '3px solid #BC986A',
    width: '99.8%',
});
