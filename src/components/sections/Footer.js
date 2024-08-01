import React from 'react';

function Footer() {

    return (
        <footer className="w-full bg-blue-800 text-white py-4 text-center text-xs sm:text-sm md:text-lg">
            <p>
                © 2024 All Rights Reserved | Edrian Delos Reyes
            </p>
            <div className="flex items-center justify-center text-2xl no-underline pt-4">
                <a className="px-2 py-1 hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none transition duration-300" href="https://www.facebook.com/edrianvdr/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Facebook</span>
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="px-2 py-1 hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none transition duration-300" href="https://www.instagram.com/edrianvdr/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Instagram</span>
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="px-2 py-1 hover:bg-white hover:text-blue-800 focus:bg-white focus:text-blue-800 focus:outline-none transition duration-300" href="https://www.linkedin.com/in/edriandelosreyes/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;