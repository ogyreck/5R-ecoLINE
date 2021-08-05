import React  from "react"
import "./numbers.css"

const Numbers = () => {

  return (
    <section className="numbers">
      <h2 className="humbers__heading">Цифры, которые имеют значение</h2>
      <div className="numbers__items">
        <div className="numbers__item">
          <h2 className="numbers__item-heading">4 млн га</h2>
          <p className="numbers__item-description">площадь <br /> свалок в России</p>
        </div>
        <div className="numbers__item">
          <h2 className="numbers__item-heading">8 млн тонн</h2>
          <p className="numbers__item-description">мусора ежегодно <br /> попадает в океан</p>
        </div>
        <div className="numbers__item">
          <h2 className="numbers__item-heading">400 кг</h2>
          <p className="numbers__item-description">мусора производит <br /> человек за один год</p>
        </div>
        <div className="numbers__item">
          <h2 className="numbers__item-heading">200 лет</h2>
          <p className="numbers__item-description">разлагается <br /> полиэтиленовый пакет</p>
        </div>
      </div>
    </section>
  )
}
export default Numbers;
