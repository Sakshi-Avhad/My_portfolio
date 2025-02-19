import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='container nav_bar'>
      <div className="right">
        <a href='#home' className='nav_items'>Home</a>
        <a href='#about' className='nav_items'>About</a>
        <a href='#skills' className='nav_items'>Skills</a>
        <a href='#resume' className='nav_items'>Resume</a>
        <a href='#projects' className='nav_items'>Projects</a>
        <a href='#contact' className='nav_items'>Contact</a>
      </div>
    </div>
    </>
  );
};

export default Nav;