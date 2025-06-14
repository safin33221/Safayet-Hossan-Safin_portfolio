import React from 'react';
import { Link, useParams } from 'react-router';
import health from '../assets/projects/health.png';
import sportstore from '../assets/projects/sportstore.png';
import restaurant from '../assets/projects/restaurant.png';
import tastyride from '../assets/projects/tastyride.png'
import globalThought from '../assets/projects/globalThought.png'
import '../App.css'
import { FaArrowLeft } from 'react-icons/fa';



const ProjectDetails = () => {
    const { id } = useParams()
    const projects = [
        {
            id: 5,
            name: "Global Thought – AI-Powered Blogging & Content Intelligence",
            description:
                "A cutting-edge blogging platform that empowers writers to create high-quality, SEO-optimized content using AI assistance, real-time insights, and a modern editor tailored for thoughtful publishing and global impact.",
            tags: [
                {
                    name: "next.js",
                    color: "blue-text-gradient",
                },
                {
                    name: "typescript",
                    color: "green-text-gradient",
                },
                {
                    name: "nextAuth",
                    color: "orange-text-gradient",
                },
                {
                    name: "mongodb",
                    color: "purple-text-gradient",
                },
                {
                    name: "shadcn/ui",
                    color: "pink-text-gradient",
                },
                {
                    name: "Gemini ai",
                    color: "red-text-gradient",
                }
            ],
            challenges_faced: [
                "Building a custom blog editor with AI suggestions and rich text support (Tiptap)",
                "Integrating SEO analyzer with keyword density and readability scoring",
                "Designing scalable PostgreSQL schemas for content, tags, and user preferences",
                "Creating a seamless dark/light theme toggle with consistent typography",
                "Handling authentication, rate limiting, and secure content previewing"
            ],
            potential_improvements: [
                "Adding real-time collaborative editing using WebSockets",
                "Integrating multilingual content generation and translation",
                "Building a marketplace for user-contributed blog templates",
                "Creating a smart tag recommendation engine using embeddings",
                "Launching a community insights dashboard powered by AI analytics"
            ],
            image: globalThought, // Replace with your imported image variable
            source_code_link: "https://github.com/safin33221/Global_Thought-Ai-Prowerd-BlogPost_Using-NextJs",
            live_page_link: "https://global-thought.vercel.app/"
        },
        {
            id: 4,
            name: "TastyRide - Smart Food Delivery Platform",
            description:
                "A smart, feature-rich food delivery web application offering real-time order tracking, multi-language support, dynamic promotions, and subscription-based restaurant profiles to ensure an engaging user experience.",
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
                "Implementing real-time order tracking through multiple order stages",
                "Managing dynamic discounts and advertisement banners",
                "Creating a scalable multi-language translation system",
                "Handling complex user roles and permissions",
                "Integrating responsive UI for mobile-first design"
            ],
            potential_improvements: [
                "Integrating AI to suggest meals based on user behavior",
                "Adding delivery partner and logistics management module",
                "Enhancing analytics dashboard for restaurants",
                "Implementing offline mode with local storage caching",
                "Integrating voice assistant support for ordering"
            ],
            image: tastyride,
            source_code_link: "https://github.com/safin33221/TastyRide",
            live_page_link: "https://tastyride-cd1a3.web.app/"
        },
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
                , {
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
    const project = projects?.filter(item => item.id == id)
    console.log(project[0].image);
    return (
        <div className='bg-primary min-h-screen px-2 md:p-8 mx-auto'>
            <Link to={'/'}>
                <button className='p-4 rounded-full black-gradient  text-white hover:text-white m-4 md:m-10 fixed'><FaArrowLeft /></button>

            </Link>

            <div className='border-2 border-[#271e5c] rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <div className='p-2 flex items-center justify-center'>
                    <img src={project[0].image} className=' rounded-2xl h- md:max-h-[900px]  bg-center bg-cover' alt="" />
                </div>
                <div className='m-5'>
                    <h1 className='text-white font-bold text-[24px]'>{project[0].name}</h1>
                    <p className='mt-2 text-secondary text-[14px]'>{project[0].description}</p>

                    <div className='mt-4 flex flex-wrap gap-2'>
                        {project[0].tags.map((tag) => (
                            <p
                                key={`${project.name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-white'>Challenges faced while developing the project</h1>
                        {
                            project[0].challenges_faced.map((item, idx) => <li key={idx} className='text-secondary text-lg' >{item}</li>)
                        }
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-white'> Potential improvements and future plans</h1>
                        {
                            project[0].potential_improvements.map((item, idx) => <li key={idx} className='text-secondary text-lg' >{item}</li>)
                        }
                    </div>
                    <div className='w-full py-10 flex gap-5'>
                        <button className=" rounded-lg  text-secondary hover:text-white p-4 border-2 border-[#271e5c] transition-all duration-300 ease-in text-xl"><a href={project[0].live_page_link} target='_blank'>View Live</a></button>
                        <button className=" rounded-lg text-secondary hover:text-white p-4 border-2 border-[#271e5c] transition-all duration-300 ease-in text-xl"><a href={project[0].source_code_link} target='_blank'>Source code</a></button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;