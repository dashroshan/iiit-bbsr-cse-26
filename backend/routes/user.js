const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const passport = require("passport");
const router = express.Router();
const upload = multer(multer.memoryStorage());
const Student = require("../models/Student");

router.post("/image", upload.single("image"), async (req, res) => {
    const uploadDir = "images";
    fs.access(uploadDir, (error) => {
        if (error)
            fs.mkdirSync(uploadDir);
    });
    const { buffer } = req.file;
    const userId = req.user.email.substr(0, 7);
    const fileName = `${userId}.webp`;
    await sharp(buffer)
        .resize({ height: 500, width: 500 })
        .webp({ quality: 100 })
        .toFile(`./${uploadDir}/${fileName}`);
    await Student.setImage(req.user.email);
    res.send({ link: `http://localhost:3000/${uploadDir}/${fileName}` });
});

router.get(
    "/getAbout",
    async (req, res) => {
        res.send(await Student.getAbout(req.user.email));
    }
);

router.post(
    "/setAbout",
    async (req, res) => {
        await Student.setAbout(req.user.email, req.body);
        res.send();
    }
);

module.exports = router;