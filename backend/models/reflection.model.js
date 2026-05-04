const mongoose = require('mongoose');

const ReflectionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required : true,  
        },

        day: {
            type: Number,
            required: true,
            min: 1,
            max: 30,
        },

        content: {
            type: String,
            required: true,
        },

        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Preventing duplicate reflections for the same day

module.exports = mongoose.model('Reflection', ReflectionSchema);


//navigate("/", { state: { fromCompletion: true, newDay: day } });