import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tiketCom from "../../Assets/Projects/flight-schedule-search.png";
import ocHome from "../../Assets/Projects/oc-home-menu.png";
import topedPdp from "../../Assets/Projects/pdp-1-2.png";
import ocIntools from "../../Assets/Projects/oc-intools.png";
import topedReview from "../../Assets/Projects/review-1-2.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topedPdp}
              isBlog={false}
              title="Tokopedia PDP"
              description="Tokopedia, one of Indonesia's largest marketplaces, serves tens of millions of monthly active users. As the service owner of the Product Detail Page (PDP), I maintain its functionality and develop new features. The PDP, built with Go, PostgreSQL, Redis, and NSQ, handles up to 6,000 RPS during load testing and 2,000 RPS under normal conditions. This ensures a seamless user experience, boosting customer satisfaction, engagement, and conversion rates, thereby driving our marketplace's success."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.tokopedia.com/erigo/celana-unisex-erigo-chino-pants-zeno-light-brown-zeno-l-brown-36"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={topedReview}
              isBlog={false}
              title="Tokopedia Review"
              description="Tokopedia, a leading marketplace in Indonesia, serves tens of millions of monthly active users. As the service owner for Product Reviews, I ensure high performance and continuous innovation. Built with Go, PostgreSQL, Redis, Elasticsearch, and NSQ, our system handles up to 7,500 RPS in load testing and 3,500 RPS during regular operations. This reliability builds user trust, enhances engagement, boosts satisfaction, and improves conversion rates, driving Tokopedia's growth and success."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.tokopedia.com/erigo/celana-unisex-erigo-chino-pants-zeno-light-brown-zeno-l-brown-36/review"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocHome}
              isBlog={false}
              title="Office Coffee App"
              description="The Office Coffee App saves you time by making it easy to enjoy high-quality coffee every day. With the app, users can pre-order their favorite coffee in advance and receive notifications when their order is ready, eliminating the stress and uncertainty of queuing. I led and built a team of 7 from scratch, including backend engineers, iOS engineers, a web engineer, and a QA specialist. The app is developed with Swift for iOS, Go for the backend, Redis & Redis Stream for real-time data, PostgreSQL for database management, Firebase for push notifications, and hosted on Vercel and Fly.io."
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocIntools}
              isBlog={false}
              title="Office Coffee Dashboard"
              description="The Office Coffee Dashboard is a comprehensive tool used for maintaining internal operations across all Office Coffee Shops. It has features like revenue management, product management, voucher management, subscription management, and membership management. The dashboard is built with a robust tech stack including React for the frontend, Go for the backend, Redis & Redis Stream for real-time data, PostgreSQL for database management, Firebase for push notifications, and hosted on Vercel and Fly.io. This integrated system ensures efficient operations and enhanced customer satisfaction."
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiketCom}
              isBlog={false}
              title="Tiket.com Flight Search"
              description="Tiket.com is one of the largest OTA system in Indonesia that serves millions of monthly active users. I was in charge of handling flight search service to maintain its functionality and to provide continuous innovation. The backend system was built with Java Spring Boot, MongoDB, Redis and Kafka, also hosted in GCP"
              demoLink="https://www.tiket.com/pesawat"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
