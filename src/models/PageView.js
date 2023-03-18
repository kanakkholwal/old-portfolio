import mongoose from "mongoose";

const PageViewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        required: true,
        unique: true,
    },
    count: {
        type: Number,
        default: 0,
    },
    visitors: [{
        type: String,
        default: "Anonymous"
    }]

})


export default mongoose.models.PageView || mongoose.model("PageView", PageViewSchema);