import React, { Component } from "react";
// import HeaderMain from "../../header/Header_main";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Footer from "../../footer/Footer";
import Quiz from "../main/Quiz/Quiz"
import "./main.css";

import Subscribe from "../shop/Subscribe/Subscribe";
import Numbers from "./Numbers/Numbers";
import Purpose from "./Purpose/Purpose";
import Concept from "./Concept/Concept";
import Blog from "./Blog/Blog";
import HeaderShopContainer from "../../header/Header_shopContainer";


export default class Main extends Component {

  // click() {
  //   window.location.assign("./shop");
  // }





  render() {
    return (
      <>
        <HeaderShopContainer />
        <main>
            <section className="main">
              <div className="container">
                <h1 className="main__title">Стань частью больших изменений</h1>
                <span className="main__subtitle">Поможем сформировать твой персональный план по “спасению мира”</span>
                <div className="main__btn">
                  <button className="main__btn-info">Читать</button>
                  <Link to="/shop"> <button className="main__btn-shop">В магазин</button></Link>
                </div>
              </div>
            </section>
          <Numbers />
          <Slider />
          {/* <section className="video">
            <div className="container video__row">
              <div className="block__video">
                <img className="block__video-url" src="../img/video_preloader.jpg" alt="" />
                <iframe className="block__video-url" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="block__text">
                <div className="block__text-motivation">Жить экологично - это <br />легко, полезно и выгодно!</div>
                <button className="block__text-btn" onClick={() => this.click()}>В магазин</button>
              </div>
            </div>
          </section> */}
          <Quiz />
          <Purpose />
          <Concept />
          <Blog />
          <Subscribe />
        </main>
        <Footer />
      </>
    )
  }
}


// export default Main;