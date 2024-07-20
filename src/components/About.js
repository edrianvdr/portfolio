import Card from '../components/Card';

// Skills Images
import laravel from '../assets/images/skills/Laravel.png';
import mysql from '../assets/images/skills/MySQL.png';
import tailwind from '../assets/images/skills/Tailwind CSS.png';
import bootstrap from '../assets/images/skills/Bootstrap.png';
import reactjs from '../assets/images/skills/ReactJS.png';
import w3cAccessibility from '../assets/images/skills/W3C Accessibility.png';
import html from '../assets/images/skills/HTML.png';
import css from '../assets/images/skills/CSS.png';
import javascript from '../assets/images/skills/JavaScript.png';
import vscode from '../assets/images/skills/VS Code.png';
import github from '../assets/images/skills/GitHub.png';
import wordpress from '../assets/images/skills/WordPress.png';
import nodejs from '../assets/images/skills/NodeJS.svg';
import java from '../assets/images/skills/Java.svg';
import python from '../assets/images/skills/Python.svg';
import msoffice from '../assets/images/skills/MS Office.png';


// Education Images
import dmcfi from '../assets/images/about/education/DMCFI.png';
import mc from '../assets/images/about/education/MC.png';

// Awards Images
import academicExcellenceAward1 from '../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';
import academicExcellenceAward2 from '../assets/images/about/certificates/Academic Excellence Award - 2nd Year - SY 2021-2022.jpg';
import academicExcellenceAward3 from '../assets/images/about/certificates/Academic Excellence Award - 3rd Year - SY 2022-2023.jpg';
import tagisanNgTalino from '../assets/images/about/certificates/Academic Excellence Award - 1st Year - SY 2019-2020.jpg';
import SkillCard from './SkillCard';

const Portfolio = () => {
    return (
        <div className="flex flex-col items-center">
            {/* <h1 className="font-bold text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-gray-700" id="projects">
                Edrian Delos Reyes
            </h1> */}

<div>
                <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                    Skills
                </h2>

                <div className="flex flex-wrap grid grid-cols-6 justify-center items-center">
                    <SkillCard src={ laravel } skill="Laravel" />
                    <SkillCard src={mysql} skill="MySQL" />
                    <SkillCard src={tailwind} skill="Tailwind CSS" />
                    <SkillCard src={bootstrap} skill="Bootstrap" />
                    <SkillCard src={reactjs} skill="ReactJS" />
                    <SkillCard src={w3cAccessibility} skill="W3C Accessibility" />
                    <SkillCard src={html} skill="HTML" />
                    <SkillCard src={css} skill="CSS" />
                    <SkillCard src={javascript} skill="JavaScript" />
                    <SkillCard src={vscode} skill="VS Code" />
                    <SkillCard src={github} skill="GitHub" />
                    <SkillCard src={wordpress} skill="WordPress" />
                    <SkillCard src={nodejs} skill="NodeJS" />
                    <SkillCard src={java} skill="Java" />
                    <SkillCard src={python} skill="Python" />
                    <SkillCard src={msoffice} skill="MS Office" />
                </div>
            </div>

            <div className="mb-8">
                <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 hover:text-gray-700 text-center">
                    Education
                </h2>

                <div className="grid grid-cols-2 gap-8">
                    <Card
                        title="Bachelor of Science in Computer Science"
                        description="Divine Mercy College Foundation, Inc / 2019, 2021-2024"
                        src={ dmcfi }
                        alt="Logo of Divine Mercy College Foundation Inc."
                    />
                    <Card
                        title="Special Science Class, High School"
                        description="Meycauayan College"
                        src={ mc }
                        alt="Logo of Meycauayan College"
                    />
                </div>
            </div>

            <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                Awards
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
