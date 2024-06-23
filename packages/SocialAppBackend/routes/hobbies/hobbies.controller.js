const {getAllHobbies,saveHobby} = require("../../models/hobbies.model")


async function httpGetAllHobbies(req, res) {
    const hobbies = await getAllHobbies("123");
    return res.status(200).json(hobbies)
}

async function httpSaveHobby(req, res) {
    const hobbies = await saveHobby("123",[]);
    return res.status(200).json(hobbies)        
}

module.exports = {
    httpGetAllHobbies,
    httpSaveHobby
}