import React from 'react';
import '../App.css';
import image from '../assets/safin.png'
import ScrollSection from '../Hooks/ScrollSection';
import resume from '../assets/safayet_hossan.pdf';
import * as motion from "motion/react-client"
const Hero = () => {
    return (
        <section className='w-full min-h-screen mx-auto px-4 md:px-12 pt-28'>
            <div className='flex flex-col-reverse md:flex-row  '>
                <div className='flex gap-5 flex-1 items-center'>
                    {/* Content */}
                    <div className='flex flex-col items-center justify-center '>
                        <div className="w-5 h-5 rounded-full  bg-[#915eff]" />
                        <div className="w-1 sm:h-80 h-80  violet-gradient" />
                    </div>
                    <div className='mt-6'>
                        <div>
                            <h1 className='font-black text-white lg:text-4xl sm:text-3xl  text-2xl mt-5'>Hi, I'm <span className='text-[#915EFF]'>Safin</span></h1>
                            <p className={`  font-black text-white-100 lg:text-5xl sm:text-4xl  text-2xl mt-5`}>
                                Frontend Web Developer<br className='sm:block hidden' />

                            </p>
                            <p className="text-2xl text-white-100 my-4">Your Vision, My Code_</p>
                            <p className={`md:w-4/5 w-full text-gray-400 capitalize text-lg`}>Crafting innovative digital experiences that bring your ideas to life, blending creativity and functionality to build solutions that inspire, engage, and deliver results.</p>
                        </div>
                        <div className='mt-5'>
                            <ul className='flex gap-1 md:gap-3'>
                                <motion.div

                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >
                                    <li className='hover:scale-110 transition-all duration-300 ease-linear backdrop-filter '>
                                        <a href="https://www.facebook.com/safin.2360" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.196 112.196" id="facebook" className='w-12'>
                                                <circle cx="56.098" cy="56.098" r="56.098" fill="#3b5998"></circle>
                                                <path fill="#fff" d="M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z"></path>
                                            </svg>
                                        </a>
                                    </li>

                                </motion.div>
                                <motion.div

                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >

                                    <li className='hover:scale-110 transition-all duration-300 ease-linear backdrop-filter '>
                                        <a href="https://www.linkedin.com/in/safayet-hossan-safin/" target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12' viewBox="0 0 99.59 99.59" id="linkedin-circle">
                                                <defs>
                                                    <linearGradient id="a" x1="-1.971" x2="-1.264" y1="2.61" y2="3.317" gradientUnits="objectBoundingBox">
                                                        <stop offset="0" stop-color="#2489be"></stop>
                                                        <stop offset="1" stop-color="#0575b3"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <path fill="url(#a)" d="M56.82,7.025a49.795,49.795,0,1,0,49.8,49.795A49.795,49.795,0,0,0,56.82,7.025ZM43.534,80.893H32.6V45.572H43.534ZM38.016,40.946a6.518,6.518,0,1,1,6.465-6.517A6.492,6.492,0,0,1,38.016,40.946Zm46.49,39.947H73.626V62.353c0-5.085-1.932-7.924-5.953-7.924-4.376,0-6.662,2.956-6.662,7.924V80.893H50.525V45.572H61.011v4.757a12.319,12.319,0,0,1,10.644-5.835c7.49,0,12.851,4.573,12.851,14.034V80.893Z" transform="translate(-7.025 -7.025)"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </motion.div>
                                <motion.div

                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >

                                <li className='hover:scale-110 transition-all duration-300 ease-linear backdrop-filter '>
                                    <a href="https://github.com/safin33221" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="github" className='w-12'>
                                            <path fill="#00020c" fill-rule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path>
                                            <path fill="#fff" fill-rule="evenodd" d="m26.73,47.67c0,1.1-.01,2.3-.01,3.4,0,.26-.13.51-.34.67-.21.16-.49.2-.74.13-8.4-2.7-14.49-10.58-14.49-19.87,0-11.51,9.34-20.85,20.85-20.85s20.85,9.34,20.85,20.85c0,9.28-6.08,17.15-14.46,19.85-.25.08-.53.03-.74-.13-.21-.16-.34-.4-.34-.67-.02-2.45-.03-5.34-.03-6.65s-1.28-2.39-1.28-2.39c0,0,9.45-1.16,9.45-9.34,0-5.19-2.06-6.94-2.06-6.94.44-1.86.38-3.63-.1-5.31-.07-.24-.31-.4-.56-.38-2.01.18-3.85.91-5.52,2.24,0,0-2.95-.81-5.2-.81h0c-2.25,0-5.2.81-5.2.81-1.67-1.32-3.52-2.06-5.52-2.24-.25-.02-.49.14-.56.38-.48,1.68-.54,3.45-.11,5.31,0,0-2.05,1.75-2.05,6.94,0,8.18,9.45,9.34,9.45,9.34,0,0-1.28,1.08-1.28,2.39v.3c-.72.26-1.7.5-2.8.43-2.99-.2-3.39-3.42-4.62-3.94-.9-.38-1.78-.43-2.45-.37-.2.02-.36.16-.41.35-.05.19.02.39.18.51.81.55,1.89,1.33,2.19,1.9.81,1.52,2.06,3.93,3.67,4.19,1.96.32,3.36.13,4.25-.12h0Z"></path>
                                        </svg>
                                    </a>
                                </li>
                                </motion.div>
                                <motion.div

                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >

                                <li className='hover:scale-110 transition-all duration-300 ease-linear backdrop-filter '>
                                    <a href="https://x.com/safin33221" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-12' viewBox="126.444 2.281 589 589" id="twitter">
                                            <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"></circle>
                                            <path fill="#fff" d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"></path>
                                        </svg>
                                    </a>
                                </li>
                                </motion.div>
                                <motion.div

                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01],
                                    }}
                                >

                                <li>
                                    <a href={resume} target='_blank' download={resume}><button className=" p-3 border-2 rounded-xl  border-[#271e5c] bg-tertiary text-secondary hover:text-white flex gap-2"> <span className='hidden md:flex'>Download</span> Resume</button></a>
                                </li>
                                </motion.div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 mx-auto" >
                    <img src={image} className=" w-[400px] rounded-full  border-[#915eff] shadow-card" alt="" />
                </div>
            </div>
        </section>
    );
};

export default ScrollSection(Hero, "home");