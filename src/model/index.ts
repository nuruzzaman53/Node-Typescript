import {Model,DataTypes} from 'sequelize'
import db from '../config/database.config'

interface PostField {
    title:string
    description:string
}

export default class Post extends Model<PostField> {}

Post.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:'post'
  }
)