import mongoose from 'mongoose'

//const Post = new mongoose.Schema({
//    name: {type: String, required: true},
//    price: {type: Number, required: true, min: 0},
//    img: {type: String}
//})
//
//export default mongoose.model('Post', Post)

const Post = new mongoose.Schema({
    initialState: [
        {
            sale: {type: Boolean, required: true},
            img: {type: String, required: true},
            nameCard: {type: String, required: true},
            cost: {type: Number, required: true},
            id: {type: Number, required: true},
            disable: {type: Boolean, required: true},
            inButton: {type: String, required: true}
        }
    ]
})

export default mongoose.model('Post', Post)