import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'

const Hometab = () => {
    return (
        <section>
            <div className="max-w-6xl min-h-auto mx-auto px-4">

                <motion.h1 className='text-4xl md:text-5xl font-bold leading-tight mb-10 max-w-2xl flex justify-center'
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                >
                    <p className='relative left-60'>How It W
                        <span className='bg-clip-text text-transparent bg-linear-to-br from-indigo-500 to-indigo-600'>orks</span></p>
                </motion.h1>

                <div className="py-10 flex gap-8">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.6 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3 hover:scale-102"
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
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3 hover:scale-102"
                    >
                        <div className='grid gap-5' >
                            <img className='w-15' src={icon.create_event_icon} alt="" />
                            <h1 className='relative left-15 bottom-17 text-3xl font-bold'>Booking or Enqury</h1>
                            <p className='relative left-15 bottom-14'>Easy Booking OR Event SetUp</p>
                        </div>

                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        className="flex h-40 rounded-2xl w-100 p-6 bg-white/3 hover:scale-102"
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

export default React.memo(Hometab)