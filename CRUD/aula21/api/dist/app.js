"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const db_1 = __importDefault(require("./db"));
const prompt = (0, prompt_sync_1.default)();
async function main() {
    await db_1.default.initialize();
}
main();
console.log(db_1.default);
