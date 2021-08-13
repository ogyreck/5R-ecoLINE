import React from "react"
import "./blog.css"

const Blog = () => {

  return (
    <section className="blog">
      <div className="blog__bg">
        <div className="container">
          <h2 className="blog__title">Блог</h2>
          <div className="blog__topics">
            <button className="blog__topic-active">Популярные</button>
            <button>Ресурсы</button>
            <button>Отдых</button>
            <button>Климат</button>
            <button>Экотехнологии</button>
            <button>Проблемы</button>
            <button>Пути решения</button>
          </div>

          <div className="blog__cards">

            <div className="blog__card-item">
              <div className="blog__card-visible">
                <img src="/img/cards/card_1.jpg" alt="" />
                <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>304</span>
                  </div>
                  <span className="card__info-date">05.07.2021</span>
                </div>
              </div>

              <div className="blog__card-hover">
                <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                <button className="card__btn-hover">Читать</button>
              </div>

            </div>

            <div className="blog__card-item">
              <div className="blog__card-visible">
                <img src="/img/cards/card_3.jpg" alt="" />
                <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>304</span>
                  </div>
                  <span className="card__info-date">05.07.2021</span>
                </div>
              </div>
              <div className="blog__card-hover">
                <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                <button className="card__btn-hover">Читать</button>
              </div>
            </div>

            <div className="blog__card-item">
              <div className="blog__card-visible">
                <img src="/img/cards/card_4.jpg" alt="" />
                <span className="card__title">Война за воду. <br />Является ли эта угроза реальной?</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>304</span>
                  </div>
                  <span className="card__info-date">05.07.2021</span>
                </div>
              </div>
              <div className="blog__card-hover">
                <span className="card__title-hover">Знали ли вы, что мы можем получать тепло и электричество из биологических отходов?</span>
                <button className="card__btn-hover">Читать</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default Blog;