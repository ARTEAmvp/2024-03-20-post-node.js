import mongoose from 'mongoose';

const filmGroupSchema = mongoose.Schema({
    title: {type: String, required: true, min: 3},
    userEmail: {type: String, required: true, min: 3},
    likedMovies: {type: Array},
    films_ids: {type: Array}
})

export default mongoose.model(`FilmGroup`, filmGroupSchema)