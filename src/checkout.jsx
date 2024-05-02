import React, {useState} from "react";
import './checkout.css';
console.log(1 + 2)

export default function Checkout({Products}) {

  const [quantity, setQuantity] = useState(1);

const handleQuantityChange = (e) =>{
  setQuantity(+(e.target.value))
}

const calculateTotal = () => {
  return quantity * Products.price;
}


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
      <h2>$ {Product.price}</h2>
    </div>

    <div className="price_details">
      <div className="dropdown_div">
        <select className="form-control" onChange={handleQuantityChange}>
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

        <h3>$ {calculateTotal()}</h3>
      </div>
    </div>

  </div>
  ))}
  </>
)}








