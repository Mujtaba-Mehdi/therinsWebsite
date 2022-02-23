import React from 'react';
import styled from '@emotion/styled';

import { ProfileHeader, DesktopNav } from '../../components'


const DesktopHeader = () => {
    return (
        <>
        <ProfileContainer>
                <ProfileHeader />
        </ProfileContainer>
        <NavContainer>
                <DesktopNav />
        </NavContainer>
        </>
    );

};

export default DesktopHeader;

const ProfileContainer = styled.div({
    width: '50%',
    marginTop: '1%',
    position: 'relative',
    display: 'inline-block',
});

const NavContainer = styled.div({
    width: '50%',
    marginTop: '1%',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
});