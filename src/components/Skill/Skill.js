import React from 'react';
import './Skill.css';
import { Row } from 'react-bootstrap';

const Skill = ({ title, src }) => {
  // Dynamically import the image using require
  // const imageSrc = require(`../../assets/${src}`).default;

  return (

    <Row className='skill  p-0 m-4 mb-0'>
      <Row className='skill_Logo p-0 m-0'>

        <img src={require(`../../assets/Logo/${src}`)} alt={`Logo for ${title}`} />
      </Row>
      <h3 className='skill_title '>{title}</h3>

    </Row>

  );
};

export default Skill;