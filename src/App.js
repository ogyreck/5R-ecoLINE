import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './components/contents/main/Main';
import Blog from './components/contents/blog/Blog';
import News from './components/contents/news/News';
import About from './components/contents/about/About';
import Shop from './components/contents/shop/Shop';
import Quizz from './components/contents/main/Quizz'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route exact path='/' component={Main}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/shop' component={Shop}/>
            </BrowserRouter>
            <div className="App">
                <Quizz />
            </div>
        </>
    );
}

export default App;
