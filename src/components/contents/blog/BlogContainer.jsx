import React from "react";
import "./blog1.css";
import {connect} from "react-redux";
import Blog1 from "./Blog1";



let mapStateToProps = (state) =>{
    console.log(state)
    return{

                    blogData: state.blogReducer.blogData
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{

    }
}


const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog1)

export default BlogContainer;