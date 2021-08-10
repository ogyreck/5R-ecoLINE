import { createStore } from "redux";
import {cardReducer} from './card-reducer';


let reducer = cardReducer

// s

let store = createStore(reducer)



export default store;