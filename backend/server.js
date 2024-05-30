const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./Config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

// creating instance
const app = express();
dotenv.config();
connectDB();

// it is used to tell the app to accept the data in json format
app.use(express.json());

// creating api -1
// get request - to fetch the data from our database
// callback function is used
// we are sending the simple string
app.get("/", (req, res) => {
  res.send("API is Running Successfully!");
});

// These 2 were just to practice!!

// // we are sending the data whose location is ../data/data.js
// // official end point or the url -> http://localhost:5000/api/chat
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// // parameter 1-> /api/chat/:id here, id is a variable to fetch the specific chat.
// app.get("/api/chat/:id", (req, res) => {
//   // below req gives the huge request object and we require params and id variable.
//   //   console.log(req);
//   // below req gives the id in the console when searched in the url with as http://localhost:5000/api/chat/1
//   //   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   console.log(singleChat);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

// starting our own server
app.listen(PORT, console.log(`Server started on port ${PORT}`.green.bold));
