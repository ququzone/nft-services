"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ipfs_1 = __importDefault(require("../controllers/ipfs"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const router = express_1.default.Router();
router.post('/ipfs/upload', upload.single('file'), ipfs_1.default.upload);
module.exports = router;
