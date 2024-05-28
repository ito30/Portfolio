import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGoland,
  SiMacos,
  SiIntellijidea,
  SiDiscord,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        Macos <br/> <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        VSCode <br/> <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Intellij <br/> <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Postman <br/> <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Slack <br/> <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Discord <br/> <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Goland <br/> <SiGoland />
      </Col>
    </Row>
  );
}

export default Toolstack;
