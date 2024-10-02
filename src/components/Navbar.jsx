import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";


export const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element)
    console.log(element)
  }
  const filterByPrice = (price) => {
    const filtPrice = items.filter((product) => product.price >= price)
    setData(filtPrice)
  }
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <header className='sticky-top'>
      <div className="navbar">
        <NavLink to={"/"} className="brand" onClick={[...items]}>E-cart</NavLink>
        <form className="searchbar" onSubmit={handleSubmit}><input type="text" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Search Product' /></form>
        <NavLink to={"/cart"} className="cart"><button type="button" className="btn btn-primary position-relative">
        <FaCartShopping style={{fontSize:"25px"}}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></NavLink>
      </div>
{location.pathname == '/' && <div className="navbarWrappe">
        <div className="items">Filter by {"=>"}</div>
        <div className="items" onClick={() => setData(items)}>No Filter</div>
        <div className="items" onClick={() => filterByCategory("mobiles")}>Mobile</div>
        <div className="items" onClick={() => filterByCategory("laptops")}>Laptop</div>
        <div className="items" onClick={() => filterByCategory("tablets")}>Tablets</div>
        <div className="items" onClick={() => filterByPrice("29999")}>{">=29999"}</div>
        <div className="items" onClick={() => filterByPrice("49999")}>{">=49999"}</div>
        <div className="items" onClick={() => filterByPrice("69999")}>{">=69999"}</div>
        <div className="items" onClick={() => filterByPrice("89999")}>{">=89999"}</div>

      </div>}
      
    </header>
  )
}
