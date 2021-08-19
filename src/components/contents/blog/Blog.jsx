import React from "react";
import "./blog.css";
import HeaderShopContainer from "../../header/Header_shopContainer";
import {Link, NavLink} from "react-router-dom";
import BlogCard from "./Blog-crad/BlogCard";
import Subscribe from "../shop/Subscribe/Subscribe";
import Footer from "../../footer/Footer";

const Blog = (props) => {
    let blogCrad = props.blogData.map(card => <BlogCard key={card.title}
                                                        img={card.img}
                                                        title={card.title}
                                                        view={card.view}
                                                        data={card.data} />)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <HeaderShopContainer/>
            <main>
                <div className="card__bg">
                    <section className="navigation">
                        <div className="container">
                            <div className="navigation__links">
                                <NavLink exact activeClassName="navigation__links-active" to="/" className="navigation__links-item">Главная</NavLink>
                                <img src="/img/arrow_left.svg" alt="Стрелка"/>
                                <NavLink exact activeClassName="navigation__links-active" to="/blog" className="navigation__links-item">Блог</NavLink>
                            </div>
                        </div>
                    </section>
                    <section className='main-blog'>
                        <div className='container'>
                            <h2 className='blog-title'>Блог</h2>
                            <div className="blog__topics-blog blog__topics ">
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
                                {blogCrad}
                            </div>
                            <div className="blog__btns">
                                <Link to="/shop" className="blog__btn-catalog">В каталог</Link>
                                <Link to="/" className="blog__btn-more">На главную</Link>
                            </div>
                            <Subscribe/>
                            <div className="blog-scroll-up">
                                <span onClick={scrollTop}>Наверх</span>
                                <img src="/img/blog/arrow.svg" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Blog;