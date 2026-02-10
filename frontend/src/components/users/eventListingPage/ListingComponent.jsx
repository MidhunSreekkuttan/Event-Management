import { useContext, useEffect, useMemo, useState } from 'react'
import { icon } from '../../../assets/assets'
import { EventContext } from '../../../context/EventContext'
import ProductList from '../eventListing/ProductList'
import { useLocation } from 'react-router-dom';
import { useRef } from "react";

const ListingComponent = () => {

    const { products } = useContext(EventContext)

    const [filter, setfilter] = useState('all')

    const [locationFilter, setLocationFilter] = useState('All Location')

    const [search, setSearch] = useState('')
    const [searchBotton, setSearchButton] = useState('')

    const handleSearch = () => {
        setSearchButton(search.trim())
    }

    const filterProducts = useMemo(() => {

        return products.filter((item) => {

            const categoryFilter = filter === 'all' || item.category === filter

            const filterLocation = locationFilter === 'All Location' || item.location === locationFilter

            const searchFilter = searchBotton === '' || item.name.toLowerCase().includes(searchBotton.toLowerCase());

            return categoryFilter && filterLocation && searchFilter
        })
    }, [products, filter, locationFilter, searchBotton])

    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const hash = location.hash.replace("#", "").toLowerCase();

        const categoryMap = {
            wedding: "Wedding",
            birthday: "Birthday Party",
            corporate: "Corporate Events",
            concerts: "Concerts",
            cultural: "Cultural Programs",
            all: "all",
        };

        if (categoryMap[hash]) {
            setfilter(categoryMap[hash]);
        }
    }, [location.hash]);


    return (
        <>
            {/*...............................First Filter.......................*/}

            <section className='bg-purple-100'>
                <div className='flex gap-3 pt-4 mx-20'>
                    <button onClick={() => setfilter('all')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'all' ? 'pazham' : ''}`}>
                        <img className={`w-5 ${filter === 'all' ? 'invert brightness-0' : ''}`} src={icon.star_icon} alt="" />
                        All
                    </button>
                    <button onClick={() => setfilter('Wedding')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'Wedding' ? 'pazham' : ''}`}>
                        <img className='w-5' src={icon.wedding_icon} alt="" />
                        Wedding
                    </button>
                    <button onClick={() => setfilter('Birthday Party')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'Birthday Party' ? 'pazham' : ''}`}>
                        <img className='w-5' src={icon.birthday_party_icon} alt="" />
                        Birthday Party
                    </button>
                    <button onClick={() => setfilter('Corporate Events')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'Corporate Events' ? 'pazham' : ''}`}>
                        <img className='w-5' src={icon.corporative_events} alt="" />
                        CORPORATE EVENTS
                    </button>
                    <button onClick={() => setfilter('Concerts')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'Concerts' ? 'pazham' : ''}`}>
                        <img className='w-5' src={icon.concern_icon} alt="" />
                        CONCERTS
                    </button>
                    <button onClick={() => setfilter('Cultural Programs')} className={`flex gap-3 rounded-2xl font-semibold
                         text-violet-950 bg-white py-3 px-5 ${filter === 'Cultural Programs' ? 'pazham' : ''}`}>
                        <img className='w-5' src={icon.cultural_programs} alt="" />
                        CULTURAL PROGRAMS
                    </button>
                </div>
            </section>

            {/*..............................................Second Filter.......................................*/}

            <section id='main' className='bg-purple-100'>
                <div className='flex gap-3 pt-5 mx-20'>
                    <div>
                        <button className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 pr-45'>
                            Choose Date
                        </button>
                    </div>
                    <div className='flex gap-3 cursor-pointer rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 text-center'>

                        <img className='w-6' src={icon.location_icon} alt="" />

                        <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className='outline-none pr-45 cursor-pointer'
                        >
                            <option value="All Location">All Location</option>
                            <option value="TVM">TVM</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kasaragod ">Kasaragod </option>
                        </select>
                    </div>
                    <div className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5'>
                        <img className='w-5' src={icon.search_icon} alt="" />
                        <input onChange={(e) => {
                            const value = e.target.value
                            setSearch(value)
                            if (value.trim() === '') {
                                setSearchButton('')
                            }
                        }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className='outline-none' type="text" placeholder='Search by Keyword' />
                    </div>
                    <div>
                        <button onClick={handleSearch} className='flex gap-3 rounded-2xl font-semibold text-white text-[20px]
                               bg-linear-to-r from-pink-500 to-pink-700 py-2 px-8 active:scale-90'>
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/*................................................Main Section........................................*/}

            <section className='relative bg-[#F6F0FD] text-black'>
                <div className='flex pt-13'>
                    <div className='mx-20'>

                        {/*.......................................Left Side........................................*/}

                        <div className='grid gap-7 min-w-60'>

                            <ul className='grid gap-3'>
                                <li>
                                    <button onClick={() => setfilter('all')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'all' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.star_icon} alt="" />
                                        All
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Wedding')} className={`flex gap-3 rounded-2xl
                                        -2xl font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                         ${filter === 'Wedding' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.wedding_icon} alt="" />
                                        Wedding
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Birthday Party')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Birthday Party' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.birthday_party_icon} alt="" />
                                        Birthday Party
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Corporate Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Corporate Events' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.corporative_events} alt="" />
                                        Corporate Events
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Concerts')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Concerts' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.concern_icon} alt="" />
                                        Concerts
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Cultural Programs')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Cultural Programs' ? 'apple' : ''}`}>
                                        <img className='w-6' src={icon.cultural_programs} alt="" />
                                        Cultural Programs
                                    </button>
                                </li>
                            </ul>

                            <div className='border border-b w-55 border-black/10' />

                            <ul className='grid gap-3'>
                                <li className='flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-2 px-5 w-55'>
                                    <p className='my-2 text-xl flex items-center gap-2'>
                                        Choose Date
                                    </p>
                                </li>
                                <li className='flex gap-3 cursor-pointer rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 w-55 text-center'>

                                    <img className='w-6' src={icon.location_icon} alt="" />

                                    <select
                                        value={locationFilter}
                                        onChange={(e) => setLocationFilter(e.target.value)}
                                        className='outline-none pr-5 cursor-pointer'
                                    >
                                        <option value="All Location">All Location</option>
                                        <option value="TVM">TVM</option>
                                        <option value="Kollam">Kollam</option>
                                        <option value="Pathanamthitta">Pathanamthitta</option>
                                        <option value="Alappuzha">Alappuzha</option>
                                        <option value="Kottayam">Kottayam</option>
                                        <option value="Idukki">Idukki</option>
                                        <option value="Ernakulam">Ernakulam</option>
                                        <option value="Thrissur">Thrissur</option>
                                        <option value="Palakkad">Palakkad</option>
                                        <option value="Malappuram">Malappuram</option>
                                        <option value="Kozhikode">Kozhikode</option>
                                        <option value="Wayanad">Wayanad</option>
                                        <option value="Kannur">Kannur</option>
                                        <option value="Kasaragod ">Kasaragod </option>
                                    </select>
                                </li>
                                <div />
                            </ul>
                        </div>
                    </div>

                    {/*.............................................Right Side........................................*/}

                    <div className='grid grid-cols-4 gap-6'>
                        {filterProducts.map((item) => (
                            <ProductList key={item._id} name={item.name} image={item.image}
                                id={item._id} location={item.location} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default ListingComponent