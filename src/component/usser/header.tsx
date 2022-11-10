import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="header w-full justify-between flex ">
    <div className="nav p-2 flex">
      <a href="index.html">
        <img className="w-32" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088540/logo_oiwgo2.png" alt="" />
      </a>
      <nav>
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
      <form className="m-3 flex border-soild border-2 h-12 border-black rounded-full" method="post">
        <input type="text" className="border-soild border-0 border-black rounded-full" />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      <button className="text-black font-bold my-3 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full w-24 h-12 ">
        <a href="signin.html">Sign in</a></button>
      <button className="text-black font-bold my-3 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full w-24 h-12 ">
        <a href="login.html">Logn in</a></button>
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