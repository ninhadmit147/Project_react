import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='snap-y snap-proximity'>
      <div className="snap-start">
        <Header />
      </div>
      <div className="snap-start">
        <Outlet />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage