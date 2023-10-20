import { useState } from "react";
import "./app.scss";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./page/shop/Shop";
import Home from "./page/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterBot from "./components/footer-bot/FooterBot";
import Cart from "./page/cart/Cart";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:pid" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer></Footer>
        <FooterBot></FooterBot>
      </BrowserRouter>
    </>
  );
}

export default App;
