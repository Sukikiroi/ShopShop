import logo from "./logo.svg";

//components
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginRegisterPage";
import CartPage from "./pages/cartPage";
import ProductPage from "./pages/productPage";
import CheckoutPage from "./pages/checkoutPage";

//packages
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
