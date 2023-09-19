import React from "react";
import Style from "./Style.module.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h2>About Me</h2>
        <p class="shadow p-3 bg-body-tertiary rounded">
          I'm Haseeb Farrukh, a MERN Stack Developer with a strong foundation in
          Reactjs ,Nodejs, Expressjs and MongoDB. Eager to learn and contribute,
          I am passionate about creating dynamic and user-friendly websites.
        </p>
        <h4 className="text-danger fw-bold mt-4">Skills:</h4>
        <div id={Style.id} class="card my-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">HTML , CSS , JavaScript</li>
            <li class="list-group-item">Bootstrap , Tailwind CSS</li>
            <li class="list-group-item">Reactjs , Redux</li>
            <li class="list-group-item">Node.js , Express.js , MongoDB</li>
            <li class="list-group-item">Git & GitHub</li>
            <li class="list-group-item">Photography & Video Editing</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
