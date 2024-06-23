### Detailed Document on SocialApp

---

#### Overview

**SocialApp** is a web application designed to facilitate social interactions among users. It leverages modern web technologies and frameworks to provide a robust and scalable solution. This document provides an in-depth look into the functionalities, architectural design, setup instructions, and other relevant details about the application.

---

#### Functionalities

1. **User Authentication**:

   - **OAuth2 Integration**:
     - Allows users to log in using their Google accounts.
     - Handles authentication via Google's OAuth2 service.
     - Manages token retrieval and session handling.
   - **CORS Configuration**:
     - Configured to handle Cross-Origin Resource Sharing (CORS) issues during authentication.
     - Ensures secure and seamless login flow.

2. **User Interface**:

   - **Responsive Design**:
     - Built with React components to ensure a responsive and user-friendly interface.
   - **Dynamic Content**:
     - Real-time updates and interactions.
     - Integration with backend services for dynamic content fetching.

3. **Development and Testing**:

   - **Development Server**:
     - `npm start`: Launches the application in development mode with hot-reloading enabled.
     - Access the application at [http://localhost:3000](http://localhost:3000).
   - **Testing Suite**:
     - `npm test`: Runs the test suite using Jest and React Testing Library.
     - Interactive watch mode for continuous testing.
   - **Linting and Formatting**:
     - Configured with ESLint for code linting.
     - Prettier for code formatting.

4. **Build and Deployment**:

   - **Production Build**:
     - `npm run build`: Creates an optimized build for production deployment.
     - Minifies code and includes hashing for cache busting.
   - **Ejection**:
     - `npm run eject`: Allows customization of the build configuration by ejecting from Create React App.
     - Once ejected, provides full control over Webpack and other configurations.

5. **Proxy Setup**:
   - **Development Proxy**:
     - Configured via `setupProxy.js` to forward API requests to `http://localhost:3000`.
     - Simplifies development by avoiding CORS issues when making API calls.

---

#### Architectural Design

**SocialApp** utilizes a modular and scalable architecture, primarily built with React. Below are the key architectural components and their configurations:

1. **Frontend Framework**:

   - **React**:
     - Utilized for building the user interface.
     - Component-based architecture for modularity and reusability.
   - **Create React App**:
     - Provides a robust setup for developing React applications with zero configuration.
     - Handles build, test, and development tooling.

2. **State Management**:

   - **useState (Optional)**:
   - We will be using approapriate library depend on need

3. **API Integration**:

   - **Axios-TODO-WE WILL BE USING THIS TO CALL APIS**:
     - Used for making HTTP requests to the backend.
     - Configured with interceptors for request and response handling.

4. **Configuration Overrides**:

   - **config-overrides.js**:
     - Customizes Webpack configuration without ejecting.
     - Modifies Babel settings, Webpack plugins, etc.

5. **Security**:
   - **SSL Certificates**:
     - Includes `localhost.crt`, `localhost.key`, and `localhost.csr` for setting up HTTPS locally.
   - **Environment Variables**:
     - Sensitive information is stored in `.env` file.
       PORT=?
       HTTPS=true
     - Ensures secure handling of API keys and secrets.

---

#### Additional Resources

For more detailed information, refer to the following documentation:

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [React Router Documentation](https://reactrouter.com/web/guides/quick-start)
- [Axios Documentation](https://axios-http.com/docs/intro)

  **Current Functionalities**:

- Login with google implemenetd
- We ask user to select number of hobbies once logged in
- User see a Fun game screen to select moods
- We display a string based on mood selection

  **Future Functionalities**:

- Make this Fun game more interesting
- Call Chat open API based of user's hobbies & mood
- Display them some suggestion and engage them
