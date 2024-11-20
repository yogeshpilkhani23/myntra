import React from "react";
import Home from "../pages/Home";
import { useLocation } from "react-router-dom";
const Product = (props) => {
    const location = useLocation()
    console.log(location.state)
  return (
    <div className="cardItem" >
      <img src={location.state.img} alt="" />
      <p>4.5 |⭐2.1k</p>
      <h5>{location.state.brand_name}</  h5>
      <p>{location.state.name}</p>
      <p>
        Rs.{location.state.price} <strike>Rs. {location.state.oldprice}</strike>({location.state.discount}%
        OFF)
      </p>
    </div>
  );
};
export default Product;
