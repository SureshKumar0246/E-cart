import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = ({cart, setCart}) => {
  return (
  <>
  <div className="container my-5" style={{width:"54%"}}>
  {cart.length == 0 ? ( 
    <>
    <div className="container text-center my-6">
        <h1>Cart is Empty</h1>
        <NavLink to={'/'} className="btn btn-warning">Continue Shopping...</NavLink>
      </div> </>) :
      <>
  {cart.map((prod)=> {
    return (
      <>
      
      <div class="card mb-3" style={{width:"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={prod.imgSrc} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{prod.title}</h5>
        <p class="card-text">{prod.description}</p>
        <button className='btn btn-primary mx-3'>{prod.price} $</button>
        <button className='btn btn-warning'>Buy Now</button>
      </div>
    </div>
  </div>
  </div>
      </>
    )
  })} </>}

{!cart.length==0 && <div className="text-center my-6">

<button className='btn btn-primary mx-4'>CheckOut</button>
<button onClick={()=> setCart("")} className='btn btn-warning'>Clear Cart</button>
</div>}
  
</div></>
  )
}

export default Cart