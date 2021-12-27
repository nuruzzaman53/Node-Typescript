import { Sequelize } from 'sequelize'

const db = new Sequelize('node_mysql_db','root','',{

    storage:'./database.mysql',
    dialect:'mysql',
    logging:false
    
})

export default db