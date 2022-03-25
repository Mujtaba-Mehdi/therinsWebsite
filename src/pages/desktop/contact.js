import React from 'react';
import styled from '@emotion/styled';

//Components
import { DesktopLayout } from '../../components';

//Container
import ContactDetail from '../../containers/contact-detail';

const Contact = () => {
    return (
        <>
            <DesktopLayout page={"Contact"} />
            <ContentContainer>
                <Title>
                    <TitleContent>
                        <b>Contact Info</b>
                    </TitleContent>
                </Title>

                <ContactContainer>
                    <hr />
                    <br />
                    <ContactDetail />
                </ContactContainer>
            </ContentContainer>
        </>

    );
};

export default Contact;

const ContentContainer = styled.div({
    marginTop: '2%',
    width: '100%',
    marginBottom: '10%'
});

const Title = styled.div({
    width: '100%',
    fontSize: '400%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    verticalAlign: 'middle',
});

const TitleContent = styled.div({
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});

const ContactContainer = styled.div({
    width: '80%',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
});