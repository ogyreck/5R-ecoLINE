import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <img src="/img/footer_logo.svg" alt="" />
              <span className="footer__logo-text"><span>5R.</span> экопортал</span>
            </div>
            <div className="footer__menu">
              <span>Меню</span>
              <Link to="/about">О нас</Link>
              <Link to="/blog">Блог</Link>
            </div>
            <div className="footer__catalog">
              <span>Эко магазин</span>
              <Link to="/shop">Каталог</Link>
              <Link to="/shop">Оплата и доставка</Link>
              <Link to="/shop">FAQ</Link>
            </div>
            <div className="footer__social">
              <div className="footer__social-links">
                <div className="footer__social-vk">
                  <img src="/img/footer/VK.svg" alt="" />
                </div>
                <div className="footer__social-inst">
                  <img src="/img/footer/inst.svg" alt="" />
                </div>
                <div className="footer__social-telegram">
                  <img src="/img/footer/telegram.svg" alt="" />
                </div>
              </div>
              <Link className="footer__social-emal">EcoPortal20@mail.ru</Link>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;