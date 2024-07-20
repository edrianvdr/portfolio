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
import ae1y from '../assets/images/about/certificates/Academic Excellence - 1st year.png';
import ae2y from '../assets/images/about/certificates/Academic Excellence - 2nd year.png';
import ae3y1s from '../assets/images/about/certificates/Academic Excellence - 3rd year 1st sem.png';
import ae3y2s from '../assets/images/about/certificates/Academic Excellence - 3rd year 2nd sem.png';
import ae4y from '../assets/images/about/certificates/Academic Excellence - 4th year.png';
import championTnt from '../assets/images/about/certificates/Champion of DMCFI Tagisan ng Talino 2023.png';
import championLmc from '../assets/images/about/certificates/Champion of Logo Making Contest.png';
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

                <div className="flex flex-wrap grid grid-cols-4 gap-1 sm:grid-cols-5 md:grid-cols-6">
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

                <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
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


            <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                <Card
                    title="Academic Excellence Award (1st Year)"
                    description="Received on my 1st year in college during the school year 2019 to 2020"
                    src={ ae1y }
                    alt="Academic Excellence Award for School Year 2018 to 2020"
                />
                <Card
                    title="Academic Excellence Award (2nd Year)"
                    description="Received on my 2nd year in college during the school year 2021 to 2022"
                    src={ ae2y }
                    alt="Academic Excellence Award for School Year 2021 to 2022"
                />
                <Card
                    title="Academic Excellence Award (3rd Year 1st sem)"
                    description="Received on my 3rd year 1st sem in college during the school year 2022 to 2023"
                    src={ ae3y1s }
                    alt="Academic Excellence Award for School Year 2022 to 2023"
                />
                <Card
                    title="Academic Excellence Award (3rd Year 2nd sem)"
                    description="Received on my 3rd year 2nd sem in college during the school year 2022 to 2023"
                    src={ ae3y2s }
                    alt="Academic Excellence Award for School Year 2022 to 2023"
                />
                <Card
                    title="Academic Excellence Award (4th Year)"
                    description="Received on my 4th year in college during the school year 2023 to 2024"
                    src={ ae4y }
                    alt="Academic Excellence Award for School Year 2023 to 2024"
                />
                <Card
                    title="Champion of DMCFI Tagisan ng Talino 2023"
                    description="A quiz bee contest competed by the entire high school and college departments."
                    src={ championTnt }
                    alt="Certificate of Recognition for winning the DMCFI Tagisan ng Talino 2023"
                />
                <Card
                    title="Champion of CCSS Logo Making Contest"
                    description="The contest for the official logo of our college department."
                    src={ championLmc }
                    alt="Certificate of Recognition for winning the CCSS Logo Making Contest"
                />
            </div>
        </div>
    );
}

export default Portfolio;
