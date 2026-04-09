import React from 'react'
import { motion } from 'framer-motion'
import bg_video from '../../../assets/projectVideo.mp4'

const Hero = () => {

  const marquee = [
    'Event Management Team',
    'Wedding',
    'Birthday party',
    'Casual Parties',
    'Inaugurations'
  ]

  return (
    <>
      <section id='home' className='relative z-10'>
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='text-left'>

              <motion.div className='absolute inset-0 -z-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <video className='w-full h-full object-cover opacity-50' src={bg_video} autoPlay muted loop />

              </motion.div>

              <motion.h1 className='relative font-bold text-5xl z-10 text-center px-4 max-w-3xl'
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
              >
                <p className='relative bottom-10 left-90 cursor-default'>Welcome to Our Web Page</p><br />
                <span className='relative bottom-15 left-90 bg-clip-text text-transparent
                   bg-linear-to-r from-indigo-300 to-indigo-400 cursor-default'>
                  Your Event Our Responsibility
                </span>
              </motion.h1>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
              >
                <div className='relative top-15 left-120 text-2xl font-bold flex gap-10'>
                  <a href='#category'>
                    <button
                      className='cursor-pointer bg-linear-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-xl'>
                      Explore Events
                    </button>
                  </a>
                  <a href='#info'>
                    <button
                      className='cursor-pointer bg-linear-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl'>
                      More Info
                    </button>
                  </a>
                </div>

              </motion.div>

            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}

      <motion.section className=' sticky bottom-0 left-0 w-full border-y border-white/6 bg-white/1 max-md:mt-10'
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className='max-w-6xl mx-auto px-6'>
          <div className='w-full overflow-hidden py-6'>
            <div className='flex gap-14 items-center justify-center animate-marquee whitespace-nowrap'>
              {marquee.concat(marquee).map((logo, i) => (
                <span
                  key={i}
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide
                   transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

    </>
  )
}

export default React.memo(Hero)