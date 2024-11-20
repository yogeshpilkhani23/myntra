import React from "react";
const Checkbox = (props) => {
  //  console.log(props)
  return (
    <div id="brandCard" className="">
      
    

      <input type="checkbox" id={props.brandName} name="brand"  value={props.brandName} onChange={props.onChanges}/>
      <label htmlFor={props.brandName}>{props.brandName}</label>
      <br />
     
    </div>
  );
};
export default Checkbox;
