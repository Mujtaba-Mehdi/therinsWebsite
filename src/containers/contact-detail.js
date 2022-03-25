import React from 'react';
import styled from '@emotion/styled';

const ContactDetail = () => {

    return (
        <>
            <Block>
                <Title>
                    <b>Email:</b>
                </Title>
                <hr />
                <Content>
                    therinharmenraymody@gmail.com
                </Content>
            </Block>
            <Block>
                <Title>
                    <b>Phone:</b>
                </Title>
                <hr />
                <Content>
                    +1 (403) 968 - 7642
                </Content>
            </Block>
        </>
    );
};

export default ContactDetail;

const Block = styled.div({
    display: 'inline-block',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
    width: '35%',
    border: '5px solid #BC986A',
    borderRadius: '1em',
    padding: '2%',
    boxShadow: '1px 1px #000000',
    background: 'linear-gradient(180deg, #ffffff, #f5f5f5, #fbfbf8)',
});

const Title = styled.div({
    fontSize: '300%',
    fontFamily: 'Helvetica',
});

const Content = styled.div({
    fontSize: '200%',
    textAlign: 'center',
    fontFamily: 'monospace',
});