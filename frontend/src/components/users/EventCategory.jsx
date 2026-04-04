import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'

const EventCategory = () => {

  return (
    <section id='category' className='my-50'>
      <div className="max-w-6xl min-h-screen mx-auto px-4">

        <motion.h1 className='text-4xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl flex justify-center'
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >
          <p className='relative left-60'>Discover Events By <span
            className='bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-pink-700'>Category</span></p>
        </motion.h1>
        <motion.h1 className='flex justify-center'
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
        >
          <p className='relative text-center top-5 text-[18px] max-w-3xl'>Discover events that match your vibe
            Explore categories made for every interest From music <br />
            <span className='bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400'>
              to meetups, all in one place
              find your next experience today. Pick your passion, choose your path <br /></span>
            <span>
              Events for every mood and moment
              Browse  category <span className='bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-600'> dive into fun
                Your next memory starts here.</span></span>
          </p>
        </motion.h1>
        <div className="flex relative top-20 justify-center gap-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            className="flex h-40 rounded-2xl w-60 p-6 bg-white/3 transition-all hover:scale-105 justify-center items-center"
          >
            <div className='grid gap-5 justify-items-center' >
              <img className='w-15' src={icon.wedding_icon} alt="" />
              <h1 className='font-bold'>W E D D I N G</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
            className="flex h-40 rounded-2xl w-60 p-6 bg-white/3 transition-all hover:scale-105 justify-center items-center"
          >
            <div className='grid gap-5 items-center justify-items-center' >
              <img className='w-15' src={icon.birthday_party_icon} alt="" />
              <h1 className='font-bold'>BIRTHDAY PARTY</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
            className="flex h-40 rounded-2xl w-60 p-6 bg-white/3 transition-all hover:scale-105 justify-center items-center"
          >
            <div className='grid gap-5 items-center justify-items-center text-center' >
              <img className='w-15' src={icon.corporative_events} alt="" />
              <h1 className='font-bold'>CORPORATE EVENTS</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
            className="flex h-40 rounded-2xl w-60 p-6 bg-white/3 transition-all hover:scale-105 justify-center items-center"
          >
            <div className='grid gap-5 items-center justify-items-center' >
              <img className='w-15' src={icon.concern_icon} alt="" />
              <h1 className='font-bold'>C O N C E R T S</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
            className="flex h-40 rounded-2xl w-60 p-6 bg-white/3 transition-all hover:scale-105 justify-center items-center"
          >
            <div className='grid gap-5 items-center justify-items-center text-center' >
              <img className='w-15' src={icon.cultural_programs} alt="" />
              <h1 className='font-bold'>CULTURAL PROGRAMS</h1>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(EventCategory)