const mongoose=require("mongoose")
const chatSchema = new mongoose.Schema({
    mensaje:{
        type:String,
        required:true,
    },
    sala: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
})