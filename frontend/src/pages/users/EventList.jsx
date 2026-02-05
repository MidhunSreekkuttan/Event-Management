import React from 'react'
import { heroImages } from '../../assets/assets'
import { motion } from 'framer-motion'
import HeroSlide from '../../components/users/hero/HeroSlide'

const EventList = () => {

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


  return (
    <>
      <section className='relative justify-center items-center'>
        <div className='flex w-screen h-screen justify-center items-center'>

          <motion.div className='absolute inset-0 -z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >

            <img className='w-screen h-screen opacity-50 object-cover' src={heroImages.dj_party1} alt="" />

          </motion.div>

          <div className='flex z-10 relative top-52 right-1/3'>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >

              <h1 className='relative left-80 bottom-24 font-bold text-6xl'>Explore <span
                className='bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400'>Your Events
              </span>
              </h1>

            </motion.div>

            <motion.div className='flex mx-auto w-full max-w-lg'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
            >
              <motion.div className='relative left-[90vh] bottom-40 rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent'>
                <div className='relative aspect-16/10 bg-gray-900'>

                  <div className='max-w-lg'>
                    <HeroSlide autoSlide={true} autoSlideTime={2000}>
                      {slides.map((image, index) => (
                        <img key={index} src={image} />
                      ))}
                    </HeroSlide>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default EventList