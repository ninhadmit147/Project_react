import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="grid grid-cols-5 gap-2 mt-10 ">
            <div style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2Fce42bf92ab63c82e7e71dcf9362ea3bf.jfif?alt=media&token=fab2dfc7-e592-41c9-9be4-dd1ded82617e)`, backgroundRepeat: 'no-repeat' }} className="d1 col-span-3 bg-red-300 min-h-full bg-cover h-60">

            </div>
            <div style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2Fce42bf92ab63c82e7e71dcf9362ea3bf.jfif?alt=media&token=fab2dfc7-e592-41c9-9be4-dd1ded82617e)`, backgroundRepeat: 'no-repeat' }} className="d2 col-span-2 bg-yellow-300 bg-cover">
                <h1 className="text-right mr-4 text-4xl mt-36">
                    Sale
                </h1>
                <p className="underline text-right mr-4">Christmas promotion, discount on all products</p>
            </div>
            <div style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2F77a9c73e395d05da4e51c4473e1ae56f.jfif?alt=media&token=5b530e29-70d0-46e9-a3d6-f5dda2ab06ff)`, backgroundRepeat: 'no-repeat' }} className="d3 col-span-5 bg-blue-300 min-h-full h-80 bg-cover">
                <h1 className="text-center mr-4 text-white text-4xl mt-24 underline decoration-3">
                    Hot
                </h1>
            </div>
        </div>
    )
}

export default Banner