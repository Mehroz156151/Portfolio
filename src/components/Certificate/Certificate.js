import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import certificate from "../../Assets/Certificate.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Certificate() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <div>
      <Container
        fluid
        className="certificate-section"
        style={{ paddingTop: "120px", paddingBottom: "60px" }}
      >
        <Particle />

        {/* Section Heading */}
        <Row className="text-center mb-5" style={{ justifyContent: "center" }}>
          <h2
            style={{
              fontWeight: "700",
              fontSize: "32px",
              color: "#0d6efd",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            IBM Website Development Fundamentals
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#0d6efd",
              borderRadius: "2px",
              margin: "10px auto 0",
            }}
          ></div>
        </Row>

        {/* Certificate PDF with Buttons Below */}
        <Row className="justify-content-center">
          <div
            className="p-3 rounded-3 shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              maxWidth: "850px",
            }}
          >
            {/* Certificate Preview */}
            <Document file={certificate} className="d-flex justify-content-center">
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.0 : 0.55}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>

            {/* Buttons Bar */}
            <div
              className="d-flex justify-content-between"
              style={{
                marginTop: "15px",
                borderTop: "1px solid rgba(255,255,255,0.2)",
                paddingTop: "12px",
              }}
            >
              <Button
                href={certificate}
                target="_blank"
                className="px-3 py-2 shadow-sm"
                style={{
                  flex: 1,
                  marginRight: "10px",
                  background: "#0d6efd",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <AiOutlineDownload size={18} />
                &nbsp;Download
              </Button>

              <Button
                href="https://www.credly.com/badges/4aee169a-dbef-4c2d-a3bd-d6fd7ecc6a4b"
                target="_blank"
                className="px-3 py-2 shadow-sm"
                style={{
                  flex: 1,
                  background: "#28a745",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <FaCheckCircle size={18} />
                &nbsp;Verify
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Certificate;