import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiZustand,
  SiReact,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <CgCPlusPlus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiReact />
        <p>React Native</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons text-center">
        <SiZustand />
        <p>Zustand</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <DiJava />
        <p>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
