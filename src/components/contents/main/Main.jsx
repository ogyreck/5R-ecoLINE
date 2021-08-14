import React, { Component } from "react";
// import HeaderMain from "../../header/Header_main";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Footer from "../../footer/Footer";
// import Quiz from "../main/Quiz/Quiz"
import "./main.css";

// import Subscribe from "../shop/Subscribe/Subscribe";
// import Numbers from "./Numbers/Numbers";
import Purpose from "./Purpose/Purpose";
// import Concept from "./Concept/Concept";
import Blog from "./Blog/Blog";
import HeaderShopContainer from "../../header/Header_shopContainer";
import Catalog from "./Catalog/Catalog";
import Test from "./Test/Test";


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
              <h1 className="main__title">“Мы хотим стать магазином, который будет создавать стиль и гармонию в Вашем доме, а не мусор”</h1>
                {/* <span className="main__subtitle">Поможем сформировать твой персональный план по “спасению мира”</span> */}
                {/* <div className="main__btn"> */}
                  {/* <button className="main__btn-info">Читать</button> */}
                  <Link to="/shop"><button className="main__btn-shop">В каталог</button></Link>
                {/* </div> */}
              </div>
            </section>
          {/* <Numbers /> */}
          <Slider />
          {/* <Quiz /> */}
          <Catalog/>
          <Purpose />
          <Test/>

          {/* <Concept /> */}
          <Blog />
          {/* <Subscribe /> */}
        </main>
        <Footer />
      </>
    )
  }
}


// export default Main;