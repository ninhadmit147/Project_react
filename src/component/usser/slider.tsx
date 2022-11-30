import React, { useEffect, useRef, useState } from 'react'

type Props = {}
const featureImg = [
    "https://res.cloudinary.com/thisisninh/image/upload/v1668959501/785425_rjprpe.png",
    "https://res.cloudinary.com/thisisninh/image/upload/v1668959505/669006_2_zeopln.png",
    "https://res.cloudinary.com/thisisninh/image/upload/v1668959909/719514_oznhc0.png",
    "https://res.cloudinary.com/thisisninh/image/upload/v1668959912/942012_dojsze.png",
    "https://res.cloudinary.com/thisisninh/image/upload/v1668959933/789010_r9u1es.jpg"
]
let count = 0
const Slider = (props: Props) => {

    const [image, setImage] = useState(0)

    const slideRef = useRef<any>()
    useEffect(() => {
        slideRef.current.addEventListener('animationend', () => {
            slideRef.current.classList.remove('fade-anim')
        })
        startSlider()
    }, [])
    const startSlider = () => {
        setInterval(() => {
            handleNext()
        }, 8000)
    }
    const handlePre = () => {
        const imgLenght = featureImg.length
        count = (image + imgLenght - 1) % imgLenght
        setImage(count)
        slideRef.current.classList.add('fade-anim')
    }
    const handleNext = () => {
        count = (count + 1) % featureImg.length
        setImage(count)
        slideRef.current.classList.add('fade-anim')
    }
    return (
        <div className='container mx-auto select-none relative'>
            <div ref={slideRef} className="w-full">
                <img src={featureImg[image]} alt="" />
                <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 py-2 px-2">
                    <button onClick={() => handlePre()} className='rounded-full p-2 opacity-25 hover:opacity-100 ease-in duration-100 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={() => handleNext()} className='rounded-full p-2 opacity-25 hover:opacity-100 ease-in duration-100 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider