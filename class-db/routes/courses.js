const router = require('express').Router();
let Courses = require('../models/courses.model');

router.route('/').get((req, res) => {
  Courses.find().then(
    cour => res.json(cour)
  ).catch(
    err => res.status(400).json('Error: ' + err)
  );
});

// /add is only for purpose of adding courses at the start through postman
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newCourse = new Courses({
    name,
    description
  });

  newCourse.save().then(() => res.json('Course added.')).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;