import Product from "./Product"
import "./Products.css"

const Noting = () => {
   return (
      <span className='noting'>Корзина пустая</span>
   )
}

const Products = (props) => {
   console.log(props)
   let productBasKet = props.basket.map(product => <Product key={product.id}
      nameCard={product.nameCard}
      cost={product.cost} id={product.id}
      deleteBascket={props.deleteBascet} />)

   return (
      <div className="products">
          <ul className="basket__information">
                  <li className="basket__information-item">Продукт</li>
                  <li className="basket__information-item">Цена</li>
                  <li className="basket__information-item">Количество</li>
                  <li className="basket__information-item">Сумма</li>
               </ul>
         <div className="products__cards">
            {productBasKet.length >= 1 ? productBasKet : <Noting />}
         </div>
         <hr className="products__line" />
         <div className="flex-wrapper">
            <div className="products__promocode">
               <form action="#" method="GET">
                  <input type="text" name="promo" placeholder="Введите промокод" />
                  <button type="submit">Применить</button>
               </form>
            </div>
            <div className="flex-product-total-wrapper">
               <p className="products__sale">Скидка: <span>150 ₽</span></p>
               <p className="products__total">Сумма заказа: <span>1 500 ₽</span></p>
            </div>
         </div>
      </div>
   );
};

export default Products;