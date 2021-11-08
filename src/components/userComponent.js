import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Doğam","Özdemir","İstanbul")
let user2 = new User(2,"Semih","Bekiroğlu","Muş")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))



let customer = {id:1, firstName:"Doğan"}

//prototyping
customer.lastName = "Özdemir"

console.log(customer.lastName)