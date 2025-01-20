import React from "react";
import { useCart } from "../components/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Calcul du total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h1>Votre Panier</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <div className="cartItemsContainer">
          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <div className="cartItemDetails">
                <h2 className="cartItemTitle">{item.name}</h2>
                <p className="cartItemPrice">Prix: ${item.price.toFixed(2)}</p>
                <p className="cartItemQuantity">Quantité: {item.quantity}</p>
              </div>
              <div className="cartActions">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cartTotal">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
