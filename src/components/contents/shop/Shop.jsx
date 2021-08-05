import React from "react";
import Header from "../../header/Header";
import "./shop.css";
import ShopCards from "./Shop-cards/ShopCards";
import BlogTopics from "./Blog-topics/BlogTopics";
import ShopDescription from "./Shop-description/ShopDescription";
import Discount from "./Discount/Discount";

const Shop = () => {
  return (
    <>
      <Header />
      <main>
        <Discount/>
        <div className="container-shop">
          <ShopDescription/>
          <h2 className="main-heading main-heading-catalog">Каталог товаров</h2>
          <BlogTopics />
          <ShopCards />
        </div>
      </main>
    </>
  )
}





export default Shop;