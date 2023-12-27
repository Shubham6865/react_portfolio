import React from 'react'
import './Footer.css';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <div id='footer' className='footer p-4 contacts'>

      <div className=' row p-0 m-0   '>
        
        <div className="col-lg-6 col-sm-12  ">
          <div className="row  my-2 "><strong >Contacts</strong></div>
          <div className="row">
            <span className='mx-2'><i class="fa-solid fa-mobile-screen"></i>+918855889034 </span>
          </div>
          <div className="row">
            <span className='mx-2'><i class="fa-regular fa-envelope"></i> shubham.parade6865@gmail.com</span>
          </div>
        </div>
        <div className="col-lg-6  col-sm-12">
        <div className="row  my-2"><strong >Get in Touch</strong>
        </div>
        <div className="row">
            
          <div className="col ">
            <a href="https://www.linkedin.com/in/shubhamparade" rel="noreferrer" target='_blank'> <i class="fa-brands fa-linkedin mx-2"></i></a>
           
            
            <a target="blank"  href="https://www.instagram.com/shubham_._sp_._" ><i class="fa-brands fa-instagram mx-2"></i></a>
    
          </div>
        </div>
      
        </div>
        
      </div>
      <div className='p-0 my-2 mx-0 row  text-sm '>
        <p className='mb-0'>
        &copy; Copyright Shubham Parade.{year} 
        </p>
        <p className='pt-0 mb-0'>
        All Rights Reserved.
        </p>
      
      </div>
      
    </div>
  )
}

export default Footer
