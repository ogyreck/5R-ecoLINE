import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Main from './components/contents/main/Main';
import Blog1 from './components/contents/blog/Blog1';
import About from './components/contents/about/About';
import Shop from './components/contents/shop/Shop';
// import Basket from "./components/contents/shop/Basket/Basket";
import ScrollToTop from "./ScrollToTop";
import CardProduct from "./components/contents/shop/Card-Product/CardProduct";
import BasketContainer from "./components/contents/shop/Basket/BasketContainer";
import ThankYou from './components/contents/shop/Basket/ThankYou/ThankYou';
// import Favotites from './components/contents/shop/Favorites/Favotites';
import Favorites from './components/contents/shop/Favorites/Favorites'
import Contacts from "./components/contents/contacts/Contacts";
import BlogPage from "./components/contents/blog/BlogPage/BlogPage";
import Home from "./components/contents/shop/Catalogs/Home";
import Cosmetics from "./components/contents/shop/Catalogs/Cosmetics";
import Hygiene from "./components/contents/shop/Catalogs/Hygiene";
import ZeroWaste from "./components/contents/shop/Catalogs/ZeroWaste";
import BlogContainer from "./components/contents/blog/BlogContainer";
import FavoritesContainer from "./components/contents/shop/Favorites/FavoritesContainer";

const App = (props) => {
    // debugger;
    console.log(props)
    return (
        
        <>
            <BrowserRouter>
            <ScrollToTop>
                <Route exact path='/' component={Main}/>
                <Route exact path='/blog' render={()=><BlogContainer />}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/shop' render={()=><Shop />}/>
                <Route exact path='/shop/basket' render={()=><BasketContainer />}/>
                <Route exact path='/shop/card' component={CardProduct}/>
                <Route exact path='/thanks' component={ThankYou}/>
                <Route exact path='/shop/favorites' render={()=><FavoritesContainer />}/>
                <Route exact path='/contacts' component={Contacts}/>
                <Route exact path='/blog/statia' render={()=><BlogPage />}/>
            </ScrollToTop>
                <Route exact path='/shop/home' component={Home}/>
                <Route exact path='/shop/cosmetics' component={Cosmetics}/>
                <Route exact path='/shop/hygiene' component={Hygiene}/>
                <Route exact path='/shop/zero-waste' component={ZeroWaste}/>
            </BrowserRouter>
        </>
    );

}

export default App;
