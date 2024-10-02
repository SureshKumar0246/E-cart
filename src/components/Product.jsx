import React from 'react'
// import { items } from './Data'
import { NavLink } from 'react-router-dom'
import { items } from './Data'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart, setCart}) => {
    const addToCart = (id, price, title, description, imgSrc)=> {
        const obj = {
            id, price, title, description, imgSrc
        }
        setCart([...cart, obj])
        console.log(cart)
        toast.success('Item Added on Cart', {
            position: "top-right",
            autoClose: 1440,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
            });
    }
    return (
        <>
        <ToastContainer
position="top-right"
autoClose={1440}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
// transition: Bounce,
/>
        <div className="container my-5">
            <div className="row">
                {
                    items.map((products) => {
                        return (

                            <>
                                <div key={products.id} className="col col-lg-4 col-md-6 my-3 text-center">
                                    <div className="card" style={{width: "18rem"}}>
                                        <NavLink to={`/product/${products.id}`}>
                                        <img src={products.imgSrc} className="card-img-top" alt="..."/></NavLink>
                                            <div className="card-body">
                                                <h5 className="card-title">{products.title}</h5>
                                                <p className="card-text">{products.description}</p>
                                                <button className='btn btn-primary mx-3'>{products.price} $</button>
                                                <button className='btn btn-warning' onClick={()=>addToCart(products.id, products.price, products.title, products.description, products.imgSrc)}>Add To Cart</button>
                                            </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Product