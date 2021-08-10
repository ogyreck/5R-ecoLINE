import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './components/contents/main/Main';
import Blog from './components/contents/blog/Blog';
import About from './components/contents/about/About';
import Shop from './components/contents/shop/Shop';
import Basket from './components/contents/shop/Basket/Basket';

const App = (props) => {
    // debugger;
    console.log(props)
    return (
        
        <>
            <BrowserRouter>
                <Route exact path='/' component={Main}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/shop' render={()=><Shop state={props.state} dispatch={props.dispatch}/>}/>
                <Route exact path='/shop/basket' component={Basket}/>
            </BrowserRouter>
        </>
    );
}

export default App;
