import React from 'react';
import styled from '@emotion/styled';


const AboutPage = () => {
    return (
        <ContentContainer>
            <PageTitle>
                <p><b>About me...</b></p>
            </PageTitle>
            <AttributesContainer>

                <ObjectiveContainer>
                    <ContainerJuice1>
                        <h1>Profile</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </ContainerJuice1>
                </ObjectiveContainer>

                <SectionContainer>
                    <ContainerJuice2>
                        <h1>Education</h1>
                        <hr />
                        <a href="https://www.sait.ca/programs-and-courses/diplomas/information-technology">
                            <EducationCard>
                                <ImageContainer>
                                    <img src="/images/sait.png" alt="Sait Logo" width='50px' height='50px' />
                                </ImageContainer>
                                <WordContainer>
                                    <EdTitle>
                                        <b>Information Technology Diploma</b>
                                    </EdTitle>
                                    <EdSubTitle>
                                        SAIT <br />
                                        <i>Software Development Major, 3.8</i>
                                    </EdSubTitle>
                                </WordContainer>
                            </EducationCard>
                        </a>
                        <a href="https://www.udemy.com/course/mern-stack-the-complete-guide/">
                            <EducationCard>
                                <ImageContainer>
                                    <img src="/images/udemy.png" alt="Udemy Logo" width='50px' height='50px' />
                                </ImageContainer>
                                <WordContainer>
                                    <EdTitle>
                                        <b>MERN Stack - The Complete Guide </b>
                                    </EdTitle>
                                    <EdSubTitle>
                                        <i>Udemy</i>
                                    </EdSubTitle>
                                </WordContainer>
                            </EducationCard>
                        </a>
                        <a href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer">
                            <EducationCard>
                                <ImageContainer>
                                    <img src="/images/IBM.png" alt="IBM Logo" width='50px' height='50px' />
                                </ImageContainer>
                                <WordContainer>
                                    <EdTitle>
                                        <b>IBM Full Stack Cloud Developer</b>
                                    </EdTitle>
                                    <EdSubTitle>
                                        <i>Coursera</i>
                                    </EdSubTitle>
                                </WordContainer>
                            </EducationCard>
                        </a>
                        <a href="https://odyssey.apollographql.com/">
                            <EducationCard>
                                <ImageContainer>
                                    <img src="/images/apollo.png" alt="Apollo Logo" width='50px' height='50px' />
                                </ImageContainer>
                                <WordContainer>
                                    <EdTitle>
                                        <b>Graph Developer - Associate</b>
                                    </EdTitle>
                                    <EdSubTitle>
                                        <i>Apollo GraphQL</i>
                                    </EdSubTitle>
                                </WordContainer>
                            </EducationCard>
                        </a>
                    </ContainerJuice2>
                </SectionContainer>

                <SpacingContainer />

                <SectionContainer>
                    <ContainerJuice2>
                        <h1>Key Skills</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </ContainerJuice2>
                </SectionContainer>

                <SpacingContainer />

                <SectionContainer>
                    <ContainerJuice2>
                        <h1>Work Experience</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </ContainerJuice2>
                </SectionContainer>

                <ActivitiesContainer>
                    <ContainerJuice1>
                        <h1>Activites & Interests</h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </ContainerJuice1>
                </ActivitiesContainer>

            </AttributesContainer>

        </ContentContainer>
    );

};

export default AboutPage;

const ContentContainer = styled.div({
    marginTop: '0%',
    width: '100%',
});

const AttributesContainer = styled.div({
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Arial',
});

const ObjectiveContainer = styled.div({
    width: '100%',
    marginBottom: '2%',
});

const ActivitiesContainer = styled.div({
    width: '100%',
    marginTop: '2%',
    marginBottom: '10%',
});

const SectionContainer = styled.div({
    display: 'inline-block',
    width: '29%',
    border: '3px solid #26580F',
    boxShadow: '5px 5px #BC986A',
    borderRadius: '1em',
});

const EducationCard = styled.div({
    border: '1px solid #BC986A',
    borderRadius: '1em',
    boxShadow: '1px 1px #000000',
    padding: '1%',
    marginBottom: '2%',
    color: '#000000',
});

const ImageContainer = styled.div({
    display: 'inline-block',
    width: '25%',
    verticalAlign: 'top',
});

const WordContainer = styled.div({
    display: 'inline-block',
    width: '75%',
});

const EdTitle = styled.div({
    fontSize: '100%',
});

const EdSubTitle = styled.div({

});

const ContainerJuice1 = styled.div({
    margin: '1%',
});

const ContainerJuice2 = styled.div({
    margin: '5%',
});

const SpacingContainer = styled.div({
    width: '5%',
    display: 'inline-block',
});

const PageTitle = styled.div({
    marginLeft: '10%',
    fontSize: '250%',
    fontFamily: 'Helvetica',
});

