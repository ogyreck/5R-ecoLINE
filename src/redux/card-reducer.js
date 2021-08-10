const ADD_CARD = "CARD-ADD"


let initialState = {
    cardsData: [
        {sale:false, img:"shop-image.png",
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Миска для салата из массива бука', cost:"309"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
        {sale:true, img:"shop-image.png", 
        nameCard:'Ершик кокосовый для чистки бутылочек', cost:"299"},
    ]
}

export const cardReducer = (state = initialState, action)=>{
    return state
    
    
}

export const cardAddActionCreator = () =>{
    return{
        type: "RENDER-CARD"
    }
}
