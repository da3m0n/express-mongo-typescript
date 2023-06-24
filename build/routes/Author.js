"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Author_1 = __importDefault(require("../controllers/Author"));
const router = express_1.default.Router();
//
// router.post('/create', controller.createAuthor);
// router.get('/get/:authorId', controller.readAuthor);
router.get('/get', Author_1.default.readAll);
module.exports = router;
