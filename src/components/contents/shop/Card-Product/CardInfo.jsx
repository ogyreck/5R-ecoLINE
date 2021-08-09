import React, { Component} from "react";
import "./cardProduct.css";

import AddCount from "./AddCount.js";
import DelCount from "./DelCount.js";

// const CardInfo = (props) =>{
export default class CardInfo extends Component {

  // constructor(props) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }

  // addProduct() {
  //   // this.myRef.current.focusTextInput();
  //   // const node = this.myRef.current;
  //   console.log(this.myRef.current);
  // }
  
  // const textInput = useRef(null);

  // function handleClick() {
  //   textInput.current.focus();
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     username: ''
  //   }

  //   this.updateInput = this.updateInput.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // updateInput(event) {
  //   this.setState({ username: event.target.value })
  // }

  // handleSubmit() {
  //   console.log('Your input value is: ' + this.state.username)
  //   //Send state to the server code
  // }

  render(){
    return (
      <div className="card-info">
        <p className="card__name">Стакан скланой Stojo</p>
        <span className="card__price">1 200 ₽</span>
        <p className="card__text">Складной стакан из пищевого силикона, гибкого и долговечного материала, который легко моется.</p>
        <span className="card__text-color">Цвет</span>
        <div className="card__colors">
          <span className="card__color card__1 color__active"></span>
          <span className="card__color card__2"></span>
          <span className="card__color card__3"></span>
        </div>
        <span className="card__count-text">Количество</span>
        <span className="card__count-switch">
          <span onClick={DelCount} className="card__count-btn">−</span>
          <input className="card__count" disabled type="type" value="1" min="1" max="10" />
          <span onClick={AddCount} className="card__count-btn" >+</span>
        </span>
        <button className="card__btn">В корзину</button>
        
        {/* <svg width="23" height="20" className="card__favorite">
          <use xlinkHref="sprite.svg#favorites"></use>
        </svg> */}
        <svg width="23" height="20" className="card__favorite">
          <use xlinkHref="/sprite.svg#favorites"></use>
        </svg>

        {/* <img className="card__favorites" src="/img/svg/favorites.svg" alt="" /> */}
        {/* <svg width="23" height="20" fill="red" className="navigation__favorites-icon">
            <use xlinkHref="header.svg#favorites"></use>
          </svg> */}
      </div>
    );
  }
};

// export default CardInfo;
