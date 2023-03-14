import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: {
        title: String,
        url: String,
    },
    github: String,
    tags: [String],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
});


export default ProjectsSchema;