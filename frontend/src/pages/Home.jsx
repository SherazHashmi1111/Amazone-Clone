import React, { Fragment } from "react";
import Button from "../components/UI/Button";
import Products from "../components/Products.jsx";
import MetaData from "../components/layout/MetaData.jsx";

function Home() {
  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />

      <section className="flex items-center justify-center h-[91vh] bg-white bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] hero_section">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 uppercase">
            Welcome to Ecommerce
          </h1>
          <p className="text-2xl text-gray-600 uppercase">
            Find amazing products below
          </p>
          <a href="#products">
            <Button>Get Started</Button>
          </a>
        </div>
      </section>
      <Products />
    </Fragment>
  );
}

export default Home;
