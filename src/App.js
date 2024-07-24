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
      </div>

      <div className="bg-blue-800 my-4 py-4">
        <div className="w-full md:max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 px-4 md:px-0 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <Education />
              </div>
              <div className="lg:col-span-3">
                <Skills />
              </div>
          </div>
        </div>
      </div>

          <div className="w-full md:max-w-screen-xl mx-auto">
            <Awards />
        </div>
      </div>

      

      <Footer />
    </>
  );
}

export default App;
