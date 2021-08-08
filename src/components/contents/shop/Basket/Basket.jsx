import Footer from "../../../footer/Footer";
import HeaderShop from "../../../header/Header_shop";
import "./Basket.css";

const Basket = () => {
   return (
      <>
      <HeaderShop/>
      <section className="basket">
         <div className="navigation"></div>
         <h2 className="main-heading main-heading-basket">Корзина</h2>
         <div className="basket-container">
            <div className="products">
               <div className="products__information"></div>
            </div>


         </div>
      </section>
      <Footer/>
      </>
   );
};

export default Basket;