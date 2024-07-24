import Heading2 from '../../components/Heading2.1';
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
            <Heading2 h2="Skills" /> 

            <div className="flex flex-wrap justify-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
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
        </>
    );
}

export default Skills;
