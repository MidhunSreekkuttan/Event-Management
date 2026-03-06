const ClientData = ({ id, image, name, place, event_name }) => {

    return (
        <>

            <section>

                <div className="grid grid-cols-5 justify-center items-center border-b-2 bg-white/10 rounded-2xl">

                    <div className=''>
                        <img
                            className='w-35 h-20 object-cover relative left-5'
                            src={image[0]}
                            loading='lazy'
                            decoding='async'
                        />
                    </div>

                    <div>
                        <p className='pt-3 pb-2 text-2xl font-semibold relative left-12'>{name}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 font-medium relative left-25'>{event_name}</p>

                    </div>
                    <div>
                        <p className='font-medium text-purple-300 pb-3 relative left-30'>{place}</p>
                    </div>
                    <div className="">
                        <button className="bg-pink-600 px-5 py-1 rounded-lg relative left-25">
                            View
                        </button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default ClientData