import Footer from "../../../footer/Footer";
import HeaderShop from "../../../header/Header_shop";
import "./Basket.css";
import Delivery from "./Delivery/Delivery";

import Products from "./Products/Products";

const Basket = () => {
   return (
      <>
         <HeaderShop />
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
               <Products/>
               <Delivery/>
            </div>
            <div className="basket-image"></div>
         </section>
         <Footer />
      </>
   );
};

export default Basket;