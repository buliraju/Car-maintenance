import mongoose from "mongoose";
const Schema = mongoose.Schema

const login = new Schema ({
    username: {
        type: String
    },
    password: {
        type: String
    }
});
 
export default mongoose.model('Authdata', login)