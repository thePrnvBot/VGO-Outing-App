const mongoose = require("mongoose")

const Schema = mongoose.Schema

const outingSchema = newSchema({
    leaveType : {
        type : String,
        required : true,
        enum : ['Parent Leave', 
        'Official Leave', 
        'Summer Vacation', 
        'Winter Vacation', 
        'Home Town', 
        'Emergency Leave',
        'Local Guardian',
        'Outing']
    },
    visitingPlace : {
        type : String,
        required : true
    },
    reason : {
        type : String,
        required : true
    },
    fromDate : {
        type : Date,
        required : true
    },
    fromTime : {
        type : String,
        required : true
    },
    toDate : {
        type : Date,
        required : true
    },
    toTime : {
        type : String,
        required : true
    }
}, { timestamps : true})

module.exports = mongoose.model('OutingDetail', outingSchema)
