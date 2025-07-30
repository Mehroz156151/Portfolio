import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* FluentAI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.istockphoto.com/id/1464682653/photo/robot-talking-to-human.jpg?s=612x612&w=0&k=20&c=Qs0vg4TKQbsAwz54SzI5yKqTw2wrUgBzZJV4Clpm1Gg="
              isBlog={false}
              title="FluentAI with Bella"
              description={
                <>
                  An AI-powered English-speaking assistant built with React and custom-trained T5 & LLaMA 2 models that provides real-time grammar correction and natural spoken conversations to help users practice fluent, confident English.
                  <br />
                  <ul>
                    <li>Speech recognition using Web Speech API</li>
                    <li>Grammar suggestions with real-time feedback</li>
                    <li>Conversational AI powered by fine-tuned models</li>
                    <li>Ideal for non-native speakers improving fluency</li>
                  </ul>
                </>
              }
              demoLink="https://fluent-ai-with-bella.vercel.app/"
            />
          </Col>

          {/* Image Gallery */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.istockphoto.com/id/1201169785/photo/blue-responsive-desktop-with-devices-showing-responsive-portfolio-website.jpg?s=612x612&w=0&k=20&c=PniO1OGEeVAO1FzKvJlTpl2XutueUUQJtOXnDazXi6s="
              isBlog={false}
              title="Image Gallery"
              description={
                <>
                  A fully responsive and visually engaging image gallery created using HTML, CSS, and vanilla JavaScript, designed with clean layouts, hover animations, and mobile-friendly performance.
                  <br />
                  <ul>
                    <li>Pure HTML/CSS/JS implementation — no libraries</li>
                    <li>Hover zoom-in effects and smooth transitions</li>
                    <li>Gallery adapts seamlessly to all screen sizes</li>
                    <li>Built with Flexbox and responsive media queries</li>
                  </ul>
                </>
              }
              ghLink="https://github.com/Mehroz156151/ImageGallery"
              demoLink="https://mehroz156151.github.io/ImageGallery/"
            />
          </Col>

          {/* SkinGenius */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.istockphoto.com/id/1145724915/photo/design-of-the-smartphone-screen-application-of-cosmetics-online-white-serum-bottle-and-cream.jpg?s=612x612&w=0&k=20&c=t-2cujhj6nh5IHTOayVMsmUXFTrfQzzCwW8g8SiZB6Q="
              isBlog={false}
              title="SkinGenius"
              description={
                <>
                  A smart skincare recommendation web app where users select skin concerns and product types to receive tailored product suggestions, built with React.js and a structured product dataset.
                  <br />
                  <ul>
                    <li>Dropdown filters for skin problems and product types</li>
                    <li>Uses JSON dataset to match user preferences</li>
                    <li>Minimal UI for fast product discovery</li>
                    <li>No login required — instant suggestions</li>
                  </ul>
                </>
              }
              ghLink="https://github.com/Mehroz156151/SkinCare"
              demoLink="https://skin-care-ecru.vercel.app/"
            />
          </Col>

          {/* Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.istockphoto.com/id/2115470813/photo/portfolio-word-with-tower-crane.jpg?s=612x612&w=0&k=20&c=KiMOyCRIB-IYUBa8NI-S4LyLJv2utvJDeRtW2omXrT4="
              isBlog={false}
              title="Portfolio Website"
              description={
                <>
                  A personal developer portfolio built with React.js to showcase projects, skills, and resume, featuring responsive design and modern UI elements.
                  <br />
                  <ul>
                    <li>Sectioned layout: Home, About, Resume, Projects</li>
                    <li>Bootstrap & custom CSS for smooth responsiveness</li>
                    <li>Links to GitHub, LinkedIn, and live projects</li>
                    <li>Particle background and animations for polish</li>
                  </ul>
                </>
              }
              ghLink="https://github.com/Mehroz156151/Portfolio"
              demoLink="https://portfolio-theta-two-76.vercel.app/"
            />

          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
