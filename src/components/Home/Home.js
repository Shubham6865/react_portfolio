import React from 'react';
import './Home.css'; 
import downarrow from '../../assets/down-arrow.svg'


const Home = () => {
  
  return (
    <>
    <div id='home' className='w-100 d-flex flex-column justify-content-center align-items-center '>
        <div  className=' row '>

          <div className='col-lg-10 col-sm-12 mx-auto mt-4'> 
            <div className='text-center '>
              <p id='welcometext' className=' h3 my-4 text-light'>
                Welcome to my digital playground!
              </p>
              <p className='display-5 fw-bold text-warning mb-4 nametext'>
                <span className='text-light '>I'm </span>Shubham Parade
              </p>
              <div className='d-flex flex-column align-items-center'>
                <h1 className='h5 text-light'>
                  Front-End React Developer
                </h1>
                <div style={{ width: '250px' }} className='border border-warning mb-4'></div>
              </div>
              
              <p className='mb-4'>
                On a mission to turn ideas into captivating web experiences. Dive into my world of code and creativity, where every line brings your vision to life. Let's build something extraordinary together.
              </p>
             
                  <img src={downarrow} alt="arrow" className='mt-4 downarrow'  />
            


            </div>
          </div>
      
    </div>
    </div>
    </>

  );
};

export default Home;
