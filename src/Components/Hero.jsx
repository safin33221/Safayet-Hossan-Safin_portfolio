import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../App.css';
import image from '../assets/safin.png';
import ScrollSection from '../Hooks/ScrollSection';
import resume from '../assets/safayet_hossan.pdf';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
    return (
        <section className='w-full lg:min-h-screen mx-auto px-4 md:px-12 pt-28'>
            <div className='flex flex-col-reverse md:flex-row items-center'>
                <div className='flex gap-5 flex-1 items-center mt-2'>
                    {/* Line Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col items-center justify-center mt-4'
                    >
                        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                        <div className="w-1 sm:h-80 h-80 violet-gradient" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className=''
                    >
                        <h1 className='font-black text-white lg:text-4xl sm:text-3xl text-2xl '>
                            Hi, I'm <span className='text-[#915EFF]'>Safin</span>
                        </h1>
                        <p className='font-black text-white-100 lg:text-5xl sm:text-4xl text-2xl mt-5'>
                            Frontend Web Developer
                        </p>
                        <p className="text-2xl text-white-100 my-4">Your Vision, My Code_</p>
                        <p className="md:w-4/5 w-full text-gray-400 capitalize text-lg">
                            Crafting innovative digital experiences that bring your ideas to life, blending creativity and functionality to build solutions that inspire, engage, and deliver results.
                        </p>

                        {/* Social Icons & Resume */}
                        {/* <div className='mt-5'>
                            <ul className='flex gap-5 mb-6 text-4xl items-center'>
                                <li >
                                    <a href="https://www.facebook.com/safin.2360" target='_blank'>
                                        <FaFacebook className='text-[#1876f2b0] hover:text-[#1877F2] transition duration-300' />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/safayet-hossan-safin/" target='_blank'>
                                        <FaLinkedin className='hover:text-[#0077b5]  text-[#0076b5cf] transition duration-300' />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/safin33221" target='_blank'>
                                        <FaGithub className='hover:text-gray-100 transition duration-300' />
                                    </a>
                                </li>
                              <li>
                                    <a href="https://x.com/safin33221" target='_blank'>
                                        <FaTwitter className='hover:text-[#1DA1F2] text-[#1da0f2c8] transition duration-300' />
                                    </a>
                                </li>
                                <li>
                                    <a href={resume} target='_blank' download={resume}>
                                        <button className="p-2 border-2 text-2xl rounded-xl border-[#271e5c] bg-tertiary text-secondary hover:text-white flex gap-2">
                                            <span className='hidden md:flex'>Download</span> Resume
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <div className='hidden md:block mt-4'>
                            <Button />
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 mx-auto"
                >
                    <img src={image} className="w-[400px] rounded-full border-[#915eff] shadow-card" alt="safin" />
                </motion.div>
            </div>
            <div className='md:hidden m-auto'>

                <Button />
            </div>
        </section>
    );
};

export default ScrollSection(Hero, "home");
