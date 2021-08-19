import React from "react";
import { NavLink } from "react-router-dom";
import BlogTopics from "../Blog-topics/BlogTopics";
import Footer from "../../../footer/Footer"
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Shop = (props) => {
  return (
    <>
      <HeaderShopContainer />
      <main>
        <div className="container-shop">
          <div className="navigation__links shop-navigation__links">
            <NavLink exact activeClassName="navigation__links-active" to="/" className="navigation__links-item">Главная</NavLink>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <NavLink exact activeClassName="navigation__links-active" to="/shop" className="navigation__links-item">Каталог</NavLink>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <NavLink exact activeClassName="navigation__links-active" to="/shop/zero-waste" className="navigation__links-item">Zero Waste</NavLink>
          </div>
          <h2 className="main-heading main-heading-catalog">Каталог</h2>
          <BlogTopics />
          <h1>Zero Waste</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}





export default Shop;