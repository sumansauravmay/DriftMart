import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product/Product";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import Menproducts from "../Pages/MenProducts/Menproducts";
import Womenproducts from "../Pages/WomenProducts/Womenproducts";
import ProductsDetails from "../Pages/ProductsDetails.jsx/ProductsDetails";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/menproducts" element={<Menproducts />}></Route>
      <Route path="/womenproducts" element={<Womenproducts />}></Route>
      <Route path="/products/:product_id" element={<ProductsDetails />}></Route>
    </Routes>
  );
};

export default Allroutes;
