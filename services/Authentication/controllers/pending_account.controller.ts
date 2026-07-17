import { Request, Response } from 'express';
import admin from 'firebase-admin';
import { joinHisOwnNoticeboard } from './auth.methods';
import prisma from '../../../prisma/schema/prisma.clint';
import { sendTelegramMessage } from '../../../utils/telegram';

// ***************** allPendingAccount *******************************/
export const allPendingAccount = async (req: Request, res: Response) => {
    try {
        const accounts = await prisma.pendingAccount.findMany({
            where: { isAccept: false },
            orderBy: { sendTime: 'asc' }
        });
        res.status(200).json({ message: "All pending accounts", pendingAccounts: accounts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving pending accounts" });
    }
};

//************** acceptPending *********************//
export const acceptPending = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        // Step 1: Retrieve the pending account by ID
        const pendingAccount = await prisma.pendingAccount.findUnique({
            where: { id }
        });
        if (!pendingAccount) {
            return res.status(404).json({ message: "Pending account not found" });
        }
        if (pendingAccount.isAccept) {
            return res.status(200).json({ message: "Request already accepted" });
        }

        const { id: pendingAccountId, name, username, phone, email, googleSignIn, account_type, image, password } = pendingAccount;

        // Step 2: Validate required fields
        if (!name || !email || !username) {
            return res.status(400).json({ message: "Required fields are missing" });
        }

        // Step 3: Check if email is already associated with a Firebase user
        try {
            const firebaseUser = await admin.auth().getUserByEmail(email);
            if (firebaseUser.uid !== pendingAccountId) {
                return res.status(400).json({ message: "User with this email already exists in Firebase" });
            }
        } catch (error: any) {
            if (error.code !== 'auth/user-not-found') {
                return res.status(500).json({ message: "Error verifying email in Firebase" });
            }
        }

        // Step 4: Check for existing accounts in the database
        const [emailAlreadyUsed, usernameAlreadyTaken, phoneAlreadyUsed] = await Promise.all([
            prisma.accountData.findFirst({ where: { email } }),
            prisma.account.findFirst({ where: { username } }),
            phone ? prisma.accountData.findFirst({ where: { phone } }) : null,
        ]);

        if (emailAlreadyUsed) return res.status(400).json({ message: "Email already taken" });
        if (usernameAlreadyTaken) return res.status(400).json({ message: "Username already taken" });

        // Step 5: Create a new account in the database
        const newAccount = await prisma.account.create({
            data: {
                id: pendingAccountId,
                name,
                username,
                isVerified: true,
                accountType: account_type,
                accountData: {
                    create: { email, googleSignIn: googleSignIn ?? false, phone, password },
                },
            },
        });

        // Step 6: Update or create a Firebase user
        await admin.auth().updateUser(newAccount.id, {
            displayName: name,
            photoURL: image || undefined,
            email,
        });

        // Step 7: Update the pending account status
        await prisma.pendingAccount.update({
            where: { id },
            data: { isAccept: true }
        });

        // Step 8: Join user's own noticeboard
        const result = await joinHisOwnNoticeboard(pendingAccountId);
        if (result && result.message && result.message.includes('Error')) {
            return res.status(500).json(result);
        }

        // Send Telegram notification
        await sendTelegramMessage(
            `✅ <b>Academy Request Accepted</b>\n\n` +
            `👤 <b>Name:</b> ${name}\n` +
            `📧 <b>Email:</b> ${email}\n` +
            `🔑 <b>Username:</b> @${username}\n` +
            `🏛️ <b>Account Type:</b> ${account_type}`
        );

        return res.status(200).json({ message: "Account created successfully", newAccount });
    } catch (error: any) {
        console.error("Error accepting pending request:", error.message);
        res.status(500).json({ message: "Error accepting pending request" });
    }
};
