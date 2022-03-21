import React from 'react';
import styled from '@emotion/styled';

const BlogPage = () => {
    return (
        <ContentContainer>
            <Title>
                <TitleContent>
                    <b>Blog Post's</b>
                </TitleContent>
            </Title>

            <BlogsContainer>
                <a href="https://therinmody.github.io/ContinuingBlogPost/">
                    <Blog>
                        <BlogInfo>
                            <BlogTitle>
                                <b>Continuing with GraphQL and Apollo.</b>
                            </BlogTitle>
                            <hr />
                            <br />
                            <BlogDescription>
                                A continuation of "Starting with GraphQL and Apollo". In this tutorial we add another
                                feature to the application that displays players ranked by their fantasy score for a given
                                date. Here, you will practice the skills learned in "Starting with GraphQL and Apollo" and also
                                learn how to make GraphQL queries with arguments.
                            </BlogDescription>
                            <br />
                            <Date>
                                2021-03-17
                            </Date>
                        </BlogInfo>
                    </Blog>
                </a>
                <a href="https://therinmody.github.io/GettingStartedBlogPost/">
                    <Blog>
                        <BlogInfo>
                            <BlogTitle>
                                <b>Getting Started with GraphQL and Apollo.</b>
                            </BlogTitle>
                            <hr />
                            <br />
                            <BlogDescription>
                                A tutorial for starting development with Apollo GraphQL. On the server side, you learn how to develop
                                an Apollo Server and make API calls. On the client side, you learn how to use the "useQuery" react hook to
                                display the data retrieved from the API endpoint.
                            </BlogDescription>
                            <br />
                            <Date>
                                2021-02-26
                            </Date>
                        </BlogInfo>
                    </Blog>
                </a>
            </BlogsContainer>

        </ContentContainer>
    );
};

export default BlogPage;

const ContentContainer = styled.div({
    width: '99%',
    margin: '1%',
    marginBottom: '10%',
});

const Title = styled.div({
    width: '39%',
    fontSize: '500%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    float: 'left',
    //position: 'fixed',
});

const TitleContent = styled.div({
    textAlign: 'center',
    marginTop: '30%',
    marginBottom: '40%',
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});

const BlogsContainer = styled.div({
    width: '50%',
    marginLeft: '50%',
    paddingTop: '2%',
});

const Blog = styled.div({
    width: '80%',
    marginRight: '20%',
    marginBottom: '5%',
    border: '5px solid #BC986A',
    borderRadius: '1em',
    padding: '1%',
    boxShadow: '1px 1px #000000',
    backgroundColor: '#FDF6E4',
    ':hover': {
        border: '5px solid #2887b8',
    },
});

const BlogTitle = styled.div({
    fontSize: '200%',
    color: '#000000',
});

const Date = styled.div({
    float: 'right',
    fontSize: '150%',
});

const BlogDescription = styled.div({
    fontSize: '110%',
    color: '#000000',
});

const BlogInfo = styled.div({
    display: 'inline-block',
    width: '99%',
    padding: '1%',
});