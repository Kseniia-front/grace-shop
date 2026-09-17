import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, selectCartItemById } from "../../redux/slices/cartSlice";

function ProductCard({ id, title, price, imageUrl, sizes }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = (event) => {
    event.preventDefault();

    const item = {
      id,
      title,
      price,
      imageUrl,
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <img className="product-card__image" src={imageUrl} alt={title} />
        <h4 className="product-card__title">{title}</h4>
        <div className="product-card__selector">
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-card__bottom">
          <div className="product-card__price">{price} руб.</div>
          <div
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
