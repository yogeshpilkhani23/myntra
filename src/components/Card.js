import React from "react";
const Card =(props)=>{
  // console.log(props)
return( 
<div className="cardItem" onClick={props.onClick}>
  <img src={props.image}alt="" />
  <p>4.5 |⭐2.1k</p>
  <h5>{props.brandNmae}</h5>
  <p>{props.name}</p>
  <p>
    Rs.{props.price} <strike>Rs. {props.oldprice}</strike>({props.discount}% OFF)
  </p>
</div>

)
}
export default Card