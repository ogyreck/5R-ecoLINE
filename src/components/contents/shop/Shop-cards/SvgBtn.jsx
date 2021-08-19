import React, { Component} from "react";

export default class SvgBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (

      <button onClick={this.handleClick} className={this.state.isToggleOn ? 'shop-card__icons' : 'shop-card__icons-toggle'}>
        <svg className={this.state.isToggleOn ? 'shop_favorite' : 'shop_favorite-toggle'} width="23" height="20" >
          <use xlinkHref="/sprite.svg#favorites"></use>
        </svg>
      </button>

    )
  }
}

