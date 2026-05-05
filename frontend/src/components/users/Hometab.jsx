import React from 'react'
import { icon } from '../../assets/assets'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Hometab = () => {

    const cards = [
        { name: "Browse Events", subText: "Find the Perfect Event", icon: icon.search_icon, path: "/eventList" },
        { name: "Booking or Enqury", subText: "Easy Booking OR put your enquery", icon: icon.create_event_icon, path: "/BookingORenqury" },
        { name: "Enjoy The EVENT!", subText: "Have An Amazing Time", icon: icon.party_event, path: "/enjoyTheEvent" }
    ]

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

                    {cards.map((item, index) => (
                        <NavLink to={item.path} key={index}>
                            <Card index={index} text={item.name} img={item.icon} subText={item.subText} />
                        </NavLink>
                    ))}

                </div>
            </div>
        </section>
    )
}

function Card({ img, text, subText, index }) {

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: index * 0.30
            }}
            className="flex h-40 rounded-2xl w-90 p-6 bg-white/3 hover:scale-102"
        >
            <div className='flex flex-col gap-5'>
                <img className='w-14 h-14 object-contain' src={img} alt={text} />
                <h1 className='relative left-17 bottom-17 text-3xl font-bold'>{text}</h1>
                <p className='relative left-20 bottom-14'>{subText}</p>
            </div>
        </motion.div>
    )

}

export default React.memo(Hometab)