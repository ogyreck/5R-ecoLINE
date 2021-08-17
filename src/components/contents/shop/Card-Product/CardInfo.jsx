import React, { Component} from "react";
import "./cardProduct.css";



export default class CardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Эта привязка обязательна для работы `this` в колбэке.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  addCount() {
    this.testInput.value = Number(this.testInput.value) + 1;
  }
  delCount() {
    if (this.testInput.value <=1){
      this.testInput.value = 1;
    } else {
      this.testInput.value = Number(this.testInput.value) - 1;
    }
  }


  render() {
    return (
      <div className="card-info">
        <p className="card__name">Стакан скланой Stojo</p>
        <span className="card__price">1 200 ₽</span>
        <p className="card__text">Складной стакан из пищевого силикона, гибкого и долговечного материала, который легко моется.</p>
        <span className="card__text-color">Цвет</span>
        <div className="card__colors">
          <span className="card__color card__1 "></span>
          <span className="card__color card__2"></span>
          <span className="card__color card__3"></span>
        </div>
        <span className="card__count-text">Количество</span>
        <span className="card__count-switch">
          <button onClick={this.delCount.bind(this)} className="card__count-btn">−</button>
          <input className="card__count" disabled type="text" ref={(input) => this.testInput = input} value="1" />
          <button onClick={this.addCount.bind(this)} className="card__count-btn" >+</button>
        </span>
        <button className="card__btn">В корзину</button>
        
        <svg onClick={this.handleClick} className={this.state.isToggleOn ? 'card__favorite' : 'card__favorite-active'} width="23" height="20" >
          <use  xlinkHref="/sprite.svg#favorites"></use>
        </svg>

      </div>
    );
  }
};

