import React from 'react';
import './Home.css';
import downarrow from '../../assets/downarrow.svg'
import { TypeAnimation } from 'react-type-animation';
import { Container, Row } from 'react-bootstrap';


const Home = () => {

  return (
    <>

      <section id='home' className='parallaxEffect'>

        <Container className='d-flex flex-column justify-content-center align-items-center h-100  p-0 '>

          <Row className='home_welcometext m-0'>Welcome to my digital playground!</Row>
          <Row className=' home_section_name m-0'>I'm  Shubham Parade </Row>
          <Row className='  fw-bold m-0 pt-2 my-4' >
            <TypeAnimation className='h5  m-0 p-0'
              sequence={['FrontEnd Developer', 500, 'React Developer', 500]}
              repeat={Infinity}
            />
          </Row>
          <Row className='m-0 mb-4 text-justify'>On a mission to turn ideas into captivating web experiences. Dive into my world of code and creativity, where every line brings your vision to life. Let's build something extraordinary together.
          </Row>
          {/* <Row className='m-0 mb-4'>
    <a href="/resume.pdf" download="Resume_Shubham.pdf"
      className="btn btn-dark">
      Download CV
    </a>
  </Row> */}
          <Row className=''>
            <img src={downarrow} alt="arrow" className='mt-4 downarrow ' />
          </Row>

        </Container>

      </section>


    </>

  );
};

export default Home;
