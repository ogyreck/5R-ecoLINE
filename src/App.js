import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import ScrollToTop from './ScrollToTop'

import Main from './components/contents/main/Main';
import Blog from './components/contents/blog/Blog';
import About from './components/contents/about/About';
import Shop from './components/contents/shop/Shop';
import CardProduct from './components/contents/shop/Card-Product/CardProduct';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/shop/card' component={CardProduct}/>
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
}

export default App;
