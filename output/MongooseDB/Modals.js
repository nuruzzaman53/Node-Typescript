"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserModal = new mongoose_1.default.Schema({
    name: {
        type: String, required: true, maxlength: 1200
    },
    email: {
        type: String, required: true, unique: true
    },
    phone: {
        type: Number, required: true, maxlength: 20
    },
    isMember: {
        type: Boolean, default: false
    }
}, {
    timestamps: true
});
const User = mongoose_1.default.model('User', UserModal);
exports.default = User;
