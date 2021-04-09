"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateSchema = exports.PostCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PostCreateSchema = joi_1.default.object({
    title: joi_1.default.string().min(5).required(),
    content: joi_1.default.string().min(50).required(),
});
exports.PostUpdateSchema = joi_1.default.object({
    title: joi_1.default.string().min(5).required(),
    content: joi_1.default.string().min(50).required(),
});
