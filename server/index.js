require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTIONT_STRING} = process.env
const app = express()

const postCtrl = require('./controllers/postController')
const postUrl = '/api/posts'


app.use(express.json())

massive(CONNECTIONT_STRING).then(db => {
    app.set('db', db)
    console.log('database is connected')
    app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
}).catch(err => console.log(err))


//Endpoints
app.get(postUrl, postCtrl.getPosts)
app.post(postUrl, postCtrl.postPost)
app.put(`${postUrl}/:post_id`, postCtrl.putPost)
app.delete(`${postUrl}/:post_id`, postCtrl.deletePost)