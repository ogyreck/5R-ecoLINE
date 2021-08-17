import "./ShopDescription.css";

const ShopDescription = () => {
   return (
      <div className="shop-description">
         <h2 className="main-heading main-heading-shop">Эко-магазин</h2>
         <p className="subtitle">Эко-магазин 5R. - это самые необходимые товары для того, чтобы начать следовать философии Zero Waste.</p>
         <p className="list-subtitle">В нашем магазине можно найти:</p>
         <ul className="shop-list">
            <li className="shop-list__item">Многоразовую альтернативу всему одноразовому;</li>
            <li className="shop-list__item">Уходовую косметику;</li>
            <li className="shop-list__item">Средства бытовой НЕхимии без упаковки</li>
            <li className="shop-list__item">Товары из вторсырья.</li>
         </ul>
         <p className="list-subtitle">Особенности магазина:</p>
         <ul className="shop-list shop-list--second">
            <li className="shop-list__item">Составы продукции не содержат ингредиентов животного происхождения;</li>
            <li className="shop-list__item">Мы снижаем нагрузку на окружающую среду: минимум упаковки / упаковка может быть переработана;</li>
            <li className="shop-list__item">Для упаковки посылок используем коробки, оставшиеся от поставок.</li>
         </ul>
      </div>
   );
};

export default ShopDescription;