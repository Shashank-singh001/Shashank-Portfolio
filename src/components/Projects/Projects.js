import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Space-Shooter Game"
              description="A 2D Space Shooter game using Unity and C#, featuring interactive fluency between player, enemy, and power-up scripts, with 3 custom power-ups (Speed Boost, Triple Shot, Shield), alongside prefabs for enemies, lasers, and a main menu, all optimized for smooth gameplay and performance."
              ghLink="https://github.com/Shashank-singh001/Space-Shooter-Game/tree/master"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E-Sport Website"
              description="Developed a responsive 10+ page E-sports website using HTML, CSS, and JavaScript, featuring interactive elements for enhanced user experience, optimized for both desktop and mobile with a good performance score and SEO score."
              ghLink="https://github.com/Shashank-singh001/E-sport-website?tab=readme-ov-file"
              demoLink="https://shashank-singh001.github.io/E-sport-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flappy Bird"
              description="Developed a classic Flappy Bird game using Unity and C#, featuring smooth player mechanics, responsive physics, and dynamic obstacles. Integrated a scoring system for engaging gameplay. Optimized for cross-platform performance, ensuring a seamless user experience."
              ghLink="https://github.com/Shashank-singh001/flappy-Bird"
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Local-Connect"
              description="Developed a fully functional e-commerce website. the platform allows users to browse, search, and purchase products,
featuring a user-friendly interface and secure authentication."
              ghLink="hhttps://github.com/Shashank-singh001/Local-Connect"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
