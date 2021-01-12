// Requiring Items
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Function for all workouts
const workouts = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Choose cardio or resistance or strenth"
        },
        name: {
            type: String,
            trim: true,
            required: "What's the name of this exercise?"
        },
        duration: {
            type: Number,
            trim: true,
            required: "How long do you want to do this for?"
        },
        distance: {
            type: Number,
            trim: true,

        },
        stroke: {
            type: Number,
            trim: true,

        },
        technique: {
            type: Number,
            trim: true,

        },
    }],
},
    {
        //code used with virtuals, commented out until 
        // toObject: {
        //     virtuals: true
        // },
        toJSON:
        {
            virtuals: true
        }
    }
);

workouts.virtual("totalDuration").get(function () {
    return this.exercises
        .reduce((sum, exercise) =>
            sum + exercise.duration, 0);
});

const workoutModel = mongoose.model("workoutModel", workouts)

module.exports = workoutModel;