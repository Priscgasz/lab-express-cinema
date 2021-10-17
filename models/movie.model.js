const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String, 
    directory: String, 
    stars: [String], 
    image: String, 
    description: String, 
    showtimes: [String],
}); 

const movieModel = mongoose.model("movies", movieSchema); 
module.exports = movieModel;