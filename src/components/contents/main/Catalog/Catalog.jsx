import React  from "react"
import "./catalog.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Catalog = () => {

  SwiperCore.use([Navigation, Pagination]);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="main-heading catalog__title">Каталог</h2>
        
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // slidesPerView={1}
        className="catalogSlider"
        loop={true}
      >
        <SwiperSlide>
          <div className="slider-catalog">
            <Link to="/shop">
              <img className="slider-catalog__arrow" src="img/catalog/arrow.svg" alt="" />
              <span className="slider-catalog__text">Для дома</span>
              <span className="slider-catalog__sale">SALE</span>
              
            </Link>
            <img className="slider-catalog__img" src="img/catalog/home.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-catalog">
            <Link to="/shop">
              <p className="slider-catalog__text">Косметика</p>
              <img className="slider-catalog__arrow" src="img/catalog/arrow.svg" alt="" />
              <span className="slider-catalog__sale">SALE</span>
            </Link>
            <img className="slider-catalog__img" src="img/catalog/cosmetics.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-catalog">
            <Link to="/shop">
              <p className="slider-catalog__text">Zero Waste</p>
              <img className="slider-catalog__arrow" src="img/catalog/arrow.svg" alt="" />
            </Link>
            <img className="slider-catalog__img" src="img/catalog/zero.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-catalog">
            <Link to="/shop">
              <p className="slider-catalog__text">Личная гигиена</p>
              <img className="slider-catalog__arrow" src="img/catalog/arrow.svg" alt="" />
            </Link>
            <img className="slider-catalog__img" src="img/catalog/hygiene.jpg" alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}
export default Catalog;
