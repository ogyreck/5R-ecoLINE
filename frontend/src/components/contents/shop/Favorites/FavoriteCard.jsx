import React from "react";
// import "./ShopCard.css";
import { Link } from "react-router-dom";


const FavoriteCard = () => {

  // let addBasket = () => {
  //   props.addBasket(props.id)
  // }

  // const favorites = () => {
  //   console.log("click");
  // }


  return (

    <div className="shop-card__item">
      <Link to="/shop/card">
        <img src="img/cards-in-shop/card1.png" alt="" className="shop-card__image" />
      </Link>
      <div className="shop-card__content">
        <Link to="/shop/card">
          <p className="shop-card__title">Ершик кокосовый для чистки бутылок</p>
          <div className="shop-card__price">440 ₽</div>
        </Link>
        <div className="card-basket">
          <button className="shop-card-button" >В корзину</button>
        </div>
      </div>

      <button className="shop-card__icons-favorite">
        <svg className='shop_favorite-icon' width="23" height="20" >
          <use xlinkHref="/sprite.svg#favorites"></use>
        </svg>
      </button>

      {/* <NEW sale={props.new} /> */}
      <div className='id'></div>
    </div>
    // </Link>



  )
}

export default FavoriteCard;