import React from "react";

export default function App() {
  return (
    <div>
      <header>
        <h1>Resume</h1>
      </header>
      <section>
        <h2>Personal Information</h2>
        <ul>
          <li>Name: Samu</li>
          <li>Email: samu@example.com</li>
          <li>Phone: 123</li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>Degree: Bachelor of Science</li>
          <li>Major: Software development</li>
          <li>University: Metropolia Ammattikorkeakoulu</li>
          <li>Graduation Year: 2027</li>
        </ul>
      </section>
      <section>
        <h2>This will be the projects</h2>
        <ul>
          <li>Company: Not experience</li>
          <li>Position: Software Developer</li>
          <li>Duration: 2019 - Present</li>
          <li>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: JavaScript, Python, Java</li>
          <li>Frameworks: React, Node.js</li>
          <li>Database: MongoDB, MySQL</li>
        </ul>
      </section>
    </div>
  );
}
