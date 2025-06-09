import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectCard } from './Card';

import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import projImg4 from '../assets/images/project-img4.png';
import projImg5 from '../assets/images/project-img5.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Design 1 : Chez Olivanders',
      description: 'Pour un ptit relooking!',
      imgUrl: projImg1,
      path: 'https://johnd26.github.io/service-website/',
    },
    {
      title: 'Design 2 : Jeu de Poker',
      description: 'Emmenez beaucoup d argent!',
      imgUrl: projImg2,
      path: '/design2',
    },
    {
      title: 'Design 3 : Big Bucks',
      description: 'Un site e-commerce',
      imgUrl: projImg3,
      path: '/design3',
    },
    {
      title: 'Design 4 : Lock In',
      description: 'Analyse & visualisation (football)',
      imgUrl: projImg4,
      path: '/design4',
    },
        {
      title: 'Design 5 : AI-Code Roaster',
      description: 'I believe humor makes complex work better: This is precisely why I built an AI assistant that delivers code critiques with a humorous twist—because even serious debugging can (and should) be fun. 😉',
      imgUrl: projImg5,
      path: 'https://code-roaster.onrender.com/',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Voici quelques projets prévus pour ce semestre!</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center">
                      <Nav.Item><Nav.Link eventKey="first">All</Nav.Link></Nav.Item>
                      {/* <Nav.Item><Nav.Link eventKey="second">Section 2</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Section 3</Nav.Link></Nav.Item> */}
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, idx) => (
                            <Col xs={12} sm={6} md={4} key={idx} className="mb-4">
                              {project.path.startsWith('/') ? (
                              <Link to={project.path} className="proj-link">
                                <ProjectCard
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                />
                              </Link>
                            ) : (
                              <a href={project.path} className="proj-link" target="_blank" rel="noopener noreferrer">
                                <ProjectCard
                                  title={project.title}
                                  description={project.description}
                                  imgUrl={project.imgUrl}
                                />
                              </a>
                            )}

                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second"><p>Section 2 content…</p></Tab.Pane>
                      <Tab.Pane eventKey="third"><p>Section 3 content…</p></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
