import React from "react"
import "./concept.css"

const Concept = () => {

  return (
    <section className="concept">
      <div className="container">
        <h2 className="concept__title">Концепция</h2>
        <div className="flex-wrapper-concept">
          <div className="concept-text">5R</div>
          <ul className="concept-list">
            <li className="concept-list__item">
              <span className="list__item--color">REFUSE </span>- ОТКАЖИСЬ
            </li>
            <li className="concept-list__item">
              <span className="list__item--color">REDUCE </span>- СОКРАТИ
            </li>
            <li className="concept-list__item">
              <span className="list__item--color">REUSE </span>- ПЕРЕИПОЛЬЗУЙ
            </li>
            <li className="concept-list__item">
              <span className="list__item--color">RECYCLE </span>- ПЕРЕРАБОТАЙ
            </li>
            <li className="concept-list__item">
              <span className="list__item--color">ROT </span>- КОМПОСТИРУЙ
            </li>
          </ul>
        </div>
        <button className="concept__btn">Читать</button>
      </div>
    </section>
  )
}
export default Concept;
