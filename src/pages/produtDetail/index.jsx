import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Productdetail() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="productDetail">
        <div className="productImage">
          <img
            width={"100%"}
            height={"100%"}
            src={product.image}
            alt="product"
          />
        </div>
        <div className="productContent">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>price : {product.price}</h2>
          <h3>category: {product.category}</h3>
          <button>add to cart</button>
        </div>
      </div>
    </>
  );
}
