# Social Monorepo Project

Welcome to the Social Monorepo project! This repository houses both the frontend and backend for our social application. We're utilizing a monorepo structure to manage shared code between a ReactJS web application and a React Native mobile application.

## Project Overview

### Technologies Used
- **Backend**: Node.js
- **Frontend**: ReactJS (with plans to add a React Native app)

### Monorepo Concept
We're using a monorepo approach to facilitate code sharing between the web and mobile applications. This includes shared state management, network classes, utilities, and more. This setup helps avoid redundancy and saves space by keeping common dependencies at the root level.

### Directory Structure
Here's an overview of our project structure:

```
social-monorepo/
├── lerna.json
├── package.json
├── packages/
│   ├── SocialApp/
│   │   ├── package.json
│   ├── SocialAppBackend/
│   │   ├── package.json
│   ├── SocialAppReactNative/
│   │   ├── package.json
```

## Managing the Repository
We use Lerna for managing our monorepo. For more details on how to use Lerna, please refer to [Lerna's documentation](https://lerna.js.org/).

### Features
- **Shared Codebase**: Both ReactJS and React Native apps share code for state management, network requests, and utilities.
- **Efficient Dependency Management**: Common libraries are installed at the root level to avoid redundancy and reduce overall package size.

## Getting Started
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/social-monorepo.git
   cd social-monorepo
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Run the Applications**:
   - For the web app:
     ```sh
     cd packages/SocialApp
     npm start
     ```
   - For the backend:
     ```sh
     cd packages/SocialAppBackend
     npm start
     ```
   - For the mobile app (React Native- Not ready yet):
     ```sh
     cd packages/SocialAppReactNative
     npm start
     ```

## Contributing
We welcome contributions! Please fork the repository and create a pull request for any changes.

## License
This project is licensed under the MIT License.

---

Please refer to the included diagram for a visual understanding of our monorepo setup. If you have any questions or need further assistance, feel free to open an issue or reach out to the maintainers.

Happy coding!
