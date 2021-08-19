import "./Animation.css";
import Bad from "../../../../../src/img/animation/bad.png"
import Arrow from "../../../../../src/img/animation/arrl.PNG"
import Good from "../../../../../src/img/animation/good.png"
import { Link } from "react-router-dom";

const Animation = () => {
   return (
      <section className="animation">
         <div className="animation__image-first">
            <img className="image__bad animation__image" src={Bad} alt="" />
            <p className="animation__text">Сделай правильный выбор<br/> ради лучшего будущего</p>
            <img className="animation__text animation__arrow" src={Arrow} alt="" />
         </div>
         <div className="animation__image-second">
            <img className="image__good animation__image" src={Good} alt="" />
            <p className="animation__text animation__text-second">Стань частью больших <br/>изменений</p>
            <Link to="/shop"><button className="animation__text animation__button">В каталог</button></Link>
         </div>
      </section>
   );
};

export default Animation;