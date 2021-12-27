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
const Modals_1 = __importDefault(require("../MongooseDB/Modals"));
const router = express_1.default.Router();
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.find({}, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: 'No Data Found '
            });
        }
        else {
            res.status(200).json(data);
        }
    });
}));
router.post('/addUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new Modals_1.default(req.body);
    yield newUser.save((err, data) => {
        if (err) {
            return res.status(200).json({
                message: 'User adding failed'
            });
        }
        res.json(data);
    });
}));
/* Update Route */
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.updateOne({ _id: req.params.id }, { $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            isMember: req.body.isMember
        } }, {
        new: true,
        useFindAndModify: false
    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: 'Update Action Failed'
            });
        }
        res.status(200).json({
            messsage: 'User Information Updated'
        });
    });
}));
/* Delete Route*/
router.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(500).json({
                message: 'Delete Action Failed'
            });
        }
        else {
            res.status(200).json({ message: 'Data Deleted Successfully' });
        }
    });
}));
exports.default = router;
