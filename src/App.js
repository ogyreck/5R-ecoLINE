import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './components/contents/main/Main';
import Blog from './components/contents/blog/Blog';
import News from './components/contents/news/News';
import Instructions from './components/contents/instructions/Instructions';
import Shop from './components/contents/shop/Shop';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Main}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/instructions' component={Instructions}/>
        <Route exact path='/shop' component={Shop}/>
      </BrowserRouter>
    </>
  );
}

export default App;