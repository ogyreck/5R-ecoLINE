import React from "react";
import "./ShopCard.css";
import { Link } from "react-router-dom";
// import favorites from "../../../../img/favorites-icon.svg"
// import cardImage from "../../../../img/shop-image.png"
// import { cardAddActionCreator } from "../../../../redux/card-reducer";

const NEW = (props) => {
    if (props.sale) {
        return (<div className="card-new">NEW</div>)
    } else {
        return (<div></div>)
    }

}



const ShopCard = (props) => {




    let addBasket = () => {
        props.addBasket(props.id)
    }
    let addFavorite = () =>{
        props.addFavorite(props.id,props.favorId)


    }
    let delFavorite = () =>{
        props.delFavorite()
    }

    let prover = () =>{
        if (props.fevorClass === 'shop_favorite'){
            return addFavorite
        }else{
            return delFavorite
        }
    }


    console.log(props.favorDis)
    return (
        
            <div className="shop-card__item">
                <Link to="/shop/card">
                    <img src= {props.img} alt="" className="shop-card__image" />
                </Link>
                <div className="shop-card__content">
                    <Link to="/shop/card">
                        <p className="shop-card__title">{props.name}</p>
                        <div className="shop-card__price">{props.cost} ₽</div>
                    </Link>
                    <div className="card-basket">
                        <button className="shop-card-button"  disabled={props.disable} onClick={addBasket}>{props.inButton}</button>
                    </div>
                </div>

                {/*<input type="checkbox" class="checkbox_img" id="svg" name=""/>*/}
                {/*<label for="svg" className="checkbox_img-label">*/}
                {/*    <div className="shop-card__icons">*/}
                {/*        <svg className='shop_favorite' width="23" height="20" >*/}
                {/*            <use xlinkHref="/sprite.svg#favorites"></use>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</label>*/}
                <button className="shop-card__icons"  onClick={prover} disabled={props.favorDis}>
                    <div className="shop-card__icons shop-card__icons-svg">
                           <svg className={props.fevorClass} width="23" height="20" >

                             <use xlinkHref="/sprite.svg#favorites"></use>*/}
                        </svg>
                       </div>
                </button>
                
                {/* <div className="shop-card__icons">
                    <Link to="/shop/favorites">
                    <svg className='shop_favorite' width="23" height="20" >
                        <use xlinkHref="/sprite.svg#favorites"></use>
                    </svg>
                    </Link>
                </div> */}
                <NEW sale={props.new}/>
                <div className='id'>{props.id}</div>
            </div>
        // </Link>

        

    )
}

export default ShopCard;