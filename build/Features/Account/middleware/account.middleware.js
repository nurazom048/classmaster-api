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
exports.validateAccountCreation = void 0;
const prisma_clint_1 = __importDefault(require("../../../prisma/schema/prisma.clint"));
//********************* validateAccountCreation  ********************************************************* */
const validateAccountCreation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password, phone, email, accountType } = req.body;
    if (!email && !phone) {
        return res.status(400).json({ message: "Must provide email or phone number" });
    }
    if (!name || !username || !password || !accountType) {
        return res.status(400).json({ message: "Please fill all required fields" });
    }
    try {
        // Check if email is already taken
        if (email) {
            const emailAlreadyTaken = yield prisma_clint_1.default.accountData.findUnique({
                where: { email },
            });
            if (emailAlreadyTaken) {
                return res.status(400).json({ message: "Email already taken" });
            }
        }
        // Check if username is already taken
        const usernameAlreadyTaken = yield prisma_clint_1.default.account.findUnique({
            where: { username },
        });
        if (usernameAlreadyTaken) {
            return res.status(400).json({ message: "Username already taken" });
        }
        // Check if phone number is already used
        if (phone) {
            const phoneNumberExists = yield prisma_clint_1.default.accountData.findUnique({
                where: { phone },
            });
            if (phoneNumberExists) {
                return res.status(400).json({ message: "Phone number already exists" });
            }
        }
        next(); // Proceed to the next middleware if validation passes
    }
    catch (error) {
        console.error("Error validating account creation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.validateAccountCreation = validateAccountCreation;
