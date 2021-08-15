import React from "react";
import './blogPage.css';
import HeaderShopContainer from "../../../header/Header_shopContainer";
import {Link} from "react-router-dom";


const BlogPage = () =>{
    return(
        <div>
            <HeaderShopContainer/>
            <div className="card__bg">
            <section className="navigation">
                <div className="container">
                    <div className="navigation__links">
                        <Link to="/" className="navigation__links-item">Главная</Link>
                        <img src="/img/arrow_left.svg" alt="Стрелка"/>
                        <Link to="/blog" className="navigation__links-item">Блог</Link>
                        <img src="/img/arrow_left.svg" alt="Стрелка"/>
                        <Link to="/blog/statia" className="navigation__links-item">5R. Как жить по принципу ноль отходов</Link>


                    </div>
                </div>
            </section>
                <section className='main-blog'>
                    <div className='container'>
                        <div className="blog__topics blog__topics-blog">
                            <button >Популярные</button>
                            <button>Ресурсы</button>
                            <button className=" blog__topic-active1"y >Отходы</button>
                            <button>Климат</button>
                            <button>Экотехнологии</button>
                            <button>Эко-проблемы</button>
                        </div>
                    </div>
                </section>
            </div>
                <section className='blog-title'>
                    <div className='container'>
                        <p className='blog-data'>04.08.2021</p>
                        <h2 className='blog-title-h2'>5R. Как жить по принципу ноль отходов?</h2>
                        <p className='blog-data'><span>Автор</span>: Экоline</p>
                        <p className='blog-data'><img src='img/mdi-light_eye.svg'></img>440 </p>
                    </div>
                </section>

        </div>
    )


}

export default BlogPage;