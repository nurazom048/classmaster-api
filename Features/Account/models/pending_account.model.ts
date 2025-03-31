import mongoose, { Document, Schema, Model } from 'mongoose';
import { maineDB } from '../../../prisma/mongodb.connection';
import { AccountType } from '@prisma/client';

interface IPendingAccount extends Document {
  isAccept: boolean;
  email: string;
  username: string;
  address?: string;
  name?: string;
  about?: string;
  contractInfo?: string;
  phone?: string;
  image?: string;
  coverImage?: string;
  sendTime: Date;
  password?: string;
  account_type: AccountType;
  googleSignIn: boolean;
}

const pendingAccountSchema: Schema<IPendingAccount> = new Schema<IPendingAccount>({
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
    enum: [AccountType.user, AccountType.student, AccountType.academy],
    required: true,
    default: AccountType.user,
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

const PendingAccount: Model<IPendingAccount> = maineDB.model<IPendingAccount>('PendingAccount', pendingAccountSchema);

export default PendingAccount;