import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EventContext } from '../../context/EventContext'

const Product = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const { products, addEnquiry } = useContext(EventContext)

    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState('')

    const fetchproductData = async () => {

        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                return null
            }
        })

    }

    useEffect(() => {

        fetchproductData()

    }, [productId, products])

    const handleEnquiry = () => {
        addEnquiry(productData._id)
        navigate('/eventList')
    }

    return productData ? (
        <div className="pt-32">

            <div className="flex gap-10 max-w-6xl mx-auto">

                {/* Thumbnails */}
                <div className="flex flex-col gap-3">
                    {productData.image.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt=""
                            onClick={() => setImage(item)}
                            className="w-20 h-20 object-cover cursor-pointer border hover:border-black"
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="w-[400px] h-[500px]">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/*Product Info*/}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>
                        {productData.name}
                    </h1>
                    <p className='font-medium text-[20px] relative top-8'>
                        Category: <span className='font-normal text-[15px]'>{productData.category}</span>
                    </p>
                    <p className='font-medium text-[20px] relative top-15'>
                        Location: <span className='font-normal text-[15px]'>{productData.location}</span>
                    </p>


                    <button onClick={handleEnquiry} className='relative top-52 left-50 rounded-2xl font-bold text-2xl bg-linear-to-r from-pink-500 to-pink-700 active:scale-110 px-4 py-3'>
                        Enquiry
                    </button>

                </div>

            </div>

            <div className='grid mt-7 gap-5'>
                <div className='relative left-78 w-29'>
                    <h1 className='px-3 py-3 border border-gray-600'>
                        Description :
                    </h1>
                </div>
                <div className='relative left-78'>
                    <p>
                        {productData.description}
                    </p>
                </div>
            </div>

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
