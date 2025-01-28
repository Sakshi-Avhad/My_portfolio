import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app-container'>
   <> 
   <Nav />
   <div className='container'></div>
   <Home />
   <About />
   <Skills />
   <Resume />
   <Projects />
   <Contact />
   </>
   </div>
  );
}

export default App;
