import { useEffect, useState } from "react";
import { icon } from "../../../assets/assets";

export default function HeroSlide({
    children: slides,
    autoSlide = false,
    autoSlideTime = 3000,
}) {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {

        if (!autoSlide) return
        const slideTime = setInterval(next, autoSlideTime)
        return () => clearInterval(slideTime)

    }, [])

    return (
        <div className=" overflow-hidden relative">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-2">

                <button onClick={() => prev()} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white cursor-pointer">
                    <img className="w-8" src={icon.left_arow} alt="" />
                </button>
                <button onClick={() => next()} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white cursor-pointer">
                    <img className="w-8" src={icon.right_arow} alt="" />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">

                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={
                            `transition-all w-2 h-2 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`
                        } />
                    ))}
                </div>
            </div>

        </div>
    )
}