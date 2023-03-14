import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    institute: String,
    degree: String,
    field: String,
    description: String,
    duration: {
        start: String,
        end: String,
    },
});


export default EducationSchema;