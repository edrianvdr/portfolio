import './index.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from './components/Project';
import { useState } from 'react';

import inventorySystem from './assets/images/projects/2.1 Manga Store.png';
import pwdLife from './assets/images/projects/2.2 PWD LIFE.png';
import pwdDatabase from './assets/images/projects/2.3 PWD Database.png';
import ccssLogo from './assets/images/projects/2.4 CCSS Logo.png';
import pnsbLogo from './assets/images/projects/2.5 PNSB Logo.png';
import thesis from './assets/images/projects/2.6 Thesis Project.png';

function App() {
  const [role, setRole] = useState('');
  return (
    <>
      <Header />
      <div className="App">

        <h1 className='text-blue-800'>Edrian</h1>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
        />

        <div className="flex flex-wrap max-w-4xl w-full sm:w-auto mx-auto grid gap-6 sm:grid-cols-2">
          <Project 
            name='Thesis' 
            description='Developed a job hunting platform in a format of an e-commerce website featuring a recommendation algorithm to enhance user engagement.'
            src={ thesis }
            alt='Screenshot of the booking page of my thesis project'
          />
          <Project 
            name='PNSB Alumni Organization Logo' 
            description='I created the official logo of Philippine National School For the Blind Alumni Organization.'
            src={ pnsbLogo }
            alt='Logo of PNSB Alumni Organization'
          />
          <Project 
            name='CCSS Logo' 
            description='College of Computer Studies & Systems is our college department. During the CCSS Day 2023, I won the logo making contest for our department, and it became the official logo of CCSS.'
            src={ ccssLogo }
            alt='Logo of our college department, CCSS'
          />
          <Project 
            name='PWD Database' 
            description='This is a school project intended to practice database management, thus, I created a database system for persons with disability with PHP (native) and MySQL with features CRUD, searching, and filtering data.'
            src={ pwdDatabase }
            alt='Screenshot of the website of PWD Database'
          />
          <Project 
            name='PWD LIFE' 
            description='This is a school project to hone the fundamental knowledge with HTML, CSS, and Javascript. Since I chose to target the persons with disability users, I designed this website following the Web Content Accessibility Guidelines to ensure its accessibility features.'
            src={ pwdLife }
            alt=''
          />
          <Project 
            name='Manga Store Inventory System' 
            description='My very first CRUD application using C++ and Text Fiels as the database. It is an inventory and retail transaction system for a Manga Store.'
            src={ inventorySystem }
            alt='Screenshot of the C++ codes'
          />
        </div>
        {/* <Project name={role} /> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
