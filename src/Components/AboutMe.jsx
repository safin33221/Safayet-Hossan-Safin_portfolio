import React from 'react';
import SectionTile from '../Shared/SectionTile';
import { motion } from "framer-motion";
import { FaReact, FaCode, FaGamepad, FaBook, FaLaptopCode } from "react-icons/fa";
import '../App.css'
import ScrollSection from '../Hooks/ScrollSection';
import { PiStudentBold } from 'react-icons/pi';
const AboutMe = () => {
    return (
        <div>
            <SectionTile subheading="Introduction" heading="About Me" />
            <section className=" text-white  px-16 ">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.p
                        className="text-lg text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hi there! 👋 I’m Safin, a Frontend React.js Developer passionate about crafting interactive, fast, and user-friendly web applications. I’m currently studying Diploma in Computer Science and Technology at Feni Polytechnic Institute. At 18 years old, I live in Chattogram, Bangladesh, continuously exploring new technologies to enhance my development skills.
                    </motion.p>
                </div>

                <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        className='w-full  p-[1px] green-pink-gradient  rounded-[20px] shadow-card transition-all duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                            <FaReact className="text-4xl mx-auto  text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                            <p className="text-gray-300  h-28">
                                I specialize in <strong>React.js, Next.js, and Tailwind CSS</strong>, focusing on drive into a <strong>Fullstack Developer</strong>.
                            </p>
                        </div>
                    </div>

                    <div
                        className='w-full  p-[1px] green-pink-gradient  rounded-[20px] shadow-card transition-all duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

                            <FaCode className="text-4xl mx-auto text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Programming Journey</h3>
                            <p className="text-gray-300 overflow-y-scroll h-28 ">
                                My coding journey began when I didn't have a device to practice on. I started learning HTML, CSS, and JavaScript by writing everything down in a notebook. After four months, thanks to my family's support, I got my first laptop. However, even with a device, I struggled to progress without proper guidance or a care team. At one point, I wanted to ask my family for money to pursue further learning, but our financial situation wasn't great. Determined, I began saving money for six months to invest in a course that could guide me. Finally, I was able to afford the Programming Hero Web Development course, which has been one of the best learning platforms in Bangladesh and has greatly helped me in my journey to becoming a web developer.
                            </p>
                        </div>
                    </div>

                    <div
                        className='w-full  p-[1px] green-pink-gradient  rounded-[20px] shadow-card transition-all duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

                            <PiStudentBold className="text-4xl mx-auto text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold ">Diploma in Computer Science and Technology (Ongoing)</h3>
                            <p className="text-gray-300  ">
                            Feni Polytechnic Institute, Feni, Bangladesh
                            </p>
                            
                            <p>Currently II'm studying  Diploma in Computer Science and Technology, gaining expertise in App development, database management, and networking. Passionate about building scalable and efficient web applications.</p>
                        </div>
                    </div>

                    <div
                        className='w-full  p-[1px] green-pink-gradient  rounded-[20px] shadow-card transition-all duration-300 ease-in-out'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

                            <FaGamepad className="text-4xl mx-auto text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>
                            <p className="text-gray-300  h-28">
                                Love <strong>gaming 🎮, Riding 🚴‍♂️, Turning Ideas Into Reality, and UI/UX design 🎨</strong>.
                            </p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default ScrollSection(AboutMe,"about");





