import "./ThankYou.css";
import Footer from "../../../../footer/Footer";
import HeaderShopContainer from "../../../../header/Header_shopContainer";
import { Link } from "react-router-dom";

const ThankYou = () => {
   return (
      <>
         <HeaderShopContainer />
         <section className="thank">
            <div className="container">
               <h2 className="main-heading main-heading-thank">Спасибо!</h2>
               <p className="thank-text">Заказ успешно оформлен! Мы свяжемся с Вами в ближайшее время. <br /> Номер вашего заказа #10932</p>
               <div className="button-container">
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

export default ThankYou;