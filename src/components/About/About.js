import React from 'react';
import './About.css';
import Profile from '../../assets/Profile.png'
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>

      <Container id='about' className='parallaxStyle d-flex flex-column justify-content-center align-items-center h-100 p-0 my-4'>

        <Row>
          <span className=' title display-1 fw-bold my-4'>About</span>
        </Row>
        <Row className='w-100 p-2 commanbg' >
          <Col sm={12} md={6}
            lg={8} className='text-start'>
            <p >
              Hello! I'm dedicated React developer with a knack for crafting seamless web experiences. With expertise in React, JavaScript, HTML, CSS, and Bootstrap,
              I thrive on turning concepts into captivating digital realities.
            </p>
            <p className=' fw-bold'>
              Coding Enthusiast
            </p>
            <p >
              Beyond the screen, I'm a perpetual learner, exploring the latest frontend trends and experimenting with new technologies.
            </p>
            <p className='fw-bold'>
              Let's Build Together!
            </p>
            <p>
              I'm on the lookout for opportunities to collaborate and contribute to exciting projects. Let's connect and create something amazing!
            </p>
            <p>
              <span>Ready to turn lines of code into memorable user experiences? </span>
              <span><a href="#contactme" className='text-primary'>
                Let's chat!
              </a></span>

            </p>
          </Col>
          <Col sm={12} md={6}
            lg={4}>
            <Row className=" profile_img rounded-circle  pt-2" >
              <img src={Profile} alt="Profile Img" />
            </Row>
          </Col>
        </Row>
      </Container>



    </>
  );
};

export default About;
