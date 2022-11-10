import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer bg-black min-h-full h-64 text-white">
    <div className="grid grid-cols-3 mx-20">
      <div className="h-48 mt-8 mx-5 text-left">
        <h1 className="font-bold text-2xl">Address</h1>
        <hr />
        <div className="my-2">
          Address: <a className="hover:underline" href="#">Viet Nam</a>
        </div>
        <div className="my-2">
          Email: <a className="hover:underline" href="#">ninhxz147@gmail.com</a>
        </div>
        <div className="my-2">
          Phone: <a className="hover:underline" href="#">0363480678</a>
        </div>
      </div>
      <div className="h-48 mt-8 mx-5 text-left">
        <h1 className="font-bold text-2xl">Link</h1>
        <hr />
        <div className="my-2 flex">
          <img className="w-11 h-10 mr-2" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088609/fb__u8rwjt.png" alt="" />
          <img className="w-10 h-10 mx-2" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088637/zalo__rbqljr.png" alt="" />
          <img className="w-10 h-10 mx-2" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088684/instar_k5ddik.png" alt="" />
        </div>
      </div>
      <div className="h-48 mt-8 mx-5 text-left">
        <h1 className="font-bold text-2xl">Link</h1>
        <hr />
        <div className="my-2">
          <a className="hover:underline" href="#">Introduce</a>
        </div>
        <div className="my-2">
          <a className="hover:underline " href="test.html">Test</a>
        </div>
      </div>
    </div>
    <hr className="mx-20" />
    <p className="text-center">Copyright © 2022 All Rights Reserved. Developed by Ninh Plè</p>
  </div>
  )
}

export default Footer