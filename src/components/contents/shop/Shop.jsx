import React from "react";
import { Link } from "react-router-dom";
import "./shop.css";
// import ShopCards from "./Shop-cards/ShopCards";
import BlogTopics from "./Blog-topics/BlogTopics";
// import ShopDescription from "./Shop-description/ShopDescription";
// import HeaderShop from "../../header/Header_shop";
import Footer from "../../footer/Footer";
import ShopCardsContainer from "./Shop-cards/ShopCardsContainer";
import HeaderShopContainer from "../../header/Header_shopContainer";

const Shop = (props) => {
  return (
    <>
      <HeaderShopContainer/>
      <main>
        
        <div className="container-shop">
          {/* <ShopDescription/> */}
          <div className="navigation__links shop-navigation__links">
               <Link to="/" className="navigation__links-item">Главная</Link>
               <img src="/img/arrow_left.svg" alt="Стрелка" />
               <Link to="/shop" className="navigation__links-item">Каталог</Link>
            </div>
          <h2 className="main-heading main-heading-catalog">Каталог товаров</h2>
          <BlogTopics />
          <ShopCardsContainer />
        </div>
      </main>
      <Footer/>
    </>
  )
}





export default Shop;