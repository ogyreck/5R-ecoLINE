import "./Product.css"
import productCardImage from "../../../.././../img/product-image.jpg"

const Product = () => {
   return (
      <div className="products__card">
         <img src={productCardImage} alt="" className="products__card-image" />
         <div className="products__card-description">Стакан складной Stojo(Розовый)</div>
         <div className="products__card-price">1 200 ₽</div>
         <div className="products__card-count">1</div>
         <div className="products__card-total">1 200 ₽</div>
         <span class="close"></span>
      </div>
   );
};

export default Product;