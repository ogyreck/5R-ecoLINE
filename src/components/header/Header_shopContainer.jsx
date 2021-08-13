// import React from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import {connect} from "react-redux";
import HeaderShop from "./Header_shop";


let mapStateToProps = (state) =>{
 return{
   inBasket: state.basketLenght
 }
}
let mapDispatchToProps = (dispatch) =>{
 return{}
}

const HeaderShopContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderShop);
export default HeaderShopContainer;