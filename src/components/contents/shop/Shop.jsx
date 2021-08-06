import React from "react";
import HeaderShop from "../../header/Header_shop";
import "./shop.css";
import ShopCards from "./Shop-cards/ShopCards";
import BlogTopics from "./Blog-topics/BlogTopics";
import ShopDescription from "./Shop-description/ShopDescription";
import Discount from "./Discount/Discount";
import HeaderShop from "../../header/Header_shop";
import Footer from "../../footer/Footer";
import Subscribe from "./Subscribe/Subscribe";

const Shop = () => {
  return (
    <>
      <HeaderShop />
      <main>
        <Discount/>
        <div className="container-shop">
          <ShopDescription/>
          <h2 className="main-heading main-heading-catalog">Каталог товаров</h2>
          <BlogTopics />
          <ShopCards />
         <Subscribe/>
        </div>
      </main>
      <Footer/>
    </>
  )
}





export default Shop;