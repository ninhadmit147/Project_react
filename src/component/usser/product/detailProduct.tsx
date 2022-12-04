import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../service/product'

type Props = {}

const DetailProduct = (props: Props) => {
  const { id } = useParams()
  const { data: product, isLoading, isError } = useGetProductQuery(id as any)

  return (
    <div className="container mx-auto my-10">
      <div className="text-xl font-bold">
        <a className="hover:underline" href="index.html">Home</a>
        &gt;&gt;
        <a className="hover:underline">{product?.name}</a>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="col-span-1 mx-10">
          <img className="w-96 h-96 float-left m-5" src={product?.image} alt="" />
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl">{product?.name}</h1>
          <br />
          <p>Cate name</p>
          <br />
          <p>Select size:</p>
          <div className="mb-10">
            <span className="border-1 border px-3 m-2 rounded-md">52</span>
            <span className="border-1 border px-3 m-2 rounded-md">51</span>
            <span className="border-1 border px-3 m-2 rounded-md">50</span>
            <span className="border-1 border px-3 m-2 rounded-md">49</span>
            <span className="border-1 border px-3 m-2 rounded-md">48</span>
            <span className="border-1 border px-3 m-2 rounded-md">47</span>
            <span className="border-1 border px-3 m-2 rounded-md">46</span>
            <span className="border-1 border px-3 m-2 rounded-md">45</span>
            <span className="border-1 border px-3 m-2 rounded-md">44</span>
            <span className="border-1 border px-3 m-2 rounded-md">43</span>
            <span className="border-1 border px-3 m-2 rounded-md">42</span>
            <span className="border-1 border px-3 m-2 rounded-md">41</span>
            <span className="border-1 border px-3 m-2 rounded-md">40</span>
            <span className="border-1 border px-3 m-2 rounded-md">39</span>
            <span className="border-1 border px-3 m-2 rounded-md">38</span>
            <span className="border-1 border px-3 m-2 rounded-md">37</span>
            <span className="border-1 border px-3 m-2 rounded-md">36</span>
            <span className="border-1 border px-3 m-2 rounded-md">35</span>
          </div>
          <div>
            <button className="w-1/4 py-3 mx-auto text-center text-white bg-black rounded-full hover:bg-gray-700 my-5">Add
              to
              Bag</button>
            <br />
            <button className="w-1/4   py-3 mx-auto text-center text-white bg-black rounded-full hover:bg-gray-700">Favourite
            </button>
          </div>
          <div className="my-10">
            Product Description
          </div>
          <form className="my-12 flex justify-between" method="post">
            <input className="w-4/5 border-2 px-5 mr-5" type="text" placeholder="Review" />
            <button className="bg-black text-white rounded-md px-10 py-2">Send</button>
          </form>
          <div className="my-5">
            <p>All comment</p>
            <hr />
            <div className="bg-gray-200 rounded-md my-5">
              <div className="flex m-5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 border-2 border-black rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="my-2 mx-5 text-xl">Name</p>
              </div>
              <div className="ml-10 pb-2">
                Review 1
              </div>
            </div>
            <div className="bg-gray-200 rounded-md my-5">
              <div className="flex m-5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 border-2 border-black rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="my-2 mx-5 text-xl">Name</p>
              </div>
              <div className="ml-10 pb-2">
                Review 2
              </div>
            </div>
            <div className="bg-gray-200 rounded-md my-5">
              <div className="flex m-5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 border-2 border-black rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="my-2 mx-5 text-xl">Name</p>
              </div>
              <div className="ml-10 pb-2">
                Review 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct