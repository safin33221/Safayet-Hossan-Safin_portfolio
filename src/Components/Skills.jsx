import html from '../assets/tech/html.png'
import css from '../assets/tech/css.png'
import javascript from '../assets/tech/javascript.png'
import reactjs from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'
import mongodb from '../assets/tech/mongodb.png'
import git from '../assets/tech/git.png'
import figma from '../assets/tech/figma.png'
import firebase from '../assets/tech/firebase.webp'
import typescript from '../assets/tech/typescript.png'
import postgres from '../assets/tech/postgres.png'
import SectionTile from '../Shared/SectionTile'
import ScrollSection from '../Hooks/ScrollSection'

const Skills = () => {
    const skills = [
        html, css, tailwind, javascript,typescript, reactjs,firebase, nodejs, mongodb,postgres, git, figma
    ]
    return (
        <div className=''>
            <SectionTile heading="Skills & Technologies." subheading="My Expertise" />
            <div className=' my-10 flex flex-wrap items-center justify-center gap-5 mx-auto px-8'>
                {
                    skills.map(skill => <img className='w-16' src={skill} />)
                }
            </div>
        </div>
    );
};

export default ScrollSection(Skills,"skill");