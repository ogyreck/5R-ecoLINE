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
              {/* <img src="/img/footer_logo.svg" alt="" /> */}
              <Link to="/"><span className="footer__logo-text">5R. <span>эко</span>line</span></Link>
            </div>
            <div className="footer__menu">
              <span>Меню</span>
              <Link to="/shop">Католог</Link>
              <Link to="/about">О нас</Link>
              <Link to="/blog">Блог</Link>
              <Link to="/blog">Контакты</Link>
            </div>
            <div className="footer__menu">
              <span>Каталог</span>
              <Link to="/shop">Для дома</Link>
              <Link to="/shop">Zero Waste</Link>
              <Link to="/shop">Косметика</Link>
              <Link to="/shop">Личная гигиена</Link>
            </div>
            <div className="footer__menu">
              <span>Покупателю</span>
              <Link to="/shop">Оплата и доставка</Link>
              <Link to="/shop">FAQ</Link>
              <Link to="/shop">Сертификаты</Link>
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
              <Link to="/" className="footer__social-emal">EcoPortal20@mail.ru</Link>
              <Link to="/" className="footer__social-tel">+7 (912) 017-22-72</Link>
            </div>

          </div>
        </div>
        <div className="footer__line"></div>
        <div className="container">
          <div className="footer__docs">
            <div className="footer__pay">
              <img src="/img/visa.svg" alt="" />
              <img src="/img/masterCard.svg" alt="" />
              <img src="/img/mir.svg" alt="" />
            </div>
            <div className="footer__offer">
              <Link to="/">Публичная оферта</Link>
            </div>
            <div className="footer__policy">
              <Link to="/">Политика конфиденциальности</Link>
            </div>
            <div className="footer__date">
              <span>© 2021 5R. экопортал</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
};

export default Footer;