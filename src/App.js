import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import WorkExperience from './components/sections/WorkExperience';
import Education from './components/sections/Education';
import Awards from './components/sections/Awards';
import { useState } from 'react';

function App() {
  return (
    <>
      <Header />
      <div className="App">
      <div className="w-full md:max-w-screen-xl mx-auto">
      <Projects />
      <Skills />
      <Education />
      <Awards />
        </div>
      </div>

      

      <Footer />
    </>
  );
}

export default App;
