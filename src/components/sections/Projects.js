import React, { useState } from 'react';

import Heading2 from '../../components/Heading2';
import Project from '../../components/Project';

// Images
import inventorySystem from '../../assets/images/projects/2.1 Manga Store.png';
import pwdLife from '../../assets/images/projects/2.2 PWD LIFE.png';
import pwdDatabase from '../../assets/images/projects/2.3 PWD Database.png';
import ccssLogo from '../../assets/images/projects/2.4 CCSS Logo.png';
import pnsbLogo from '../../assets/images/projects/2.5 PNSB Logo.png';
import thesis from '../../assets/images/projects/2.6 Thesis Project.png';

const projects = [
  {
    name: 'Thesis',
    description: 'Developed a job hunting platform in a format of an e-commerce website featuring a recommendation algorithm to enhance user engagement.',
    src: thesis,
    alt: 'Screenshot of the booking page of my thesis project',
    href: 'https://github.com/edrianvdr/thesis',
  },
  {
    name: 'PNSB Alumni Organization Logo',
    description: 'I created the official logo of Philippine National School For the Blind Alumni Organization.',
    src: pnsbLogo,
    alt: 'Logo of PNSB Alumni Organization',
    href: 'https://www.facebook.com/photo/?fbid=999193715547603&set=a.476389967827983',
  },
  {
    name: 'CCSS Logo',
    description: 'College of Computer Studies & Systems is our college department. During the CCSS Day 2023, I won the logo making contest for our department, and it became the official logo of CCSS.',
    src: ccssLogo,
    alt: 'Logo of our college department, CCSS',
    href: 'https://www.facebook.com/photo/?fbid=154935961009183&set=a.100886209747492',
  },
  {
    name: 'PWD Database',
    description: 'This is a school project intended to practice database management, thus, I created a database system for persons with disability with PHP (native) and MySQL with features CRUD, searching, and filtering data.',
    src: pwdDatabase,
    alt: 'Screenshot of the website of PWD Database',
    href: 'https://github.com/edrianvdr/pwd-database',
  },
  {
    name: 'PWD LIFE',
    description: 'This is a school project to hone the fundamental knowledge with HTML, CSS, and Javascript. Since I chose to target the persons with disability users, I designed this website following the Web Content Accessibility Guidelines to ensure its accessibility features.',
    src: pwdLife,
    alt: 'Screenshot of the Home page of PWD Life website',
    href: 'https://github.com/edrianvdr/pwd-life',
  },
  {
    name: 'Manga Store Inventory System',
    description: 'My very first CRUD application using C++ and Text Fiels as the database. It is an inventory and retail transaction system for a Manga Store.',
    src: inventorySystem,
    alt: 'Screenshot of the C++ codes',
    href: 'https://github.com/edrianvdr/cpp-manga-store',
  },
];

const Awards = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  return (
    <div className="py-16">
      <Heading2 h2="Projects" />
      <div className="flex w-full sm:w-auto mx-auto grid gap-4 sm:grid-cols-2">
        {projects.slice(0, visibleCount).map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            src={project.src}
            alt={project.alt}
            href={project.href}
          />
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="inline-flex items-center px-4 py-2 md:px-6 xl:px-8 md:py-4 bg-blue-800 text-xl md:text-2xl lg:text-3xl xl:text-white text-4xl font-medium rounded-full border hover:bg-white hover:text-blue-800 hover:border-blue-800 focus:outline-none focus:bg-white focus:text-blue-800 focus:border-blue-800 transition duration:300"
          >
            See More <span className="sr-only">Projects</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Awards;
