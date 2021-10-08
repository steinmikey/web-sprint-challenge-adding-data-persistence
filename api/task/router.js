const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
