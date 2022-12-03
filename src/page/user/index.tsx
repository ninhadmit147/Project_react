import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
import { Outlet } from 'react-router-dom'
import HeaderUser from '../../component/usser/headerUser'

type Props = {}

const HomePage = (props: Props) => {
  const data = localStorage.getItem("user")
  const dataUser = JSON.parse(data as any)
  if (!dataUser) {
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
  else {
    return (
      <div className='snap-y snap-proximity'>
        <div className="snap-start">
          <HeaderUser />
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

}

export default HomePage