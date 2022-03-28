import React from 'react';
import styled from '@emotion/styled';

const Service = ({ service }) => {
    return (
        <ContentContainer>
            <Title>
                <i>{service.service}</i>
            </Title>
            <Description>
                {service.description}
            </Description>           
        </ContentContainer>

    );
};

export default Service;

const ContentContainer = styled.div({
    marginBottom: '5%',
});

const Title = styled.div({
    fontSize: '200%',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '30%',
});

const Description = styled.div({
    width: '65%',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: '1px solid #BC986A',
    borderRadius: '1em',
    padding: '1%',
    marginLeft: '1%',
    fontSize: '125%',
    fontFamily: 'monospace',
    background: 'linear-gradient(90deg, #d9d9d9, #f5f5f5, #ffffff, #f5f5f5, #d9d9d9)',
});