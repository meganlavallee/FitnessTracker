const WorkoutModel = require("../models/model");
// const router = require("mongoose").Router();

module.exports = function (app) {

     app.get("/api/workouts/", (req, res) => {
         WorkoutModel.find({})
             .then(workout => {
                 res.json(workout);
             })
             .catch(error => {
                 res.json(error);
             });
     })

    app.post("/api/workouts", (req, res) => {
        WorkoutModel.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch(error => {
                res.json(error);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        WorkoutModel.findByIdAndUpdate(req.params.id,
            {
                $push: { exercises: req.body },
                $inc: { totalDuration: req.body.duration },
            },
            { new: true, runValidators: true }
        ).then(workout => {
            res.json(workout)
            console.log(workout)
        });
    })

    app.get("/api/workouts/range", async function (req, res) {
        try {
            res.json((
                await WorkoutModel.aggregate([
                    {
                        $addFields: {
                            totalDuration: {
                                $sum: "$exercises.duration",
                            },
                        },
                    },
                ])
                    .sort({ day: -1 })
                    .limit(7)
            ).reverse());
        } catch (error) {
            res.status(500).end();
            console.log(error)
        }
    });

    // module.exports = app;
}