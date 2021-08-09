import React from "react";
import ShopCard from "./ShopCard";
import "./ShopCards.css";
import cardImage from "../../../../img/shop-image.png";
import {Link} from "react-router-dom";
import {addBasketAction} from "../../../../redux/card-reducer";

const ShopCards = (props) => {

    let cards = props.cardsData.map(card => <ShopCard name={card.nameCard}
                                                            cost={card.cost}
                                                            img={card.img}
                                                            new={card.sale}
                                                            id = {card.id}
                                                            addBasket={props.addBasket}
                                                            disable={card.disable}
                                                            inButton={card.inButton}
    />)

    return (
        <>
            <div className="shop-cards">
                {cards}
            </div>
        </>
    )
}

export default ShopCards;