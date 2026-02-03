import React from 'react'
import { heroImages, icon } from '../../assets/assets'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <>
      <section className='relative z-10 justify-center items-center'>
        <div className='flex w-screen min-h-screen justify-center items-center '>

          <motion.div className='absolute inset-0 -z-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >

              <img className='absolute w-screen h-screen object-cover opacity-40' src={heroImages.dj_party2} alt="" />

          </motion.div>

          <div className='z-10 grid gap-5 text-center'>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >

              <h1 className='font-semibold text-8xl'>Contact Us</h1>
              <p>*************************</p>
              <h1 className='text-[20px]'>Need an expert ? you are more than welcomed to leave your contact <br />
                Info and we will be in touch shortly.</h1>

            </motion.div>

          </div>
        </div>
      </section>

      <section className='bg-white text-black justify-center items-center'>

        {/*Main devider*/}
        <div className='pt-[200px] max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {/*Visit Us Cards*/}

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
          >

            <div className='items-center justify-center border-r border-black/20 grid gap-10'>
              <img className='relative left-[128px] w-[120px]' src={icon.visit_us} alt="Visit Us" />
              <h1 className='font-bold text-center text-2xl'>Visit Us</h1>
              <p>Visit our site to discuss your event ideas in person. <br /> We're always happy to help you plan something special. </p>
              <p className='relative left-9 bottom-6 text-orange-500 font-bold text-2xl'>Event management</p>
            </div>

          </motion.div>

          {/*Call Us Cards*/}

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
          >

            <div className='items-center justify-center border-r border-black/20 grid gap-10'>
              <img className='relative left-[100px] w-[120px]' src={icon.call_us} alt="Call our support team" />
              <h1 className='relative -left-5 font-bold text-center text-2xl'>Call Us</h1>
              <p>Call us to get quick answers and expert guidance. <br /> Our team is ready to assist you anytime.</p>
              <p className='relative left-12 text-orange-500 font-bold text-2xl'>0471-2256895</p>
            </div>

          </motion.div>

          {/*Contact Us Cards*/}

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
          >

            <div className='items-center justify-center grid gap-10'>
              <img className='relative left-[125px] w-[120px]' src={icon.contact_us} alt="Contact Us" />
              <h1 className='font-bold text-center text-2xl'>Contact Us</h1>
              <p>Send us your details and event requirements via email. <br /> We'll get back to you soon as possible.</p>
              <p className='relative left-12 text-orange-500 font-bold text-2xl'>nonreply@domain.com</p>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  )
}

export default ContactUs