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
    backgroundColor: '#2887b8',

});

const FooterContainer = styled.div({
    bottom: '0',
    position: 'fixed',
    backgroundColor: '#BC986A',
    border: '1px solid #000000',
    width: '100%',
});
