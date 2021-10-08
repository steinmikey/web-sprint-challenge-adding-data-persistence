const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResources(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
