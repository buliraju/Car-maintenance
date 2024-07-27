import mongoose from "mongoose"
const Schema = mongoose.Schema

const spares = new Schema ({
    title : {
        type: String
    },
    price : {
        type: Number
    },
    category : {
        type: String
    },
    image : {
        type: String
    }
})

export default mongoose.model('spares', spares)