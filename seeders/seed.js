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
        name: "Low Intensiry Resistance Set",
        reps: 3,
        distance: 25,
        duration: 40,
        stroke: freestyle,
        technique: buckets,

        reps: 1,
        distance: 75,
        duration: 230,
        stroke: freestyle,
        technique: buckets,

        reps: 1,
        distance: 50,
        stroke: freestyle,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "strength",
        name: "strength swim",
        reps: 4,
        distance: 50,
        stroke: all,
        technique: form,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "cardio",
        name: "seal jacks",
        reps: 30,
        pace: focused,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "kettlebell",
        reps: 5,
        technique: form,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "kickboard time",
        duration: lap,
        distance: 50,
        stroke: kick,
        technique: 4,
        pace: fast,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "cardio",
        name: "100 workout",
        reps: 5,
        distance: 100,
        stroke: freestyle,
        pace: fast,
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "strength",
        name: "sprints",
        distance: 25,
        stroke: all,
        technique: speed,
        pace: fast,
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "pull set",
        reps: 6,
        distance: 50,
        stroke: freestyle,
        technique: buyoy,
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "cardio",
        name: "1000 meter everything",
        distance: 1000,
        stroke: all,
        technique: stroke,
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "stength",
        name: "half mile",
        distance: 800,
        stroke: choice,
        technique: breathing,
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + "workouts");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
