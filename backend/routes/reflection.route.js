const express = require("express");
const Reflection = require("../models/reflection.model.js");
const router = express.Router();
const {getReflections, getReflection, createReflection, updateReflection, deleteReflection} = require('../controllers/reflection.controller.js');

router.get('/', getReflections);

router.get("/user/:userId/day/:day", getReflection);

router.post("/", createReflection);

router.put("/user/:userId/day/:day", updateReflection);

router.delete("/:id", deleteReflection);

module.exports = router;