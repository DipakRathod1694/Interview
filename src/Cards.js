import React from "react";
import { useState } from "react";
import "./Cards.css";

function Cards({ number, name, age}) {
  const [increaseAge, setIncreaseAge] = useState("21");
  
  return (
    <div className="card">
      <h1>Card no. {number}</h1>
      <p>Name : {name}</p>
      <p>Age : {increaseAge}</p>
      <button onClick={(setIncreaseAge)=>{increaseAge+=1}}>Increase Age By One</button>
    </div>
  );
}

export default Cards;
