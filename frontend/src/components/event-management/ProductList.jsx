import { useMemo } from "react"

const ProductList = ({ _id, event_name, image, location, category, price, starting_price, status, onEdit, onDelete }) => {

    const optimizedImage = useMemo(() => {
        if (!image?.[0]) return '/fallback-image.jpg'
        return image[0].replace(
            '/upload/',
            '/upload/w_400,h_300,c_fill,f_auto,q_auto/'
        )
    }, [image])

    const statusStyle = {
        upcoming: "bg-purple-500/20 text-purple-300 border-purple-400/30",
        ongoing: "bg-green-500/20 text-green-300 border-green-400/30",
        completed: "bg-gray-500/20 text-gray-300 border-gray-400/30",
    }

    return (

        <section className='cursor-pointer'>

            <div className='group rounded-3xl overflow-hidden border border-white/10 
            bg-linear-to-br from-slate-900 via-slate-950 to-black 
            shadow-lg hover:shadow-2xl hover:shadow-purple-900/30 
            transition-all duration-300 hover:-translate-y-1'>

                {/* Image */}
                <div className='relative h-48 overflow-hidden'>

                    <img
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        src={optimizedImage}
                        loading='lazy'
                        decoding='async'
                    />

                    {/* Status Badge */}
                    <span className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full border font-semibold backdrop-blur-sm
                        ${statusStyle[status] || statusStyle.upcoming}`}>
                        {status || "upcoming"}
                    </span>

                </div>

                {/* Content */}
                <div className='p-5 text-white flex flex-col gap-2'>

                    <p className='text-xl font-semibold tracking-tight'>
                        {event_name}
                    </p>

                    <p className='text-sm font-medium text-purple-400'>
                        {category}
                    </p>

                    <p className='text-sm text-gray-400'>
                        📍 {location}
                    </p>

                    <div className='flex justify-between text-sm mt-2 text-gray-300'>
                        <span className='font-medium'>
                            Price: ${price}
                        </span>
                        <span className='text-purple-300 font-medium'>
                            From ${starting_price}
                        </span>
                    </div>

                    {/* Edit + Delete Buttons */}
                    <div className="flex gap-3 mt-4">

                        <button
                            onClick={() => onEdit(_id)}
                            className="flex-1 py-2.5 rounded-xl 
                                       bg-blue-600 hover:bg-blue-700
                                       text-white font-semibold text-sm
                                       transition-all duration-300"
                        >
                            Edit Event
                        </button>

                        <button
                            onClick={() => onDelete(_id)}
                            className="flex-1 py-2.5 rounded-xl 
                                       bg-pink-600 hover:bg-pink-700
                                       text-white font-semibold text-sm
                                       transition-all duration-300"
                        >
                            Delete Event
                        </button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductList