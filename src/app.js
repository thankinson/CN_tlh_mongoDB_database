const yargs = require("yargs");
const {client, connection} = require("./db/connection");
const Movie = require("./utils/index");

const app = async (yargsObj) => {
    console.log("apphit")
    const collection = await connection();
    try {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.add(collection));
            //take movie info add to mongo db. console log success message
        } else if (yargsObj.list) {
            const movie = new Movie(yargsObj.tital, yargsObj.actor);
            console.log(await movie.list(collection));
            //list all movies in database
        } else if (yargsObj.delete){
            const movie = new Movie(yargsObj.tital, yargsObj.actor);
            await movie.delete(collection);
            // deletes an enrty
        } else if (yargsObj.update){
            const movie = new Movie(yargsObj.tital, yargsObj.actor);
            console.log(await movie.update(collection));  
        } else {
            console.log("Incorrect Command");
        };
        await client.close(); // closes connection
    } catch (error) {
        console.log(error);
    };
};

app(yargs.argv); 