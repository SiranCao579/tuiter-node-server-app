import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    age: {type: Number, default: 20},
    salary: {type: Number, default: 10000},
    role: {type: String, default: "USER", enum: ["USER", "ADMIN", "FACULTY"]}
}, {collection: 'users'});
export default userSchema;


