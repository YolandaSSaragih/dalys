import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Yolanda Septania Saragih</span>{" "}
            from <span className="purple">Sumatra Utara, Indonesia</span>.
            <br />
            I’m an <span className="purple">Information Systems student</span>{" "}
            with a strong interest in{" "}
            <span className="purple">Data Analysis</span> at{" "}
            <span className="purple">Frontend Development</span>.
            <br />I have experience as a{" "}
            <span className="purple">System Analyst</span> and{" "}
            <span className="purple">UI/UX Designer</span>, where I analyze
            business requirements, design system flows, and translate ideas
            into functional and user-friendly interfaces.
            <br />
            <br />
            Outside of academics and projects, I enjoy activities that help me
            stay curious and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring data and finding insights 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing UI/UX interfaces 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into insights and ideas into impactful digital solutions."
          </p>
          <footer className="blockquote-footer">Yolanda Saragih</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
