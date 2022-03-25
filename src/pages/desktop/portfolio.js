import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout } from '../../components';

const Portfolio = () => {
    return (

        <>
            <DesktopLayout page={"Portfolio"} />
            <ContentContainer>
                <Title>
                    <TitleContent>
                        <b>Portfolio</b>
                    </TitleContent>
                </Title>

                <Content>
                    <hr />
                    
                </Content>

            </ContentContainer>
        </>

    );
};

export default Portfolio;

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

const Content = styled.div({
    width: '80%',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
});