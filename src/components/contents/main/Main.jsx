import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Footer from "../../footer/Footer";
import "./main.css";
import Purpose from "./Purpose/Purpose";
import Blog from "./Blog/Blog";
import HeaderShopContainer from "../../header/Header_shopContainer";
import Catalog from "./Catalog/Catalog";
import Quizz from "./Quizz/Quizz";
import Animation from "./Animation/Animation";

const Main = ()=> {
    return (
      <>
        <HeaderShopContainer />
        <main>
          <section className="main">
            <div className="container">
              <div className="main__wrapper">
                <h1 className="main__title">“Мы хотим стать магазином, который будет создавать стиль и гармонию в Вашем доме, а не мусор”</h1>
                <Link to="/shop"><button className="main__btn-shop">В каталог</button></Link>
              </div>
            </div>
          </section>
          <Slider />
          <Catalog/>
          <Purpose />
          <Quizz/>
          <Blog />
          <Animation/>
        </main>
        <Footer />
      </>
    )

}

export default Main;