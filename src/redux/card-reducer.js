const ADD_CARD = "CARD-ADD"
const DELETE_CARD = 'DELETE-CARD'

let initialState = {

    cardsData: [
        {sale:false, img:"shop-image.png",
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299", id:1, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299", id:2, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик для унитаза', cost:"309" , id:3, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:4, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:5, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:6, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:7, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:8, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:9, disable: false, inButton: 'В коризину'},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299" , id:10, disable: false, inButton: 'В коризину'},
    ],
    basket: [
    ],
    basketLenght: 0
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

export const cardReducer = (state = initialState, action)=>{
    // console.log(state)

    let stateCopy = {
        ...state,
        cardsData: [...state.cardsData],
        basket: [...state.basket],
        disable: {...state.cardsData.disable},
        inButton: {...state.cardsData.inButton}
    }

    //console.log(stateCopy, 'stateCopy')


    switch (action.type){
        case ADD_CARD:{

            let newCard = stateCopy.cardsData[action.idCard-1] = {
                    sale:stateCopy.cardsData[action.idCard-1].sale,
                    img:"shop-image.png",
                    nameCard: stateCopy.cardsData[action.idCard-1].nameCard,
                    cost: stateCopy.cardsData[action.idCard-1].cost,
                    id: action.idCard,
                    disable: false,
                    inButton: 'В коризину'
            }

            stateCopy.basket.push(newCard)
            newCard.disable = true;
            newCard.inButton= 'Добавлено'
            stateCopy.basketLenght = stateCopy.basket.length
            localStorage.setItem('basket', JSON.stringify(stateCopy.basket))
            localStorage.setItem('cardsData', JSON.stringify(stateCopy.cardsData))
            localStorage.setItem('baskLength', JSON.stringify(stateCopy.basket.length))

            return stateCopy;
        }
        case DELETE_CARD:{

                let bask = [...stateCopy.basket]
                let card = [...stateCopy.cardsData]
                let newBask;
                let newCard;
                for (let i =0; i<bask.length; i++){

                    if(bask[i].id === action.idCardDelete){

                        newBask = bask.filter(item => item!==bask[i])
                        newCard = card.map((item) => item!==bask[i]? item: {...item, disable: false,inButton: 'В корзину'}
                        )
                }


                stateCopy.basket = [...newBask]
                stateCopy.cardsData = [...newCard]
                stateCopy.basketLenght = stateCopy.basket.length
                localStorage.setItem('basket', JSON.stringify([...newBask]))

                    localStorage.setItem('cardsData', JSON.stringify([...newCard]))
                localStorage.setItem('baskLength', JSON.stringify([...newBask].length))
                return stateCopy
        }}

        default:
            return state;
    }


    return state
    
}



export const addBasketAction = (idCardValue) => {
    return{
        type: ADD_CARD,
        idCard: idCardValue
    }
}

export const cardAddActionCreator = () =>{
    return{
        type: "RENDER-CARD"
    }
}
export const deleteBascetAction =  (idCardValueDelete) =>{
    return{
        type: DELETE_CARD,
        idCardDelete: idCardValueDelete
    }
}


