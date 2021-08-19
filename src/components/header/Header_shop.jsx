import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderShop = (props) => {
    let textInput = React.createRef();
    let search = React.createRef();
    let favorites = React.createRef();
    let basket = React.createRef();
    function handleClick() {
        textInput.current.style.display = "block";
        search.current.style.opacity = "0";
        favorites.current.style.opacity = "0";
        basket.current.style.opacity = "0";
    }
    function inputClose() {
        textInput.current.style.display = "none";
        search.current.style.opacity = "1";
        favorites.current.style.opacity = "1";
        basket.current.style.opacity = "1";
    }
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to="/">
                                <span className="logo__name">5R. <span>экоline</span></span>
                            </Link>
                        </div>
                        <nav className="header__navbar">
                            <ul className="nav__links">
                                <li className="nav__link-shop">
                                    <Link to="/shop" className="nav__link-item">
                                        Каталог
                                        <img src="../img/arrow.svg" alt="arrow" />
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
                                    <Link to="/contacts" className="nav__link-item">
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div  className="navigation__shop">
                            <div onClick={handleClick} ref={search} className="header-search">
                                <svg width="21" height="21" className="navigation__search-icon">
                                    <use xlinkHref="/sprite.svg#search"></use>
                                </svg>
                            </div>
                            <Link to="/shop/favorites" ref={favorites} className="header-favorites">
                                <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
                                    <use xlinkHref="/sprite.svg#favorites"></use>
                                </svg>
                                
                            </Link>
                            <Link to="/shop/basket" ref={basket} className="header-basket">
                                <svg width="23" height="20" className="navigation__basket-icon">
                                    <use xlinkHref="/sprite.svg#basket"></use>
                                </svg>
                                <label className="goods__number" htmlFor="goods__btn">{props.inBasket}</label>
                            </Link>
                            <div ref={textInput} className="header-input">
                                <input type="text" placeholder="Поиск" />
                                <div onClick={inputClose} className="header__input-close"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default HeaderShop;