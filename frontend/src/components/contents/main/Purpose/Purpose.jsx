import React from "react"
import "./purpose.css"

const Purpose = () => {

  return (
    <section className="purpose">
      <div className="container">
        <div className="purpose-line"></div>
        <div className="purpose-wrapper">
          <div className="purpose-text-1" >
            <img src="img/purpose/1.svg" alt="" />
            <p>Снижаем нагрузку на окружающую
              среду: минимум упаковки /
              упаковка может быть переработана</p>
          </div>
          <div className="purpose-text-2" >
            <img src="img/purpose/2.svg" alt="" />
            <p>Составы нашей продукции
              не содержат ингредиентов
              животного происхождения</p>
          </div>
          <div className="purpose-text-3" >
            <img src="img/purpose/3.svg" alt="" />
            <p>При изготовлении эко-товаров,
              мы следуем принципам
              безотходного производства</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
export default Purpose;
