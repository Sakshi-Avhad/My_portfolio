import React from 'react'
import skills from './Data/skills.json';

function Skills() {
  return (
    <>
    <div className='container skills' id='skills'>
      <h1>SKILLS</h1>
      <div className='items'>
      {skills.map((Data)=> (
      <>
        <div className='item' key={Data.id}>
          <img src={`/assets/${Data.imageSrc}`}   />
          <h3>{Data.title}</h3>
         </div>
       </>  
      ))}
    </div>
    </div>
    </>
  );
};

export default Skills;