import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  console.log(items)

  const [selectedCategory, setSelectedCategory] = useState()
  
  // function fitlerHandler(){
  //   let oItem = [...items]

  //   const filteredList = oItem.filter(item => item.id === event.target.value)
  // }
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" npm>  npm
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


