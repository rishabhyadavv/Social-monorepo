const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const config = require('../config/config');
const { saveUser } = require('../models/user.model');

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  // console.log('Google profile', profile);
  // console.log('Google id', profile.id);
  //saveUser(profile.id)
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

function passportService() {
  return [
    passport.initialize(),
    passport.session(),
  ];
}

module.exports = passportService;
