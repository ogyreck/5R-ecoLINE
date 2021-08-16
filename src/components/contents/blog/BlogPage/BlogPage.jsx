import React from "react";
import './blogPage.css';
import HeaderShopContainer from "../../../header/Header_shopContainer";
import {Link} from "react-router-dom";


const BlogPage = () => {
    return (
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
                            <Link to="/blog/statia" className="navigation__links-item">5R. Как жить по принципу ноль
                                отходов</Link>


                        </div>
                    </div>
                </section>
                <section className='main-blog'>
                    <div className='container'>
                        <div className="blog__topics blog__topics-blog">
                            <button>Популярные</button>
                            <button>Ресурсы</button>
                            <button className=" blog__topic-active1" y>Отходы</button>
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
                    <div className='blog-data blog-data-div'>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0211 17.3456C14.8439 17.3456 18.1684 15.2706 19.8713 12.2142C19.008 10.6619 17.7299 9.36547 16.172 8.4622C14.6141 7.55893 12.8344 7.08236 11.0211 7.08288C9.20785 7.08236 7.42815 7.55893 5.87025 8.4622C4.31236 9.36547 3.03417 10.6619 2.1709 12.2142C3.03417 13.7666 4.31236 15.063 5.87025 15.9663C7.42815 16.8695 9.20785 17.3461 11.0211 17.3456ZM11.0211 6.1499C13.0944 6.14923 15.1258 6.71791 16.882 7.79063C18.6382 8.86334 20.048 10.3966 20.9494 12.2142C20.048 14.0319 18.6382 15.5651 16.882 16.6378C15.1258 17.7105 13.0944 18.2792 11.0211 18.2786C8.94784 18.2792 6.91642 17.7105 5.1602 16.6378C3.40398 15.5651 1.99419 14.0319 1.09277 12.2142C1.99419 10.3966 3.40398 8.86334 5.1602 7.79063C6.91642 6.71791 8.94784 6.14923 11.0211 6.1499ZM11.0211 8.01585C12.1649 8.01585 13.2618 8.45818 14.0705 9.24553C14.8793 10.0329 15.3336 11.1007 15.3336 12.2142C15.3336 13.3277 14.8793 14.3956 14.0705 15.1829C13.2618 15.9703 12.1649 16.4126 11.0211 16.4126C9.87736 16.4126 8.78046 15.9703 7.97171 15.1829C7.16296 14.3956 6.70861 13.3277 6.70861 12.2142C6.70861 11.1007 7.16296 10.0329 7.97171 9.24553C8.78046 8.45818 9.87736 8.01585 11.0211 8.01585ZM11.0211 8.94882C10.1315 8.94882 9.27838 9.29286 8.64935 9.90524C8.02032 10.5176 7.66694 11.3482 7.66694 12.2142C7.66694 13.0803 8.02032 13.9108 8.64935 14.5232C9.27838 15.1356 10.1315 15.4796 11.0211 15.4796C11.9107 15.4796 12.7638 15.1356 13.3929 14.5232C14.0219 13.9108 14.3753 13.0803 14.3753 12.2142C14.3753 11.3482 14.0219 10.5176 13.3929 9.90524C12.7638 9.29286 11.9107 8.94882 11.0211 8.94882Z"
                                fill="#878787"/>
                        </svg>
                        440
                    </div>
                </div>
            </section>
            <section className='main-text-blog'>
                <div className='container'>
                    <div className="citata-blog">
                        <p>Ноль отходов назвали самой популярной экологической концепцией среди россиян.
                            Раньше этот принцип пытались применить только к производству, и мало кто верил, что обычные современные люди могут обойтись в быту вообще без мусора.</p>

                        <p>Француженка Беа Джонсон доказала на примере своей семьи, что это возможно. Она рассказала нам о пяти простых принципах, которые лежат в основе безотходного образа жизни, а мы адаптировали их к российским реалиям.</p>
                    </div>
                    <p className='title_blog'>
                        Шаг 1 Refuse — откажись
                    </p>
                    <p className='main-text__blog'>
                        Первая заповедь гражданина планеты — не покупай лишнего.<br/>
                        Экологические проблемы начинаются с перепотребления.
                    </p>

                </div>
            </section>

        </div>
    )


}

export default BlogPage;