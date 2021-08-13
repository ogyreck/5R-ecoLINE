import "./Liked.css"
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import HeaderShopContainer from "../../../header/Header_shopContainer";



const Liked = () => {
   return (
      <>
         <HeaderShopContainer />
         <section className="liked">
            <div className="container">
               <div className="navigation__links liked-navigation__links">
                  <Link to="/" className="navigation__links-item">Главная</Link>
                  <img src="/img/arrow_left.svg" alt="Стрелка" />
                  <Link to="/shop" className="navigation__links-item">Каталог</Link>
                  <img src="/img/arrow_left.svg" alt="Стрелка" />
                  <Link to="/shop/basket" className="navigation__links-item">Корзина</Link>
               </div>
               <h2 className="main-heading main-heading-liked">Избранное</h2>
               <div className="thank__button-container">
                  <Link to="/shop">
                     <button className="thank__button">В каталог</button>
                  </Link>
                  <Link to="/">
                     <button className="thank__button">На главную</button>
                  </Link>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Liked;