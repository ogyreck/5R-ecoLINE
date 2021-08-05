import React, { Component } from "react";
import HeaderMain from "../../header/Header_main";
import Slider from "./Slider/Slider";
import Footer from "../../footer/Footer";
import Quizz from "./Quizz"
import "./main.css";

import css from "./main.css";
import Subscribe from "../shop/Subscribe/Subscribe";

export default class Main extends Component {
  // const Main = () => {
  click() {
    window.location.assign("./shop");
  }

  // componentDidMount = () => {
  //   let card = document.querySelectorAll(".blog__card-item");
  //   let card_visible = document.querySelectorAll(".blog__card-visible");
  //   let card_hover = document.querySelectorAll(".blog__card-hover");
  //   card.forEach(element => {
  //     card_visible.forEach(elem => {
  //       card_hover.forEach(e => {
  //         element.addEventListener('mouseover', (event) => {
  //           event.preventDefault();
  //           element.classList.add('blog__card-hover');
  //           element.classList.remove('blog__card-visible');
  //           elem.style.display = "none";
  //           e.style.display = "block";

  //         });

  //         element.addEventListener('mouseout', (event) => {
  //           event.preventDefault();
  //           element.classList.remove('blog__card-hover');
  //           element.classList.add('blog__card-visible');
  //           elem.style.display = "block";
  //           e.style.display = "none";
  //         });
  //       })
  //     })
  //   });

  // let y = window.pageYOffset;
  // const header = document.getElementById('header');
  // if (y > 100) {
  //   header.style.backgroundColor = "rgba(243, 243, 243, 0.6)";
  // } else {
  //   header.style.backgroundColor = "transparent";
  // }

  // };

  render() {
    return (
      <>
        <HeaderMain />
        <main>
          <section className="main">
            <div className="container">
              <h1 className="main__title">Стань частью больших изменений</h1>
              <span className="main__subtitle">Поможем сформировать твой персональный план по “спасению мира”</span>
              <div className="main__btn">
                <button className="main__btn-info">Читать</button>
                <button className="main__btn-shop">В магазин</button>
              </div>
            </div>
          </section>

          <section className="numbers">
            <h2 className="humbers__heading">Цифры, которые имеют значение</h2>
            <div className="numbers__items">
              <div className="numbers__item">
                <h2 className="numbers__item-heading">4 млн га</h2>
                <p className="numbers__item-description">площадь <br /> свалок в России</p>
              </div>
              <div className="numbers__item">
                <h2 className="numbers__item-heading">8 млн тонн</h2>
                <p className="numbers__item-description">мусора ежегодно <br /> попадает в океан</p>
              </div>
              <div className="numbers__item">
                <h2 className="numbers__item-heading">400 кг</h2>
                <p className="numbers__item-description">мусора производит <br /> человек за один год</p>
              </div>
              <div className="numbers__item">
                <h2 className="numbers__item-heading">200 лет</h2>
                <p className="numbers__item-description">разлагается <br /> полиэтиленовый пакет</p>
              </div>
            </div>
          </section>

          <div className={css.container}>
            <h1 className={css.title}>Sticky slider</h1>
            <div className={css.slider}>
              <Slider />
            </div>
          </div>
          {/* <Slider/> */}

          <section className="video">
            <div className="container video__row">
              <div className="block__video">
                {/* <img className="block__video-url" src="../img/video_preloader.jpg" alt="" /> */}
                <iframe className="block__video-url" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="block__text">
                <div className="block__text-motivation">Жить экологично - это <br />легко, полезно и выгодно!</div>
                <button className="block__text-btn" onClick={() => this.click()}>В магазин</button>
              </div>
            </div>
          </section>

          <Quizz />

          <section className="purpose">
            <div className="container purpose__row">
              <div>
                <h2 className="purpose__title">Наши цели</h2>
                <p className="purpose__text"><strong>ЭКОпорлал 5R.</strong> - это набор пошаговых инструкций и кейсов, которые сможет изучить и повторить каждый. Мы поможем сформировать системное мышление и сориентируем на пути к осознанной экологичной жизни. <br /><br />Наша цель - доказать, что внедрение в жизнь эко-привычек - это не сложно. <br /><br />Там, где есть понимание проблемы – есть действие!</p>
              </div>
            </div>
          </section>

          <section className="concept">
            <div className="container">
                <h2 className="concept__title">Концепция</h2>
                <div className="flex-wrapper-concept">
                  <div className="concept-text">5R</div>
                  <ul className="concept-list">
                    <li className="concept-list__item">
                      <span className="list__item--color">REFUSE </span>- ОТКАЖИСЬ
                    </li>
                    <li className="concept-list__item">
                      <span className="list__item--color">REDUCE </span>- СОКРАТИ
                    </li>
                    <li className="concept-list__item">
                      <span className="list__item--color">REUSE </span>- ПЕРЕИПОЛЬЗУЙ
                    </li>
                    <li className="concept-list__item">
                      <span className="list__item--color">RECYCLE </span>- ПЕРЕРАБОТАЙ
                    </li>
                    <li className="concept-list__item">
                      <span className="list__item--color">ROT </span>- КОМПОСТИРУЙ
                    </li>
                  </ul>
                </div>
              <button className="concept__btn">Читать</button>
            </div>
          </section>

          <section className="blog">
            <div className="blog__bg">
              <div className="container">
                <h2 className="blog__title">Блог</h2>
                <div className="blog__topics">
                  <button className="blog__topic-active">Популярные</button>
                  <button>Ресурсы</button>
                  <button>Отдых</button>
                  <button>Климат</button>
                  <button>Экотехнологии</button>
                  <button>Проблемы</button>
                  <button>Пути решения</button>
                </div>

                <div className="blog__cards">

                  <div className="blog__card-item">
                    <div className="blog__card-visible">
                      <img src="/img/cards/card_1.jpg" alt="" />
                      <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                      <div className="card__info">
                        <div className="card__info-viewers">
                          <img src="/img/eye.svg" alt="" />
                          <span>304</span>
                        </div>
                        <span className="card__info-date">05.07.2021</span>
                      </div>
                    </div>

                    <div className="blog__card-hover">
                      <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                      <button className="card__btn-hover">Читать</button>
                    </div>

                  </div>

                  <div className="blog__card-item">
                    <div className="blog__card-visible">
                      <img src="/img/cards/card_3.jpg" alt="" />
                      <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                      <div className="card__info">
                        <div className="card__info-viewers">
                          <img src="/img/eye.svg" alt="" />
                          <span>304</span>
                        </div>
                        <span className="card__info-date">05.07.2021</span>
                      </div>
                    </div>
                    <div className="blog__card-hover">
                      <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                      <button className="card__btn-hover">Читать</button>
                    </div>
                  </div>

                  <div className="blog__card-item">
                    <div className="blog__card-visible">
                      <img src="/img/cards/card_4.jpg" alt="" />
                      <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                      <div className="card__info">
                        <div className="card__info-viewers">
                          <img src="/img/eye.svg" alt="" />
                          <span>304</span>
                        </div>
                        <span className="card__info-date">05.07.2021</span>
                      </div>
                    </div>
                    <div className="blog__card-hover">
                      <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                      <button className="card__btn-hover">Читать</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          
          <Subscribe/>

        </main>

        <Footer />
      </>
    )
  }
}

// export default Main;