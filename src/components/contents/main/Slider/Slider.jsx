
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './slider.css'; 
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

const Slider = () => {
    
    SwiperCore.use([Navigation, Pagination]);

    return (
        <section className="slider">
            <div className="container">
                <h2 className="slider__title">Жить экологично - это легко, полезно и выгодно!</h2>
                <Swiper
                    navigation={true}
                    pagination={true}
                >
                    <SwiperSlide>
                        <img className="slide__img" src="/img/slider/slide_1.png" alt="" />
                        <div className="slide__info">
                            <p className="slide__text">Стакан складной Stojo</p>
                            <button className="slide__btn">Смотреть</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slide__img" src="/img/slider/slide_1.png" alt="" />
                        <div className="slide__info">
                            <p className="slide__text">Стакан складной Stojo</p>
                            <button className="slide__btn">Смотреть</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slide__img" src="/img/slider/slide_1.png" alt="" />
                        <div className="slide__info">
                            <p className="slide__text">Стакан складной Stojo</p>
                            <button className="slide__btn">Смотреть</button>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>

    );
};

export default Slider;