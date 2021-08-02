import React from "react";
import Header from "../../header/Header";
import "./shop.css";

import basket from "../../../img/basket-icon.png"
import favorites from "../../../img/favorites-icon.png"
import cardImage from "../../../img/shop-image.png"

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container-shop">
          <h2 className="main-heading main-heading-shop">Каталог товаров</h2>
          <div className="blog__topics">
            <button>Все товары</button>
            <button>Zero Waste</button>
            <button className="blog__topic-active">Для дома</button>
            <button>Косметика</button>
            <button>Личная гигена</button>
          </div>
          <div className="shop-cards">
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="card-image" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <a href="#"><img src={basket} alt="корзина" className="shop-basket" /></a>
                    <a href="#"><img src={favorites} alt="избранное" className="shop-basket" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Shop;