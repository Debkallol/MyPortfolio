import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kamanashish Deb </span> Surname <span className="purple"> Kallol </span>
            My home town is <span className="purple"> Sylhet city.</span>
            <br />My profession is to generate something for mankind as the purpose of this I am styduing engineering in Electrical and Electronics in a reputed university named Metropolitan University. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art, Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling playing football 
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Technology
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
