import React from 'react';

function Navigation() {
    return (
        <nav className="w-full bg-blue-800 text-white">
            <div className="container mx-auto">
                <div className="flex md:flex-row flex-col sm:items-center justify-center text-sm font-bold mt-0 px-44 py-2">
                    <a href="#Services" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Services</a>
                    <a href="#WorkExperience" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Experience</a>
                    <a href="#Projects"  className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Projects</a>
                    <a href="#Education" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Education</a>
                    <a href="#Skills" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Skills</a>
                    <a href="#Awards" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Awards</a>
                    <a href="#ContactMe" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Contact Me</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
