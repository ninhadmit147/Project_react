import { useState } from 'react'
import HomePage from './page/user'
import { Routes, Route } from 'react-router-dom'
import Admin from './page/admin'
import AllProducts from './component/usser/product/allProducts'
import DetailProduct from './component/usser/product/detailProduct'
import ProductList from './component/admin/product/product_list'
import ProductAdd from './component/admin/product/product_add'
import Signin from './component/auth/signin'
import Signup from './component/auth/signup'
import ProductEdit from './component/admin/product/product_edit'
import Auth from './page/auth'
import PrivateAdmin from './page/privateAdmin'
import SearchProd from './component/usser/product/search_product'
import ListProducts from './component/usser/product/ListProducts'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<AllProducts />} />
        <Route path='product/:id/detail' element={<DetailProduct />} />
        <Route path='products/:search/search' element={<SearchProd />} />
        <Route path='products' element={<ListProducts />} />
      </Route>

      <Route path='/admin' element={<PrivateAdmin><Admin /></PrivateAdmin>}>
        <Route path='products' element={<ProductList />} />
        <Route path='products/add' element={<ProductAdd />} />
        <Route path='products/:id/edit' element={<ProductEdit />} />
      </Route>
      <Route path='/auth' element={<Auth />}>
        <Route index element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
