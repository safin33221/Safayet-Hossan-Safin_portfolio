import React from 'react';
import SectionTile from '../Shared/SectionTile';
import health from '../assets/projects/health.png'
import sportstore from '../assets/projects/sportstore.png'
import restaurant from '../assets/projects/restaurant.png'
import { Tilt } from 'react-tilt';
import github from '../assets/github.png'
import link from '../assets/link.svg'
import '../App.css';
import ScrollSection from '../Hooks/ScrollSection';
import { Link } from 'react-router';

const Projects = () => {
    const projects = [
            {
                id: 1,
                name: "Health Rex Store",
                description:
                    "A full-stack Medicing selling e-commerce web application (Health Rex Store) that provides a seamless shopping experience, including product browsing, cart management, checkout, and secure payment integration.",
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "mongodb",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "node.js",
                        color: "green-text-gradient",
                    },
                    
                    {
                        name: "tailwind",
                        color: "orange-text-gradient",
                    },
                    {
                        name: "expressJs",
                        color: "purple-text-gradient",
                    },
                    {
                        name: "firebase",
                        color: "red-text-gradient",
                    },
                ],
                challenges_faced: [
                    "Implementing a secure payment gateway integration.",
                    "Ensuring smooth user authentication and role-based access control.",
                    "Managing real-time inventory updates efficiently."
                ],
                potential_improvements: [
                    "Implementing AI-based product recommendations.",
                    "Adding multi-vendor support for pharmacy owners.",
                    "Optimizing performance for better scalability."
                ],
                image: health,
                source_code_link: "https://github.com/safin33221/Health-Rex-Store-Client",
                live_page_link: "https://healthrexstore.web.app",
            },
            {
                id: 2,
                name: "Sports Equipment Store",
                description:
                    "An e-commerce platform designed for sports enthusiasts to browse, purchase, and review sports equipment. Features include a seamless shopping experience, secure checkout, and user authentication.",
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    
                    ,
                    {
                        name: "node.js",
                        color: "green-text-gradient",
                    },
                    {
                        name: "tailwind",
                        color: "orange-text-gradient",
                    },
                    {
                        name: "expressJs",
                        color: "purple-text-gradient",
                    },
                    
                    {
                        name: "mongodb",
                        color: "pink-text-gradient",
                    },
                    ,{
                        name: "firebase",
                        color: "red-text-gradient",
                    }
                ],
                challenges_faced: [
                    "Managing complex state for cart functionality", "implementing secure authentication", "optimizing database queries for better performance", "ensuring a smooth user experience across different devices", "and optimizing API response times for faster interactions."],
    
                potential_improvements: [
                    "Enhancing the UI for a more intuitive experience, adding AI-powered product recommendations", "integrating  payment gateways for smoother transactions", "implementing real-time order tracking, introducing a loyalty program for frequent customers", "and improving accessibility for users with disabilities."
                ],
    
                image: sportstore,
                source_code_link: "https://github.com/safin33221/Sports-Equipment-Store-Client-Side",
                live_page_link: "https://sports-equipment-store-7f46d.web.app"
            },
    
    
    
            {
                id: 3,
                name: "Restaurant Management System",
                description:
                    "A complete web-based restaurant management system that streamlines order management, table reservations, and menu customization, ensuring a seamless dining experience.",
                tags: [
                    {
                        name: "react",
                        color: "blue-text-gradient",
                    },
                    {
                        name: "node.js",
                        color: "green-text-gradient",
                    },
                    {
                        name: "mongodb",
                        color: "pink-text-gradient",
                    },
                    {
                        name: "tailwind",
                        color: "orange-text-gradient",
                    },
                    {
                        name: "firebase",
                        color: "red-text-gradient",
                    },
                    {
                        name: "expressJs",
                        color: "purple-text-gradient",
                    }
                ],
                challenges_faced: [
                    "Handling real-time order updates",
                    "Ensuring secure user authentication",
                    "Optimizing database queries for fast performance",
                    "Integrating third-party payment systems",
                    "Managing role-based access for different user types"
                ],
                
                potential_improvements: [
                    "Enhancing the UI/UX for a more intuitive experience",
                    "Adding AI-powered menu recommendations",
                    "Implementing a customer feedback system",
                    "Introducing an inventory management feature",
                    "Optimizing server performance for handling high traffic"
                ],
                image: restaurant,
                source_code_link: "https://github.com/safin33221/Restaurant-Mangement-client-side",
                live_page_link: "https://restaurant-management-caeb2.web.app",
            }
        ];
    return (
        <div>
            <SectionTile heading="A Glimpse of My Development Journey" subheading=" My Projects" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 py-10'>
                {
                    projects.map((project, idx) => <Tilt key={idx}
                        options={{
                            max: 20,
                            scale: 1,
                            speed: 850,

                        }}
                        className='bg-tertiary flex flex-col justify-between p-5 h-full rounded-2xl sm:w-[360px] w-full mx-auto'
                    >
                        <div className='relative w-full h-[230px] cursor-pointer'>
                            <img
                                src={project.image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl'
                            />

                            <div className='absolute inset-0 flex gap-3 justify-end m-3 card-img_hover'>
                                <div
                                    onClick={() => window.open(project.source_code_link, "_blank")}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={github}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                                <div
                                    onClick={() => window.open(project.live_page_link, "_blank")}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={link}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain text-white'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                        </div>

                        <div className='mt-4 flex flex-wrap gap-2'>
                            {project.tags.map((tag) => (
                                <p
                                    key={`${project.name}-${tag.name}`}
                                    className={`text-[14px] ${tag.color}`}
                                >
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                        <div className='justify-end'>
                            <Link to={`projects/${project.id}`}>
                                <button className=" rounded-lg text-secondary hover:text-white p-4 border-2 border-[#271e5c]">view Detail</button>
                            </Link>
                        </div>
                    </Tilt>)
                }
            </div>
        </div>
    );
};

export default ScrollSection(Projects, 'project');