import {remove} from "./util";
import axios from 'axios'

const ADD_CARD = "CARD-ADD"
const DELETE_CARD = 'DELETE-CARD'
const COUNT_PLUS_BASKET = 'COUNT_PLUS_BASKET'
const COUNT_MINESE_BASKET = "COUNT_MINESE_BASKET"

const _initialState = () => {return axios.get("/shop/get").then(response => response.data[0].initialState)}
console.log(_initialState())

let initialState = {

    cardsData: [
        {
            type: "home",
            sale: false, img: "img/cards-in-shop/card1.png",
            nameCard: 'Ершик кокосовый для чистки бутылок', cost: "299", id: 1, disable: false, inButton: 'В корзину'
        },
        {
            type: "home",
            sale: true, img: "img/cards-in-shop/card2.png",
            nameCard: 'Щетка для посуды с ручкой', cost: "440", id: 2, disable: false, inButton: 'В корзину'
        },
        {
            type: "home",
            sale: true, img: "img/cards-in-shop/card3.png",
            nameCard: 'Миска для салата из массива бука', cost: "150", id: 3, disable: false, inButton: 'В корзину'
        },
        {
            type: "home",
            sale: true, img: "img/cards-in-shop/card4.png",
            nameCard: 'Скалка из цельного массива бука', cost: "440", id: 4, disable: false, inButton: 'В корзину'
        },
        {
            type: "home",
            sale: false,
            img: "img/cards-in-shop/card5.png",
            nameCard: 'Разделочная доска из цельного массива бука',
            cost: "690",
            id: 5,
            disable: false,
            inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: true, img: "img/cards-in-shop/card6.png",
            nameCard: 'Фартук из необеленного хлопка', cost: "500", id: 6, disable: false, inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: false, img: "img/cards-in-shop/crad7.png",
            nameCard: 'Изделие №1 4 цвета', cost: "210", id: 7, disable: false, inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: true, img: "img/cards-in-shop/crad8.png",
            nameCard: 'Набор из муслина 3 предмета', cost: "300", id: 8, disable: false, inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: true, img: "img/cards-in-shop/card9.png",
            nameCard: 'Мочалка для тела из люффы', cost: "250", id: 9, disable: false, inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: false, img: "img/cards-in-shop/card10.png",
            nameCard: 'Губка из целлюлозы и люффы', cost: "270", id: 10, disable: false, inButton: 'В корзину'
        },
        {
            type: "zero",
            sale: true, img: "img/cards-in-shop/card11.png",
            nameCard: 'Совочек для муки и круп', cost: "240", id: 11, disable: false, inButton: 'В корзину'
        },
    ],
    basket: [],
    basketLenght: 0,
    sum: 0
}

let productsJson = JSON.parse(localStorage.getItem('basket'))
let productsLenghtJson = JSON.parse(localStorage.getItem('baskLength'))


let productsLenght = productsLenghtJson ? productsLenghtJson : 0;
let products = productsJson ? productsJson : []

let catalog = JSON.parse(localStorage.getItem('cardsData'))

if (products.length) {
    initialState.basket = [...products]
    initialState.basketLenght = productsLenght
    initialState.cardsData = [...catalog]

}

export const cardReducer = (state = initialState, action) => {
    // console.log(state)

    let stateCopy = {
        ...state,
        cardsData: [...state.cardsData],
        basket: [...state.basket],
        disable: {...state.cardsData.disable},
        inButton: {...state.cardsData.inButton}
    }

    //console.log(stateCopy, 'stateCopy')


    switch (action.type) {

        case ADD_CARD: {

            let newCard = stateCopy.cardsData[action.idCard - 1] = {
                sale: stateCopy.cardsData[action.idCard - 1].sale,
                img: stateCopy.cardsData[action.idCard - 1].img,
                nameCard: stateCopy.cardsData[action.idCard - 1].nameCard,
                cost: stateCopy.cardsData[action.idCard - 1].cost,
                id: action.idCard,
                disable: true,
                inButton: 'Добавлено',
                count: 1,

            }

            stateCopy.basket.push(newCard)


            stateCopy.basketLenght = stateCopy.basket.length
            localStorage.setItem('basket', JSON.stringify(stateCopy.basket))
            localStorage.setItem('cardsData', JSON.stringify(stateCopy.cardsData))
            localStorage.setItem('baskLength', JSON.stringify(stateCopy.basket.length))

            return stateCopy;
        }
        case DELETE_CARD: {

            let bask = [...stateCopy.basket]
            let card = [...stateCopy.cardsData]
            let newBask;
            let newCard;
            let deletedCard = bask[action.idCardDelete]
            newBask = remove(bask, action.idCardDelete)

            newCard = card.map((item) => {

                if (item.id === deletedCard.id) {
                    return {
                        ...item,
                        disable: false,
                        inButton: 'В корзину'
                    }
                }
                return item
            })
            stateCopy.basket = [...newBask]
            stateCopy.cardsData = [...newCard]
            stateCopy.basketLenght = stateCopy.basket.length
             localStorage.setItem('basket', JSON.stringify([...newBask]))

             localStorage.setItem('cardsData', JSON.stringify([...newCard]))
             localStorage.setItem('baskLength', JSON.stringify([...newBask].length))
            return stateCopy
        }
        case COUNT_PLUS_BASKET:
            console.log(action.idCard)
            let bask = [...stateCopy.basket]
            bask[action.idCard].count++
            stateCopy.basket = bask
            return stateCopy
        case COUNT_MINESE_BASKET:
            let bask2 = [...stateCopy.basket]
            if (bask2[action.idCard].count <= 1) {
                bask2[action.idCard].count = 1;
            } else {
                bask2[action.idCard].count--
            }

            stateCopy.basket = bask2
            return stateCopy

        default:
            return state;
    }


    // return state

}


export const addBasketAction = (idCardValue) => {
    return {
        type: ADD_CARD,
        idCard: idCardValue
    }
}

export const cardAddActionCreator = () => {
    return {
        type: "RENDER-CARD"
    }
}
export const deleteBascetAction = (idCardValueDelete) => {
    return {
        type: DELETE_CARD,
        idCardDelete: idCardValueDelete
    }
}

export const countPlusBasketAction = (idCardValue) => {
    return {
        type: COUNT_PLUS_BASKET,
        idCard: idCardValue
    }
}
export const countMinuseBasketAction = (idCardValue) => {
    return {
        type: COUNT_MINESE_BASKET,
        idCard: idCardValue,
    }
}


