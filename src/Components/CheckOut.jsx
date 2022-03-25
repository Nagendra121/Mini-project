import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const orderthali = useSelector((state) => state.counter.orderthali);
  
  console.log(orderthali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  var sum = 0;
  for (const item of orderthali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container  mx-3" id='num' >
      <h1 className="text-center text-danger my-4 food">Your Food</h1>
      <div className="row">
      <h1> Your Bucket List</h1>
        {orderthali.map((ele, i) => {
          return <div  key={i}>
            <h1 style={{color:'yellowgreen'}}> {ele.name}</h1>
            <h3>{ele.price}</h3>
            <h3>{ele.quantity}</h3>
            <h3>{ele.totalPrice}</h3>
            <button
                  onClick={() => Remove(i)}
                  className="btn btn-warning"
                >
                  Remove
                </button>
          </div>
})}
        <h3 className="text-center text-success my-5" className='name'>
          <span className="grand">Your Grand total price: </span>{" "}
          <span className="dollar">$</span>
          {sum}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
