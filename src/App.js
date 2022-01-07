import logo from "./logo.svg";


import React, { useState } from "react";


//components
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginRegisterPage";
import CartPage from "./pages/cartPage";
import ProductPage from "./pages/productPage";
import CheckoutPage from "./pages/checkoutPage";
import RegisterPage from "./pages/registerPage";
import Login from "./pages/Login"


//packages
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 



function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
     

      Is logged in? {JSON.stringify(isLoggedIn)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
