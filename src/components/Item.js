import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false)
  // const [color, setColor] = useState("black")
  
  function addToCart(){
    setIsAdded(!isAdded)
    // setColor("white")
  }

 
  const cart = isAdded ? "in-cart" : ""

  

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart} style={{backgroundColor: cart? "violet": ""}}>
        
        {cart ? "Remove From Cart" : "Add to Cart"}
        </button>
    </li>
  );
}

export default Item;


// const items = [
//   { id: 1, name: "Yogurt", category: "Dairy" },
//   { id: 2, name: "Pomegranate", category: "Produce" },
//   { id: 3, name: "Lettuce", category: "Produce" },
//   { id: 4, name: "String Cheese", category: "Dairy" },
//   { id: 5, name: "Cookies", category: "Dessert" },
// ];
