import React from "react";
import './projects.css';
function Projects() {
    return (
        <section id="projects" className="section-container">
            <h1 className="projects-header-h1">
                Projeler
            </h1>
            <div className="projects-container">
                <div className="project">
                    <img src={"https://picsum.photos/300/180"} className="project-img" />
                    <h3 className="project-header-h3">
                        Workintech
                    </h3>
                    <p className="project-info-p">
                    A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.                    </p>
                    <div className="project-button">

                        <button
                            className="project-button-info">
                            React
                        </button>
                        <button
                            className="project-button-info ">
                            Redux
                        </button>
                        <button
                            className="project-button-info">
                            Axios
                        </button>

                    </div>
                    <div className="project-routing">
                        <a target="_blank">
                            GitHub
                        </a>
                        <a target="_blank">
                            Wiev Site
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src={"https://picsum.photos/300/180"} className="project-img" />
                    <h3 className="project-header-h3">
                        Workintech
                    </h3>
                    <p className="project-info-p">
                    A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.                    </p>
                    <div className="project-button">

                        <button
                            className="project-button-info">
                            React
                        </button>
                        <button
                            className="project-button-info ">
                            Redux
                        </button>
                        <button
                            className="project-button-info">
                            Axios
                        </button>

                    </div>
                    <div className="project-routing">
                        <a target="_blank">
                            GitHub
                        </a>
                        <a target="_blank">
                            Wiev Site
                        </a>
                    </div>
                </div>
                <div className="project">
                    <img src={"https://picsum.photos/300/180"} className="project-img" />
                    <h3 className="project-header-h3">
                        Workintech
                    </h3>
                    <p className="project-info-p">
                    A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.                    </p>
                    <div className="project-button">
                        <button
                            className="project-button-info">
                            React
                        </button>
                        <button
                            className="project-button-info ">
                            Redux
                        </button>
                        <button
                            className="project-button-info">
                            Axios
                        </button>

                    </div>
                    <div className="project-routing">
                        <a target="_blank">
                            GitHub
                        </a>
                        <a target="_blank">
                            Wiev Site
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
