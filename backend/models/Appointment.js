const mongoose = require('mongoose');

//Schema for appointment
const AppointmentSchema = mongoose.Schema( {
    day: {
        type: Number,
        required: true,
        max: 31,
        min: 1
    },
    month: {
        type: Number,
        required: true,
        max: 12,
        min: 1
    },
    year: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: true,
        max: 24,
        min: 0
    },
    minute: {
        type: Number,
        required: true,
        max: 60,
        min: 0
    },

    user: {
        type: String,
        default: "admin"
    }
});

//Export
module.exports = mongoose.model('Appointments', AppointmentSchema);