"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "Rodrigo",
    password: "oliverman12",
    database: "base de datos chat",
    entities: [user_1.User],
    logging: true,
    //lee las entidades y las vuelve a crear
    synchronize: true
});
