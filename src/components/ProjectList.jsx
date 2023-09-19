import React from "react";
import ProjectCard from "./Projects";

const ProjectList = () => {
  const projects = [
    {
      title: "Restaurant APP",
      description:
        "it has include a feature of order food, table booking and also include admin pannel",
      link: "https://restaurant-app-pi-peach.vercel.app/",
    },
    {
      title: "Ecommerce APP",
      description:
        "it has include all the features that are mostly available in ecommerce app",
      link: "https://ecommerce-project-app.vercel.app/",
    },
    {
      title: "Crud APP",
      description:
        "this is a crud app. it has include add, delete, update and read feature",
      link: "https://contacts-manager-app-topaz.vercel.app",
    },
    {
      title: "Blog APP",
      description:
        "this is also a crud app. You can read blogs and comments but only login user will be able to add, delete and update blog and comment.",
      link: "https://blog-project-phi-dun.vercel.app/",
    },
  ];
  return (
    <>
      <section id="projects">
        <h2>Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectList;
