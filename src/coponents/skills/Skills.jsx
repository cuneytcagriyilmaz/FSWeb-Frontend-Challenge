import React, {useContext} from 'react';
import './skills.css';
import skillsData from '../../data/SkillsData';
import { DataContext } from "../../context/DataContext";



function Skills() {
    const { content } = useContext(DataContext);

    return (
        <div className='skills'>
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
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
