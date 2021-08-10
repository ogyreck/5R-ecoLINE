import React from "react";

import "./shop.css";
import ShopCards from "./Shop-cards/ShopCards";
import BlogTopics from "./Blog-topics/BlogTopics";
import ShopDescription from "./Shop-description/ShopDescription";
import Discount from "./Discount/Discount";
import HeaderShop from "../../header/Header_shop";
import Footer from "../../footer/Footer";
import Subscribe from "./Subscribe/Subscribe";
import ShopCardsContainer from "./Shop-cards/ShopCardsContainer";
import HeaderShopContainer from "../../header/Header_shopContainer";

const Shop = (props) => {
  return (
    <>
      <HeaderShopContainer/>
      <main>
        <Discount/>
        <div className="container-shop">
          {/* <ShopDescription/> */}
          <h2 className="main-heading main-heading-catalog">Каталог товаров</h2>
          <BlogTopics />
<<<<<<< HEAD
          <ShopCards state={props.state} dispatch={props.dispatch}/>
         {/* <Subscribe/> */}
=======
          <ShopCardsContainer />
         <Subscribe/>
>>>>>>> dev4
        </div>
      </main>
      <Footer/>
    </>
  )
}





export default Shop;