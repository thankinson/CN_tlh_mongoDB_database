// npm i mongodb yargs dotenv
require("dotenv").config(); // enables .env access for all in this file
const { MongoClient } = require("mongodb");
console.log("connection.js hit");
const client = new MongoClient(process.env.MONGO_URI); // calls the conection string stored in .env
console.log("conection hit again");
const connection = async () => {
    try{
        await client.connect();
        const db = client.db("movies");
        return db.collection("Film");
    } catch (error) {
        console.log(error);
    };
};

module.exports = {client, connection}; // required