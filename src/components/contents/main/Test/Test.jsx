import React from "react"
import "./test.css"

const Test = () => {

  return (
    <section className="test">
      <div className="container">
        <h2 className="main-heading test__title">Пройди опрос и получи промокод на скидку!</h2>
        <p className="test__text">Ответь на 6 вопросов и узнай,<br/>насколько экологично ты живешь!</p>
        <button className="test__btn">Начать</button>
      </div>
    </section>
  )
}
export default Test;
