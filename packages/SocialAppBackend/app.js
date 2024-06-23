const express = require('express');
const helmet = require('helmet');
const cookieSession = require('cookie-session');
const config = require('./config/config');
const passportService = require('./services/passportService');
const securityMiddleware = require('./middlewares/securityMiddleware');
const authRoutes = require('./routes/auth/authRoutes');
const indexRoutes = require('./routes/indexRoutes');
const passport = require('passport');
const api = require("./routes/api")

const AUTH_OPTIONS = {
  callbackURL: '/auth/google/callback',
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};
const app = express();

app.use(securityMiddleware());

app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
}));
app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb) => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = (cb) => {
      cb();
    };
  }
  next();
});



// function verifyCallback(accessToken, refreshToken, profile, done) {
//   console.log('Google profile', profile);
//   done(null, profile);
// }

// passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

app.use(passportService());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", api)
// api.use('/auth', authRoutes);
// api.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/', indexRoutes);


module.exports = app;
