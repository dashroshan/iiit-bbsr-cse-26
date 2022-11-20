const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
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
        .resize({ height: 400, width: 320 })
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