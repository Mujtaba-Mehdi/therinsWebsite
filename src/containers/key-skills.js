import React from 'react';
import styled from '@emotion/styled';

//Container objects
import Skill from '../containers/skill';

//JSON Objects
import Skills from '../JSON/Skills';

const KeySkills = () => {
    return (
        <ContentContainer id="keySkills">
            <ContentHeader><b>Key Skills</b></ContentHeader>
            <Content>
                {Skills.skills.map((skill) => (
                    <Skill key={skill.skill} skill={skill} />
                ))}
            </Content>

            <hr />
        </ContentContainer>
    );
};

export default KeySkills;

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
    textAlign: 'center',
});