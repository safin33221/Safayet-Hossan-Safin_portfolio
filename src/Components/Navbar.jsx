import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

import ResumeDownload from './ResumeDownload';
import styled from 'styled-components';

// Checkbox (Hamburger) Component
const Checkbox = ({ checked, onClick }) => (
    <StyledWrapper>
        <label className="hamburger text-lg m-0">
            <input type="checkbox" checked={checked} onChange={onClick} readOnly />
            <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                <path className="line" d="M7 16 27 16" />
            </svg>
        </label>
    </StyledWrapper>
);

const StyledWrapper = styled.div`
  .hamburger {
    cursor: pointer;
  }
  .hamburger input {
    display: none;
  }
  .hamburger svg {
    height: 2.5em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line-top-bottom {
    stroke-dasharray: 12 63;
  }
  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }
  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [toggle, setToggle] = useState(false);
    const [scroll, setScrolled] = useState(false);

    const navLinks = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "skill", title: "Skill" },
        { id: "project", title: "Project" },
        { id: "contact", title: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = () => setToggle((prev) => !prev);

    return (
        <div className={` ${scroll ? "backdrop-blur-sm bg-opacity-70 bg-primary bg-blend-overlay" : "bg-transparent"} px-4 md:px-16 mx-auto py-4 fixed top-0 z-50 mb-20 w-full`}>
            <div className='flex justify-between items-center'>
                <div className='flex text-white items-center'>
                    <img className='w-12 h-12 rounded-full' src={logo} alt="logo" />
                    <h1 className='md:text-2xl flex gap-2'>Safayet Hossan <span className='hidden md:block'>Safin</span></h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex gap-5 text-xl '>
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.id}
                                smooth={true}
                                duration={500}
                                onClick={() => setActive(link.id)}
                                className={`${active === link.id ? "text-white border-b-2 " : "text-secondary "} cursor-pointer  transition-all  ease-linear duration-200 hover:text-white`}
                            >{link.title}</Link>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <ResumeDownload />
                    <div className="md:hidden relative">
                        {/* Hamburger Toggle */}
                        <div onClick={handleToggle}>
                            <Checkbox checked={toggle} onClick={handleToggle} />
                        </div>
                        {/* Mobile Menu */}
                        <div className={`${toggle ? 'flex' : 'hidden'}  transition-all  duration-300 ease-linear p-[1px]   green-pink-gradient  absolute top-14  right-0 mx-auto my-2 min-w-[140px] z-10 rounded-lg`}>
                            <div className="bg-tertiary w-full h-full rounded-lg ">
                                <ul className='list-none flex justify-end items-start flex-col gap-2 p-4 m-1'>
                                    {navLinks.map((link, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={link.id}
                                                smooth={true}
                                                duration={500}
                                                onClick={() => {
                                                    setActive(link.id);
                                                    setToggle(false);
                                                }}
                                                className={`${active === link.id ? "text-white border-b-2 " : "text-secondary "} cursor-pointer hover:text-white  transition-all  ease-linear duration-200`}
                                            >{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;