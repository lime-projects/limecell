import React from "react";
import axios from "axios";

import { url } from "../api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-6 my-3" key={product.id}>
                <div className="card">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card-header">
                      <h4>
                        <strong>{product.title}</strong>
                      </h4>
                    </div>
                    <div className="card-body">
                      <img src={product.thumbnail} width="250" />
                      <p>{product.description}</p>
                      <h5 className="text-decoration-line-through">
                        ${product.price}
                      </h5>
                      <h4>
                        $
                        {product.price -
                          Number(
                            (product.price * product.discountPercentage) / 100
                          ).toFixed(2)}
                      </h4>
                    </div>
                  </Link>
                  <div className="card-footer">
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-primary">Buy</button>
                      <button className="btn btn-outline-warning">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
