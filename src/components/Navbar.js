import React, { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-blue-800 text-white">
                <div className="flex justify-between items-center block sm:hidden">
                    <a href="#" className="md:hidden hover:bg-white text-yellow-500 hover:underline hover:text-blue-800 focus:underline focus:bg-white focus:text-blue-800 focus:outline-none rounded py-2 px-4 mx-2">
                        EdrianDelosReyes
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden mr-1 p-2 px-3 hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none justify-end items-end"
                    >
                        <span className="sr-only">Menu</span>
                        {/* <i className="fas fa-bars"></i> */}
                        Menu
                    </button>
                </div>
                <div className={`${open ? 'block' : 'hidden'} w-full flex-grow sm:flex sm:items-center sm:w-auto`}>
                    <div className="w-full container mx-auto flex flex-col sm:flex-row md:items-center justify-center text-sm font-bold mt-0 px-6 py-2">
                        <a href="/" accessKey="h" className="hidden sm:inline-block hover:bg-white text-yellow-500 hover:underline hover:text-blue-800 focus:underline focus:bg-white focus:text-blue-800 focus:outline-none rounded py-2 px-4 mx-2">
                            EdrianDelosReyes
                        </a>
                        <a href="#" accessKey="a" className="hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none rounded py-2 px-4 mx-2 transition duration-300">About</a>
                        <a href="#" accessKey="p" className="hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none rounded py-2 px-4 mx-2 transition duration-300">Projects</a>
                        <a href="#" accessKey="c" className="hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none rounded py-2 px-4 mx-2 transition duration-300">Contact Me</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
