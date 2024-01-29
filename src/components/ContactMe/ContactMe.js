import React from 'react';
import './ContactMe.css';

const ContactMe = () => {



  return (
    <div id='contactme' className='m-4 p-0 '>
      <div className=' d-flex align-items-center flex-column '>
        <h1 className='display-1 fw-bold mb-4 '><span className='title'>Get in Touch</span></h1>
        <div className=" p-4 contactmeform rounded">
          <form target="_blank" action="https://formsubmit.co/shubham.parade6865@gmail.com" method="POST">
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input type="text" name="name" className="form-control my-3 " placeholder="Full Name" required />
                </div>
                <div className="col">
                  <input type="email" name="email" className="form-control my-3" placeholder="Email Address" required />
                </div>
                <div className="col">
                  <textarea placeholder="Your Message" className="form-control my-3 border-dark" name="message" rows="03" required></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-dark btn-block form-control">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
