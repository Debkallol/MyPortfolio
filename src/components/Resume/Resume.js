import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Kamanashish-Deb-Kallol.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Web Developer"
              date="June 2020 - October 2020"
              content={[
                "Design and developed Html template for various projects",
                "Worked on design and develope PSD to HTML",
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3> */}
            <Resumecontent
              title="Customer Relationship Officer"
              date="Feb 2019 - March 2020"
              content={[
                "Worked on USA based company about 1 year",
                "Worked on dealing with customers and handling data",
              ]}
            />
            {/* <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Metropolitan University"
              date="B.Sc. 2015 - 2018"
              content={["CGPA: 2.88 (Hereafter-out of 4.00)"]}
              // content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="The Scholarshome School And College"
              date="HSC 2014"
              content={["CGPA: 4.90 (out of 5.00)"]}
            />
            <Resumecontent
              title="Blue Bird School And College"
              date="SSC 2012"
              content={["CGPA: 5.00 (out of 5.00)"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                // `Current rank in Spoj ${spojRank}`,
                // `Current rank in HackerRank  ${hackerrank}`,
                "Achieve 7th position in IRC-2015 (International Robotic Challenge)",
                // "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
