import React from 'react';
import NavLink from '../NavLink';

function Navigation() {
  return (
    <nav className="w-full bg-blue-800 text-white">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col sm:items-center justify-center text-sm font-bold mt-0 px-44 py-2">
          <NavLink href="Services" value="Services" />
          <NavLink href="WorkExperience" value="Work Experience"/>
          <NavLink href="#Projects" value="Projects" />
          <NavLink href="#Education" value="Education"/>
          <NavLink href="#Skills" value="Skills"/>
          <NavLink href="#Awards" value="Awards"/>
          <NavLink href="#ContactMe" value="Contact Me"/>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
