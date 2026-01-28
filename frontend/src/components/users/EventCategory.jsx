import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'

const EventCategory = () => {

  return (
    <section className='relative py-20 2xl:py-62'>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className='absolute font-bold text-3xl top-40  px-72 left-72'>Discover Events By Category</h1>
        <div className="relative flex top-35 gap-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            className="flex cursor-pointer h-40 rounded-2xl w-60 p-6 bg-white/3"
          >
            <div className='grid gap-5' >
              <img className='relative left-12 w-15' src={icon.wedding_icon} alt="" />
              <h1 className='relative left-9 font-bold'>W E D D I N G</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
            className="flex cursor-pointer h-40 rounded-2xl w-60 p-6 bg-white/3"
          >
            <div className='grid gap-5' >
              <img className='relative left-12 w-15' src={icon.birthday_party_icon} alt="" />
              <h1 className='relative left-3 font-bold'>BIRTHDAY PARTY</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
            className="flex cursor-pointer h-40 rounded-2xl w-60 p-6 bg-white/3"
          >
            <div className='grid gap-5' >
              <img className='relative left-12 w-15' src={icon.corporative_events} alt="" />
              <h1 className='relative left-9 font-bold'>CORPORATE EVENTS</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
            className="flex cursor-pointer h-40 rounded-2xl w-60 p-6 bg-white/3"
          >
            <div className='grid gap-5' >
              <img className='relative left-12 w-15' src={icon.concern_icon} alt="" />
              <h1 className='relative left-9 font-bold'>C O N C E R T S</h1>
            </div>

          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
            className="flex cursor-pointer h-40 rounded-2xl w-60 p-6 bg-white/3"
          >
            <div className='grid gap-5' >
              <img className='relative left-12 w-15' src={icon.cultural_programs} alt="" />
              <h1 className=' relative left-9 font-bold'>CULTURAL PROGRAMS</h1>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventCategory