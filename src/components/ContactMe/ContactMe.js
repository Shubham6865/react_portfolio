import React from 'react';
import './ContactMe.css';

const ContactMe = () => {



  return (
    <div id='contactme' className='m-4 p-0'>
      <div className='container d-flex align-items-center flex-column'>
        <h1 className='display-1 fw-bold text-white'>Get in Touch</h1>
        <div className=" p-4 contactmeform">
          
          <form target="_blank" action="https://formsubmit.co/shubham.parade6865@gmail.com" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control my-3 " placeholder="Full Name" required/>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control my-3" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control my-3 " name="message" rows="03" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block form-control">Submit</button>
  </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
