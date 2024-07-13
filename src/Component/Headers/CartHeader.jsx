import React from 'react';
import "./Headerstyling.css"

const CartHeader = () => {
  return (
    <>
         <div className="header-wrapper">
            <h2>Your Cart</h2>
            <div className='paragrapg-layout'>
            <p>Review your selected items below before proceeding to checkout. Make sure everything looks good</p>
            </div>
        </div>
    </>
  )
}

export default CartHeader