import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
import AllProducts from '../../component/usser/product/allProducts'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='min-h-100vh'>
        <Header/>
        <AllProducts/>
        <Footer/>
    </div>
  )
}

export default HomePage