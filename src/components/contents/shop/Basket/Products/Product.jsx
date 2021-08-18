// import React, {useRef} from "react"
import "./Product.css"
import {Link} from "react-router-dom"

const Product = (props) => {


   let deleteBascet = () =>{
      props.deleteBascket(props.id)
   }




   function addCount() {
       props.countPlius(props.id)

   }
   
   function delCount() {
       props.countMines(props.id)

   }




   return (
      <div className="products__card">
         <img src={props.img} alt="" className="products__card-image" />
         <Link to="/shop/card"><div className="products__card-description">{props.nameCard}</div></Link>
         <div className="products__card-price">{props.cost} ₽</div>
         <div className="products__card-count">
            <button className="card__count-btn" onClick={delCount}>−</button>
            <span className='card__count'>{props.count}</span>
            <button className="card__count-btn" onClick={addCount}>+</button>
         </div>
         <div className="products__card-total">{props.cost * props.count} ₽</div>
         <span className="close" onClick={deleteBascet}></span>
      </div>
   );
}

export default Product;