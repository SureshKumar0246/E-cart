import React from 'react'
import { Navbar } from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import { useState } from 'react'
import SearchProduct from './components/SearchProduct'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import { items } from './components/Data'
// import NavbarFilter from './components/NavbarFilter'
const App = () => {
  const [data, setData] = useState([...items])
  //  const location = useLocation()
  //   const hideNavbar = location.pathname === '/ProductDetail'
  const [cart, setCart] = useState([])
  return (
    <>
   
    <BrowserRouter>
    
    <Navbar setData={setData} cart={cart}/>
    {/* {!hideNavbar && <NavbarFilter />} */}
    <Routes>
      <Route>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart}/>} />
        <Route path="/search/:term" element={<SearchProduct cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App