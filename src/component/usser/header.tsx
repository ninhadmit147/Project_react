import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header w-full justify-between flex ">
      <div className="nav p-2 flex">
        <a href="index.html">
          <img className="w-32" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088540/logo_oiwgo2.png" alt="" />
        </a>
        <nav className='xl:'>
          <ul className="flex justify-center mt-8">
            <li className="mx-5 hover:underline decoration-3 font-bold "><a href="index.html">Home</a></li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><a href="cate.html">All products</a>
            </li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><a href="about.html">About us</a></li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><a href="feedback.html">Feedback</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <form className="m-3 flex border-soild border-2 w-[300px] border-black rounded-full" method="post">
          <input type="text" className="border-soild border-0 w-full h-full px-2 border-black rounded-full" />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2 hover:bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
        <button className="text-black font-bold my-3 mx-1 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full  w-12 h-12 ">
          <a href="signin.html">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </a></button>
        <button className="text-black font-bold my-3 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full w-12 h-12 ">
          <a href="login.html">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Header