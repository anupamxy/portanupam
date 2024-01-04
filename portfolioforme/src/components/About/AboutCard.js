import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Namaste 🙏 Everyone, I am <span className="purple">Anupam Singh</span> 
              <p className="purple"> from Varanasi, India.</p>
            <br />
            
            <br />
            🎓 I'm a pre-final year student at  Motilal Nehru National Institute of Technology
            <br />
            <br />
            Apart from coding And My Studies, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🏏 Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> 🧘🏻 Doing Yoga And Meditation
            </li>
            <li className="about-activity">
              <ImPointRight /> 📈 participating in various marketing and leadership talks 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "From gears to code, I've embraced the precision of mechanical engineering and translated it into the intricate world of software development, forging a path where innovation meets precision.!"{" "}
          </p>
          <footer className="blockquote-footer">By Anupam singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
