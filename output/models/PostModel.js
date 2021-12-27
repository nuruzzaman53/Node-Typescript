"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    title: {
        type: String, maxlength: 200, required: true
    },
    description: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now
    },
    status: {
        type: String,
        enum: ['published', 'Pending', 'Rejected']
    },
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User'
    }
});
const Post = mongoose_1.default.model('Post', postSchema);
exports.default = Post;
