import React from 'react';
import styled from '@emotion/styled';

//Components
import { DesktopLayout } from '../../components';

//Container
import Post from '../../containers/post';

//JSON Objects
import Blogs from '../../JSON/Blogs';

const Blog = () => {
    return (

        <>
            <DesktopLayout page={"Blog"} />
            <ContentContainer>
                <Title>
                    <TitleContent>
                        <b>Blog Posts</b>
                    </TitleContent>
                </Title>

                <Posts>
                    <hr/>
                    <br />
                    {Blogs.blogs.map((blog) => (
                        <Post blog={blog} />
                    ))}
                </Posts>
            </ContentContainer>
        </>
    );
};

export default Blog;

const ContentContainer = styled.div({
    marginTop: '2%',
    width: '100%',
    marginBottom: '5%'
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

const Posts = styled.div({
    width: '80%',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
});