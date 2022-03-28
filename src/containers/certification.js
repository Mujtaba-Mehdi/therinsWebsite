import React from 'react';
import styled from '@emotion/styled';

const Certification = ({cert}) => {
    return (
        <ContentContainer>
            <SchoolLogo src={cert.img} alt={cert.name}/>
            <Container>
                <i>{cert.name}</i>
                <hr />

                <Details>
                    {cert.description}<br /><br />
                    <a href={cert.link} target="_blank" rel="noreferrer">Check out this program</a> <br />
                    School: {cert.school}
                </Details>
            </Container>            
        </ContentContainer>
    );
};

export default Certification;

const ContentContainer = styled.div({
    width: '89%',
    marginLeft: '5%',
    marginRight: '5%',
    display: 'inline-block',
    padding: '1%',
});

const Container = styled.div({
    border: '1px solid #BC986A',
    borderRadius: '1em',
    padding: '1%',
    width: '70%',
    marginLeft: '2%',
    marginBottom: '2%',
    fontSize: '200%',
    fontFamily: 'Helvetica',
    background: 'linear-gradient(90deg, #d9d9d9, #f5f5f5, #ffffff, #f5f5f5, #d9d9d9)',
    display: 'inline-block',
    verticalAlign: 'top',
});

const SchoolLogo = styled.img({
    width: '20%',
    display: 'inline-block',
});

const Details = styled.div({
    fontSize: '80%',
    fontFamily: 'monospace',
});