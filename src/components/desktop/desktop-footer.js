import React from 'react';
import styled from '@emotion/styled';


const DesktopFooter = () => {
    return (
        <FooterContent>
            <FooterSection>
                
                <p>
                <img src="/images/mail.jpg" alt="Therin's Email" width='20px' height='20px' />
                therinharmenraymody@gmail.com
                </p>
            </FooterSection>
            <FooterSection>
                <p>
                    <img src="/images/phone.jpg" alt="Therin's Phone" width='20px' height='20px' />
                    +1 (403) 968 - 7642
                </p>
            </FooterSection>
            <FooterSection>
                <p>
                    <img src="/images/location.jpg" alt="Therin's Location" width='20px' height='20px' />
                    Calgary, Alberta. Canada
                </p>
            </FooterSection>
        </FooterContent>
    );

};

export default DesktopFooter;

const FooterContent = styled.div({
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
    fontSize: '125%',
    width: '100%',
    textAlign: 'center',
});

const FooterSection = styled.div({
    display: 'inline-block',
    width: '30%',
});