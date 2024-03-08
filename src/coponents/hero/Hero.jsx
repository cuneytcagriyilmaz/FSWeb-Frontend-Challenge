import React from 'react';
import './hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="left-section">
                <p className="hero-name font-bold">Almila Su</p>
                <h1 className="font-bold hero-h1">Creative thinker Minimalism lover</h1>
                <p className="text-gray-600">Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                <div className="button-container-hero">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button 1</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button 2</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button 3</button>
                </div>
            </div>
            <div className="right-section">
                <img src="https://picsum.photos/476/375" alt="Description of the image" />
            </div>
        </div>
    );
}

export default Hero;
