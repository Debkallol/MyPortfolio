import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import bakeryHutCoverPhoto from "../../Assets/Projects/bakeryhutcoverphoto.jpg";
import facebokPostCoffeeCabanaSecreenshot from "../../Assets/Projects/facebokpostcoffeecabanasecreenshot.jpeg";
import facebookOriginalContentCoffeeCabana from "../../Assets/Projects/facebook original content coffee cabana.jpeg";
import bakeryHutSecreenshot from "../../Assets/Projects/bakery hut secreenshot.jpg";
import bakeryhutlogo from "../../Assets/Projects/bakery hut logo.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my works <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Other works will be update soon here.. . .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakeryHutCoverPhoto}
              isBlog={false}
              title="Bakery Hut"
              description="Bakery Hut is a online bakery item seling platform on facebook. It is a cover image including their menu"
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakeryhutlogo}
              isBlog={false}
              title="Bakery Hut Logo"
              description=""
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebookOriginalContentCoffeeCabana}
              isBlog={false}
              title="Original Content"
              description=""
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebokPostCoffeeCabanaSecreenshot}
              isBlog={false}
              title="Facebok Content Post Secreenshot"
              description="Coffee Cabana is a renowned coffee shop at purbo zindabazar in Sylhet."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakeryHutSecreenshot}
              isBlog={false}
              title="Bakery Hut Secreenshot"
              description="Bakery Hut situated in Sreemangol"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
