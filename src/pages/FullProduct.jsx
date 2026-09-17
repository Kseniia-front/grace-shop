import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const FullProduct = () => {
  const [product, setProduct] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://6a8568159c451dc67a639285.mockapi.io/products/" + id,
        );
        setProduct(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return "Загрузка...";
  }

  return (
    <div className="conteiner">
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <h2>{product.title}</h2>
      <h4>{product.price} р.</h4>
    </div>
  );
};

export default FullProduct;
