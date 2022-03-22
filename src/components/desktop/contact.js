import React from 'react';
import styled from '@emotion/styled';

const ContactPage = () => {
    return (
        <ContentContainer>
            <Title>
                <TitleContent>
                    <b>Contact Info</b>
                </TitleContent>
            </Title>
            <Email>
                <EmailTitle>
                    <b>Email:</b>
                </EmailTitle>
                <hr />
                <EmailContent>
                    therinharmenraymody@gmail.com
                </EmailContent>
            </Email>
            <Email>
                <EmailTitle>
                    <b>Phone:</b>
                </EmailTitle>
                <hr />
                <EmailContent>
                    +1 (403) 968 - 7642
                </EmailContent>
            </Email>
        </ContentContainer>
    );
};

export default ContactPage;

const ContentContainer = styled.div({
    marginTop: '0%',
    width: '100%',
    marginBottom: '10%',
});

const Email = styled.div({
    display: 'inline-block',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    width: '35%',
    border: '5px solid #BC986A',
    borderRadius: '1em',
    padding: '2%',
    boxShadow: '1px 1px #000000',
    backgroundColor: '#FDF6E4',
});

const EmailTitle = styled.div({
    fontSize: '300%',
    fontFamily: 'Helvetica',
});

const EmailContent = styled.div({
    fontSize: '200%',
});

const Title = styled.div({
    width: '100%',
    fontSize: '500%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    display: 'inline-block',
    marginTop: '1%',
    marginBottom: '1%',
});

const TitleContent = styled.div({
    textAlign: 'center',
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});