import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const classList = inCart ? "in-cart" : ""
  return (
    <li className={classList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={() =>setInCart(!inCart)}className="add">{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
