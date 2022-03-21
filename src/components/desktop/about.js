import React from 'react';
import styled from '@emotion/styled';


const AboutPage = () => {
    return (
        <ContentContainer>
            <Title>
                <TitleContent>
                    <b>About me...</b>
                </TitleContent>
            </Title>
            <ObjectiveContainer>
                <ContainerJuice1>
                    <h1>Profile</h1>
                    <hr />
                    <Intro>
                        I am Therin Mody. <br /><br />
                        I am twenty-three years old and located in southern Calgary, Alberta. <br /><br />
                        I graduate from SAIT's Information Technology program at the end of April 2022. Currently, my GPA resides at 3.8.<br /><br />
                        I am excited to begin my career in Software Development. <br /><br />
                        I love designing, developing, and deploying websites on cloud base platforms. However, I also love anything database related. <br /><br />
                        I work hard.
                    </Intro>
                </ContainerJuice1>
            </ObjectiveContainer>
            <AttributesContainer>
                <hr />
                <br />
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
                        <SkillsTable>
                            <tbody>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>Java</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                    <td>Node</td>
                                </tr>
                                <tr>
                                    <td>MongoDB</td>
                                    <td>MySQL</td>
                                </tr>
                                <tr>
                                    <td>SQLPlus</td>
                                    <td>Oracle</td>
                                </tr>
                                <tr>
                                    <td>Apollo</td>
                                    <td>Adobe XD</td>
                                </tr>
                                <tr>
                                    <td>GraphQL</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </SkillsTable>
                    </ContainerJuice2>
                </SectionContainer>

                <SpacingContainer />

                <SectionContainer>
                    <ContainerJuice2>
                        <h1>Work Experience</h1>
                        <hr />
                        <WorkCard>
                            <WordContainer2>
                                <EdTitle>
                                    <b>Landscape Maintenance</b>
                                </EdTitle>
                                <EdSubTitle>
                                    <i>Auburn Bay Residents Association</i>
                                </EdSubTitle>
                                <br />
                                <WorkTable>
                                    <tbody>
                                        <tr>
                                            <td>Dates:</td>
                                            <td>
                                                <EdSubTitle>
                                                    April 2021 - Sept 2021
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Reference:</td>
                                            <td>
                                                <EdSubTitle>
                                                    Jesse Bury
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <EdSubTitle>
                                                    +1 (587) 436 - 5805
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                    </tbody>
                                </WorkTable>
                            </WordContainer2>
                        </WorkCard>
                        <WorkCard>
                            <WordContainer2>
                                <EdTitle>
                                    <b>Lot Supervisor / Salesman</b>
                                </EdTitle>
                                <EdSubTitle>
                                    <i>Dalhousie Christmas Tree Lot</i>
                                </EdSubTitle>
                                <br />
                                <WorkTable>
                                    <tbody>
                                        <tr>
                                            <td>Dates:</td>
                                            <td>
                                                <EdSubTitle>
                                                    December 2019, 2020, 2021
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Reference:</td>
                                            <td>
                                                <EdSubTitle>
                                                    Shane Grant
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <EdSubTitle>
                                                    +1 (403) 651 - 5383
                                                </EdSubTitle>
                                            </td>
                                        </tr>
                                    </tbody>
                                </WorkTable>
                            </WordContainer2>
                        </WorkCard>
                    </ContainerJuice2>
                </SectionContainer>
                <br /> <br />
                <hr />
                <ActivitiesContainer>
                    <ContainerJuice1>
                        
                        <h1>Activites & Interests</h1>

                        <hr />

                        <ActivityTable>
                            <tr>
                                <td width='25%'>Chess</td>
                                <td width='25%'>Reading</td>
                                <td width='25%'>Travelling</td>
                                <td width='25%'>Calgary Flames</td>
                            </tr>
                            <tr>
                                <td width='25%'>Web Development</td>
                                <td width='25%'>Hockey</td>
                                <td width='25%'>Design</td>
                                <td width='25%'>Stocks</td>
                            </tr>
                            <tr>
                                <td width='25%'>Fantasy Football</td>
                                <td width='25%'>Spanish</td>
                                <td width='25%'>Clash of Clans</td>
                                <td width='25%'>Skiing</td>
                            </tr>
                            <tr>
                                <td width='25%'>Puzzles</td>
                                <td width='25%'>Rock Music</td>
                                <td width='25%'>Finance</td>
                                <td width='25%'>Comedy TV</td>
                            </tr>
                            <tr>
                                <td width='25%'>Philosophy</td>
                                <td width='25%'>Rugby</td>
                                <td width='25%'>Toronto Blue Jays</td>
                                <td width='25%'></td>
                            </tr>
                        </ActivityTable>
                    </ContainerJuice1>
                </ActivitiesContainer>

            </AttributesContainer>

        </ContentContainer >
    );

};

export default AboutPage;

const Intro = styled.div({
    fontSize: '110%',
    fontFamily: 'Helvetica'
});

const SkillsTable = styled.table({
    width: '100%',
    textAlign: 'left',
    fontSize: '150%',
    marginLeft: '5%',
    marginRight: '5%',
});

const ActivityTable = styled.table({
    width: '100%',
    fontSize: '150%',
    marginLeft: '1%',
    marginRight: '1%',
});

const WorkTable = styled.table({
    width: '100%',
    fontSize: '100%',
});

const ContentContainer = styled.div({
    marginTop: '0%',
    width: '100%',
    marginBottom: '5%',
});

const Title = styled.div({
    width: '39%',
    fontSize: '500%',
    postion: 'relative',
    fontFamily: 'Helvetica',
    float: 'left',
    
});

const TitleContent = styled.div({
    textAlign: 'center',
    marginTop: '30%',
    marginBottom: '40%',
    color: '#BC986A',
    textShadow: '1px 1px #000000',
});

const AttributesContainer = styled.div({
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Arial',
    display: 'inline-block',
});

const ObjectiveContainer = styled.div({
    width: '40%',
    padding: '1%',
    float: 'right',
    marginRight: '10%',
    marginBottom: '2%',
    marginTop: '5%',
    border: '3px solid #BC986A',
    boxShadow: '2px 2px #5b3c1e',
    borderRadius: '1em',
    backgroundColor: '#FDF6E4',
    fontFamily: 'Helvetica',
});

const ActivitiesContainer = styled.div({
    width: '98%',
    padding: '1%',
    float: 'right',
    marginBottom: '2%',
    marginTop: '2%',
    border: '3px solid #BC986A',
    boxShadow: '2px 2px #5b3c1e',
    borderRadius: '1em',
    backgroundColor: '#FDF6E4',
});

const SectionContainer = styled.div({
    display: 'inline-block',
    width: '29%',
    verticalAlign: 'top',
    border: '3px solid #BC986A',
    boxShadow: '2px 2px #5b3c1e',
    borderRadius: '1em',
    backgroundColor: '#FDF6E4',
});

const EducationCard = styled.div({
    border: '1px solid #BC986A',
    borderRadius: '1em',
    boxShadow: '1px 1px #000000',
    padding: '1%',
    marginBottom: '2%',
    color: '#000000',
    ':hover': {
        border: '1px solid #2887b8',
    },
});

const WorkCard = styled.div({
    border: '1px solid #BC986A',
    borderRadius: '1em',
    boxShadow: '1px 1px #000000',
    padding: '2%',
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

const WordContainer2 = styled.div({
    display: 'inline-block',
    width: '100%',
});

const EdTitle = styled.div({
    fontSize: '125%',
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



