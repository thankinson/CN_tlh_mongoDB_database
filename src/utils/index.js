class Movie {
    constructor(title, actor = "Npt specified"){
        this._title = title;
        this._actor = actor;
    }
    async add(collection){
        await collection.insertOne(this);
        return "Success";
        // add this to db
    }
    async list(collection){
        return await collection.find().toArray();
        // add to list
    }
    async delete(collection, input){
        return  await collection.deleteOne({title: input});
        // return "Success"
    }
    async update(collection){
        const toChange = {title: this._title}
        const updateActor = {$set: {actor: this._actor}}
        return await collection.updateOne(toChange, updateActor);
    }
};

module.exports = Movie;