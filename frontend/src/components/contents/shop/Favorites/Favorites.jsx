import React from "react"
import "./Favorites.css"
import { Link, NavLink } from "react-router-dom";
import Footer from "../../../footer/Footer";
import HeaderShopContainer from "../../../header/Header_shopContainer";
// import ShopCard from "../Shop-cards/ShopCard";
import FavoriteCard from "./FavoriteCard";



const Favorites = () => {
   return (
      <>
         <HeaderShopContainer />
         <section className="liked">
            <div className="container">
               <div className="navigation__links liked-navigation__links">
                  <NavLink exact activeClassName="navigation__links-active" to="/" className="navigation__links-item">Главная</NavLink>
                  <img src="/img/arrow_left.svg" alt="Стрелка" />
                  <NavLink exact activeClassName="navigation__links-active" to="/shop" className="navigation__links-item">Каталог</NavLink>
                  <img src="/img/arrow_left.svg" alt="Стрелка" />
                  <NavLink exact activeClassName="navigation__links-active" to="/shop/favorites" className="navigation__links-item">Избранное</NavLink>
               </div>
               <h2 className="main-heading main-heading-liked">Избранное</h2>

               <div className="shop-cards">
                  <FavoriteCard/>
                  <FavoriteCard/>
                  <FavoriteCard/>
                  {/* <ShopCard /> */}
                  {/* <ShopCard /> */}
                  {/* <ShopCard /> */}
                  {/* <ShopCard /> */}
               </div>

               <div className="button-container favorites_buttons">
                  <Link to="/shop">
                     <button className="button button--default">В каталог</button>
                  </Link>
                  <Link to="/">
                     <button className="button button--main">На главную</button>
                  </Link>
               </div>
            </div>
         </section>
         
         <Footer />
      </>
   );
};

export default Favorites;