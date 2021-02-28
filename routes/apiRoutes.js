const router = require("express").Router();
const db = require("../models/");



// GET Routes for api.js to get the last workout and range
router.get("/api/workouts/", (req, res) => {
    db.Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
      }).catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", ({ query }, res) => {
    db.Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
      }).catch(err => {
        res.json(err);
      });
  });

// POST route that creates a new workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then(dbWorkouts => {
          console.log(dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

// PUT route that updates a workout
router.put("/api/workouts/:id", ({ body, params}, res) => {
    console.log(params)
    db.Workout.findByIdAndUpdate(params.id,
        { 
            $push: 
            { 
                exercises: body 
            } 
        },
        { new: true, runValidators: true }
      )
      .then(dbWorkouts => res.json(dbWorkouts))
      .catch(err => {
        console.log("err", err)
        res.json(err)
      })
    });

// Delete Route
router.delete("/api/workouts/:id", (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbWorkouts) => {
      res.json(dbWorkouts);
    });
  });

  module.exports = router;