import React, { useContext } from "react";
import './projects.css';
import { DataContext } from "../../context/DataContext";

function Projects() {
    const { content } = useContext(DataContext);

    return (
        <section id="projects" className="section-container">
            <h1 className="projects-header-h1">Projeler</h1>
            <div className="projects-container">
                {content.projectsData.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.imageUrl} className="project-img" alt="Project" />
                        <h3 className="project-header-h3">{project.title}</h3>
                        <p className="project-info-p">{project.description}</p>
                        <div className="project-button">
                            {project.technologies.map((tech, index) => (
                                <button key={index} className="project-button-info">{tech}</button>
                            ))}
                        </div>
                        <div className="project-routing">
                            <a href={project.githubLink} target="_blank" >GitHub</a>
                            <a href={project.viewSiteLink} target="_blank">View Site</a>
                        </div>
                    </div>


                ))}
            </div>
        </section>
    );
}

export default Projects;

