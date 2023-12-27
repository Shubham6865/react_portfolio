import React from 'react';
import './Skill.css';

const Skill = ({ title, src }) => {
  // Dynamically import the image using require
  // const imageSrc = require(`../../assets/${src}`).default;

  return (
    <div >
      <div className='skill'>
        <div className='skill_Logo m-4 mb-0'>
         
          <img src={src} alt={`Logo for ${title}`} />
        </div>
        <h1 className='skill_title mx-4 '>{title}</h1>
        
      </div>
    </div>
  );
};

export default Skill;