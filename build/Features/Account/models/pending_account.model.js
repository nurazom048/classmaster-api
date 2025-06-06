"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongodb_connection_1 = require("../../../prisma/mongodb.connection");
const client_1 = require("@prisma/client");
const pendingAccountSchema = new mongoose_1.Schema({
    isAccept: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    username: {
        type: String,
        required: true,
        unique: true, // Ensure username is unique
    },
    address: { type: String, required: false },
    name: { type: String, required: false },
    about: { type: String, required: false },
    contractInfo: { type: String, required: false },
    phone: { type: String, required: false },
    image: { type: String, required: false },
    coverImage: { type: String, required: false },
    sendTime: {
        type: Date,
        required: true,
        default: Date.now,
    },
    password: { type: String, required: false },
    account_type: {
        type: String,
        enum: [client_1.AccountType.user, client_1.AccountType.student, client_1.AccountType.academy],
        required: true,
        default: client_1.AccountType.user,
    },
    googleSignIn: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    // Ensure no extra fields (like EIIN) are accidentally added
    strict: true,
});
const PendingAccount = mongodb_connection_1.maineDB.model('PendingAccount', pendingAccountSchema);
exports.default = PendingAccount;
