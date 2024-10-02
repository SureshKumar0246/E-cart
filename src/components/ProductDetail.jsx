import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({cart, setCart}) => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [relatedProduct, setRelatedProduct] = useState([])
    useEffect(() => {
        const filterProduct = items.filter((prod) => prod.id == id)
        //  console.log(filterProduct)
        const relatedP = items.filter((pro) => pro.category === product.category)
        // console.log(relatedP)
        setRelatedProduct(relatedP)
        setProduct(filterProduct[0])
    }, [id, product.category])

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
        <div className='container con'>
            <div className="img">
                <img src={product.imgSrc} alt="" />
            </div>
            <div className='text-center'>
                <h1 className="card-title">{product.title}</h1>
                <p className="card-text">{product.description}</p>
                <button className='btn btn-primary mx-3'>{product.price} $</button>
                <button className='btn btn-warning' onClick={()=>addToCart(products.id, products.price, products.title, products.description, products.imgSrc)}>Add To Cart</button>
            </div>
        </div>
        <h1 className='text-center'>Related Products</h1>
        <Product cart={cart} setCart={setCart} items={relatedProduct}/>
        </>
    )
}

export default ProductDetail