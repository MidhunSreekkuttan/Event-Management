import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from '../../context/EventContext'
import ProductList from './ProductList'

const ListingEvents = () => {

    const { products } = useContext(EventContext)

    const [eventList, setEventList] = useState([])

    useEffect(() => {
        setEventList(products.slice(0,12))
    }, [])

    return (
        <div className='grid grid-cols-4 gap-5 gap-y-6'>
            {/*..................................................Rendering products...........................................*/}

            {
                eventList.map((item, index) => (
                    <ProductList key={index} id={item._id} image={item.image} name={item.name}
                        category={item.category} location={item.location} />
                ))
            }
        </div >
    )
}

export default ListingEvents