import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderShop = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img src="/img/header_logo.svg" alt="Логотип" />
                <span className="logo__name">5R. <span>эко</span>портал</span>
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

            <div className="navigation__shop">
              <div className="search">
                <svg width="19" height="20" className="navigation__search-icon">
                  <use xlinkHref="header.svg#search"></use>
                </svg>
              </div>
              <div className="favorites">
                <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
                  <use xlinkHref="header.svg#favorites"></use>
                </svg>
              </div>
              <div className="goods">
                <svg width="23" height="20"  className="navigation__basket-icon">
                  <use xlinkHref="header.svg#basket"></use>
                </svg>
                <label className="goods__number" htmlFor="goods__btn">1</label>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default HeaderShop;