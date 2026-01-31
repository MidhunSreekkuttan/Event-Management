import React from 'react'
import { heroImages, icon } from '../../assets/assets'

const ContactUs = () => {
  return (
    <>
      <section className='relative z-2 justify-center items-center'>
        <div className='flex max-w-screen min-h-screen justify-center items-center '>
          <img className='absolute w-screen h-screen object-cover opacity-40' src={heroImages.party2} alt="" />
          <div className='z-3 grid gap-5 text-center'>
            <h1 className='font-semibold text-8xl'>Contact Us</h1>
            <p>*************************</p>
            <h1 className='text-[20px]'>Need an expert ? you are more than welcomed to leave your contact <br />
              Info and we will be in touch shortly.</h1>
          </div>
        </div>
      </section>

      <section className='justify-center items-center'>

        {/*Main devider*/}
        <div className='pt-50 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {/*Visit Us Cards*/}
          <div className='items-center justify-center border-r border-white/20 grid gap-10'>
            <img className='relative w-30' src={icon.visit_us} alt="Visit Us" />
            <h1 className='font-bold text-center text-2xl'>Visit Us</h1>
          </div>

          {/*Call Us Cards*/}
          <div className='items-center justify-center border-r border-white/20 grid gap-10'>
            <img className='relative w-30' src={icon.call_us} alt="Call Us" />
            <h1 className='font-bold text-center text-2xl'>Call Us</h1>
          </div>

          {/*Contact Us Cards*/}
          <div className='items-center justify-center grid gap-10'>
            <img className='relative w-30' src={icon.contact_us} alt="Contact Us" />
            <h1 className='font-bold text-center text-2xl'>Contact Us</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs