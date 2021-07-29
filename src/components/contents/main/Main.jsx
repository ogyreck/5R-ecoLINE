import React from "react";
import Header from "../../header/Header";
import "./main.css";

const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <h1>Стань частью больших изменений</h1>
          <span>Поможем сформировать твой персональный план по “спасению мира”</span>
        </div>
      </main>
    </>
  )
}

export default Main;