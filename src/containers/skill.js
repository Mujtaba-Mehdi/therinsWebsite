import React from 'react';
import styled from '@emotion/styled';

const Skill = ({skill}) => {
    return (
        <ContentContainer>
            <SkillContainer>
                <i>{skill.skill}</i>
            </SkillContainer>            
        </ContentContainer>
    );
};

export default Skill;

const ContentContainer = styled.div({
    width: '30%',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '1%',
});

const SkillContainer = styled.div({
    border: '1px solid #BC986A',
    borderRadius: '1em',
    width: 'fit-content%',
    fontSize: '200%',
    fontFamily: 'monospace',
    background: 'linear-gradient(90deg, #d9d9d9, #f5f5f5, #ffffff, #f5f5f5, #d9d9d9)',
});