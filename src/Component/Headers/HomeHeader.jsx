import React from 'react'
import "./Headerstyling.css"

const HomeHeader = () => {
  return (
    <>
        <div className="header-wrapper">
            <h2>Men Clothing Collection</h2>
            <div className='paragrapg-layout'>
            <p>Find everything you need to look and feel your best, and shop the latest Men’s fashion and lifestyle products</p>
            </div>
            <div className='button-layout'>
                <button className='headerbtn'>Jacket</button>
                <button className='headerbtn'>Pants</button>
                <button id="tshirt-btn">T-shirt</button>
                <button className='headerbtn'>Hoodie</button>
                <button id="short-btn" className='headerbtn'>Shorts</button>
                <button id="suit-btn" className='headerbtn'>Suits</button>
            </div>
            
        </div>
    </>
  )
}

export default HomeHeader