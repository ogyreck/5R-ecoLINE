import { Link } from "react-router-dom";
import "./Subscribe.css"

const Subscribe = () => {
   return (
      <section className="subscribe">
         <div className="container subscribe__row">
            <h2 className="main-heading main-heading-subscribe">Будьте в курсе <br /> последних эко-событий</h2>
            <form className="form">
               <input className="form__input" required type="email" placeholder="Email" />
               <button type="submit" className="form__btn">Подписаться</button>
               <br />
               <span className="form__text">Нажимая кнопку "Подписаться", Вы даете согласие на <Link to="/" className="form__text-link">обработку персональных данных</Link></span>
            </form>
         </div>
      </section>
   );
};

export default Subscribe;