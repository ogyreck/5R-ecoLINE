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
         <div className="products__card-count">1</div>{/* до бавить чтоб улетало на стейт*/}

         <div className="products__card-total">{props.cost} ₽</div>
         <span className="close" onClick={deleteBascet}></span>
      </div>
   );
};

export default Product;