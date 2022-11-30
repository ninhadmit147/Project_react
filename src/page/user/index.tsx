import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
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