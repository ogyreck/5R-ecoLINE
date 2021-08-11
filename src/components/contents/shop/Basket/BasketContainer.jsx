import Footer from "../../../footer/Footer";

import "./Basket.css";
import Delivery from "./Delivery/Delivery";


import {connect} from "react-redux";
import Basket from "./Basket";
import {deleteBascetAction} from "../../../../redux/card-reducer";



let mapStateToProps = (state) => {



    return{
        basket: state.basket
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        deleteBascket : (id) =>{
            dispatch(deleteBascetAction(id))
        }
    }
}


const BasketContainer = connect(mapStateToProps,mapDispatchToProps)(Basket)

export default BasketContainer;