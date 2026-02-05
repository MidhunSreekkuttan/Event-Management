import React from 'react'
import { heroImages, icon } from '../../assets/assets'
import { motion } from 'framer-motion'
import HeroSlide from '../../components/users/hero/HeroSlide'
import ListingEvents from '../../components/eventListing/ListingEvents'

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
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
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

      <section className='justify-center items-center bg-violet-100 border'>
        <div className='max-w-screen m-20 relative bottom-10 min-h-screen'>
          <div className='grid gap-7'>
            <div className='flex justify-center items-center gap-10 text-violet-900 font-semibold text-[16px]'>

              <div>
                <button className='flex gap-3 justify-center items-center bg-white w-25 p-3 rounded-2xl'>
                  <img className='w-8' src={icon.wedding_icon} alt="" />
                  ALL
                </button>
              </div>
              <div>
                <button className='flex gap-2 justify-center items-center bg-white w-35 p-3 rounded-2xl'>
                  <img className='w-7' src={icon.wedding_icon} alt="" />
                  WEDDING
                </button>
              </div>
              <div>
                <button className='flex justify-around items-center bg-white w-50 p-3 rounded-2xl'>
                  <img className='w-6' src={icon.birthday_party_icon} alt="" />
                  BIRTHDAY PARTY
                </button>
              </div>
              <div>
                <button className='flex justify-around items-center bg-white w-57 p-3 rounded-2xl'>
                  <img className='w-8' src={icon.corporative_events} alt="" />
                  CORPORATE EVENTS
                </button>
              </div>
              <div>
                <button className='flex justify-around items-center bg-white w-35 p-3 rounded-2xl'>
                  <img className='w-8' src={icon.concern_icon} alt="" />
                  CONCERTS
                </button>
              </div>
              <div>
                <button className='flex justify-around items-center bg-white w-57 p-3 rounded-2xl'>
                  <img className='w-6' src={icon.cultural_programs} alt="" />
                  CULTURAL PROGRAMS
                </button>
              </div>
            </div>
            {/*.................................................Second Catagory..........................................*/}
            <div className='flex justify-center items-center gap-3 text-violet-900'>

              <div>
                <button className='flex bg-white w-96 p-3 py-2 text-[20px] rounded-2xl'>
                  Choose Date
                </button>
              </div>
              <div>
                <button className='flex bg-white w-96 p-3 py-2 text-[20px] rounded-2xl'>
                  All Locations
                </button>
              </div >
              <div className='flex gap-3 rounded-2xl p-3 pl-7 bg-white'>
                <img className='w-5' src={icon.search_icon} alt="" />
                <input className='outline-none' type="text" placeholder='Search By Keyword' name="" id="" />
              </div>
              <button className='w-35 py-2 text-center rounded-2xl bg-linear-to-r from-pink-500 to-pink-700
               font-semibold text-[20px] text-white'>
                Search
              </button>

            </div>
            {/*.....................................................Left Side Catogory...........................................*/}
            <div className='flex justify-center items-center bg-white/30'>
              <div className='grid relative bottom-33 text-violet-900 font-sans text-[14px] justify-center'>

                <div>
                  <button className='flex gap-2 justify-center items-center w-25 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.wedding_icon} alt="" />
                    ALL
                  </button>
                </div>
                <div>
                  <button className='flex gap-2 justify-center items-center w-35 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.wedding_icon} alt="" />
                    WEDDING
                  </button>
                </div>
                <div>
                  <button className='flex gap-2 justify-center items-center w-50 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.birthday_party_icon} alt="" />
                    BIRTHDAY PARTY
                  </button>
                </div>
                <div>
                  <button className='flex gap-2 justify-center items-center w-57 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.corporative_events} alt="" />
                    CORPORATE EVENTS
                  </button>
                </div>
                <div>
                  <button className='flex gap-2 justify-center items-center w-35 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.concern_icon} alt="" />
                    CONCERTS
                  </button>
                </div>
                <div>
                  <button className='flex gap-2 justify-center items-center w-57 p-3 rounded-2xl'>
                    <img className='w-4' src={icon.cultural_programs} alt="" />
                    CULTURAL PROGRAMS
                  </button>
                </div>
                {/*................................................Border....................................................*/}
                <div className='border border-gray-500/10'></div>
                {/*...........................................................................................................*/}
                <div className='relative top-5'>
                  <div className='grid gap-3 justify-center items-center text-violet-900'>

                    <div>
                      <button className='flex bg-white w-50 p-3 py-2 text-[20px] rounded-2xl'>
                        Choose Date
                      </button>
                    </div>

                    <div>
                      <button className='flex bg-white w-50 p-3 py-2 text-[20px] rounded-2xl'>
                        All Locations
                      </button>
                    </div >

                    <div className='flex gap-3 rounded-2xl p-3 pl-7 bg-white'>
                      <img className='w-5' src={icon.search_icon} alt="" />
                      <input className='outline-none w-20' type="text" placeholder='Search By Keyword' name="" id="" />
                    </div>

                    <button className='w-35 py-2 text-center rounded-2xl bg-linear-to-r from-pink-500 to-pink-700
                          font-semibold text-[20px] text-white'>
                      Search
                    </button>

                  </div>
                </div>
              </div>
              {/*................................................Event Listing................................................*/}

              <div className='w-[65rem] text-black'>
                <ListingEvents />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventList