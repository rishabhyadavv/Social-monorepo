const express = require("express")
const api = express.Router()
const {hobbiesRouter} = require("./hobbies/hobbies.router")
const {userRouter} = require("./user/user.router")

api.use("/hobby",hobbiesRouter)
api.use("/user",userRouter)

module.exports = api