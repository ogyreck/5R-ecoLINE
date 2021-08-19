import {combineReducers, createStore} from "redux";
import {cardReducer} from './card-reducer';
import {blogReducer} from "./blog-reducer";


let reducer = combineReducers({cardReducer, blogReducer})


let store = createStore(reducer)
console.log(store)



export default store;