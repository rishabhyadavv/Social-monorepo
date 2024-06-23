
# SocialAppBackend

## Overview
SocialAppBackend is a backend application for a social media platform. It provides functionalities such as user authentication via Google OAuth, hobby management, and more. The application is built using Node.js and Express, with MongoDB as the database.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Architecture](#architecture)
- [Routes](#routes)
- [Middleware](#middleware)
- [Models](#models)
- [Services](#services)
- [Utilities](#utilities)
- [Public Assets](#public-assets)
- [Testing](#testing)
- [Security](#security)
- [Design Principles](#design-principles)
- [Contributing](#contributing)
- [License](#license)

## Installation
To install the dependencies, run:
_npm install_

## Configuration
Configuration is managed using environment variables. Create a `.env` file in the root directory and add the necessary variables:
```plaintext
MONGO_URL=your_database_uri
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
COOKIE_KEY_1=your_cookie_key_1
COOKIE_KEY_2=your_cookie_key_2
PORT=your_port
```
- **MONGO_URL**: The URI for connecting to the MongoDB database.
- **CLIENT_ID**: Google OAuth Client ID.
- **CLIENT_SECRET**: Google OAuth Client Secret.
- **COOKIE_KEY_1**: First key for cookie encryption.
- **COOKIE_KEY_2**: Second key for cookie encryption.
- **PORT**: The port on which the server will run.

## Architecture
The application follows a modular architecture with a clear separation of concerns:
- **Main Application**: Entry point and server setup.
- **Routes**: Define API endpoints.
- **Middleware**: Handle request preprocessing.
- **Models**: Define data schemas.
- **Services**: Contain business logic.
- **Utilities**: Provide helper functions.
- **Public Assets**: Serve static files.

### Main Application Files
- `app.js`: Sets up the Express application, middleware, and routes.
- `server.js`: Configures and starts the HTTP/HTTPS server.

### Configuration Files
- `.env`: Contains environment variables.
- `package.json` and `package-lock.json`: Manage dependencies and scripts.
- `key.pem` and `cert.pem`: SSL certificate and key for HTTPS.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Routes
Routes are organized into modules to handle different aspects of the application.

### Main Routes
- `/api`: Main API routes.
- `/auth`: Authentication routes.
- `/hobbies`: Hobbies related routes.
- `/user`: User related routes.

### Route Files
- `indexRoutes.js`: Aggregates all route modules.
- `api.js`: Defines the main API routes.
- `hobbies/hobbies.router.js`: Defines hobby-related routes.
- `hobbies/hobbies.controller.js`: Handles hobby-related logic.
- `auth/authRoutes.js`: Defines authentication routes.
- `auth/authController.js`: Handles authentication logic.
- `user/user.router.js`: Defines user-related routes.
- `user/user.controller.js`: Handles user-related logic.

#### Example Route Configuration (`auth/authRoutes.js`)
```javascript
const express = require('express');
const passport = require('../../services/passportService');
const authController = require('./authController');

const router = express.Router();

router.get('/google', authController.login);
router.get('/google/callback', authController.callback);
router.get('/check', authController.checkAuth);
router.get('/logout', authController.logout);

module.exports = router;
```

## Middleware
Middleware functions are used to handle various preprocessing tasks.

### Authentication Middleware
- `authMiddleware.js`: Verifies the user's session.

### Security Middleware
- `securityMiddleware.js`: Implements security measures like Helmet, rate limiting, and others.

### Error Handling Middleware
- `errorMiddleware.js`: Catches and handles errors globally.

#### Example Middleware Configuration (`authMiddleware.js`)
```javascript
const passport = require('passport');

module.exports = passport.authenticate('google', { scope: ['email'] });
```

## Models
Models define the data schemas for the application.

### MongoDB Models
- `user.mongo.js`: MongoDB schema for users.
- `hobbies.mongo.js`: MongoDB schema for hobbies.

### ORM Models
- `user.model.js`: ORM model for users.
- `hobbies.model.js`: ORM model for hobbies.

#### Example Model Configuration (`user.mongo.js`)
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  hobbies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hobbies',
    required: false,

  }]
});

module.exports = mongoose.model('SocialUser', userSchema);
```

## Services
Services contain the business logic and interact with other parts of the application.

### Passport Service
- `passportService.js`: Configures Passport.js for Google OAuth authentication.

#### Example Service Configuration (`passportService.js`)
```javascript
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

```

### MongoDB Service
- `mongo.js`: Handles MongoDB connections.

#### Example Service Configuration (`mongo.js`)
```javascript
const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  const db_connected =await mongoose.connect(MONGO_URL);
  console.log("Database connected",db_connected)
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}
```

## Utilities
Utilities provide helper functions that can be used throughout the application.

### Logger
- `logger.js`: Provides logging functionality using Winston or any other logging library.

#### Example Utility Configuration (`logger.js`)
```javascript
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
```

## Public Assets
Public assets are static files served by the application.
- `index.html`: Main HTML file.
- Various image files and JSON files for manifest and other purposes.

## Testing
Tests are located in the `tests` directory. To run the tests, use:
```bash
npm test
```

### Test Files
- `authController.test.js`: Tests for the authentication controller.
## Security
The application uses several security practices, including:
- **HTTPS**: Using `key.pem` and `cert.pem` for SSL. Please note that the self-signed certificate is being used to run the app on local hosts.
- **Security Middleware**: Implements Helmet, rate limiting, etc.
- **Google OAuth Authentication**: Secure user authentication via Google OAuth.

## Design Principles
The application is designed following these principles:
- **Modularity**: Clear separation of different parts of the application.
- **Scalability**: Easily extendable and maintainable.
- **Security**: Implementing best security practices.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

---


**Future Implementation** 
1. Save & fetch the user's hobbies.
2. Save the user's google id.
3. Implement Chat-open API.
