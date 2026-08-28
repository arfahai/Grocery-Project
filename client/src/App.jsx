import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import AddProduct from './pages/AddProduct'
import SellerOrders from './pages/SellerOrders'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { isSeller } = useContext(AppContext)
  const location = useLocation()
  const isSellerPath = location.pathname.startsWith('/seller')

  return (
    <div className='px-4 sm:px-[5%] md:px-[7%] lg:px-[9%] min-h-screen bg-white'>
      <ToastContainer position='top-right' />
      {!isSellerPath && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:category' element={<ProductCategory />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/seller' element={isSeller ? <AddProduct /> : <Home />} />
        <Route path='/seller/orders' element={isSeller ? <SellerOrders /> : <Home />} />
      </Routes>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App