import express, { Request, Response } from 'express';



export const handleLoginError = (error: any, res: Response) => {
    console.error("Login error:", error);

    if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential" ||
        error.code === "auth/user-not-found"
    ) {
        return res.status(400).json({ message: "Invalid credentials or wrong password" });
    }

    if (error.code === "auth/invalid-email") {
        return res.status(400).json({ message: "Invalid email" });
    }

    return res.status(400).json({ message: error.message || "Error logging in" });
};