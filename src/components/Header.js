import React from "react";
import "../App.css";
import logo from "../assets/images/logo.png";

const Header = (props) => {
  // console.log(props)
  return (
    <header>
      <div className="navBar">
        <img src={logo} alt="" />
        <div className="navGation">
          <a href="#">MEN</a>
          <a href="#">WOMAN</a>
          <a href="#">KIDS</a>
          <a href="#">HOME & LIVING</a>
          <a href="#">BEAYUTY</a>
          <a href="#">STUDIO <sup>NEW</sup></a>
        </div>

        <div className="items">
          <div className="seachBar">
            <div className="searchlogo">
              <span className="material-symbols-outlined search">Search</span>
            </div>
            <input
              id="search"
              className="inputTag"
              type="text"
              placeholder="Search for product"
              onChange={props.onChanges}
            />
          </div>
          <div className="person">
            <span className="material-symbols-outlined"> person </span>
            <p>profile</p>
          </div>
          <div className="favorite">
            <span className="material-symbols-outlined"> favorite </span>
            <p>WishList</p>
          </div>
          <div className="bag">
            <span className="material-symbols-outlined"> shopping_bag </span>
            <p>Bag</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
