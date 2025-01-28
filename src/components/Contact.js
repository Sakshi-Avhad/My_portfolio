import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
        <h1>Contact Me</h1>

        <div className='contact-icon'>  
            <a href='https://www.linkedin.com/in/sakshiavhad/'
            target="_blank" 
            rel="noopener noreferrer" 
            className="items">
            <FaLinkedin className='icon' />
            </a>

            <a href='https://github.com/Sakshi-Avhad '
             target="_blank" 
             rel="noopener noreferrer" 
             className="items">
            <FaGithub className='icon'/>
            </a>
            
            <a href="mailto:avhad0116@gmail.com" 
          className="items" >
            <MdEmail className='icon' />
            </a>
        </div>
    </div>
    </>
  );
};

export default Contact;