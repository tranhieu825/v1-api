"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateSchema = exports.CommentCreateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Kiểm tra form create
exports.CommentCreateSchema = joi_1.default.object({
    content: joi_1.default.string().max(100).required(),
});
// Kiểm tra form update
exports.CommentUpdateSchema = joi_1.default.object({
    content: joi_1.default.string().max(100).required(),
});
