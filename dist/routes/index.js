"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const ticket_1 = __importDefault(require("./ticket"));
const router = express_1.default.Router();
router.use("/user", user_1.default);
router.use("/user/ticket", ticket_1.default);
exports.default = router;
