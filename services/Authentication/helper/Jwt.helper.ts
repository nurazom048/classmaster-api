import dotenv from 'dotenv';
dotenv.config();
import jwt, { Secret } from 'jsonwebtoken';


export const generateAuthToken = (userId: string, username: string): string => {
  const token = jwt.sign({ id: userId.toString(), username: username }, process.env.JWT_SECRET_KEY!, { expiresIn: '1d' });
  return token;
};

export const generateRefreshToken = (userId: string, username: string): string => {
  const token = jwt.sign({ id: userId.toString(), username: username }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '2d' });
  return token;
};

// ************ Token Expire check Method */
export const isTokenExpired = (token: any, envSecret: Secret) => {
  try {
    jwt.verify(token as string, envSecret);
    return false; // Token is not expired
  } catch (err: any) {

    console.log("error on isTokenExpired " + err);
    console.log("env secret" + process.env.REFRESH_TOKEN_SECRET);
    console.log("env secret" + envSecret);
    if (err.name === 'TokenExpiredError') {
      return true; // Token has expired
    } else {
      throw false;
    }
  }
};
