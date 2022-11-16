import React from 'react'

type Props = {}

const AllProducts = (props: Props) => {
  return (
    <div className="article my-10 xl:container lg:container md:w-full sm:w-full mx-auto ">
      <h1 className="text-center text-3xl font-bold">New</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 mt-12">
        <a href="product.html" className="bg-gray-100 transition group ease-out duration-500 hover:shadow-md hover:border-black border-2 border-soild rounded-md">
          <img src="https://res.cloudinary.com/thisisninh/image/upload/v1668090581/product_wzvorr.png" alt="" className="w-5/6 mx-auto mt-8  ease-in duration-300 transform  hover:-translate-y-12" />
          <h1 className="text-2xl font-semibold text-center">Test</h1>
          <p className="group-hover:text-red-900 text-1xl text-center underline">240 $</p>
          <div className="product-color flex justify-center my-3">
            Color:
            <div className="bg-red-600 w-3 h-3 mx-2 mt-2 rounded-full" />
            <div className="bg-blue-600 w-3 h-3 mx-2 mt-2 rounded-full" />
            <div className="bg-yellow-600 w-3 h-3 mx-2 mt-2 rounded-full" />
          </div>
          <div className="mx-10 justify-between flex my-5">
            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
              Infatuated
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
              Add to card
            </button>
          </div>
        </a>
        <a href="product.html" className="bg-gray-100 transition group ease-out duration-500 hover:shadow-md hover:border-black border-2 border-soild rounded-md">
          <img src="https://res.cloudinary.com/thisisninh/image/upload/v1668090581/product_wzvorr.png" alt="" className="w-5/6 mx-auto mt-8  ease-in duration-300 transform  hover:-translate-y-12" />
          <h1 className="text-2xl font-semibold text-center">Test</h1>
          <p className="group-hover:text-red-900 text-1xl text-center underline">240 $</p>
          <div className="product-color flex justify-center my-3">
            Color:
            <div className="bg-red-600 w-3 h-3 mx-2 mt-2 rounded-full" />
            <div className="bg-blue-600 w-3 h-3 mx-2 mt-2 rounded-full" />
            <div className="bg-yellow-600 w-3 h-3 mx-2 mt-2 rounded-full" />
          </div>
          <div className="mx-10 justify-between flex my-5">
            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
              Infatuated
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
              Add to card
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default AllProducts