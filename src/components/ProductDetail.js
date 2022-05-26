import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

import { url } from "../api";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ProductDetail = () => {
  const [product, setProduct] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`${url}/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{product.title}</h2>
        <small>Brand: {product.brand}</small>
        <div>
          <img src={product.thumbnail} />
          <p>{product.description}</p>
          <h5 className="text-decoration-line-through">
            ${Number(product.price).toFixed(2)}
          </h5>
          <h4>
            $
            {product.price -
              Number(
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
          </h4>
        </div>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-primary w-25">Buy</button>
          <button className="btn btn-outline-warning w-25">Add to Cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
