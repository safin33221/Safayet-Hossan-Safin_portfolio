import SectionTile from '../Shared/SectionTile';
import { motion } from "framer-motion";
import { FaReact, FaCode, FaGamepad } from "react-icons/fa";
import '../App.css';
import ScrollSection from '../Hooks/ScrollSection';
import { PiStudentBold } from 'react-icons/pi';

const AboutMe = () => {
    return (
        <div
        >
            <SectionTile subheading="Introduction" heading="About Me" />
            <section className="text-white px-3 md:px-16">
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="text-lg text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Hi there! 👋 I’m Safin, a Frontend React.js Developer passionate about crafting interactive, fast, and user-friendly web applications. I’m currently pursuing a Diploma in Computer Science and Technology at Feni Polytechnic Institute. At 18 years old, I live in Chattogram, Bangladesh, and I’m constantly exploring new technologies to enhance my development skills.
                    </motion.div>
                </div>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                    {/* What I Do */}
                    <motion.div
                        className="w-full p-[1px] green-pink-gradient rounded-[20px]  shadow-card transition-all duration-300 ease-in-out"
                        whileHover={{ scale: 1.01 }}
                        data-aos="fade-up"
                        data-aos-duration="2000"

                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-4 h-full min-h-[280px] flex justify-evenly items-center flex-col">
                            <FaReact className="text-4xl text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                            <p className="text-gray-300">
                                I'm an enthusiastic frontend developer dedicated to transforming ideas into engaging web experiences. I aim to master modern UI technologies, refine my design skills, and contribute to building intuitive, high-performance applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Programming Journey */}
                    <motion.div
                        className="w-full p-[1px] green-pink-gradient rounded-[20px]  shadow-card transition-all duration-300 ease-in-out"
                        whileHover={{ scale: 1.01 }}
                        data-aos="fade-up"
                        data-aos-duration="2000"

                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col">
                            <FaCode className="text-4xl text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Programming Journey</h3>
                            <p className="text-gray-300">
                                My coding journey started without a device—I practiced HTML, CSS, and JavaScript by writing code in a notebook. After four months, I got my first laptop thanks to my family's support. Despite having a device, I struggled due to lack of proper guidance. Financial constraints didn't stop me—I saved money for six months to enroll in the Programming Hero Web Development course. That decision changed my life and helped me build a strong foundation as a developer.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="w-full p-[1px] green-pink-gradient rounded-[20px]  shadow-card transition-all duration-300 ease-in-out"
                        whileHover={{ scale: 1.01 }}
                        data-aos="fade-up"
                        data-aos-duration="2000"

                    >
                        <div className="bg-tertiary h-full rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col">
                            <PiStudentBold className="text-4xl text-teal-400 mb-4 flex flex-col justify-between " />
                            <h3 className="text-xl font-semibold text-center">Diploma in Computer Science and Technology</h3>
                            <p className="text-gray-300 mb-2 text-center">
                                Feni Polytechnic Institute, Feni, Bangladesh
                            </p>
                            <p className="text-gray-300 text-center">
                                I’m currently studying Computer Science and Technology, focusing on app development, database management, and networking. I’m passionate about building scalable, efficient, and user-focused web applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Hobbies */}
                    <motion.div
                        className="w-full p-[1px] green-pink-gradient rounded-[20px]  shadow-card transition-all duration-300 ease-in-out"
                        whileHover={{ scale: 1.01 }}
                        data-aos="fade-up"
                        data-aos-duration="2000"

                    >
                        <div className="bg-tertiary h-full  rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col">
                            <FaGamepad className="text-4xl text-teal-400 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Hobbies & Interests</h3>
                            <p className="text-gray-300 text-center">
                                I enjoy <strong>gaming 🎮</strong>, <strong>cycling 🚴‍♂️</strong>, <strong>turning ideas into reality 💡</strong>, and <strong>UI/UX design 🎨</strong>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ScrollSection(AboutMe, "about");
