import React from 'react';
import './Home.css';
import downarrow from '../../assets/down-arrow  2.svg'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  return (
    <>
      <div id='home' className='w-100 d-flex flex-column justify-content-center align-items-center '>
        <div className=' row '>

          <div className='col-lg-10 col-sm-12 mx-auto mt-4'>
            <div className='text-center '>
              <p id='welcometext' className=' h3 my-4 '>
                Welcome to my digital playground!
              </p>
              <p className='display-1 fw-bold  mb-4 '>
                <span className=' title ' >  I'm  Shubham Parade </span>
              </p>
              <div className='d-flex flex-column align-items-center'>

                <TypeAnimation className='h5  pb-1 mb-4'
                  sequence={['FrontEnd Developer', 500, 'React Developer', 500]}
                  style={{ fontSize: '2em', fontFamily: 'Arial, sans-serif;' }}
                  repeat={Infinity}
                />
              </div>

              <p className='mb-4 px-4 text-justify'>
                On a mission to turn ideas into captivating web experiences. Dive into my world of code and creativity, where every line brings your vision to life. Let's build something extraordinary together.
              </p>
              <div className="align-center">
                <a
                  href="/resume.pdf"
                  download="Resume_Shubham.pdf"
                  className="btn btn-dark"
                >
                  Download CV
                </a>
              </div>


              <img src={downarrow} alt="arrow" className='mt-4 downarrow' />



            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default Home;
