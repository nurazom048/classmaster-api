import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();

try {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // \n গুলোকে আসল নিউ-লাইনে কনভার্ট করার ট্রিক
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
        console.log("🔥 Firebase Admin Initialized Successfully!");
    }
} catch (error: any) {
    console.error("❌ Firebase Initialization Error:", error.message);
}

export default admin;