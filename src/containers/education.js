import React from 'react';
import styled from '@emotion/styled';

//Container objects
import Certification from '../containers/certification';

//JSON Objects
import EducationObject from '../JSON/Education';

const Education = () => {
    return (
        <ContentContainer id="certifications">
            <ContentHeader><b>Certifications / Education</b></ContentHeader>
            <Content>

                {EducationObject.certifications.map((cert) => (
                    <Certification key={cert.name} cert={cert} />
                ))}

            </Content>

            <hr />
        </ContentContainer>
    );
};

export default Education;

const ContentContainer = styled.div({
    marginBottom: '2%',
});

const ContentHeader = styled.div({
    textAlign: 'center',
    textShadow: '0.5px 0.5px #000000',
    color: '#BC986A',
    fontSize: '300%',
    fontFamily: 'Helvetica',
    marginBottom: '5%',
});

const Content = styled.div({
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
});