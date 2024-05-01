import React from "react";
import './checkout.css';


export default function Checkout({Products}) {

  return (
    <>
{Products.map((Product) => (

    <div className="Section_top" key={Product.id}> 

    <div className="Img_container">
    <img src={Product.images}></img>
    </div>
    
    <div className="productDetails_container">
      <h2>{Product.brand}</h2>
      <h4>{Product.title}</h4>
      <p>{Product.starrating}</p>
      <h5>{Product.category}</h5>
    </div>

    <div className="price_details">
      <div className="dropdown_div">
        <select className="form-control" onChange="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <h3>$ {Product.price}</h3>
      </div>
    </div>

  </div>
  ))}
  </>
)}








