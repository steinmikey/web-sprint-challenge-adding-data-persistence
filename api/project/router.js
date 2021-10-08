const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
