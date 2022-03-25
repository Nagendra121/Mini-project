import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../redux/slice";
import { useSelector } from 'react-redux';  
import { bindActionCreators } from 'redux';
import Banner from './Banner'
import Cart from './Cart';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';

const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);

  const thaliItems=useSelector(state=>state.counter.thaliitems)
const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addTothali(item));
console.log(addTothali(item))
}

const increment=()=>{
  setQuantity(quantity+1)

}

const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  }
}

  return (
      <div>
        <Banner/>
        <Cart/>
        <h1 className="name" > Select Your Thali Item</h1>
        <div>
        {
          thaliItems.map((ele, i) => {
            return <div className="" key={i} style={{columnCount:"3"}}> 
            <img src={ele.imageurl} className="img-fluid"/>
            <h2 style={{color:'red'}}> {ele.name} </h2>
            <h6>{ele.description}</h6>
            <h3> {`Rs ${ele.price} /-`} </h3>
            <button className='btn btn-warning' onClick={()=>add(ele)}> Add to checkout</button>
            <p  onClick={decrement}><Button> -</Button></p>
            <p> <Button> {quantity}</Button></p>
            <p onClick={increment}> <Button>+</Button></p>
            </div>
          })
        }
      </div>
      </div>

  )
}

export default Product