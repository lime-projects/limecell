import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div style={{ fontFamily: "Oxygen, sans-serif" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
