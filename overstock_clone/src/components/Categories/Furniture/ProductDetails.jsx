import React, { useState } from 'react'
import livingfurniture from './livingfurniture.json'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem, delItem } from './../../Redux/action';

const ProductDetails = () => {
    const[cartBtn,setCartBtn]=useState("Add To Cart")
    const dispatch=useDispatch()
    // const {id}=useParams()
    const prodid = useParams()
    const prodDetails = livingfurniture.filter((item)=>item.id == prodid.id)
    const product = prodDetails[0]
    const handleCart = (product) => {
      if(cartBtn==="Add To Cart"){
        console.log(addItem);
        dispatch(addItem(product))
        console.log(addItem);
        setCartBtn("Remove From Cart")
       
      }
      else{
        dispatch(delItem(product))
        setCartBtn("Add To Cart")
       
      }
    }
    
  return (
    <>
  
      <div className="container mt-5 py-5">
          <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 py-5  ">
                  <img src={product.image} alt={product.title}  />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 py-5 d-flex flex-column justify-content-center">
                  <h2 className=" fw-bold">{product.title}</h2>
                  <hr />
                  <p className="lead">{product.desc}</p>
                  <h4 className="text-center">₹ {product.price}</h4>
                  <p className="text-center">{product.views}⭐</p>
                  <button onClick={()=>handleCart(product)} className="btn btn-primary my-5">{cartBtn}</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ProductDetails

