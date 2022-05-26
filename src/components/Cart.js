import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h3>Your Cart</h3>
        <h5>Products</h5>
        <div className="d-flex my-3">
          <img
            src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
            width="200"
          />
          <div className="mx-3">
            <h5>Iphone 9</h5>
            <p>Brand: Apple</p>
            <h4>$477.85</h4>
          </div>
          <div>
            <h5>Quantity</h5>
            <form className="my-2">
              <input className="form-control" type="number" defaultValue={1} />
            </form>
            <button className="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
        <div className="d-flex">
          <img
            src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
            width="200"
          />
          <div className="mx-3">
            <h5>Iphone X</h5>
            <p>Brand: Apple</p>
            <h4>$737.72</h4>
          </div>
          <div>
            <h5>Quantity</h5>
            <form className="my-2">
              <input className="form-control" type="number" defaultValue={1} />
            </form>
            <button className="btn btn-sm btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
