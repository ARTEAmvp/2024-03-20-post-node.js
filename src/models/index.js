import mongoose from 'mongoose';

const filmSchema = mongoose.Schema({
    title: {type: String, required: true, min: 3},
    rating: {type: Number, required: true, min: 3},
    description: {type: String, required: true, min: 5},
    imdbLink: {type: String, required: true, min: 3},
    id: {type: String, required: true},
    userId: {type: String, required: true}
})

export default mongoose.model(`Film`, filmSchema)