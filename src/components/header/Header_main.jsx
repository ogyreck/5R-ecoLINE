import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default class HeaderMain extends Component{

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      const header = document.getElementById('header');
      const navLink = document.querySelectorAll('.nav__link-item');
      const navLinkItems = document.querySelector('.nav__link-items');
      const logoName = document.querySelector('.logo__name');

      if (y >= 692) {
        header.style.backgroundColor = "rgba(243, 243, 243, 0.6)";
        header.style.borderBottom = "1px solid #c9c9c9";
        navLinkItems.style.backgroundColor = "#E1E1E1";
        logoName.style.color = "#213C1F";
        

        navLink.forEach((element) => {
          element.style.color = "#4F4F4F";
        });
      } else {
        header.style.backgroundColor = "transparent";
        header.style.borderBottom = "none";
        navLinkItems.backgroundColor = "transparent";
        logoName.style.color = "#FFF";

        navLink.forEach((element) => {
          element.style.color = "rgba(255, 255, 255, 0.8)";
        });
      }
    });
  };


  render(){
    return (
      <>
      <header id="header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link to="/">
                <img src="/img/header_logo.svg" alt="logo" />
                <span className="logo__name">5R. <span>эко</span>портал</span>
              </Link>
            </div>

            <nav className="navbar">
              <ul className="nav__links">

                <li className="nav__link-shop" >
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
                  <Link to="/" className="nav__link-item">
                    Контакты
                  </Link>
                </li>
                
              </ul>
            </nav>

            {/* <div className="navigationHeader"> */}
              <div className="navigation__link">
                <Link to="/" className="search">
                  <svg width="21" height="21" className="navigation__search-icon">
                    <use xlinkHref="sprite.svg#search"></use>
                  </svg>
                  {/* <img src="/img/search.svg" alt="" /> */}
                </Link>
                {/* <Link to="/" className="navigation__link-vk"> */}
                <Link to="/" className="favorites">
                  <svg width="23" height="20" className="navigation__search-icon">
                    <use xlinkHref="sprite.svg#favorites"></use>
                  </svg>
                  {/* <img src="/img/social/VK.svg" alt="" /> */}
                </Link>
                {/* <Link to="/" className="navigation__link-inst"> */}
                <Link to="/" className="basket">
                  <svg width="23" height="20" className="navigation__basket-icon">
                    <use xlinkHref="sprite.svg#basket"></use>
                  </svg>
                  <label className="goods__number" htmlFor="goods__btn">1</label>
                  {/* <img src="/img/social/inst.svg" alt="" /> */}
                </Link>
                {/* <Link to="/" className="navigation__link-telegram">
                  <img src="/img/social/telegram.svg" alt="" />
                </Link> */}
              </div>
              {/* <Link to="/">Ecoportal@mail.ru</Link> */}
            {/* </div> */}
          </div>
        </div>
      </header>
      </>
    )
  }
};

// export default HeaderMain;