import React from "react";
import ProjectCard from "./Projects";

const ProjectList = () => {
  const projects = [
    {
      title: "Restaurant APP",
      description:
        "Developed a fully functional restaurant site, including  order food,  reserve table and admin  functionality.",
      link: "https://restaurant-app-pi-peach.vercel.app/",
    },
    {
      title: "Ecommerce APP",
      description:
        "Developed a fully functional e-commerce site, including user authentication, product catalog,  cart and order product functionality.",
      link: "https://ecommerce-project-app.vercel.app/",
    },
    {
      title: " Real-time Chat APP",
      description:
        "Developed a fully functional and responsive  site, including user authentication  and real time chat functionality.",
      link: "https://chat-app-hn41.vercel.app/",
    },
    {
      title: "Crud APP",
      description:
        "Developed a fully functional and responsive  site, including all the crud functionality.",
      link: "https://contacts-manager-app-topaz.vercel.app",
    },
    {
      title: "Blog APP",
      description:
        "Developed a  blog site, including  add , delete and update blog or comments functionality.",
      link: "https://blog-project-phi-dun.vercel.app/",
    },
    {
      title: "Social Media APP",
      description:
        "Developed a  Social Media site, including  Like , Comment , Post, add friend and chat with friends  functionality.",
      link: "https://github.com/Haseebsheikh786/Social-Media-APP",
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

// Projects:
// 1. E-commerce Website (React, Node.js, Express.js, MongoDB)
//    - Developed a fully functional e-commerce site, including user authentication, product catalog, and cart functionality.
//    - Implemented responsive design for a seamless user experience across devices.

// 2. Portfolio Website (HTML, CSS, JavaScript)
//    - Created a personal portfolio website showcasing my skills and projects.
//    - Designed the website for a clean and user-friendly interface.

// 3. Task Management App (React)
//    - Built a task management application to organize daily activities.
//    - Utilized React components and state management for efficient task tracking.

// Internships:
// [Company Name]
// [City, State]
// Intern - Web Developer
// [Month Year - Month Year]

// - Collaborated with the development team to create and maintain web applications.
// - Assisted in troubleshooting and debugging issues in existing code.
// - Gained experience in agile development methodologies.

// Certifications:
// - [Certification Name], [Certifying Body], [Year]

// Awards and Achievements (Optional):
// - [Any relevant awards or honors you have received]

// References:
// Available upon request.
