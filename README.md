# Rest api

Customer API

This is a Customer API built with Node.js and Express. It includes various features such as authentication, JWT verification, and error handling.

## Table of Contents

- Installation
- Usage
- Routes
- Middleware
- Configuration

## Installation

1. Clone the repository:
    ```sh
    git clone <https://github.com/utzmankazeem/api-authent-authoriz.git>
    ```
2. Navigate to the project directory:
    ```sh
    cd api-authent-authoriz
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a .env file in the root directory and add your environment variables:
    ```env
    PORT=2000
    DB_URI=<your_mongodb_connection_string>
    ACCESS_TOKEN_SECRET=<your_token_secret>
    REFRESH_TOKEN_SECRET=<your_refresh_secret_key>
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The local server will be running at `http://localhost:2000`.


## Routes

- `GET /` - Returns the app information.
- `POST /auth` - Handles user authentication.
- `GET /api` - Protected route that requires JWT verification.


## Middleware

- `logger` - Logs request details.
- `credentials` - Handles credentials check and CORS.
- `cors` - Enables Cross-Origin Resource Sharing.
- `express.urlencoded` - Parses URL-encoded bodies.
- `express.json` - Parses JSON bodies.
- `cookieParser` - Parses cookies.
- `verifyJwt` - Verifies JWT tokens for protected routes.
- `errorHandler` - Handles errors.

## Configuration

- key.js - Contains the database connection logic.
- corsOptions.js - Contains the CORS configuration.

```ts
    code to use :ES 14,  ES module
    functions : async/await
    proper usage of: try/catch in async code block
    Authorization: cookies and middlewares
    using Node : version 18.2.0 
```

## Technology Stack

api: Node.js, Express.js

Database: MongoDB

Authentication: jsonwebtoken

Authorization: cookies

Deployment: AWS



#Javascript
#JWT
#Cookies
#Nodejs
#api
#MongoDB
#MVCS
#Middlewares