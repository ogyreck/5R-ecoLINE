import React from "react";
import ShopCard from "./ShopCard";
import "./ShopCards.css";
import cardImage from "../../../../img/shop-image.png";
import {Link} from "react-router-dom";

const ShopCards = (props) => {
    console.log(props.state.cardsData)

    let cards = props.state.cardsData.map(card => <ShopCard name={card.nameCard}
                                                            cost={card.cost}
                                                            img={card.img}
                                                            new={card.sale}/>)

    return (
        <>
            <div className="shop-cards">
                {cards}
            </div>
        </>
    )
}

export default ShopCards;