import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

const HeaderShop = (props) => {

    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <Link to="/">
                                <img src="/img/header_logo.svg" alt="Логотип"/>
                                <span className="logo__name">5R. <span>эко</span>портал</span>
                            </Link>
                        </div>

                        <nav className="navbar">
                            <ul className="nav__links">
                                <li className="nav__link-shop">
                                    <Link to="/shop" className="nav__link-item">
                                        Каталог
                                        <img src="../img/arrow.svg" alt="arrow"/>
                                    </Link>
                                    <ul className="nav__link-items">
                                        <li>
                                            <Link to="/shop" className="nav__link-item">
                                                Все товары
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="nav__link-item">
                                                Для дома
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="nav__link-item">
                                                Zero Waste
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="nav__link-item">
                                                Косметика
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop" className="nav__link-item">
                                                Личная гигиена
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about" className="nav__link-item">
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="nav__link-item">
                                        Блог
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav__link-item">
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>

<<<<<<< HEAD
            <div className="navigation">
              <div className="search">
                <img src="/img/search.svg" alt="" />
              </div>
              <div className="favorites">
                <img src="/img/favorites.svg" alt="" />
              </div>
              <Link to="/shop/basket" className="goods">
                <img id="goods__btn" src="/img/basket.svg" alt="" />
                <label className="goods__number" htmlFor="goods__btn">1</label>
              </Link>
              {/* <input className="search__input" type="text" placeholder="Поиск"/> */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
=======
                        <div className="navigation__shop">
                            <div className="search">
                                <svg width="21" height="21" className="navigation__search-icon">
                                    <use xlinkHref="/sprite.svg#search"></use>
                                </svg>
                            </div>
                            <div className="favorites">
                                <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
                                    <use xlinkHref="/sprite.svg#favorites"></use>
                                </svg>
                            </div>
                            <Link to="/shop/basket">
                                <div className="basket">
                                    <svg width="23" height="20" className="navigation__basket-icon">
                                        <use xlinkHref="/sprite.svg#basket"></use>
                                    </svg>
                                    <label className="goods__number" htmlFor="goods__btn">{props.inBasket}</label>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
>>>>>>> dev4
};

export default HeaderShop;