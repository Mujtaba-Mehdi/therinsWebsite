import React from 'react';
import styled from '@emotion/styled';


const DesktopFooter = () => {
    return (
        <FooterContent>
            <FooterSection>
                <p>
                    <b>therinharmenraymody@gmail.com</b>
                </p>
            </FooterSection>
            <FooterSection>
                <p>
                    <b>+1 (403) 968 - 7642</b>
                </p>
            </FooterSection>
            <FooterSection>
                <p>
                    <b>Calgary, Alberta. Canada</b>
                </p>
            </FooterSection>
        </FooterContent>
    );

};

export default DesktopFooter;

const FooterContent = styled.div({
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    fontSize: '110%',
    width: '100%',
    textAlign: 'center',
});

const FooterSection = styled.div({
    display: 'inline-block',
    width: '30%',
    marginLeft: '1.65%',
    marginRight: '1.65%',
});