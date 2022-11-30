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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<AllProducts />} />
        <Route path='product/:id/detail' element={<DetailProduct />} />
        <Route path='products' element={<h1>List</h1>} />
        <Route path='signin' element={<h1>Signin</h1>} />
        <Route path='signup' element={<h1>Signup</h1>} />
      </Route>

      <Route path='/admin' element={<Admin />}>
        <Route path='products' element={<ProductList />} />
        <Route path='products/add' element={<ProductAdd />} />
        <Route path='products/:id/edit' element={<ProductEdit />} />
      </Route>
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App
