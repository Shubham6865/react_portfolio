import React from 'react';
import './Skills.css';
import Skill from '../Skill/Skill';
import Data from '../../Data.json';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <>
      <Container id='skills' className='d-flex flex-column justify-content-center align-items-center h-100 p-0  '>

        <Row>
          <span className=' title display-1 fw-bold'>Skills</span>
        </Row>
        <Row className='mt-4 w-100 '>
          {Data.skills.map((skill) => (
            <Col key={skill.id} xs={6} md={4} lg={3} className='p-0' >

              <Skill title={skill.title} src={skill.src} />


            </Col>
          ))}
        </Row>
      </Container>



    </>
  );
};

export default Skills;