import React from 'react';
import './About.css';
import Profile from '../../assets/Profile.png'

const About = () => {
  return (
    <div id='about' className=''>
    <div className='mb-4 row'>
      <h1 className=' display-1 fw-bold  '> <span className='title'>About</span></h1>
      </div>
      <div className='row  px-4 mx-4  commanbg d-flex align-items-center justify-content-center '>
      
     
        <div className='col-12 col-md-8 p-0 m-0  '>

           <div className=' text-dark  text-start h-100 about text-justify'>
          <p className='pt-4 px-4'>
            Hello! I'm dedicated React developer with a knack for crafting seamless web experiences. With expertise in React, JavaScript, HTML, CSS, and Bootstrap, 
            I thrive on turning concepts into captivating digital realities.
          </p>
          <p className='px-4 fw-bold'>
          Coding Enthusiast
          </p>
          <p className='px-4'>
          Beyond the screen, I'm a perpetual learner, exploring the latest frontend trends and experimenting with new technologies.
          </p>
          <p className='px-4 fw-bold'>
          Let's Build Together!
          </p>
          <p className='px-4'>
          I'm on the lookout for opportunities to collaborate and contribute to exciting projects. Let's connect and create something amazing!
          </p>
          <p className='px-4'>
          <span>Ready to turn lines of code into memorable user experiences? </span>
          <span><a  href="#contactme" className='text-primary'>
          Let's chat!
              </a></span>
          
          </p>
          </div> 

        </div>
        <div className='col-12 col-md-4  profile  p-0 m-0 '>
          
          <div className=" profile_img rounded-circle " >
            <img src={Profile} alt="Profile Img" />
          </div>

        </div>

       
      </div>
    </div>
  );
};

export default About;
