import Footer from "../../../footer/Footer";
import "./Basket.css";
import Delivery from "./Delivery/Delivery";

import Products from "./Products/Products";
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Basket = (props) => {
   console.log(props, 'props - Basket')
   return (
      <>
         <HeaderShopContainer />
         <section className="basket">
            <div className="navigation"></div>
            <h2 className="main-heading main-heading-basket">Корзина</h2>
            <div className="basket-container">
               <ul className="basket__information">
                  <li className="basket__information-item">Продукт</li>
                  <li className="basket__information-item">Цена</li>
                  <li className="basket__information-item">Количество</li>
                  <li className="basket__information-item">Сумма</li>
               </ul>
               <Products basket={props.basket} deleteBascet = {props.deleteBascket}/>
               <Delivery/>
            </div>
            <div className="basket-image"></div>
         </section>
         <Footer />
      </>
   );
};

export default Basket;