import Footer from "../../../footer/Footer";

import "./Basket.css";
import Delivery from "./Delivery/Delivery";

import Products from "./Products/Products";
import HeaderShopContainer from "../../../header/Header_shopContainer";
import {connect} from "react-redux";
import Basket from "./Basket";



let mapStateToProps = (state) => {
    return{
        basket: state.basket
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{

    }
}


const BasketContainer = connect(mapStateToProps,mapDispatchToProps)(Basket)

export default BasketContainer;