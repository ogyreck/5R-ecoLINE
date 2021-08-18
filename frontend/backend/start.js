import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
import db from './db.js'

//import path from 'path';
//import { fileURLToPath } from 'url';
//
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.post('/shop/add', async (req, res) => {
    try{
        const {initialState: [{type, sale, img, nameCard, cost, id, disable, inButton}]} = req.body
        const post = await Post.create(req.body)
        res.json(post)
    } catch(e) {
        res.status(500).json(e)
    }
})

app.get('/shop/get', async (req, res) => {
    Post.find(function(err, search){
        if(err) return console.log(err);
        res.send(search)
        console.log({search})
    });
})

async function start() {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER START ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
start()