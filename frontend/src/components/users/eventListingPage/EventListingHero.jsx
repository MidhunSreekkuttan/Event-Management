import React, { useMemo } from 'react'
import { heroImages } from '../../../assets/assets'
import { motion } from 'framer-motion'
import HeroSlide from '../hero/HeroSlide'
import { Link } from 'react-router-dom'

const EventListingHero = () => {

    const slides = useMemo(() => (
        [
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
    ), [])

    return (
        <>
            {/*................................................Hero sectiom.................................................*/}

            <section id='eventList' className='relative min-h-screen max-w-screen text-white'>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >

                    <img className='absolute w-screen h-screen object-cover' src={heroImages.dj_party1} alt="" />
                    <div className='absolute inset-0 bg-black/50' />

                </motion.div>

                <div className='flex relative top-50 justify-around items-center'>

                    <motion.div className='grid gap-36'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                    >

                        <h1 className='font-bold text-6xl'>Explore <span className='text-violet-300'> Events</span></h1>

                        <div className='relative left-36 font-semibold text-2xl'>
                            <Link to='#main'>
                                <button className='py-2 px-4 rounded-2xl bg-linear-to-r from-pink-500 to-pink-700 active:scale-90 bg-white'>
                                    Click Me
                                </button>
                            </Link>
                        </div>

                    </motion.div>

                    <div>

                        <motion.div className='flex mx-auto w-full max-w-lg'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
                        >
                            <motion.div className='rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent'>
                                <div className='relative aspect-16/10 bg-gray-900'>

                                    <div className='max-w-lg'>
                                        <HeroSlide autoSlide={true} autoSlideTime={2000}>
                                            {slides.map((image, index) => (
                                                <img key={index} src={image}
                                                    loading="lazy"
                                                    decoding="async"
                                                />
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

export default EventListingHero