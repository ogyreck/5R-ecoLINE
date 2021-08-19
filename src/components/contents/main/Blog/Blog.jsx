import React from "react"
import { Link } from "react-router-dom";
import "./blog.css"

const Blog = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="blog">
        <div className="container">
          <h2 className="blog__title">Блог</h2>
          <div className="blog__cards">
            <div className="blog__card-item">
              <div className="blog__card-visible">
                <img src="/img/blog/blog_1.jpg" alt="" />
              <span className="card__title">Глобальная война за воду.
                Является ли угроза реальной?</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>304</span>
                  </div>
                  <span className="card__info-date">05.07.2021</span>
                </div>
                <div className='Hover-blog'>
                  <Link to='/blog/statia'>
                    <button className='blog-btn'>Читать</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog__card-item">
              <div className="blog__card-visible">
              <img src="/img/blog/blog_2.jpg" alt="" />
              <span className="card__title">Как мы впустую растрачиваем воду, даже не подозревая этого?</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>450</span>
                  </div>
                  <span className="card__info-date">05.08.2021</span>
                </div>
                <div className='Hover-blog'>
                  <Link to='/blog/statia'>
                    <button className='blog-btn'>Читать</button>
                  </Link>
                </div>
              </div>
            </div> 
            <div className="blog__card-item">
              <div className="blog__card-visible">
              <img src="/img/blog/blog_3.jpg" alt="" />
              <span className="card__title">Добыча тепла и электричества из биологических отходов.</span>
                <div className="card__info">
                  <div className="card__info-viewers">
                    <img src="/img/eye.svg" alt="" />
                    <span>250</span>
                  </div>
                  <span className="card__info-date">10.08.2021</span>
                </div>
                <div className='Hover-blog'>
                  <Link to='/blog/statia'>
                    <button className='blog-btn'>Читать</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__btns">
            <Link to="/shop" className="blog__btn-catalog">Читать больше</Link>
          </div>
          <div className="blog-up">
          <span onClick={scrollTop}>Наверх</span>
            <img src="img/blog/arrow.svg" alt="" />
          </div>
        </div>
    </section>
  )
}
export default Blog;
