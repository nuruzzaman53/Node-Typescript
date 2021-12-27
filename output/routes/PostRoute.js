"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../model/index"));
const postRouter = express_1.default.Router();
postRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = yield index_1.default.create(Object.assign({}, req.body));
    return res.json(newPost);
}));
postRouter.get('/read', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const readPost = yield index_1.default.findAll({ where: {} });
    return res.json(readPost);
}));
postRouter.get('/read/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const postById = yield index_1.default.findOne({ where: id });
    return res.json(postById);
}));
postRouter.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const postUpdate = yield index_1.default.update({
        title: req.body.title,
        description: req.body.description
    }, { where: id });
    return res.json({ message: 'Post Updated SUccessfully' });
}));
postRouter.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const postById = yield index_1.default.destroy({ where: id });
    return res.json({ msg: 'Post Deleted' });
}));
exports.default = postRouter;
