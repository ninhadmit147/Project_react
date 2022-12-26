import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../../../service/category'
import { useGetProductQuery, useGetProductsQuery } from '../../../service/product'
import { useGetSizeQuery } from '../../../service/size'

type Props = {}

const DetailProduct = (props: Props) => {
  const { id } = useParams()
  const { data: produts = [] } = useGetProductsQuery()
  const { data: product, isLoading, isError } = useGetProductQuery(id as any)
  const sizeId: any = product?.size
  const cateId: any = product?.category
  const { data: size } = useGetSizeQuery(sizeId)
  const { data: category } = useGetCategoryQuery(cateId)
  const price: any = product?.price
  const sale: any = product?.sale
  const percent: any = 100 - (sale * 100 / price)
  const saleoff = percent.toFixed()

  return (
    <div className="container mx-auto my-10">
      <div className="text-xl flex font-bold">
        <p className="hover:underline">Home</p> / <p className="hover:underline">{product?.name}</p>
      </div>
      <hr />

      <div className="grid grid-cols-4 my-10 px-10 gap-10">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1 mx-5">
              <img className="w-96 h-96 float-left m-5" src={product?.image} alt="" />
            </div>
            <div className="col-span-2 my-4">
              <div>
                <h1 className="text-2xl mb-5">{product?.name}</h1>
                <div className="bg-gray-100 flex gap-1">
                  <p className='line-through text-gray-500 text-xl my-2 mx-4'>{product?.price}</p>
                  <p className='text-3xl my-1'>{product?.sale} $</p>
                  <p className='font-normal text-sm bg-red-500 rounded-lg text-white p-1 h-7 my-2 ml-10'>{saleoff}% off</p>
                </div>
                <p className='font-semibold my-3'>Category: <p className='font-normal'>{category?.name}</p></p>
                <p className='font-semibold my-3'>Amount: <p className='font-normal'>{product?.amount}</p></p>
                <p className='font-semibold my-3'>Size:</p>
                <div className="">
                  <span className="border-1 border px-3 m-2 rounded-md">{size?.name}</span>
                </div>
                <div>
                  <button className="w-1/4 py-3 mx-auto text-center text-white bg-black rounded-full hover:bg-gray-700 my-7">Add
                    to
                    Bag</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3'>
            <p className='font-semibold text-center'>Description</p>
            {product?.description}
          </div>
        </div>

        <div className='col-span-1'>
          <h1 className='text-2xl mb-5'>Related products</h1>
          <div>
            {produts.map((item: any) => (
              <Link to={`product/${item.id}/detail`}>
                <div className="bg-gray-100 transition p-5 group ease-out duration-500 hover:shadow-md hover:border-black border-2 border-soild rounded-md my-1">
                  <img src={item.image} alt="" className="w-4/6 mx-auto mt-8 min-h-[200px]  ease-in duration-300 transform  hover:-translate-y-8" />
                  <h1 className="text-2xl font-semibold text-center">{item.name}</h1>
                  <p className="group-hover:text-red-900 text-1xl text-center underline">{item.sale} $</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default DetailProduct