import React from "react";
import HeaderShop from "../../../header/Header_shop";
import Footer from "../../../footer/Footer";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo"
import "./cardProduct.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// import css from "./cardProduct.css";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

const CardProduct = () => {

  SwiperCore.use([Navigation, Pagination]);
  // const custom = [

  // ]

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
      return '<p style="color:red; filter: drop-shadow(2px 2px 40px rgba(67, 41, 41, 0.1)); background:none; height: 108px;width: 108px; box-shadow: 2px 2px 52px rgba(67, 41, 41, 0.05);" class=' + className + ' > <img src="/img/shop-cards/card-' + (index + 1) + '.jpg" alt="карточка товара" /> </p>';
    }
  }

  // const updateInput = () => {
    
  // }
  // const handleSubmit = () => {

  // }

  return (
    <>
      <HeaderShop />
      <div className="card__bg">

      <section className="navigation">
        <div className="container">
          <div className="navigation__links">
            <Link to="/" className="navigation__links-item">Главная</Link>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <Link to="/" className="navigation__links-item">Эко-магазин</Link>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <Link to="/" className="navigation__links-item">Каталог</Link>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <Link to="/" className="navigation__links-item">Zero Waste</Link>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <Link to="/" className="navigation__links-item">Стакан складной Stojo</Link>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="container">
          <div className="card__wrapper">
            <div className="card__container">
              <Swiper
                navigation={true}
                pagination={pagination}
              >
                <SwiperSlide>
                  <div className="card">
                    <img className="card__img" src="/img/shop-cards/card-0.jpg" alt="Карточка товара" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <img className="card__img" src="/img/shop-cards/card-0.jpg" alt="Карточка товара" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <img className="card__img" src="/img/shop-cards/card-0.jpg" alt="Карточка товара" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <CardInfo/>
            {/* <div className="card-info">
              <p className="card__name">Стакан скланой Stojo</p>
              <span className="card__price">1 200 ₽</span>
              <p className="card__text">Складной стакан из пищевого силикона, гибкого и долговечного материала, который легко моется.</p>
              <span className="card__text-color">Цвет</span>
              <div className="card__colors">
                <span className="card__color card__1 color__active"></span>
                <span className="card__color card__2"></span>
                <span className="card__color card__3"></span>
              </div>
              <span className="card__count-text">Количество</span>
              <span className="card__count-switch">
                <span className="card__count-btn">−</span>
                <input className="card__count" onChange={updateInput} disabled type="text" value="1" />
                <span className="card__count-btn" onClick={handleSubmit} >+</span>
              </span>
              <button className="card__btn">В корзину</button>
              <img className="card__favorites" src="/img/svg/favorites.svg" alt="" /> */}

              {/* <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
            <use xlinkHref="header.svg#favorites"></use>
          </svg> */}
            {/* </div> */}

          </div>

          <div className="card__description">
            <h3>Описание</h3>
            <p className="card__description-text">Складной стакан из пищевого силикона, гибкого и долговечного материала,
              который легко моется. Удобно носить с собой в сложенном виде.
              Корпус выполнен
              из прочного пищевого силикона (LFGB certified silicone rubber) – он не теряет форму
              даже когда кружка пустая. Ободок, защищающий руки от ожогов, и крышка произведены
              из полипропилена BPA-free (FDA grade polypropylene),
              пригодного к переработке после окончания срока использования.
              Перед первым использованием её необходимо прокипятить в чистой воде.
            </p>

            <div className="card__composition">
              <h4>Состав</h4>
              <p>Стакан: Силикон;<br />
                Крышка, держатель стакана: Пластик — PP 5
              </p>
            </div>
            <div className="card__prameters">
              <h4>Параметры</h4>
              <p>Вес	200 g<br />
                Объём: 355 мл;<br />
                Диаметр крышки: 9 см;<br />
                Высота в разложенном состоянии: 12,7 см;<br/>
                Высота в сложенном состоянии: 5 см;
              </p>

              <svg width="23" height="20" className="basket__svg">
                <use xlinkHref="sprite.svg#basket"></use>
              </svg>

              </div>

          </div>
          


        </div>
      </section>
      </div>
      <Footer/>
      
    </>
  );
};

export default CardProduct;