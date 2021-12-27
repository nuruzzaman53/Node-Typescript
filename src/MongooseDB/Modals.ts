import mongoose,{Document} from 'mongoose'

export interface UserInfo extends Document {
    name: string
    email:string
    phone:number
    isMember:boolean
}

const UserModal = new mongoose.Schema({
    name: {
        type: String, required: true,maxlength: 1200
    },
    email: {
        type: String, required: true,unique:true
    },
    phone: {
        type: Number, required: true,maxlength: 20
    },
    isMember:{
        type: Boolean,default:false
    }
},{
    timestamps: true
})

const User = mongoose.model<UserInfo>('User',UserModal)

export default User