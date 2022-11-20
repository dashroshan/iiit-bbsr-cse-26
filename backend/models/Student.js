const mongoose = require("mongoose");

const StudentSchema = mongoose.model("student", new mongoose.Schema({
    name: String,
    city: String,
    state: String,
    about: String,
    github: String,
    linkedin: String,
    instagram: String,
    email: String,
    id: String,
    imageSet: Boolean,
    dataSet: Boolean,
    year: Number,
}));

module.exports.setImage = async function (email) {
    const Student = await StudentSchema.findOneAndUpdate(
        { email: email },
        {
            imageSet: true,
            $setOnInsert: {
                dataSet: false
            }
        },
        { new: true, upsert: true }
    ).select({ _id: 0 });
}

module.exports.setAbout = async function (email, about) {
    let year;
    if (email.substr(2, 2) === "22") year = 1;
    else if (email.substr(2, 2) === "21") year = 2;
    const stdid = email.substr(0, 7);
    const Student = await StudentSchema.findOneAndUpdate(
        { email: email },
        {
            dataSet: true,
            ...about,
            year: year,
            id: stdid,
            $setOnInsert: {
                imageSet: false,
            }
        },
        { new: true, upsert: true }
    ).select({ _id: 0 });
}

module.exports.getAbout = async function (email) {
    const Student = await StudentSchema.findOne({ email: email });
    if (Student == null) return { exist: false };
    return { exist: true, ...Student._doc }
}

module.exports.getAll = async function (year) {
    let Students = await StudentSchema.find({ imageSet: true, dataSet: true, year: year });
    Students.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    return Students;
}