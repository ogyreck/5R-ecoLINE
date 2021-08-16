import React from "react";
import "./blog1.css";
import HeaderShopContainer from "../../header/Header_shopContainer";
import {Link} from "react-router-dom";
import BlogCard from "./Blog-crad/BlogCard";
import Subscribe from "../shop/Subscribe/Subscribe";
import Footer from "../../footer/Footer";

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
                                <button className=" blog__topic-active1">Популярные</button>
                                <button>Ресурсы</button>
                                <button >Отходы</button>
                                <button>Климат</button>
                                <button>Экотехнологии</button>
                                <button>Эко-проблемы</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className='container'>
                            <div className='flex-blog__wrapper'>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>
                                <BlogCard/>

                            </div>
                            <div className="blog__btns">
                                <Link to="/shop" className="blog__btn-catalog">В каталог</Link>
                                <Link to="/" className="blog__btn-more">На главную</Link>
                            </div>
                            <Subscribe/>

                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Blog;