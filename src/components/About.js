import React from 'react';
import academicExcellenceAward1 from '../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';
import academicExcellenceAward2 from '../assets/images/about/certificates/Academic Excellence Award - 2nd Year - SY 2021-2022.jpg';
import academicExcellenceAward3 from '../assets/images/about/certificates/Academic Excellence Award - 3rd Year - SY 2022-2023.jpg';
import tagisanNgTalino from '../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';

const Portfolio = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-gray-700" id="projects">
                Edrian Delos Reyes
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-gray-600">
                Here are the projects I made during my time in college.
            </p>

            <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                Career Objective
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 text-center md:px-10 lg:px-40">
                To work in a reputable company where I can apply my expertise in Web Accessibility and further develop my skills in web development, contributing to the company's innovative projects.
            </p>

            <div className="mb-8">
                <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                    Educational Background
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                    Divine Mercy College Foundation, Inc. / Colegio De San Lorenzo<br />
                    Bachelor of Science in Computer Science<br />
                    2019, 2021 – present<br />
                    Expected graduation: June 2024<br />
                    Achievements:<br />
                    <span className="ml-2">
                        • Academic Excellence Awardee on my 1st year, S.Y. 2019 - 2020<br />
                        • Top 4 Academic Excellence Awardee in our course on my 2nd year for S.Y. 2021 – 2022<br />
                        • Dean's Lister with a GWA (General Weighted Average) of 1.09 and 1.14 on my 3rd year<br />
                        • Creator of our college department's logo<br />
                    </span>
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                    Meycauayan College<br />
                    High School, Special Science Class<br />
                    2011 – 2015
                </p>
            </div>

            <div>
                <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                    Skills and Interests
                </h2>
                <ul className="list-disc list-inside text-xs sm:text-sm md:text-base lg:text-lg mb-4">
                    <li>Making accessible websites under Web Content Accessibility Guidelines (WCAG)</li>
                    <li>Actively learning and implementing the MERN Stack</li>
                    <li>Experienced in PHP Code Igniter</li>
                    <li>Competent with Bootstrap and Tailwind</li>
                    <li>Basic knowledge of Python [Flask], Java, C#, and Kotlin</li>
                    <li>Advanced MS Excel skills for data analysis and reporting</li>
                    <li>Strong communication skills in both English and Filipino</li>
                    <li>Quick learner with a passion for acquiring new skills to meet company needs</li>
                </ul>
            </div>

            <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1 hover:bg-blue-800 hover:text-white">
                    <img src={academicExcellenceAward1} alt="Academic Excellence Award - 1st Year" className="w-full h-auto object-cover" />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                            Academic Excellence Award (1st year)
                        </h3>
                        <p className="mb-3">
                            Received on my 1st year in college during the school year 2019 to 2020
                        </p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1 hover:bg-blue-800 hover:text-white">
                    <img src={academicExcellenceAward2} alt="Academic Excellence Award - 2nd Year" className="w-full h-auto object-cover" />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                            Academic Excellence Award (2nd year)
                        </h3>
                        <p className="mb-3">
                            Received on my 2nd year in college during the school year 2021 to 2022
                        </p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1 hover:bg-blue-800 hover:text-white">
                    <img src={academicExcellenceAward3} alt="Academic Excellence Award - 3rd Year" className="w-full h-auto object-cover" />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                            Academic Excellence Award (3rd year)
                        </h3>
                        <p className="mb-3">
                            Received on my 3rd year in college during the school year 2022 to 2023
                        </p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-blue-800 rounded-lg shadow text-center p-1 hover:bg-blue-800 hover:text-white">
                    <img src={tagisanNgTalino} alt="Tagisan ng Talino" className="w-full h-auto object-cover" />
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight">
                            Tagisan ng Talino (Champion)
                        </h3>
                        <p className="mb-3">
                            A group quiz bee participated by all the departments of DMCFI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
