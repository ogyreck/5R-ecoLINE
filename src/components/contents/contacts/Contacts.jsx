import "./Contacts.css"
import Footer from "../../footer/Footer";
import HeaderShopContainer from "../../header/Header_shopContainer";
import { Link } from "react-router-dom";
import ContactsInfo from "./contactsInfo/ContactsInfo";
import ContactsForm from "./contactsForm/ContactsForm";

const Contacts = () => {
   return (
      <>
         <HeaderShopContainer />
         <section className="contacts">
            <div className="contacts-bg">
               <div className="container">
                  <div className="navigation__links">
                     <Link to="/" className="navigation__links-item">Главная</Link>
                     <img src="/img/arrow_left.svg" alt="Стрелка" />
                     <Link to="/contacts" className="navigation__links-item">Контакты</Link>
                  </div>
                  <h2 className="main-heading main-heading-contacts">Контакты</h2>
                  <ContactsInfo />
               </div>
               <ContactsForm />
               <div className="contacts__map">
                  <iframe title="iframe" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7159c0a2b22d27336e521d2cc084842740df6b9bc544e713e418c15bf2a9b1d2&amp;source=constructor" width="100%" height="440" frameBorder="0"></iframe>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default Contacts;