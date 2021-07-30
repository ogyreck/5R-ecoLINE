import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src="/src/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="navbar">
            <ul className="nav__links">
              <li>
                <Link to="/news">
                  Новости
                </Link>
                </li>
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
                <Link to="/shop">
                  Эко-магазин
                </Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <input className="search__input" type="text" placeholder="Поиск"/>
          </div>
        </div>
      </div>
    </header>
    </>
  )
};

export default Header;