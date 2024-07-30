import React from 'react';
import './index.css';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import WorkExperience from './components/sections/WorkExperience';
import Education from './components/sections/Education';
import Awards from './components/sections/Awards';
import Services from './components/sections/Services';
import ContactMe from './components/sections/ContactMe';

function App() {
  return (
    <>
      <div className="App">
        <a href="#user_name" className="sr-only">Contact Edrian Delos Reyes</a>
        <Header />

        <main>
          <div className="w-full md:max-w-screen-xl mx-auto px-2 md:px-0">
            <Services />
          </div>

          <div className="bg-blue-800 my-4 py-4">
            <div className="w-full md:max-w-screen-xl mx-auto">
              <WorkExperience />
            </div>
          </div>

          <div className="w-full md:max-w-screen-xl mx-auto">
            <Projects />
          </div>

          <div className="bg-blue-800 my-4 py-16">
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

          <div className="bg-blue-800">
            <div className="w-full md:max-w-screen-xl mx-auto">
              <ContactMe />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
