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

      <section className='bg-white text-black justify-center items-center'>

        {/*Main devider*/}
        <div className='pt-50 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {/*Visit Us Cards*/}
          <div className='items-center justify-center border-r border-black/20 grid gap-10'>
            <img className='relative left-28 w-30' src={icon.visit_us} alt="Visit Us" />
            <h1 className='font-bold text-center text-2xl'>Visit Us</h1>
            <p>Visit our site to discuss your event ideas in person. <br/> We're always happy to help you plan something special. </p>
            <p className='relative left-9 text-orange-500 font-bold text-2xl'>Event management</p>
          </div>

          {/*Call Us Cards*/}
          <div className='items-center justify-center border-r border-black/20 grid gap-10'>
            <img className='relative w-30 left-23' src={icon.call_us} alt="Call Us" />
            <h1 className='relative -left-5 font-bold text-center text-2xl'>Call Us</h1>
            <p>Call us to get quick answers and expert guidance. <br /> Our team is ready to assist you anytime.</p>
            <p className='relative left-12 text-orange-500 font-bold text-2xl'>0471-2256895</p>
          </div>

          {/*Contact Us Cards*/}
          <div className='items-center justify-center grid gap-10'>
            <img className='relative w-30 left-27' src={icon.contact_us} alt="Contact Us" />
            <h1 className='font-bold text-center text-2xl'>Contact Us</h1>
            <p>Send us your details and event requirements via email. <br /> We'll get back to you soon as possible.</p>
            <p className='relative left-12 text-orange-500 font-bold text-2xl'>nonreply@domain.com</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs