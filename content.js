import React from "react";
import ReactDOM from "react-dom";

const Resume = () => (
  <div>
    <Header />
    <PersonalInfo />
    <Education />
    <WorkExperience />
    <Skills />
    <Footer />
  </div>
);

const Header = () => <h1>My Resume</h1>;

const PersonalInfo = () => (
  <section>
    <h2>Personal Information</h2>
    <p>Name: John Doe</p>
    <p>Email: john.doe@example.com</p>
  </section>
);

const Education = () => (
  <section>
    <h2>Education</h2>
    <p>BSc Computer Science, University XYZ</p>
  </section>
);

const WorkExperience = () => (
  <section>
    <h2>Work Experience</h2>
    <p>Software Developer at ABC Corp.</p>
  </section>
);

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <p>JavaScript, React, Node.js</p>
  </section>
);

const Footer = () => (
  <footer>
    <p>Thank you for considering my application.</p>
  </footer>
);

ReactDOM.render(<Resume />, document.getElementById("root"));
