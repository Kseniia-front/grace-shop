import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";

const CartItemBlock: React.FC<CartItem> = ({
  id,
  title,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Ты ,действительно, хочешь удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="product-card__image" src={imageUrl} alt={title} />
      </div>

      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{size}</p>
      </div>

      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className={clsx(
            "button button--outline button--circle cart__item-count-minus",
            { "cart__item-count-minus--disabled": count === 1 },
          )}
        >
          −
        </button>

        <b>{count}</b>

        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          +
        </button>
      </div>

      <div className="cart__item-price">
        <b>{price * count}</b>
      </div>

      <div className="cart__item-remove">
        <button
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItemBlock;
