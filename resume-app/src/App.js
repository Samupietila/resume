import React from "react";

const Resume = () => {
  return (
    <div>
      <Header />
      <PersonalInfo />
      <Education />
      <WorkExperience />
      <Skills />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>My Resume</h1>
    </header>
  );
};

const PersonalInfo = () => {
  return (
    <section>
      <h2>Personal Information</h2>
      {/* Add your personal info here */}
    </section>
  );
};

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {/* Add your education info here */}
    </section>
  );
};

const WorkExperience = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      {/* Add your work experience here */}
    </section>
  );
};

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      {/* Add your skills here */}
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Thank you for considering my application.</p>
    </footer>
  );
};

export default Resume;
