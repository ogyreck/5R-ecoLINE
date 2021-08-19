import Footer from "../../../footer/Footer";
import "./Basket.css";
import Delivery from "./Delivery/Delivery";
import { NavLink } from "react-router-dom";
import Products from "./Products/Products";
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Basket = (props) => {
   return (
      <>
         <HeaderShopContainer />
         <section className="basket">
            <div className="container">
            <div className="navigation__links basket-navigation__links">
               <NavLink exact activeClassName="navigation__links-active" to="/" className="navigation__links-item">Главная</NavLink>
               <img src="/img/arrow_left.svg" alt="Стрелка" />
               <NavLink exact activeClassName="navigation__links-active" to="/shop" className="navigation__links-item">Каталог</NavLink>
               <img src="/img/arrow_left.svg" alt="Стрелка" />
               <NavLink exact activeClassName="navigation__links-active" to="/shop/basket" className="navigation__links-item">Корзина</NavLink>
            </div>
            <h2 className="main-heading main-heading-basket">Корзина</h2>
            </div>
            <div className="basket-container">
               <Products basket={props.basket}
                         deleteBascet={props.deleteBascket}
                         countPlius={props.countPlius}
                         countMines={props.countMines}/>
               <Delivery />
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Basket;