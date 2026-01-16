import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an Information Systems student with a strong interest in data analysis
and frontend development. I enjoy transforming data and system requirements
into meaningful insights and intuitive digital solutions.

              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Data analyst, JavaScript, UI/UX design, and Java{" "}
                </b>
              </i>
              — and I enjoy working with data-driven systems and user-focused web applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  data-driven web applications, system workflows, and analytical solutions{" "}
                </b>
              </i>
              that support effective decision-making and provide clear user experiences.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> data analysis tools, JavaScript </b> and modern tools such as{" "}
              <i>
                <b className="purple">SQL and React.js</b>
              </i>
              to explore data and generate meaningful insights and to create data-driven and user-friendly web applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
