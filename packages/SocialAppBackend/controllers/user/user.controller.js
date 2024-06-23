const {saveUser} = require("../../models/user.model")


async function httpSaveUser(req, res) {
    console.log("request is", req)
   // const user = await saveUser("123");
   // return res.status(200).json(user)
}

module.exports = {
    httpSaveUser
}