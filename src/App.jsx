import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./conponents/navbar/Navbar";
import Footer from "./conponents/footer/Footer";
import banner_men from "./conponents/assets/banner_mens.png"
import banner_women from "./conponents/assets/banner_women.png"
import banner_kids from "./conponents/assets/banner_kids.png"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="men" element={<ShopCategory banner={banner_men} category="men" />} />
        <Route path="women" element={<ShopCategory banner={banner_women} category="women" />} />
        <Route path="kids" element={<ShopCategory banner={banner_kids} category="kid" />} />
        <Route path="product" element={<Products />}>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
