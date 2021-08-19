// import React from "react";
import "./ShopCards.css";
import {connect} from "react-redux";
import ShopCards from "./ShopCards";
import {addBasketAction, addFavorite} from "../../../../redux/card-reducer";



let mapStateToProps = (state) =>{
    return{
        cardsData: state.cardReducer.cardsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addBasket: (id) =>{
            dispatch(addBasketAction(id))
        },
        addFavorite: (id) =>{
            dispatch(addFavorite(id))
        }

    }
}

const ShopCardsContainer = connect(mapStateToProps, mapDispatchToProps)(ShopCards)

export default ShopCardsContainer;