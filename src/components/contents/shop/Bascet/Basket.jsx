import Footer from "../../../footer/Footer";
import HeaderShop from "../../../header/Header_shop";
import "./Basket.css";
import productCardImage from "../../../../img/product-image.jpg"
import HeaderShopContainer from "../../../header/Header_shopContainer";

const Basket = () => {
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
               <div className="products">
                  <div className="products__cards">
                     <div className="products__card">
                        <img src={ productCardImage } alt="" className="products__card-image" />
                        <div className="products__card-description">Стакан складной Stojo(Розовый)</div>
                        <div className="products__card-price">1 200 ₽</div>
                        <div className="products__card-count">1</div>
                        <div className="products__card-total">1 200 ₽</div>
                        <span class="close"></span>
                     </div>
                     <div className="products__card">
                        <img src={ productCardImage } alt="" className="products__card-image" />
                        <div className="products__card-description">Стакан складной Stojo(Розовый)</div>
                        <div className="products__card-price">1 200 ₽</div>
                        <div className="products__card-count">1</div>
                        <div className="products__card-total">1 200 ₽</div>
                        <span class="close"></span>
                     </div>
                     <div className="products__card">
                        <img src={ productCardImage } alt="" className="products__card-image" />
                        <div className="products__card-description">Стакан складной Stojo(Розовый)</div>
                        <div className="products__card-price">1 200 ₽</div>
                        <div className="products__card-count">1</div>
                        <div className="products__card-total">1 200 ₽</div>
                        <span class="close"></span>
                     </div>
                  </div>
                  <div className="products__promocode"></div>
                  <div className="products__total"></div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Basket;