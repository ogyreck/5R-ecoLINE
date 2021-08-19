// import Footer from "../../../footer/Footer";

import "./Basket.css";
// import Delivery from "./Delivery/Delivery";

// import Products from "./Products/Products";
// import HeaderShopContainer from "../../../header/Header_shopContainer";
import {connect} from "react-redux";
import Basket from "./Basket"; 
import {countMinuseBasketAction, countPlusBasketAction, deleteBascetAction} from "../../../../redux/card-reducer";



let mapStateToProps = (state) => {


    return{
        basket: state.cardReducer.basket
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        deleteBascket : (id) =>{
            dispatch(deleteBascetAction(id))
        },
        countPlius: (id) =>{
            dispatch(countPlusBasketAction(id))
        },
        countMines: (id) =>{
            dispatch(countMinuseBasketAction(id))
        }

    }
}


const BasketContainer = connect(mapStateToProps,mapDispatchToProps)(Basket)

export default BasketContainer;