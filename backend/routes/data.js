const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get(
    "/get2021",
    async (req, res) => {
        res.send(await Student.getAll(2));
    }
);

router.get(
    "/get2022",
    async (req, res) => {
        res.send(await Student.getAll(1));
    }
);

module.exports = router;