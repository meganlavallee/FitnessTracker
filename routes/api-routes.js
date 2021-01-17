const workoutModel = require("../models/model");

module.exports = function (app) {

     app.get("/api/workouts", (req, res) => {
         workoutModel.find({})
             .then(workout => {
                 res.json(workout);
             })
             .catch(err => {
                 res.json(err);
             });
     })

    app.post("/api/workouts", (req, res) => {
        workoutModel.create({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        workoutModel.findByIdAndUpdate(req.params.id,
            {
                $push: { exercises: req.body },
                $inc: { totalDuration: req.body.duration },
            },
            { new: true, runValidators: true }
        ).then(workout => {
            res.json(workout)
        });
    })

    app.get("/api/workouts/range", async function (req, res) {
        try {
            res.json((
                await workoutModel.aggregate([
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
        } catch (err) {
            res.status(500).end();
        }
    });

    module.exports = app;
}