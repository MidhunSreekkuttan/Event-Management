import React from 'react'
import { motion } from 'framer-motion'
import { heroImages, logo } from '../../../assets/assets'
import HeroSlide from './HeroSlide'
import bg_video from '../../../assets/projectVideo.mp4'

const Hero = () => {

  const slides = [
    heroImages.birthday_cake1,
    heroImages.birthday_party_design1,
    heroImages.cattering_counter1,
    heroImages.cattering_counter2,
    heroImages.cattering_counter3,
    heroImages.cattering_decoration1,
    heroImages.cattering_food1,
    heroImages.cattering_food2,
    heroImages.cattering_food3,
    heroImages.cattering_table,
    heroImages.dj_party1,
    heroImages.dj_party2,
    heroImages.dj_party3,
    heroImages.party_light1,
    heroImages.party_light2,
    heroImages.party1,
    heroImages.party2
  ]

  const marquee = [
    'Event Management Team',
    'Wedding',
    'birthday party',
    'Casual Parties',
    'Inaugurations'
  ]

  return (
    <>
      <section id='home' className='relative z-10'>
        <div className='max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='text-left'>

              <motion.div className='absolute inset-0 -z-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <video className='opacity-50 w-full h-full object-cover' src={bg_video} autoPlay muted loop />

              </motion.div>

              <motion.h1 className='relative top-30 text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl'
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
              >
                Welcome to Our Web Page <br />
                <span className='bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400'>
                  Your Event Our Responsibility
                </span>
              </motion.h1>

              {/*                                                       Right Side                                                                          */}

              <motion.div className='flex mx-auto w-full max-w-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}
              >
                <motion.div className='relative left-[90vh] bottom-40 rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent'>
                  <div className='relative aspect-16/10 bg-gray-900'>

                    <div className='max-w-lg'>
                      <HeroSlide autoSlide={true} autoSlideTime={2000}>
                        {slides.map((i) => (
                          <img src={i} />
                        ))}
                      </HeroSlide>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}

      <motion.section className='border-y border-white/6 bg-white/1 max-md:mt-10'
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
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
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

export default Hero