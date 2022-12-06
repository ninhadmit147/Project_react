import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IProduct } from '../../../interface/product'
import { useGetProductsQuery, useSearchProdQuery } from '../../../service/product'
import Slider from '../slider'


const SearchProd = () => {
    const { search } = useParams()
    console.log(search);

    const { data: products = [], isLoading, isError } = useSearchProdQuery(search as any)
    console.log(products);

    if (isLoading) {
        return (
            <div>
                Loading ...
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                Error
            </div>
        )
    }
    if (products) {

    }
    return (
        <div className="min-h-screen">
            <div className="article min-h-screen my-10 xl:container lg:container md:w-full sm:w-full mx-auto ">
                <h1 className="text-center text-3xl font-bold">Search by "{search}"</h1>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 mt-12">
                    {products.map((item: any) => (
                        <Link to={`product/${item.id}/detail`}>
                            <div className="bg-gray-100 transition group ease-out duration-500 hover:shadow-md hover:border-black border-2 border-soild rounded-md">
                                <img src={item.image} alt="" className="w-5/6 mx-auto mt-8 min-h-[300px]  ease-in duration-300 transform  hover:-translate-y-8" />
                                <h1 className="text-2xl font-semibold text-center">{item.name}</h1>
                                <p className="group-hover:text-red-900 text-1xl text-center underline">{item.sale} $</p>
                                <div className="mx-10 justify-between flex my-5">
                                    <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
                                        Infatuated
                                    </button>
                                    <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
                                        Add to card
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default SearchProd