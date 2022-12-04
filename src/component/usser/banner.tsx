import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="grid grid-cols-5 gap-2 mt-10 ">
            <div className="d1 col-span-3 bg-red-300 min-h-full h-56">
                <h1 className="text-center text-white text-4xl mt-32">
                    Sale
                </h1>
                <p className="underline text-white text-center">description</p>
            </div>
            <div className="d2 col-span-2 bg-yellow-300">
                <h1 className="text-right mr-4 text-white text-4xl mt-32">
                    Title
                </h1>
                <p className="underline text-white text-right mr-4">description</p>
            </div>
            <div className="d3 col-span-5 bg-blue-300 min-h-full h-40">
                <h1 className="text-center mr-4 text-white text-4xl mt-24 underline decoration-3">
                    Title
                </h1>
            </div>
        </div>
    )
}

export default Banner