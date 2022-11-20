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
    const Student = await StudentSchema.findOneAndUpdate(
        { email: email },
        {
            dataSet: true,
            ...about,
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