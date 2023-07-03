import {request,response} from "express"
import {User} from "../entities/user"

export const CreateUser = async(req = request,res = response)=>{
    console.log(req.body)
    res.send(req.body)
    const user = new User()
    const {firstName,lastName,age,email,password} = req.body

    user.firstNmae = firstName,
    user.lastName = lastName,
    user.age = age,
    user.email = email,
    user.password = password

    await user.save()
}


