/* 
    Project Name : CRUD application using ExpressJS with MySQL
    Version: 1.0.0
    Author: Nuruzzaman
    Date: 11-12-2021

*/
import express,{Application} from 'express'
//import mongoose from 'mongoose'
import userRouter from './routes/Routes'
import postRouter from './routes/PostRoute'
import db from './config/database.config'

const app: Application = express()

/*mongoose.connect('mongodb://localhost:27017/NodeTSAPI',() => {
    console.log('Mongoose Database Connection Successful')
})*/

app.use(express.json())

app.use('/api',userRouter)  /* API using MongoDB */
app.use('/post',postRouter) /* API using MySQL with Sqeuelize */

db.sync().then(() => {
    console.log('DB Connected')
})

app.listen(4500,() => {
    console.log('App is listening on port 4500')
})

