import React from "react"
import "./Favorites.css"
import {Link} from "react-router-dom";
import Footer from "../../../footer/Footer";
import HeaderShopContainer from "../../../header/Header_shopContainer";
import ShopCard from "../Shop-cards/ShopCard";


const Favorites = (props) => {
    console.log(props, 'favor')
    let sket = 0
    let cardFavor = props.favorite.map(card => {
        let favorId = sket++

        return <ShopCard key={card.id} name={card.nameCard}
                                                        favorId={favorId}
                                                          cost={card.cost}
                                                          img={card.img}
                                                          new={card.sale}
                                                          id={card.id}
                                                          addBasket={props.addBasket}
                                                          disable={card.disable}
                                                          inButton={card.inButton}
                                                          addFavorite={props.addFavorite}
                                                            delFavor={props.delFavorite}
                                                          fevorClass={card.favoriteClass}
                                                          type={card.type}

    />})
    return (
        <>
            <HeaderShopContainer/>
            <section className="liked">
                <div className="container">
                    <div className="navigation__links liked-navigation__links">
                        <Link to="/" className="navigation__links-item">Главная</Link>
                        <img src="/img/arrow_left.svg" alt="Стрелка"/>
                        <Link to="/shop" className="navigation__links-item">Каталог</Link>
                        <img src="/img/arrow_left.svg" alt="Стрелка"/>
                        <Link to="/shop/basket" className="navigation__links-item">Корзина</Link>
                    </div>
                    <h2 className="main-heading main-heading-liked">Избранное</h2>
                    <div className='shop-cards'>
                       {cardFavor}
                    </div>
                    <div className="button-container">
                        <Link to="/shop">
                            <button className="button button--default">В каталог</button>
                        </Link>
                        <Link to="/">
                            <button className="button button--main">На главную</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Favorites;