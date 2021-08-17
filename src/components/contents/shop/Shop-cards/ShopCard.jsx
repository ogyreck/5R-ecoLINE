import React from "react";
import "./ShopCard.css";
import { Link } from "react-router-dom";
import favorites from "../../../../img/favorites-icon.svg"
// import cardImage from "../../../../img/shop-image.png"
// import { cardAddActionCreator } from "../../../../redux/card-reducer";

const NEW = (props) => {
    if (props.sale) {
        return (<div className="card-new">NEW</div>)
    } else {
        return (<div></div>)
    }

}



const ShopCard = (props) => {

    let addBasket = () => {
        props.addBasket(props.id)
    }

    console.log(props.type)
    return (
        // <Link to="/shop/card">
        
            <div className="shop-card__item">
                <Link to="/shop/card">
                    <img src= {props.img} alt="" className="shop-card__image" />
                </Link>
                <div className="shop-card__content">
                    <Link to="/shop/card">
                        <p className="shop-card__title">{props.name}</p>
                        <div className="shop-card__price">{props.cost} ₽</div>
                    </Link>
                    <div className="card-basket">
                        <button className="shop-card-button"  disabled={props.disable} onClick={addBasket}>{props.inButton}</button>
                    </div>
                </div>
                <div className="shop-card__icons">
                    {/* <Link to="/"> */}
                    <Link to="/shop/favorites">
                        <img src={favorites} alt="избранное" className="shop-basket" />
                    </Link>
                    {/* </Link> */}
                </div>
                <NEW sale={props.new}/>
                <div className='id'>{props.id}</div>
            </div>
        // </Link>

        

    )
}

export default ShopCard;