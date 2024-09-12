import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import SkillsRadar from './sections/SkillRadar';
import Skills from './sections/Skills/Skills';
import Publication from './sections/Publications/Publication';
import React from 'react';



function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Publication/>
      <Contact />
      {/* <SkillsRadar/> */}
      <Footer />
    </>
  );
}

export default App;
