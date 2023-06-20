const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    homeState: {
        type: String,
    },
    luckyNumber: {
        type: Number,
    },
    birthday: {
        month: {
            type: Number,
        },
        day: {
            type: Number,
        },
        year: {
            type: Number,
        },
    }
}, {timestamps: true})

const Students = mongoose.model('Students', StudentSchema)

module.exports = Students;