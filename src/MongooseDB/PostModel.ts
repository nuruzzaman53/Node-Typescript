import mongoose, { Document } from "mongoose"

export interface PostInfo extends Document {
    title:string
    description:string
    date:Date
    status:string,
    user:string
}

const postSchema = new mongoose.Schema({

    title:{
        type:String,maxlength:200,required:true
    },
    description:{
        type:String,required:true
    },
    date:{
        type:Date,default:Date.now
    },
    status:{
        type:String,
        enum:['published','Pending','Rejected']
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Post = mongoose.model<PostInfo>('Post',postSchema)

export default Post