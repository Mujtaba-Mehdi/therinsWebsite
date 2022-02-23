import React from 'react';
import styled from '@emotion/styled';


const DesktopContent = ({page}) => {
    return (
        <ContentContainer>
            <PageTitle>
                <b>{page}</b>
            </PageTitle>
        </ContentContainer>
    );

};

export default DesktopContent;

const ContentContainer = styled.div({
    marginTop: '1%',
});

const PageTitle = styled.div({
    textAlign: 'center',
    fontSize: '250%',
    fontFamily: 'Helvetica',
});

