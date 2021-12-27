import express,{Request,Response} from 'express'
import Post from '../model/index'

const postRouter = express.Router()


postRouter.post('/create',async (req:Request,res:Response) => {
    const newPost = await Post.create({...req.body})
    return res.json(newPost)
})

postRouter.get('/read',async (req:Request,res:Response) => {
    const readPost = await Post.findAll({where:{}})
    return res.json(readPost)
})

postRouter.get('/read/:id',async (req:Request,res:Response) => {
    const id = req.params
    const postById = await Post.findOne({ where: id  })
    return res.json(postById)
})

postRouter.put('/update/:id',async (req:Request,res:Response) => {
    const id = req.params
    const postUpdate = await Post.update({
        title:req.body.title,
        description:req.body.description
    },{where: id}
    )
    return res.json({ message:'Post Updated SUccessfully'})
})

postRouter.delete('/delete/:id',async (req:Request,res:Response) => {
    const id = req.params
    const postById   = await Post.destroy({ where: id })
    return res.json({ msg:'Post Deleted'})
})

export default postRouter