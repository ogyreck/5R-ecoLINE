import React from "react";
import Header from "../../header/Header";
import "./shop.css";
import { Link } from "react-router-dom";
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
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
            <div className="shop-card__item">
              <img src={cardImage} alt="" className="shop-card__image" />
              <div className="shop-card__content">
                <p className="shop-card__title">Ершик кокосовый для чистки бутылочек</p>
                <div className="flex-wrapper">
                  <div className="shop-card__price">299 ₽</div>
                  <div className="shop-card__icons">
                    <Link to="/"><img src={basket} alt="корзина" className="shop-basket" /></Link>
                    <Link to="/"><img src={favorites} alt="избранное" className="shop-basket" /></Link>
                  </div>
                </div>
              </div>
              <div className="card-basket">
                <button className="shop-card-button">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Shop;