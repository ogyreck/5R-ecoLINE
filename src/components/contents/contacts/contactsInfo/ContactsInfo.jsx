import "./ContactsInfo.css"
import imageGeo from "../../../../../src/img/geo.svg";
import imageTel from "../../../../../src/img/tel.svg";
import imageEmail from "../../../../../src/img/email.svg";
import { Link } from "react-router-dom"

const ContactsInfo = () => {
   return (
      <>
         <div className="contacts__info">
            <div className="contacts__info-item">
               <img src={imageGeo} alt="" />
               <div className="item-text">
                  <span>Адрес:</span>
                  <p>Пушкинская 282, г. Ижевск, Россия</p>
               </div>
            </div>
            <div className="contacts__info-item contacts__tel">
               <img src={imageTel} alt="" />
               <div className="item-text">
                  <span>Телефон:</span>
                  <p>+7 (912) 017-22-72</p>
               </div>
            </div>
            <div className="contacts__info-item">
               <img src={imageEmail} alt="" />
               <div className="item-text">
                  <span>E-mail:</span>
                  <p>Ecoline18@mail.ru</p>
               </div>
            </div>
         </div>
         <div className="contacts__social">
            <p>Подписывайтесь на наши соцсети:</p>
            <div className="contacts__social-icon">
               <Link target="_blank" to="https://vk.com/">
                  <svg width="55" height="55">
                     <use xlinkHref="sprite.svg#vk"></use>
                  </svg>
               </Link>
               <Link target="_blank" to="https://www.instagram.com/">
                  <svg width="55" height="55">
                     <use xlinkHref="sprite.svg#instagram"></use>
                  </svg>
               </Link>
               <Link target="_blank" to="https://web.telegram.org/">
                  <svg width="55" height="55">
                     <use xlinkHref="sprite.svg#telegram"></use>
                  </svg>
               </Link>
            </div>
         </div>
      </>
   );
};

export default ContactsInfo;