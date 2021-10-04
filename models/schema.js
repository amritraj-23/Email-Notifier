const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/alert-system');

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

})


const Alert = new mongoose.model('Alert', alertSchema);


module.exports = Alert;