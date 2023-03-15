import mongoose from "mongoose";

const PageViewSchema = new mongoose.Schema({
    page: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    },
    visitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

})

// Creating Visitor Table in visitCounterDB
PageViewSchema.methods.getVisitors = async function () {
    return await this.populate('visitors');
}

export default mongoose.models.PageView || mongoose.model("PageView", PageViewSchema);