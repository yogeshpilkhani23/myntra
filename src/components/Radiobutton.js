import React from "react";
const Radiobutton = (props) => {
  //  console.log(props)
  return (
    <div id="genderCard">
      <input type="radio" id={props.gender} name="Gender" value={props.gender} onChange={props.onChanges}/>
      <label htmlFor={props.gender}>{props.gender}</label><br/>
      
    </div>
  );
};
export default Radiobutton;
