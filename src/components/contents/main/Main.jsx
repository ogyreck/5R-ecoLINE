import React, { Component } from "react";
import HeaderMain from "../../header/Header_main";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Quizz from "./Quizz"
import "./main.css";

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

          <section className="video">
            <div className="container video__row">
              <div className="block__video">
                {/* <img className="block__video-url" src="../img/video_preloader.jpg" alt="" /> */}
                <iframe className="block__video-url" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="block__text">
                <div className="block__text-motivation">Жить экологично - это <br/>легко, полезно и выгодно!</div>
                <button className="block__text-btn" onClick={() => this.click()}>В магазин</button>
              </div>
            </div>

          </section>

          <Quizz/>

          <section className="purpose">
            <div className="container purpose__row">
              <div>
                <h2 className="purpose__title">Наши цели</h2>
                <p className="purpose__text"><strong>ЭКОпорлал 5R.</strong> - это набор пошаговых инструкций и кейсов, которые сможет изучить и повторить каждый. Мы поможем сформировать системное мышление и сориентируем на пути к осознанной экологичной жизни. <br /><br />Наша цель - доказать, что внедрение в жизнь эко-привычек - это не сложно. <br /><br />Там, где есть понимание проблемы – есть действие!</p>
              </div>
              <div>
                <img className="purpose__img-after" src="./img/photo_after.jpg" alt="" />
                <img className="purpose__img-before" src="./img/photo_before.jpg" alt="" />
              </div>
            </div>
          </section>

          <section className="concept">
            <div className="container">

              <div className="concept__row">
                <h2 className="concept__title">Концепция</h2>
                <img className="concept__img" src="/img/5R.png" alt="" />
                <div className="concept__words">
                  <span><span>REFUSE</span> - ОТКАЖИСЬ</span>
                  <span><span>REDUCE</span> - СОКРАТИ</span>
                  <span><span>REUSE</span> - ПЕРЕИПОЛЬЗУЙ</span>
                  <span><span>RECYCLE</span> - ПЕРЕРАБОТАЙ</span>
                  <span><span>ROT</span> - КОМПОСТИРУЙ</span>
                </div>
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
                      <span className="card__title">Война за воду. <br/>Является ли эта угроза реальной?</span>
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

          <section className="subscribe">
            <div className="container subscribe__row">
              <img className="subscribe__title" src="/img/form_img.png" alt="" />
              {/* <h2 className="subscribe__title">Будьте в курсе последних эко-событий</h2> */}
              <div className="form">
                <input className="form__input" type="email" placeholder="Email"/>
                <button className="form__btn">Подписаться</button>
                <br/>
                <span className="form__text">Нажимая кнопку "Подписаться", Вы даете<br /> согласие на <Link to="/" className="form__text-link">обработку персональных данных</Link></span>
              </div>
            </div>
          </section>

        </main>

        <Footer/>
      </>
    )
  }
}

// export default Main;