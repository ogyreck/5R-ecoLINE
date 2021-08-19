import React from "react";
import "./ShopCard.css";
import { Link } from "react-router-dom";
import SvgBtn  from "./SvgBtn";

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

    return (
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
            <SvgBtn/>
            <NEW sale={props.new}/>
            <div className='id'>{props.id}</div>
        </div>
    )
}

export default ShopCard;