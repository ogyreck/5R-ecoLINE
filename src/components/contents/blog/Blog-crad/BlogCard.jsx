import React from "react";
import {Link} from "react-router-dom";

const BlogCard = (props) => {
    return (
        <div className="blog__card-item">
            <div className="blog__card-visible">
                <img src={props.img} alt="" />
                <span className="card__title">{props.title}</span>
                <div className="card__info">
                    <div className="card__info-viewers">
                        <img src="/img/eye.svg" alt=""/>
                        <span>{props.view}</span>
                    </div>
                    <span className="card__info-date">{props.data}</span>
                </div>
                <div className='Hover-blog'>
                    <Link to='/blog/statia'>
                        <button className='blog-btn'>Читать</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default BlogCard;