import { useMemo } from "react"

const ProductList = ({ _id, event_name, image, location, category, price, starting_price, onDelete }) => {

    //optimise image
    const optimizedImage = useMemo(() => {
        if (!image?.[0]) return '/fallback-image.jpg'
        return image[0].replace(
            '/upload/',
            '/upload/w_400,h_300,c_fill,f_auto,q_auto/'
        )
    }, [image])

    return (
        <>

            <section className='text-black cursor-pointer'>

                <div className='rounded-3xl overflow-hidden hover:scale-105 transition-transform'>
                    <div className='h-45'>
                        <img
                            className='w-full h-full object-cover'
                            src={optimizedImage}
                            loading='lazy'
                            decoding='async'
                        />
                    </div>

                    <div className='w-full h-fit pb-5 px-5 bg-white/20 text-white'>
                        <p className='pt-3 pb-2 text-2xl font-semibold'>{event_name}</p>
                        <p className='font-medium text-purple-300 pb-3'>{category}</p>
                        <p className='text-gray-400 font-medium'>{location}</p>
                        <p className='text-gray-400 font-medium'>${price}</p>
                        <p className='text-gray-400 font-medium'>Starts $ {starting_price}</p>
                        <button onClick={() => onDelete(_id)} className='bg-linear-to-r from-pink-500
                             to-pink-700 text-white mt-3 py-3 w-full rounded-2xl'>
                            Delete
                        </button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default ProductList