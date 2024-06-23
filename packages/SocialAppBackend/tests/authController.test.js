const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const passport = require('passport');
const app = require('../app');
const server = require('../server');

chai.use(chaiHttp);
chai.use(sinonChai);
const expect = chai.expect;

describe('Google Auth Routes', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  after(() => {
   server.close(); // Ensure server is closed after tests to free up resources
  });

  it('should redirect to Google for authentication', (done) => {
    chai.request(app)
      .get('/auth/google')
      .end((err, res) => {
        expect(res).to.redirect;
        expect(res).to.have.header('location', /accounts\.google\.com/);
        done();
      });
  });

  it('should handle Google callback and redirect to success', (done) => {
    // Mocking the Google OAuth callback with dummy data
    const userProfile = {
      id: '123456',
      displayName: 'Test User',
      emails: [{ value: 'testuser@example.com' }]
    };

    sandbox.stub(passport, 'authenticate').callsFake((strategy, options) => {
      return (req, res, next) => {
        req.logIn(userProfile, function(err) {
          if (err) { return next(err); }
          res.redirect('/');
        });
      };
    });

    chai.request(app)
      .get('/auth/google/callback')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.redirect;
        expect(res).to.have.header('location', '/');
        done();
      });
  });
});
