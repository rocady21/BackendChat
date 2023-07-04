import {DataSource} from "typeorm"
import {User} from "./entities/user"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "Rodrigo",
    password: "oliverman12",
    database: "base de datos chat",
    entities: [User],
    logging:true,
    //lee las entidades y las vuelve a crear
    synchronize:true
})