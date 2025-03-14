import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebFont from "webfontloader";
import "./index.css";
import Search from "./pages/Search";
import AllProducts from "./pages/AllProducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import store from "./store/store.jsx";
import { loadUser } from "./store/UserSlice.jsx";
import { useSelector } from "react-redux";
import UserOption from "./components/layout/UserOption.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import Cookies from "js-cookie";
import ProtectedRoute from "./components/route/ProtectedRoute.jsx";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Serif"],
      },
    });
      store.dispatch(loadUser());
  }, []);
  return (
    <Fragment>
      <Navbar />

      <div className="absolute top-[11%] right-5 h-screen">
        {isAuthenticated && <UserOption user={user} />}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route path="/products/:keyword" element={<AllProducts />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route exact path="/account" element={<MyAccount user={user} />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/orders" element={<Orders />} />
        </Route>
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
