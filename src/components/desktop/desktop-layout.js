import React from 'react';
import styled from '@emotion/styled';
import { DesktopHeader, DesktopContent, DesktopFooter } from '../../components';


const DesktopLayout = ({page}) => {
    return (
        <>
            <HeaderContainer>
                <DesktopHeader page={page}/>
            </HeaderContainer> 

            <ContentContainer>
                <DesktopContent page={page}/>
            </ContentContainer>

            <FooterContainer>
                <DesktopFooter />
            </FooterContainer>
            
        </>
    );

};

export default DesktopLayout;

const HeaderContainer = styled.div({
    border: '3px solid #BC986A',
    backgroundColor: '#2887b8',

});

const ContentContainer = styled.div({
    
});

const FooterContainer = styled.div({
    bottom: '0',
    position: 'fixed',
    backgroundColor: '#BC986A',
    border: '1px solid #000000',
    width: '100%',
});
