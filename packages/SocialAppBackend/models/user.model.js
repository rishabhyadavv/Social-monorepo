 const SocialUser = require('./user.mongo');

async function saveUser(googleId) {
  console.log("coming here", googleId)
  try {
    let user = await SocialUser.findOne({ googleId });

    if (!user) {
      user = new SocialUser({ googleId });
      await user.save();
    }
    return true;
  } catch (error) {
    console.error('Error saving hobby:', error);
    throw error;
  }
}

module.exports = {
  saveUser
}