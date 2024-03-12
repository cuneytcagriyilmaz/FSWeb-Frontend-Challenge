import React, { useContext } from 'react';
import GithubLogo from '../../assests/github.svg'
import LinkedInLogo from '../../assests/linkedin-in.svg'
import './hero.css';
import { DataContext } from "../../context/DataContext";




function Hero() {

    const { content } = useContext(DataContext);

    return (
        <div className="hero-container">
            <div className="left-section">
                <p className="hero-name font-bold">{content.aboutSection.name}</p>
                <h1 className="hero-h1">{content.title}</h1>
                <p className="left-section-info">{content.description}</p>
                <div className="button-container-hero">
                    <button className="hire-button">{content.headerData.navigationLinks[2]}</button>
                    <button className="github-button"> <img src={GithubLogo} alt="Github Logo" />Github</button>
                    <button className="linkedIn-button"> <img src={LinkedInLogo} alt="Linkedin Logo" />Linkedin</button>
                </div>
            </div>
            <div className="right-section">
                <img className='hero-photo' src="/Cagri.jpg" />
            </div>
        </div>
    );
}

export default Hero;
