import express,{Request,Response,NextFunction} from 'express'
import User from  '../MongooseDB/Modals'

const router = express.Router()

router.get('/users',async(req: Request,res: Response) => {
    await User.find({},(err:string,data:any) => {
        if(err){
            return res.status(500).json({
                message:'No Data Found '
            })
        } else {
            res.status(200).json(data)
        }
    })
})


router.post('/addUser',async (req: Request,res: Response,next:NextFunction) => {
    const newUser = new User(req.body)
    await newUser.save((err:any,data:any) => {
        if(err){
           return res.status(200).json({
               message:'User adding failed'
           })
        }
        res.json(data)
    })
})

/* Update Route */
router.put('/update/:id',async (req:Request,res:Response) => {
    await User.updateOne(
        {_id: req.params.id},
        {$set:{
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            isMember: req.body.isMember
        }},
        { 
            new:true,
            useFindAndModify:false
        },
        (err:any,data:any) => {
            if(err){
                return res.status(500).json({
                    message:'Update Action Failed'
                })
            }
            res.status(200).json({
                messsage:'User Information Updated'
            })
    })
})

/* Delete Route*/
router.delete('/delete/:id',async (req:Request,res:Response) => {
    await User.deleteOne({_id:req.params.id},(err:string) => {
        if(err){
            return res.status(500).json({
                message:'Delete Action Failed'
            })
        } else {
            res.status(200).json({ message:'Data Deleted Successfully'})
        }
        
    })
})


export default router
