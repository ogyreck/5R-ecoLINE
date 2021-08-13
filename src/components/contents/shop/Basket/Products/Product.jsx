import "./Product.css"
import productCardImage from "../../../.././../img/product-image.jpg"

const Product = (props) => {

   let deleteBascet = () =>{
      props.deleteBascket(props.id)
   }

   return (
      <div className="products__card">
         <img src={productCardImage} alt="" className="products__card-image" />
         <div className="products__card-description">{props.nameCard}</div>
         <div className="products__card-price">{props.cost} ₽</div>
         {/* <span className="card__count-switch">
            <button onClick={this.delCount.bind(this)} className="card__count-btn">−</button>
            <input className="card__count" disabled type="text" ref={(input) => this.testInput = input} value="1" min="1" max="10" />
            <button onClick={this.addCount.bind(this)} className="card__count-btn" >+</button>
         </span> */}
         
         <button>-</button>
         <div className="products__card-count">1</div>
         <button>+</button>

         <div className="products__card-total">{props.cost} ₽</div>
         <span className="close" onClick={deleteBascet}></span>
      </div>
   );
};

export default Product;