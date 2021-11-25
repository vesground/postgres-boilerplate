# Plutus

This is a beginning of the coding exercise implemention.
Architecture exercise https://www.figma.com/file/uKG6xclPp0R2nQftCyP2J5/Plutus-%7C%7C-Architecture-exercise?node-id=0%3A1

### To do list:
1. Implement smart contracts to save buy/sell orders to blockchain instead of DB
2. Integrate service to get data from blockchain
3. Implement blockchain listener to run matching algorithm and save mathced orders to db
4. Couple routes and controllers together because controllers wouldn't be used anywhere else
5. Create service to store sharable logic for different parts of applicaions

## Project structure

The root of the project contains all the configuration files. All of the application code lives inside of `src/`.
Database and blockchain interfaces live in `database/` and `blockchain/`

### `server.js`

Creates an Express server running on the `PORT` environment variable (or `3000` if one isn't set, e.g. locally). Routes live in routes.js.

### `controllers.js`

Each handler function "handles" a request for a specific URL. They manage the general application logic and determine how to respond. They can access the database using the `model.js` functions. They also create the HTTP response (setting the status code, headers and response body).

### `model.js`

Each model function should handle data parsing and saving to database. We store in one place cause it could be reuesed in different parts of application like cron jobs, apis and so on. This also separate data processing of different models

### `database/connection.js`

Creates a `node-postgres` "pool" of query clients. We can use this to send database queries to select/insert/update data in our database. This object is exported so we can use it elsewhere in our app.

We tell `node-postgres` which database to connect to with the `connectionString` option. Our `.env` should contain the local dev and test URLs to be used here.

### `blockchain/connection.js`

API for application to interact with blockchain

### `blockchain/contracts.js`

Folder to keep contracts logic that will process and save data in blockcain network
