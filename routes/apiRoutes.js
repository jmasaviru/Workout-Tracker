const router = require("express").Router();
const Workout = require("../models/workout.js");

// GET routes to get the last workout and range
router.get("/api/workouts/", (req, res) => {
    Workout.find({}).then(Workout => {
        console.log("Workout : " + Workout);
        res.json(Workout);
      }).catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(Workout => {
        console.log("Workout : " + Workout);
        res.json(Workout);
      })
      .catch(err => {
          res.json(err);
      });
  });

// POST route that creates a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(Workout => {
        console.log("Workout : " + Workout);
        res.json(Workout);
      })
      .catch(err => {
          res.json(err);
      });
  });

// PUT route that updates a workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(params)
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } },
        { new: true, runValidators: true })
      .then(Workout => { res.json(Workout);
      }).catch(err => {
        console.log("err", err)
        res.json(err)
      })
    });

// Delete Route
router.delete("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    }).catch(err => {
      res.json(err);
    });
  });

  module.exports = router;