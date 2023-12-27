import React from 'react';
import './Skills.css';
import Skill from '../Skill/Skill';
import Data from '../../Data.json';

const Skills = () => {
  return (
    <div id='skills' className='skills text-center pt-4 '>
      <h1 className=' display-1 fw-bold text-white'>Skills</h1>
      <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 '>
          {Data.skills.map((skill) => (
            <div key={skill.id} className='col'>
              <Skill title={skill.title} src={skill.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
