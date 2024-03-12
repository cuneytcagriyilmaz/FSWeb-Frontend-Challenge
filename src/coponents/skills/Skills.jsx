import React, {useContext} from 'react';
import './skills.css';
import { DataContext } from "../../context/DataContext";



function Skills() {
    const { content } = useContext(DataContext);

    return (
        <div className='skills'>
            <h1 className="skills-title">{content.skill}</h1>
            <div className="skills-container">
                {content.skillsData.map((skill, index) => (
                    <div key={index} className="skill">
                        <h2 className="skill-title">{skill.title}</h2>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
