import React from 'react';
import './skills.css';

function Skills() {
    return (
        <div className='skills'>
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
                <div className="skill">
                    <h2 className="skill-title">Java Script</h2>
                    <p className="skill-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="skill">
                    <h2 className="skill-title">React.Js</h2>
                    <p className="skill-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="skill">
                    <h2 className="skill-title">Node.Js</h2>
                    <p className="skill-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
