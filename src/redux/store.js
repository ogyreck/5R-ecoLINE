import { createStore } from "redux";
import {cardReducer} from './card-reducer';


let reducer = cardReducer

console.log(reducer())

let store = createStore(reducer)



export default store;