const mongoose = require('mongoose');
require('dotenv').config();

const DB = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.c6vjd.mongodb.net/Amritraj?retryWrites=true&w=majority`;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Sucessful");
}).catch((err)=>{
    console.log(err.message);
})

const alertSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        trim: true,
        required: true,
    },
    LastName: {
        type: String,
        trim: true,
        required: true,
    },
    Gender: {
        type: String,
        trim: true,
        required: true,
    },
    Email: {
        type: String,
        trim: true,
        required: true,
    },
    PhoneNumber: Number,
    Status: String,
    Date: {
        type: Date,
        default: Date.now
    },

},{
    "timestamps" : true
})


const Alert = new mongoose.model('Alert', alertSchema);

Alert.collection.createIndex({"PhoneNumber" : 1},(err)=>{
    if(err){
        console.log(arr);
    }else{
        console.log("index created successfully");
    }
})


module.exports = Alert;