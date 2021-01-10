const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "resistance",
        name: "placeholder",
        duration: 20,
        distance: 100,
        stroke: 10,
        technique: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
