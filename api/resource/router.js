const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Resource.findById(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Resource.findById(req.params.id)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
