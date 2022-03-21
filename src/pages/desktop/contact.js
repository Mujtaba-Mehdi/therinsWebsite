import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout, ContactPage } from '../../components';

const Contact = () => {
    return (
        <>
            <DesktopLayout page={"Contact"} />
            <ContentContainer>
                <ContactPage/>
            </ContentContainer>
        </>
        
    );
};

export default Contact;

const ContentContainer = styled.div({
    
});