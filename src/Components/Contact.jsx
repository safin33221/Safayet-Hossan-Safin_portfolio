import { MdEmail } from "react-icons/md";
import SectionTile from "../Shared/SectionTile";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const message = form.message.value
        const info = {
            from_name: name,
            to_name: "Safayet Hossan Safin",
            from_email: email,
            to_email: "safin33221@gmail.com",
            message: message,
        }
        emailjs.send(import.meta.env.VITE_EmailJs_service_Id,
            import.meta.env.VITE_EmailJs_templete_Id,
            info,
            import.meta.env.VITE_EmailJs_public_key)
            .then(res => {
                console.log(res);
                if (res.text === 'OK') {
                    setLoading(false)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Thank you ${name}. I will get back to you as soon as possible.`,
                        showConfirmButton: false,
                        timer: 2000,
                        draggable: true
                    });
                    e.target.reset()
                }
            })
    }
    return (
        <div className="px-2">
            <SectionTile subheading="Get in touch" heading="Contact" />

            <div className={`p-2 md:px-10 md:flex gap-10 `}>
                <div className='md:w-1/2 flex flex-col flex-1  justify-center text-left space-y-5'>
                    <h1 className="text-secondary font-bold text-2xl" >Let's Chat....</h1>
                    <h2 className='text-3xl font-bold py-2 text-white'>Tell Me About Your Project.</h2>
                    <p className="text-secondary font-bold">Let's create something together🤘</p>
                    <p className="text-white fontpo">💡 Whether you have a groundbreaking idea, need help with web development, or want to collaborate on a creative project, I'm here to bring your vision to life. Feel free to reach out, and let's build something amazing together!</p>
                    <hr className='my-5' />
                    <div className=' flex flex-col '>
                        <h1 className='text-xl border-b-2 w-fit border-gray-400 text-gray-300'>Reach Out to Me</h1>


                        <div className='flex flex-col  justify-center mt-2'>
                            <h1 className='flex text-xl items-center text-gray-400 '><MdEmail className=' mx-2  ' />: safin33221@gmail.com</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaWhatsapp className=' mx-2 ' />: 8801837429636</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaLinkedinIn className=' mx-2 ' />: Safayet Hossan Safin</h1>
                            <h1 className='flex text-xl items-center text-gray-400 '><FaGithub className=' mx-2 ' />: safin33221</h1>

                            <h1 className='flex text-xl items-center text-gray-400 '><FaLocationDot className=' mx-2 ' />: Chittagong, Bangladesh.</h1>

                        </div>


                    </div>
                </div>

                <div

                    className=' flex-1 bg-black-100 px-3 rounded-2xl'
                >


                    <form

                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col gap-4 m-4 '
                    >
                        <h1 className="text-secondary font-bold uppercase text-lg py-4 md:py-1" >Send me email</h1>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                // value={form.name}
                                // onChange={handleChange}
                                placeholder="What's your  name?"
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                // value={form.email}
                                // onChange={handleChange}
                                placeholder="What's your email address?"
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-2'>Your Message</span>
                            <textarea
                                rows={3}
                                name='message'
                                // value={form.message}
                                // onChange={handleChange}
                                placeholder='What you want to say?'
                                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-tertiary m-5 py-4 px-8 rounded-xl outline-none  text-white font-bold shadow-md shadow-primary'
                        >
                            
                            {loading ? <TbFidgetSpinner className="animate-spin m-auto" /> : "Send"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;