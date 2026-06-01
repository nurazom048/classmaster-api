import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { generateAuthToken, generateRefreshToken, isTokenExpired } from './Jwt.helper';
import dotenv from 'dotenv';
import { getTimestamp } from '../../../utils/timestamp.util';
dotenv.config();

// Middleware to verify and refresh tokens



export const verifyToken = async (req: any, res: Response, next: NextFunction) => {
  const timestamp = getTimestamp();
  const method = req.method;
  const route = req.originalUrl || req.url;
  const origin = req.headers.origin || req.headers.host || 'Unknown';

  // ক্লায়েন্ট যদি ডাবল 'Bearer Bearer' পাঠায়, সেটা হ্যান্ডেল করার মেকানিজমসহ ক্লিন টোকেন ভিউ
  let rawToken = req.headers.authorization || '';
  const cleanLogToken = rawToken ? rawToken.replace(/^Bearer\s+/i, '').substring(0, 10) + '...' : 'None';

  try {
    // ১. টোকেন আছে কিনা চেক
    if (!req.headers.authorization) {
      console.log(`⚠️  [${timestamp}] [Auth] ${method} ${route} | Origin: ${origin} | No token provided`);
      return res.status(401).json({ message: "No token provided" });
    }

    // টোকেন এক্সট্রাক্ট করা
    const tokenArray = req.headers.authorization.split(' ');
    const token = tokenArray[tokenArray.length - 1];

    // টোকেন এক্সপায়ার্ড কিনা চেক
    const isAuthTokenExpired: boolean = isTokenExpired(token, process.env.JWT_SECRET_KEY as Secret);

    if (isAuthTokenExpired) {
      // 🔄 টোকেন এক্সপায়ার্ড হলে ক্লিয়ার লগ
      console.log(`⏳ [${timestamp}] [Auth] ${method} ${route} | Token Expired! Attempting Refresh...`);

      const refreshToken = req.headers['x-refresh-token'];
      const isRefreshTokenExpired: boolean = isTokenExpired(refreshToken, process.env.REFRESH_TOKEN_SECRET as Secret);

      if (isRefreshTokenExpired) {
        console.log(`❌ [${timestamp}] [Auth] Refresh Token also expired.`);
        return res.status(401).json({ message: 'Token has expired. Please log in again.' });
      }

      // নতুন টোকেন জেনারেট করা
      const refreshDecoded = jwt.verify(refreshToken as string, process.env.REFRESH_TOKEN_SECRET as Secret) as any;
      const newAuthToken = generateAuthToken(refreshDecoded.id, refreshDecoded.username);
      const newRefreshToken = generateRefreshToken(refreshDecoded.id, refreshDecoded.username);

      console.log(`🔄 [${timestamp}] [Auth] Token refreshed successfully for User: ${refreshDecoded.username}`);

      res.setHeader('Authorization', `Bearer ${newAuthToken}`);
      res.setHeader('x-refresh-token', newRefreshToken);

      const newAuthTokenDecoded = jwt.verify(newAuthToken as string, process.env.JWT_SECRET_KEY as Secret) as any;
      req.user = newAuthTokenDecoded;
      return next();
    }

    // ২. টোকেন ভ্যালিড থাকলে এক লাইনের ক্লিন সাকসেস লগ
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET_KEY as Secret) as any;
    req.user = decoded;

    console.log(`🔐 [${timestamp}] [Auth] ${method} ${route} | Origin: ${origin} | Token: Bearer ${cleanLogToken}`);
    return next();

  } catch (error: any) {
    console.error(`❌ [${timestamp}] [Auth Error] ${method} ${route} :`, error.message);
    return res.status(401).json({ message: 'Authentication failed. Please log in again.' });
  }
};
// Helper function to generate tokens and set response headers
export const generateAndSetTokens = (res: Response, accountId: string, username: string) => {
  const authToken = generateAuthToken(accountId, username);
  const refreshToken = generateRefreshToken(accountId, username);

  res.setHeader('Authorization', `Bearer ${authToken}`);
  res.setHeader('x-refresh-token', refreshToken);

  return { authToken, refreshToken };
};

