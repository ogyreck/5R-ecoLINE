import Product from "./Product"
import "./Products.css"

const Products = () => {
   return (
      <div className="products">
         <div className="products__cards">
            <Product/>
            <Product/>
         </div>
         <hr className="products__line" />
         <div className="flex-wrapper">
            <div className="products__promocode">
               <form action="#" method="GET">
                  <input type="text" name="promo" placeholder="Введите промокод" />
                  <button type="submit">Применить</button>
               </form>
            </div>
            <p className="products__total">Сумма заказа: <span>1 500 ₽</span></p>
         </div>
      </div>
   );
};

export default Products;