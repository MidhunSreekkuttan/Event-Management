import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const EventCategory = () => {

  const cards = [

    { name: "PERSONAL", icon: icon.wedding_icon, path: "/personal" },
    { name: "CULTURAL", icon: icon.birthday_party_icon, path: "/cultural" },
    { name: "CORPORATES", icon: icon.corporative_events, path: "/coorprates" },
    { name: "ENTERTAINMENTS", icon: icon.concern_icon, path: "/entertainments" },
    { name: "EDUCATIONAL", icon: icon.cultural_programs, path: "/educational" }

  ]

  return (
    <section id='category' className='my-15'>
      <div className="max-w-6xl min-h-auto mx-auto px-4">

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
        <div className="grid grid-cols-5 gap-6 py-30">
          {cards.map((item, index) => (
            <NavLink to={item.path} key={index} >
              <Cards index={index} img={item.icon} text={item.name} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cards({ img, text, index }) {

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 70,
        mass: 1,
        delay: index * 0.30
      }}
      className="flex h-40 rounded-2xl w-full p-6 bg-white/3 hover:scale-105 justify-center items-center"
    >
      <div className='flex flex-col gap-5 items-center justify-items-center text-center'>
        <img className='w-14 h-14 object-contain' src={img} alt={text} />
        <h1 className='font-bold'>{text}</h1>
      </div>
    </motion.div>
  )

}

export default React.memo(EventCategory)