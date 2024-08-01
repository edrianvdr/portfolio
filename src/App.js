import React from 'react';
import './index.css';

import Header from './components/sections/Header';
import Navigation from './components/sections/Navigation';
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
        <a href="#contact-me" id="top" className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:text-blue-800 focus:p-4 focus:outline-none">Skip to Contact Me</a>
        <Header />

        <main>
          <div className="w-full md:max-w-screen-xl mx-auto">
            <Services />
          </div>

          <div className="bg-blue-800">
            <div className="w-full md:max-w-screen-xl mx-auto">
              <WorkExperience />
            </div>
          </div>

          <div className="w-full md:max-w-screen-xl mx-auto">
            <Projects />
          </div>

          <div className="bg-blue-800 py-16">
            <div className="w-full md:max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5">
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

      <Navigation />
      <Footer />

      <a href="#top" className="sr-only focus:not-sr-only focus:fixed focus:bottom-4 focus:right-4 focus:bg-white focus:text-blue-800 focus:border focus:border-blue-800 focus:p-4 focus:px-6 focus:items-center focus:justify-center focus:rounded-full focus:text-xl focus:outline-none">
        <span className="sr-only">Back to top</span>
        <i className="fas fa-arrow-up text-xl"></i>
      </a>

    </>
  );
}

export default App;
