import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from './Redux/action';



const Cart = () => {
    const state=useSelector((state)=>state.addItems)
    console.log(state.length);
    const dispatch = useDispatch()
    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    // const cartItems=(cartItem)=>{
    //       <div className="px-4 brounded-3 my-5 bg-light border">
    //         <div className="container py-4">
    //           <button className="btn-close float-end">*</button>
    //           <div className="row justify-content-center">
    //             <div className="col-md-4">
    //                 <img src="" alt="" height="200px" width="200px"/>
    //             </div>
    //             <div className="col-md-4">
    //                 <h3>{cartItem.title}</h3>
    //                 <p className="lead fw-bold">${cartItem.price}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    // }

      const button=()=>{
        return(
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className="btn btn-primary mb-5 w-25 mx-auto">Proceed To Checkout</Link>
                </div>
            </div>
        )
      }
    
  return (
    <>
     <div className="container" style={{marginTop:"200px"}}>
     {state.length !==0 && state.map((el)=>(
        <div className="px-4 brounded-3 my-5 bg-light border" key={el.id}>
        <div className="container py-4">
          <button className="btn-close float-end" onClick={()=>handleClose(el)}></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
                <img src={el.image} alt={el.title} height="200px" width="200px"/>
            </div>
            <div className="col-md-4">
                <h3>{el.title}</h3>
                <p className="lead fw-bold">₹{el.price}</p>
            </div>
          </div>
        </div>
      </div>
     ))}
     <div>
     {state.length ===0 && <h2>Cart is empty!!!!<span><Link to="/"><button className="btn btn-primary mx-3">Shop Now</button></Link></span></h2>}
     </div>
     <div>
        {state.length !==0 && button()}
     </div>
     <div>
        {state.length !==0 && <div>
            <Link to="/"><button className="btn btn-primary">Continue Shopping</button></Link></div>}
     </div>
     
     </div>
    </>
  )
}

export default Cart