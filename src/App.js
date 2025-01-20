import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; // Import du CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} /> {/* Route du panier */}
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
