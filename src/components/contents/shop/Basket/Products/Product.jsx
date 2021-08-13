import React, {useRef} from "react"
import "./Product.css"
import productCardImage from "../../../.././../img/product-image.jpg"

const Product = (props) => {

   let deleteBascet = () =>{
      props.deleteBascket(props.id)
   }

   const textInput = useRef(null);

   function addCount() {
      textInput.current.value = Number(textInput.current.value) + 1;
   }
   
   function delCount() {
      if (textInput.current.value <= 1) {
         textInput.current.value = 1;
      } else {
         textInput.current.value = Number(textInput.current.value) - 1;
      }
   }

   return (
      <div className="products__card">
         <img src={productCardImage} alt="" className="products__card-image" />
         <div className="products__card-description">{props.nameCard}</div>
         <div className="products__card-price">{props.cost} ₽</div>
         <div className="products__card-count">
            <button className="card__count-btn" onClick={delCount}>−</button>
            <input ref={textInput} className="card__count " disabled type="text" value="1" />
            <button className="card__count-btn" onClick={addCount}>+</button>
         </div>
         <div className="products__card-total">{props.cost} ₽</div>
         <span className="close" onClick={deleteBascet}></span>
      </div>
   );
};

export default Product;