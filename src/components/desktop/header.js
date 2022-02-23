import React from 'react';
import styled from '@emotion/styled';

import { ProfileHeader }from '../../components'


const DesktopHeader = () => {
    return (
        <HeaderContainer>
            <ProfileHeader />

        </HeaderContainer>
    );

};

export default DesktopHeader;

const HeaderContainer = styled.div({
    width: '100%',
    marginTop: '2%',
});