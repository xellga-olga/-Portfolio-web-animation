import projImg1 from "../assets/img/projImg1.avif";
import projImg2 from "../assets/img/projImg2.webp";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";

import color2 from '../assets/img/color2.png'

export const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      imgUrl: projImg1,
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information. Built using React, CSS, and JavaScript with a responsive design.",
    },
    {
      title: "E-commerce Store",
      imgUrl: projImg2,
      description:
        "An online store application with product listings, shopping cart, and checkout functionality. Developed with React and Redux for state management, and styled-components for styling.",
    },
    {
      title: "Blog Platform",
      imgUrl: projImg1,
      description:
        "A full-featured blog platform where users can create, edit, and delete posts. Implemented using Next.js for server-side rendering and MongoDB for the database.",
    },
    {
      title: "Weather App",
      imgUrl: projImg2,
      description:
        "A weather forecasting application that fetches data from a public API and displays current weather conditions and forecasts. Created with HTML, CSS, and vanilla JavaScript.",
    },
    {
      title: "Task Management Tool",
      imgUrl: projImg1,
      description:
        "A task management application with features like task creation, editing, and deletion. Built using Vue.js and Vuex for state management, with a Firebase backend.",
    },
    {
      title: "Social Media Dashboard",
      imgUrl: projImg2,
      description:
        "A social media dashboard to track and analyze social media metrics. Developed using Angular, TypeScript, and integrated with various social media APIs.",
    },
    {
      title: "Chat Application",
      imgUrl: projImg1,
      description:
        "A real-time chat application with user authentication and multiple chat rooms. Built with React, Socket.io for real-time communication, and Firebase for backend services.",
    },
    {
      title: "Recipe Finder",
      imgUrl: projImg2,
      description:
        "A recipe finder app that allows users to search for recipes based on ingredients. Created with HTML, CSS, and JavaScript, and utilizes a public recipe API.",
    },
    {
      title: "Portfolio Blog",
      imgUrl: projImg1,
      description:
        "A personal blog integrated into my portfolio site, where I share articles on web development topics. Built with Gatsby.js, Markdown for content, and styled-components for styling.",
    },
    {
      title: "Expense Tracker",
      imgUrl: projImg2,
      description:
        "An application to track income and expenses, with data visualization charts. Developed using React, Chart.js for charts, and localStorage for data persistence.",
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seconsd">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project,index) => {
                        return(
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={color2} alt=""></img>
    </section>
  );
};
