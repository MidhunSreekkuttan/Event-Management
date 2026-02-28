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
                  events without the usual chaos. From handling registrations to keeping track of attendees,
                  everything is managed in one place.</span>
              </p>
              <p className='relative top-[60px] text-2xl font-semibold bg-linear-to-r from-pink-600 to-pink-300 bg-clip-text text-transparent'>
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
            <h1 className='font-semibold text-2xl'>Empowering Your Celebrations</h1>

            <div>
              <p className='text-[20px]'>At Eventify, we believe every special moment deserve to be <br />
                unforgettable. We're a passionate team dedicated to pro- <br />
                viding an all-in-one event management platform that makes <br />
                it easy to book and manage events of any size, from intimate <br />
                weddings and birthday parties to grand concerts and corpo- <br />
                rate functions. Our mission is to simpify the event planning <br />
                process so you can focus on what really matters - creating <br />
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

      <section className='relative max-w-screen min-h-screen flex justify-center items-center gap-40
       bg-[#F6F0FD] text-black'>
        <div className='grid gap-30'>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
          >

            <div className='grid gap-5 relative left-115'>
              <h1 className='font-bold text-5xl'>Why Choose Us</h1>
              <h1 className='relative top-5 font-semibold text-2xl'>The Adhithi Advantages</h1>
            </div>

          </motion.div>

          <div className='flex gap-10'>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >

              <div className='flex gap-3 shadow-xl bg-linear-to-r from-white via-violet-200 to-violet-300
             justify-center h-60 rounded-2xl w-[400px] p-5 hover:scale-110 transition-all'>
                <img className='relative -top-10 w-18 object-contain' src={icon.corporative_events} alt="" />
                <div>
                  <h1 className='relative top-5 font-semibold text-2xl'>Year of Experiance</h1>
                  <h1 className='relative top-20 right-15'>We're over 10 years of experience and <br />
                    gio ovents in panage were that ore tust <br />
                    potlies in-the scee in a mindfal world.</h1>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
            >

              <div className='flex gap-3 shadow-xl bg-linear-to-r from-white via-violet-200 to-violet-300
             justify-center h-60 rounded-2xl w-[400px] p-5 hover:scale-110 transition-all'>
                <img className='relative -top-13 w-15 object-contain' src={icon.settings_icon} alt="" />
                <div>
                  <h1 className='relative top-5 font-semibold text-2xl'>Year of Experiance</h1>
                  <h1 className='relative top-20 right-15'>We're over 10 years of experience and <br />
                    gio ovents in panage were that ore tust <br />
                    potlies in-the scee in a mindfal world.</h1>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
            >

              <div className='flex gap-3 shadow-xl bg-linear-to-r from-white via-violet-200 to-violet-300
             justify-center h-60 rounded-2xl w-[400px] p-5 hover:scale-110 transition-all'>
                <img className='relative -top-13 w-12 object-contain' src={icon.like_icon} alt="" />
                <div>
                  <h1 className='relative top-5 font-semibold text-2xl'>Year of Experiance</h1>
                  <h1 className='relative top-20 right-15'>We're over 10 years of experience and <br />
                    gio ovents in panage were that ore tust <br />
                    potlies in-the scee in a mindfal world.</h1>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      <section className='relative max-w-screen min-h-screen flex justify-center items-center gap-40
       bg-[#F6F0FD] text-black'>
        <div className='grid gap-50'>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
          >

            <h1 className='relative left-[460px] font-bold text-5xl'>Our Services</h1>

          </motion.div>

          <div className='relative bottom-20 flex gap-20'>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
            >

              <div className='hover:scale-110 transition-all'>
                <div className='w-60 h-40 overflow-hidden rounded-t-2xl'>
                  <img loading='lazy' decoding='async' className='relative left-5 w-screen h-full object-cover object-[10%_-20%] scale-130'
                    src='/IMG_20260113_212004.avif' alt="" />
                </div>
                <div className='w-60 h-[220px] shadow-2xl rounded-b-2xl'>
                  <h1 className='relative top-4 font-semibold text-2xl text-center'>Midhun M</h1>
                  <h1 className='relative top-5 left-15'>Founder & CEO</h1>
                  <div className="relative top-4 flex gap-4 p-4">
                    <SocialIcon icon={<FaFacebookF />} />
                    <SocialIcon icon={<FaTwitter />} />
                    <a href="https://www.instagram.com/midhun_sreekkuttan?igsh=NGJuaXJwNGtzdDJu" target="_blank">
                      <SocialIcon icon={<FaInstagram />} /></a>
                    <SocialIcon icon={<FaYoutube />} />
                  </div>
                  <h1 className='p-2'>Lorem ipsum dasercet matics,
                    cuntpoiine codinaolb lb and <br />
                    ssage essecemniiselitpr Ibieam.</h1>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
            >

              <div className='hover:scale-110 transition-all'>
                <div className='w-60 h-40 overflow-hidden rounded-t-2xl'>
                  <img loading='lazy' decoding='async' className='w-screen h-full object-cover object-[10%_15%]'
                    src='/IMG_20260228_152809.avif' alt="" />
                </div>
                <div className='w-60 h-55 shadow-2xl rounded-b-2xl'>
                  <h1 className='relative top-4 font-semibold text-2xl text-center'>Sruthy Alex</h1>
                  <h1 className='relative top-5 left-15'>Founder & CEO</h1>
                  <div className="relative top-4 flex gap-4 p-4">
                    <SocialIcon icon={<FaFacebookF />} />
                    <SocialIcon icon={<FaTwitter />} />
                    <a href="https://www.instagram.com/sh.ruthi_7510?igsh=ZnozMjYxdW4wdmk4" target="_blank">
                      <SocialIcon icon={<FaInstagram />} /></a>
                    <SocialIcon icon={<FaYoutube />} />
                  </div>
                  <h1 className='p-2'>Lorem ipsum dasercet matics,
                    cuntpoiine codinaolb lb and <br />
                    ssage essecemniiselitpr Ibieam.</h1>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
            >

              <div className='hover:scale-110 transition-all'>
                <div className='w-60 h-40 overflow-hidden rounded-t-2xl'>
                  <img loading='lazy' decoding='async' className='relative right-4 w-screen h-full object-cover scale-125 object-[10%_40%]'
                    src='/IMG_20241204_124644.avif' alt="" />
                </div>
                <div className='w-60 h-55 shadow-2xl rounded-b-2xl'>
                  <h1 className='relative top-4 font-semibold text-2xl text-center'>Alfina</h1>
                  <h1 className='relative top-5 left-15'>Founder & CEO</h1>
                  <div className="relative top-4 flex gap-4 p-4">
                    <SocialIcon icon={<FaFacebookF />} />
                    <SocialIcon icon={<FaTwitter />} />
                    <a href="https://www.instagram.com/___alfinaa___?igsh=NHFtd2hkY3Ntam5n" target="_blank">
                      <SocialIcon icon={<FaInstagram />} /></a>
                    <SocialIcon icon={<FaYoutube />} />
                  </div>
                  <h1 className='p-2'>Lorem ipsum dasercet matics,
                    cuntpoiine codinaolb lb and <br />
                    ssage essecemniiselitpr Ibieam.</h1>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
            >

              <div className='hover:scale-110 transition-all'>
                <div className='w-60 h-40 overflow-hidden rounded-t-2xl'>
                  <img loading='lazy' decoding='async' className='relative left-15 w-full h-full object-cover 
                      object-[10%_15%] scale-150'
                    src='/IMG_20241207_113701_1.avif' alt="" />
                </div>
                <div className='w-60 h-55 shadow-2xl rounded-b-2xl'>
                  <h1 className='relative top-4 font-semibold text-2xl text-center'>Abdulla Asid</h1>
                  <h1 className='relative top-5 left-15'>Founder & CEO</h1>
                  <div className="relative top-4 flex gap-4 p-4">
                    <SocialIcon icon={<FaFacebookF />} />
                    <SocialIcon icon={<FaTwitter />} />
                    <a href="https://www.instagram.com/asid_sallu_?igsh=YjU4emI3NXF2b2wz" target="_blank">
                      <SocialIcon icon={<FaInstagram />} /></a>
                    <SocialIcon icon={<FaYoutube />} />
                  </div>
                  <h1 className='p-2'>Lorem ipsum dasercet matics,
                    cuntpoiine codinaolb lb and <br />
                    ssage essecemniiselitpr Ibieam.</h1>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
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