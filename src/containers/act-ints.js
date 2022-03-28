import React from 'react';
import styled from '@emotion/styled';

//Container objects
import Skill from '../containers/skill';

//JSON Objects
import ActivitiesObj from '../JSON/Interests';

const Activities = () => {
    return (
        <ContentContainer id="activities">
            <ContentHeader><b>Activities and Interests</b></ContentHeader>
            <Content>
                {ActivitiesObj.activities.map((activity) => (
                    <Skill key={activity.activity} skill={activity} />
                ))}
            </Content>
        </ContentContainer>
    );
};

export default Activities;

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