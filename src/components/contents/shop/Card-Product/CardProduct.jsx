import React from "react";
import HeaderShop from "../../../header/Header_shop";
import { Link } from "react-router-dom";
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
      return '<p style="color:red; background:none; height: 108px;width: 108px;" class=' + className + ' > <img src="/img/shop-cards/card-' + (index + 1) + '.jpg" alt="карточка товара" /> </p>';
    }
  }

  return (
    <>
      <HeaderShop />
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

            <div className="card-info">
              <p className="card__name">Стакан скланой Stojo</p>
              <span className="card__price">1 200 ₽</span>
              <p className="card__text">Складной стакан из пищевого силикона, гибкого и долговечного материала, который легко моется.</p>
              <span className="card__text-color">Цвет</span>
              <div className="card__colors">
                <span className="card__color card__1 color__active"></span>
                <span className="card__color card__2"></span>
                <span className="card__color card__3"></span>
              </div>
              <span className="card__count">Количество</span>
              <span className="card__count-switch">
                1
              </span>
              <button className="card__btn">В корзину</button>
              <img className="card__favorites" src="/img/svg/favorites.svg" alt="" />
              
                {/* <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
                  <use xlinkHref="header.svg#favorites"></use>
                </svg> */}
            </div>
          </div>

          
          


        </div>
      </section>
    </>
  );
};

export default CardProduct;