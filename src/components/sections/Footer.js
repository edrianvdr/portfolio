import React from 'react';

import Navigation from './Navigation';

function Footer() {

    return (
        <footer className="w-full bg-blue-800 text-white py-4 text-center text-xs sm:text-sm md:text-lg">
            <Navigation />
            <p>
                © 2024 All Rights Reserved | Edrian Delos Reyes
            </p>
            <div className="flex items-center justify-center text-2xl no-underline pt-4">
                <a className="" href="https://www.facebook.com/edrianvdr/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Facebook</span>
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="pl-4" href="https://www.instagram.com/edrianvdr/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">Instagram</span>
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="pl-4" href="https://www.linkedin.com/in/edriandelosreyes/" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;