import React from 'react';
import SectionTile from '../Shared/SectionTile';
import health from '../assets/projects/health.png'
import sportstore from '../assets/projects/sportstore.png'
import restaurant from '../assets/projects/restaurant.png'
import { Tilt } from 'react-tilt';
import github from '../assets/github.png'
import link from '../assets/link.svg'
import '../App.css';

const Projects = () => {
    const projects = [
        {

            name: "E-Commerce Platform",
            description:
                "A full-stack Medicing selling e-commerce web application (Health Rex Store) that provides a seamless shopping experience, including product browsing, cart management, checkout, and secure payment integration.",
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
                }
            ],
            image: health,
            source_code_link: "https://github.com/safin33221/Health-Rex-Store-Client",
            live_page_link: "https://healthrexstore.web.app",
        },
        {
            name: "Sports Equipment Store",
            description:
                "An e-commerce platform designed for sports enthusiasts to browse, purchase, and review sports equipment. Features include a seamless shopping experience, secure checkout, and user authentication.",
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
                }
            ],
            image: sportstore,
            source_code_link: "https://github.com/safin33221/Sports-Equipment-Store-Client-Side",
            live_page_link: "https://sports-equipment-store-7f46d.web.app"
        },



        {
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
                }
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
                    projects.map((project,idx) => <Tilt key={idx}
                        options={{
                            max: 20,
                            scale: 1,
                            speed: 850,
                        
                        }}
                        className='bg-tertiary p-5 h-full rounded-2xl sm:w-[360px] w-full mx-auto'
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
                    </Tilt>)
                }
            </div>
        </div>
    );
};

export default Projects;