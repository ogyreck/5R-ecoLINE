import React from "react";
import { NavLink } from "react-router-dom";
// import "./shop.css";
// import ShopCards from "./Shop-cards/ShopCards";
import BlogTopics from "../Blog-topics/BlogTopics";
// import ShopDescription from "./Shop-description/ShopDescription";
// import HeaderShop from "../../header/Header_shop";
import Footer from "../../../footer/Footer";
// import ShopCardsContainer from "../Shop-cards/ShopCardsContainer";
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Shop = (props) => {
  return (
    <>
      <HeaderShopContainer />
      <main>
        <div className="container-shop">
          {/* <ShopDescription/> */}
          <div className="navigation__links shop-navigation__links">
            <NavLink exact activeClassName="navigation__links-active" to="/" className="navigation__links-item">Главная</NavLink>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <NavLink exact activeClassName="navigation__links-active" to="/shop" className="navigation__links-item">Каталог</NavLink>
            <img src="/img/arrow_left.svg" alt="Стрелка" />
            <NavLink exact activeClassName="navigation__links-active" to="/shop/cosmetics" className="navigation__links-item">Косметика</NavLink>
          </div>
          <h2 className="main-heading main-heading-catalog">Каталог</h2>
          <BlogTopics />
          <h1>Cosmetics</h1>
        </div>
      </main>
      <Footer/>
    </>
  )
}





export default Shop;