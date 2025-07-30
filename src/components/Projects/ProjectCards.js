import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {/* Centered button container */}
        <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub /> &nbsp;
              GitHub
            </Button>
          )}

          {demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
