import SkillCard from '../../components/SkillCard';

// Skills Images
import laravel from '../../assets/images/skills/Laravel.png';
import mysql from '../../assets/images/skills/MySQL.png';
import tailwind from '../../assets/images/skills/Tailwind CSS.png';
import bootstrap from '../../assets/images/skills/Bootstrap.png';
import reactjs from '../../assets/images/skills/ReactJS.png';
import w3cAccessibility from '../../assets/images/skills/W3C Accessibility.png';
import html from '../../assets/images/skills/HTML.png';
import css from '../../assets/images/skills/CSS.png';
import javascript from '../../assets/images/skills/JavaScript.png';
import vscode from '../../assets/images/skills/VS Code.png';
import github from '../../assets/images/skills/GitHub.png';
import wordpress from '../../assets/images/skills/WordPress.png';
import nodejs from '../../assets/images/skills/NodeJS.svg';
import java from '../../assets/images/skills/Java.svg';
import python from '../../assets/images/skills/Python.svg';
import msoffice from '../../assets/images/skills/MS Office.png';

const Skills = () => {
    return (
        <>
            {/* <h1 className="font-bold text-gray-800 uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:text-gray-700" id="projects">
                Edrian Delos Reyes
            </h1> */}

        <div>
                <h2 className="font-bold text-gray-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 hover:text-gray-700 text-center">
                    Skills
                </h2>

                <div className="flex flex-wrap  justify-center">
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
        </>
    );
}

export default Skills;
