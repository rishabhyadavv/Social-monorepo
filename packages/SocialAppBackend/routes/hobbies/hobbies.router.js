const express = require("express")
const {httpGetAllHobbies,httpSaveHobby} = require("./hobbies.controller")
const hobbiesRouter = express.Router()

hobbiesRouter.get("/", httpGetAllHobbies)
hobbiesRouter.post("/", httpSaveHobby)

module.exports = {
    hobbiesRouter
}