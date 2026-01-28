import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'

const Hometab = () => {
    return (
        <section className='py-20 2xl:py-67'>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className='absolute font-bold text-3xl -my-17 px-80 left-96'>How It Works</h1>
                <div className="relative flex top-40 gap-8">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3"
                    >
                        <div className='grid gap-5' >
                            <img className='w-15' src={icon.search_icon} alt="" />
                            <h1 className='relative left-20 bottom-17 text-3xl font-bold'>Browse Events</h1>
                            <p className='relative left-20 bottom-14'>Find the Perfect Event</p>
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3"
                    >
                        <div className='grid gap-5' >
                            <img className='w-15' src={icon.create_event_icon} alt="" />
                            <h1 className='relative left-20 bottom-17 text-3xl font-bold'>Book OR Create</h1>
                            <p className='relative left-15 bottom-14'>Easy Booking OR Event SetUp</p>
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3"
                    >
                        <div className='grid gap-5' >
                            <img className='w-15' src={icon.party_event} alt="" />
                            <h1 className='relative left-17 bottom-17 text-3xl font-bold'>Enjoy The EVENT!</h1>
                            <p className='relative left-20 bottom-14'>Have An Amazing Time</p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hometab