import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import { Route, Routes } from "react-router-dom";
import Furniture from "./components/Categories/Furniture/Furniture";
import Kitchen from "./components/Categories/Kitchen/Kitchen";
import Lighting from "./components/Categories/Lighting/Lighting";
import Outdoor from "./components/Categories/Outdoor/Outdoor";
import Rugs from "./components/Categories/Rugs/Rugs";
import Decor from "./components/Categories/Decor/Decor";
import KidsBaby from "./components/Categories/Kids & Baby/KidsBaby";
import HomeImprovement from "./components/Categories/Home Improvement/HomeImprovement";
import Beding from "./components/Categories/Bedding/Beding";
import Living from "./components/Categories/Furniture/Living";
import ProductDetails from "./components/Categories/Furniture/ProductDetails";
import Register from "./components/Register";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="furniture/living/*" element={<Living />} />
        <Route path="/furniture/living/:id" element={<ProductDetails />} />
        <Route path="/homeimprovement" element={<HomeImprovement />} />
        <Route path="/kidsbaby" element={<KidsBaby />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/lighting" element={<Lighting />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/rugs" element={<Rugs />} />
        <Route path="/bedding" element={<Beding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
        

      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
