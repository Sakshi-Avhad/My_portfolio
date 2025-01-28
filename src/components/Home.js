import React from 'react';
import image from './Data/image.json';

const Home = () => {
  return (
    <>
      <div className='container home' id='home'>
        <div className='left'>
          <h2>Hi,<br></br>I Am Sakshi,<br></br></h2>
          <h1 className='heading'>Front End Developer.</h1>
          
          
        </div>
        <div className='right'>
          <div className='img'>
            <img src={`/assets/${image.imgSrc}`} alt='Image' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
