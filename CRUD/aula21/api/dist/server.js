"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let server = (0, express_1.default)();
server.use((0, cors_1.default)());
;
server.get('/', (req, res) => {
    res.status(200).json({ text: 'Hello world!' });
});
server.listen(3000, () => {
    console.log("servidor iniciado na porta 3000");
});
