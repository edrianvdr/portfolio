import React from 'react';

import edrianImage from '../assets/images/EVDR 02.png';

function Header() {
    const handleResumeClick = () => {
        window.open(`documents/Resume.pdf`, '_blank');
    };

    return (
        <header className="bg-blue-800 text-white mb-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 text-center">
                <div className="sm:col-span-7 flex flex-col justify-center items-center xl:pl-96">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-2">Edrian Delos Reyes</h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Web Developer</p>
                    <button 
                        className="bg-white text-blue-800 border border-blue-800 hover:bg-blue-800 hover:text-white hover:border-white focus:bg-blue-800 focus:text-white focus:outline-none focus:border-white py-2 px-6 rounded-full text-lg font-semibold shadow-md transition duration-300"
                        onClick={handleResumeClick}
                    >
                        Résumé
                    </button>
                    {/* <Navigation /> */}
                </div>
                <div className="sm:col-span-5 flex justify-center md:justify-start">
                    <img src={edrianImage} alt="Edrian Delos Reyes on a blue polo shirt with white collar and a black jacket" className="w-64 h-auto" />
                </div>
            </div>
        </header>
    );
}

export default Header;
