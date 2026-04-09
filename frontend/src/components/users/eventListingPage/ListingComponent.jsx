import React from 'react';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { icon } from '../../../assets/assets'
import { Megaphone, Search } from 'lucide-react';
import ProductList from '../eventListing/ProductList'
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BackendContex } from '../../../context/ConnectBackendContex';
import Loader from '../../Loading';
import { EventContext } from '../../../context/EventContext';
import { Heart, Theater, Briefcase, Music, GraduationCap, Users, Medal, HeartPulse, Store, Laptop, } from "lucide-react";

const ListingComponent = () => {

    const { backendUrl } = useContext(BackendContex)
    const { getEventList } = useContext(EventContext)

    const [filter, setfilter] = useState('all')
    const [locationFilter, setLocationFilter] = useState('All Location')
    const [search, setSearch] = useState('')
    const [searchButton, setSearchButton] = useState('')

    const handleSearch = useCallback(() => {
        setSearchButton(search.trim().toLowerCase());
    }, [search])

    const listEevent = useCallback(async () => {

        const { data } = await axios.get(backendUrl + '/api/product/listProduct')
        return data.product

    }, [backendUrl])

    const { data, error, isLoading } = useQuery({
        queryKey: ['eventlist'],
        queryFn: listEevent
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeProducts = Array.isArray(data) ? data : [];

    const filterProducts = useMemo(() => {

        return safeProducts.filter((item) => {

            const categoryFilter = filter === 'all' || item.category?.toLowerCase() === filter.toLowerCase();

            const locationMatch = locationFilter === 'All Location' || item.location === locationFilter;

            const searchText = (item.event_name ?? '').toLowerCase();

            const searchMatch = searchButton === '' || searchText.includes(searchButton);

            return categoryFilter && locationMatch && searchMatch
        });
    }, [safeProducts, filter, locationFilter, searchButton]);

    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const hash = location.hash.replace("#", "").toLowerCase();

        const categoryMap = {
            personal: "Personal",
            cultural: "Cultural & Religious Events",
            corporate: "Corporate",
            entertainment: "Entertainment",
            educational: "Educational",
            Social: "Social & Community",
            Sports: "Sports",
            Exhibition: "Exhibition & Trade",
            Promotions: "Launch & Promotions",
            Health: "Health & Wellness",
            Technology: "Technology",
            all: "all",
        };

        if (categoryMap[hash]) {
            setfilter(categoryMap[hash]);
        }
    }, [location.hash]);

    useEffect(() => {
        getEventList()
    }, [getEventList])

    if (error) return <div>Error:{error.message}</div>
    if (isLoading) return <Loader />

    return (
        <>

            {/*..............................................Top Filter.......................................*/}

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
                            <option value="Trivandrum">Trivandrum</option>
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
                    <div className="flex gap-3 rounded-2xl font-semibold text-violet-950 bg-white py-3 px-5 flex-1">
                        <Search className="text-purple-400" />
                        <input
                            value={search}
                            onChange={(e) => {
                                const value = e.target.value
                                setSearch(value)

                                if (value.trim() === '') {
                                    setSearchButton('')
                                }
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="outline-none w-full"
                            type="text"
                            placeholder="Search by Keyword"
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleSearch}
                            className='rounded-2xl font-semibold text-white
                                       bg-gradient-to-r from-pink-500 to-pink-700
                                       py-3 px-12 transition active:scale-95'
                        >
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
                                    <button onClick={() => setfilter('Personal Events')} className={`flex gap-3 rounded-2xl
                                        -2xl font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                         ${filter === 'Personal Events' ? 'apple' : ''}`}>
                                        <Heart size={20} />
                                        Personal
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Cultural & Religious Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Cultural & Religious Events' ? 'apple' : ''}`}>
                                        <Theater size={20} />
                                        Cultural
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Corporate Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Corporate Events' ? 'apple' : ''}`}>
                                        <Briefcase size={20} />
                                        Corporate
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Entertainment Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Entertainment Events' ? 'apple' : ''}`}>
                                        <Music size={20} />
                                        Entertainment
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Educational Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Educational Events' ? 'apple' : ''}`}>
                                        <GraduationCap size={20} />
                                        Educational
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Social Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Social Events' ? 'apple' : ''}`}>
                                        <Users size={20} />
                                        Social & Community
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Sports Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Sports Events' ? 'apple' : ''}`}>
                                        <Medal size={20} />
                                        Sports
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Exhibition Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Exhibition Events' ? 'apple' : ''}`}>
                                        <Store size={20} />
                                        Exhibition
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Promotion Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Promotion Events' ? 'apple' : ''}`}>
                                        <Megaphone size={20} />
                                        Promotion
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Health Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Health Events' ? 'apple' : ''}`}>
                                        <HeartPulse size={20} />
                                        Health & Wellness
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setfilter('Technology Events')} className={`flex gap-3 rounded-2xl
                                         font-semibold text-violet-950 bg-white py-3 px-5 w-55
                                          ${filter === 'Technology Events' ? 'apple' : ''}`}>
                                        <Laptop size={20} />
                                        Technology
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
                                        <option value="Trivandrum">Trivandrum</option>
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

                    <div className='grid grid-cols-4 gap-6 w-[67rem]'>
                        {filterProducts.map((item, index) => (
                            <ProductList key={index} event_name={item.event_name} image={item.image}
                                id={item._id} />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default React.memo(ListingComponent)