import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
import AllProducts from '../../component/usser/product/allProducts'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomePage