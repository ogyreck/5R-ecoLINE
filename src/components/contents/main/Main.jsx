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

        <section className="blockWithVideo">
          <div className="sectionWithVideo">
            <iframe className="video" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="textAndButton">
            <div className="motivationText">Жить экологично - это легко, полезно и выгодно!</div>
            <button className="buttonToShop" onClick={click}>В магазин</button>
          </div>
        </section>

        <Quizz/>
      </main>
    </>
  )
}

export default Main;