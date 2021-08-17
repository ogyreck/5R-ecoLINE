import "./Animation.css";
import Bad from "../../../../../src/img/animation/bad.png"
import Arrow from "../../../../../src/img/animation/arrl.PNG"
import Good from "../../../../../src/img/animation/good.png"
import { Link } from "react-router-dom";


const Animation = () => {
   return (
      <div className="animation-wrapp">
         <section class="animation">
            <div class="animation__image-first">
               <img class="image__bad animation__image" src={Bad} alt="" />
               <p class="animation__text">Сделай правильный выбор ради лучшего будущего</p>
               <img class="animation__text animation__arrow" src={Arrow} alt="" />
            </div>
            <div class="animation__image-second">
               <img class="image__good animation__image" src={Good} alt="" />
               <p class="animation__text animation__text-second">Стань частью больших изменений</p>
               <Link to ="/shop"><button class="animation__text animation__button">В каталог</button></Link>
            </div>
         </section>
      </div>
   );
};

export default Animation;