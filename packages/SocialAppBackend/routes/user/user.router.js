const express = require("express")
const {httpSaveUser} = require("./user.controller")
const userRouter = express.Router()

userRouter.post("/", httpSaveUser)

module.exports = {
    userRouter
}