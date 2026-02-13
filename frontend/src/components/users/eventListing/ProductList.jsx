import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackendContex } from '../../../context/ConnectBackendContex'
import { toast } from 'react-toastify'

const ProductList = ({ id, name, image, location, category }) => {

    const navigate = useNavigate()

    const { userData } = useContext(BackendContex)

    const handleEnquiry = () => {

        if (userData.isAccountVerified) {
            navigate(`/product/${id}`)
        } else {
            toast.error('Plz Login')
        }

    }

    return (
        <>
            <section className='text-black cursor-pointer'>

                <div className='rounded-3xl overflow-hidden hover:scale-105 transition-transform'>
                    <div className='max-w-full h-40'>
                        <img
                            className='w-full h-full'
                            src={image[0]}
                            alt={name}
                            loading='lazy'
                            decoding='async'
                        />
                    </div>

                    <div className='w-full h-27 text-center bg-white'>
                        <p className='pt-3 pb-1 text-sm'>{name}</p>
                        <p className='text-sm font-medium'>{category}</p>
                        <p className='text-sm font-medium'>{location}</p>
                        <button onClick={handleEnquiry} className='bg-linear-to-r from-pink-500 to-pink-700 text-white mt-3 px-4 py-1 rounded-2xl'>
                            Enquiry
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default React.memo(ProductList)