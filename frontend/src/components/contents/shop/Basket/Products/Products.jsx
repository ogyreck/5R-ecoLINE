import React from "react"
import Product from "./Product"
import "./Products.css"

const Noting = () => {
    return (
        <span className='noting'>Корзина пустая</span>
    )
}

const Products = (props) => {

    let input = React.createRef();
    let saleCount = React.createRef();
    let price = React.createRef();

    const sale = () => {
        if (input.current.value === "ECOLIFE"){
            saleCount.current.outerText = parseInt(allSum / 100 *10);
            price.current.outerText = allSum - parseInt(allSum / 100 *10);

            // console.log(saleCount);
        }
        // console.log(saleCount.current.outerText);
    }

    let scet = 0;
    let allSum= 0;
    let productBasKet = props.basket.map((product) => {
        let basketId = scet++
        let SumCost = product.cost * product.count
        allSum += SumCost
        return(<Product key={product.id}
                        id={basketId}
                        nameCard={product.nameCard}
                        cost={product.cost}
                        deleteBascket={props.deleteBascet}
                        img={product.img}
                        countPlius = {props.countPlius}
                        countMines={props.countMines}
                        count={product.count}

    />)})

    return (
        <>
        <div className="products">
            <ul className="basket__information">
                <li className="basket__information-item">Продукт</li>
                <li className="basket__information-item">Цена</li>
                <li className="basket__information-item">Количество</li>
                <li className="basket__information-item">Сумма</li>
            </ul>
            <div className="products__cards">
                {productBasKet.length >= 1 ? productBasKet : <Noting/>}
            </div>
            <hr className="products__line"/>
            <div className="flex-wrapper">
                <div className="products__promocode">
                    {/* <form action="#" method="GET"> */}
                        <input type="text" name="promo" ref={input} onChange={sale} placeholder="Введите промокод"/>
                        {/* <button type="submit">Применить</button> */}
                    {/* </form> */}
                </div>
                <div className="flex-product-total-wrapper">
                    <p className="products__sale">Скидка: <span ref={saleCount}>0</span> ₽</p>
                    <p className="products__total">Сумма заказа: <span>{allSum} ₽</span></p>
                </div>
            </div>

        </div>
        <div className="delivery-method">
            <p className="form-heading form-heading-delivery">Выберите способ доставки:</p>
            <div className="radio">
                <label>
                    <input type="radio" name="react-tips" value="Почта России до пункта выдачи" defaultChecked className="form-check-input" />
                    Почта России до пункта выдачи
                </label>
                <p className="radio__price">300 ₽</p>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="react-tips" value="Почта России до двери" defaultChecked className="form-check-input" />
                    Почта России до двери
                </label>
                <p className="radio__price">300 ₽</p>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="react-tips" value="СДЭК до пункта выдачи (по России)" defaultChecked className="form-check-input" />
                    СДЭК до пункта выдачи (по России)
                </label>
                <p className="radio__price">300 ₽</p>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" name="react-tips" value="СДЭК до двери (по России)" defaultChecked className="form-check-input" />
                    СДЭК до двери (по России)
                </label>
                <p className="radio__price">300 ₽</p>
            </div>
            <div className="radio ">
                <label>
                    <input type="radio" name="react-tips" value="Самовывоз (г. Ижевск)" defaultChecked className="form-check-input" />
                    Самовывоз (г. Ижевск)
                </label>
                <p className="radio__price">300 ₽</p>
            </div>
            <div className="delivery__price">
                <p>Сумма к оплате: <strong><span ref={price}>{allSum}</span> ₽</strong></p>
            </div>
        </div>
        </>
    );
};

export default Products;