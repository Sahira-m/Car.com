import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import UserDetails from "./pages/UserDetails";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Favourites from "./pages/Favourites";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import NavBar from "./components/navBar/NavBar";
import Carts from "./pages/Carts";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/userdetails" element={<UserDetails />}></Route>
        <Route path="/cart" element={<Carts />}></Route>
        <Route path="/favourite" element={<Favourites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
