import React from "react";
import Header from "../../header/Header";
import Quizz from "./Quizz"
import "./main.css";

const Main = () => {
  const click = () => {
    window.location.assign("./shop");
  }
  return (
    <>
      <Header />
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
              <iframe className="block__video-url" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="block__text">
              <div className="block__text-motivation">Жить экологично - это <br/>легко, полезно и выгодно!</div>
              <button className="block__text-btn" onClick={click}>В магазин</button>
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

      </main>
    </>
  )
}

export default Main;