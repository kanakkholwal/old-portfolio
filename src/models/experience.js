import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    description: String,
    points: [String],
    duration: {
        start: String,
        end: String,
    },
});


export default experienceSchema;