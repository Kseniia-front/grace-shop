import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductCard from "./components/ProductCard";

const categories = ["Все", "Инвентарь", "Одежда", "Полупальцы", "Аксессуары"];

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6a8568159c451dc67a639285.mockapi.io/products")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories items={categories} />
            <Sort />
          </div>

          <h2 className="content__title">Все товары</h2>
          <div className="content__items">
            {items.map((obj, index) => (
              <ProductCard key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
