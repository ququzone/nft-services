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
Object.defineProperty(exports, "__esModule", { value: true });
const nft_storage_1 = require("nft.storage");
const upload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const apiKey = process.env.NFT_STORAGE_KEY || '';
    const client = new nft_storage_1.NFTStorage({ token: apiKey });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const content = new nft_storage_1.Blob([(_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer], { type: (_b = req.file) === null || _b === void 0 ? void 0 : _b.mimetype });
    const metadata = yield client.storeBlob(content);
    return res.status(200).json({ hash: metadata });
});
exports.default = { upload };
