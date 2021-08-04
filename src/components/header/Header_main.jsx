import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default class HeaderMain extends Component{

  // function onScroll() {
  //   window.addEventListener("scroll", callbackFunc);
  //   function callbackFunc() {
  //     var y = window.pageYOffset;
  //     if (y > 100) {
  //       h.style.cssText = "margin-top: 0px;";
  //     } else {
  //       h.style.cssText = "margin-top: -102px;";
  //     }
  //   }
  // }
  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      const header = document.getElementById('header');
      if (y > 692) {
        header.style.backgroundColor = "rgba(243, 243, 243, 0.6)";
      } else {
        header.style.backgroundColor = "transparent";
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
                        Каталог
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        Оплата и доставка
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </nav>

            <div className="navigation">
              <div className="navigation__link">
                <div className="search">
                  <img src="/img/search.svg" alt="" />
                </div>
                <div className="navigation__link-vk">
                  <img src="/img/social/VK.svg" alt="" />
                </div>
                <div className="navigation__link-inst">
                  <img src="/img/social/inst.svg" alt="" />
                </div>
                <div className="navigation__link-telegram">
                  <img src="/img/social/telegram.svg" alt="" />
                </div>
              </div>
              <Link to="/">Ecoportal@mail.ru</Link>
            </div>
          </div>
        </div>
      </header>
      </>
    )
  }
};

// export default HeaderMain;