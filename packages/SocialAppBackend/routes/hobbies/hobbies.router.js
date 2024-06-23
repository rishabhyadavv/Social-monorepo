const express = require("express")
const {httpGetAllHobbies,httpSaveHobby} = require("../../controllers/hobbies/hobbies.controller")
const hobbiesRouter = express.Router()

hobbiesRouter.get("/", httpGetAllHobbies)
hobbiesRouter.post("/", httpSaveHobby)

module.exports = {
    hobbiesRouter
}