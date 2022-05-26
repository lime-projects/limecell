import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "81vh" }}>
        <div className="align-center py-5">
          <h3 className="text-center">Welcome to Lime Cell</h3>
          <h5 className="text-center">
            Check our{" "}
            <Link to="/products" className="text-secondary">
              Products
            </Link>
          </h5>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
