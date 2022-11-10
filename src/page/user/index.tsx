import React from 'react'
import Footer from '../../component/usser/footer'
import Header from '../../component/usser/header'
import Newproducts from '../../component/usser/product/newproducts'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='min-h-100vh'>
        <Header/>
        <Newproducts/>
        <Footer/>
    </div>
  )
}

export default HomePage