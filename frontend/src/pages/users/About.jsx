import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { heroImages, icon } from '../../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const location = useNavigate()

  const fadeUp = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { type: "spring", stiffness: 120, damping: 25 }
  };


  return (
    <>
      <section className='relative justify-center items-center overflow-hidden'>
        <div className='flex w-screen min-h-screen justify-center items-center'>

          <motion.div className='absolute inset-0 -z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img className='absolute w-screen h-screen object-cover opacity-40' src={heroImages.dj_party3} alt="" />
          </motion.div>

          <motion.div
            {...fadeUp}
          >

            <div className='z-10 grid gap-5 text-center'>
              <h1 className='font-semibold text-8xl'>About Us</h1>
              <p>*************************</p>
              <p>
                <span className='font-semibold text-2xl'>Our EVENT MANAGEMENT SYSTEM</span>
                <span className='text-[17px]'> is
                  a centralized platform built to handle
                  the complete lifecycle of an event. <br /> Planning an event shouldn't be stressful and that's
                  exactly why we built this platform.Our Event Management System helps you plan, <br /> organize, and manage
                  events without the usual choose.
                  Everything is managed in one place.</span>
              </p>
              <p className='relative top-15 text-2xl font-semibold bg-linear-to-r from-pink-600 to-pink-300 bg-clip-text text-transparent'>
                We take care of the technical side so you can focus on what really matters creating <br />
                amazing events and unforgettable memories.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='relative max-w-screen min-h-screen flex justify-center items-center gap-40 bg-[#F6F0FD] text-black'>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >

          <div className='grid gap-5'>

            <h1 className='font-bold text-3xl'>Who we are:</h1>

            <div className='max-w-xl'>
              <p className='text-[20px] leading-relaxed text-gray-700 text-justify'>We believe every special moment deserve to be
                unforgettable. We're a passionate team dedicated to pro-
                viding an all-in-one event management platform that makes
                it easy to book and manage events of any size, from intimate
                weddings and birthday parties to grand concerts and corpo-
                rate functions. Our mission is to simpify the event planning
                process so you can focus on what really matters - creating
                memories that will last a lifetime..</p>
            </div>
            <div>
              <button onClick={() => location('/eventList')} className="bg-pink-500 hover:bg-pink-600 text-white transition
             px-10 py-3 rounded-full text-lg font-medium shadow-lg active:scale-90">
                Get Started
              </button>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >

          <div className='max-w-160'>
            <img loading='lazy' decoding='async' className=' rounded-2xl' src={heroImages.party1} alt="" />
          </div>

        </motion.div>
      </section>

      <section className='max-w-screen min-h-40 bg-linear-to-r from-purple-900 via-purple-900 to-pink-700
       text-center'>
        <h1 className='relative top-6 font-bold text-4xl'>Let's Create Unforgettable Events Together</h1>
        <h1 className='relative top-10 font-sans text-2xl'>Ready to make your next event extreordinary? Contact us fndby and let's</h1>
      </section>
    </>
  )
}

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-pink-500 hover:bg-white/30 flex items-center justify-center cursor-pointer transition">
    {icon}
  </div>
);

export default About