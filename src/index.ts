import "reflect-metadata"

import express from "express"
import morgan from "morgan"
import cors from "cors"
import {AppDataSource} from "./db"
import router from "./routes/user"


const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(router)

// funcion para hacer la conexion con la base de datos
console.log("Hola xd")
async function main () {
    try {
        await AppDataSource.initialize()
        console.log("base de datos conectada")
        app.listen(3000)
        console.log("el server esucha desde el servidor 3000")
        
    } catch (error) {
        console.log(error)
    }
}

main()
