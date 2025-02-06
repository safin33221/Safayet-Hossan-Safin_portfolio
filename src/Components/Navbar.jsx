import { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    const [scroll,setScrolled] = useState(false)
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

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={` ${scroll?"bg-primary":"bg-transparent"} px-2 md:px-16 mx-auto py-4 fixed top-0 z-50  mb-20 w-full`}>
            <div className='flex justify-between items-center'>
                <div className='flex text-white items-center'>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <h1>Safayet Hossan &nbsp;
                        <span className='hidden md:flex'> | Safin</span>
                    </h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex gap-3 '>
                        {
                            navLinks?.map((link, idx) => <Link
                                key={idx}
                                to={link.id}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    setActive(link.title)
                                    window.scrollTo({
                                        behavior: 'smooth'
                                      });

                                }}
                                className={`${active === link.title ? "text-white" : "text-secondary"} cursor-pointer`}
                            >{link.title}</Link>)
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <button className="btn bg-transparent text-white">Resume</button>
                    <div>
                        <img
                            className='md:hidden' src={toggle ? close : menu} alt=""
                            onClick={() => setToggle(!toggle)}
                        />
                        <div className={`${toggle ? 'flex' : 'hidden'} mt-4 transition-all duration-300 ease-linear p-6 black-gradient absolute top-14 right-5 mx-auto my-2 min-w-[140px] z-10 rounded-lg`}>
                            <ul className='list-none felx justify-end items-start flex-col gap-4'>
                                {navLinks?.map((nav) => (
                                    <li
                                        key={nav.id}
                                        className={`${active === nav.title ? "text-white" : "text-secondary"
                                            } hover:text-white font-poppins  font-medium cursor-pointer`}
                                        onClick={() => {
                                            setToggle(!toggle)
                                            setActive(nav.title)
                                        }}
                                    >
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;