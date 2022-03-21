import React from 'react';
import styled from '@emotion/styled';

const PortfolioPage = () => {
    return (
        <ContentContainer>
            <Title>
                <TitleContent>
                    <b>Portfolio</b>
                </TitleContent>
            </Title>

            <ProjectContainer>
                    <Project>
                        <ProjectInfo>
                            <ProjectTitle>
                                <b>Solar Power Adminstration</b>
                            </ProjectTitle>
                            <hr />
                            <br />
                            <ProjectDescription>
                                My groups capstone project for SAIT's Information technology program. The Solar Power Adminstration
                                project is MVC web application for the purpose of facility data display, reporting, and archival. It was 
                                built using Java on the backend. HTML, CSS, and Javascript on the frontend. We use Apache HTTP server and process
                                requests using servlets. The web application will be deployed using AWS technolgies: Elastic Beanstalk and Relational Database Service.
                                We signed an NDA for this project. So sadly, I cannot share the code or the web application with you.
                            </ProjectDescription>
                            <br />
                            <Date>
                                2022-04-12
                            </Date>
                        </ProjectInfo>
                    </Project>

                    <Project>
                        <ProjectInfo>
                            <ProjectTitle>
                                <b>Therin Mody's Website</b>
                            </ProjectTitle>
                            <hr />
                            <br />
                            <ProjectDescription>
                                This project is what you are currently viewing. I learned that the industry of Web Development
                                evolves extremely fast. I realized that React is currently in fashion and completed tutorials to learn it.
                                This website is as a React application. I use the emotion package for styling. I personally built all the React components
                                for practice. The Reach Router for page routing. I also use the layoutGenerator for page scaling on different devices.
                                You are viewing version: Mock One. Will I regret not implementing a backend and MongoDB to make quick
                                updates? Yes, I already do and will rewrite the codebase in version: Mock Two. 
                            </ProjectDescription>
                            <br />
                            <GitHubLink>
                                Source code: <a href="https://github.com/therinMody/therinsWebsite">therinMody/therinsWebsite Repository</a>
                            </GitHubLink>
                            <br />
                            <Date>
                                2022-04-01
                            </Date>
                        </ProjectInfo>
                    </Project>

                    <Project>
                        <ProjectInfo>
                            <ProjectTitle>
                                <b>NFL Stuff</b>
                            </ProjectTitle>
                            <hr />
                            <br />
                            <ProjectDescription>
                                This project is what I used to learn GraphQL and Apollo. A bonus was also practicing React because
                                this was also my first solo project using React. I used a Schema First design approach for this project.
                                The project has two use cases: Displaying all active teams in a card grid, and searching by date for player fantasy football scores.
                            </ProjectDescription>
                            <br />
                            <GitHubLink>
                                Source code: <a href="https://github.com/therinMody/NFLStuff">therinMody/NFLStuff Repository</a>
                            </GitHubLink>
                            <br />
                            <Date>
                                2022-03-21
                            </Date>
                        </ProjectInfo>
                    </Project>
                    
            </ProjectContainer>

        </ContentContainer>
    );
};

export default PortfolioPage;


const ContentContainer = styled.div({
    marginTop: '0%',
    width: '100%',
    marginBottom: '10%',
});

const GitHubLink = styled.div({
    color: '#2887b8',
});

const Title = styled.div({
    width: '39%',
    fontSize: '500%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    float: 'left',
    display: 'inline-block',
    //position: 'fixed',
});

const TitleContent = styled.div({
    textAlign: 'center',
    marginTop: '30%',
    marginBottom: '40%',
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});

const ProjectContainer = styled.div({
    width: '50%',
    marginLeft: '50%',
    paddingTop: '2%',
    fontFamily: 'Helvetica',
});

const Project = styled.div({
    width: '80%',
    marginRight: '20%',
    marginBottom: '5%',
    border: '5px solid #BC986A',
    borderRadius: '1em',
    padding: '1%',
    boxShadow: '1px 1px #000000',
    backgroundColor: '#FDF6E4',
});

const ProjectTitle = styled.div({
    fontSize: '200%',
    color: '#000000',
});

const Date = styled.div({
    float: 'right',
    fontSize: '150%',
});

const ProjectDescription = styled.div({
    fontSize: '110%',
    color: '#000000',
});

const ProjectInfo = styled.div({
    display: 'inline-block',
    width: '99%',
    padding: '1%',
});