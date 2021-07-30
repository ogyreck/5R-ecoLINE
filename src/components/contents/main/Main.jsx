import React from "react";
import Header from "../../header/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="main__title">Стань частью больших изменений</h1>
          <span className="main__subtitle">Поможем сформировать твой персональный план по “спасению мира”</span>
          <div className="main__btn">
            <button className="main__btn-info">Читать</button>
            <button className="main__btn-shop">В магазин</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main;