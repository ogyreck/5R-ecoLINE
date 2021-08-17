import Footer from "../../../footer/Footer";
import "./Basket.css";
import Delivery from "./Delivery/Delivery";
import { Link } from "react-router-dom";
import Products from "./Products/Products";
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Basket = (props) => {
   console.log(props, 'props - Basket')
   return (
      <>
         <HeaderShopContainer />
         <section className="basket">
            <div className="container">
            <div className="navigation__links basket-navigation__links">
               <Link to="/" className="navigation__links-item">Главная</Link>
               <img src="/img/arrow_left.svg" alt="Стрелка" />
               <Link to="/shop" className="navigation__links-item">Каталог</Link>
               <img src="/img/arrow_left.svg" alt="Стрелка" />
               <Link to="/shop/basket" className="navigation__links-item">Корзина</Link>
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
            {/* <div className="basket-image"></div> */}
         </section>
         <Footer />
      </>
   );
};

export default Basket;