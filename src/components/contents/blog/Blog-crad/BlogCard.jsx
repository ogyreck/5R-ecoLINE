import React from "react";
import {Link} from "react-router-dom";
// import "./blog.css"


const BlogCard = (props) => {
    return (
        <Link to='/blog/statia'>
            <div className="blog__card-item">

                <div className="blog__card-visible">
                    <img src={props.img} alt="" className='img-blog'/>
                    <span className="card__title">{props.title}</span>
                    <div className="card__info">
                        <div className="card__info-viewers">
                            <img src="/img/eye.svg" alt=""/>
                            <span>{props.view}</span>
                        </div>
                        <span className="card__info-date">{props.data}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;