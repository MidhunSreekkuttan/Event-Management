import React from 'react'
import { icon } from '../../../assets/assets'

const ListingComponent = () => {
    return (
        <>
            {/*...............................First Filter.......................*/}

            <section className='bg-purple-100'>
                <div className='flex gap-3 border border-black pt-4 mx-20'>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        All
                    </button>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        Wedding
                    </button>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        Birthday Party
                    </button>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        CORPORATE EVENTS
                    </button>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        CONCERTS
                    </button>
                    <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        CULTURAL PROGRAMS
                    </button>
                </div>
            </section>

            {/*..............................................Second Filter.......................................*/}

            <section id='main' className='bg-purple-100'>
                <div className='flex gap-3 border border-black pt-5 mx-20'>
                    <div>
                        <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 pr-45'>
                            Choose Date
                        </button>
                    </div>
                    <div>
                        <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 pr-45'>
                            All Locations
                        </button>
                    </div>
                    <div className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.search_icon} alt="" />
                        <input className='outline-none' type="text" placeholder='Search by Keyword' />
                    </div>
                    <div>
                        <button className='flex gap-3 rounded-2xl font-semibold text-white text-[20px]
                               bg-linear-to-r from-pink-500 to-pink-700 py-2 px-8'>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/*................................................Main Section........................................*/}

            <section className='relative h-screen bg-[#F6F0FD] text-black'>
                <div className='flex border border-black pt-13'>
                    <div className='mx-20 border border-black'>

                        {/*.......................................Left Side........................................*/}

                        <div className='grid gap-7 min-w-60'>

                            <ul className='grid gap-3'>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Filter
                                    </p>
                                </li>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Filter
                                    </p>
                                </li>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Filter
                                    </p>
                                </li>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Filter
                                    </p>
                                </li>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Filter
                                    </p>
                                </li>
                            </ul>

                            <div className='border border-b' />

                            <ul className='grid gap-3'>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Choose Date
                                    </p>
                                </li>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        All Locations
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*.............................................Right Side........................................*/}

                </div>
            </section>
        </>
    )
}

export default ListingComponent