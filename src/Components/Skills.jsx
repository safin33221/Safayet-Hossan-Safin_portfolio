import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import javascript from '../assets/tech/javascript.png'
import reactjs from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'
import mongodb from '../assets/tech/mongodb.png'
import git from '../assets/tech/git.png'
import figma from '../assets/tech/figma.png'
import SectionTile from '../Shared/SectionTile'

const Skills = () => {
    const skills = [
        html, css, javascript, reactjs, tailwind, nodejs, mongodb, git, figma
    ]
    return (
        <div className=''>
            <SectionTile heading="Skills & Technologies." subheading="My Expertise"/>
            <div className=' my-10 flex flex-wrap items-center justify-center gap-7 mx-auto px-12'>
                {
                    skills.map(skill => <img className='w-20' src={skill}/>)
                }
            </div>
        </div>
    );
};

export default Skills;