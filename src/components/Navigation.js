import React, { useState } from 'react';

function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-blue-800 text-white">
                <div className="block sm:flex sm:items-center sm:w-auto">
                    <div className="w-full container mx-auto flex sm:flex-row md:items-center justify-center text-sm font-bold mt-0 px-6 py-2">
                        <a href="#" accessKey="a" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">About</a>
                        <a href="#" accessKey="p" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Projects</a>
                        <a href="#" accessKey="c" className="border-b hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none hover:rounded focus:rounded py-2 px-4 mx-2 transition duration-300">Contact Me</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;