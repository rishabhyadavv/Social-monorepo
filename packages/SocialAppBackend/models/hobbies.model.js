const User = require('./user.mongo');
const Hobbies = require('./hobbies.mongo');

async function saveHobby(googleId, hobby) {
  try {
    let user = await User.findOne({ googleId });

    if (!user) {
        throw new Error('User not found');
    //   user = new User({ googleId });
    //   await user.save();
    }

    const newHobby = new Hobbies({ hobby, user: user._id });
    await newHobby.save();

    user.hobbies.push(newHobby._id);
    await user.save();

    return newHobby;
  } catch (error) {
    console.error('Error saving hobby:', error);
    throw error;
  }
}

async function getAllHobbies(googleId) {
    try {
      const user = await User.findOne({ googleId }).populate('hobbies');
      
      if (!user) {
        throw new Error('User not found');
      }
  
      return user.hobbies;
    } catch (error) {
      console.error('Error getting hobbies:', error);
      throw error;
    }
  }

  
module.exports = {
    saveHobby,
    getAllHobbies,
}
