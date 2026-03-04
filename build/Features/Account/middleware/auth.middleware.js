"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGoogleAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyGoogleAuthToken = (req, res, next) => {
    const { googleAuthToken } = req.body;
    if (!googleAuthToken) {
        return res.status(400).json({ message: "Google Auth Token is required." });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.decode(googleAuthToken);
        if (!decodedToken) {
            return res.status(401).json({ message: "Invalid Google Auth Token." });
        }
        req.body.decodedToken = decodedToken;
        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Error decoding Google Auth Token.", error });
    }
};
exports.verifyGoogleAuthToken = verifyGoogleAuthToken;
