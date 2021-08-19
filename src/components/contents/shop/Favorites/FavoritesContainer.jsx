import React from "react"
import "./Favorites.css"
import { Link } from "react-router-dom";
import Footer from "../../../footer/Footer";
import HeaderShopContainer from "../../../header/Header_shopContainer";
import {addBasketAction, addFavorite, delFavorite} from "../../../../redux/card-reducer";
import {connect} from "react-redux";
import ShopCards from "../Shop-cards/ShopCards";
import Favorites from "./Favorites";






let mapStateToProps = (state) =>{
   return{
      favorite: state.cardReducer.favorite
   }
}
let mapDispatchToProps = (dispatch) => {
   return{
      addBasket: (id) =>{
         dispatch(addBasketAction(id))
      },
      delFavorite: (id) =>{
         dispatch(delFavorite(id))
      }

   }
}

const FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites)



export default FavoritesContainer;