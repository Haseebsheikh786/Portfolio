import React from "react";

const Projects = ({ title, description, link }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary" target="blank">
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
