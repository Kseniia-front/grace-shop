import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductCard from "./components/ProductCard";
import products from "./assets/img/products.json";
import hoop from "./assets/img/products/hoop.png";
import ball from "./assets/img/products/ball.png";
import clubs from "./assets/img/products/clubs.png";
import ribbon from "./assets/img/products/ribbon.png";
import puinte from "./assets/img/products/puinte.png";
import leotard from "./assets/img/products/leotard.png";
import gaiters from "./assets/img/products/gaiters.png";
import shoes from "./assets/img/products/shoes.png";
import bag from "./assets/img/products/bag.png";

const productImages = [hoop, ball, clubs, ribbon, leotard, gaiters, shoes, bag];

const categories = ["Все", "Инвентарь", "Одежда", "Полупальцы", "Аксессуары"];

function App() {
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
            {products.map((obj, index) => (
              <ProductCard key={obj.id} {...obj} image={productImages[index]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
