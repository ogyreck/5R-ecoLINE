import React from "react";
import "./blog.css";
import HeaderShopContainer from "../../header/Header_shopContainer";
import {Link} from "react-router-dom";

const Blog = () => {
    return (
        <>
            <HeaderShopContainer/>
            <main>
                <div className="card__bg">

                    <section className="navigation">
                        <div className="container">
                            <div className="navigation__links">
                                <Link to="/" className="navigation__links-item">Главная</Link>
                                <img src="/img/arrow_left.svg" alt="Стрелка"/>
                                <Link to="/" className="navigation__links-item">Блог</Link>


                            </div>
                        </div>
                    </section>
                    <section className='main-blog'>
                        <div className='container'>
                            <h2 className='blog-title'>Блог</h2>
                            <div className="blog__topics blog__topics-blog">
                                <button className=" blog__topic-active1">Все</button>
                                <button>Для дома</button>
                                <button>Zero Waste</button>
                                <button>Косметика</button>
                                <button>Личная гигена</button>
                                <button>Личная гигена</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Blog;