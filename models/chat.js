const mongoose=require("mongoose")
const chatSchema = new mongoose.Schema({
    admin:{
        type:String,
        required:true,
    },
    name: {
        type: String,
        required: true,
    },
    invitado: {
        type: String,
    },
    mensaje:{
        type:String,
    },
})