import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout, PortfolioPage } from '../../components';

const Portfolio = () => {
    return (

        <>
            <DesktopLayout page={"Portfolio"} />
            <ContentContainer>
                <PortfolioPage/>
            </ContentContainer>
        </>
        
    );
};

export default Portfolio;

const ContentContainer = styled.div({

});