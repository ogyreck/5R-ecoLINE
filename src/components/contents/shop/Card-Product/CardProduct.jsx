import React from "react";
import Footer from "../../../footer/Footer";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo"
import "./cardProduct.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import HeaderShopContainer from "../../../header/Header_shopContainer";


const CardProduct = () => {

  SwiperCore.use([Navigation, Pagination]);

  const cardImg = [
    "/img/shop-cards/card-1.jpg",
    "/img/shop-cards/card-2.jpg",
    "/img/shop-cards/card-3.jpg",
  ]

  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
      return '<p style="margin-right:15px; filter: drop-shadow(2px 2px 40px rgba(67, 41, 41, 0.1)); background:none; height: 108px;width: 108px; box-shadow: 2px 2px 52px rgba(67, 41, 41, 0.05);" class=' + className + ' > <img src=' + cardImg[index] + ' alt="карточка товара" /> </p>';
    }
  }

  return (
    <>
      <HeaderShopContainer/>
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
                  className="cardSlide"
                  // loop={true}
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
              <CardInfo />
            </div>

            <div className="card__description">
              <span>Описание</span>
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
                <span>Состав</span>
                <p>Стакан: Силикон;<br />
                  Крышка, держатель стакана: Пластик — PP 5
                </p>
              </div>
              <div className="card__prameters">
                <span>Параметры</span>
                <p>Вес	200 g<br />
                  Объём: 355 мл;<br />
                  Диаметр крышки: 9 см;<br />
                  Высота в разложенном состоянии: 12,7 см;<br />
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
      <Footer />

    </>
  );
};

export default CardProduct;
