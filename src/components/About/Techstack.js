import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGoogleCloudPlatform,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        Javascript <br/> <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Golang <br/> <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Nodejs <br/> <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        GCP <br/> <DiGoogleCloudPlatform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Java <br/> <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Spring Boot <br/> <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Git <br/> <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Redis <br/> <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        PostgreSQL <br/> <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Python <br/> <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        MongoDB <br/> <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Nextjs <br/> <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        React <br/> <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
