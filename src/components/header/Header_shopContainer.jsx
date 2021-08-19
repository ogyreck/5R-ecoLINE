import "./header.css";
import {connect} from "react-redux";
import HeaderShop from "./Header_shop";

let mapStateToProps = (state) =>{
  return{
    inBasket: state.cardReducer.basketLenght
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{}
}

const HeaderShopContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderShop);
export default HeaderShopContainer;