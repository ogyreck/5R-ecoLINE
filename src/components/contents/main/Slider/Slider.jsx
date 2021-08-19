
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './slider.css'; 
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import { Link } from 'react-router-dom';

const Slider = () => {
    
    SwiperCore.use([Navigation, Pagination]);

    return (
        <section className="slider">
            <div className="container">
                {/* <h2 className="slider__title">Жить экологично - это легко, полезно и выгодно!</h2> */}
                <Swiper
                    navigation={true}
                    pagination={true}
                    // slidesPerView={1}
                    loop={true}
                    className="mainSlider"
                >
                    <SwiperSlide>
                        <div className="slider-wrapper">
                            <span className="slider__new">NEW</span>
                            <Link to="/shop">
                                <span className="slider__more">Смотреть еще<img src="img/slider/arrow.svg" alt="" /></span>
                            </Link>
                        </div>
                        <div className="slider-info__wrapper">
                            <img className="slide__img" src="/img/slider/slide_2.png" alt="" />
                            <div className="slide__info">
                                <p className="slide__text">Стакан складной Stojo</p>
                                <p className="slide__price">1 200 ₽</p>
                                <Link to="/shop/card" className="slide__btn">Смотреть</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-wrapper">
                            <span className="slider__new">NEW</span>
                            <Link to="/shop">
                                <span className="slider__more">Смотреть еще<img src="img/slider/arrow.svg" alt="" /></span>
                            </Link>
                        </div>
                        <div className="slider-info__wrapper">
                            <img className="slide__img" src="/img/slider/slide_3.png" alt="" />
                            <div className="slide__info">
                                <p className="slide__text">Чехол для телефона <br/>“No plastic it’s fantastic”</p>
                                <p className="slide__price">1 390 ₽</p>
                                <Link to="/shop/card" className="slide__btn">Смотреть</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-wrapper">
                            <span className="slider__new">NEW</span>
                            <Link to="/shop">
                                <span className="slider__more">Смотреть еще<img src="img/slider/arrow.svg" alt="" /></span>
                            </Link>
                        </div>
                        <div className="slider-info__wrapper">
                            <img className="slide__img" src="/img/slider/slide_4.png" alt="" />
                            <div className="slide__info">
                                <p className="slide__text">Дезодорант “Chom Chom”</p>
                                <p className="slide__price">1 100 ₽</p>
                                <Link to="/shop/card" className="slide__btn">Смотреть</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>

    );
};

export default Slider;