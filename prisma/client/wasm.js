
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountDataScalarFieldEnum = {
  id: 'id',
  ownerAccountId: 'ownerAccountId',
  googleSignIn: 'googleSignIn',
  email: 'email',
  phone: 'phone',
  password: 'password',
  verificationDocuments: 'verificationDocuments',
  oneSignalUserId: 'oneSignalUserId'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  username: 'username',
  name: 'name',
  about: 'about',
  isVerified: 'isVerified',
  image: 'image',
  imageStorageProvider: 'imageStorageProvider',
  coverImage: 'coverImage',
  coverImageStorageProvider: 'coverImageStorageProvider',
  accountType: 'accountType',
  lastLoginTime: 'lastLoginTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  district: 'district',
  upazila: 'upazila',
  streetAddress: 'streetAddress',
  latitude: 'latitude',
  longitude: 'longitude',
  accountId: 'accountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NoticeBoardMemberScalarFieldEnum = {
  id: 'id',
  accountId: 'accountId',
  notificationOn: 'notificationOn',
  memberId: 'memberId'
};

exports.Prisma.NoticeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  pdf: 'pdf',
  description: 'description',
  category: 'category',
  publisherId: 'publisherId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RePublishScalarFieldEnum = {
  id: 'id',
  republishedTitle: 'republishedTitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  noticeId: 'noticeId',
  rePublisherId: 'rePublisherId'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  accountID: 'accountID',
  title: 'title',
  body: 'body',
  imageUrl: 'imageUrl',
  routineID: 'routineID',
  NoticeID: 'NoticeID',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.PendingAccountScalarFieldEnum = {
  id: 'id',
  isAccept: 'isAccept',
  email: 'email',
  username: 'username',
  address: 'address',
  name: 'name',
  about: 'about',
  contractInfo: 'contractInfo',
  phone: 'phone',
  image: 'image',
  coverImage: 'coverImage',
  sendTime: 'sendTime',
  password: 'password',
  account_type: 'account_type',
  googleSignIn: 'googleSignIn'
};

exports.Prisma.RoutinesJoinRequestScalarFieldEnum = {
  id: 'id',
  requestMessage: 'requestMessage',
  routineId: 'routineId',
  createdAt: 'createdAt',
  accountIdBy: 'accountIdBy'
};

exports.Prisma.WeekdayScalarFieldEnum = {
  id: 'id',
  routineId: 'routineId',
  classId: 'classId',
  room: 'room',
  Day: 'Day',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoutineMemberScalarFieldEnum = {
  id: 'id',
  accountId: 'accountId',
  routineId: 'routineId',
  notificationOn: 'notificationOn',
  captain: 'captain',
  owner: 'owner',
  isSaved: 'isSaved',
  blacklist: 'blacklist',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoutineScalarFieldEnum = {
  id: 'id',
  routineName: 'routineName',
  ownerAccountId: 'ownerAccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClassScalarFieldEnum = {
  id: 'id',
  name: 'name',
  instructorName: 'instructorName',
  subjectCode: 'subjectCode',
  routineId: 'routineId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SummaryScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  text: 'text',
  imageLinks: 'imageLinks',
  imageStorageProvider: 'imageStorageProvider',
  routineId: 'routineId',
  classId: 'classId',
  autoDeleteAt: 'autoDeleteAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  type: 'type',
  fileType: 'fileType',
  pollOptions: 'pollOptions',
  savedAccountId: 'savedAccountId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.StorageProvider = exports.$Enums.StorageProvider = {
  s3: 's3',
  minio: 'minio',
  r2: 'r2',
  appwrite: 'appwrite',
  others: 'others'
};

exports.AccountType = exports.$Enums.AccountType = {
  user: 'user',
  student: 'student',
  academy: 'academy'
};

exports.NoticeCategory = exports.$Enums.NoticeCategory = {
  job_circular: 'job_circular',
  notice: 'notice',
  result: 'result',
  other: 'other'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  public: 'public',
  private: 'private'
};

exports.Day = exports.$Enums.Day = {
  sat: 'sat',
  sun: 'sun',
  mon: 'mon',
  tue: 'tue',
  thu: 'thu',
  fri: 'fri'
};

exports.SummaryType = exports.$Enums.SummaryType = {
  TEXT: 'TEXT',
  MEDIA: 'MEDIA',
  POLL: 'POLL',
  SYSTEM: 'SYSTEM'
};

exports.Prisma.ModelName = {
  AccountData: 'AccountData',
  Account: 'Account',
  Address: 'Address',
  NoticeBoardMember: 'NoticeBoardMember',
  Notice: 'Notice',
  rePublish: 'rePublish',
  Notification: 'Notification',
  PendingAccount: 'PendingAccount',
  RoutinesJoinRequest: 'RoutinesJoinRequest',
  Weekday: 'Weekday',
  RoutineMember: 'RoutineMember',
  Routine: 'Routine',
  Class: 'Class',
  Summary: 'Summary'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
