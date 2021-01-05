// Import model to use database function
const workout = require("../models/workouts.js");

// Router
const router = require("mongoose").Router();

// Get
router.get("/", function (req, res) {
    workout.all(function(data) {
        const hbsObject = {
            workout: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add New Data
router.post("/api/add-workout", function (req, res) {

    const workout_name = req.body.workout_name;
    workout.insert(workout_name, function (result) {
// ID
      res.json({ id: result.insertId });
      console.log("Added Workout");
    });
  });

  // Update data
router.put("/api/workout/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    workout.update({
      wurk: req.body.wurk
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
        console.log("Updated");
      }
    });
  });
  
  // Delete data
  router.delete("/api/delete-workout/:id", function (req, res) {
    workout.delete(req.params.id, function (err, data) {
      if (err) {
        res.status(500).end();
      } else if (data.affectedRows == 0) {
        res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;