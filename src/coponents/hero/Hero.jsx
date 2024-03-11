import React from 'react';
import GithubLogo from '../../assests/github.svg'
import LinkedInLogo from '../../assests/linkedin-in.svg'
import './hero.css';



function Hero() {
    return (
        <div className="hero-container">
            <div className="left-section">
                <p className="hero-name font-bold">Cüneyt Çağrı YILMAZ</p>
                <h1 className="hero-h1">Creative thinker Minimalism lover</h1>
                <p className="left-section-info">Hi, I’m Cagri. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                <div className="button-container-hero">
                    <button className="hire-button">Hire Me</button>
                    <button className="github-button"> <img src={GithubLogo} alt="Github Logo" />Github</button>
                    <button className="linkedIn-button"> <img src={LinkedInLogo} alt="Linkedin Logo" />Linkedin</button>
                </div>
            </div>
            <div className="right-section">
                <img className='hero-photo' src="../assests/Cagri.jpg" />
            </div>
        </div>
    );
}

export default Hero;
