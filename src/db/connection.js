// npm i mongodb yargs dotenv
require("dotenv").config(); // enables .env access for all in this file
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI); // calls teh conection string stored in .env