import React from 'react';
import NavLink from '../NavLink';

function Navigation() {
  return (
    <nav className="w-full bg-blue-800 text-white">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col sm:items-center justify-center text-sm font-bold mt-0 px-44 py-2">
          <NavLink href="Services" accesskey="s" />
          <NavLink href="WorkExperience"/>
          <NavLink href="Projects" accesskey="p" />
          <NavLink href="Education"/>
          <NavLink href="Skills"/>
          <NavLink href="Awards"/>
          <NavLink href="ContactMe" accesskey="c"/>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
