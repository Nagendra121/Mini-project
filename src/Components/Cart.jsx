import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const orderthali = useSelector((state) => state.counter.orderthali);
  const click = () => {
    if (orderthali.length < 2) {
     alert('Items must be more then 2 for place your order')
    } else {
      navigate("/CheckOut");
    }
  };
  console.log(orderthali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  const navigate = useNavigate();
  var sum = 0;
  for (const item of orderthali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container  mx-3">
      <div className="row">
        {orderthali.map((ele, i) => {
          return <div key={i}>
              <div>
              <img className="img-fluid" src={ele.imageurl}/>
              </div>
          </div>
        })
}
        
      </div>
      <br/>
      <button  onClick={click} id='nam' style={{width:'150px'}} >
          Order Now
        </button>
    </div>
  );
};

export default Cart;
