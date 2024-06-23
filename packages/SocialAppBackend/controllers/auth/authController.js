const passport = require('passport');

const login = passport.authenticate('google', { scope: ['email'] });

const callback = passport.authenticate('google', {
  failureRedirect: '/failure',
  session: true,
  successRedirect:"/"
});

const checkLogin = (req, res) => {
  console.log("coming here")
  passport.authenticate('google', { scope: ['email'] })
};

const checkAuth = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
};

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

module.exports = {
  login,
  callback,
  checkAuth,
  logout,
  checkLogin
};
