import React from 'react';
import styled from '@emotion/styled';
import { DesktopLayout, BlogPage } from '../../components';

const Blog = () => {
    return (

        <>
            <DesktopLayout page={"Blog"} />
            <ContentContainer>
                <BlogPage/>
            </ContentContainer>
        </>
        
    );
};

export default Blog;

const ContentContainer = styled.div({
    
});