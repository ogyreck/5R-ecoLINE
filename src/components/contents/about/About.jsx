import React from "react";

import "./about.css";
import HeaderShopContainer from "../../header/Header_shopContainer";
import {Link} from "react-router-dom";
import Footer from "../../footer/Footer";
import Concept from "../main/Concept/Concept";

const About = () => {
    return (
        <>
            <HeaderShopContainer/>
            <main>
                <div className="card__bg">

                    <section className="navigation">
                        <div className="container">
                            <div className="navigation__links">
                                <Link to="/" className="navigation__links-item">Главная</Link>
                                <img src="/img/arrow_left.svg" alt="Стрелка"/>
                                <Link to="/" className="navigation__links-item">O нас</Link>


                            </div>
                        </div>
                    </section>
                    <div className='container'>
                        <h2 className='header-about'>О нас</h2>
                        <div className='text-about-container'>
                            <p className='text-about'>
                                5R. экоline - это магазин эко-товаров и набор пошаговых инструкций,
                                которые сможет изучить и повторить каждый.
                                Мы поможем сформировать системное мышление
                                и сориентируем
                                на пути к осознанной экологичной жизни.</p>
                            <p className='text-about'>Наша цель - доказать, что внедрение в жизнь эко-привычек - это не
                                сложно.</p>
                            <p className='text-about text-about__bold'>Там, где есть понимание проблемы – есть
                                действие!</p>
                        </div>
                    </div>
                    <section className='founder'>
                        <div className='founder-bg'>
                            <div className='container'>
                                <div className='about-founder'>
                                    <div className='block-1'>
                                        <img src="img/founder.png" alt="фото"/>
                                    </div>
                                    <div className='block-2'>
                                        <p className='citata'>“Мы хотим стать магазином, который будет создавать
                                            стиль и гармонию в Вашем доме, а не мусор”</p>
                                        <p className='founder-subscribe'>
                                            <span>Диана</span>
                                            <span>Основатель магазина</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='section-5r'>
                        <div className='container'>
                            <p className='section-5r__title'>В основе нашей идеи лежит концепция 5R:</p>

                            <div className="container">

                                <Concept/>
                                <Link to='/shop'>
                                    <button className="concept__btn">В каталог</button>
                                </Link>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default About;