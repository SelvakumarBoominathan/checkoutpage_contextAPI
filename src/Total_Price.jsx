import React, { useContext } from 'react';
import './Style.css';
import TotalContext from './totalProvider';


const Total_Price = () => {
  const { total } = useContext(TotalContext);

  return (

    <>
      <div className="grand_container_totalcost">
              <div className="Total_div">
                <h2>subtotal : </h2>
                <h2>$ {total}</h2>
              </div>

              <div className="Total_div">
              <h2>Total : </h2>
              <h2 style={{color : "red", fontWeight: 800}} > $ {total+20}</h2>
              </div>
      </div>
    </>

  )
}

export default Total_Price;





