import React from 'react';
import styled from '@emotion/styled';

//Container objects
import Service from '../containers/service';

//JSON Objects
import ServicesObj from '../JSON/Services';

const Services = () => {
    return (
        <ContentContainer id="services">
            <ContentHeader><b>Services</b></ContentHeader>
            <ContentSubHeader><b>20$ / hour</b></ContentSubHeader>
            <Content>
                {ServicesObj.services.map((service) => (
                    <Service key={service.service} service={service} />
                ))}
                
            </Content>

            <hr />
        </ContentContainer>
    );
};

export default Services;

const ContentContainer = styled.div({
    marginBottom: '2%',
});

const ContentHeader = styled.div({
    textAlign: 'center',
    textShadow: '0.5px 0.5px #000000',
    color: '#BC986A',
    fontSize: '300%',
    fontFamily: 'Helvetica',
    marginBottom: '1%',
});

const ContentSubHeader = styled.div({
    textAlign: 'right',
    textShadow: '0.5px 0.5px #000000',
    color: '#BC986A',
    fontSize: '200%',
    fontFamily: 'Helvetica',
    marginBottom: '3%',
});

const Content = styled.div({
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
});