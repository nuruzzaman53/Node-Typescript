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
/*
    Project Name : CRUD application using ExpressJS with MySQL
    Version: 1.0.0
    Author: Nuruzzaman
    Date: 11-12-2021

*/
const express_1 = __importDefault(require("express"));
const Modals_1 = __importDefault(require("./Modals"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});
/* Get Route */
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.find({ isMember: true }, (err, data) => {
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
/* Post Route */
app.post('/addUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new Modals_1.default(req.body);
    yield newUser.save((err, data) => {
        if (err) {
            next(err);
        }
        res.json(data);
    });
}));
/* Update Route */
app.put('/update/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.findByIdAndUpdate({ _id: req.params.id }, (err, data) => {
        if (err) {
            next(err);
        }
        res.json(data);
    });
}));
/* Delete Route*/
app.delete('/delete/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield Modals_1.default.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            next(err);
        }
        res.json(data);
    });
}));
app.use((req, res, next) => {
    next('Route is Not Available');
});
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    }
});
/* App listen */
app.listen(4500, () => {
    console.log('App is listening on port 4500');
});
