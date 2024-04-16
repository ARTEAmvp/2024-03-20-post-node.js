import mongoose from 'mongoose';
import { stringify } from 'uuid';

const userSchema = mongoose.Schema({
    id: {type: String, required: true, min: 3},
    full_name: {type: String, required: true, min: 4},
    email: {type: String, required: true, min: 5},
    password: {type: String, required: true, min: 2},
    users: {type: Array}
})

export default mongoose.model(`User`, userSchema)