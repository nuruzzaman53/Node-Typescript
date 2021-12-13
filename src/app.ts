/* 
    Project Name : CRUD application using ExpressJS with MySQL
    Version: 1.0.0
    Author: Nuruzzaman
    Date: 11-12-2021

*/
import express,{Application,Request,Response,NextFunction} from 'express'
import User from './Modals'

const app: Application = express()

app.use(express.json())

app.get('/',(req:Request,res:Response) => {
    res.send('Home Page')
})
app.get('/about',(req:Request,res:Response) => {
    res.send('About Page')
})
app.get('/contact',(req:Request,res:Response) => {
    res.send('Contact Page')
})

/* Get Route */
app.get('/users',async(req: Request,res: Response) => {
    await User.find({ isMember:true },(err:string,data:any) => {
        if(err){
            return res.status(500).json({
                message:'No Data Found '
            })
        } else {
            res.status(200).json(data)
        }
    })
})

/* Post Route */
app.post('/addUser',async (req: Request,res: Response,next:NextFunction) => {
    const newUser = new User(req.body)
    await newUser.save((err:any,data:any):any => {
        if(err){
            next(err)
        }
        res.json(data)
    })
})

/* Update Route */
app.put('/update/:id',async(req:Request,res:Response,next:NextFunction) => {
    await User.findByIdAndUpdate(
        {_id: req.params.id},
        (err:string,data:any):any => {
            if(err){
                next(err)
            }
            res.json(data)
    })
})

/* Delete Route*/
app.delete('/delete/:id',async(req:Request,res:Response,next:NextFunction) => {
    await User.deleteOne({_id:req.params.id},(err:string,data:any): any => {
        if(err){
            next(err)
        }
        res.json(data)
    })
})

app.use((req:Request,res:Response,next:NextFunction) => {
    next('Route is Not Available')
})

app.use((err:any,req:Request,res:Response,next:NextFunction) => {
    if(err.message){
        res.status(500).send(err.message)
    } 
})


/* App listen */
app.listen(4500,():void => {
    console.log('App is listening on port 4500')
})