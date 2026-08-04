import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    title: "Обруч",
    price: 1500,
    imageURL: "/img/hoop.png",
    sizes: ["70 см", "75см", "80 см", "85 см"],
  },
  {
    id: 2,
    title: "Мяч",
    price: 2800,
    imageURL: "/img/ball.png",
    sizes: ["36 см", "41 см", "45 см"],
  },
  {
    id: 3,
    title: "Булавы",
    price: 3200,
    imageURL: "/img/clubs.png",
    sizes: ["36 см", "41 см", "45 см"],
  },
  {
    id: 4,
    title: "Лента",
    price: 1900,
    imageURL: "/img/ribbon.png",
    sizes: ["4 м", "5 м", "6 м"],
  },
];

const categories = ["Все", "Обручи", "Мячи", "Булавы", "Ленты"];

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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                imageURL={product.imageURL}
                sizes={product.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
