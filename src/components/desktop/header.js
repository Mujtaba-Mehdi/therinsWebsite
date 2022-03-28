import React from 'react';
import styled from '@emotion/styled';

import { ProfileHeader, DesktopNav } from '../../components'


const DesktopHeader = ({ page }) => {
    return (
        <>
            <ProfileContainer id='top'>
                <ProfileHeader />
            </ProfileContainer>
            <NavContainer>
                <DesktopNav page={page} />
            </NavContainer>
        </>
    );

};

export default DesktopHeader;

const ProfileContainer = styled.div({
    width: '50%',
    marginTop: '1%',
    marginBottom: '1%',
    position: 'relative',
    display: 'inline-block',
});

const NavContainer = styled.div({
    width: '50%',
    marginTop: '1%',
    marginBottom: '1%',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
});