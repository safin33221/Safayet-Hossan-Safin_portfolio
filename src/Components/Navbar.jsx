import { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    const navLinks = [
        {
            id: "home",
            title: "Home",
        },
        {
            id: "about",
            title: "About",
        },
        {
            id: "skill",
            title: "Skill",
        },
        {
            id: "project",
            title: "Project",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];
    const [active, setActive] = useState('')


    return (
        <div className='px-16 mx-auto py-4'>
            <div className='flex justify-between items-center'>
                <div className='flex text-white items-center'>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <h1>Safayet Hossan Safin</h1>
                </div>
                <div>
                    <ul className='flex gap-3 '>
                        {
                            navLinks?.map((link, idx) => <li
                                key={idx}
                                onClick={()=>setActive(link.title)}
                                className={`${active === link.title ? "text-white" : "text-secondary"}`}
                            ><a href={`#${link.id}`}>{link.title}</a></li>)
                        }
                    </ul>
                </div>
                <div>
                    <button className="btn bg-transparent text-white">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;