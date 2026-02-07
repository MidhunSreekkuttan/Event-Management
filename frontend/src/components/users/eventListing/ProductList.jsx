import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ id, name, image, location, category }) => {

    return (
        <Link className='text-black cursor-pointer' to={`/product/${id}`}>

            <div className='rounded-3xl overflow-hidden hover:scale-110 transition ease-in-out'>
                <div className='max-w-full h-40'>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
                <div className='w-full h-25 text-center bg-white'>
                    <p className='pt-3 pb-1 text-sm'>{name}</p>
                    <p className='text-sm font-medium'>{category}</p>
                    <p className='text-sm font-medium'>{location}</p>
                </div>
            </div>

        </Link>
    )
}

export default ProductList