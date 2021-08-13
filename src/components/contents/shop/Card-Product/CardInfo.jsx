import React, { Component} from "react";
import "./cardProduct.css";

export default class CardInfo extends Component {

  addCount() {
    this.testInput.value = Number(this.testInput.value) + 1;
  }
  delCount() {
    if (this.testInput.value <=1){
      this.testInput.value = 1;
    } else {
      this.testInput.value = this.testInput.value - 1;
    }
  }

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
          <button onClick={this.delCount.bind(this)} className="card__count-btn">−</button>
          <input className="card__count" disabled type="text" ref={(input) => this.testInput = input} value="1" min="1" max="10" />
          <button onClick={this.addCount.bind(this)} className="card__count-btn" >+</button>
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

