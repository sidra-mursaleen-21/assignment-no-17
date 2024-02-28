import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);

  const navigation = useNavigate();

  const navigate = (productId) => {
    navigation(`/productDetail/${productId}`);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="products">
        {product.map((object, index) => {
          return (
            <div key={index} className="productContainer">
              <div className="imageContainer">
                <img
                  onClick={() => navigate(object.id)}
                  width={"60%"}
                  height={"90%"}
                  src={object.image}
                  alt="product"
                />
              </div>
              <div className="contentContainer">
                <h4 onClick={() => navigate(object.id)}>{object.title}</h4>
                <p>price : {object.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
