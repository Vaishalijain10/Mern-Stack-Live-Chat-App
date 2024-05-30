backend
------------------------------------------------------------------------------------------------
run server.js  -> before adding script in package.json file. 
                (just change the name of the main file -> from index.js to server.js)
                node server.js
                (after adding additional script)  ->    "start": "node server.js"
                npm start 
                (after adding nodemon package and additional script)  -> "start": "nodemon server.js"
                npm start
-------------------------------------------------------------------------------------------------
1. npm init -y
2. npm i express dotenv nodemon 
3. create server.js , .env file, and data folder 
4. created Models folder -> chatModels.js -> we store schema.
5. npm i mongoose -> it is used to connect the mongodb database and make queries to our db.
6. npm i colors -> its is used to customize the termial
7. created config folder : db.js file. Additionally modified .env file and server.js to connect it with the database.
8. created routes folder : userRoutes to handle the routes i.e api (endpoints) and controllers folder : userControllers file where the logic of the routes will be written -> handle errors.
9.  npm i express-async-handler -> used to monitor the errors in controllers folder.
10. To generate token -> we created a file in config folder -> generateToken.js
11. npm i jsonwebtoken -> jwt -> json web token -> helps in authorization -> encode and decode 
12. tested with postman -> created a collection Talk-A-Tive and an environment variable Talk-A-Tive
13.  