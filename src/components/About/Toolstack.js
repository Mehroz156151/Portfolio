import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiPostman, 
  SiVercel, 
  SiGithub, 
  SiGit 
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGithub />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiGit />
        <p>Git</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
