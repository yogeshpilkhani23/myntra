import "../App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Radiobutton from "../components/Radiobutton";
import Checkbox from "../components/Checkbox";
import { useNavigate} from "react-router-dom";


const Home = () => {

  const navigate = useNavigate()
  const CapitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const [products, setproduct] = useState([]);
  const [gender, setGender] = useState([]);
  const [brand, setBrand] = useState([]);
  const [radioButton, setRadioButton] = useState("");
  const [checkButton, setCheckButton] = useState([]);
  const [searchButton, setSearchButton] = useState("");

  // console.log(checkButton);
  // console.log([...new Set(brand)]);

  useEffect(() => {
    globalApiData();
  }, []);

  const filteredProduct = () => {
    if(checkButton !=0){
       return products.filter((product)=>{
  return checkButton.includes(product.brand_name) 
      })
    }

    if (searchButton != "") {
      return products.filter((product) => {
        // console.log(product.brand_name)
        return (
          product.brand_name
            .toLowerCase()
            .includes(searchButton.toLowerCase()) ||
          product.name.toLowerCase().includes(searchButton.toLowerCase())
        );
      });
    }
    if (radioButton !== "") {
      return products.filter((product) => {
        return product.gender.toLowerCase() == radioButton.toLowerCase();
      });
    }
    return products;
  };
  const globalApiData = async () => {
    fetch("https://mocki.io/v1/305b9ede-a357-475c-aeea-80cbdb95f3e6")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setproduct(res);

        setGender(
          res.map((product) => {
            return product.gender;
          })
        );
        setBrand(
          res.map((product) => {
            return product.brand_name;
          })
        );
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div className="container">
      <Header
        onChanges={(e) => {
          setSearchButton(e.target.value);
        }}
      />

      <div className="mainContainer">
        <div className="cards">
          <h2>Filters</h2>
          <h4>Gender</h4>
          <div className="genderCard">
            {[...new Set(gender)].map((gender) => {
              //  console.log(gender)
              return (
                <Radiobutton
                  key={gender}
                  gender={CapitalizeFirstLetter(gender)}
                  onChanges={(e) => {
                    setRadioButton(e.target.value);
                  }}
                />
              );
            })}
          </div>

          <hr />
          <div className="brandCard">
            <h4>Brands</h4>
            {[...new Set(brand)].map((brand) => {
              return (
                <Checkbox
                  key={brand}
                  brandName={brand}
                  onChanges={(e) => {
                    if (e.target.checked) {
                      // console.log([e.target.value,...checkButton])
                      setCheckButton([e.target.value, ...checkButton]);
                    } else {
                      const filteredBrand = checkButton.filter((brand) => {
                       return brand != e.target.value;
                      });
                       setCheckButton(filteredBrand);
                    }
                  }}
                />
              );
              // console.log(brand)
            })}
          </div>
          <hr />
          <div className="">
            <h4>Cateogry</h4>
            <input type="checkbox" id="shirts" name="Cateogry" />
            <label htmlFor="shirts">Shirts</label>
            <br />
            <input type="checkbox" id="Kurta pajama" name="Cateogry" />
            <label htmlFor="Kurta pajama">Kurta pajama</label>
            <br />
            <input type="checkbox" id="pents" name="Cateogry" />
            <label htmlFor="pents">pents</label>
          </div>
        </div>

        <div id="container" className="mianCarditem">
          {filteredProduct().map((product) => {
            // console.log(product)
            return (
              <Card
                key={product.id.toString()}
                image={product.img}
                brandNmae={product.brand_name}
                name={product.name}
                price={product.price}
                oldprice={product.oldprice}
                discount={product.discount}
                onClick={()=>{
                  navigate("/product",{state : product})
                  }}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button>Add to Card</button>
      </div>
    </div>
  );
};
export default Home;
