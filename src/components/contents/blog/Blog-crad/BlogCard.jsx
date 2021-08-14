import React from "react";
import { Link } from "react-router-dom";
// import "./blog.css"


const BlogCard = () =>{
    return(
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
            </div>
            </div>
    )
}

export default BlogCard;