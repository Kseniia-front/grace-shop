import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">🛒 Корзина</h2>

          <div className="cart__clear">
            <span>Очистить корзину</span>
          </div>
        </div>

        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="product-card__image"
                src="https://avatars.mds.yandex.net/get-mpic/11563949/2a0000018c15dcd88d1d6c21492002234935/600x800"
                alt="Обруч"
              />
            </div>

            <div className="cart__item-info">
              <h3>Обруч</h3>
              <p>80 см.</p>
            </div>

            <div className="cart__item-count">
              <button className="button button--outline button--circle cart__item-count-minus">
                −
              </button>

              <b>1</b>

              <button className="button button--outline button--circle cart__item-count-plus">
                +
              </button>
            </div>

            <div className="cart__item-price">
              <b>1500 руб.</b>
            </div>

            <div className="cart__item-remove">
              <button className="button button--outline button--circle">
                ×
              </button>
            </div>
          </div>

          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="product-card__image"
                src="https://idealturnik.ru/wa-data/public/shop/products/60/70/7060/images/59177/59177.750x0.jpg"
                alt="Булавы"
              />
            </div>

            <div className="cart__item-info">
              <h3>Булавы</h3>
              <p>41 см.</p>
            </div>

            <div className="cart__item-count">
              <button className="button button--outline button--circle cart__item-count-minus">
                −
              </button>

              <b>1</b>

              <button className="button button--outline button--circle cart__item-count-plus">
                +
              </button>
            </div>

            <div className="cart__item-price">
              <b>3200 руб.</b>
            </div>

            <div className="cart__item-remove">
              <button className="button button--outline button--circle">
                ×
              </button>
            </div>
          </div>
        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего товаров: <b>2 шт.</b>
            </span>

            <span>
              Сумма заказа: <b>4700 руб.</b>
            </span>
          </div>

          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Вернуться назад</span>
            </Link>

            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
