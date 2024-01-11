import React from 'react';
import './Skills.css';
import Skill from '../Skill/Skill';
import Data from '../../Data.json';

const Skills = () => {
  return (
    <div id='skills' className='skills text-center pt-4 '>
      
      <h1 className=' my-1 display-1 fw-bold '><span className='title'>Skills</span></h1>
      <div className=' mx-4 mt-4'>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4  mt-4 '>
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
