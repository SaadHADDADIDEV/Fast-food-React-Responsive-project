import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function MenuItem({ id, image, name, price }) {
  const { addToCart, removeFromCart, getItemQuantity } =
    useContext(CartContext);
  const quantity = getItemQuantity(id);

  return (
    <div className="menuItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="menuImage"
      ></div>
      <h1>{name}</h1>
      <p>{price.toFixed(2)} MAD</p>
      <div className="menuActions">
        <button onClick={() => removeFromCart(id)} disabled={quantity === 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => addToCart({ id, name, price })}>+</button>
      </div>
    </div>
  );
}

export default MenuItem;
