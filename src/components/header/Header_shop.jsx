import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderShop = () => {
  return (
    <>
      <header id="haeder">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img src="/img/logo.svg" alt="logo" />
              </Link>
            </div>

            <nav className="navbar">
              <ul className="nav__links">
                <li>
                  <Link to="/about">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link to="/tips">
                    Советы
                  </Link>
                </li>
                <li className="nav__link-shop">
                  <Link to="/shop">
                    Эко-магазин
                    <img src="../img/arrow.svg" alt="arrow" />
                  </Link>
                  <ul className="nav__link-items">
                    <li>
                      <Link to="/shop">
                        Оплата и доставка
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Каталог товаров
                      </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </nav>

            <div className="navigation">
              <div className="search">
                <img src="/img/search.svg" alt="" />
              </div>
              <div className="favorites">
                <img src="/img/favorites.svg" alt="" />
              </div>
              <div className="goods">
                <img id="goods__btn" src="/img/basket.svg" alt="" />
                <label className="goods__number" htmlFor="goods__btn">1</label>
              </div>
              {/* <input className="search__input" type="text" placeholder="Поиск"/> */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default HeaderShop;