import {remove} from "./util";
import axios from 'axios'

const ADD_CARD = "CARD-ADD"
const DELETE_CARD = 'DELETE-CARD'
const COUNT_PLUS_BASKET = 'COUNT_PLUS_BASKET'
const COUNT_MINESE_BASKET = "COUNT_MINESE_BASKET"

let initialState = {

    cardsData: [],
    basket: [],
    basketLenght: 0,
    sum: 0,
    favorites: [],
    favoritesLength: 0
}

let arr = []
const _initialState = (callback) => {return axios.get("https://api-five-r-ecoline.herokuapp.com/shop/get")
    .then(response => response.data[0].initialState)
    .then(function(res){callback(res)})
    .catch(console.log.bind(console));
}

_initialState(function(a) {
    arr.push(a)
    fun()
})

function fun() {
    initialState.cardsData = []
    for (let i = 0; i < arr[0].length; i++) {
        initialState.cardsData.push({
            type: arr[0][i].type,
            sale:arr[0][i].sale,
            img: arr[0][i].img,
            nameCard: arr[0][i].nameCard,
            cost: arr[0][i].cost,
            id: arr[0][i].id,
            disable: arr[0][i].disable,
            inButton: arr[0][i].inButton,
        })
    }
}


let productsJson = JSON.parse(localStorage.getItem('basket'))
let productsLenghtJson = JSON.parse(localStorage.getItem('baskLength'))


let productsLenght = productsLenghtJson ? productsLenghtJson : 0;
let products = productsJson ? productsJson : []


// let favorites = favoritesJson ? favoritesJson : []
// let favoritesLength = favoritesLengthJson ? favoritesLengthJson : 0;


let catalog = JSON.parse(localStorage.getItem('cardsData'))

if (products.length) {
    initialState.basket = [...products]
    initialState.basketLenght = productsLenght
    initialState.cardsData = [...catalog]

}

// if (favorites.length) {
//     initialState.favorites = [...favorites]
//     initialState.favoritesLength = favoritesLength
//     initialState.cardsData = [...catalog]

// }

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


