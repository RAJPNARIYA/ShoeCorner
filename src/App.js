import Header from "./componet/Header";
import Slider from "./componet/Slider";
import CategoryCard from "./componet/CategoryCard";
import ProductCard from "./componet/ProductCard";
import Footer from "./componet/Footer";
import Brand from "./componet/Brand";
import { Navbar } from "react-bootstrap";
import Content from "./componet/Content";
import FirstLine from "./componet/FirstLine";
import "../src/asset/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />}>
              {/* <Route path="productdetails" element={<ProductDetails />} /> */}
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
