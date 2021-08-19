// import React from "react";
import "./blog.css";
import {connect} from "react-redux";
import Blog from "./Blog";

let mapStateToProps = (state) =>{
    return{
        blogData: state.blogReducer.blogData
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
    }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog)

export default BlogContainer;