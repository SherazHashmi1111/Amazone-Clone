import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebFont from "webfontloader";
import "./index.css";
import Search from "./pages/Search";
import  AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Serif"],
      },
    });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
