const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
}, { timestamps: true });

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;