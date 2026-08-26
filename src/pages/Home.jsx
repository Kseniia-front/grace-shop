import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6a8568159c451dc67a639285.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ProductCard key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
