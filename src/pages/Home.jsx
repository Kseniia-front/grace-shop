import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/ProductCard/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}&` : "";
    const search = searchValue ? `&search=${searchValue}&` : "";

    fetch(
      `https://6a8568159c451dc67a639285.mockapi.io/products?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const products = items.map((obj) => <ProductCard key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">{isLoading ? skeletons : products}</div>

      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
