import React from "react";
import ShopCard from "./ShopCard";
import "./ShopCards.css";
// import cardImage from "../../../../img/shop-image.png";
// import {Link} from "react-router-dom";
// import {addBasketAction} from "../../../../redux/card-reducer";

const ShopCards = (props) => {
    let cards = props.cardsData.map(card => <ShopCard key={card.id} name={card.nameCard}
                                                            cost={card.cost}
                                                            img={card.img}
                                                            new={card.sale}
                                                            id = {card.id}
                                                            addBasket={props.addBasket}
                                                            disable={card.disable}
                                                            inButton={card.inButton}
                                                            type={card.type}
    />)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="shop-cards">
                {cards}
            </div>
            <div className="blog-up">
                <span onClick={scrollTop} >Наверх</span>
                <img src="img/blog/arrow.svg" alt="" />
            </div>
        </>
    )
}

export default ShopCards;