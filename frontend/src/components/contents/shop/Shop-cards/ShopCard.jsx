import React from "react";
import "./ShopCard.css";
import { Link } from "react-router-dom";
// import favorites from "../../../../img/favorites-icon.svg"
// import cardImage from "../../../../img/shop-image.png"
// import { cardAddActionCreator } from "../../../../redux/card-reducer";
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

    // let btn = React.createRef();
    // let svg = React.createRef();

    // const favorites = (e) => {
    //     btn.current.style.opacity = "1";
    //     svg.current.style.fill = "#C28686";
    //     svg.current.style.stroke = "#C28686";
    //     // e.target
    // }

    // console.log(props.type)
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

                {/* <button onClick={favorites} ref={btn} className="shop-card__icons">
                    <svg className='shop_favorite' ref={svg} width="23" height="20" >
                        <use xlinkHref="/sprite.svg#favorites"></use>
                    </svg>
                </button> */}

                <NEW sale={props.new}/>
                <div className='id'>{props.id}</div>
            </div>
        // </Link>

        

    )
}

export default ShopCard;