import React, { useState, useContext } from "react";
import Logo from "../assets/Design_sans_titre__2_-removebg-preview.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "./CartContext"; // Import the context
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { cartItems } = useContext(CartContext); // Get cart items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Total number of items

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="rightSide">
        {/* Links visible on Desktop */}
        <div className={`hiddenLinks ${openLinks ? "openLinks" : ""}`}>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="cartIcon">
          <ShoppingCartIcon />
          {totalItems > 0 && <span className="cartCount">{totalItems}</span>}
        </Link>

        {/* Hamburger Menu Icon (only for mobile) */}
        <ReorderIcon className="hamburgerIcon" onClick={toggleNavbar} />
      </div>
    </div>
  );
}

export default Navbar;
