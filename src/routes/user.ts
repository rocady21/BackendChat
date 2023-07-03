import {Router} from "express"
import {CreateUser} from "../controllers/user"
const router = Router()

router.get("/hello",(req,res)=> {
    res.send("Hello world")
})


router.post("/users",CreateUser)

export default router