import React from 'react';
import styled from '@emotion/styled';


const Post = ({ blog }) => {
    if ( blog.title === "empty") {
        return (
            <PostContainer>
                <PostTitle><b>More coming soon...</b></PostTitle>
                <PostDescription></PostDescription>
                <PostDate></PostDate>
            </PostContainer>
        );
    } else {
        return (
            <a href={blog.link} target="_blank" rel="noreferrer">
                <PostContainer>
                    <PostTitle><b>{blog.title}</b><hr /></PostTitle>
                    <PostDescription>{blog.description}</PostDescription>
                    <PostDate><b>{blog.date}</b></PostDate>
                </PostContainer>
            </a>
        );
    };
};

export default Post;

const PostContainer = styled.div({
    display: 'inline-block',
    verticalAlign: 'top',
    width: '27%',
    marginLeft: '1.65%',
    marginRight: '1.65%',
    marginBottom: '1%',
    border: '3px solid #BC986A',
    borderRadius: '1em',
    boxShadow: '1px 1px #808080',
    padding: '1%',
    background: 'linear-gradient(180deg, #ffffff, #f5f5f5, #fbfbf8)',
    color: '#000000',
    ':hover': {
        border: '3px solid #000000',
        color: '#292929',
    },
});

const PostTitle = styled.div({
    fontSize: '200%',
    fontFamily: 'Helvetica, Arial, sans-serif',
});

const PostDescription = styled.div({
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '115%',
});

const PostDate = styled.div({
    fontFamily: 'Arial, Helvetica, sans-serif',
    float: 'right',
});