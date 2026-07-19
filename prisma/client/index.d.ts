
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AccountData
 * 
 */
export type AccountData = $Result.DefaultSelection<Prisma.$AccountDataPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model NoticeBoardMember
 * 
 */
export type NoticeBoardMember = $Result.DefaultSelection<Prisma.$NoticeBoardMemberPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model rePublish
 * 
 */
export type rePublish = $Result.DefaultSelection<Prisma.$rePublishPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PendingAccount
 * 
 */
export type PendingAccount = $Result.DefaultSelection<Prisma.$PendingAccountPayload>
/**
 * Model RoutinesJoinRequest
 * 
 */
export type RoutinesJoinRequest = $Result.DefaultSelection<Prisma.$RoutinesJoinRequestPayload>
/**
 * Model Weekday
 * 
 */
export type Weekday = $Result.DefaultSelection<Prisma.$WeekdayPayload>
/**
 * Model RoutineMember
 * 
 */
export type RoutineMember = $Result.DefaultSelection<Prisma.$RoutineMemberPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Summary
 * 
 */
export type Summary = $Result.DefaultSelection<Prisma.$SummaryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  user: 'user',
  student: 'student',
  academy: 'academy'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const StorageProvider: {
  minio: 'minio',
  r2: 'r2',
  appwrite: 'appwrite',
  others: 'others'
};

export type StorageProvider = (typeof StorageProvider)[keyof typeof StorageProvider]


export const Day: {
  sat: 'sat',
  sun: 'sun',
  mon: 'mon',
  tue: 'tue',
  wed: 'wed',
  thu: 'thu',
  fri: 'fri'
};

export type Day = (typeof Day)[keyof typeof Day]


export const NoticeCategory: {
  job_circular: 'job_circular',
  notice: 'notice',
  result: 'result',
  other: 'other'
};

export type NoticeCategory = (typeof NoticeCategory)[keyof typeof NoticeCategory]


export const SummaryType: {
  TEXT: 'TEXT',
  MEDIA: 'MEDIA',
  POLL: 'POLL',
  SYSTEM: 'SYSTEM'
};

export type SummaryType = (typeof SummaryType)[keyof typeof SummaryType]


export const NotificationType: {
  public: 'public',
  private: 'private'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type StorageProvider = $Enums.StorageProvider

export const StorageProvider: typeof $Enums.StorageProvider

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

export type NoticeCategory = $Enums.NoticeCategory

export const NoticeCategory: typeof $Enums.NoticeCategory

export type SummaryType = $Enums.SummaryType

export const SummaryType: typeof $Enums.SummaryType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AccountData
 * const accountData = await prisma.accountData.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AccountData
   * const accountData = await prisma.accountData.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.accountData`: Exposes CRUD operations for the **AccountData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountData
    * const accountData = await prisma.accountData.findMany()
    * ```
    */
  get accountData(): Prisma.AccountDataDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.noticeBoardMember`: Exposes CRUD operations for the **NoticeBoardMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoticeBoardMembers
    * const noticeBoardMembers = await prisma.noticeBoardMember.findMany()
    * ```
    */
  get noticeBoardMember(): Prisma.NoticeBoardMemberDelegate<ExtArgs>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs>;

  /**
   * `prisma.rePublish`: Exposes CRUD operations for the **rePublish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RePublishes
    * const rePublishes = await prisma.rePublish.findMany()
    * ```
    */
  get rePublish(): Prisma.rePublishDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.pendingAccount`: Exposes CRUD operations for the **PendingAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingAccounts
    * const pendingAccounts = await prisma.pendingAccount.findMany()
    * ```
    */
  get pendingAccount(): Prisma.PendingAccountDelegate<ExtArgs>;

  /**
   * `prisma.routinesJoinRequest`: Exposes CRUD operations for the **RoutinesJoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutinesJoinRequests
    * const routinesJoinRequests = await prisma.routinesJoinRequest.findMany()
    * ```
    */
  get routinesJoinRequest(): Prisma.RoutinesJoinRequestDelegate<ExtArgs>;

  /**
   * `prisma.weekday`: Exposes CRUD operations for the **Weekday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weekdays
    * const weekdays = await prisma.weekday.findMany()
    * ```
    */
  get weekday(): Prisma.WeekdayDelegate<ExtArgs>;

  /**
   * `prisma.routineMember`: Exposes CRUD operations for the **RoutineMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineMembers
    * const routineMembers = await prisma.routineMember.findMany()
    * ```
    */
  get routineMember(): Prisma.RoutineMemberDelegate<ExtArgs>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.summary`: Exposes CRUD operations for the **Summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summary.findMany()
    * ```
    */
  get summary(): Prisma.SummaryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "accountData" | "account" | "address" | "noticeBoardMember" | "notice" | "rePublish" | "notification" | "pendingAccount" | "routinesJoinRequest" | "weekday" | "routineMember" | "routine" | "class" | "summary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AccountData: {
        payload: Prisma.$AccountDataPayload<ExtArgs>
        fields: Prisma.AccountDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          findFirst: {
            args: Prisma.AccountDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          findMany: {
            args: Prisma.AccountDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>[]
          }
          create: {
            args: Prisma.AccountDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          createMany: {
            args: Prisma.AccountDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>[]
          }
          delete: {
            args: Prisma.AccountDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          update: {
            args: Prisma.AccountDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          deleteMany: {
            args: Prisma.AccountDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDataPayload>
          }
          aggregate: {
            args: Prisma.AccountDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountData>
          }
          groupBy: {
            args: Prisma.AccountDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountDataCountArgs<ExtArgs>
            result: $Utils.Optional<AccountDataCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      NoticeBoardMember: {
        payload: Prisma.$NoticeBoardMemberPayload<ExtArgs>
        fields: Prisma.NoticeBoardMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeBoardMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeBoardMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          findFirst: {
            args: Prisma.NoticeBoardMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeBoardMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          findMany: {
            args: Prisma.NoticeBoardMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>[]
          }
          create: {
            args: Prisma.NoticeBoardMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          createMany: {
            args: Prisma.NoticeBoardMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeBoardMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>[]
          }
          delete: {
            args: Prisma.NoticeBoardMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          update: {
            args: Prisma.NoticeBoardMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          deleteMany: {
            args: Prisma.NoticeBoardMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeBoardMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticeBoardMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticeBoardMemberPayload>
          }
          aggregate: {
            args: Prisma.NoticeBoardMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoticeBoardMember>
          }
          groupBy: {
            args: Prisma.NoticeBoardMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeBoardMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeBoardMemberCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeBoardMemberCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      rePublish: {
        payload: Prisma.$rePublishPayload<ExtArgs>
        fields: Prisma.rePublishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rePublishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rePublishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          findFirst: {
            args: Prisma.rePublishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rePublishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          findMany: {
            args: Prisma.rePublishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>[]
          }
          create: {
            args: Prisma.rePublishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          createMany: {
            args: Prisma.rePublishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rePublishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>[]
          }
          delete: {
            args: Prisma.rePublishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          update: {
            args: Prisma.rePublishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          deleteMany: {
            args: Prisma.rePublishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rePublishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rePublishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rePublishPayload>
          }
          aggregate: {
            args: Prisma.RePublishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRePublish>
          }
          groupBy: {
            args: Prisma.rePublishGroupByArgs<ExtArgs>
            result: $Utils.Optional<RePublishGroupByOutputType>[]
          }
          count: {
            args: Prisma.rePublishCountArgs<ExtArgs>
            result: $Utils.Optional<RePublishCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PendingAccount: {
        payload: Prisma.$PendingAccountPayload<ExtArgs>
        fields: Prisma.PendingAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          findFirst: {
            args: Prisma.PendingAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          findMany: {
            args: Prisma.PendingAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>[]
          }
          create: {
            args: Prisma.PendingAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          createMany: {
            args: Prisma.PendingAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>[]
          }
          delete: {
            args: Prisma.PendingAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          update: {
            args: Prisma.PendingAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          deleteMany: {
            args: Prisma.PendingAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingAccountPayload>
          }
          aggregate: {
            args: Prisma.PendingAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingAccount>
          }
          groupBy: {
            args: Prisma.PendingAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingAccountCountArgs<ExtArgs>
            result: $Utils.Optional<PendingAccountCountAggregateOutputType> | number
          }
        }
      }
      RoutinesJoinRequest: {
        payload: Prisma.$RoutinesJoinRequestPayload<ExtArgs>
        fields: Prisma.RoutinesJoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutinesJoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutinesJoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          findFirst: {
            args: Prisma.RoutinesJoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutinesJoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          findMany: {
            args: Prisma.RoutinesJoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>[]
          }
          create: {
            args: Prisma.RoutinesJoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          createMany: {
            args: Prisma.RoutinesJoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutinesJoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>[]
          }
          delete: {
            args: Prisma.RoutinesJoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          update: {
            args: Prisma.RoutinesJoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.RoutinesJoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutinesJoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutinesJoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinesJoinRequestPayload>
          }
          aggregate: {
            args: Prisma.RoutinesJoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutinesJoinRequest>
          }
          groupBy: {
            args: Prisma.RoutinesJoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutinesJoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutinesJoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RoutinesJoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Weekday: {
        payload: Prisma.$WeekdayPayload<ExtArgs>
        fields: Prisma.WeekdayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekdayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekdayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          findFirst: {
            args: Prisma.WeekdayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekdayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          findMany: {
            args: Prisma.WeekdayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>[]
          }
          create: {
            args: Prisma.WeekdayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          createMany: {
            args: Prisma.WeekdayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekdayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>[]
          }
          delete: {
            args: Prisma.WeekdayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          update: {
            args: Prisma.WeekdayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          deleteMany: {
            args: Prisma.WeekdayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekdayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeekdayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekdayPayload>
          }
          aggregate: {
            args: Prisma.WeekdayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeekday>
          }
          groupBy: {
            args: Prisma.WeekdayGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekdayGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekdayCountArgs<ExtArgs>
            result: $Utils.Optional<WeekdayCountAggregateOutputType> | number
          }
        }
      }
      RoutineMember: {
        payload: Prisma.$RoutineMemberPayload<ExtArgs>
        fields: Prisma.RoutineMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          findFirst: {
            args: Prisma.RoutineMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          findMany: {
            args: Prisma.RoutineMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>[]
          }
          create: {
            args: Prisma.RoutineMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          createMany: {
            args: Prisma.RoutineMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>[]
          }
          delete: {
            args: Prisma.RoutineMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          update: {
            args: Prisma.RoutineMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          deleteMany: {
            args: Prisma.RoutineMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineMemberPayload>
          }
          aggregate: {
            args: Prisma.RoutineMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineMember>
          }
          groupBy: {
            args: Prisma.RoutineMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineMemberCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineMemberCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Summary: {
        payload: Prisma.$SummaryPayload<ExtArgs>
        fields: Prisma.SummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findFirst: {
            args: Prisma.SummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findMany: {
            args: Prisma.SummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          create: {
            args: Prisma.SummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          createMany: {
            args: Prisma.SummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          delete: {
            args: Prisma.SummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          update: {
            args: Prisma.SummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          aggregate: {
            args: Prisma.SummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary>
          }
          groupBy: {
            args: Prisma.SummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    createdRoutines: number
    routineMemberships: number
    savedRoutines: number
    RoutinesJoinRequest: number
    Summary: number
    saveSummary: number
    publishedNotice: number
    rePublishedNotice: number
    NoticeBoardMember: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdRoutines?: boolean | AccountCountOutputTypeCountCreatedRoutinesArgs
    routineMemberships?: boolean | AccountCountOutputTypeCountRoutineMembershipsArgs
    savedRoutines?: boolean | AccountCountOutputTypeCountSavedRoutinesArgs
    RoutinesJoinRequest?: boolean | AccountCountOutputTypeCountRoutinesJoinRequestArgs
    Summary?: boolean | AccountCountOutputTypeCountSummaryArgs
    saveSummary?: boolean | AccountCountOutputTypeCountSaveSummaryArgs
    publishedNotice?: boolean | AccountCountOutputTypeCountPublishedNoticeArgs
    rePublishedNotice?: boolean | AccountCountOutputTypeCountRePublishedNoticeArgs
    NoticeBoardMember?: boolean | AccountCountOutputTypeCountNoticeBoardMemberArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCreatedRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRoutineMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineMemberWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSavedRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRoutinesJoinRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutinesJoinRequestWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSaveSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPublishedNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountRePublishedNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rePublishWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNoticeBoardMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeBoardMemberWhereInput
  }


  /**
   * Count Type NoticeCountOutputType
   */

  export type NoticeCountOutputType = {
    rePublish: number
  }

  export type NoticeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rePublish?: boolean | NoticeCountOutputTypeCountRePublishArgs
  }

  // Custom InputTypes
  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeCountOutputType
     */
    select?: NoticeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeCountRePublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rePublishWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    routineMembers: number
    classes: number
    weekdays: number
    savedBy: number
    RoutinesJoinRequest: number
    Summary: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineMembers?: boolean | RoutineCountOutputTypeCountRoutineMembersArgs
    classes?: boolean | RoutineCountOutputTypeCountClassesArgs
    weekdays?: boolean | RoutineCountOutputTypeCountWeekdaysArgs
    savedBy?: boolean | RoutineCountOutputTypeCountSavedByArgs
    RoutinesJoinRequest?: boolean | RoutineCountOutputTypeCountRoutinesJoinRequestArgs
    Summary?: boolean | RoutineCountOutputTypeCountSummaryArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountRoutineMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineMemberWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountWeekdaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekdayWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountRoutinesJoinRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutinesJoinRequestWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    weekdays: number
    Summary: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekdays?: boolean | ClassCountOutputTypeCountWeekdaysArgs
    Summary?: boolean | ClassCountOutputTypeCountSummaryArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountWeekdaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekdayWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AccountData
   */

  export type AggregateAccountData = {
    _count: AccountDataCountAggregateOutputType | null
    _min: AccountDataMinAggregateOutputType | null
    _max: AccountDataMaxAggregateOutputType | null
  }

  export type AccountDataMinAggregateOutputType = {
    id: string | null
    ownerAccountId: string | null
    googleSignIn: boolean | null
    email: string | null
    phone: string | null
    password: string | null
    oneSignalUserId: string | null
  }

  export type AccountDataMaxAggregateOutputType = {
    id: string | null
    ownerAccountId: string | null
    googleSignIn: boolean | null
    email: string | null
    phone: string | null
    password: string | null
    oneSignalUserId: string | null
  }

  export type AccountDataCountAggregateOutputType = {
    id: number
    ownerAccountId: number
    googleSignIn: number
    email: number
    phone: number
    password: number
    verificationDocuments: number
    oneSignalUserId: number
    _all: number
  }


  export type AccountDataMinAggregateInputType = {
    id?: true
    ownerAccountId?: true
    googleSignIn?: true
    email?: true
    phone?: true
    password?: true
    oneSignalUserId?: true
  }

  export type AccountDataMaxAggregateInputType = {
    id?: true
    ownerAccountId?: true
    googleSignIn?: true
    email?: true
    phone?: true
    password?: true
    oneSignalUserId?: true
  }

  export type AccountDataCountAggregateInputType = {
    id?: true
    ownerAccountId?: true
    googleSignIn?: true
    email?: true
    phone?: true
    password?: true
    verificationDocuments?: true
    oneSignalUserId?: true
    _all?: true
  }

  export type AccountDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountData to aggregate.
     */
    where?: AccountDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountData to fetch.
     */
    orderBy?: AccountDataOrderByWithRelationInput | AccountDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountData
    **/
    _count?: true | AccountDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountDataMaxAggregateInputType
  }

  export type GetAccountDataAggregateType<T extends AccountDataAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountData[P]>
      : GetScalarType<T[P], AggregateAccountData[P]>
  }




  export type AccountDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDataWhereInput
    orderBy?: AccountDataOrderByWithAggregationInput | AccountDataOrderByWithAggregationInput[]
    by: AccountDataScalarFieldEnum[] | AccountDataScalarFieldEnum
    having?: AccountDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountDataCountAggregateInputType | true
    _min?: AccountDataMinAggregateInputType
    _max?: AccountDataMaxAggregateInputType
  }

  export type AccountDataGroupByOutputType = {
    id: string
    ownerAccountId: string
    googleSignIn: boolean
    email: string
    phone: string | null
    password: string | null
    verificationDocuments: string[]
    oneSignalUserId: string | null
    _count: AccountDataCountAggregateOutputType | null
    _min: AccountDataMinAggregateOutputType | null
    _max: AccountDataMaxAggregateOutputType | null
  }

  type GetAccountDataGroupByPayload<T extends AccountDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountDataGroupByOutputType[P]>
            : GetScalarType<T[P], AccountDataGroupByOutputType[P]>
        }
      >
    >


  export type AccountDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerAccountId?: boolean
    googleSignIn?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    verificationDocuments?: boolean
    oneSignalUserId?: boolean
    accountID?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountData"]>

  export type AccountDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerAccountId?: boolean
    googleSignIn?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    verificationDocuments?: boolean
    oneSignalUserId?: boolean
    accountID?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountData"]>

  export type AccountDataSelectScalar = {
    id?: boolean
    ownerAccountId?: boolean
    googleSignIn?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    verificationDocuments?: boolean
    oneSignalUserId?: boolean
  }

  export type AccountDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountID?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AccountDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountID?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AccountDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountData"
    objects: {
      accountID: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerAccountId: string
      googleSignIn: boolean
      email: string
      phone: string | null
      password: string | null
      verificationDocuments: string[]
      oneSignalUserId: string | null
    }, ExtArgs["result"]["accountData"]>
    composites: {}
  }

  type AccountDataGetPayload<S extends boolean | null | undefined | AccountDataDefaultArgs> = $Result.GetResult<Prisma.$AccountDataPayload, S>

  type AccountDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountDataCountAggregateInputType | true
    }

  export interface AccountDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountData'], meta: { name: 'AccountData' } }
    /**
     * Find zero or one AccountData that matches the filter.
     * @param {AccountDataFindUniqueArgs} args - Arguments to find a AccountData
     * @example
     * // Get one AccountData
     * const accountData = await prisma.accountData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountDataFindUniqueArgs>(args: SelectSubset<T, AccountDataFindUniqueArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountDataFindUniqueOrThrowArgs} args - Arguments to find a AccountData
     * @example
     * // Get one AccountData
     * const accountData = await prisma.accountData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountDataFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataFindFirstArgs} args - Arguments to find a AccountData
     * @example
     * // Get one AccountData
     * const accountData = await prisma.accountData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountDataFindFirstArgs>(args?: SelectSubset<T, AccountDataFindFirstArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataFindFirstOrThrowArgs} args - Arguments to find a AccountData
     * @example
     * // Get one AccountData
     * const accountData = await prisma.accountData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountDataFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountData
     * const accountData = await prisma.accountData.findMany()
     * 
     * // Get first 10 AccountData
     * const accountData = await prisma.accountData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountDataWithIdOnly = await prisma.accountData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountDataFindManyArgs>(args?: SelectSubset<T, AccountDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountData.
     * @param {AccountDataCreateArgs} args - Arguments to create a AccountData.
     * @example
     * // Create one AccountData
     * const AccountData = await prisma.accountData.create({
     *   data: {
     *     // ... data to create a AccountData
     *   }
     * })
     * 
     */
    create<T extends AccountDataCreateArgs>(args: SelectSubset<T, AccountDataCreateArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountData.
     * @param {AccountDataCreateManyArgs} args - Arguments to create many AccountData.
     * @example
     * // Create many AccountData
     * const accountData = await prisma.accountData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountDataCreateManyArgs>(args?: SelectSubset<T, AccountDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountData and returns the data saved in the database.
     * @param {AccountDataCreateManyAndReturnArgs} args - Arguments to create many AccountData.
     * @example
     * // Create many AccountData
     * const accountData = await prisma.accountData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountData and only return the `id`
     * const accountDataWithIdOnly = await prisma.accountData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountDataCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AccountData.
     * @param {AccountDataDeleteArgs} args - Arguments to delete one AccountData.
     * @example
     * // Delete one AccountData
     * const AccountData = await prisma.accountData.delete({
     *   where: {
     *     // ... filter to delete one AccountData
     *   }
     * })
     * 
     */
    delete<T extends AccountDataDeleteArgs>(args: SelectSubset<T, AccountDataDeleteArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountData.
     * @param {AccountDataUpdateArgs} args - Arguments to update one AccountData.
     * @example
     * // Update one AccountData
     * const accountData = await prisma.accountData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountDataUpdateArgs>(args: SelectSubset<T, AccountDataUpdateArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountData.
     * @param {AccountDataDeleteManyArgs} args - Arguments to filter AccountData to delete.
     * @example
     * // Delete a few AccountData
     * const { count } = await prisma.accountData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDataDeleteManyArgs>(args?: SelectSubset<T, AccountDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountData
     * const accountData = await prisma.accountData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountDataUpdateManyArgs>(args: SelectSubset<T, AccountDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountData.
     * @param {AccountDataUpsertArgs} args - Arguments to update or create a AccountData.
     * @example
     * // Update or create a AccountData
     * const accountData = await prisma.accountData.upsert({
     *   create: {
     *     // ... data to create a AccountData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountData we want to update
     *   }
     * })
     */
    upsert<T extends AccountDataUpsertArgs>(args: SelectSubset<T, AccountDataUpsertArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataCountArgs} args - Arguments to filter AccountData to count.
     * @example
     * // Count the number of AccountData
     * const count = await prisma.accountData.count({
     *   where: {
     *     // ... the filter for the AccountData we want to count
     *   }
     * })
    **/
    count<T extends AccountDataCountArgs>(
      args?: Subset<T, AccountDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountDataAggregateArgs>(args: Subset<T, AccountDataAggregateArgs>): Prisma.PrismaPromise<GetAccountDataAggregateType<T>>

    /**
     * Group by AccountData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountDataGroupByArgs['orderBy'] }
        : { orderBy?: AccountDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountData model
   */
  readonly fields: AccountDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accountID<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountData model
   */ 
  interface AccountDataFieldRefs {
    readonly id: FieldRef<"AccountData", 'String'>
    readonly ownerAccountId: FieldRef<"AccountData", 'String'>
    readonly googleSignIn: FieldRef<"AccountData", 'Boolean'>
    readonly email: FieldRef<"AccountData", 'String'>
    readonly phone: FieldRef<"AccountData", 'String'>
    readonly password: FieldRef<"AccountData", 'String'>
    readonly verificationDocuments: FieldRef<"AccountData", 'String[]'>
    readonly oneSignalUserId: FieldRef<"AccountData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccountData findUnique
   */
  export type AccountDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter, which AccountData to fetch.
     */
    where: AccountDataWhereUniqueInput
  }

  /**
   * AccountData findUniqueOrThrow
   */
  export type AccountDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter, which AccountData to fetch.
     */
    where: AccountDataWhereUniqueInput
  }

  /**
   * AccountData findFirst
   */
  export type AccountDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter, which AccountData to fetch.
     */
    where?: AccountDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountData to fetch.
     */
    orderBy?: AccountDataOrderByWithRelationInput | AccountDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountData.
     */
    cursor?: AccountDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountData.
     */
    distinct?: AccountDataScalarFieldEnum | AccountDataScalarFieldEnum[]
  }

  /**
   * AccountData findFirstOrThrow
   */
  export type AccountDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter, which AccountData to fetch.
     */
    where?: AccountDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountData to fetch.
     */
    orderBy?: AccountDataOrderByWithRelationInput | AccountDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountData.
     */
    cursor?: AccountDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountData.
     */
    distinct?: AccountDataScalarFieldEnum | AccountDataScalarFieldEnum[]
  }

  /**
   * AccountData findMany
   */
  export type AccountDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter, which AccountData to fetch.
     */
    where?: AccountDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountData to fetch.
     */
    orderBy?: AccountDataOrderByWithRelationInput | AccountDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountData.
     */
    cursor?: AccountDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountData.
     */
    skip?: number
    distinct?: AccountDataScalarFieldEnum | AccountDataScalarFieldEnum[]
  }

  /**
   * AccountData create
   */
  export type AccountDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountData.
     */
    data: XOR<AccountDataCreateInput, AccountDataUncheckedCreateInput>
  }

  /**
   * AccountData createMany
   */
  export type AccountDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountData.
     */
    data: AccountDataCreateManyInput | AccountDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountData createManyAndReturn
   */
  export type AccountDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AccountData.
     */
    data: AccountDataCreateManyInput | AccountDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountData update
   */
  export type AccountDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountData.
     */
    data: XOR<AccountDataUpdateInput, AccountDataUncheckedUpdateInput>
    /**
     * Choose, which AccountData to update.
     */
    where: AccountDataWhereUniqueInput
  }

  /**
   * AccountData updateMany
   */
  export type AccountDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountData.
     */
    data: XOR<AccountDataUpdateManyMutationInput, AccountDataUncheckedUpdateManyInput>
    /**
     * Filter which AccountData to update
     */
    where?: AccountDataWhereInput
  }

  /**
   * AccountData upsert
   */
  export type AccountDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountData to update in case it exists.
     */
    where: AccountDataWhereUniqueInput
    /**
     * In case the AccountData found by the `where` argument doesn't exist, create a new AccountData with this data.
     */
    create: XOR<AccountDataCreateInput, AccountDataUncheckedCreateInput>
    /**
     * In case the AccountData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountDataUpdateInput, AccountDataUncheckedUpdateInput>
  }

  /**
   * AccountData delete
   */
  export type AccountDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    /**
     * Filter which AccountData to delete.
     */
    where: AccountDataWhereUniqueInput
  }

  /**
   * AccountData deleteMany
   */
  export type AccountDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountData to delete
     */
    where?: AccountDataWhereInput
  }

  /**
   * AccountData without action
   */
  export type AccountDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    about: string | null
    isVerified: boolean | null
    image: string | null
    imageStorageProvider: $Enums.StorageProvider | null
    coverImage: string | null
    coverImageStorageProvider: $Enums.StorageProvider | null
    accountType: $Enums.AccountType | null
    lastLoginTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    about: string | null
    isVerified: boolean | null
    image: string | null
    imageStorageProvider: $Enums.StorageProvider | null
    coverImage: string | null
    coverImageStorageProvider: $Enums.StorageProvider | null
    accountType: $Enums.AccountType | null
    lastLoginTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    name: number
    about: number
    isVerified: number
    image: number
    imageStorageProvider: number
    coverImage: number
    coverImageStorageProvider: number
    accountType: number
    lastLoginTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    about?: true
    isVerified?: true
    image?: true
    imageStorageProvider?: true
    coverImage?: true
    coverImageStorageProvider?: true
    accountType?: true
    lastLoginTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    about?: true
    isVerified?: true
    image?: true
    imageStorageProvider?: true
    coverImage?: true
    coverImageStorageProvider?: true
    accountType?: true
    lastLoginTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    about?: true
    isVerified?: true
    image?: true
    imageStorageProvider?: true
    coverImage?: true
    coverImageStorageProvider?: true
    accountType?: true
    lastLoginTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    username: string
    name: string
    about: string | null
    isVerified: boolean
    image: string | null
    imageStorageProvider: $Enums.StorageProvider | null
    coverImage: string | null
    coverImageStorageProvider: $Enums.StorageProvider | null
    accountType: $Enums.AccountType
    lastLoginTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    about?: boolean
    isVerified?: boolean
    image?: boolean
    imageStorageProvider?: boolean
    coverImage?: boolean
    coverImageStorageProvider?: boolean
    accountType?: boolean
    lastLoginTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountData?: boolean | Account$accountDataArgs<ExtArgs>
    address?: boolean | Account$addressArgs<ExtArgs>
    createdRoutines?: boolean | Account$createdRoutinesArgs<ExtArgs>
    routineMemberships?: boolean | Account$routineMembershipsArgs<ExtArgs>
    savedRoutines?: boolean | Account$savedRoutinesArgs<ExtArgs>
    RoutinesJoinRequest?: boolean | Account$RoutinesJoinRequestArgs<ExtArgs>
    Summary?: boolean | Account$SummaryArgs<ExtArgs>
    saveSummary?: boolean | Account$saveSummaryArgs<ExtArgs>
    publishedNotice?: boolean | Account$publishedNoticeArgs<ExtArgs>
    rePublishedNotice?: boolean | Account$rePublishedNoticeArgs<ExtArgs>
    NoticeBoardMember?: boolean | Account$NoticeBoardMemberArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    about?: boolean
    isVerified?: boolean
    image?: boolean
    imageStorageProvider?: boolean
    coverImage?: boolean
    coverImageStorageProvider?: boolean
    accountType?: boolean
    lastLoginTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    about?: boolean
    isVerified?: boolean
    image?: boolean
    imageStorageProvider?: boolean
    coverImage?: boolean
    coverImageStorageProvider?: boolean
    accountType?: boolean
    lastLoginTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountData?: boolean | Account$accountDataArgs<ExtArgs>
    address?: boolean | Account$addressArgs<ExtArgs>
    createdRoutines?: boolean | Account$createdRoutinesArgs<ExtArgs>
    routineMemberships?: boolean | Account$routineMembershipsArgs<ExtArgs>
    savedRoutines?: boolean | Account$savedRoutinesArgs<ExtArgs>
    RoutinesJoinRequest?: boolean | Account$RoutinesJoinRequestArgs<ExtArgs>
    Summary?: boolean | Account$SummaryArgs<ExtArgs>
    saveSummary?: boolean | Account$saveSummaryArgs<ExtArgs>
    publishedNotice?: boolean | Account$publishedNoticeArgs<ExtArgs>
    rePublishedNotice?: boolean | Account$rePublishedNoticeArgs<ExtArgs>
    NoticeBoardMember?: boolean | Account$NoticeBoardMemberArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      accountData: Prisma.$AccountDataPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs> | null
      createdRoutines: Prisma.$RoutinePayload<ExtArgs>[]
      routineMemberships: Prisma.$RoutineMemberPayload<ExtArgs>[]
      savedRoutines: Prisma.$RoutinePayload<ExtArgs>[]
      RoutinesJoinRequest: Prisma.$RoutinesJoinRequestPayload<ExtArgs>[]
      Summary: Prisma.$SummaryPayload<ExtArgs>[]
      saveSummary: Prisma.$SummaryPayload<ExtArgs>[]
      publishedNotice: Prisma.$NoticePayload<ExtArgs>[]
      rePublishedNotice: Prisma.$rePublishPayload<ExtArgs>[]
      NoticeBoardMember: Prisma.$NoticeBoardMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      about: string | null
      isVerified: boolean
      image: string | null
      imageStorageProvider: $Enums.StorageProvider | null
      coverImage: string | null
      coverImageStorageProvider: $Enums.StorageProvider | null
      accountType: $Enums.AccountType
      lastLoginTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accountData<T extends Account$accountDataArgs<ExtArgs> = {}>(args?: Subset<T, Account$accountDataArgs<ExtArgs>>): Prisma__AccountDataClient<$Result.GetResult<Prisma.$AccountDataPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    address<T extends Account$addressArgs<ExtArgs> = {}>(args?: Subset<T, Account$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdRoutines<T extends Account$createdRoutinesArgs<ExtArgs> = {}>(args?: Subset<T, Account$createdRoutinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany"> | Null>
    routineMemberships<T extends Account$routineMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, Account$routineMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findMany"> | Null>
    savedRoutines<T extends Account$savedRoutinesArgs<ExtArgs> = {}>(args?: Subset<T, Account$savedRoutinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany"> | Null>
    RoutinesJoinRequest<T extends Account$RoutinesJoinRequestArgs<ExtArgs> = {}>(args?: Subset<T, Account$RoutinesJoinRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findMany"> | Null>
    Summary<T extends Account$SummaryArgs<ExtArgs> = {}>(args?: Subset<T, Account$SummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany"> | Null>
    saveSummary<T extends Account$saveSummaryArgs<ExtArgs> = {}>(args?: Subset<T, Account$saveSummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany"> | Null>
    publishedNotice<T extends Account$publishedNoticeArgs<ExtArgs> = {}>(args?: Subset<T, Account$publishedNoticeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany"> | Null>
    rePublishedNotice<T extends Account$rePublishedNoticeArgs<ExtArgs> = {}>(args?: Subset<T, Account$rePublishedNoticeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findMany"> | Null>
    NoticeBoardMember<T extends Account$NoticeBoardMemberArgs<ExtArgs> = {}>(args?: Subset<T, Account$NoticeBoardMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly username: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly about: FieldRef<"Account", 'String'>
    readonly isVerified: FieldRef<"Account", 'Boolean'>
    readonly image: FieldRef<"Account", 'String'>
    readonly imageStorageProvider: FieldRef<"Account", 'StorageProvider'>
    readonly coverImage: FieldRef<"Account", 'String'>
    readonly coverImageStorageProvider: FieldRef<"Account", 'StorageProvider'>
    readonly accountType: FieldRef<"Account", 'AccountType'>
    readonly lastLoginTime: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.accountData
   */
  export type Account$accountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountData
     */
    select?: AccountDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDataInclude<ExtArgs> | null
    where?: AccountDataWhereInput
  }

  /**
   * Account.address
   */
  export type Account$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Account.createdRoutines
   */
  export type Account$createdRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Account.routineMemberships
   */
  export type Account$routineMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    where?: RoutineMemberWhereInput
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    cursor?: RoutineMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineMemberScalarFieldEnum | RoutineMemberScalarFieldEnum[]
  }

  /**
   * Account.savedRoutines
   */
  export type Account$savedRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Account.RoutinesJoinRequest
   */
  export type Account$RoutinesJoinRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    where?: RoutinesJoinRequestWhereInput
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    cursor?: RoutinesJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutinesJoinRequestScalarFieldEnum | RoutinesJoinRequestScalarFieldEnum[]
  }

  /**
   * Account.Summary
   */
  export type Account$SummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    cursor?: SummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Account.saveSummary
   */
  export type Account$saveSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    cursor?: SummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Account.publishedNotice
   */
  export type Account$publishedNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Account.rePublishedNotice
   */
  export type Account$rePublishedNoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    where?: rePublishWhereInput
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    cursor?: rePublishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RePublishScalarFieldEnum | RePublishScalarFieldEnum[]
  }

  /**
   * Account.NoticeBoardMember
   */
  export type Account$NoticeBoardMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    where?: NoticeBoardMemberWhereInput
    orderBy?: NoticeBoardMemberOrderByWithRelationInput | NoticeBoardMemberOrderByWithRelationInput[]
    cursor?: NoticeBoardMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeBoardMemberScalarFieldEnum | NoticeBoardMemberScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    district: string | null
    upazila: string | null
    streetAddress: string | null
    latitude: number | null
    longitude: number | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    district: string | null
    upazila: string | null
    streetAddress: string | null
    latitude: number | null
    longitude: number | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    district: number
    upazila: number
    streetAddress: number
    latitude: number
    longitude: number
    accountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    district?: true
    upazila?: true
    streetAddress?: true
    latitude?: true
    longitude?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    district?: true
    upazila?: true
    streetAddress?: true
    latitude?: true
    longitude?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    district?: true
    upazila?: true
    streetAddress?: true
    latitude?: true
    longitude?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    district: string | null
    upazila: string | null
    streetAddress: string | null
    latitude: number | null
    longitude: number | null
    accountId: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    district?: boolean
    upazila?: boolean
    streetAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    district?: boolean
    upazila?: boolean
    streetAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    district?: boolean
    upazila?: boolean
    streetAddress?: boolean
    latitude?: boolean
    longitude?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      district: string | null
      upazila: string | null
      streetAddress: string | null
      latitude: number | null
      longitude: number | null
      accountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly upazila: FieldRef<"Address", 'String'>
    readonly streetAddress: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly accountId: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model NoticeBoardMember
   */

  export type AggregateNoticeBoardMember = {
    _count: NoticeBoardMemberCountAggregateOutputType | null
    _min: NoticeBoardMemberMinAggregateOutputType | null
    _max: NoticeBoardMemberMaxAggregateOutputType | null
  }

  export type NoticeBoardMemberMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    notificationOn: boolean | null
    memberId: string | null
  }

  export type NoticeBoardMemberMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    notificationOn: boolean | null
    memberId: string | null
  }

  export type NoticeBoardMemberCountAggregateOutputType = {
    id: number
    accountId: number
    notificationOn: number
    memberId: number
    _all: number
  }


  export type NoticeBoardMemberMinAggregateInputType = {
    id?: true
    accountId?: true
    notificationOn?: true
    memberId?: true
  }

  export type NoticeBoardMemberMaxAggregateInputType = {
    id?: true
    accountId?: true
    notificationOn?: true
    memberId?: true
  }

  export type NoticeBoardMemberCountAggregateInputType = {
    id?: true
    accountId?: true
    notificationOn?: true
    memberId?: true
    _all?: true
  }

  export type NoticeBoardMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticeBoardMember to aggregate.
     */
    where?: NoticeBoardMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeBoardMembers to fetch.
     */
    orderBy?: NoticeBoardMemberOrderByWithRelationInput | NoticeBoardMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeBoardMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeBoardMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeBoardMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoticeBoardMembers
    **/
    _count?: true | NoticeBoardMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeBoardMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeBoardMemberMaxAggregateInputType
  }

  export type GetNoticeBoardMemberAggregateType<T extends NoticeBoardMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateNoticeBoardMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoticeBoardMember[P]>
      : GetScalarType<T[P], AggregateNoticeBoardMember[P]>
  }




  export type NoticeBoardMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeBoardMemberWhereInput
    orderBy?: NoticeBoardMemberOrderByWithAggregationInput | NoticeBoardMemberOrderByWithAggregationInput[]
    by: NoticeBoardMemberScalarFieldEnum[] | NoticeBoardMemberScalarFieldEnum
    having?: NoticeBoardMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeBoardMemberCountAggregateInputType | true
    _min?: NoticeBoardMemberMinAggregateInputType
    _max?: NoticeBoardMemberMaxAggregateInputType
  }

  export type NoticeBoardMemberGroupByOutputType = {
    id: string
    accountId: string
    notificationOn: boolean
    memberId: string
    _count: NoticeBoardMemberCountAggregateOutputType | null
    _min: NoticeBoardMemberMinAggregateOutputType | null
    _max: NoticeBoardMemberMaxAggregateOutputType | null
  }

  type GetNoticeBoardMemberGroupByPayload<T extends NoticeBoardMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeBoardMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeBoardMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeBoardMemberGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeBoardMemberGroupByOutputType[P]>
        }
      >
    >


  export type NoticeBoardMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    notificationOn?: boolean
    memberId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticeBoardMember"]>

  export type NoticeBoardMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    notificationOn?: boolean
    memberId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noticeBoardMember"]>

  export type NoticeBoardMemberSelectScalar = {
    id?: boolean
    accountId?: boolean
    notificationOn?: boolean
    memberId?: boolean
  }

  export type NoticeBoardMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type NoticeBoardMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $NoticeBoardMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoticeBoardMember"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      notificationOn: boolean
      memberId: string
    }, ExtArgs["result"]["noticeBoardMember"]>
    composites: {}
  }

  type NoticeBoardMemberGetPayload<S extends boolean | null | undefined | NoticeBoardMemberDefaultArgs> = $Result.GetResult<Prisma.$NoticeBoardMemberPayload, S>

  type NoticeBoardMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticeBoardMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticeBoardMemberCountAggregateInputType | true
    }

  export interface NoticeBoardMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoticeBoardMember'], meta: { name: 'NoticeBoardMember' } }
    /**
     * Find zero or one NoticeBoardMember that matches the filter.
     * @param {NoticeBoardMemberFindUniqueArgs} args - Arguments to find a NoticeBoardMember
     * @example
     * // Get one NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeBoardMemberFindUniqueArgs>(args: SelectSubset<T, NoticeBoardMemberFindUniqueArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NoticeBoardMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticeBoardMemberFindUniqueOrThrowArgs} args - Arguments to find a NoticeBoardMember
     * @example
     * // Get one NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeBoardMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeBoardMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NoticeBoardMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberFindFirstArgs} args - Arguments to find a NoticeBoardMember
     * @example
     * // Get one NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeBoardMemberFindFirstArgs>(args?: SelectSubset<T, NoticeBoardMemberFindFirstArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NoticeBoardMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberFindFirstOrThrowArgs} args - Arguments to find a NoticeBoardMember
     * @example
     * // Get one NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeBoardMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeBoardMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NoticeBoardMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoticeBoardMembers
     * const noticeBoardMembers = await prisma.noticeBoardMember.findMany()
     * 
     * // Get first 10 NoticeBoardMembers
     * const noticeBoardMembers = await prisma.noticeBoardMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeBoardMemberWithIdOnly = await prisma.noticeBoardMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeBoardMemberFindManyArgs>(args?: SelectSubset<T, NoticeBoardMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NoticeBoardMember.
     * @param {NoticeBoardMemberCreateArgs} args - Arguments to create a NoticeBoardMember.
     * @example
     * // Create one NoticeBoardMember
     * const NoticeBoardMember = await prisma.noticeBoardMember.create({
     *   data: {
     *     // ... data to create a NoticeBoardMember
     *   }
     * })
     * 
     */
    create<T extends NoticeBoardMemberCreateArgs>(args: SelectSubset<T, NoticeBoardMemberCreateArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NoticeBoardMembers.
     * @param {NoticeBoardMemberCreateManyArgs} args - Arguments to create many NoticeBoardMembers.
     * @example
     * // Create many NoticeBoardMembers
     * const noticeBoardMember = await prisma.noticeBoardMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeBoardMemberCreateManyArgs>(args?: SelectSubset<T, NoticeBoardMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoticeBoardMembers and returns the data saved in the database.
     * @param {NoticeBoardMemberCreateManyAndReturnArgs} args - Arguments to create many NoticeBoardMembers.
     * @example
     * // Create many NoticeBoardMembers
     * const noticeBoardMember = await prisma.noticeBoardMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoticeBoardMembers and only return the `id`
     * const noticeBoardMemberWithIdOnly = await prisma.noticeBoardMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeBoardMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeBoardMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NoticeBoardMember.
     * @param {NoticeBoardMemberDeleteArgs} args - Arguments to delete one NoticeBoardMember.
     * @example
     * // Delete one NoticeBoardMember
     * const NoticeBoardMember = await prisma.noticeBoardMember.delete({
     *   where: {
     *     // ... filter to delete one NoticeBoardMember
     *   }
     * })
     * 
     */
    delete<T extends NoticeBoardMemberDeleteArgs>(args: SelectSubset<T, NoticeBoardMemberDeleteArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NoticeBoardMember.
     * @param {NoticeBoardMemberUpdateArgs} args - Arguments to update one NoticeBoardMember.
     * @example
     * // Update one NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeBoardMemberUpdateArgs>(args: SelectSubset<T, NoticeBoardMemberUpdateArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NoticeBoardMembers.
     * @param {NoticeBoardMemberDeleteManyArgs} args - Arguments to filter NoticeBoardMembers to delete.
     * @example
     * // Delete a few NoticeBoardMembers
     * const { count } = await prisma.noticeBoardMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeBoardMemberDeleteManyArgs>(args?: SelectSubset<T, NoticeBoardMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoticeBoardMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoticeBoardMembers
     * const noticeBoardMember = await prisma.noticeBoardMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeBoardMemberUpdateManyArgs>(args: SelectSubset<T, NoticeBoardMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NoticeBoardMember.
     * @param {NoticeBoardMemberUpsertArgs} args - Arguments to update or create a NoticeBoardMember.
     * @example
     * // Update or create a NoticeBoardMember
     * const noticeBoardMember = await prisma.noticeBoardMember.upsert({
     *   create: {
     *     // ... data to create a NoticeBoardMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoticeBoardMember we want to update
     *   }
     * })
     */
    upsert<T extends NoticeBoardMemberUpsertArgs>(args: SelectSubset<T, NoticeBoardMemberUpsertArgs<ExtArgs>>): Prisma__NoticeBoardMemberClient<$Result.GetResult<Prisma.$NoticeBoardMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NoticeBoardMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberCountArgs} args - Arguments to filter NoticeBoardMembers to count.
     * @example
     * // Count the number of NoticeBoardMembers
     * const count = await prisma.noticeBoardMember.count({
     *   where: {
     *     // ... the filter for the NoticeBoardMembers we want to count
     *   }
     * })
    **/
    count<T extends NoticeBoardMemberCountArgs>(
      args?: Subset<T, NoticeBoardMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeBoardMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoticeBoardMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeBoardMemberAggregateArgs>(args: Subset<T, NoticeBoardMemberAggregateArgs>): Prisma.PrismaPromise<GetNoticeBoardMemberAggregateType<T>>

    /**
     * Group by NoticeBoardMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeBoardMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeBoardMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeBoardMemberGroupByArgs['orderBy'] }
        : { orderBy?: NoticeBoardMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeBoardMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeBoardMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoticeBoardMember model
   */
  readonly fields: NoticeBoardMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoticeBoardMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeBoardMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoticeBoardMember model
   */ 
  interface NoticeBoardMemberFieldRefs {
    readonly id: FieldRef<"NoticeBoardMember", 'String'>
    readonly accountId: FieldRef<"NoticeBoardMember", 'String'>
    readonly notificationOn: FieldRef<"NoticeBoardMember", 'Boolean'>
    readonly memberId: FieldRef<"NoticeBoardMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoticeBoardMember findUnique
   */
  export type NoticeBoardMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter, which NoticeBoardMember to fetch.
     */
    where: NoticeBoardMemberWhereUniqueInput
  }

  /**
   * NoticeBoardMember findUniqueOrThrow
   */
  export type NoticeBoardMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter, which NoticeBoardMember to fetch.
     */
    where: NoticeBoardMemberWhereUniqueInput
  }

  /**
   * NoticeBoardMember findFirst
   */
  export type NoticeBoardMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter, which NoticeBoardMember to fetch.
     */
    where?: NoticeBoardMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeBoardMembers to fetch.
     */
    orderBy?: NoticeBoardMemberOrderByWithRelationInput | NoticeBoardMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticeBoardMembers.
     */
    cursor?: NoticeBoardMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeBoardMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeBoardMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticeBoardMembers.
     */
    distinct?: NoticeBoardMemberScalarFieldEnum | NoticeBoardMemberScalarFieldEnum[]
  }

  /**
   * NoticeBoardMember findFirstOrThrow
   */
  export type NoticeBoardMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter, which NoticeBoardMember to fetch.
     */
    where?: NoticeBoardMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeBoardMembers to fetch.
     */
    orderBy?: NoticeBoardMemberOrderByWithRelationInput | NoticeBoardMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoticeBoardMembers.
     */
    cursor?: NoticeBoardMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeBoardMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeBoardMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoticeBoardMembers.
     */
    distinct?: NoticeBoardMemberScalarFieldEnum | NoticeBoardMemberScalarFieldEnum[]
  }

  /**
   * NoticeBoardMember findMany
   */
  export type NoticeBoardMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter, which NoticeBoardMembers to fetch.
     */
    where?: NoticeBoardMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoticeBoardMembers to fetch.
     */
    orderBy?: NoticeBoardMemberOrderByWithRelationInput | NoticeBoardMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoticeBoardMembers.
     */
    cursor?: NoticeBoardMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoticeBoardMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoticeBoardMembers.
     */
    skip?: number
    distinct?: NoticeBoardMemberScalarFieldEnum | NoticeBoardMemberScalarFieldEnum[]
  }

  /**
   * NoticeBoardMember create
   */
  export type NoticeBoardMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a NoticeBoardMember.
     */
    data: XOR<NoticeBoardMemberCreateInput, NoticeBoardMemberUncheckedCreateInput>
  }

  /**
   * NoticeBoardMember createMany
   */
  export type NoticeBoardMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoticeBoardMembers.
     */
    data: NoticeBoardMemberCreateManyInput | NoticeBoardMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoticeBoardMember createManyAndReturn
   */
  export type NoticeBoardMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NoticeBoardMembers.
     */
    data: NoticeBoardMemberCreateManyInput | NoticeBoardMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoticeBoardMember update
   */
  export type NoticeBoardMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a NoticeBoardMember.
     */
    data: XOR<NoticeBoardMemberUpdateInput, NoticeBoardMemberUncheckedUpdateInput>
    /**
     * Choose, which NoticeBoardMember to update.
     */
    where: NoticeBoardMemberWhereUniqueInput
  }

  /**
   * NoticeBoardMember updateMany
   */
  export type NoticeBoardMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoticeBoardMembers.
     */
    data: XOR<NoticeBoardMemberUpdateManyMutationInput, NoticeBoardMemberUncheckedUpdateManyInput>
    /**
     * Filter which NoticeBoardMembers to update
     */
    where?: NoticeBoardMemberWhereInput
  }

  /**
   * NoticeBoardMember upsert
   */
  export type NoticeBoardMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the NoticeBoardMember to update in case it exists.
     */
    where: NoticeBoardMemberWhereUniqueInput
    /**
     * In case the NoticeBoardMember found by the `where` argument doesn't exist, create a new NoticeBoardMember with this data.
     */
    create: XOR<NoticeBoardMemberCreateInput, NoticeBoardMemberUncheckedCreateInput>
    /**
     * In case the NoticeBoardMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeBoardMemberUpdateInput, NoticeBoardMemberUncheckedUpdateInput>
  }

  /**
   * NoticeBoardMember delete
   */
  export type NoticeBoardMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
    /**
     * Filter which NoticeBoardMember to delete.
     */
    where: NoticeBoardMemberWhereUniqueInput
  }

  /**
   * NoticeBoardMember deleteMany
   */
  export type NoticeBoardMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoticeBoardMembers to delete
     */
    where?: NoticeBoardMemberWhereInput
  }

  /**
   * NoticeBoardMember without action
   */
  export type NoticeBoardMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeBoardMember
     */
    select?: NoticeBoardMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeBoardMemberInclude<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeMinAggregateOutputType = {
    id: string | null
    title: string | null
    pdf: string | null
    description: string | null
    category: $Enums.NoticeCategory | null
    publisherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    pdf: string | null
    description: string | null
    category: $Enums.NoticeCategory | null
    publisherId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    pdf: number
    description: number
    category: number
    publisherId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    pdf?: true
    description?: true
    category?: true
    publisherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    pdf?: true
    description?: true
    category?: true
    publisherId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    pdf?: true
    description?: true
    category?: true
    publisherId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: string
    title: string
    pdf: string | null
    description: string | null
    category: $Enums.NoticeCategory
    publisherId: string
    createdAt: Date
    updatedAt: Date
    _count: NoticeCountAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pdf?: boolean
    description?: boolean
    category?: boolean
    publisherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    rePublish?: boolean | Notice$rePublishArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pdf?: boolean
    description?: boolean
    category?: boolean
    publisherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    pdf?: boolean
    description?: boolean
    category?: boolean
    publisherId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
    rePublish?: boolean | Notice$rePublishArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoticeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      Account: Prisma.$AccountPayload<ExtArgs>
      rePublish: Prisma.$rePublishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      pdf: string | null
      description: string | null
      category: $Enums.NoticeCategory
      publisherId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rePublish<T extends Notice$rePublishArgs<ExtArgs> = {}>(args?: Subset<T, Notice$rePublishArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */ 
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'String'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly pdf: FieldRef<"Notice", 'String'>
    readonly description: FieldRef<"Notice", 'String'>
    readonly category: FieldRef<"Notice", 'NoticeCategory'>
    readonly publisherId: FieldRef<"Notice", 'String'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
    readonly updatedAt: FieldRef<"Notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
  }

  /**
   * Notice.rePublish
   */
  export type Notice$rePublishArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    where?: rePublishWhereInput
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    cursor?: rePublishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RePublishScalarFieldEnum | RePublishScalarFieldEnum[]
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Model rePublish
   */

  export type AggregateRePublish = {
    _count: RePublishCountAggregateOutputType | null
    _min: RePublishMinAggregateOutputType | null
    _max: RePublishMaxAggregateOutputType | null
  }

  export type RePublishMinAggregateOutputType = {
    id: string | null
    republishedTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
    noticeId: string | null
    rePublisherId: string | null
  }

  export type RePublishMaxAggregateOutputType = {
    id: string | null
    republishedTitle: string | null
    createdAt: Date | null
    updatedAt: Date | null
    noticeId: string | null
    rePublisherId: string | null
  }

  export type RePublishCountAggregateOutputType = {
    id: number
    republishedTitle: number
    createdAt: number
    updatedAt: number
    noticeId: number
    rePublisherId: number
    _all: number
  }


  export type RePublishMinAggregateInputType = {
    id?: true
    republishedTitle?: true
    createdAt?: true
    updatedAt?: true
    noticeId?: true
    rePublisherId?: true
  }

  export type RePublishMaxAggregateInputType = {
    id?: true
    republishedTitle?: true
    createdAt?: true
    updatedAt?: true
    noticeId?: true
    rePublisherId?: true
  }

  export type RePublishCountAggregateInputType = {
    id?: true
    republishedTitle?: true
    createdAt?: true
    updatedAt?: true
    noticeId?: true
    rePublisherId?: true
    _all?: true
  }

  export type RePublishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rePublish to aggregate.
     */
    where?: rePublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rePublishes to fetch.
     */
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rePublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rePublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rePublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rePublishes
    **/
    _count?: true | RePublishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RePublishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RePublishMaxAggregateInputType
  }

  export type GetRePublishAggregateType<T extends RePublishAggregateArgs> = {
        [P in keyof T & keyof AggregateRePublish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRePublish[P]>
      : GetScalarType<T[P], AggregateRePublish[P]>
  }




  export type rePublishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rePublishWhereInput
    orderBy?: rePublishOrderByWithAggregationInput | rePublishOrderByWithAggregationInput[]
    by: RePublishScalarFieldEnum[] | RePublishScalarFieldEnum
    having?: rePublishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RePublishCountAggregateInputType | true
    _min?: RePublishMinAggregateInputType
    _max?: RePublishMaxAggregateInputType
  }

  export type RePublishGroupByOutputType = {
    id: string
    republishedTitle: string
    createdAt: Date
    updatedAt: Date
    noticeId: string | null
    rePublisherId: string
    _count: RePublishCountAggregateOutputType | null
    _min: RePublishMinAggregateOutputType | null
    _max: RePublishMaxAggregateOutputType | null
  }

  type GetRePublishGroupByPayload<T extends rePublishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RePublishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RePublishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RePublishGroupByOutputType[P]>
            : GetScalarType<T[P], RePublishGroupByOutputType[P]>
        }
      >
    >


  export type rePublishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    republishedTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    noticeId?: boolean
    rePublisherId?: boolean
    Notice?: boolean | rePublish$NoticeArgs<ExtArgs>
    Account?: boolean | rePublish$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["rePublish"]>

  export type rePublishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    republishedTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    noticeId?: boolean
    rePublisherId?: boolean
    Notice?: boolean | rePublish$NoticeArgs<ExtArgs>
    Account?: boolean | rePublish$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["rePublish"]>

  export type rePublishSelectScalar = {
    id?: boolean
    republishedTitle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    noticeId?: boolean
    rePublisherId?: boolean
  }

  export type rePublishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notice?: boolean | rePublish$NoticeArgs<ExtArgs>
    Account?: boolean | rePublish$AccountArgs<ExtArgs>
  }
  export type rePublishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Notice?: boolean | rePublish$NoticeArgs<ExtArgs>
    Account?: boolean | rePublish$AccountArgs<ExtArgs>
  }

  export type $rePublishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rePublish"
    objects: {
      Notice: Prisma.$NoticePayload<ExtArgs> | null
      Account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      republishedTitle: string
      createdAt: Date
      updatedAt: Date
      noticeId: string | null
      rePublisherId: string
    }, ExtArgs["result"]["rePublish"]>
    composites: {}
  }

  type rePublishGetPayload<S extends boolean | null | undefined | rePublishDefaultArgs> = $Result.GetResult<Prisma.$rePublishPayload, S>

  type rePublishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rePublishFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RePublishCountAggregateInputType | true
    }

  export interface rePublishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rePublish'], meta: { name: 'rePublish' } }
    /**
     * Find zero or one RePublish that matches the filter.
     * @param {rePublishFindUniqueArgs} args - Arguments to find a RePublish
     * @example
     * // Get one RePublish
     * const rePublish = await prisma.rePublish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rePublishFindUniqueArgs>(args: SelectSubset<T, rePublishFindUniqueArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RePublish that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rePublishFindUniqueOrThrowArgs} args - Arguments to find a RePublish
     * @example
     * // Get one RePublish
     * const rePublish = await prisma.rePublish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rePublishFindUniqueOrThrowArgs>(args: SelectSubset<T, rePublishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RePublish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishFindFirstArgs} args - Arguments to find a RePublish
     * @example
     * // Get one RePublish
     * const rePublish = await prisma.rePublish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rePublishFindFirstArgs>(args?: SelectSubset<T, rePublishFindFirstArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RePublish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishFindFirstOrThrowArgs} args - Arguments to find a RePublish
     * @example
     * // Get one RePublish
     * const rePublish = await prisma.rePublish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rePublishFindFirstOrThrowArgs>(args?: SelectSubset<T, rePublishFindFirstOrThrowArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RePublishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RePublishes
     * const rePublishes = await prisma.rePublish.findMany()
     * 
     * // Get first 10 RePublishes
     * const rePublishes = await prisma.rePublish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rePublishWithIdOnly = await prisma.rePublish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rePublishFindManyArgs>(args?: SelectSubset<T, rePublishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RePublish.
     * @param {rePublishCreateArgs} args - Arguments to create a RePublish.
     * @example
     * // Create one RePublish
     * const RePublish = await prisma.rePublish.create({
     *   data: {
     *     // ... data to create a RePublish
     *   }
     * })
     * 
     */
    create<T extends rePublishCreateArgs>(args: SelectSubset<T, rePublishCreateArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RePublishes.
     * @param {rePublishCreateManyArgs} args - Arguments to create many RePublishes.
     * @example
     * // Create many RePublishes
     * const rePublish = await prisma.rePublish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rePublishCreateManyArgs>(args?: SelectSubset<T, rePublishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RePublishes and returns the data saved in the database.
     * @param {rePublishCreateManyAndReturnArgs} args - Arguments to create many RePublishes.
     * @example
     * // Create many RePublishes
     * const rePublish = await prisma.rePublish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RePublishes and only return the `id`
     * const rePublishWithIdOnly = await prisma.rePublish.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rePublishCreateManyAndReturnArgs>(args?: SelectSubset<T, rePublishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RePublish.
     * @param {rePublishDeleteArgs} args - Arguments to delete one RePublish.
     * @example
     * // Delete one RePublish
     * const RePublish = await prisma.rePublish.delete({
     *   where: {
     *     // ... filter to delete one RePublish
     *   }
     * })
     * 
     */
    delete<T extends rePublishDeleteArgs>(args: SelectSubset<T, rePublishDeleteArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RePublish.
     * @param {rePublishUpdateArgs} args - Arguments to update one RePublish.
     * @example
     * // Update one RePublish
     * const rePublish = await prisma.rePublish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rePublishUpdateArgs>(args: SelectSubset<T, rePublishUpdateArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RePublishes.
     * @param {rePublishDeleteManyArgs} args - Arguments to filter RePublishes to delete.
     * @example
     * // Delete a few RePublishes
     * const { count } = await prisma.rePublish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rePublishDeleteManyArgs>(args?: SelectSubset<T, rePublishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RePublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RePublishes
     * const rePublish = await prisma.rePublish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rePublishUpdateManyArgs>(args: SelectSubset<T, rePublishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RePublish.
     * @param {rePublishUpsertArgs} args - Arguments to update or create a RePublish.
     * @example
     * // Update or create a RePublish
     * const rePublish = await prisma.rePublish.upsert({
     *   create: {
     *     // ... data to create a RePublish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RePublish we want to update
     *   }
     * })
     */
    upsert<T extends rePublishUpsertArgs>(args: SelectSubset<T, rePublishUpsertArgs<ExtArgs>>): Prisma__rePublishClient<$Result.GetResult<Prisma.$rePublishPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RePublishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishCountArgs} args - Arguments to filter RePublishes to count.
     * @example
     * // Count the number of RePublishes
     * const count = await prisma.rePublish.count({
     *   where: {
     *     // ... the filter for the RePublishes we want to count
     *   }
     * })
    **/
    count<T extends rePublishCountArgs>(
      args?: Subset<T, rePublishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RePublishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RePublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RePublishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RePublishAggregateArgs>(args: Subset<T, RePublishAggregateArgs>): Prisma.PrismaPromise<GetRePublishAggregateType<T>>

    /**
     * Group by RePublish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rePublishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rePublishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rePublishGroupByArgs['orderBy'] }
        : { orderBy?: rePublishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rePublishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRePublishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rePublish model
   */
  readonly fields: rePublishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rePublish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rePublishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Notice<T extends rePublish$NoticeArgs<ExtArgs> = {}>(args?: Subset<T, rePublish$NoticeArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Account<T extends rePublish$AccountArgs<ExtArgs> = {}>(args?: Subset<T, rePublish$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rePublish model
   */ 
  interface rePublishFieldRefs {
    readonly id: FieldRef<"rePublish", 'String'>
    readonly republishedTitle: FieldRef<"rePublish", 'String'>
    readonly createdAt: FieldRef<"rePublish", 'DateTime'>
    readonly updatedAt: FieldRef<"rePublish", 'DateTime'>
    readonly noticeId: FieldRef<"rePublish", 'String'>
    readonly rePublisherId: FieldRef<"rePublish", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rePublish findUnique
   */
  export type rePublishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter, which rePublish to fetch.
     */
    where: rePublishWhereUniqueInput
  }

  /**
   * rePublish findUniqueOrThrow
   */
  export type rePublishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter, which rePublish to fetch.
     */
    where: rePublishWhereUniqueInput
  }

  /**
   * rePublish findFirst
   */
  export type rePublishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter, which rePublish to fetch.
     */
    where?: rePublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rePublishes to fetch.
     */
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rePublishes.
     */
    cursor?: rePublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rePublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rePublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rePublishes.
     */
    distinct?: RePublishScalarFieldEnum | RePublishScalarFieldEnum[]
  }

  /**
   * rePublish findFirstOrThrow
   */
  export type rePublishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter, which rePublish to fetch.
     */
    where?: rePublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rePublishes to fetch.
     */
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rePublishes.
     */
    cursor?: rePublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rePublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rePublishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rePublishes.
     */
    distinct?: RePublishScalarFieldEnum | RePublishScalarFieldEnum[]
  }

  /**
   * rePublish findMany
   */
  export type rePublishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter, which rePublishes to fetch.
     */
    where?: rePublishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rePublishes to fetch.
     */
    orderBy?: rePublishOrderByWithRelationInput | rePublishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rePublishes.
     */
    cursor?: rePublishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rePublishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rePublishes.
     */
    skip?: number
    distinct?: RePublishScalarFieldEnum | RePublishScalarFieldEnum[]
  }

  /**
   * rePublish create
   */
  export type rePublishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * The data needed to create a rePublish.
     */
    data: XOR<rePublishCreateInput, rePublishUncheckedCreateInput>
  }

  /**
   * rePublish createMany
   */
  export type rePublishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rePublishes.
     */
    data: rePublishCreateManyInput | rePublishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rePublish createManyAndReturn
   */
  export type rePublishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many rePublishes.
     */
    data: rePublishCreateManyInput | rePublishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rePublish update
   */
  export type rePublishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * The data needed to update a rePublish.
     */
    data: XOR<rePublishUpdateInput, rePublishUncheckedUpdateInput>
    /**
     * Choose, which rePublish to update.
     */
    where: rePublishWhereUniqueInput
  }

  /**
   * rePublish updateMany
   */
  export type rePublishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rePublishes.
     */
    data: XOR<rePublishUpdateManyMutationInput, rePublishUncheckedUpdateManyInput>
    /**
     * Filter which rePublishes to update
     */
    where?: rePublishWhereInput
  }

  /**
   * rePublish upsert
   */
  export type rePublishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * The filter to search for the rePublish to update in case it exists.
     */
    where: rePublishWhereUniqueInput
    /**
     * In case the rePublish found by the `where` argument doesn't exist, create a new rePublish with this data.
     */
    create: XOR<rePublishCreateInput, rePublishUncheckedCreateInput>
    /**
     * In case the rePublish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rePublishUpdateInput, rePublishUncheckedUpdateInput>
  }

  /**
   * rePublish delete
   */
  export type rePublishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
    /**
     * Filter which rePublish to delete.
     */
    where: rePublishWhereUniqueInput
  }

  /**
   * rePublish deleteMany
   */
  export type rePublishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rePublishes to delete
     */
    where?: rePublishWhereInput
  }

  /**
   * rePublish.Notice
   */
  export type rePublish$NoticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
  }

  /**
   * rePublish.Account
   */
  export type rePublish$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * rePublish without action
   */
  export type rePublishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rePublish
     */
    select?: rePublishSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rePublishInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    accountID: string | null
    title: string | null
    body: string | null
    imageUrl: string | null
    routineID: string | null
    NoticeID: string | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    accountID: string | null
    title: string | null
    body: string | null
    imageUrl: string | null
    routineID: string | null
    NoticeID: string | null
    type: $Enums.NotificationType | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    accountID: number
    title: number
    body: number
    imageUrl: number
    routineID: number
    NoticeID: number
    type: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    accountID?: true
    title?: true
    body?: true
    imageUrl?: true
    routineID?: true
    NoticeID?: true
    type?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    accountID?: true
    title?: true
    body?: true
    imageUrl?: true
    routineID?: true
    NoticeID?: true
    type?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    accountID?: true
    title?: true
    body?: true
    imageUrl?: true
    routineID?: true
    NoticeID?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    accountID: string
    title: string
    body: string | null
    imageUrl: string | null
    routineID: string | null
    NoticeID: string | null
    type: $Enums.NotificationType
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountID?: boolean
    title?: boolean
    body?: boolean
    imageUrl?: boolean
    routineID?: boolean
    NoticeID?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountID?: boolean
    title?: boolean
    body?: boolean
    imageUrl?: boolean
    routineID?: boolean
    NoticeID?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    accountID?: boolean
    title?: boolean
    body?: boolean
    imageUrl?: boolean
    routineID?: boolean
    NoticeID?: boolean
    type?: boolean
    createdAt?: boolean
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountID: string
      title: string
      body: string | null
      imageUrl: string | null
      routineID: string | null
      NoticeID: string | null
      type: $Enums.NotificationType
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly accountID: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly imageUrl: FieldRef<"Notification", 'String'>
    readonly routineID: FieldRef<"Notification", 'String'>
    readonly NoticeID: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
  }


  /**
   * Model PendingAccount
   */

  export type AggregatePendingAccount = {
    _count: PendingAccountCountAggregateOutputType | null
    _min: PendingAccountMinAggregateOutputType | null
    _max: PendingAccountMaxAggregateOutputType | null
  }

  export type PendingAccountMinAggregateOutputType = {
    id: string | null
    isAccept: boolean | null
    email: string | null
    username: string | null
    address: string | null
    name: string | null
    about: string | null
    contractInfo: string | null
    phone: string | null
    image: string | null
    coverImage: string | null
    sendTime: Date | null
    password: string | null
    account_type: $Enums.AccountType | null
    googleSignIn: boolean | null
  }

  export type PendingAccountMaxAggregateOutputType = {
    id: string | null
    isAccept: boolean | null
    email: string | null
    username: string | null
    address: string | null
    name: string | null
    about: string | null
    contractInfo: string | null
    phone: string | null
    image: string | null
    coverImage: string | null
    sendTime: Date | null
    password: string | null
    account_type: $Enums.AccountType | null
    googleSignIn: boolean | null
  }

  export type PendingAccountCountAggregateOutputType = {
    id: number
    isAccept: number
    email: number
    username: number
    address: number
    name: number
    about: number
    contractInfo: number
    phone: number
    image: number
    coverImage: number
    sendTime: number
    password: number
    account_type: number
    googleSignIn: number
    _all: number
  }


  export type PendingAccountMinAggregateInputType = {
    id?: true
    isAccept?: true
    email?: true
    username?: true
    address?: true
    name?: true
    about?: true
    contractInfo?: true
    phone?: true
    image?: true
    coverImage?: true
    sendTime?: true
    password?: true
    account_type?: true
    googleSignIn?: true
  }

  export type PendingAccountMaxAggregateInputType = {
    id?: true
    isAccept?: true
    email?: true
    username?: true
    address?: true
    name?: true
    about?: true
    contractInfo?: true
    phone?: true
    image?: true
    coverImage?: true
    sendTime?: true
    password?: true
    account_type?: true
    googleSignIn?: true
  }

  export type PendingAccountCountAggregateInputType = {
    id?: true
    isAccept?: true
    email?: true
    username?: true
    address?: true
    name?: true
    about?: true
    contractInfo?: true
    phone?: true
    image?: true
    coverImage?: true
    sendTime?: true
    password?: true
    account_type?: true
    googleSignIn?: true
    _all?: true
  }

  export type PendingAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingAccount to aggregate.
     */
    where?: PendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingAccounts to fetch.
     */
    orderBy?: PendingAccountOrderByWithRelationInput | PendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingAccounts
    **/
    _count?: true | PendingAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingAccountMaxAggregateInputType
  }

  export type GetPendingAccountAggregateType<T extends PendingAccountAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingAccount[P]>
      : GetScalarType<T[P], AggregatePendingAccount[P]>
  }




  export type PendingAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingAccountWhereInput
    orderBy?: PendingAccountOrderByWithAggregationInput | PendingAccountOrderByWithAggregationInput[]
    by: PendingAccountScalarFieldEnum[] | PendingAccountScalarFieldEnum
    having?: PendingAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingAccountCountAggregateInputType | true
    _min?: PendingAccountMinAggregateInputType
    _max?: PendingAccountMaxAggregateInputType
  }

  export type PendingAccountGroupByOutputType = {
    id: string
    isAccept: boolean
    email: string
    username: string
    address: string | null
    name: string | null
    about: string | null
    contractInfo: string | null
    phone: string | null
    image: string | null
    coverImage: string | null
    sendTime: Date
    password: string | null
    account_type: $Enums.AccountType
    googleSignIn: boolean
    _count: PendingAccountCountAggregateOutputType | null
    _min: PendingAccountMinAggregateOutputType | null
    _max: PendingAccountMaxAggregateOutputType | null
  }

  type GetPendingAccountGroupByPayload<T extends PendingAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingAccountGroupByOutputType[P]>
            : GetScalarType<T[P], PendingAccountGroupByOutputType[P]>
        }
      >
    >


  export type PendingAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAccept?: boolean
    email?: boolean
    username?: boolean
    address?: boolean
    name?: boolean
    about?: boolean
    contractInfo?: boolean
    phone?: boolean
    image?: boolean
    coverImage?: boolean
    sendTime?: boolean
    password?: boolean
    account_type?: boolean
    googleSignIn?: boolean
  }, ExtArgs["result"]["pendingAccount"]>

  export type PendingAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAccept?: boolean
    email?: boolean
    username?: boolean
    address?: boolean
    name?: boolean
    about?: boolean
    contractInfo?: boolean
    phone?: boolean
    image?: boolean
    coverImage?: boolean
    sendTime?: boolean
    password?: boolean
    account_type?: boolean
    googleSignIn?: boolean
  }, ExtArgs["result"]["pendingAccount"]>

  export type PendingAccountSelectScalar = {
    id?: boolean
    isAccept?: boolean
    email?: boolean
    username?: boolean
    address?: boolean
    name?: boolean
    about?: boolean
    contractInfo?: boolean
    phone?: boolean
    image?: boolean
    coverImage?: boolean
    sendTime?: boolean
    password?: boolean
    account_type?: boolean
    googleSignIn?: boolean
  }


  export type $PendingAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isAccept: boolean
      email: string
      username: string
      address: string | null
      name: string | null
      about: string | null
      contractInfo: string | null
      phone: string | null
      image: string | null
      coverImage: string | null
      sendTime: Date
      password: string | null
      account_type: $Enums.AccountType
      googleSignIn: boolean
    }, ExtArgs["result"]["pendingAccount"]>
    composites: {}
  }

  type PendingAccountGetPayload<S extends boolean | null | undefined | PendingAccountDefaultArgs> = $Result.GetResult<Prisma.$PendingAccountPayload, S>

  type PendingAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingAccountCountAggregateInputType | true
    }

  export interface PendingAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingAccount'], meta: { name: 'PendingAccount' } }
    /**
     * Find zero or one PendingAccount that matches the filter.
     * @param {PendingAccountFindUniqueArgs} args - Arguments to find a PendingAccount
     * @example
     * // Get one PendingAccount
     * const pendingAccount = await prisma.pendingAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingAccountFindUniqueArgs>(args: SelectSubset<T, PendingAccountFindUniqueArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingAccountFindUniqueOrThrowArgs} args - Arguments to find a PendingAccount
     * @example
     * // Get one PendingAccount
     * const pendingAccount = await prisma.pendingAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountFindFirstArgs} args - Arguments to find a PendingAccount
     * @example
     * // Get one PendingAccount
     * const pendingAccount = await prisma.pendingAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingAccountFindFirstArgs>(args?: SelectSubset<T, PendingAccountFindFirstArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountFindFirstOrThrowArgs} args - Arguments to find a PendingAccount
     * @example
     * // Get one PendingAccount
     * const pendingAccount = await prisma.pendingAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingAccounts
     * const pendingAccounts = await prisma.pendingAccount.findMany()
     * 
     * // Get first 10 PendingAccounts
     * const pendingAccounts = await prisma.pendingAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingAccountWithIdOnly = await prisma.pendingAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingAccountFindManyArgs>(args?: SelectSubset<T, PendingAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingAccount.
     * @param {PendingAccountCreateArgs} args - Arguments to create a PendingAccount.
     * @example
     * // Create one PendingAccount
     * const PendingAccount = await prisma.pendingAccount.create({
     *   data: {
     *     // ... data to create a PendingAccount
     *   }
     * })
     * 
     */
    create<T extends PendingAccountCreateArgs>(args: SelectSubset<T, PendingAccountCreateArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingAccounts.
     * @param {PendingAccountCreateManyArgs} args - Arguments to create many PendingAccounts.
     * @example
     * // Create many PendingAccounts
     * const pendingAccount = await prisma.pendingAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingAccountCreateManyArgs>(args?: SelectSubset<T, PendingAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingAccounts and returns the data saved in the database.
     * @param {PendingAccountCreateManyAndReturnArgs} args - Arguments to create many PendingAccounts.
     * @example
     * // Create many PendingAccounts
     * const pendingAccount = await prisma.pendingAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingAccounts and only return the `id`
     * const pendingAccountWithIdOnly = await prisma.pendingAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingAccount.
     * @param {PendingAccountDeleteArgs} args - Arguments to delete one PendingAccount.
     * @example
     * // Delete one PendingAccount
     * const PendingAccount = await prisma.pendingAccount.delete({
     *   where: {
     *     // ... filter to delete one PendingAccount
     *   }
     * })
     * 
     */
    delete<T extends PendingAccountDeleteArgs>(args: SelectSubset<T, PendingAccountDeleteArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingAccount.
     * @param {PendingAccountUpdateArgs} args - Arguments to update one PendingAccount.
     * @example
     * // Update one PendingAccount
     * const pendingAccount = await prisma.pendingAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingAccountUpdateArgs>(args: SelectSubset<T, PendingAccountUpdateArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingAccounts.
     * @param {PendingAccountDeleteManyArgs} args - Arguments to filter PendingAccounts to delete.
     * @example
     * // Delete a few PendingAccounts
     * const { count } = await prisma.pendingAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingAccountDeleteManyArgs>(args?: SelectSubset<T, PendingAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingAccounts
     * const pendingAccount = await prisma.pendingAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingAccountUpdateManyArgs>(args: SelectSubset<T, PendingAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingAccount.
     * @param {PendingAccountUpsertArgs} args - Arguments to update or create a PendingAccount.
     * @example
     * // Update or create a PendingAccount
     * const pendingAccount = await prisma.pendingAccount.upsert({
     *   create: {
     *     // ... data to create a PendingAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingAccount we want to update
     *   }
     * })
     */
    upsert<T extends PendingAccountUpsertArgs>(args: SelectSubset<T, PendingAccountUpsertArgs<ExtArgs>>): Prisma__PendingAccountClient<$Result.GetResult<Prisma.$PendingAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountCountArgs} args - Arguments to filter PendingAccounts to count.
     * @example
     * // Count the number of PendingAccounts
     * const count = await prisma.pendingAccount.count({
     *   where: {
     *     // ... the filter for the PendingAccounts we want to count
     *   }
     * })
    **/
    count<T extends PendingAccountCountArgs>(
      args?: Subset<T, PendingAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingAccountAggregateArgs>(args: Subset<T, PendingAccountAggregateArgs>): Prisma.PrismaPromise<GetPendingAccountAggregateType<T>>

    /**
     * Group by PendingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingAccountGroupByArgs['orderBy'] }
        : { orderBy?: PendingAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingAccount model
   */
  readonly fields: PendingAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendingAccount model
   */ 
  interface PendingAccountFieldRefs {
    readonly id: FieldRef<"PendingAccount", 'String'>
    readonly isAccept: FieldRef<"PendingAccount", 'Boolean'>
    readonly email: FieldRef<"PendingAccount", 'String'>
    readonly username: FieldRef<"PendingAccount", 'String'>
    readonly address: FieldRef<"PendingAccount", 'String'>
    readonly name: FieldRef<"PendingAccount", 'String'>
    readonly about: FieldRef<"PendingAccount", 'String'>
    readonly contractInfo: FieldRef<"PendingAccount", 'String'>
    readonly phone: FieldRef<"PendingAccount", 'String'>
    readonly image: FieldRef<"PendingAccount", 'String'>
    readonly coverImage: FieldRef<"PendingAccount", 'String'>
    readonly sendTime: FieldRef<"PendingAccount", 'DateTime'>
    readonly password: FieldRef<"PendingAccount", 'String'>
    readonly account_type: FieldRef<"PendingAccount", 'AccountType'>
    readonly googleSignIn: FieldRef<"PendingAccount", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PendingAccount findUnique
   */
  export type PendingAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter, which PendingAccount to fetch.
     */
    where: PendingAccountWhereUniqueInput
  }

  /**
   * PendingAccount findUniqueOrThrow
   */
  export type PendingAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter, which PendingAccount to fetch.
     */
    where: PendingAccountWhereUniqueInput
  }

  /**
   * PendingAccount findFirst
   */
  export type PendingAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter, which PendingAccount to fetch.
     */
    where?: PendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingAccounts to fetch.
     */
    orderBy?: PendingAccountOrderByWithRelationInput | PendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingAccounts.
     */
    cursor?: PendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingAccounts.
     */
    distinct?: PendingAccountScalarFieldEnum | PendingAccountScalarFieldEnum[]
  }

  /**
   * PendingAccount findFirstOrThrow
   */
  export type PendingAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter, which PendingAccount to fetch.
     */
    where?: PendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingAccounts to fetch.
     */
    orderBy?: PendingAccountOrderByWithRelationInput | PendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingAccounts.
     */
    cursor?: PendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingAccounts.
     */
    distinct?: PendingAccountScalarFieldEnum | PendingAccountScalarFieldEnum[]
  }

  /**
   * PendingAccount findMany
   */
  export type PendingAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter, which PendingAccounts to fetch.
     */
    where?: PendingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingAccounts to fetch.
     */
    orderBy?: PendingAccountOrderByWithRelationInput | PendingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingAccounts.
     */
    cursor?: PendingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingAccounts.
     */
    skip?: number
    distinct?: PendingAccountScalarFieldEnum | PendingAccountScalarFieldEnum[]
  }

  /**
   * PendingAccount create
   */
  export type PendingAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * The data needed to create a PendingAccount.
     */
    data: XOR<PendingAccountCreateInput, PendingAccountUncheckedCreateInput>
  }

  /**
   * PendingAccount createMany
   */
  export type PendingAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingAccounts.
     */
    data: PendingAccountCreateManyInput | PendingAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingAccount createManyAndReturn
   */
  export type PendingAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingAccounts.
     */
    data: PendingAccountCreateManyInput | PendingAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingAccount update
   */
  export type PendingAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * The data needed to update a PendingAccount.
     */
    data: XOR<PendingAccountUpdateInput, PendingAccountUncheckedUpdateInput>
    /**
     * Choose, which PendingAccount to update.
     */
    where: PendingAccountWhereUniqueInput
  }

  /**
   * PendingAccount updateMany
   */
  export type PendingAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingAccounts.
     */
    data: XOR<PendingAccountUpdateManyMutationInput, PendingAccountUncheckedUpdateManyInput>
    /**
     * Filter which PendingAccounts to update
     */
    where?: PendingAccountWhereInput
  }

  /**
   * PendingAccount upsert
   */
  export type PendingAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * The filter to search for the PendingAccount to update in case it exists.
     */
    where: PendingAccountWhereUniqueInput
    /**
     * In case the PendingAccount found by the `where` argument doesn't exist, create a new PendingAccount with this data.
     */
    create: XOR<PendingAccountCreateInput, PendingAccountUncheckedCreateInput>
    /**
     * In case the PendingAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingAccountUpdateInput, PendingAccountUncheckedUpdateInput>
  }

  /**
   * PendingAccount delete
   */
  export type PendingAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
    /**
     * Filter which PendingAccount to delete.
     */
    where: PendingAccountWhereUniqueInput
  }

  /**
   * PendingAccount deleteMany
   */
  export type PendingAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingAccounts to delete
     */
    where?: PendingAccountWhereInput
  }

  /**
   * PendingAccount without action
   */
  export type PendingAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingAccount
     */
    select?: PendingAccountSelect<ExtArgs> | null
  }


  /**
   * Model RoutinesJoinRequest
   */

  export type AggregateRoutinesJoinRequest = {
    _count: RoutinesJoinRequestCountAggregateOutputType | null
    _min: RoutinesJoinRequestMinAggregateOutputType | null
    _max: RoutinesJoinRequestMaxAggregateOutputType | null
  }

  export type RoutinesJoinRequestMinAggregateOutputType = {
    id: string | null
    requestMessage: string | null
    routineId: string | null
    createdAt: Date | null
    accountIdBy: string | null
  }

  export type RoutinesJoinRequestMaxAggregateOutputType = {
    id: string | null
    requestMessage: string | null
    routineId: string | null
    createdAt: Date | null
    accountIdBy: string | null
  }

  export type RoutinesJoinRequestCountAggregateOutputType = {
    id: number
    requestMessage: number
    routineId: number
    createdAt: number
    accountIdBy: number
    _all: number
  }


  export type RoutinesJoinRequestMinAggregateInputType = {
    id?: true
    requestMessage?: true
    routineId?: true
    createdAt?: true
    accountIdBy?: true
  }

  export type RoutinesJoinRequestMaxAggregateInputType = {
    id?: true
    requestMessage?: true
    routineId?: true
    createdAt?: true
    accountIdBy?: true
  }

  export type RoutinesJoinRequestCountAggregateInputType = {
    id?: true
    requestMessage?: true
    routineId?: true
    createdAt?: true
    accountIdBy?: true
    _all?: true
  }

  export type RoutinesJoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutinesJoinRequest to aggregate.
     */
    where?: RoutinesJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutinesJoinRequests to fetch.
     */
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutinesJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutinesJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutinesJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutinesJoinRequests
    **/
    _count?: true | RoutinesJoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutinesJoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutinesJoinRequestMaxAggregateInputType
  }

  export type GetRoutinesJoinRequestAggregateType<T extends RoutinesJoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutinesJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutinesJoinRequest[P]>
      : GetScalarType<T[P], AggregateRoutinesJoinRequest[P]>
  }




  export type RoutinesJoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutinesJoinRequestWhereInput
    orderBy?: RoutinesJoinRequestOrderByWithAggregationInput | RoutinesJoinRequestOrderByWithAggregationInput[]
    by: RoutinesJoinRequestScalarFieldEnum[] | RoutinesJoinRequestScalarFieldEnum
    having?: RoutinesJoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutinesJoinRequestCountAggregateInputType | true
    _min?: RoutinesJoinRequestMinAggregateInputType
    _max?: RoutinesJoinRequestMaxAggregateInputType
  }

  export type RoutinesJoinRequestGroupByOutputType = {
    id: string
    requestMessage: string | null
    routineId: string
    createdAt: Date
    accountIdBy: string
    _count: RoutinesJoinRequestCountAggregateOutputType | null
    _min: RoutinesJoinRequestMinAggregateOutputType | null
    _max: RoutinesJoinRequestMaxAggregateOutputType | null
  }

  type GetRoutinesJoinRequestGroupByPayload<T extends RoutinesJoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutinesJoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutinesJoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutinesJoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RoutinesJoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type RoutinesJoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestMessage?: boolean
    routineId?: boolean
    createdAt?: boolean
    accountIdBy?: boolean
    requestedAccount?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routinesJoinRequest"]>

  export type RoutinesJoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestMessage?: boolean
    routineId?: boolean
    createdAt?: boolean
    accountIdBy?: boolean
    requestedAccount?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routinesJoinRequest"]>

  export type RoutinesJoinRequestSelectScalar = {
    id?: boolean
    requestMessage?: boolean
    routineId?: boolean
    createdAt?: boolean
    accountIdBy?: boolean
  }

  export type RoutinesJoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestedAccount?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }
  export type RoutinesJoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestedAccount?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }

  export type $RoutinesJoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutinesJoinRequest"
    objects: {
      requestedAccount: Prisma.$AccountPayload<ExtArgs>
      routine: Prisma.$RoutinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestMessage: string | null
      routineId: string
      createdAt: Date
      accountIdBy: string
    }, ExtArgs["result"]["routinesJoinRequest"]>
    composites: {}
  }

  type RoutinesJoinRequestGetPayload<S extends boolean | null | undefined | RoutinesJoinRequestDefaultArgs> = $Result.GetResult<Prisma.$RoutinesJoinRequestPayload, S>

  type RoutinesJoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutinesJoinRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoutinesJoinRequestCountAggregateInputType | true
    }

  export interface RoutinesJoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutinesJoinRequest'], meta: { name: 'RoutinesJoinRequest' } }
    /**
     * Find zero or one RoutinesJoinRequest that matches the filter.
     * @param {RoutinesJoinRequestFindUniqueArgs} args - Arguments to find a RoutinesJoinRequest
     * @example
     * // Get one RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutinesJoinRequestFindUniqueArgs>(args: SelectSubset<T, RoutinesJoinRequestFindUniqueArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoutinesJoinRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoutinesJoinRequestFindUniqueOrThrowArgs} args - Arguments to find a RoutinesJoinRequest
     * @example
     * // Get one RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutinesJoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutinesJoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoutinesJoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestFindFirstArgs} args - Arguments to find a RoutinesJoinRequest
     * @example
     * // Get one RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutinesJoinRequestFindFirstArgs>(args?: SelectSubset<T, RoutinesJoinRequestFindFirstArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoutinesJoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestFindFirstOrThrowArgs} args - Arguments to find a RoutinesJoinRequest
     * @example
     * // Get one RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutinesJoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutinesJoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoutinesJoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutinesJoinRequests
     * const routinesJoinRequests = await prisma.routinesJoinRequest.findMany()
     * 
     * // Get first 10 RoutinesJoinRequests
     * const routinesJoinRequests = await prisma.routinesJoinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routinesJoinRequestWithIdOnly = await prisma.routinesJoinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutinesJoinRequestFindManyArgs>(args?: SelectSubset<T, RoutinesJoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoutinesJoinRequest.
     * @param {RoutinesJoinRequestCreateArgs} args - Arguments to create a RoutinesJoinRequest.
     * @example
     * // Create one RoutinesJoinRequest
     * const RoutinesJoinRequest = await prisma.routinesJoinRequest.create({
     *   data: {
     *     // ... data to create a RoutinesJoinRequest
     *   }
     * })
     * 
     */
    create<T extends RoutinesJoinRequestCreateArgs>(args: SelectSubset<T, RoutinesJoinRequestCreateArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoutinesJoinRequests.
     * @param {RoutinesJoinRequestCreateManyArgs} args - Arguments to create many RoutinesJoinRequests.
     * @example
     * // Create many RoutinesJoinRequests
     * const routinesJoinRequest = await prisma.routinesJoinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutinesJoinRequestCreateManyArgs>(args?: SelectSubset<T, RoutinesJoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutinesJoinRequests and returns the data saved in the database.
     * @param {RoutinesJoinRequestCreateManyAndReturnArgs} args - Arguments to create many RoutinesJoinRequests.
     * @example
     * // Create many RoutinesJoinRequests
     * const routinesJoinRequest = await prisma.routinesJoinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutinesJoinRequests and only return the `id`
     * const routinesJoinRequestWithIdOnly = await prisma.routinesJoinRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutinesJoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutinesJoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoutinesJoinRequest.
     * @param {RoutinesJoinRequestDeleteArgs} args - Arguments to delete one RoutinesJoinRequest.
     * @example
     * // Delete one RoutinesJoinRequest
     * const RoutinesJoinRequest = await prisma.routinesJoinRequest.delete({
     *   where: {
     *     // ... filter to delete one RoutinesJoinRequest
     *   }
     * })
     * 
     */
    delete<T extends RoutinesJoinRequestDeleteArgs>(args: SelectSubset<T, RoutinesJoinRequestDeleteArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoutinesJoinRequest.
     * @param {RoutinesJoinRequestUpdateArgs} args - Arguments to update one RoutinesJoinRequest.
     * @example
     * // Update one RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutinesJoinRequestUpdateArgs>(args: SelectSubset<T, RoutinesJoinRequestUpdateArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoutinesJoinRequests.
     * @param {RoutinesJoinRequestDeleteManyArgs} args - Arguments to filter RoutinesJoinRequests to delete.
     * @example
     * // Delete a few RoutinesJoinRequests
     * const { count } = await prisma.routinesJoinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutinesJoinRequestDeleteManyArgs>(args?: SelectSubset<T, RoutinesJoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutinesJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutinesJoinRequests
     * const routinesJoinRequest = await prisma.routinesJoinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutinesJoinRequestUpdateManyArgs>(args: SelectSubset<T, RoutinesJoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutinesJoinRequest.
     * @param {RoutinesJoinRequestUpsertArgs} args - Arguments to update or create a RoutinesJoinRequest.
     * @example
     * // Update or create a RoutinesJoinRequest
     * const routinesJoinRequest = await prisma.routinesJoinRequest.upsert({
     *   create: {
     *     // ... data to create a RoutinesJoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutinesJoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends RoutinesJoinRequestUpsertArgs>(args: SelectSubset<T, RoutinesJoinRequestUpsertArgs<ExtArgs>>): Prisma__RoutinesJoinRequestClient<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoutinesJoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestCountArgs} args - Arguments to filter RoutinesJoinRequests to count.
     * @example
     * // Count the number of RoutinesJoinRequests
     * const count = await prisma.routinesJoinRequest.count({
     *   where: {
     *     // ... the filter for the RoutinesJoinRequests we want to count
     *   }
     * })
    **/
    count<T extends RoutinesJoinRequestCountArgs>(
      args?: Subset<T, RoutinesJoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutinesJoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutinesJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutinesJoinRequestAggregateArgs>(args: Subset<T, RoutinesJoinRequestAggregateArgs>): Prisma.PrismaPromise<GetRoutinesJoinRequestAggregateType<T>>

    /**
     * Group by RoutinesJoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutinesJoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutinesJoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutinesJoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: RoutinesJoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutinesJoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutinesJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutinesJoinRequest model
   */
  readonly fields: RoutinesJoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutinesJoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutinesJoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requestedAccount<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoutinesJoinRequest model
   */ 
  interface RoutinesJoinRequestFieldRefs {
    readonly id: FieldRef<"RoutinesJoinRequest", 'String'>
    readonly requestMessage: FieldRef<"RoutinesJoinRequest", 'String'>
    readonly routineId: FieldRef<"RoutinesJoinRequest", 'String'>
    readonly createdAt: FieldRef<"RoutinesJoinRequest", 'DateTime'>
    readonly accountIdBy: FieldRef<"RoutinesJoinRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoutinesJoinRequest findUnique
   */
  export type RoutinesJoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoutinesJoinRequest to fetch.
     */
    where: RoutinesJoinRequestWhereUniqueInput
  }

  /**
   * RoutinesJoinRequest findUniqueOrThrow
   */
  export type RoutinesJoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoutinesJoinRequest to fetch.
     */
    where: RoutinesJoinRequestWhereUniqueInput
  }

  /**
   * RoutinesJoinRequest findFirst
   */
  export type RoutinesJoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoutinesJoinRequest to fetch.
     */
    where?: RoutinesJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutinesJoinRequests to fetch.
     */
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutinesJoinRequests.
     */
    cursor?: RoutinesJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutinesJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutinesJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutinesJoinRequests.
     */
    distinct?: RoutinesJoinRequestScalarFieldEnum | RoutinesJoinRequestScalarFieldEnum[]
  }

  /**
   * RoutinesJoinRequest findFirstOrThrow
   */
  export type RoutinesJoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoutinesJoinRequest to fetch.
     */
    where?: RoutinesJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutinesJoinRequests to fetch.
     */
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutinesJoinRequests.
     */
    cursor?: RoutinesJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutinesJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutinesJoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutinesJoinRequests.
     */
    distinct?: RoutinesJoinRequestScalarFieldEnum | RoutinesJoinRequestScalarFieldEnum[]
  }

  /**
   * RoutinesJoinRequest findMany
   */
  export type RoutinesJoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which RoutinesJoinRequests to fetch.
     */
    where?: RoutinesJoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutinesJoinRequests to fetch.
     */
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutinesJoinRequests.
     */
    cursor?: RoutinesJoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutinesJoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutinesJoinRequests.
     */
    skip?: number
    distinct?: RoutinesJoinRequestScalarFieldEnum | RoutinesJoinRequestScalarFieldEnum[]
  }

  /**
   * RoutinesJoinRequest create
   */
  export type RoutinesJoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutinesJoinRequest.
     */
    data: XOR<RoutinesJoinRequestCreateInput, RoutinesJoinRequestUncheckedCreateInput>
  }

  /**
   * RoutinesJoinRequest createMany
   */
  export type RoutinesJoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutinesJoinRequests.
     */
    data: RoutinesJoinRequestCreateManyInput | RoutinesJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutinesJoinRequest createManyAndReturn
   */
  export type RoutinesJoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoutinesJoinRequests.
     */
    data: RoutinesJoinRequestCreateManyInput | RoutinesJoinRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutinesJoinRequest update
   */
  export type RoutinesJoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutinesJoinRequest.
     */
    data: XOR<RoutinesJoinRequestUpdateInput, RoutinesJoinRequestUncheckedUpdateInput>
    /**
     * Choose, which RoutinesJoinRequest to update.
     */
    where: RoutinesJoinRequestWhereUniqueInput
  }

  /**
   * RoutinesJoinRequest updateMany
   */
  export type RoutinesJoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutinesJoinRequests.
     */
    data: XOR<RoutinesJoinRequestUpdateManyMutationInput, RoutinesJoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which RoutinesJoinRequests to update
     */
    where?: RoutinesJoinRequestWhereInput
  }

  /**
   * RoutinesJoinRequest upsert
   */
  export type RoutinesJoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutinesJoinRequest to update in case it exists.
     */
    where: RoutinesJoinRequestWhereUniqueInput
    /**
     * In case the RoutinesJoinRequest found by the `where` argument doesn't exist, create a new RoutinesJoinRequest with this data.
     */
    create: XOR<RoutinesJoinRequestCreateInput, RoutinesJoinRequestUncheckedCreateInput>
    /**
     * In case the RoutinesJoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutinesJoinRequestUpdateInput, RoutinesJoinRequestUncheckedUpdateInput>
  }

  /**
   * RoutinesJoinRequest delete
   */
  export type RoutinesJoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    /**
     * Filter which RoutinesJoinRequest to delete.
     */
    where: RoutinesJoinRequestWhereUniqueInput
  }

  /**
   * RoutinesJoinRequest deleteMany
   */
  export type RoutinesJoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutinesJoinRequests to delete
     */
    where?: RoutinesJoinRequestWhereInput
  }

  /**
   * RoutinesJoinRequest without action
   */
  export type RoutinesJoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
  }


  /**
   * Model Weekday
   */

  export type AggregateWeekday = {
    _count: WeekdayCountAggregateOutputType | null
    _min: WeekdayMinAggregateOutputType | null
    _max: WeekdayMaxAggregateOutputType | null
  }

  export type WeekdayMinAggregateOutputType = {
    id: string | null
    routineId: string | null
    classId: string | null
    room: string | null
    Day: $Enums.Day | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeekdayMaxAggregateOutputType = {
    id: string | null
    routineId: string | null
    classId: string | null
    room: string | null
    Day: $Enums.Day | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeekdayCountAggregateOutputType = {
    id: number
    routineId: number
    classId: number
    room: number
    Day: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeekdayMinAggregateInputType = {
    id?: true
    routineId?: true
    classId?: true
    room?: true
    Day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeekdayMaxAggregateInputType = {
    id?: true
    routineId?: true
    classId?: true
    room?: true
    Day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeekdayCountAggregateInputType = {
    id?: true
    routineId?: true
    classId?: true
    room?: true
    Day?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeekdayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weekday to aggregate.
     */
    where?: WeekdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weekdays to fetch.
     */
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weekdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weekdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weekdays
    **/
    _count?: true | WeekdayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekdayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekdayMaxAggregateInputType
  }

  export type GetWeekdayAggregateType<T extends WeekdayAggregateArgs> = {
        [P in keyof T & keyof AggregateWeekday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeekday[P]>
      : GetScalarType<T[P], AggregateWeekday[P]>
  }




  export type WeekdayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekdayWhereInput
    orderBy?: WeekdayOrderByWithAggregationInput | WeekdayOrderByWithAggregationInput[]
    by: WeekdayScalarFieldEnum[] | WeekdayScalarFieldEnum
    having?: WeekdayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekdayCountAggregateInputType | true
    _min?: WeekdayMinAggregateInputType
    _max?: WeekdayMaxAggregateInputType
  }

  export type WeekdayGroupByOutputType = {
    id: string
    routineId: string
    classId: string
    room: string
    Day: $Enums.Day
    startTime: Date
    endTime: Date
    createdAt: Date
    updatedAt: Date
    _count: WeekdayCountAggregateOutputType | null
    _min: WeekdayMinAggregateOutputType | null
    _max: WeekdayMaxAggregateOutputType | null
  }

  type GetWeekdayGroupByPayload<T extends WeekdayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekdayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekdayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekdayGroupByOutputType[P]>
            : GetScalarType<T[P], WeekdayGroupByOutputType[P]>
        }
      >
    >


  export type WeekdaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    classId?: boolean
    room?: boolean
    Day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekday"]>

  export type WeekdaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    classId?: boolean
    room?: boolean
    Day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekday"]>

  export type WeekdaySelectScalar = {
    id?: boolean
    routineId?: boolean
    classId?: boolean
    room?: boolean
    Day?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeekdayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type WeekdayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $WeekdayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weekday"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineId: string
      classId: string
      room: string
      Day: $Enums.Day
      startTime: Date
      endTime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weekday"]>
    composites: {}
  }

  type WeekdayGetPayload<S extends boolean | null | undefined | WeekdayDefaultArgs> = $Result.GetResult<Prisma.$WeekdayPayload, S>

  type WeekdayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeekdayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeekdayCountAggregateInputType | true
    }

  export interface WeekdayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weekday'], meta: { name: 'Weekday' } }
    /**
     * Find zero or one Weekday that matches the filter.
     * @param {WeekdayFindUniqueArgs} args - Arguments to find a Weekday
     * @example
     * // Get one Weekday
     * const weekday = await prisma.weekday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekdayFindUniqueArgs>(args: SelectSubset<T, WeekdayFindUniqueArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Weekday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeekdayFindUniqueOrThrowArgs} args - Arguments to find a Weekday
     * @example
     * // Get one Weekday
     * const weekday = await prisma.weekday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekdayFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekdayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Weekday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayFindFirstArgs} args - Arguments to find a Weekday
     * @example
     * // Get one Weekday
     * const weekday = await prisma.weekday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekdayFindFirstArgs>(args?: SelectSubset<T, WeekdayFindFirstArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Weekday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayFindFirstOrThrowArgs} args - Arguments to find a Weekday
     * @example
     * // Get one Weekday
     * const weekday = await prisma.weekday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekdayFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekdayFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Weekdays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weekdays
     * const weekdays = await prisma.weekday.findMany()
     * 
     * // Get first 10 Weekdays
     * const weekdays = await prisma.weekday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekdayWithIdOnly = await prisma.weekday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekdayFindManyArgs>(args?: SelectSubset<T, WeekdayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Weekday.
     * @param {WeekdayCreateArgs} args - Arguments to create a Weekday.
     * @example
     * // Create one Weekday
     * const Weekday = await prisma.weekday.create({
     *   data: {
     *     // ... data to create a Weekday
     *   }
     * })
     * 
     */
    create<T extends WeekdayCreateArgs>(args: SelectSubset<T, WeekdayCreateArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Weekdays.
     * @param {WeekdayCreateManyArgs} args - Arguments to create many Weekdays.
     * @example
     * // Create many Weekdays
     * const weekday = await prisma.weekday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekdayCreateManyArgs>(args?: SelectSubset<T, WeekdayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weekdays and returns the data saved in the database.
     * @param {WeekdayCreateManyAndReturnArgs} args - Arguments to create many Weekdays.
     * @example
     * // Create many Weekdays
     * const weekday = await prisma.weekday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weekdays and only return the `id`
     * const weekdayWithIdOnly = await prisma.weekday.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekdayCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekdayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Weekday.
     * @param {WeekdayDeleteArgs} args - Arguments to delete one Weekday.
     * @example
     * // Delete one Weekday
     * const Weekday = await prisma.weekday.delete({
     *   where: {
     *     // ... filter to delete one Weekday
     *   }
     * })
     * 
     */
    delete<T extends WeekdayDeleteArgs>(args: SelectSubset<T, WeekdayDeleteArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Weekday.
     * @param {WeekdayUpdateArgs} args - Arguments to update one Weekday.
     * @example
     * // Update one Weekday
     * const weekday = await prisma.weekday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekdayUpdateArgs>(args: SelectSubset<T, WeekdayUpdateArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Weekdays.
     * @param {WeekdayDeleteManyArgs} args - Arguments to filter Weekdays to delete.
     * @example
     * // Delete a few Weekdays
     * const { count } = await prisma.weekday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekdayDeleteManyArgs>(args?: SelectSubset<T, WeekdayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weekdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weekdays
     * const weekday = await prisma.weekday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekdayUpdateManyArgs>(args: SelectSubset<T, WeekdayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Weekday.
     * @param {WeekdayUpsertArgs} args - Arguments to update or create a Weekday.
     * @example
     * // Update or create a Weekday
     * const weekday = await prisma.weekday.upsert({
     *   create: {
     *     // ... data to create a Weekday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weekday we want to update
     *   }
     * })
     */
    upsert<T extends WeekdayUpsertArgs>(args: SelectSubset<T, WeekdayUpsertArgs<ExtArgs>>): Prisma__WeekdayClient<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Weekdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayCountArgs} args - Arguments to filter Weekdays to count.
     * @example
     * // Count the number of Weekdays
     * const count = await prisma.weekday.count({
     *   where: {
     *     // ... the filter for the Weekdays we want to count
     *   }
     * })
    **/
    count<T extends WeekdayCountArgs>(
      args?: Subset<T, WeekdayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekdayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weekday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeekdayAggregateArgs>(args: Subset<T, WeekdayAggregateArgs>): Prisma.PrismaPromise<GetWeekdayAggregateType<T>>

    /**
     * Group by Weekday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekdayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeekdayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekdayGroupByArgs['orderBy'] }
        : { orderBy?: WeekdayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeekdayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekdayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weekday model
   */
  readonly fields: WeekdayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weekday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekdayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weekday model
   */ 
  interface WeekdayFieldRefs {
    readonly id: FieldRef<"Weekday", 'String'>
    readonly routineId: FieldRef<"Weekday", 'String'>
    readonly classId: FieldRef<"Weekday", 'String'>
    readonly room: FieldRef<"Weekday", 'String'>
    readonly Day: FieldRef<"Weekday", 'Day'>
    readonly startTime: FieldRef<"Weekday", 'DateTime'>
    readonly endTime: FieldRef<"Weekday", 'DateTime'>
    readonly createdAt: FieldRef<"Weekday", 'DateTime'>
    readonly updatedAt: FieldRef<"Weekday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weekday findUnique
   */
  export type WeekdayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter, which Weekday to fetch.
     */
    where: WeekdayWhereUniqueInput
  }

  /**
   * Weekday findUniqueOrThrow
   */
  export type WeekdayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter, which Weekday to fetch.
     */
    where: WeekdayWhereUniqueInput
  }

  /**
   * Weekday findFirst
   */
  export type WeekdayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter, which Weekday to fetch.
     */
    where?: WeekdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weekdays to fetch.
     */
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weekdays.
     */
    cursor?: WeekdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weekdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weekdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weekdays.
     */
    distinct?: WeekdayScalarFieldEnum | WeekdayScalarFieldEnum[]
  }

  /**
   * Weekday findFirstOrThrow
   */
  export type WeekdayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter, which Weekday to fetch.
     */
    where?: WeekdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weekdays to fetch.
     */
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weekdays.
     */
    cursor?: WeekdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weekdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weekdays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weekdays.
     */
    distinct?: WeekdayScalarFieldEnum | WeekdayScalarFieldEnum[]
  }

  /**
   * Weekday findMany
   */
  export type WeekdayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter, which Weekdays to fetch.
     */
    where?: WeekdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weekdays to fetch.
     */
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weekdays.
     */
    cursor?: WeekdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weekdays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weekdays.
     */
    skip?: number
    distinct?: WeekdayScalarFieldEnum | WeekdayScalarFieldEnum[]
  }

  /**
   * Weekday create
   */
  export type WeekdayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * The data needed to create a Weekday.
     */
    data: XOR<WeekdayCreateInput, WeekdayUncheckedCreateInput>
  }

  /**
   * Weekday createMany
   */
  export type WeekdayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weekdays.
     */
    data: WeekdayCreateManyInput | WeekdayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weekday createManyAndReturn
   */
  export type WeekdayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Weekdays.
     */
    data: WeekdayCreateManyInput | WeekdayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weekday update
   */
  export type WeekdayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * The data needed to update a Weekday.
     */
    data: XOR<WeekdayUpdateInput, WeekdayUncheckedUpdateInput>
    /**
     * Choose, which Weekday to update.
     */
    where: WeekdayWhereUniqueInput
  }

  /**
   * Weekday updateMany
   */
  export type WeekdayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weekdays.
     */
    data: XOR<WeekdayUpdateManyMutationInput, WeekdayUncheckedUpdateManyInput>
    /**
     * Filter which Weekdays to update
     */
    where?: WeekdayWhereInput
  }

  /**
   * Weekday upsert
   */
  export type WeekdayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * The filter to search for the Weekday to update in case it exists.
     */
    where: WeekdayWhereUniqueInput
    /**
     * In case the Weekday found by the `where` argument doesn't exist, create a new Weekday with this data.
     */
    create: XOR<WeekdayCreateInput, WeekdayUncheckedCreateInput>
    /**
     * In case the Weekday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekdayUpdateInput, WeekdayUncheckedUpdateInput>
  }

  /**
   * Weekday delete
   */
  export type WeekdayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    /**
     * Filter which Weekday to delete.
     */
    where: WeekdayWhereUniqueInput
  }

  /**
   * Weekday deleteMany
   */
  export type WeekdayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weekdays to delete
     */
    where?: WeekdayWhereInput
  }

  /**
   * Weekday without action
   */
  export type WeekdayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
  }


  /**
   * Model RoutineMember
   */

  export type AggregateRoutineMember = {
    _count: RoutineMemberCountAggregateOutputType | null
    _min: RoutineMemberMinAggregateOutputType | null
    _max: RoutineMemberMaxAggregateOutputType | null
  }

  export type RoutineMemberMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    routineId: string | null
    notificationOn: boolean | null
    captain: boolean | null
    owner: boolean | null
    isSaved: boolean | null
    blacklist: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMemberMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    routineId: string | null
    notificationOn: boolean | null
    captain: boolean | null
    owner: boolean | null
    isSaved: boolean | null
    blacklist: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMemberCountAggregateOutputType = {
    id: number
    accountId: number
    routineId: number
    notificationOn: number
    captain: number
    owner: number
    isSaved: number
    blacklist: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineMemberMinAggregateInputType = {
    id?: true
    accountId?: true
    routineId?: true
    notificationOn?: true
    captain?: true
    owner?: true
    isSaved?: true
    blacklist?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMemberMaxAggregateInputType = {
    id?: true
    accountId?: true
    routineId?: true
    notificationOn?: true
    captain?: true
    owner?: true
    isSaved?: true
    blacklist?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMemberCountAggregateInputType = {
    id?: true
    accountId?: true
    routineId?: true
    notificationOn?: true
    captain?: true
    owner?: true
    isSaved?: true
    blacklist?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineMember to aggregate.
     */
    where?: RoutineMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineMembers to fetch.
     */
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineMembers
    **/
    _count?: true | RoutineMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMemberMaxAggregateInputType
  }

  export type GetRoutineMemberAggregateType<T extends RoutineMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineMember[P]>
      : GetScalarType<T[P], AggregateRoutineMember[P]>
  }




  export type RoutineMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineMemberWhereInput
    orderBy?: RoutineMemberOrderByWithAggregationInput | RoutineMemberOrderByWithAggregationInput[]
    by: RoutineMemberScalarFieldEnum[] | RoutineMemberScalarFieldEnum
    having?: RoutineMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineMemberCountAggregateInputType | true
    _min?: RoutineMemberMinAggregateInputType
    _max?: RoutineMemberMaxAggregateInputType
  }

  export type RoutineMemberGroupByOutputType = {
    id: string
    accountId: string
    routineId: string
    notificationOn: boolean
    captain: boolean
    owner: boolean
    isSaved: boolean
    blacklist: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoutineMemberCountAggregateOutputType | null
    _min: RoutineMemberMinAggregateOutputType | null
    _max: RoutineMemberMaxAggregateOutputType | null
  }

  type GetRoutineMemberGroupByPayload<T extends RoutineMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineMemberGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineMemberGroupByOutputType[P]>
        }
      >
    >


  export type RoutineMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    routineId?: boolean
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineMember"]>

  export type RoutineMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    routineId?: boolean
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineMember"]>

  export type RoutineMemberSelectScalar = {
    id?: boolean
    accountId?: boolean
    routineId?: boolean
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }
  export type RoutineMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }

  export type $RoutineMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineMember"
    objects: {
      member: Prisma.$AccountPayload<ExtArgs>
      routine: Prisma.$RoutinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      routineId: string
      notificationOn: boolean
      captain: boolean
      owner: boolean
      isSaved: boolean
      blacklist: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routineMember"]>
    composites: {}
  }

  type RoutineMemberGetPayload<S extends boolean | null | undefined | RoutineMemberDefaultArgs> = $Result.GetResult<Prisma.$RoutineMemberPayload, S>

  type RoutineMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoutineMemberCountAggregateInputType | true
    }

  export interface RoutineMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineMember'], meta: { name: 'RoutineMember' } }
    /**
     * Find zero or one RoutineMember that matches the filter.
     * @param {RoutineMemberFindUniqueArgs} args - Arguments to find a RoutineMember
     * @example
     * // Get one RoutineMember
     * const routineMember = await prisma.routineMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineMemberFindUniqueArgs>(args: SelectSubset<T, RoutineMemberFindUniqueArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoutineMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoutineMemberFindUniqueOrThrowArgs} args - Arguments to find a RoutineMember
     * @example
     * // Get one RoutineMember
     * const routineMember = await prisma.routineMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoutineMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberFindFirstArgs} args - Arguments to find a RoutineMember
     * @example
     * // Get one RoutineMember
     * const routineMember = await prisma.routineMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineMemberFindFirstArgs>(args?: SelectSubset<T, RoutineMemberFindFirstArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoutineMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberFindFirstOrThrowArgs} args - Arguments to find a RoutineMember
     * @example
     * // Get one RoutineMember
     * const routineMember = await prisma.routineMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoutineMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineMembers
     * const routineMembers = await prisma.routineMember.findMany()
     * 
     * // Get first 10 RoutineMembers
     * const routineMembers = await prisma.routineMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineMemberWithIdOnly = await prisma.routineMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineMemberFindManyArgs>(args?: SelectSubset<T, RoutineMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoutineMember.
     * @param {RoutineMemberCreateArgs} args - Arguments to create a RoutineMember.
     * @example
     * // Create one RoutineMember
     * const RoutineMember = await prisma.routineMember.create({
     *   data: {
     *     // ... data to create a RoutineMember
     *   }
     * })
     * 
     */
    create<T extends RoutineMemberCreateArgs>(args: SelectSubset<T, RoutineMemberCreateArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoutineMembers.
     * @param {RoutineMemberCreateManyArgs} args - Arguments to create many RoutineMembers.
     * @example
     * // Create many RoutineMembers
     * const routineMember = await prisma.routineMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineMemberCreateManyArgs>(args?: SelectSubset<T, RoutineMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineMembers and returns the data saved in the database.
     * @param {RoutineMemberCreateManyAndReturnArgs} args - Arguments to create many RoutineMembers.
     * @example
     * // Create many RoutineMembers
     * const routineMember = await prisma.routineMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineMembers and only return the `id`
     * const routineMemberWithIdOnly = await prisma.routineMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoutineMember.
     * @param {RoutineMemberDeleteArgs} args - Arguments to delete one RoutineMember.
     * @example
     * // Delete one RoutineMember
     * const RoutineMember = await prisma.routineMember.delete({
     *   where: {
     *     // ... filter to delete one RoutineMember
     *   }
     * })
     * 
     */
    delete<T extends RoutineMemberDeleteArgs>(args: SelectSubset<T, RoutineMemberDeleteArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoutineMember.
     * @param {RoutineMemberUpdateArgs} args - Arguments to update one RoutineMember.
     * @example
     * // Update one RoutineMember
     * const routineMember = await prisma.routineMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineMemberUpdateArgs>(args: SelectSubset<T, RoutineMemberUpdateArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoutineMembers.
     * @param {RoutineMemberDeleteManyArgs} args - Arguments to filter RoutineMembers to delete.
     * @example
     * // Delete a few RoutineMembers
     * const { count } = await prisma.routineMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineMemberDeleteManyArgs>(args?: SelectSubset<T, RoutineMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineMembers
     * const routineMember = await prisma.routineMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineMemberUpdateManyArgs>(args: SelectSubset<T, RoutineMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineMember.
     * @param {RoutineMemberUpsertArgs} args - Arguments to update or create a RoutineMember.
     * @example
     * // Update or create a RoutineMember
     * const routineMember = await prisma.routineMember.upsert({
     *   create: {
     *     // ... data to create a RoutineMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineMember we want to update
     *   }
     * })
     */
    upsert<T extends RoutineMemberUpsertArgs>(args: SelectSubset<T, RoutineMemberUpsertArgs<ExtArgs>>): Prisma__RoutineMemberClient<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoutineMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberCountArgs} args - Arguments to filter RoutineMembers to count.
     * @example
     * // Count the number of RoutineMembers
     * const count = await prisma.routineMember.count({
     *   where: {
     *     // ... the filter for the RoutineMembers we want to count
     *   }
     * })
    **/
    count<T extends RoutineMemberCountArgs>(
      args?: Subset<T, RoutineMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutineMemberAggregateArgs>(args: Subset<T, RoutineMemberAggregateArgs>): Prisma.PrismaPromise<GetRoutineMemberAggregateType<T>>

    /**
     * Group by RoutineMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutineMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineMemberGroupByArgs['orderBy'] }
        : { orderBy?: RoutineMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutineMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineMember model
   */
  readonly fields: RoutineMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoutineMember model
   */ 
  interface RoutineMemberFieldRefs {
    readonly id: FieldRef<"RoutineMember", 'String'>
    readonly accountId: FieldRef<"RoutineMember", 'String'>
    readonly routineId: FieldRef<"RoutineMember", 'String'>
    readonly notificationOn: FieldRef<"RoutineMember", 'Boolean'>
    readonly captain: FieldRef<"RoutineMember", 'Boolean'>
    readonly owner: FieldRef<"RoutineMember", 'Boolean'>
    readonly isSaved: FieldRef<"RoutineMember", 'Boolean'>
    readonly blacklist: FieldRef<"RoutineMember", 'Boolean'>
    readonly createdAt: FieldRef<"RoutineMember", 'DateTime'>
    readonly updatedAt: FieldRef<"RoutineMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoutineMember findUnique
   */
  export type RoutineMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoutineMember to fetch.
     */
    where: RoutineMemberWhereUniqueInput
  }

  /**
   * RoutineMember findUniqueOrThrow
   */
  export type RoutineMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoutineMember to fetch.
     */
    where: RoutineMemberWhereUniqueInput
  }

  /**
   * RoutineMember findFirst
   */
  export type RoutineMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoutineMember to fetch.
     */
    where?: RoutineMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineMembers to fetch.
     */
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineMembers.
     */
    cursor?: RoutineMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineMembers.
     */
    distinct?: RoutineMemberScalarFieldEnum | RoutineMemberScalarFieldEnum[]
  }

  /**
   * RoutineMember findFirstOrThrow
   */
  export type RoutineMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoutineMember to fetch.
     */
    where?: RoutineMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineMembers to fetch.
     */
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineMembers.
     */
    cursor?: RoutineMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineMembers.
     */
    distinct?: RoutineMemberScalarFieldEnum | RoutineMemberScalarFieldEnum[]
  }

  /**
   * RoutineMember findMany
   */
  export type RoutineMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter, which RoutineMembers to fetch.
     */
    where?: RoutineMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineMembers to fetch.
     */
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineMembers.
     */
    cursor?: RoutineMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineMembers.
     */
    skip?: number
    distinct?: RoutineMemberScalarFieldEnum | RoutineMemberScalarFieldEnum[]
  }

  /**
   * RoutineMember create
   */
  export type RoutineMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineMember.
     */
    data: XOR<RoutineMemberCreateInput, RoutineMemberUncheckedCreateInput>
  }

  /**
   * RoutineMember createMany
   */
  export type RoutineMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineMembers.
     */
    data: RoutineMemberCreateManyInput | RoutineMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineMember createManyAndReturn
   */
  export type RoutineMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoutineMembers.
     */
    data: RoutineMemberCreateManyInput | RoutineMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineMember update
   */
  export type RoutineMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineMember.
     */
    data: XOR<RoutineMemberUpdateInput, RoutineMemberUncheckedUpdateInput>
    /**
     * Choose, which RoutineMember to update.
     */
    where: RoutineMemberWhereUniqueInput
  }

  /**
   * RoutineMember updateMany
   */
  export type RoutineMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineMembers.
     */
    data: XOR<RoutineMemberUpdateManyMutationInput, RoutineMemberUncheckedUpdateManyInput>
    /**
     * Filter which RoutineMembers to update
     */
    where?: RoutineMemberWhereInput
  }

  /**
   * RoutineMember upsert
   */
  export type RoutineMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineMember to update in case it exists.
     */
    where: RoutineMemberWhereUniqueInput
    /**
     * In case the RoutineMember found by the `where` argument doesn't exist, create a new RoutineMember with this data.
     */
    create: XOR<RoutineMemberCreateInput, RoutineMemberUncheckedCreateInput>
    /**
     * In case the RoutineMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineMemberUpdateInput, RoutineMemberUncheckedUpdateInput>
  }

  /**
   * RoutineMember delete
   */
  export type RoutineMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    /**
     * Filter which RoutineMember to delete.
     */
    where: RoutineMemberWhereUniqueInput
  }

  /**
   * RoutineMember deleteMany
   */
  export type RoutineMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineMembers to delete
     */
    where?: RoutineMemberWhereInput
  }

  /**
   * RoutineMember without action
   */
  export type RoutineMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineMinAggregateOutputType = {
    id: string | null
    routineName: string | null
    ownerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: string | null
    routineName: string | null
    ownerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    routineName: number
    ownerAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineMinAggregateInputType = {
    id?: true
    routineName?: true
    ownerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    routineName?: true
    ownerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    routineName?: true
    ownerAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: string
    routineName: string
    ownerAccountId: string
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineName?: boolean
    ownerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routineOwner?: boolean | AccountDefaultArgs<ExtArgs>
    routineMembers?: boolean | Routine$routineMembersArgs<ExtArgs>
    classes?: boolean | Routine$classesArgs<ExtArgs>
    weekdays?: boolean | Routine$weekdaysArgs<ExtArgs>
    savedBy?: boolean | Routine$savedByArgs<ExtArgs>
    RoutinesJoinRequest?: boolean | Routine$RoutinesJoinRequestArgs<ExtArgs>
    Summary?: boolean | Routine$SummaryArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineName?: boolean
    ownerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routineOwner?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>

  export type RoutineSelectScalar = {
    id?: boolean
    routineName?: boolean
    ownerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineOwner?: boolean | AccountDefaultArgs<ExtArgs>
    routineMembers?: boolean | Routine$routineMembersArgs<ExtArgs>
    classes?: boolean | Routine$classesArgs<ExtArgs>
    weekdays?: boolean | Routine$weekdaysArgs<ExtArgs>
    savedBy?: boolean | Routine$savedByArgs<ExtArgs>
    RoutinesJoinRequest?: boolean | Routine$RoutinesJoinRequestArgs<ExtArgs>
    Summary?: boolean | Routine$SummaryArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoutineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineOwner?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      routineOwner: Prisma.$AccountPayload<ExtArgs>
      routineMembers: Prisma.$RoutineMemberPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
      weekdays: Prisma.$WeekdayPayload<ExtArgs>[]
      savedBy: Prisma.$AccountPayload<ExtArgs>[]
      RoutinesJoinRequest: Prisma.$RoutinesJoinRequestPayload<ExtArgs>[]
      Summary: Prisma.$SummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routineName: string
      ownerAccountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routines and returns the data saved in the database.
     * @param {RoutineCreateManyAndReturnArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routines and only return the `id`
     * const routineWithIdOnly = await prisma.routine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routineOwner<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    routineMembers<T extends Routine$routineMembersArgs<ExtArgs> = {}>(args?: Subset<T, Routine$routineMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineMemberPayload<ExtArgs>, T, "findMany"> | Null>
    classes<T extends Routine$classesArgs<ExtArgs> = {}>(args?: Subset<T, Routine$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany"> | Null>
    weekdays<T extends Routine$weekdaysArgs<ExtArgs> = {}>(args?: Subset<T, Routine$weekdaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findMany"> | Null>
    savedBy<T extends Routine$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Routine$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    RoutinesJoinRequest<T extends Routine$RoutinesJoinRequestArgs<ExtArgs> = {}>(args?: Subset<T, Routine$RoutinesJoinRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinesJoinRequestPayload<ExtArgs>, T, "findMany"> | Null>
    Summary<T extends Routine$SummaryArgs<ExtArgs> = {}>(args?: Subset<T, Routine$SummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Routine model
   */ 
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'String'>
    readonly routineName: FieldRef<"Routine", 'String'>
    readonly ownerAccountId: FieldRef<"Routine", 'String'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine createManyAndReturn
   */
  export type RoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
  }

  /**
   * Routine.routineMembers
   */
  export type Routine$routineMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineMember
     */
    select?: RoutineMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineMemberInclude<ExtArgs> | null
    where?: RoutineMemberWhereInput
    orderBy?: RoutineMemberOrderByWithRelationInput | RoutineMemberOrderByWithRelationInput[]
    cursor?: RoutineMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineMemberScalarFieldEnum | RoutineMemberScalarFieldEnum[]
  }

  /**
   * Routine.classes
   */
  export type Routine$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Routine.weekdays
   */
  export type Routine$weekdaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    where?: WeekdayWhereInput
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    cursor?: WeekdayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekdayScalarFieldEnum | WeekdayScalarFieldEnum[]
  }

  /**
   * Routine.savedBy
   */
  export type Routine$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Routine.RoutinesJoinRequest
   */
  export type Routine$RoutinesJoinRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutinesJoinRequest
     */
    select?: RoutinesJoinRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutinesJoinRequestInclude<ExtArgs> | null
    where?: RoutinesJoinRequestWhereInput
    orderBy?: RoutinesJoinRequestOrderByWithRelationInput | RoutinesJoinRequestOrderByWithRelationInput[]
    cursor?: RoutinesJoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutinesJoinRequestScalarFieldEnum | RoutinesJoinRequestScalarFieldEnum[]
  }

  /**
   * Routine.Summary
   */
  export type Routine$SummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    cursor?: SummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    instructorName: string | null
    subjectCode: string | null
    routineId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    instructorName: string | null
    subjectCode: string | null
    routineId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    instructorName: number
    subjectCode: number
    routineId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    instructorName?: true
    subjectCode?: true
    routineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    instructorName?: true
    subjectCode?: true
    routineId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    instructorName?: true
    subjectCode?: true
    routineId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    instructorName: string
    subjectCode: string
    routineId: string
    createdAt: Date
    updatedAt: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instructorName?: boolean
    subjectCode?: boolean
    routineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    weekdays?: boolean | Class$weekdaysArgs<ExtArgs>
    Summary?: boolean | Class$SummaryArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instructorName?: boolean
    subjectCode?: boolean
    routineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    instructorName?: boolean
    subjectCode?: boolean
    routineId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    weekdays?: boolean | Class$weekdaysArgs<ExtArgs>
    Summary?: boolean | Class$SummaryArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      weekdays: Prisma.$WeekdayPayload<ExtArgs>[]
      Summary: Prisma.$SummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      instructorName: string
      subjectCode: string
      routineId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    weekdays<T extends Class$weekdaysArgs<ExtArgs> = {}>(args?: Subset<T, Class$weekdaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekdayPayload<ExtArgs>, T, "findMany"> | Null>
    Summary<T extends Class$SummaryArgs<ExtArgs> = {}>(args?: Subset<T, Class$SummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly instructorName: FieldRef<"Class", 'String'>
    readonly subjectCode: FieldRef<"Class", 'String'>
    readonly routineId: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }

  /**
   * Class.weekdays
   */
  export type Class$weekdaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weekday
     */
    select?: WeekdaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekdayInclude<ExtArgs> | null
    where?: WeekdayWhereInput
    orderBy?: WeekdayOrderByWithRelationInput | WeekdayOrderByWithRelationInput[]
    cursor?: WeekdayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekdayScalarFieldEnum | WeekdayScalarFieldEnum[]
  }

  /**
   * Class.Summary
   */
  export type Class$SummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    cursor?: SummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Summary
   */

  export type AggregateSummary = {
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  export type SummaryMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    text: string | null
    imageStorageProvider: $Enums.StorageProvider | null
    routineId: string | null
    classId: string | null
    autoDeleteAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.SummaryType | null
    fileType: string | null
    savedAccountId: string | null
  }

  export type SummaryMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    text: string | null
    imageStorageProvider: $Enums.StorageProvider | null
    routineId: string | null
    classId: string | null
    autoDeleteAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.SummaryType | null
    fileType: string | null
    savedAccountId: string | null
  }

  export type SummaryCountAggregateOutputType = {
    id: number
    ownerId: number
    text: number
    imageLinks: number
    imageStorageProvider: number
    routineId: number
    classId: number
    autoDeleteAt: number
    createdAt: number
    updatedAt: number
    type: number
    fileType: number
    pollOptions: number
    savedAccountId: number
    _all: number
  }


  export type SummaryMinAggregateInputType = {
    id?: true
    ownerId?: true
    text?: true
    imageStorageProvider?: true
    routineId?: true
    classId?: true
    autoDeleteAt?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    fileType?: true
    savedAccountId?: true
  }

  export type SummaryMaxAggregateInputType = {
    id?: true
    ownerId?: true
    text?: true
    imageStorageProvider?: true
    routineId?: true
    classId?: true
    autoDeleteAt?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    fileType?: true
    savedAccountId?: true
  }

  export type SummaryCountAggregateInputType = {
    id?: true
    ownerId?: true
    text?: true
    imageLinks?: true
    imageStorageProvider?: true
    routineId?: true
    classId?: true
    autoDeleteAt?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    fileType?: true
    pollOptions?: true
    savedAccountId?: true
    _all?: true
  }

  export type SummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summary to aggregate.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Summaries
    **/
    _count?: true | SummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMaxAggregateInputType
  }

  export type GetSummaryAggregateType<T extends SummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary[P]>
      : GetScalarType<T[P], AggregateSummary[P]>
  }




  export type SummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithAggregationInput | SummaryOrderByWithAggregationInput[]
    by: SummaryScalarFieldEnum[] | SummaryScalarFieldEnum
    having?: SummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCountAggregateInputType | true
    _min?: SummaryMinAggregateInputType
    _max?: SummaryMaxAggregateInputType
  }

  export type SummaryGroupByOutputType = {
    id: string
    ownerId: string
    text: string
    imageLinks: string[]
    imageStorageProvider: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date
    createdAt: Date
    updatedAt: Date
    type: $Enums.SummaryType
    fileType: string | null
    pollOptions: JsonValue | null
    savedAccountId: string | null
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  type GetSummaryGroupByPayload<T extends SummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryGroupByOutputType[P]>
        }
      >
    >


  export type SummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    text?: boolean
    imageLinks?: boolean
    imageStorageProvider?: boolean
    routineId?: boolean
    classId?: boolean
    autoDeleteAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    fileType?: boolean
    pollOptions?: boolean
    savedAccountId?: boolean
    owner?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    Account?: boolean | Summary$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    text?: boolean
    imageLinks?: boolean
    imageStorageProvider?: boolean
    routineId?: boolean
    classId?: boolean
    autoDeleteAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    fileType?: boolean
    pollOptions?: boolean
    savedAccountId?: boolean
    owner?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    Account?: boolean | Summary$AccountArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectScalar = {
    id?: boolean
    ownerId?: boolean
    text?: boolean
    imageLinks?: boolean
    imageStorageProvider?: boolean
    routineId?: boolean
    classId?: boolean
    autoDeleteAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    fileType?: boolean
    pollOptions?: boolean
    savedAccountId?: boolean
  }

  export type SummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    Account?: boolean | Summary$AccountArgs<ExtArgs>
  }
  export type SummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | AccountDefaultArgs<ExtArgs>
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    Account?: boolean | Summary$AccountArgs<ExtArgs>
  }

  export type $SummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Summary"
    objects: {
      owner: Prisma.$AccountPayload<ExtArgs>
      routine: Prisma.$RoutinePayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      Account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      text: string
      imageLinks: string[]
      imageStorageProvider: $Enums.StorageProvider | null
      routineId: string
      classId: string
      autoDeleteAt: Date
      createdAt: Date
      updatedAt: Date
      type: $Enums.SummaryType
      fileType: string | null
      pollOptions: Prisma.JsonValue | null
      savedAccountId: string | null
    }, ExtArgs["result"]["summary"]>
    composites: {}
  }

  type SummaryGetPayload<S extends boolean | null | undefined | SummaryDefaultArgs> = $Result.GetResult<Prisma.$SummaryPayload, S>

  type SummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SummaryCountAggregateInputType | true
    }

  export interface SummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Summary'], meta: { name: 'Summary' } }
    /**
     * Find zero or one Summary that matches the filter.
     * @param {SummaryFindUniqueArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryFindUniqueArgs>(args: SelectSubset<T, SummaryFindUniqueArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Summary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SummaryFindUniqueOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryFindFirstArgs>(args?: SelectSubset<T, SummaryFindFirstArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summary.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryWithIdOnly = await prisma.summary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryFindManyArgs>(args?: SelectSubset<T, SummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Summary.
     * @param {SummaryCreateArgs} args - Arguments to create a Summary.
     * @example
     * // Create one Summary
     * const Summary = await prisma.summary.create({
     *   data: {
     *     // ... data to create a Summary
     *   }
     * })
     * 
     */
    create<T extends SummaryCreateArgs>(args: SelectSubset<T, SummaryCreateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Summaries.
     * @param {SummaryCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCreateManyArgs>(args?: SelectSubset<T, SummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Summaries and returns the data saved in the database.
     * @param {SummaryCreateManyAndReturnArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Summary.
     * @param {SummaryDeleteArgs} args - Arguments to delete one Summary.
     * @example
     * // Delete one Summary
     * const Summary = await prisma.summary.delete({
     *   where: {
     *     // ... filter to delete one Summary
     *   }
     * })
     * 
     */
    delete<T extends SummaryDeleteArgs>(args: SelectSubset<T, SummaryDeleteArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Summary.
     * @param {SummaryUpdateArgs} args - Arguments to update one Summary.
     * @example
     * // Update one Summary
     * const summary = await prisma.summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryUpdateArgs>(args: SelectSubset<T, SummaryUpdateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Summaries.
     * @param {SummaryDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryDeleteManyArgs>(args?: SelectSubset<T, SummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryUpdateManyArgs>(args: SelectSubset<T, SummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Summary.
     * @param {SummaryUpsertArgs} args - Arguments to update or create a Summary.
     * @example
     * // Update or create a Summary
     * const summary = await prisma.summary.upsert({
     *   create: {
     *     // ... data to create a Summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary we want to update
     *   }
     * })
     */
    upsert<T extends SummaryUpsertArgs>(args: SelectSubset<T, SummaryUpsertArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summary.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends SummaryCountArgs>(
      args?: Subset<T, SummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryAggregateArgs>(args: Subset<T, SummaryAggregateArgs>): Prisma.PrismaPromise<GetSummaryAggregateType<T>>

    /**
     * Group by Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Summary model
   */
  readonly fields: SummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Account<T extends Summary$AccountArgs<ExtArgs> = {}>(args?: Subset<T, Summary$AccountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Summary model
   */ 
  interface SummaryFieldRefs {
    readonly id: FieldRef<"Summary", 'String'>
    readonly ownerId: FieldRef<"Summary", 'String'>
    readonly text: FieldRef<"Summary", 'String'>
    readonly imageLinks: FieldRef<"Summary", 'String[]'>
    readonly imageStorageProvider: FieldRef<"Summary", 'StorageProvider'>
    readonly routineId: FieldRef<"Summary", 'String'>
    readonly classId: FieldRef<"Summary", 'String'>
    readonly autoDeleteAt: FieldRef<"Summary", 'DateTime'>
    readonly createdAt: FieldRef<"Summary", 'DateTime'>
    readonly updatedAt: FieldRef<"Summary", 'DateTime'>
    readonly type: FieldRef<"Summary", 'SummaryType'>
    readonly fileType: FieldRef<"Summary", 'String'>
    readonly pollOptions: FieldRef<"Summary", 'Json'>
    readonly savedAccountId: FieldRef<"Summary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Summary findUnique
   */
  export type SummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findUniqueOrThrow
   */
  export type SummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findFirst
   */
  export type SummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findFirstOrThrow
   */
  export type SummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findMany
   */
  export type SummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summaries to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary create
   */
  export type SummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Summary.
     */
    data: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
  }

  /**
   * Summary createMany
   */
  export type SummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Summary createManyAndReturn
   */
  export type SummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Summary update
   */
  export type SummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Summary.
     */
    data: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
    /**
     * Choose, which Summary to update.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary updateMany
   */
  export type SummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
  }

  /**
   * Summary upsert
   */
  export type SummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Summary to update in case it exists.
     */
    where: SummaryWhereUniqueInput
    /**
     * In case the Summary found by the `where` argument doesn't exist, create a new Summary with this data.
     */
    create: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
    /**
     * In case the Summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
  }

  /**
   * Summary delete
   */
  export type SummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter which Summary to delete.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary deleteMany
   */
  export type SummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summaries to delete
     */
    where?: SummaryWhereInput
  }

  /**
   * Summary.Account
   */
  export type Summary$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Summary without action
   */
  export type SummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountDataScalarFieldEnum: {
    id: 'id',
    ownerAccountId: 'ownerAccountId',
    googleSignIn: 'googleSignIn',
    email: 'email',
    phone: 'phone',
    password: 'password',
    verificationDocuments: 'verificationDocuments',
    oneSignalUserId: 'oneSignalUserId'
  };

  export type AccountDataScalarFieldEnum = (typeof AccountDataScalarFieldEnum)[keyof typeof AccountDataScalarFieldEnum]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AddressScalarFieldEnum: {
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

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const NoticeBoardMemberScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    notificationOn: 'notificationOn',
    memberId: 'memberId'
  };

  export type NoticeBoardMemberScalarFieldEnum = (typeof NoticeBoardMemberScalarFieldEnum)[keyof typeof NoticeBoardMemberScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    pdf: 'pdf',
    description: 'description',
    category: 'category',
    publisherId: 'publisherId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const RePublishScalarFieldEnum: {
    id: 'id',
    republishedTitle: 'republishedTitle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    noticeId: 'noticeId',
    rePublisherId: 'rePublisherId'
  };

  export type RePublishScalarFieldEnum = (typeof RePublishScalarFieldEnum)[keyof typeof RePublishScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
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

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PendingAccountScalarFieldEnum: {
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

  export type PendingAccountScalarFieldEnum = (typeof PendingAccountScalarFieldEnum)[keyof typeof PendingAccountScalarFieldEnum]


  export const RoutinesJoinRequestScalarFieldEnum: {
    id: 'id',
    requestMessage: 'requestMessage',
    routineId: 'routineId',
    createdAt: 'createdAt',
    accountIdBy: 'accountIdBy'
  };

  export type RoutinesJoinRequestScalarFieldEnum = (typeof RoutinesJoinRequestScalarFieldEnum)[keyof typeof RoutinesJoinRequestScalarFieldEnum]


  export const WeekdayScalarFieldEnum: {
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

  export type WeekdayScalarFieldEnum = (typeof WeekdayScalarFieldEnum)[keyof typeof WeekdayScalarFieldEnum]


  export const RoutineMemberScalarFieldEnum: {
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

  export type RoutineMemberScalarFieldEnum = (typeof RoutineMemberScalarFieldEnum)[keyof typeof RoutineMemberScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    routineName: 'routineName',
    ownerAccountId: 'ownerAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    instructorName: 'instructorName',
    subjectCode: 'subjectCode',
    routineId: 'routineId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const SummaryScalarFieldEnum: {
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

  export type SummaryScalarFieldEnum = (typeof SummaryScalarFieldEnum)[keyof typeof SummaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StorageProvider'
   */
  export type EnumStorageProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageProvider'>
    


  /**
   * Reference to a field of type 'StorageProvider[]'
   */
  export type ListEnumStorageProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageProvider[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'NoticeCategory'
   */
  export type EnumNoticeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoticeCategory'>
    


  /**
   * Reference to a field of type 'NoticeCategory[]'
   */
  export type ListEnumNoticeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoticeCategory[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Day[]'
   */
  export type ListEnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day[]'>
    


  /**
   * Reference to a field of type 'SummaryType'
   */
  export type EnumSummaryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SummaryType'>
    


  /**
   * Reference to a field of type 'SummaryType[]'
   */
  export type ListEnumSummaryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SummaryType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountDataWhereInput = {
    AND?: AccountDataWhereInput | AccountDataWhereInput[]
    OR?: AccountDataWhereInput[]
    NOT?: AccountDataWhereInput | AccountDataWhereInput[]
    id?: StringFilter<"AccountData"> | string
    ownerAccountId?: StringFilter<"AccountData"> | string
    googleSignIn?: BoolFilter<"AccountData"> | boolean
    email?: StringFilter<"AccountData"> | string
    phone?: StringNullableFilter<"AccountData"> | string | null
    password?: StringNullableFilter<"AccountData"> | string | null
    verificationDocuments?: StringNullableListFilter<"AccountData">
    oneSignalUserId?: StringNullableFilter<"AccountData"> | string | null
    accountID?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AccountDataOrderByWithRelationInput = {
    id?: SortOrder
    ownerAccountId?: SortOrder
    googleSignIn?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    verificationDocuments?: SortOrder
    oneSignalUserId?: SortOrderInput | SortOrder
    accountID?: AccountOrderByWithRelationInput
  }

  export type AccountDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerAccountId?: string
    email?: string
    phone?: string
    AND?: AccountDataWhereInput | AccountDataWhereInput[]
    OR?: AccountDataWhereInput[]
    NOT?: AccountDataWhereInput | AccountDataWhereInput[]
    googleSignIn?: BoolFilter<"AccountData"> | boolean
    password?: StringNullableFilter<"AccountData"> | string | null
    verificationDocuments?: StringNullableListFilter<"AccountData">
    oneSignalUserId?: StringNullableFilter<"AccountData"> | string | null
    accountID?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "ownerAccountId" | "email" | "phone">

  export type AccountDataOrderByWithAggregationInput = {
    id?: SortOrder
    ownerAccountId?: SortOrder
    googleSignIn?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    verificationDocuments?: SortOrder
    oneSignalUserId?: SortOrderInput | SortOrder
    _count?: AccountDataCountOrderByAggregateInput
    _max?: AccountDataMaxOrderByAggregateInput
    _min?: AccountDataMinOrderByAggregateInput
  }

  export type AccountDataScalarWhereWithAggregatesInput = {
    AND?: AccountDataScalarWhereWithAggregatesInput | AccountDataScalarWhereWithAggregatesInput[]
    OR?: AccountDataScalarWhereWithAggregatesInput[]
    NOT?: AccountDataScalarWhereWithAggregatesInput | AccountDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountData"> | string
    ownerAccountId?: StringWithAggregatesFilter<"AccountData"> | string
    googleSignIn?: BoolWithAggregatesFilter<"AccountData"> | boolean
    email?: StringWithAggregatesFilter<"AccountData"> | string
    phone?: StringNullableWithAggregatesFilter<"AccountData"> | string | null
    password?: StringNullableWithAggregatesFilter<"AccountData"> | string | null
    verificationDocuments?: StringNullableListFilter<"AccountData">
    oneSignalUserId?: StringNullableWithAggregatesFilter<"AccountData"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    username?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    about?: StringNullableFilter<"Account"> | string | null
    isVerified?: BoolFilter<"Account"> | boolean
    image?: StringNullableFilter<"Account"> | string | null
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    coverImage?: StringNullableFilter<"Account"> | string | null
    coverImageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    lastLoginTime?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountData?: XOR<AccountDataNullableScalarRelationFilter, AccountDataWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    createdRoutines?: RoutineListRelationFilter
    routineMemberships?: RoutineMemberListRelationFilter
    savedRoutines?: RoutineListRelationFilter
    RoutinesJoinRequest?: RoutinesJoinRequestListRelationFilter
    Summary?: SummaryListRelationFilter
    saveSummary?: SummaryListRelationFilter
    publishedNotice?: NoticeListRelationFilter
    rePublishedNotice?: RePublishListRelationFilter
    NoticeBoardMember?: NoticeBoardMemberListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    about?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    imageStorageProvider?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    coverImageStorageProvider?: SortOrderInput | SortOrder
    accountType?: SortOrder
    lastLoginTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountData?: AccountDataOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    createdRoutines?: RoutineOrderByRelationAggregateInput
    routineMemberships?: RoutineMemberOrderByRelationAggregateInput
    savedRoutines?: RoutineOrderByRelationAggregateInput
    RoutinesJoinRequest?: RoutinesJoinRequestOrderByRelationAggregateInput
    Summary?: SummaryOrderByRelationAggregateInput
    saveSummary?: SummaryOrderByRelationAggregateInput
    publishedNotice?: NoticeOrderByRelationAggregateInput
    rePublishedNotice?: rePublishOrderByRelationAggregateInput
    NoticeBoardMember?: NoticeBoardMemberOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    about?: StringNullableFilter<"Account"> | string | null
    isVerified?: BoolFilter<"Account"> | boolean
    image?: StringNullableFilter<"Account"> | string | null
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    coverImage?: StringNullableFilter<"Account"> | string | null
    coverImageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    lastLoginTime?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountData?: XOR<AccountDataNullableScalarRelationFilter, AccountDataWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    createdRoutines?: RoutineListRelationFilter
    routineMemberships?: RoutineMemberListRelationFilter
    savedRoutines?: RoutineListRelationFilter
    RoutinesJoinRequest?: RoutinesJoinRequestListRelationFilter
    Summary?: SummaryListRelationFilter
    saveSummary?: SummaryListRelationFilter
    publishedNotice?: NoticeListRelationFilter
    rePublishedNotice?: RePublishListRelationFilter
    NoticeBoardMember?: NoticeBoardMemberListRelationFilter
  }, "id" | "username">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    about?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    imageStorageProvider?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    coverImageStorageProvider?: SortOrderInput | SortOrder
    accountType?: SortOrder
    lastLoginTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    username?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    about?: StringNullableWithAggregatesFilter<"Account"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Account"> | boolean
    image?: StringNullableWithAggregatesFilter<"Account"> | string | null
    imageStorageProvider?: EnumStorageProviderNullableWithAggregatesFilter<"Account"> | $Enums.StorageProvider | null
    coverImage?: StringNullableWithAggregatesFilter<"Account"> | string | null
    coverImageStorageProvider?: EnumStorageProviderNullableWithAggregatesFilter<"Account"> | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    lastLoginTime?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    district?: StringNullableFilter<"Address"> | string | null
    upazila?: StringNullableFilter<"Address"> | string | null
    streetAddress?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    accountId?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    district?: SortOrderInput | SortOrder
    upazila?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    district?: StringNullableFilter<"Address"> | string | null
    upazila?: StringNullableFilter<"Address"> | string | null
    streetAddress?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "accountId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    district?: SortOrderInput | SortOrder
    upazila?: SortOrderInput | SortOrder
    streetAddress?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    district?: StringNullableWithAggregatesFilter<"Address"> | string | null
    upazila?: StringNullableWithAggregatesFilter<"Address"> | string | null
    streetAddress?: StringNullableWithAggregatesFilter<"Address"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    accountId?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type NoticeBoardMemberWhereInput = {
    AND?: NoticeBoardMemberWhereInput | NoticeBoardMemberWhereInput[]
    OR?: NoticeBoardMemberWhereInput[]
    NOT?: NoticeBoardMemberWhereInput | NoticeBoardMemberWhereInput[]
    id?: StringFilter<"NoticeBoardMember"> | string
    accountId?: StringFilter<"NoticeBoardMember"> | string
    notificationOn?: BoolFilter<"NoticeBoardMember"> | boolean
    memberId?: StringFilter<"NoticeBoardMember"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type NoticeBoardMemberOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    notificationOn?: SortOrder
    memberId?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type NoticeBoardMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeBoardMemberWhereInput | NoticeBoardMemberWhereInput[]
    OR?: NoticeBoardMemberWhereInput[]
    NOT?: NoticeBoardMemberWhereInput | NoticeBoardMemberWhereInput[]
    accountId?: StringFilter<"NoticeBoardMember"> | string
    notificationOn?: BoolFilter<"NoticeBoardMember"> | boolean
    memberId?: StringFilter<"NoticeBoardMember"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type NoticeBoardMemberOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    notificationOn?: SortOrder
    memberId?: SortOrder
    _count?: NoticeBoardMemberCountOrderByAggregateInput
    _max?: NoticeBoardMemberMaxOrderByAggregateInput
    _min?: NoticeBoardMemberMinOrderByAggregateInput
  }

  export type NoticeBoardMemberScalarWhereWithAggregatesInput = {
    AND?: NoticeBoardMemberScalarWhereWithAggregatesInput | NoticeBoardMemberScalarWhereWithAggregatesInput[]
    OR?: NoticeBoardMemberScalarWhereWithAggregatesInput[]
    NOT?: NoticeBoardMemberScalarWhereWithAggregatesInput | NoticeBoardMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoticeBoardMember"> | string
    accountId?: StringWithAggregatesFilter<"NoticeBoardMember"> | string
    notificationOn?: BoolWithAggregatesFilter<"NoticeBoardMember"> | boolean
    memberId?: StringWithAggregatesFilter<"NoticeBoardMember"> | string
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    pdf?: StringNullableFilter<"Notice"> | string | null
    description?: StringNullableFilter<"Notice"> | string | null
    category?: EnumNoticeCategoryFilter<"Notice"> | $Enums.NoticeCategory
    publisherId?: StringFilter<"Notice"> | string
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    rePublish?: RePublishListRelationFilter
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    pdf?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    publisherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Account?: AccountOrderByWithRelationInput
    rePublish?: rePublishOrderByRelationAggregateInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    pdf?: StringNullableFilter<"Notice"> | string | null
    description?: StringNullableFilter<"Notice"> | string | null
    category?: EnumNoticeCategoryFilter<"Notice"> | $Enums.NoticeCategory
    publisherId?: StringFilter<"Notice"> | string
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    Account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    rePublish?: RePublishListRelationFilter
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    pdf?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    publisherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notice"> | string
    title?: StringWithAggregatesFilter<"Notice"> | string
    pdf?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    description?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    category?: EnumNoticeCategoryWithAggregatesFilter<"Notice"> | $Enums.NoticeCategory
    publisherId?: StringWithAggregatesFilter<"Notice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
  }

  export type rePublishWhereInput = {
    AND?: rePublishWhereInput | rePublishWhereInput[]
    OR?: rePublishWhereInput[]
    NOT?: rePublishWhereInput | rePublishWhereInput[]
    id?: StringFilter<"rePublish"> | string
    republishedTitle?: StringFilter<"rePublish"> | string
    createdAt?: DateTimeFilter<"rePublish"> | Date | string
    updatedAt?: DateTimeFilter<"rePublish"> | Date | string
    noticeId?: StringNullableFilter<"rePublish"> | string | null
    rePublisherId?: StringFilter<"rePublish"> | string
    Notice?: XOR<NoticeNullableScalarRelationFilter, NoticeWhereInput> | null
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type rePublishOrderByWithRelationInput = {
    id?: SortOrder
    republishedTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    noticeId?: SortOrderInput | SortOrder
    rePublisherId?: SortOrder
    Notice?: NoticeOrderByWithRelationInput
    Account?: AccountOrderByWithRelationInput
  }

  export type rePublishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rePublishWhereInput | rePublishWhereInput[]
    OR?: rePublishWhereInput[]
    NOT?: rePublishWhereInput | rePublishWhereInput[]
    republishedTitle?: StringFilter<"rePublish"> | string
    createdAt?: DateTimeFilter<"rePublish"> | Date | string
    updatedAt?: DateTimeFilter<"rePublish"> | Date | string
    noticeId?: StringNullableFilter<"rePublish"> | string | null
    rePublisherId?: StringFilter<"rePublish"> | string
    Notice?: XOR<NoticeNullableScalarRelationFilter, NoticeWhereInput> | null
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type rePublishOrderByWithAggregationInput = {
    id?: SortOrder
    republishedTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    noticeId?: SortOrderInput | SortOrder
    rePublisherId?: SortOrder
    _count?: rePublishCountOrderByAggregateInput
    _max?: rePublishMaxOrderByAggregateInput
    _min?: rePublishMinOrderByAggregateInput
  }

  export type rePublishScalarWhereWithAggregatesInput = {
    AND?: rePublishScalarWhereWithAggregatesInput | rePublishScalarWhereWithAggregatesInput[]
    OR?: rePublishScalarWhereWithAggregatesInput[]
    NOT?: rePublishScalarWhereWithAggregatesInput | rePublishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"rePublish"> | string
    republishedTitle?: StringWithAggregatesFilter<"rePublish"> | string
    createdAt?: DateTimeWithAggregatesFilter<"rePublish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"rePublish"> | Date | string
    noticeId?: StringNullableWithAggregatesFilter<"rePublish"> | string | null
    rePublisherId?: StringWithAggregatesFilter<"rePublish"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    accountID?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringNullableFilter<"Notification"> | string | null
    imageUrl?: StringNullableFilter<"Notification"> | string | null
    routineID?: StringNullableFilter<"Notification"> | string | null
    NoticeID?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    accountID?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    routineID?: SortOrderInput | SortOrder
    NoticeID?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    accountID?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringNullableFilter<"Notification"> | string | null
    imageUrl?: StringNullableFilter<"Notification"> | string | null
    routineID?: StringNullableFilter<"Notification"> | string | null
    NoticeID?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    accountID?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    routineID?: SortOrderInput | SortOrder
    NoticeID?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    accountID?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    routineID?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    NoticeID?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type PendingAccountWhereInput = {
    AND?: PendingAccountWhereInput | PendingAccountWhereInput[]
    OR?: PendingAccountWhereInput[]
    NOT?: PendingAccountWhereInput | PendingAccountWhereInput[]
    id?: StringFilter<"PendingAccount"> | string
    isAccept?: BoolFilter<"PendingAccount"> | boolean
    email?: StringFilter<"PendingAccount"> | string
    username?: StringFilter<"PendingAccount"> | string
    address?: StringNullableFilter<"PendingAccount"> | string | null
    name?: StringNullableFilter<"PendingAccount"> | string | null
    about?: StringNullableFilter<"PendingAccount"> | string | null
    contractInfo?: StringNullableFilter<"PendingAccount"> | string | null
    phone?: StringNullableFilter<"PendingAccount"> | string | null
    image?: StringNullableFilter<"PendingAccount"> | string | null
    coverImage?: StringNullableFilter<"PendingAccount"> | string | null
    sendTime?: DateTimeFilter<"PendingAccount"> | Date | string
    password?: StringNullableFilter<"PendingAccount"> | string | null
    account_type?: EnumAccountTypeFilter<"PendingAccount"> | $Enums.AccountType
    googleSignIn?: BoolFilter<"PendingAccount"> | boolean
  }

  export type PendingAccountOrderByWithRelationInput = {
    id?: SortOrder
    isAccept?: SortOrder
    email?: SortOrder
    username?: SortOrder
    address?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    contractInfo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    sendTime?: SortOrder
    password?: SortOrderInput | SortOrder
    account_type?: SortOrder
    googleSignIn?: SortOrder
  }

  export type PendingAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: PendingAccountWhereInput | PendingAccountWhereInput[]
    OR?: PendingAccountWhereInput[]
    NOT?: PendingAccountWhereInput | PendingAccountWhereInput[]
    isAccept?: BoolFilter<"PendingAccount"> | boolean
    address?: StringNullableFilter<"PendingAccount"> | string | null
    name?: StringNullableFilter<"PendingAccount"> | string | null
    about?: StringNullableFilter<"PendingAccount"> | string | null
    contractInfo?: StringNullableFilter<"PendingAccount"> | string | null
    phone?: StringNullableFilter<"PendingAccount"> | string | null
    image?: StringNullableFilter<"PendingAccount"> | string | null
    coverImage?: StringNullableFilter<"PendingAccount"> | string | null
    sendTime?: DateTimeFilter<"PendingAccount"> | Date | string
    password?: StringNullableFilter<"PendingAccount"> | string | null
    account_type?: EnumAccountTypeFilter<"PendingAccount"> | $Enums.AccountType
    googleSignIn?: BoolFilter<"PendingAccount"> | boolean
  }, "id" | "email" | "username">

  export type PendingAccountOrderByWithAggregationInput = {
    id?: SortOrder
    isAccept?: SortOrder
    email?: SortOrder
    username?: SortOrder
    address?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    contractInfo?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    sendTime?: SortOrder
    password?: SortOrderInput | SortOrder
    account_type?: SortOrder
    googleSignIn?: SortOrder
    _count?: PendingAccountCountOrderByAggregateInput
    _max?: PendingAccountMaxOrderByAggregateInput
    _min?: PendingAccountMinOrderByAggregateInput
  }

  export type PendingAccountScalarWhereWithAggregatesInput = {
    AND?: PendingAccountScalarWhereWithAggregatesInput | PendingAccountScalarWhereWithAggregatesInput[]
    OR?: PendingAccountScalarWhereWithAggregatesInput[]
    NOT?: PendingAccountScalarWhereWithAggregatesInput | PendingAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingAccount"> | string
    isAccept?: BoolWithAggregatesFilter<"PendingAccount"> | boolean
    email?: StringWithAggregatesFilter<"PendingAccount"> | string
    username?: StringWithAggregatesFilter<"PendingAccount"> | string
    address?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    name?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    about?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    contractInfo?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    phone?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    image?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    sendTime?: DateTimeWithAggregatesFilter<"PendingAccount"> | Date | string
    password?: StringNullableWithAggregatesFilter<"PendingAccount"> | string | null
    account_type?: EnumAccountTypeWithAggregatesFilter<"PendingAccount"> | $Enums.AccountType
    googleSignIn?: BoolWithAggregatesFilter<"PendingAccount"> | boolean
  }

  export type RoutinesJoinRequestWhereInput = {
    AND?: RoutinesJoinRequestWhereInput | RoutinesJoinRequestWhereInput[]
    OR?: RoutinesJoinRequestWhereInput[]
    NOT?: RoutinesJoinRequestWhereInput | RoutinesJoinRequestWhereInput[]
    id?: StringFilter<"RoutinesJoinRequest"> | string
    requestMessage?: StringNullableFilter<"RoutinesJoinRequest"> | string | null
    routineId?: StringFilter<"RoutinesJoinRequest"> | string
    createdAt?: DateTimeFilter<"RoutinesJoinRequest"> | Date | string
    accountIdBy?: StringFilter<"RoutinesJoinRequest"> | string
    requestedAccount?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }

  export type RoutinesJoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestMessage?: SortOrderInput | SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    accountIdBy?: SortOrder
    requestedAccount?: AccountOrderByWithRelationInput
    routine?: RoutineOrderByWithRelationInput
  }

  export type RoutinesJoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutinesJoinRequestWhereInput | RoutinesJoinRequestWhereInput[]
    OR?: RoutinesJoinRequestWhereInput[]
    NOT?: RoutinesJoinRequestWhereInput | RoutinesJoinRequestWhereInput[]
    requestMessage?: StringNullableFilter<"RoutinesJoinRequest"> | string | null
    routineId?: StringFilter<"RoutinesJoinRequest"> | string
    createdAt?: DateTimeFilter<"RoutinesJoinRequest"> | Date | string
    accountIdBy?: StringFilter<"RoutinesJoinRequest"> | string
    requestedAccount?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }, "id">

  export type RoutinesJoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestMessage?: SortOrderInput | SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    accountIdBy?: SortOrder
    _count?: RoutinesJoinRequestCountOrderByAggregateInput
    _max?: RoutinesJoinRequestMaxOrderByAggregateInput
    _min?: RoutinesJoinRequestMinOrderByAggregateInput
  }

  export type RoutinesJoinRequestScalarWhereWithAggregatesInput = {
    AND?: RoutinesJoinRequestScalarWhereWithAggregatesInput | RoutinesJoinRequestScalarWhereWithAggregatesInput[]
    OR?: RoutinesJoinRequestScalarWhereWithAggregatesInput[]
    NOT?: RoutinesJoinRequestScalarWhereWithAggregatesInput | RoutinesJoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutinesJoinRequest"> | string
    requestMessage?: StringNullableWithAggregatesFilter<"RoutinesJoinRequest"> | string | null
    routineId?: StringWithAggregatesFilter<"RoutinesJoinRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoutinesJoinRequest"> | Date | string
    accountIdBy?: StringWithAggregatesFilter<"RoutinesJoinRequest"> | string
  }

  export type WeekdayWhereInput = {
    AND?: WeekdayWhereInput | WeekdayWhereInput[]
    OR?: WeekdayWhereInput[]
    NOT?: WeekdayWhereInput | WeekdayWhereInput[]
    id?: StringFilter<"Weekday"> | string
    routineId?: StringFilter<"Weekday"> | string
    classId?: StringFilter<"Weekday"> | string
    room?: StringFilter<"Weekday"> | string
    Day?: EnumDayFilter<"Weekday"> | $Enums.Day
    startTime?: DateTimeFilter<"Weekday"> | Date | string
    endTime?: DateTimeFilter<"Weekday"> | Date | string
    createdAt?: DateTimeFilter<"Weekday"> | Date | string
    updatedAt?: DateTimeFilter<"Weekday"> | Date | string
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type WeekdayOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    room?: SortOrder
    Day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    routine?: RoutineOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type WeekdayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeekdayWhereInput | WeekdayWhereInput[]
    OR?: WeekdayWhereInput[]
    NOT?: WeekdayWhereInput | WeekdayWhereInput[]
    routineId?: StringFilter<"Weekday"> | string
    classId?: StringFilter<"Weekday"> | string
    room?: StringFilter<"Weekday"> | string
    Day?: EnumDayFilter<"Weekday"> | $Enums.Day
    startTime?: DateTimeFilter<"Weekday"> | Date | string
    endTime?: DateTimeFilter<"Weekday"> | Date | string
    createdAt?: DateTimeFilter<"Weekday"> | Date | string
    updatedAt?: DateTimeFilter<"Weekday"> | Date | string
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type WeekdayOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    room?: SortOrder
    Day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeekdayCountOrderByAggregateInput
    _max?: WeekdayMaxOrderByAggregateInput
    _min?: WeekdayMinOrderByAggregateInput
  }

  export type WeekdayScalarWhereWithAggregatesInput = {
    AND?: WeekdayScalarWhereWithAggregatesInput | WeekdayScalarWhereWithAggregatesInput[]
    OR?: WeekdayScalarWhereWithAggregatesInput[]
    NOT?: WeekdayScalarWhereWithAggregatesInput | WeekdayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Weekday"> | string
    routineId?: StringWithAggregatesFilter<"Weekday"> | string
    classId?: StringWithAggregatesFilter<"Weekday"> | string
    room?: StringWithAggregatesFilter<"Weekday"> | string
    Day?: EnumDayWithAggregatesFilter<"Weekday"> | $Enums.Day
    startTime?: DateTimeWithAggregatesFilter<"Weekday"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Weekday"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Weekday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weekday"> | Date | string
  }

  export type RoutineMemberWhereInput = {
    AND?: RoutineMemberWhereInput | RoutineMemberWhereInput[]
    OR?: RoutineMemberWhereInput[]
    NOT?: RoutineMemberWhereInput | RoutineMemberWhereInput[]
    id?: StringFilter<"RoutineMember"> | string
    accountId?: StringFilter<"RoutineMember"> | string
    routineId?: StringFilter<"RoutineMember"> | string
    notificationOn?: BoolFilter<"RoutineMember"> | boolean
    captain?: BoolFilter<"RoutineMember"> | boolean
    owner?: BoolFilter<"RoutineMember"> | boolean
    isSaved?: BoolFilter<"RoutineMember"> | boolean
    blacklist?: BoolFilter<"RoutineMember"> | boolean
    createdAt?: DateTimeFilter<"RoutineMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoutineMember"> | Date | string
    member?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }

  export type RoutineMemberOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    routineId?: SortOrder
    notificationOn?: SortOrder
    captain?: SortOrder
    owner?: SortOrder
    isSaved?: SortOrder
    blacklist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: AccountOrderByWithRelationInput
    routine?: RoutineOrderByWithRelationInput
  }

  export type RoutineMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineMemberWhereInput | RoutineMemberWhereInput[]
    OR?: RoutineMemberWhereInput[]
    NOT?: RoutineMemberWhereInput | RoutineMemberWhereInput[]
    accountId?: StringFilter<"RoutineMember"> | string
    routineId?: StringFilter<"RoutineMember"> | string
    notificationOn?: BoolFilter<"RoutineMember"> | boolean
    captain?: BoolFilter<"RoutineMember"> | boolean
    owner?: BoolFilter<"RoutineMember"> | boolean
    isSaved?: BoolFilter<"RoutineMember"> | boolean
    blacklist?: BoolFilter<"RoutineMember"> | boolean
    createdAt?: DateTimeFilter<"RoutineMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoutineMember"> | Date | string
    member?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
  }, "id">

  export type RoutineMemberOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    routineId?: SortOrder
    notificationOn?: SortOrder
    captain?: SortOrder
    owner?: SortOrder
    isSaved?: SortOrder
    blacklist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineMemberCountOrderByAggregateInput
    _max?: RoutineMemberMaxOrderByAggregateInput
    _min?: RoutineMemberMinOrderByAggregateInput
  }

  export type RoutineMemberScalarWhereWithAggregatesInput = {
    AND?: RoutineMemberScalarWhereWithAggregatesInput | RoutineMemberScalarWhereWithAggregatesInput[]
    OR?: RoutineMemberScalarWhereWithAggregatesInput[]
    NOT?: RoutineMemberScalarWhereWithAggregatesInput | RoutineMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineMember"> | string
    accountId?: StringWithAggregatesFilter<"RoutineMember"> | string
    routineId?: StringWithAggregatesFilter<"RoutineMember"> | string
    notificationOn?: BoolWithAggregatesFilter<"RoutineMember"> | boolean
    captain?: BoolWithAggregatesFilter<"RoutineMember"> | boolean
    owner?: BoolWithAggregatesFilter<"RoutineMember"> | boolean
    isSaved?: BoolWithAggregatesFilter<"RoutineMember"> | boolean
    blacklist?: BoolWithAggregatesFilter<"RoutineMember"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RoutineMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoutineMember"> | Date | string
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: StringFilter<"Routine"> | string
    routineName?: StringFilter<"Routine"> | string
    ownerAccountId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    routineOwner?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routineMembers?: RoutineMemberListRelationFilter
    classes?: ClassListRelationFilter
    weekdays?: WeekdayListRelationFilter
    savedBy?: AccountListRelationFilter
    RoutinesJoinRequest?: RoutinesJoinRequestListRelationFilter
    Summary?: SummaryListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    routineName?: SortOrder
    ownerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    routineOwner?: AccountOrderByWithRelationInput
    routineMembers?: RoutineMemberOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
    weekdays?: WeekdayOrderByRelationAggregateInput
    savedBy?: AccountOrderByRelationAggregateInput
    RoutinesJoinRequest?: RoutinesJoinRequestOrderByRelationAggregateInput
    Summary?: SummaryOrderByRelationAggregateInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    routineName?: StringFilter<"Routine"> | string
    ownerAccountId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    routineOwner?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routineMembers?: RoutineMemberListRelationFilter
    classes?: ClassListRelationFilter
    weekdays?: WeekdayListRelationFilter
    savedBy?: AccountListRelationFilter
    RoutinesJoinRequest?: RoutinesJoinRequestListRelationFilter
    Summary?: SummaryListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    routineName?: SortOrder
    ownerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Routine"> | string
    routineName?: StringWithAggregatesFilter<"Routine"> | string
    ownerAccountId?: StringWithAggregatesFilter<"Routine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    instructorName?: StringFilter<"Class"> | string
    subjectCode?: StringFilter<"Class"> | string
    routineId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    weekdays?: WeekdayListRelationFilter
    Summary?: SummaryListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instructorName?: SortOrder
    subjectCode?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    routine?: RoutineOrderByWithRelationInput
    weekdays?: WeekdayOrderByRelationAggregateInput
    Summary?: SummaryOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    instructorName?: StringFilter<"Class"> | string
    subjectCode?: StringFilter<"Class"> | string
    routineId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    weekdays?: WeekdayListRelationFilter
    Summary?: SummaryListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    instructorName?: SortOrder
    subjectCode?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    instructorName?: StringWithAggregatesFilter<"Class"> | string
    subjectCode?: StringWithAggregatesFilter<"Class"> | string
    routineId?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type SummaryWhereInput = {
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    id?: StringFilter<"Summary"> | string
    ownerId?: StringFilter<"Summary"> | string
    text?: StringFilter<"Summary"> | string
    imageLinks?: StringNullableListFilter<"Summary">
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Summary"> | $Enums.StorageProvider | null
    routineId?: StringFilter<"Summary"> | string
    classId?: StringFilter<"Summary"> | string
    autoDeleteAt?: DateTimeFilter<"Summary"> | Date | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
    type?: EnumSummaryTypeFilter<"Summary"> | $Enums.SummaryType
    fileType?: StringNullableFilter<"Summary"> | string | null
    pollOptions?: JsonNullableFilter<"Summary">
    savedAccountId?: StringNullableFilter<"Summary"> | string | null
    owner?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type SummaryOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    text?: SortOrder
    imageLinks?: SortOrder
    imageStorageProvider?: SortOrderInput | SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    autoDeleteAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    fileType?: SortOrderInput | SortOrder
    pollOptions?: SortOrderInput | SortOrder
    savedAccountId?: SortOrderInput | SortOrder
    owner?: AccountOrderByWithRelationInput
    routine?: RoutineOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    Account?: AccountOrderByWithRelationInput
  }

  export type SummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    ownerId?: StringFilter<"Summary"> | string
    text?: StringFilter<"Summary"> | string
    imageLinks?: StringNullableListFilter<"Summary">
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Summary"> | $Enums.StorageProvider | null
    routineId?: StringFilter<"Summary"> | string
    classId?: StringFilter<"Summary"> | string
    autoDeleteAt?: DateTimeFilter<"Summary"> | Date | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
    type?: EnumSummaryTypeFilter<"Summary"> | $Enums.SummaryType
    fileType?: StringNullableFilter<"Summary"> | string | null
    pollOptions?: JsonNullableFilter<"Summary">
    savedAccountId?: StringNullableFilter<"Summary"> | string | null
    owner?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    Account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type SummaryOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    text?: SortOrder
    imageLinks?: SortOrder
    imageStorageProvider?: SortOrderInput | SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    autoDeleteAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    fileType?: SortOrderInput | SortOrder
    pollOptions?: SortOrderInput | SortOrder
    savedAccountId?: SortOrderInput | SortOrder
    _count?: SummaryCountOrderByAggregateInput
    _max?: SummaryMaxOrderByAggregateInput
    _min?: SummaryMinOrderByAggregateInput
  }

  export type SummaryScalarWhereWithAggregatesInput = {
    AND?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    OR?: SummaryScalarWhereWithAggregatesInput[]
    NOT?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Summary"> | string
    ownerId?: StringWithAggregatesFilter<"Summary"> | string
    text?: StringWithAggregatesFilter<"Summary"> | string
    imageLinks?: StringNullableListFilter<"Summary">
    imageStorageProvider?: EnumStorageProviderNullableWithAggregatesFilter<"Summary"> | $Enums.StorageProvider | null
    routineId?: StringWithAggregatesFilter<"Summary"> | string
    classId?: StringWithAggregatesFilter<"Summary"> | string
    autoDeleteAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Summary"> | Date | string
    type?: EnumSummaryTypeWithAggregatesFilter<"Summary"> | $Enums.SummaryType
    fileType?: StringNullableWithAggregatesFilter<"Summary"> | string | null
    pollOptions?: JsonNullableWithAggregatesFilter<"Summary">
    savedAccountId?: StringNullableWithAggregatesFilter<"Summary"> | string | null
  }

  export type AccountDataCreateInput = {
    id?: string
    googleSignIn?: boolean
    email: string
    phone?: string | null
    password?: string | null
    verificationDocuments?: AccountDataCreateverificationDocumentsInput | string[]
    oneSignalUserId?: string | null
    accountID: AccountCreateNestedOneWithoutAccountDataInput
  }

  export type AccountDataUncheckedCreateInput = {
    id?: string
    ownerAccountId: string
    googleSignIn?: boolean
    email: string
    phone?: string | null
    password?: string | null
    verificationDocuments?: AccountDataCreateverificationDocumentsInput | string[]
    oneSignalUserId?: string | null
  }

  export type AccountDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
    accountID?: AccountUpdateOneRequiredWithoutAccountDataNestedInput
  }

  export type AccountDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDataCreateManyInput = {
    id?: string
    ownerAccountId: string
    googleSignIn?: boolean
    email: string
    phone?: string | null
    password?: string | null
    verificationDocuments?: AccountDataCreateverificationDocumentsInput | string[]
    oneSignalUserId?: string | null
  }

  export type AccountDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    district?: string | null
    upazila?: string | null
    streetAddress?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    district?: string | null
    upazila?: string | null
    streetAddress?: string | null
    latitude?: number | null
    longitude?: number | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    district?: string | null
    upazila?: string | null
    streetAddress?: string | null
    latitude?: number | null
    longitude?: number | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeBoardMemberCreateInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
    account: AccountCreateNestedOneWithoutNoticeBoardMemberInput
  }

  export type NoticeBoardMemberUncheckedCreateInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
    memberId: string
  }

  export type NoticeBoardMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutNoticeBoardMemberNestedInput
  }

  export type NoticeBoardMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type NoticeBoardMemberCreateManyInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
    memberId: string
  }

  export type NoticeBoardMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeBoardMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    memberId?: StringFieldUpdateOperationsInput | string
  }

  export type NoticeCreateInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    Account: AccountCreateNestedOneWithoutPublishedNoticeInput
    rePublish?: rePublishCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    publisherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rePublish?: rePublishUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutPublishedNoticeNestedInput
    rePublish?: rePublishUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    publisherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rePublish?: rePublishUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeCreateManyInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    publisherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    publisherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rePublishCreateInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeCreateNestedOneWithoutRePublishInput
    Account?: AccountCreateNestedOneWithoutRePublishedNoticeInput
  }

  export type rePublishUncheckedCreateInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    noticeId?: string | null
    rePublisherId: string
  }

  export type rePublishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUpdateOneWithoutRePublishNestedInput
    Account?: AccountUpdateOneWithoutRePublishedNoticeNestedInput
  }

  export type rePublishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    rePublisherId?: StringFieldUpdateOperationsInput | string
  }

  export type rePublishCreateManyInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    noticeId?: string | null
    rePublisherId: string
  }

  export type rePublishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rePublishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    rePublisherId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    accountID: string
    title: string
    body?: string | null
    imageUrl?: string | null
    routineID?: string | null
    NoticeID?: string | null
    type?: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    accountID: string
    title: string
    body?: string | null
    imageUrl?: string | null
    routineID?: string | null
    NoticeID?: string | null
    type?: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineID?: NullableStringFieldUpdateOperationsInput | string | null
    NoticeID?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineID?: NullableStringFieldUpdateOperationsInput | string | null
    NoticeID?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    accountID: string
    title: string
    body?: string | null
    imageUrl?: string | null
    routineID?: string | null
    NoticeID?: string | null
    type?: $Enums.NotificationType
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineID?: NullableStringFieldUpdateOperationsInput | string | null
    NoticeID?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountID?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    routineID?: NullableStringFieldUpdateOperationsInput | string | null
    NoticeID?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingAccountCreateInput = {
    id?: string
    isAccept?: boolean
    email: string
    username: string
    address?: string | null
    name?: string | null
    about?: string | null
    contractInfo?: string | null
    phone?: string | null
    image?: string | null
    coverImage?: string | null
    sendTime?: Date | string
    password?: string | null
    account_type?: $Enums.AccountType
    googleSignIn?: boolean
  }

  export type PendingAccountUncheckedCreateInput = {
    id?: string
    isAccept?: boolean
    email: string
    username: string
    address?: string | null
    name?: string | null
    about?: string | null
    contractInfo?: string | null
    phone?: string | null
    image?: string | null
    coverImage?: string | null
    sendTime?: Date | string
    password?: string | null
    account_type?: $Enums.AccountType
    googleSignIn?: boolean
  }

  export type PendingAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAccept?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    contractInfo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    sendTime?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PendingAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAccept?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    contractInfo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    sendTime?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PendingAccountCreateManyInput = {
    id?: string
    isAccept?: boolean
    email: string
    username: string
    address?: string | null
    name?: string | null
    about?: string | null
    contractInfo?: string | null
    phone?: string | null
    image?: string | null
    coverImage?: string | null
    sendTime?: Date | string
    password?: string | null
    account_type?: $Enums.AccountType
    googleSignIn?: boolean
  }

  export type PendingAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAccept?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    contractInfo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    sendTime?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PendingAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isAccept?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    contractInfo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    sendTime?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoutinesJoinRequestCreateInput = {
    id?: string
    requestMessage?: string | null
    createdAt?: Date | string
    requestedAccount: AccountCreateNestedOneWithoutRoutinesJoinRequestInput
    routine: RoutineCreateNestedOneWithoutRoutinesJoinRequestInput
  }

  export type RoutinesJoinRequestUncheckedCreateInput = {
    id?: string
    requestMessage?: string | null
    routineId: string
    createdAt?: Date | string
    accountIdBy: string
  }

  export type RoutinesJoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedAccount?: AccountUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput
    routine?: RoutineUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput
  }

  export type RoutinesJoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountIdBy?: StringFieldUpdateOperationsInput | string
  }

  export type RoutinesJoinRequestCreateManyInput = {
    id?: string
    requestMessage?: string | null
    routineId: string
    createdAt?: Date | string
    accountIdBy: string
  }

  export type RoutinesJoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutinesJoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountIdBy?: StringFieldUpdateOperationsInput | string
  }

  export type WeekdayCreateInput = {
    id?: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutWeekdaysInput
    class: ClassCreateNestedOneWithoutWeekdaysInput
  }

  export type WeekdayUncheckedCreateInput = {
    id?: string
    routineId: string
    classId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekdayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutWeekdaysNestedInput
    class?: ClassUpdateOneRequiredWithoutWeekdaysNestedInput
  }

  export type WeekdayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekdayCreateManyInput = {
    id?: string
    routineId: string
    classId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekdayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekdayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberCreateInput = {
    id?: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: AccountCreateNestedOneWithoutRoutineMembershipsInput
    routine: RoutineCreateNestedOneWithoutRoutineMembersInput
  }

  export type RoutineMemberUncheckedCreateInput = {
    id?: string
    accountId: string
    routineId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: AccountUpdateOneRequiredWithoutRoutineMembershipsNestedInput
    routine?: RoutineUpdateOneRequiredWithoutRoutineMembersNestedInput
  }

  export type RoutineMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberCreateManyInput = {
    id?: string
    accountId: string
    routineId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutClassesInput
    weekdays?: WeekdayCreateNestedManyWithoutClassInput
    Summary?: SummaryCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    routineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutClassInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutClassesNestedInput
    weekdays?: WeekdayUpdateManyWithoutClassNestedInput
    Summary?: SummaryUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekdays?: WeekdayUncheckedUpdateManyWithoutClassNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    routineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryCreateInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner: AccountCreateNestedOneWithoutSummaryInput
    routine: RoutineCreateNestedOneWithoutSummaryInput
    class: ClassCreateNestedOneWithoutSummaryInput
    Account?: AccountCreateNestedOneWithoutSaveSummaryInput
  }

  export type SummaryUncheckedCreateInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner?: AccountUpdateOneRequiredWithoutSummaryNestedInput
    routine?: RoutineUpdateOneRequiredWithoutSummaryNestedInput
    class?: ClassUpdateOneRequiredWithoutSummaryNestedInput
    Account?: AccountUpdateOneWithoutSaveSummaryNestedInput
  }

  export type SummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryCreateManyInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountDataCountOrderByAggregateInput = {
    id?: SortOrder
    ownerAccountId?: SortOrder
    googleSignIn?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    verificationDocuments?: SortOrder
    oneSignalUserId?: SortOrder
  }

  export type AccountDataMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerAccountId?: SortOrder
    googleSignIn?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    oneSignalUserId?: SortOrder
  }

  export type AccountDataMinOrderByAggregateInput = {
    id?: SortOrder
    ownerAccountId?: SortOrder
    googleSignIn?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    oneSignalUserId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStorageProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStorageProviderNullableFilter<$PrismaModel> | $Enums.StorageProvider | null
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountDataNullableScalarRelationFilter = {
    is?: AccountDataWhereInput | null
    isNot?: AccountDataWhereInput | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type RoutineMemberListRelationFilter = {
    every?: RoutineMemberWhereInput
    some?: RoutineMemberWhereInput
    none?: RoutineMemberWhereInput
  }

  export type RoutinesJoinRequestListRelationFilter = {
    every?: RoutinesJoinRequestWhereInput
    some?: RoutinesJoinRequestWhereInput
    none?: RoutinesJoinRequestWhereInput
  }

  export type SummaryListRelationFilter = {
    every?: SummaryWhereInput
    some?: SummaryWhereInput
    none?: SummaryWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type RePublishListRelationFilter = {
    every?: rePublishWhereInput
    some?: rePublishWhereInput
    none?: rePublishWhereInput
  }

  export type NoticeBoardMemberListRelationFilter = {
    every?: NoticeBoardMemberWhereInput
    some?: NoticeBoardMemberWhereInput
    none?: NoticeBoardMemberWhereInput
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutinesJoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rePublishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeBoardMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    about?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    imageStorageProvider?: SortOrder
    coverImage?: SortOrder
    coverImageStorageProvider?: SortOrder
    accountType?: SortOrder
    lastLoginTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    about?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    imageStorageProvider?: SortOrder
    coverImage?: SortOrder
    coverImageStorageProvider?: SortOrder
    accountType?: SortOrder
    lastLoginTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    about?: SortOrder
    isVerified?: SortOrder
    image?: SortOrder
    imageStorageProvider?: SortOrder
    coverImage?: SortOrder
    coverImageStorageProvider?: SortOrder
    accountType?: SortOrder
    lastLoginTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStorageProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStorageProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.StorageProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStorageProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumStorageProviderNullableFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    streetAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    streetAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    upazila?: SortOrder
    streetAddress?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NoticeBoardMemberCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    notificationOn?: SortOrder
    memberId?: SortOrder
  }

  export type NoticeBoardMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    notificationOn?: SortOrder
    memberId?: SortOrder
  }

  export type NoticeBoardMemberMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    notificationOn?: SortOrder
    memberId?: SortOrder
  }

  export type EnumNoticeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeCategory | EnumNoticeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoticeCategoryFilter<$PrismaModel> | $Enums.NoticeCategory
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pdf?: SortOrder
    description?: SortOrder
    category?: SortOrder
    publisherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pdf?: SortOrder
    description?: SortOrder
    category?: SortOrder
    publisherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pdf?: SortOrder
    description?: SortOrder
    category?: SortOrder
    publisherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNoticeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeCategory | EnumNoticeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoticeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NoticeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoticeCategoryFilter<$PrismaModel>
    _max?: NestedEnumNoticeCategoryFilter<$PrismaModel>
  }

  export type NoticeNullableScalarRelationFilter = {
    is?: NoticeWhereInput | null
    isNot?: NoticeWhereInput | null
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type rePublishCountOrderByAggregateInput = {
    id?: SortOrder
    republishedTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    noticeId?: SortOrder
    rePublisherId?: SortOrder
  }

  export type rePublishMaxOrderByAggregateInput = {
    id?: SortOrder
    republishedTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    noticeId?: SortOrder
    rePublisherId?: SortOrder
  }

  export type rePublishMinOrderByAggregateInput = {
    id?: SortOrder
    republishedTitle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    noticeId?: SortOrder
    rePublisherId?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    accountID?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    routineID?: SortOrder
    NoticeID?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    accountID?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    routineID?: SortOrder
    NoticeID?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    accountID?: SortOrder
    title?: SortOrder
    body?: SortOrder
    imageUrl?: SortOrder
    routineID?: SortOrder
    NoticeID?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type PendingAccountCountOrderByAggregateInput = {
    id?: SortOrder
    isAccept?: SortOrder
    email?: SortOrder
    username?: SortOrder
    address?: SortOrder
    name?: SortOrder
    about?: SortOrder
    contractInfo?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    sendTime?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    googleSignIn?: SortOrder
  }

  export type PendingAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    isAccept?: SortOrder
    email?: SortOrder
    username?: SortOrder
    address?: SortOrder
    name?: SortOrder
    about?: SortOrder
    contractInfo?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    sendTime?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    googleSignIn?: SortOrder
  }

  export type PendingAccountMinOrderByAggregateInput = {
    id?: SortOrder
    isAccept?: SortOrder
    email?: SortOrder
    username?: SortOrder
    address?: SortOrder
    name?: SortOrder
    about?: SortOrder
    contractInfo?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    coverImage?: SortOrder
    sendTime?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    googleSignIn?: SortOrder
  }

  export type RoutineScalarRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type RoutinesJoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestMessage?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    accountIdBy?: SortOrder
  }

  export type RoutinesJoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestMessage?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    accountIdBy?: SortOrder
  }

  export type RoutinesJoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestMessage?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    accountIdBy?: SortOrder
  }

  export type EnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type WeekdayCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    room?: SortOrder
    Day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeekdayMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    room?: SortOrder
    Day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeekdayMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    room?: SortOrder
    Day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type RoutineMemberCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    routineId?: SortOrder
    notificationOn?: SortOrder
    captain?: SortOrder
    owner?: SortOrder
    isSaved?: SortOrder
    blacklist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    routineId?: SortOrder
    notificationOn?: SortOrder
    captain?: SortOrder
    owner?: SortOrder
    isSaved?: SortOrder
    blacklist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMemberMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    routineId?: SortOrder
    notificationOn?: SortOrder
    captain?: SortOrder
    owner?: SortOrder
    isSaved?: SortOrder
    blacklist?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type WeekdayListRelationFilter = {
    every?: WeekdayWhereInput
    some?: WeekdayWhereInput
    none?: WeekdayWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeekdayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    routineName?: SortOrder
    ownerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    routineName?: SortOrder
    ownerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    routineName?: SortOrder
    ownerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorName?: SortOrder
    subjectCode?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorName?: SortOrder
    subjectCode?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    instructorName?: SortOrder
    subjectCode?: SortOrder
    routineId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSummaryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryType | EnumSummaryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSummaryTypeFilter<$PrismaModel> | $Enums.SummaryType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SummaryCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    text?: SortOrder
    imageLinks?: SortOrder
    imageStorageProvider?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    autoDeleteAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    fileType?: SortOrder
    pollOptions?: SortOrder
    savedAccountId?: SortOrder
  }

  export type SummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    text?: SortOrder
    imageStorageProvider?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    autoDeleteAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    fileType?: SortOrder
    savedAccountId?: SortOrder
  }

  export type SummaryMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    text?: SortOrder
    imageStorageProvider?: SortOrder
    routineId?: SortOrder
    classId?: SortOrder
    autoDeleteAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    fileType?: SortOrder
    savedAccountId?: SortOrder
  }

  export type EnumSummaryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryType | EnumSummaryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSummaryTypeWithAggregatesFilter<$PrismaModel> | $Enums.SummaryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSummaryTypeFilter<$PrismaModel>
    _max?: NestedEnumSummaryTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AccountDataCreateverificationDocumentsInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutAccountDataInput = {
    create?: XOR<AccountCreateWithoutAccountDataInput, AccountUncheckedCreateWithoutAccountDataInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountDataInput
    connect?: AccountWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountDataUpdateverificationDocumentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AccountUpdateOneRequiredWithoutAccountDataNestedInput = {
    create?: XOR<AccountCreateWithoutAccountDataInput, AccountUncheckedCreateWithoutAccountDataInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountDataInput
    upsert?: AccountUpsertWithoutAccountDataInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAccountDataInput, AccountUpdateWithoutAccountDataInput>, AccountUncheckedUpdateWithoutAccountDataInput>
  }

  export type AccountDataCreateNestedOneWithoutAccountIDInput = {
    create?: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
    connectOrCreate?: AccountDataCreateOrConnectWithoutAccountIDInput
    connect?: AccountDataWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutAccountInput = {
    create?: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAccountInput
    connect?: AddressWhereUniqueInput
  }

  export type RoutineCreateNestedManyWithoutRoutineOwnerInput = {
    create?: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput> | RoutineCreateWithoutRoutineOwnerInput[] | RoutineUncheckedCreateWithoutRoutineOwnerInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineOwnerInput | RoutineCreateOrConnectWithoutRoutineOwnerInput[]
    createMany?: RoutineCreateManyRoutineOwnerInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type RoutineMemberCreateNestedManyWithoutMemberInput = {
    create?: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput> | RoutineMemberCreateWithoutMemberInput[] | RoutineMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutMemberInput | RoutineMemberCreateOrConnectWithoutMemberInput[]
    createMany?: RoutineMemberCreateManyMemberInputEnvelope
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutSavedByInput = {
    create?: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput> | RoutineCreateWithoutSavedByInput[] | RoutineUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutSavedByInput | RoutineCreateOrConnectWithoutSavedByInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput> | RoutinesJoinRequestCreateWithoutRequestedAccountInput[] | RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput | RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput[]
    createMany?: RoutinesJoinRequestCreateManyRequestedAccountInputEnvelope
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
  }

  export type SummaryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput> | SummaryCreateWithoutOwnerInput[] | SummaryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutOwnerInput | SummaryCreateOrConnectWithoutOwnerInput[]
    createMany?: SummaryCreateManyOwnerInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type SummaryCreateNestedManyWithoutAccountInput = {
    create?: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput> | SummaryCreateWithoutAccountInput[] | SummaryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutAccountInput | SummaryCreateOrConnectWithoutAccountInput[]
    createMany?: SummaryCreateManyAccountInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutAccountInput = {
    create?: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput> | NoticeCreateWithoutAccountInput[] | NoticeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutAccountInput | NoticeCreateOrConnectWithoutAccountInput[]
    createMany?: NoticeCreateManyAccountInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type rePublishCreateNestedManyWithoutAccountInput = {
    create?: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput> | rePublishCreateWithoutAccountInput[] | rePublishUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutAccountInput | rePublishCreateOrConnectWithoutAccountInput[]
    createMany?: rePublishCreateManyAccountInputEnvelope
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
  }

  export type NoticeBoardMemberCreateNestedManyWithoutAccountInput = {
    create?: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput> | NoticeBoardMemberCreateWithoutAccountInput[] | NoticeBoardMemberUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeBoardMemberCreateOrConnectWithoutAccountInput | NoticeBoardMemberCreateOrConnectWithoutAccountInput[]
    createMany?: NoticeBoardMemberCreateManyAccountInputEnvelope
    connect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
  }

  export type AccountDataUncheckedCreateNestedOneWithoutAccountIDInput = {
    create?: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
    connectOrCreate?: AccountDataCreateOrConnectWithoutAccountIDInput
    connect?: AccountDataWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAccountInput
    connect?: AddressWhereUniqueInput
  }

  export type RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput = {
    create?: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput> | RoutineCreateWithoutRoutineOwnerInput[] | RoutineUncheckedCreateWithoutRoutineOwnerInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineOwnerInput | RoutineCreateOrConnectWithoutRoutineOwnerInput[]
    createMany?: RoutineCreateManyRoutineOwnerInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type RoutineMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput> | RoutineMemberCreateWithoutMemberInput[] | RoutineMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutMemberInput | RoutineMemberCreateOrConnectWithoutMemberInput[]
    createMany?: RoutineMemberCreateManyMemberInputEnvelope
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput> | RoutineCreateWithoutSavedByInput[] | RoutineUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutSavedByInput | RoutineCreateOrConnectWithoutSavedByInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput> | RoutinesJoinRequestCreateWithoutRequestedAccountInput[] | RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput | RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput[]
    createMany?: RoutinesJoinRequestCreateManyRequestedAccountInputEnvelope
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput> | SummaryCreateWithoutOwnerInput[] | SummaryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutOwnerInput | SummaryCreateOrConnectWithoutOwnerInput[]
    createMany?: SummaryCreateManyOwnerInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput> | SummaryCreateWithoutAccountInput[] | SummaryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutAccountInput | SummaryCreateOrConnectWithoutAccountInput[]
    createMany?: SummaryCreateManyAccountInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput> | NoticeCreateWithoutAccountInput[] | NoticeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutAccountInput | NoticeCreateOrConnectWithoutAccountInput[]
    createMany?: NoticeCreateManyAccountInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type rePublishUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput> | rePublishCreateWithoutAccountInput[] | rePublishUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutAccountInput | rePublishCreateOrConnectWithoutAccountInput[]
    createMany?: rePublishCreateManyAccountInputEnvelope
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
  }

  export type NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput> | NoticeBoardMemberCreateWithoutAccountInput[] | NoticeBoardMemberUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeBoardMemberCreateOrConnectWithoutAccountInput | NoticeBoardMemberCreateOrConnectWithoutAccountInput[]
    createMany?: NoticeBoardMemberCreateManyAccountInputEnvelope
    connect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
  }

  export type NullableEnumStorageProviderFieldUpdateOperationsInput = {
    set?: $Enums.StorageProvider | null
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountDataUpdateOneWithoutAccountIDNestedInput = {
    create?: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
    connectOrCreate?: AccountDataCreateOrConnectWithoutAccountIDInput
    upsert?: AccountDataUpsertWithoutAccountIDInput
    disconnect?: AccountDataWhereInput | boolean
    delete?: AccountDataWhereInput | boolean
    connect?: AccountDataWhereUniqueInput
    update?: XOR<XOR<AccountDataUpdateToOneWithWhereWithoutAccountIDInput, AccountDataUpdateWithoutAccountIDInput>, AccountDataUncheckedUpdateWithoutAccountIDInput>
  }

  export type AddressUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAccountInput
    upsert?: AddressUpsertWithoutAccountInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutAccountInput, AddressUpdateWithoutAccountInput>, AddressUncheckedUpdateWithoutAccountInput>
  }

  export type RoutineUpdateManyWithoutRoutineOwnerNestedInput = {
    create?: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput> | RoutineCreateWithoutRoutineOwnerInput[] | RoutineUncheckedCreateWithoutRoutineOwnerInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineOwnerInput | RoutineCreateOrConnectWithoutRoutineOwnerInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutRoutineOwnerInput | RoutineUpsertWithWhereUniqueWithoutRoutineOwnerInput[]
    createMany?: RoutineCreateManyRoutineOwnerInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutRoutineOwnerInput | RoutineUpdateWithWhereUniqueWithoutRoutineOwnerInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutRoutineOwnerInput | RoutineUpdateManyWithWhereWithoutRoutineOwnerInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type RoutineMemberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput> | RoutineMemberCreateWithoutMemberInput[] | RoutineMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutMemberInput | RoutineMemberCreateOrConnectWithoutMemberInput[]
    upsert?: RoutineMemberUpsertWithWhereUniqueWithoutMemberInput | RoutineMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: RoutineMemberCreateManyMemberInputEnvelope
    set?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    disconnect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    delete?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    update?: RoutineMemberUpdateWithWhereUniqueWithoutMemberInput | RoutineMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: RoutineMemberUpdateManyWithWhereWithoutMemberInput | RoutineMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput> | RoutineCreateWithoutSavedByInput[] | RoutineUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutSavedByInput | RoutineCreateOrConnectWithoutSavedByInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutSavedByInput | RoutineUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutSavedByInput | RoutineUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutSavedByInput | RoutineUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput> | RoutinesJoinRequestCreateWithoutRequestedAccountInput[] | RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput | RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput[]
    upsert?: RoutinesJoinRequestUpsertWithWhereUniqueWithoutRequestedAccountInput | RoutinesJoinRequestUpsertWithWhereUniqueWithoutRequestedAccountInput[]
    createMany?: RoutinesJoinRequestCreateManyRequestedAccountInputEnvelope
    set?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    disconnect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    delete?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    update?: RoutinesJoinRequestUpdateWithWhereUniqueWithoutRequestedAccountInput | RoutinesJoinRequestUpdateWithWhereUniqueWithoutRequestedAccountInput[]
    updateMany?: RoutinesJoinRequestUpdateManyWithWhereWithoutRequestedAccountInput | RoutinesJoinRequestUpdateManyWithWhereWithoutRequestedAccountInput[]
    deleteMany?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
  }

  export type SummaryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput> | SummaryCreateWithoutOwnerInput[] | SummaryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutOwnerInput | SummaryCreateOrConnectWithoutOwnerInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutOwnerInput | SummaryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SummaryCreateManyOwnerInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutOwnerInput | SummaryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutOwnerInput | SummaryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type SummaryUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput> | SummaryCreateWithoutAccountInput[] | SummaryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutAccountInput | SummaryCreateOrConnectWithoutAccountInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutAccountInput | SummaryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SummaryCreateManyAccountInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutAccountInput | SummaryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutAccountInput | SummaryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput> | NoticeCreateWithoutAccountInput[] | NoticeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutAccountInput | NoticeCreateOrConnectWithoutAccountInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutAccountInput | NoticeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NoticeCreateManyAccountInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutAccountInput | NoticeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutAccountInput | NoticeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type rePublishUpdateManyWithoutAccountNestedInput = {
    create?: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput> | rePublishCreateWithoutAccountInput[] | rePublishUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutAccountInput | rePublishCreateOrConnectWithoutAccountInput[]
    upsert?: rePublishUpsertWithWhereUniqueWithoutAccountInput | rePublishUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: rePublishCreateManyAccountInputEnvelope
    set?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    disconnect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    delete?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    update?: rePublishUpdateWithWhereUniqueWithoutAccountInput | rePublishUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: rePublishUpdateManyWithWhereWithoutAccountInput | rePublishUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
  }

  export type NoticeBoardMemberUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput> | NoticeBoardMemberCreateWithoutAccountInput[] | NoticeBoardMemberUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeBoardMemberCreateOrConnectWithoutAccountInput | NoticeBoardMemberCreateOrConnectWithoutAccountInput[]
    upsert?: NoticeBoardMemberUpsertWithWhereUniqueWithoutAccountInput | NoticeBoardMemberUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NoticeBoardMemberCreateManyAccountInputEnvelope
    set?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    disconnect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    delete?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    connect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    update?: NoticeBoardMemberUpdateWithWhereUniqueWithoutAccountInput | NoticeBoardMemberUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NoticeBoardMemberUpdateManyWithWhereWithoutAccountInput | NoticeBoardMemberUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NoticeBoardMemberScalarWhereInput | NoticeBoardMemberScalarWhereInput[]
  }

  export type AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput = {
    create?: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
    connectOrCreate?: AccountDataCreateOrConnectWithoutAccountIDInput
    upsert?: AccountDataUpsertWithoutAccountIDInput
    disconnect?: AccountDataWhereInput | boolean
    delete?: AccountDataWhereInput | boolean
    connect?: AccountDataWhereUniqueInput
    update?: XOR<XOR<AccountDataUpdateToOneWithWhereWithoutAccountIDInput, AccountDataUpdateWithoutAccountIDInput>, AccountDataUncheckedUpdateWithoutAccountIDInput>
  }

  export type AddressUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
    connectOrCreate?: AddressCreateOrConnectWithoutAccountInput
    upsert?: AddressUpsertWithoutAccountInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutAccountInput, AddressUpdateWithoutAccountInput>, AddressUncheckedUpdateWithoutAccountInput>
  }

  export type RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput = {
    create?: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput> | RoutineCreateWithoutRoutineOwnerInput[] | RoutineUncheckedCreateWithoutRoutineOwnerInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineOwnerInput | RoutineCreateOrConnectWithoutRoutineOwnerInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutRoutineOwnerInput | RoutineUpsertWithWhereUniqueWithoutRoutineOwnerInput[]
    createMany?: RoutineCreateManyRoutineOwnerInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutRoutineOwnerInput | RoutineUpdateWithWhereUniqueWithoutRoutineOwnerInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutRoutineOwnerInput | RoutineUpdateManyWithWhereWithoutRoutineOwnerInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput> | RoutineMemberCreateWithoutMemberInput[] | RoutineMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutMemberInput | RoutineMemberCreateOrConnectWithoutMemberInput[]
    upsert?: RoutineMemberUpsertWithWhereUniqueWithoutMemberInput | RoutineMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: RoutineMemberCreateManyMemberInputEnvelope
    set?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    disconnect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    delete?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    update?: RoutineMemberUpdateWithWhereUniqueWithoutMemberInput | RoutineMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: RoutineMemberUpdateManyWithWhereWithoutMemberInput | RoutineMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput> | RoutineCreateWithoutSavedByInput[] | RoutineUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutSavedByInput | RoutineCreateOrConnectWithoutSavedByInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutSavedByInput | RoutineUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutSavedByInput | RoutineUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutSavedByInput | RoutineUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput> | RoutinesJoinRequestCreateWithoutRequestedAccountInput[] | RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput | RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput[]
    upsert?: RoutinesJoinRequestUpsertWithWhereUniqueWithoutRequestedAccountInput | RoutinesJoinRequestUpsertWithWhereUniqueWithoutRequestedAccountInput[]
    createMany?: RoutinesJoinRequestCreateManyRequestedAccountInputEnvelope
    set?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    disconnect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    delete?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    update?: RoutinesJoinRequestUpdateWithWhereUniqueWithoutRequestedAccountInput | RoutinesJoinRequestUpdateWithWhereUniqueWithoutRequestedAccountInput[]
    updateMany?: RoutinesJoinRequestUpdateManyWithWhereWithoutRequestedAccountInput | RoutinesJoinRequestUpdateManyWithWhereWithoutRequestedAccountInput[]
    deleteMany?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput> | SummaryCreateWithoutOwnerInput[] | SummaryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutOwnerInput | SummaryCreateOrConnectWithoutOwnerInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutOwnerInput | SummaryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SummaryCreateManyOwnerInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutOwnerInput | SummaryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutOwnerInput | SummaryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput> | SummaryCreateWithoutAccountInput[] | SummaryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutAccountInput | SummaryCreateOrConnectWithoutAccountInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutAccountInput | SummaryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SummaryCreateManyAccountInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutAccountInput | SummaryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutAccountInput | SummaryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput> | NoticeCreateWithoutAccountInput[] | NoticeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutAccountInput | NoticeCreateOrConnectWithoutAccountInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutAccountInput | NoticeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NoticeCreateManyAccountInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutAccountInput | NoticeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutAccountInput | NoticeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type rePublishUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput> | rePublishCreateWithoutAccountInput[] | rePublishUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutAccountInput | rePublishCreateOrConnectWithoutAccountInput[]
    upsert?: rePublishUpsertWithWhereUniqueWithoutAccountInput | rePublishUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: rePublishCreateManyAccountInputEnvelope
    set?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    disconnect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    delete?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    update?: rePublishUpdateWithWhereUniqueWithoutAccountInput | rePublishUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: rePublishUpdateManyWithWhereWithoutAccountInput | rePublishUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
  }

  export type NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput> | NoticeBoardMemberCreateWithoutAccountInput[] | NoticeBoardMemberUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: NoticeBoardMemberCreateOrConnectWithoutAccountInput | NoticeBoardMemberCreateOrConnectWithoutAccountInput[]
    upsert?: NoticeBoardMemberUpsertWithWhereUniqueWithoutAccountInput | NoticeBoardMemberUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: NoticeBoardMemberCreateManyAccountInputEnvelope
    set?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    disconnect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    delete?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    connect?: NoticeBoardMemberWhereUniqueInput | NoticeBoardMemberWhereUniqueInput[]
    update?: NoticeBoardMemberUpdateWithWhereUniqueWithoutAccountInput | NoticeBoardMemberUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: NoticeBoardMemberUpdateManyWithWhereWithoutAccountInput | NoticeBoardMemberUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: NoticeBoardMemberScalarWhereInput | NoticeBoardMemberScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutAddressInput = {
    create?: XOR<AccountCreateWithoutAddressInput, AccountUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAddressInput
    connect?: AccountWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<AccountCreateWithoutAddressInput, AccountUncheckedCreateWithoutAddressInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAddressInput
    upsert?: AccountUpsertWithoutAddressInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAddressInput, AccountUpdateWithoutAddressInput>, AccountUncheckedUpdateWithoutAddressInput>
  }

  export type AccountCreateNestedOneWithoutNoticeBoardMemberInput = {
    create?: XOR<AccountCreateWithoutNoticeBoardMemberInput, AccountUncheckedCreateWithoutNoticeBoardMemberInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNoticeBoardMemberInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutNoticeBoardMemberNestedInput = {
    create?: XOR<AccountCreateWithoutNoticeBoardMemberInput, AccountUncheckedCreateWithoutNoticeBoardMemberInput>
    connectOrCreate?: AccountCreateOrConnectWithoutNoticeBoardMemberInput
    upsert?: AccountUpsertWithoutNoticeBoardMemberInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutNoticeBoardMemberInput, AccountUpdateWithoutNoticeBoardMemberInput>, AccountUncheckedUpdateWithoutNoticeBoardMemberInput>
  }

  export type AccountCreateNestedOneWithoutPublishedNoticeInput = {
    create?: XOR<AccountCreateWithoutPublishedNoticeInput, AccountUncheckedCreateWithoutPublishedNoticeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPublishedNoticeInput
    connect?: AccountWhereUniqueInput
  }

  export type rePublishCreateNestedManyWithoutNoticeInput = {
    create?: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput> | rePublishCreateWithoutNoticeInput[] | rePublishUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutNoticeInput | rePublishCreateOrConnectWithoutNoticeInput[]
    createMany?: rePublishCreateManyNoticeInputEnvelope
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
  }

  export type rePublishUncheckedCreateNestedManyWithoutNoticeInput = {
    create?: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput> | rePublishCreateWithoutNoticeInput[] | rePublishUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutNoticeInput | rePublishCreateOrConnectWithoutNoticeInput[]
    createMany?: rePublishCreateManyNoticeInputEnvelope
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
  }

  export type EnumNoticeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NoticeCategory
  }

  export type AccountUpdateOneRequiredWithoutPublishedNoticeNestedInput = {
    create?: XOR<AccountCreateWithoutPublishedNoticeInput, AccountUncheckedCreateWithoutPublishedNoticeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPublishedNoticeInput
    upsert?: AccountUpsertWithoutPublishedNoticeInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPublishedNoticeInput, AccountUpdateWithoutPublishedNoticeInput>, AccountUncheckedUpdateWithoutPublishedNoticeInput>
  }

  export type rePublishUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput> | rePublishCreateWithoutNoticeInput[] | rePublishUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutNoticeInput | rePublishCreateOrConnectWithoutNoticeInput[]
    upsert?: rePublishUpsertWithWhereUniqueWithoutNoticeInput | rePublishUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: rePublishCreateManyNoticeInputEnvelope
    set?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    disconnect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    delete?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    update?: rePublishUpdateWithWhereUniqueWithoutNoticeInput | rePublishUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: rePublishUpdateManyWithWhereWithoutNoticeInput | rePublishUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
  }

  export type rePublishUncheckedUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput> | rePublishCreateWithoutNoticeInput[] | rePublishUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: rePublishCreateOrConnectWithoutNoticeInput | rePublishCreateOrConnectWithoutNoticeInput[]
    upsert?: rePublishUpsertWithWhereUniqueWithoutNoticeInput | rePublishUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: rePublishCreateManyNoticeInputEnvelope
    set?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    disconnect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    delete?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    connect?: rePublishWhereUniqueInput | rePublishWhereUniqueInput[]
    update?: rePublishUpdateWithWhereUniqueWithoutNoticeInput | rePublishUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: rePublishUpdateManyWithWhereWithoutNoticeInput | rePublishUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
  }

  export type NoticeCreateNestedOneWithoutRePublishInput = {
    create?: XOR<NoticeCreateWithoutRePublishInput, NoticeUncheckedCreateWithoutRePublishInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutRePublishInput
    connect?: NoticeWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutRePublishedNoticeInput = {
    create?: XOR<AccountCreateWithoutRePublishedNoticeInput, AccountUncheckedCreateWithoutRePublishedNoticeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRePublishedNoticeInput
    connect?: AccountWhereUniqueInput
  }

  export type NoticeUpdateOneWithoutRePublishNestedInput = {
    create?: XOR<NoticeCreateWithoutRePublishInput, NoticeUncheckedCreateWithoutRePublishInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutRePublishInput
    upsert?: NoticeUpsertWithoutRePublishInput
    disconnect?: NoticeWhereInput | boolean
    delete?: NoticeWhereInput | boolean
    connect?: NoticeWhereUniqueInput
    update?: XOR<XOR<NoticeUpdateToOneWithWhereWithoutRePublishInput, NoticeUpdateWithoutRePublishInput>, NoticeUncheckedUpdateWithoutRePublishInput>
  }

  export type AccountUpdateOneWithoutRePublishedNoticeNestedInput = {
    create?: XOR<AccountCreateWithoutRePublishedNoticeInput, AccountUncheckedCreateWithoutRePublishedNoticeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRePublishedNoticeInput
    upsert?: AccountUpsertWithoutRePublishedNoticeInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutRePublishedNoticeInput, AccountUpdateWithoutRePublishedNoticeInput>, AccountUncheckedUpdateWithoutRePublishedNoticeInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type AccountCreateNestedOneWithoutRoutinesJoinRequestInput = {
    create?: XOR<AccountCreateWithoutRoutinesJoinRequestInput, AccountUncheckedCreateWithoutRoutinesJoinRequestInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRoutinesJoinRequestInput
    connect?: AccountWhereUniqueInput
  }

  export type RoutineCreateNestedOneWithoutRoutinesJoinRequestInput = {
    create?: XOR<RoutineCreateWithoutRoutinesJoinRequestInput, RoutineUncheckedCreateWithoutRoutinesJoinRequestInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutinesJoinRequestInput
    connect?: RoutineWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput = {
    create?: XOR<AccountCreateWithoutRoutinesJoinRequestInput, AccountUncheckedCreateWithoutRoutinesJoinRequestInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRoutinesJoinRequestInput
    upsert?: AccountUpsertWithoutRoutinesJoinRequestInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutRoutinesJoinRequestInput, AccountUpdateWithoutRoutinesJoinRequestInput>, AccountUncheckedUpdateWithoutRoutinesJoinRequestInput>
  }

  export type RoutineUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput = {
    create?: XOR<RoutineCreateWithoutRoutinesJoinRequestInput, RoutineUncheckedCreateWithoutRoutinesJoinRequestInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutinesJoinRequestInput
    upsert?: RoutineUpsertWithoutRoutinesJoinRequestInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutRoutinesJoinRequestInput, RoutineUpdateWithoutRoutinesJoinRequestInput>, RoutineUncheckedUpdateWithoutRoutinesJoinRequestInput>
  }

  export type RoutineCreateNestedOneWithoutWeekdaysInput = {
    create?: XOR<RoutineCreateWithoutWeekdaysInput, RoutineUncheckedCreateWithoutWeekdaysInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutWeekdaysInput
    connect?: RoutineWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutWeekdaysInput = {
    create?: XOR<ClassCreateWithoutWeekdaysInput, ClassUncheckedCreateWithoutWeekdaysInput>
    connectOrCreate?: ClassCreateOrConnectWithoutWeekdaysInput
    connect?: ClassWhereUniqueInput
  }

  export type EnumDayFieldUpdateOperationsInput = {
    set?: $Enums.Day
  }

  export type RoutineUpdateOneRequiredWithoutWeekdaysNestedInput = {
    create?: XOR<RoutineCreateWithoutWeekdaysInput, RoutineUncheckedCreateWithoutWeekdaysInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutWeekdaysInput
    upsert?: RoutineUpsertWithoutWeekdaysInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutWeekdaysInput, RoutineUpdateWithoutWeekdaysInput>, RoutineUncheckedUpdateWithoutWeekdaysInput>
  }

  export type ClassUpdateOneRequiredWithoutWeekdaysNestedInput = {
    create?: XOR<ClassCreateWithoutWeekdaysInput, ClassUncheckedCreateWithoutWeekdaysInput>
    connectOrCreate?: ClassCreateOrConnectWithoutWeekdaysInput
    upsert?: ClassUpsertWithoutWeekdaysInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutWeekdaysInput, ClassUpdateWithoutWeekdaysInput>, ClassUncheckedUpdateWithoutWeekdaysInput>
  }

  export type AccountCreateNestedOneWithoutRoutineMembershipsInput = {
    create?: XOR<AccountCreateWithoutRoutineMembershipsInput, AccountUncheckedCreateWithoutRoutineMembershipsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRoutineMembershipsInput
    connect?: AccountWhereUniqueInput
  }

  export type RoutineCreateNestedOneWithoutRoutineMembersInput = {
    create?: XOR<RoutineCreateWithoutRoutineMembersInput, RoutineUncheckedCreateWithoutRoutineMembersInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineMembersInput
    connect?: RoutineWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutRoutineMembershipsNestedInput = {
    create?: XOR<AccountCreateWithoutRoutineMembershipsInput, AccountUncheckedCreateWithoutRoutineMembershipsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutRoutineMembershipsInput
    upsert?: AccountUpsertWithoutRoutineMembershipsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutRoutineMembershipsInput, AccountUpdateWithoutRoutineMembershipsInput>, AccountUncheckedUpdateWithoutRoutineMembershipsInput>
  }

  export type RoutineUpdateOneRequiredWithoutRoutineMembersNestedInput = {
    create?: XOR<RoutineCreateWithoutRoutineMembersInput, RoutineUncheckedCreateWithoutRoutineMembersInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineMembersInput
    upsert?: RoutineUpsertWithoutRoutineMembersInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutRoutineMembersInput, RoutineUpdateWithoutRoutineMembersInput>, RoutineUncheckedUpdateWithoutRoutineMembersInput>
  }

  export type AccountCreateNestedOneWithoutCreatedRoutinesInput = {
    create?: XOR<AccountCreateWithoutCreatedRoutinesInput, AccountUncheckedCreateWithoutCreatedRoutinesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedRoutinesInput
    connect?: AccountWhereUniqueInput
  }

  export type RoutineMemberCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput> | RoutineMemberCreateWithoutRoutineInput[] | RoutineMemberUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutRoutineInput | RoutineMemberCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineMemberCreateManyRoutineInputEnvelope
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutRoutineInput = {
    create?: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput> | ClassCreateWithoutRoutineInput[] | ClassUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRoutineInput | ClassCreateOrConnectWithoutRoutineInput[]
    createMany?: ClassCreateManyRoutineInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type WeekdayCreateNestedManyWithoutRoutineInput = {
    create?: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput> | WeekdayCreateWithoutRoutineInput[] | WeekdayUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutRoutineInput | WeekdayCreateOrConnectWithoutRoutineInput[]
    createMany?: WeekdayCreateManyRoutineInputEnvelope
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutSavedRoutinesInput = {
    create?: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput> | AccountCreateWithoutSavedRoutinesInput[] | AccountUncheckedCreateWithoutSavedRoutinesInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavedRoutinesInput | AccountCreateOrConnectWithoutSavedRoutinesInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RoutinesJoinRequestCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput> | RoutinesJoinRequestCreateWithoutRoutineInput[] | RoutinesJoinRequestUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRoutineInput | RoutinesJoinRequestCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutinesJoinRequestCreateManyRoutineInputEnvelope
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
  }

  export type SummaryCreateNestedManyWithoutRoutineInput = {
    create?: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput> | SummaryCreateWithoutRoutineInput[] | SummaryUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutRoutineInput | SummaryCreateOrConnectWithoutRoutineInput[]
    createMany?: SummaryCreateManyRoutineInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput> | RoutineMemberCreateWithoutRoutineInput[] | RoutineMemberUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutRoutineInput | RoutineMemberCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineMemberCreateManyRoutineInputEnvelope
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput> | ClassCreateWithoutRoutineInput[] | ClassUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRoutineInput | ClassCreateOrConnectWithoutRoutineInput[]
    createMany?: ClassCreateManyRoutineInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type WeekdayUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput> | WeekdayCreateWithoutRoutineInput[] | WeekdayUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutRoutineInput | WeekdayCreateOrConnectWithoutRoutineInput[]
    createMany?: WeekdayCreateManyRoutineInputEnvelope
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput = {
    create?: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput> | AccountCreateWithoutSavedRoutinesInput[] | AccountUncheckedCreateWithoutSavedRoutinesInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavedRoutinesInput | AccountCreateOrConnectWithoutSavedRoutinesInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput> | RoutinesJoinRequestCreateWithoutRoutineInput[] | RoutinesJoinRequestUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRoutineInput | RoutinesJoinRequestCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutinesJoinRequestCreateManyRoutineInputEnvelope
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput> | SummaryCreateWithoutRoutineInput[] | SummaryUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutRoutineInput | SummaryCreateOrConnectWithoutRoutineInput[]
    createMany?: SummaryCreateManyRoutineInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput = {
    create?: XOR<AccountCreateWithoutCreatedRoutinesInput, AccountUncheckedCreateWithoutCreatedRoutinesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedRoutinesInput
    upsert?: AccountUpsertWithoutCreatedRoutinesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCreatedRoutinesInput, AccountUpdateWithoutCreatedRoutinesInput>, AccountUncheckedUpdateWithoutCreatedRoutinesInput>
  }

  export type RoutineMemberUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput> | RoutineMemberCreateWithoutRoutineInput[] | RoutineMemberUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutRoutineInput | RoutineMemberCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineMemberUpsertWithWhereUniqueWithoutRoutineInput | RoutineMemberUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineMemberCreateManyRoutineInputEnvelope
    set?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    disconnect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    delete?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    update?: RoutineMemberUpdateWithWhereUniqueWithoutRoutineInput | RoutineMemberUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineMemberUpdateManyWithWhereWithoutRoutineInput | RoutineMemberUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput> | ClassCreateWithoutRoutineInput[] | ClassUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRoutineInput | ClassCreateOrConnectWithoutRoutineInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutRoutineInput | ClassUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: ClassCreateManyRoutineInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutRoutineInput | ClassUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutRoutineInput | ClassUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type WeekdayUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput> | WeekdayCreateWithoutRoutineInput[] | WeekdayUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutRoutineInput | WeekdayCreateOrConnectWithoutRoutineInput[]
    upsert?: WeekdayUpsertWithWhereUniqueWithoutRoutineInput | WeekdayUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: WeekdayCreateManyRoutineInputEnvelope
    set?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    disconnect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    delete?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    update?: WeekdayUpdateWithWhereUniqueWithoutRoutineInput | WeekdayUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: WeekdayUpdateManyWithWhereWithoutRoutineInput | WeekdayUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutSavedRoutinesNestedInput = {
    create?: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput> | AccountCreateWithoutSavedRoutinesInput[] | AccountUncheckedCreateWithoutSavedRoutinesInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavedRoutinesInput | AccountCreateOrConnectWithoutSavedRoutinesInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSavedRoutinesInput | AccountUpsertWithWhereUniqueWithoutSavedRoutinesInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSavedRoutinesInput | AccountUpdateWithWhereUniqueWithoutSavedRoutinesInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSavedRoutinesInput | AccountUpdateManyWithWhereWithoutSavedRoutinesInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput> | RoutinesJoinRequestCreateWithoutRoutineInput[] | RoutinesJoinRequestUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRoutineInput | RoutinesJoinRequestCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutinesJoinRequestUpsertWithWhereUniqueWithoutRoutineInput | RoutinesJoinRequestUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutinesJoinRequestCreateManyRoutineInputEnvelope
    set?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    disconnect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    delete?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    update?: RoutinesJoinRequestUpdateWithWhereUniqueWithoutRoutineInput | RoutinesJoinRequestUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutinesJoinRequestUpdateManyWithWhereWithoutRoutineInput | RoutinesJoinRequestUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
  }

  export type SummaryUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput> | SummaryCreateWithoutRoutineInput[] | SummaryUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutRoutineInput | SummaryCreateOrConnectWithoutRoutineInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutRoutineInput | SummaryUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: SummaryCreateManyRoutineInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutRoutineInput | SummaryUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutRoutineInput | SummaryUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput> | RoutineMemberCreateWithoutRoutineInput[] | RoutineMemberUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineMemberCreateOrConnectWithoutRoutineInput | RoutineMemberCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineMemberUpsertWithWhereUniqueWithoutRoutineInput | RoutineMemberUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineMemberCreateManyRoutineInputEnvelope
    set?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    disconnect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    delete?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    connect?: RoutineMemberWhereUniqueInput | RoutineMemberWhereUniqueInput[]
    update?: RoutineMemberUpdateWithWhereUniqueWithoutRoutineInput | RoutineMemberUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineMemberUpdateManyWithWhereWithoutRoutineInput | RoutineMemberUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput> | ClassCreateWithoutRoutineInput[] | ClassUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutRoutineInput | ClassCreateOrConnectWithoutRoutineInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutRoutineInput | ClassUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: ClassCreateManyRoutineInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutRoutineInput | ClassUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutRoutineInput | ClassUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type WeekdayUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput> | WeekdayCreateWithoutRoutineInput[] | WeekdayUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutRoutineInput | WeekdayCreateOrConnectWithoutRoutineInput[]
    upsert?: WeekdayUpsertWithWhereUniqueWithoutRoutineInput | WeekdayUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: WeekdayCreateManyRoutineInputEnvelope
    set?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    disconnect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    delete?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    update?: WeekdayUpdateWithWhereUniqueWithoutRoutineInput | WeekdayUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: WeekdayUpdateManyWithWhereWithoutRoutineInput | WeekdayUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput = {
    create?: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput> | AccountCreateWithoutSavedRoutinesInput[] | AccountUncheckedCreateWithoutSavedRoutinesInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavedRoutinesInput | AccountCreateOrConnectWithoutSavedRoutinesInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSavedRoutinesInput | AccountUpsertWithWhereUniqueWithoutSavedRoutinesInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSavedRoutinesInput | AccountUpdateWithWhereUniqueWithoutSavedRoutinesInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSavedRoutinesInput | AccountUpdateManyWithWhereWithoutSavedRoutinesInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput> | RoutinesJoinRequestCreateWithoutRoutineInput[] | RoutinesJoinRequestUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutinesJoinRequestCreateOrConnectWithoutRoutineInput | RoutinesJoinRequestCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutinesJoinRequestUpsertWithWhereUniqueWithoutRoutineInput | RoutinesJoinRequestUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutinesJoinRequestCreateManyRoutineInputEnvelope
    set?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    disconnect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    delete?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    connect?: RoutinesJoinRequestWhereUniqueInput | RoutinesJoinRequestWhereUniqueInput[]
    update?: RoutinesJoinRequestUpdateWithWhereUniqueWithoutRoutineInput | RoutinesJoinRequestUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutinesJoinRequestUpdateManyWithWhereWithoutRoutineInput | RoutinesJoinRequestUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput> | SummaryCreateWithoutRoutineInput[] | SummaryUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutRoutineInput | SummaryCreateOrConnectWithoutRoutineInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutRoutineInput | SummaryUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: SummaryCreateManyRoutineInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutRoutineInput | SummaryUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutRoutineInput | SummaryUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type RoutineCreateNestedOneWithoutClassesInput = {
    create?: XOR<RoutineCreateWithoutClassesInput, RoutineUncheckedCreateWithoutClassesInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutClassesInput
    connect?: RoutineWhereUniqueInput
  }

  export type WeekdayCreateNestedManyWithoutClassInput = {
    create?: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput> | WeekdayCreateWithoutClassInput[] | WeekdayUncheckedCreateWithoutClassInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutClassInput | WeekdayCreateOrConnectWithoutClassInput[]
    createMany?: WeekdayCreateManyClassInputEnvelope
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
  }

  export type SummaryCreateNestedManyWithoutClassInput = {
    create?: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput> | SummaryCreateWithoutClassInput[] | SummaryUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutClassInput | SummaryCreateOrConnectWithoutClassInput[]
    createMany?: SummaryCreateManyClassInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type WeekdayUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput> | WeekdayCreateWithoutClassInput[] | WeekdayUncheckedCreateWithoutClassInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutClassInput | WeekdayCreateOrConnectWithoutClassInput[]
    createMany?: WeekdayCreateManyClassInputEnvelope
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput> | SummaryCreateWithoutClassInput[] | SummaryUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutClassInput | SummaryCreateOrConnectWithoutClassInput[]
    createMany?: SummaryCreateManyClassInputEnvelope
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
  }

  export type RoutineUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<RoutineCreateWithoutClassesInput, RoutineUncheckedCreateWithoutClassesInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutClassesInput
    upsert?: RoutineUpsertWithoutClassesInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutClassesInput, RoutineUpdateWithoutClassesInput>, RoutineUncheckedUpdateWithoutClassesInput>
  }

  export type WeekdayUpdateManyWithoutClassNestedInput = {
    create?: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput> | WeekdayCreateWithoutClassInput[] | WeekdayUncheckedCreateWithoutClassInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutClassInput | WeekdayCreateOrConnectWithoutClassInput[]
    upsert?: WeekdayUpsertWithWhereUniqueWithoutClassInput | WeekdayUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: WeekdayCreateManyClassInputEnvelope
    set?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    disconnect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    delete?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    update?: WeekdayUpdateWithWhereUniqueWithoutClassInput | WeekdayUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: WeekdayUpdateManyWithWhereWithoutClassInput | WeekdayUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
  }

  export type SummaryUpdateManyWithoutClassNestedInput = {
    create?: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput> | SummaryCreateWithoutClassInput[] | SummaryUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutClassInput | SummaryCreateOrConnectWithoutClassInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutClassInput | SummaryUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SummaryCreateManyClassInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutClassInput | SummaryUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutClassInput | SummaryUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type WeekdayUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput> | WeekdayCreateWithoutClassInput[] | WeekdayUncheckedCreateWithoutClassInput[]
    connectOrCreate?: WeekdayCreateOrConnectWithoutClassInput | WeekdayCreateOrConnectWithoutClassInput[]
    upsert?: WeekdayUpsertWithWhereUniqueWithoutClassInput | WeekdayUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: WeekdayCreateManyClassInputEnvelope
    set?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    disconnect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    delete?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    connect?: WeekdayWhereUniqueInput | WeekdayWhereUniqueInput[]
    update?: WeekdayUpdateWithWhereUniqueWithoutClassInput | WeekdayUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: WeekdayUpdateManyWithWhereWithoutClassInput | WeekdayUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput> | SummaryCreateWithoutClassInput[] | SummaryUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SummaryCreateOrConnectWithoutClassInput | SummaryCreateOrConnectWithoutClassInput[]
    upsert?: SummaryUpsertWithWhereUniqueWithoutClassInput | SummaryUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SummaryCreateManyClassInputEnvelope
    set?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    disconnect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    delete?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    connect?: SummaryWhereUniqueInput | SummaryWhereUniqueInput[]
    update?: SummaryUpdateWithWhereUniqueWithoutClassInput | SummaryUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SummaryUpdateManyWithWhereWithoutClassInput | SummaryUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
  }

  export type SummaryCreateimageLinksInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutSummaryInput = {
    create?: XOR<AccountCreateWithoutSummaryInput, AccountUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSummaryInput
    connect?: AccountWhereUniqueInput
  }

  export type RoutineCreateNestedOneWithoutSummaryInput = {
    create?: XOR<RoutineCreateWithoutSummaryInput, RoutineUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutSummaryInput
    connect?: RoutineWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutSummaryInput = {
    create?: XOR<ClassCreateWithoutSummaryInput, ClassUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSummaryInput
    connect?: ClassWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutSaveSummaryInput = {
    create?: XOR<AccountCreateWithoutSaveSummaryInput, AccountUncheckedCreateWithoutSaveSummaryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSaveSummaryInput
    connect?: AccountWhereUniqueInput
  }

  export type SummaryUpdateimageLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSummaryTypeFieldUpdateOperationsInput = {
    set?: $Enums.SummaryType
  }

  export type AccountUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<AccountCreateWithoutSummaryInput, AccountUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSummaryInput
    upsert?: AccountUpsertWithoutSummaryInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSummaryInput, AccountUpdateWithoutSummaryInput>, AccountUncheckedUpdateWithoutSummaryInput>
  }

  export type RoutineUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<RoutineCreateWithoutSummaryInput, RoutineUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutSummaryInput
    upsert?: RoutineUpsertWithoutSummaryInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutSummaryInput, RoutineUpdateWithoutSummaryInput>, RoutineUncheckedUpdateWithoutSummaryInput>
  }

  export type ClassUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<ClassCreateWithoutSummaryInput, ClassUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSummaryInput
    upsert?: ClassUpsertWithoutSummaryInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSummaryInput, ClassUpdateWithoutSummaryInput>, ClassUncheckedUpdateWithoutSummaryInput>
  }

  export type AccountUpdateOneWithoutSaveSummaryNestedInput = {
    create?: XOR<AccountCreateWithoutSaveSummaryInput, AccountUncheckedCreateWithoutSaveSummaryInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSaveSummaryInput
    upsert?: AccountUpsertWithoutSaveSummaryInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSaveSummaryInput, AccountUpdateWithoutSaveSummaryInput>, AccountUncheckedUpdateWithoutSaveSummaryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStorageProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStorageProviderNullableFilter<$PrismaModel> | $Enums.StorageProvider | null
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStorageProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStorageProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.StorageProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStorageProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumStorageProviderNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumNoticeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeCategory | EnumNoticeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoticeCategoryFilter<$PrismaModel> | $Enums.NoticeCategory
  }

  export type NestedEnumNoticeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeCategory | EnumNoticeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NoticeCategory[] | ListEnumNoticeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNoticeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NoticeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoticeCategoryFilter<$PrismaModel>
    _max?: NestedEnumNoticeCategoryFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type NestedEnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    notIn?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type NestedEnumSummaryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryType | EnumSummaryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSummaryTypeFilter<$PrismaModel> | $Enums.SummaryType
  }

  export type NestedEnumSummaryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SummaryType | EnumSummaryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SummaryType[] | ListEnumSummaryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSummaryTypeWithAggregatesFilter<$PrismaModel> | $Enums.SummaryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSummaryTypeFilter<$PrismaModel>
    _max?: NestedEnumSummaryTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutAccountDataInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAccountDataInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAccountDataInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAccountDataInput, AccountUncheckedCreateWithoutAccountDataInput>
  }

  export type AccountUpsertWithoutAccountDataInput = {
    update: XOR<AccountUpdateWithoutAccountDataInput, AccountUncheckedUpdateWithoutAccountDataInput>
    create: XOR<AccountCreateWithoutAccountDataInput, AccountUncheckedCreateWithoutAccountDataInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAccountDataInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAccountDataInput, AccountUncheckedUpdateWithoutAccountDataInput>
  }

  export type AccountUpdateWithoutAccountDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAccountDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountDataCreateWithoutAccountIDInput = {
    id?: string
    googleSignIn?: boolean
    email: string
    phone?: string | null
    password?: string | null
    verificationDocuments?: AccountDataCreateverificationDocumentsInput | string[]
    oneSignalUserId?: string | null
  }

  export type AccountDataUncheckedCreateWithoutAccountIDInput = {
    id?: string
    googleSignIn?: boolean
    email: string
    phone?: string | null
    password?: string | null
    verificationDocuments?: AccountDataCreateverificationDocumentsInput | string[]
    oneSignalUserId?: string | null
  }

  export type AccountDataCreateOrConnectWithoutAccountIDInput = {
    where: AccountDataWhereUniqueInput
    create: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
  }

  export type AddressCreateWithoutAccountInput = {
    id?: string
    district?: string | null
    upazila?: string | null
    streetAddress?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutAccountInput = {
    id?: string
    district?: string | null
    upazila?: string | null
    streetAddress?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutAccountInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
  }

  export type RoutineCreateWithoutRoutineOwnerInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutRoutineOwnerInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutRoutineOwnerInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput>
  }

  export type RoutineCreateManyRoutineOwnerInputEnvelope = {
    data: RoutineCreateManyRoutineOwnerInput | RoutineCreateManyRoutineOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RoutineMemberCreateWithoutMemberInput = {
    id?: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutRoutineMembersInput
  }

  export type RoutineMemberUncheckedCreateWithoutMemberInput = {
    id?: string
    routineId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineMemberCreateOrConnectWithoutMemberInput = {
    where: RoutineMemberWhereUniqueInput
    create: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput>
  }

  export type RoutineMemberCreateManyMemberInputEnvelope = {
    data: RoutineMemberCreateManyMemberInput | RoutineMemberCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutSavedByInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutSavedByInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutSavedByInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput>
  }

  export type RoutinesJoinRequestCreateWithoutRequestedAccountInput = {
    id?: string
    requestMessage?: string | null
    createdAt?: Date | string
    routine: RoutineCreateNestedOneWithoutRoutinesJoinRequestInput
  }

  export type RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput = {
    id?: string
    requestMessage?: string | null
    routineId: string
    createdAt?: Date | string
  }

  export type RoutinesJoinRequestCreateOrConnectWithoutRequestedAccountInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    create: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput>
  }

  export type RoutinesJoinRequestCreateManyRequestedAccountInputEnvelope = {
    data: RoutinesJoinRequestCreateManyRequestedAccountInput | RoutinesJoinRequestCreateManyRequestedAccountInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutOwnerInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    routine: RoutineCreateNestedOneWithoutSummaryInput
    class: ClassCreateNestedOneWithoutSummaryInput
    Account?: AccountCreateNestedOneWithoutSaveSummaryInput
  }

  export type SummaryUncheckedCreateWithoutOwnerInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryCreateOrConnectWithoutOwnerInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput>
  }

  export type SummaryCreateManyOwnerInputEnvelope = {
    data: SummaryCreateManyOwnerInput | SummaryCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutAccountInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner: AccountCreateNestedOneWithoutSummaryInput
    routine: RoutineCreateNestedOneWithoutSummaryInput
    class: ClassCreateNestedOneWithoutSummaryInput
  }

  export type SummaryUncheckedCreateWithoutAccountInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SummaryCreateOrConnectWithoutAccountInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput>
  }

  export type SummaryCreateManyAccountInputEnvelope = {
    data: SummaryCreateManyAccountInput | SummaryCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutAccountInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    rePublish?: rePublishCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateWithoutAccountInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    rePublish?: rePublishUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeCreateOrConnectWithoutAccountInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput>
  }

  export type NoticeCreateManyAccountInputEnvelope = {
    data: NoticeCreateManyAccountInput | NoticeCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type rePublishCreateWithoutAccountInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Notice?: NoticeCreateNestedOneWithoutRePublishInput
  }

  export type rePublishUncheckedCreateWithoutAccountInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    noticeId?: string | null
  }

  export type rePublishCreateOrConnectWithoutAccountInput = {
    where: rePublishWhereUniqueInput
    create: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput>
  }

  export type rePublishCreateManyAccountInputEnvelope = {
    data: rePublishCreateManyAccountInput | rePublishCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type NoticeBoardMemberCreateWithoutAccountInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
  }

  export type NoticeBoardMemberUncheckedCreateWithoutAccountInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
  }

  export type NoticeBoardMemberCreateOrConnectWithoutAccountInput = {
    where: NoticeBoardMemberWhereUniqueInput
    create: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput>
  }

  export type NoticeBoardMemberCreateManyAccountInputEnvelope = {
    data: NoticeBoardMemberCreateManyAccountInput | NoticeBoardMemberCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountDataUpsertWithoutAccountIDInput = {
    update: XOR<AccountDataUpdateWithoutAccountIDInput, AccountDataUncheckedUpdateWithoutAccountIDInput>
    create: XOR<AccountDataCreateWithoutAccountIDInput, AccountDataUncheckedCreateWithoutAccountIDInput>
    where?: AccountDataWhereInput
  }

  export type AccountDataUpdateToOneWithWhereWithoutAccountIDInput = {
    where?: AccountDataWhereInput
    data: XOR<AccountDataUpdateWithoutAccountIDInput, AccountDataUncheckedUpdateWithoutAccountIDInput>
  }

  export type AccountDataUpdateWithoutAccountIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountDataUncheckedUpdateWithoutAccountIDInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleSignIn?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    verificationDocuments?: AccountDataUpdateverificationDocumentsInput | string[]
    oneSignalUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUpsertWithoutAccountInput = {
    update: XOR<AddressUpdateWithoutAccountInput, AddressUncheckedUpdateWithoutAccountInput>
    create: XOR<AddressCreateWithoutAccountInput, AddressUncheckedCreateWithoutAccountInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutAccountInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutAccountInput, AddressUncheckedUpdateWithoutAccountInput>
  }

  export type AddressUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: NullableStringFieldUpdateOperationsInput | string | null
    streetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutRoutineOwnerInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutRoutineOwnerInput, RoutineUncheckedUpdateWithoutRoutineOwnerInput>
    create: XOR<RoutineCreateWithoutRoutineOwnerInput, RoutineUncheckedCreateWithoutRoutineOwnerInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutRoutineOwnerInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutRoutineOwnerInput, RoutineUncheckedUpdateWithoutRoutineOwnerInput>
  }

  export type RoutineUpdateManyWithWhereWithoutRoutineOwnerInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutRoutineOwnerInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: StringFilter<"Routine"> | string
    routineName?: StringFilter<"Routine"> | string
    ownerAccountId?: StringFilter<"Routine"> | string
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type RoutineMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: RoutineMemberWhereUniqueInput
    update: XOR<RoutineMemberUpdateWithoutMemberInput, RoutineMemberUncheckedUpdateWithoutMemberInput>
    create: XOR<RoutineMemberCreateWithoutMemberInput, RoutineMemberUncheckedCreateWithoutMemberInput>
  }

  export type RoutineMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: RoutineMemberWhereUniqueInput
    data: XOR<RoutineMemberUpdateWithoutMemberInput, RoutineMemberUncheckedUpdateWithoutMemberInput>
  }

  export type RoutineMemberUpdateManyWithWhereWithoutMemberInput = {
    where: RoutineMemberScalarWhereInput
    data: XOR<RoutineMemberUpdateManyMutationInput, RoutineMemberUncheckedUpdateManyWithoutMemberInput>
  }

  export type RoutineMemberScalarWhereInput = {
    AND?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
    OR?: RoutineMemberScalarWhereInput[]
    NOT?: RoutineMemberScalarWhereInput | RoutineMemberScalarWhereInput[]
    id?: StringFilter<"RoutineMember"> | string
    accountId?: StringFilter<"RoutineMember"> | string
    routineId?: StringFilter<"RoutineMember"> | string
    notificationOn?: BoolFilter<"RoutineMember"> | boolean
    captain?: BoolFilter<"RoutineMember"> | boolean
    owner?: BoolFilter<"RoutineMember"> | boolean
    isSaved?: BoolFilter<"RoutineMember"> | boolean
    blacklist?: BoolFilter<"RoutineMember"> | boolean
    createdAt?: DateTimeFilter<"RoutineMember"> | Date | string
    updatedAt?: DateTimeFilter<"RoutineMember"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutSavedByInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutSavedByInput, RoutineUncheckedUpdateWithoutSavedByInput>
    create: XOR<RoutineCreateWithoutSavedByInput, RoutineUncheckedCreateWithoutSavedByInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutSavedByInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutSavedByInput, RoutineUncheckedUpdateWithoutSavedByInput>
  }

  export type RoutineUpdateManyWithWhereWithoutSavedByInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutSavedByInput>
  }

  export type RoutinesJoinRequestUpsertWithWhereUniqueWithoutRequestedAccountInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    update: XOR<RoutinesJoinRequestUpdateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedUpdateWithoutRequestedAccountInput>
    create: XOR<RoutinesJoinRequestCreateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedCreateWithoutRequestedAccountInput>
  }

  export type RoutinesJoinRequestUpdateWithWhereUniqueWithoutRequestedAccountInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    data: XOR<RoutinesJoinRequestUpdateWithoutRequestedAccountInput, RoutinesJoinRequestUncheckedUpdateWithoutRequestedAccountInput>
  }

  export type RoutinesJoinRequestUpdateManyWithWhereWithoutRequestedAccountInput = {
    where: RoutinesJoinRequestScalarWhereInput
    data: XOR<RoutinesJoinRequestUpdateManyMutationInput, RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountInput>
  }

  export type RoutinesJoinRequestScalarWhereInput = {
    AND?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
    OR?: RoutinesJoinRequestScalarWhereInput[]
    NOT?: RoutinesJoinRequestScalarWhereInput | RoutinesJoinRequestScalarWhereInput[]
    id?: StringFilter<"RoutinesJoinRequest"> | string
    requestMessage?: StringNullableFilter<"RoutinesJoinRequest"> | string | null
    routineId?: StringFilter<"RoutinesJoinRequest"> | string
    createdAt?: DateTimeFilter<"RoutinesJoinRequest"> | Date | string
    accountIdBy?: StringFilter<"RoutinesJoinRequest"> | string
  }

  export type SummaryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SummaryWhereUniqueInput
    update: XOR<SummaryUpdateWithoutOwnerInput, SummaryUncheckedUpdateWithoutOwnerInput>
    create: XOR<SummaryCreateWithoutOwnerInput, SummaryUncheckedCreateWithoutOwnerInput>
  }

  export type SummaryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SummaryWhereUniqueInput
    data: XOR<SummaryUpdateWithoutOwnerInput, SummaryUncheckedUpdateWithoutOwnerInput>
  }

  export type SummaryUpdateManyWithWhereWithoutOwnerInput = {
    where: SummaryScalarWhereInput
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SummaryScalarWhereInput = {
    AND?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
    OR?: SummaryScalarWhereInput[]
    NOT?: SummaryScalarWhereInput | SummaryScalarWhereInput[]
    id?: StringFilter<"Summary"> | string
    ownerId?: StringFilter<"Summary"> | string
    text?: StringFilter<"Summary"> | string
    imageLinks?: StringNullableListFilter<"Summary">
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Summary"> | $Enums.StorageProvider | null
    routineId?: StringFilter<"Summary"> | string
    classId?: StringFilter<"Summary"> | string
    autoDeleteAt?: DateTimeFilter<"Summary"> | Date | string
    createdAt?: DateTimeFilter<"Summary"> | Date | string
    updatedAt?: DateTimeFilter<"Summary"> | Date | string
    type?: EnumSummaryTypeFilter<"Summary"> | $Enums.SummaryType
    fileType?: StringNullableFilter<"Summary"> | string | null
    pollOptions?: JsonNullableFilter<"Summary">
    savedAccountId?: StringNullableFilter<"Summary"> | string | null
  }

  export type SummaryUpsertWithWhereUniqueWithoutAccountInput = {
    where: SummaryWhereUniqueInput
    update: XOR<SummaryUpdateWithoutAccountInput, SummaryUncheckedUpdateWithoutAccountInput>
    create: XOR<SummaryCreateWithoutAccountInput, SummaryUncheckedCreateWithoutAccountInput>
  }

  export type SummaryUpdateWithWhereUniqueWithoutAccountInput = {
    where: SummaryWhereUniqueInput
    data: XOR<SummaryUpdateWithoutAccountInput, SummaryUncheckedUpdateWithoutAccountInput>
  }

  export type SummaryUpdateManyWithWhereWithoutAccountInput = {
    where: SummaryScalarWhereInput
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyWithoutAccountInput>
  }

  export type NoticeUpsertWithWhereUniqueWithoutAccountInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutAccountInput, NoticeUncheckedUpdateWithoutAccountInput>
    create: XOR<NoticeCreateWithoutAccountInput, NoticeUncheckedCreateWithoutAccountInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutAccountInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutAccountInput, NoticeUncheckedUpdateWithoutAccountInput>
  }

  export type NoticeUpdateManyWithWhereWithoutAccountInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutAccountInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    pdf?: StringNullableFilter<"Notice"> | string | null
    description?: StringNullableFilter<"Notice"> | string | null
    category?: EnumNoticeCategoryFilter<"Notice"> | $Enums.NoticeCategory
    publisherId?: StringFilter<"Notice"> | string
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
  }

  export type rePublishUpsertWithWhereUniqueWithoutAccountInput = {
    where: rePublishWhereUniqueInput
    update: XOR<rePublishUpdateWithoutAccountInput, rePublishUncheckedUpdateWithoutAccountInput>
    create: XOR<rePublishCreateWithoutAccountInput, rePublishUncheckedCreateWithoutAccountInput>
  }

  export type rePublishUpdateWithWhereUniqueWithoutAccountInput = {
    where: rePublishWhereUniqueInput
    data: XOR<rePublishUpdateWithoutAccountInput, rePublishUncheckedUpdateWithoutAccountInput>
  }

  export type rePublishUpdateManyWithWhereWithoutAccountInput = {
    where: rePublishScalarWhereInput
    data: XOR<rePublishUpdateManyMutationInput, rePublishUncheckedUpdateManyWithoutAccountInput>
  }

  export type rePublishScalarWhereInput = {
    AND?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
    OR?: rePublishScalarWhereInput[]
    NOT?: rePublishScalarWhereInput | rePublishScalarWhereInput[]
    id?: StringFilter<"rePublish"> | string
    republishedTitle?: StringFilter<"rePublish"> | string
    createdAt?: DateTimeFilter<"rePublish"> | Date | string
    updatedAt?: DateTimeFilter<"rePublish"> | Date | string
    noticeId?: StringNullableFilter<"rePublish"> | string | null
    rePublisherId?: StringFilter<"rePublish"> | string
  }

  export type NoticeBoardMemberUpsertWithWhereUniqueWithoutAccountInput = {
    where: NoticeBoardMemberWhereUniqueInput
    update: XOR<NoticeBoardMemberUpdateWithoutAccountInput, NoticeBoardMemberUncheckedUpdateWithoutAccountInput>
    create: XOR<NoticeBoardMemberCreateWithoutAccountInput, NoticeBoardMemberUncheckedCreateWithoutAccountInput>
  }

  export type NoticeBoardMemberUpdateWithWhereUniqueWithoutAccountInput = {
    where: NoticeBoardMemberWhereUniqueInput
    data: XOR<NoticeBoardMemberUpdateWithoutAccountInput, NoticeBoardMemberUncheckedUpdateWithoutAccountInput>
  }

  export type NoticeBoardMemberUpdateManyWithWhereWithoutAccountInput = {
    where: NoticeBoardMemberScalarWhereInput
    data: XOR<NoticeBoardMemberUpdateManyMutationInput, NoticeBoardMemberUncheckedUpdateManyWithoutAccountInput>
  }

  export type NoticeBoardMemberScalarWhereInput = {
    AND?: NoticeBoardMemberScalarWhereInput | NoticeBoardMemberScalarWhereInput[]
    OR?: NoticeBoardMemberScalarWhereInput[]
    NOT?: NoticeBoardMemberScalarWhereInput | NoticeBoardMemberScalarWhereInput[]
    id?: StringFilter<"NoticeBoardMember"> | string
    accountId?: StringFilter<"NoticeBoardMember"> | string
    notificationOn?: BoolFilter<"NoticeBoardMember"> | boolean
    memberId?: StringFilter<"NoticeBoardMember"> | string
  }

  export type AccountCreateWithoutAddressInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAddressInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAddressInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAddressInput, AccountUncheckedCreateWithoutAddressInput>
  }

  export type AccountUpsertWithoutAddressInput = {
    update: XOR<AccountUpdateWithoutAddressInput, AccountUncheckedUpdateWithoutAddressInput>
    create: XOR<AccountCreateWithoutAddressInput, AccountUncheckedCreateWithoutAddressInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAddressInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAddressInput, AccountUncheckedUpdateWithoutAddressInput>
  }

  export type AccountUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutNoticeBoardMemberInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutNoticeBoardMemberInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutNoticeBoardMemberInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutNoticeBoardMemberInput, AccountUncheckedCreateWithoutNoticeBoardMemberInput>
  }

  export type AccountUpsertWithoutNoticeBoardMemberInput = {
    update: XOR<AccountUpdateWithoutNoticeBoardMemberInput, AccountUncheckedUpdateWithoutNoticeBoardMemberInput>
    create: XOR<AccountCreateWithoutNoticeBoardMemberInput, AccountUncheckedCreateWithoutNoticeBoardMemberInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutNoticeBoardMemberInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutNoticeBoardMemberInput, AccountUncheckedUpdateWithoutNoticeBoardMemberInput>
  }

  export type AccountUpdateWithoutNoticeBoardMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutNoticeBoardMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutPublishedNoticeInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPublishedNoticeInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPublishedNoticeInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPublishedNoticeInput, AccountUncheckedCreateWithoutPublishedNoticeInput>
  }

  export type rePublishCreateWithoutNoticeInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Account?: AccountCreateNestedOneWithoutRePublishedNoticeInput
  }

  export type rePublishUncheckedCreateWithoutNoticeInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rePublisherId: string
  }

  export type rePublishCreateOrConnectWithoutNoticeInput = {
    where: rePublishWhereUniqueInput
    create: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput>
  }

  export type rePublishCreateManyNoticeInputEnvelope = {
    data: rePublishCreateManyNoticeInput | rePublishCreateManyNoticeInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutPublishedNoticeInput = {
    update: XOR<AccountUpdateWithoutPublishedNoticeInput, AccountUncheckedUpdateWithoutPublishedNoticeInput>
    create: XOR<AccountCreateWithoutPublishedNoticeInput, AccountUncheckedCreateWithoutPublishedNoticeInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPublishedNoticeInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPublishedNoticeInput, AccountUncheckedUpdateWithoutPublishedNoticeInput>
  }

  export type AccountUpdateWithoutPublishedNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPublishedNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type rePublishUpsertWithWhereUniqueWithoutNoticeInput = {
    where: rePublishWhereUniqueInput
    update: XOR<rePublishUpdateWithoutNoticeInput, rePublishUncheckedUpdateWithoutNoticeInput>
    create: XOR<rePublishCreateWithoutNoticeInput, rePublishUncheckedCreateWithoutNoticeInput>
  }

  export type rePublishUpdateWithWhereUniqueWithoutNoticeInput = {
    where: rePublishWhereUniqueInput
    data: XOR<rePublishUpdateWithoutNoticeInput, rePublishUncheckedUpdateWithoutNoticeInput>
  }

  export type rePublishUpdateManyWithWhereWithoutNoticeInput = {
    where: rePublishScalarWhereInput
    data: XOR<rePublishUpdateManyMutationInput, rePublishUncheckedUpdateManyWithoutNoticeInput>
  }

  export type NoticeCreateWithoutRePublishInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    Account: AccountCreateNestedOneWithoutPublishedNoticeInput
  }

  export type NoticeUncheckedCreateWithoutRePublishInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    publisherId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoticeCreateOrConnectWithoutRePublishInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutRePublishInput, NoticeUncheckedCreateWithoutRePublishInput>
  }

  export type AccountCreateWithoutRePublishedNoticeInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRePublishedNoticeInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRePublishedNoticeInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRePublishedNoticeInput, AccountUncheckedCreateWithoutRePublishedNoticeInput>
  }

  export type NoticeUpsertWithoutRePublishInput = {
    update: XOR<NoticeUpdateWithoutRePublishInput, NoticeUncheckedUpdateWithoutRePublishInput>
    create: XOR<NoticeCreateWithoutRePublishInput, NoticeUncheckedCreateWithoutRePublishInput>
    where?: NoticeWhereInput
  }

  export type NoticeUpdateToOneWithWhereWithoutRePublishInput = {
    where?: NoticeWhereInput
    data: XOR<NoticeUpdateWithoutRePublishInput, NoticeUncheckedUpdateWithoutRePublishInput>
  }

  export type NoticeUpdateWithoutRePublishInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneRequiredWithoutPublishedNoticeNestedInput
  }

  export type NoticeUncheckedUpdateWithoutRePublishInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    publisherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpsertWithoutRePublishedNoticeInput = {
    update: XOR<AccountUpdateWithoutRePublishedNoticeInput, AccountUncheckedUpdateWithoutRePublishedNoticeInput>
    create: XOR<AccountCreateWithoutRePublishedNoticeInput, AccountUncheckedCreateWithoutRePublishedNoticeInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutRePublishedNoticeInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutRePublishedNoticeInput, AccountUncheckedUpdateWithoutRePublishedNoticeInput>
  }

  export type AccountUpdateWithoutRePublishedNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRePublishedNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutRoutinesJoinRequestInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRoutinesJoinRequestInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRoutinesJoinRequestInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRoutinesJoinRequestInput, AccountUncheckedCreateWithoutRoutinesJoinRequestInput>
  }

  export type RoutineCreateWithoutRoutinesJoinRequestInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutRoutinesJoinRequestInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutRoutinesJoinRequestInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutRoutinesJoinRequestInput, RoutineUncheckedCreateWithoutRoutinesJoinRequestInput>
  }

  export type AccountUpsertWithoutRoutinesJoinRequestInput = {
    update: XOR<AccountUpdateWithoutRoutinesJoinRequestInput, AccountUncheckedUpdateWithoutRoutinesJoinRequestInput>
    create: XOR<AccountCreateWithoutRoutinesJoinRequestInput, AccountUncheckedCreateWithoutRoutinesJoinRequestInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutRoutinesJoinRequestInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutRoutinesJoinRequestInput, AccountUncheckedUpdateWithoutRoutinesJoinRequestInput>
  }

  export type AccountUpdateWithoutRoutinesJoinRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRoutinesJoinRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RoutineUpsertWithoutRoutinesJoinRequestInput = {
    update: XOR<RoutineUpdateWithoutRoutinesJoinRequestInput, RoutineUncheckedUpdateWithoutRoutinesJoinRequestInput>
    create: XOR<RoutineCreateWithoutRoutinesJoinRequestInput, RoutineUncheckedCreateWithoutRoutinesJoinRequestInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutRoutinesJoinRequestInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutRoutinesJoinRequestInput, RoutineUncheckedUpdateWithoutRoutinesJoinRequestInput>
  }

  export type RoutineUpdateWithoutRoutinesJoinRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutRoutinesJoinRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateWithoutWeekdaysInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutWeekdaysInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutWeekdaysInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutWeekdaysInput, RoutineUncheckedCreateWithoutWeekdaysInput>
  }

  export type ClassCreateWithoutWeekdaysInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutClassesInput
    Summary?: SummaryCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutWeekdaysInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    routineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Summary?: SummaryUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutWeekdaysInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutWeekdaysInput, ClassUncheckedCreateWithoutWeekdaysInput>
  }

  export type RoutineUpsertWithoutWeekdaysInput = {
    update: XOR<RoutineUpdateWithoutWeekdaysInput, RoutineUncheckedUpdateWithoutWeekdaysInput>
    create: XOR<RoutineCreateWithoutWeekdaysInput, RoutineUncheckedCreateWithoutWeekdaysInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutWeekdaysInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutWeekdaysInput, RoutineUncheckedUpdateWithoutWeekdaysInput>
  }

  export type RoutineUpdateWithoutWeekdaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutWeekdaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type ClassUpsertWithoutWeekdaysInput = {
    update: XOR<ClassUpdateWithoutWeekdaysInput, ClassUncheckedUpdateWithoutWeekdaysInput>
    create: XOR<ClassCreateWithoutWeekdaysInput, ClassUncheckedCreateWithoutWeekdaysInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutWeekdaysInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutWeekdaysInput, ClassUncheckedUpdateWithoutWeekdaysInput>
  }

  export type ClassUpdateWithoutWeekdaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutClassesNestedInput
    Summary?: SummaryUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutWeekdaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Summary?: SummaryUncheckedUpdateManyWithoutClassNestedInput
  }

  export type AccountCreateWithoutRoutineMembershipsInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutRoutineMembershipsInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutRoutineMembershipsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutRoutineMembershipsInput, AccountUncheckedCreateWithoutRoutineMembershipsInput>
  }

  export type RoutineCreateWithoutRoutineMembersInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutRoutineMembersInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutRoutineMembersInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutRoutineMembersInput, RoutineUncheckedCreateWithoutRoutineMembersInput>
  }

  export type AccountUpsertWithoutRoutineMembershipsInput = {
    update: XOR<AccountUpdateWithoutRoutineMembershipsInput, AccountUncheckedUpdateWithoutRoutineMembershipsInput>
    create: XOR<AccountCreateWithoutRoutineMembershipsInput, AccountUncheckedCreateWithoutRoutineMembershipsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutRoutineMembershipsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutRoutineMembershipsInput, AccountUncheckedUpdateWithoutRoutineMembershipsInput>
  }

  export type AccountUpdateWithoutRoutineMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutRoutineMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RoutineUpsertWithoutRoutineMembersInput = {
    update: XOR<RoutineUpdateWithoutRoutineMembersInput, RoutineUncheckedUpdateWithoutRoutineMembersInput>
    create: XOR<RoutineCreateWithoutRoutineMembersInput, RoutineUncheckedCreateWithoutRoutineMembersInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutRoutineMembersInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutRoutineMembersInput, RoutineUncheckedUpdateWithoutRoutineMembersInput>
  }

  export type RoutineUpdateWithoutRoutineMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutRoutineMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type AccountCreateWithoutCreatedRoutinesInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCreatedRoutinesInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCreatedRoutinesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCreatedRoutinesInput, AccountUncheckedCreateWithoutCreatedRoutinesInput>
  }

  export type RoutineMemberCreateWithoutRoutineInput = {
    id?: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: AccountCreateNestedOneWithoutRoutineMembershipsInput
  }

  export type RoutineMemberUncheckedCreateWithoutRoutineInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineMemberCreateOrConnectWithoutRoutineInput = {
    where: RoutineMemberWhereUniqueInput
    create: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineMemberCreateManyRoutineInputEnvelope = {
    data: RoutineMemberCreateManyRoutineInput | RoutineMemberCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutRoutineInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekdays?: WeekdayCreateNestedManyWithoutClassInput
    Summary?: SummaryCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutRoutineInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutClassInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutRoutineInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput>
  }

  export type ClassCreateManyRoutineInputEnvelope = {
    data: ClassCreateManyRoutineInput | ClassCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type WeekdayCreateWithoutRoutineInput = {
    id?: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    class: ClassCreateNestedOneWithoutWeekdaysInput
  }

  export type WeekdayUncheckedCreateWithoutRoutineInput = {
    id?: string
    classId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekdayCreateOrConnectWithoutRoutineInput = {
    where: WeekdayWhereUniqueInput
    create: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput>
  }

  export type WeekdayCreateManyRoutineInputEnvelope = {
    data: WeekdayCreateManyRoutineInput | WeekdayCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutSavedRoutinesInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSavedRoutinesInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSavedRoutinesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput>
  }

  export type RoutinesJoinRequestCreateWithoutRoutineInput = {
    id?: string
    requestMessage?: string | null
    createdAt?: Date | string
    requestedAccount: AccountCreateNestedOneWithoutRoutinesJoinRequestInput
  }

  export type RoutinesJoinRequestUncheckedCreateWithoutRoutineInput = {
    id?: string
    requestMessage?: string | null
    createdAt?: Date | string
    accountIdBy: string
  }

  export type RoutinesJoinRequestCreateOrConnectWithoutRoutineInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    create: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput>
  }

  export type RoutinesJoinRequestCreateManyRoutineInputEnvelope = {
    data: RoutinesJoinRequestCreateManyRoutineInput | RoutinesJoinRequestCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutRoutineInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner: AccountCreateNestedOneWithoutSummaryInput
    class: ClassCreateNestedOneWithoutSummaryInput
    Account?: AccountCreateNestedOneWithoutSaveSummaryInput
  }

  export type SummaryUncheckedCreateWithoutRoutineInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryCreateOrConnectWithoutRoutineInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput>
  }

  export type SummaryCreateManyRoutineInputEnvelope = {
    data: SummaryCreateManyRoutineInput | SummaryCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutCreatedRoutinesInput = {
    update: XOR<AccountUpdateWithoutCreatedRoutinesInput, AccountUncheckedUpdateWithoutCreatedRoutinesInput>
    create: XOR<AccountCreateWithoutCreatedRoutinesInput, AccountUncheckedCreateWithoutCreatedRoutinesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCreatedRoutinesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCreatedRoutinesInput, AccountUncheckedUpdateWithoutCreatedRoutinesInput>
  }

  export type AccountUpdateWithoutCreatedRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCreatedRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RoutineMemberUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineMemberWhereUniqueInput
    update: XOR<RoutineMemberUpdateWithoutRoutineInput, RoutineMemberUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineMemberCreateWithoutRoutineInput, RoutineMemberUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineMemberUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineMemberWhereUniqueInput
    data: XOR<RoutineMemberUpdateWithoutRoutineInput, RoutineMemberUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineMemberUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineMemberScalarWhereInput
    data: XOR<RoutineMemberUpdateManyMutationInput, RoutineMemberUncheckedUpdateManyWithoutRoutineInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutRoutineInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutRoutineInput, ClassUncheckedUpdateWithoutRoutineInput>
    create: XOR<ClassCreateWithoutRoutineInput, ClassUncheckedCreateWithoutRoutineInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutRoutineInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutRoutineInput, ClassUncheckedUpdateWithoutRoutineInput>
  }

  export type ClassUpdateManyWithWhereWithoutRoutineInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutRoutineInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    instructorName?: StringFilter<"Class"> | string
    subjectCode?: StringFilter<"Class"> | string
    routineId?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type WeekdayUpsertWithWhereUniqueWithoutRoutineInput = {
    where: WeekdayWhereUniqueInput
    update: XOR<WeekdayUpdateWithoutRoutineInput, WeekdayUncheckedUpdateWithoutRoutineInput>
    create: XOR<WeekdayCreateWithoutRoutineInput, WeekdayUncheckedCreateWithoutRoutineInput>
  }

  export type WeekdayUpdateWithWhereUniqueWithoutRoutineInput = {
    where: WeekdayWhereUniqueInput
    data: XOR<WeekdayUpdateWithoutRoutineInput, WeekdayUncheckedUpdateWithoutRoutineInput>
  }

  export type WeekdayUpdateManyWithWhereWithoutRoutineInput = {
    where: WeekdayScalarWhereInput
    data: XOR<WeekdayUpdateManyMutationInput, WeekdayUncheckedUpdateManyWithoutRoutineInput>
  }

  export type WeekdayScalarWhereInput = {
    AND?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
    OR?: WeekdayScalarWhereInput[]
    NOT?: WeekdayScalarWhereInput | WeekdayScalarWhereInput[]
    id?: StringFilter<"Weekday"> | string
    routineId?: StringFilter<"Weekday"> | string
    classId?: StringFilter<"Weekday"> | string
    room?: StringFilter<"Weekday"> | string
    Day?: EnumDayFilter<"Weekday"> | $Enums.Day
    startTime?: DateTimeFilter<"Weekday"> | Date | string
    endTime?: DateTimeFilter<"Weekday"> | Date | string
    createdAt?: DateTimeFilter<"Weekday"> | Date | string
    updatedAt?: DateTimeFilter<"Weekday"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutSavedRoutinesInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutSavedRoutinesInput, AccountUncheckedUpdateWithoutSavedRoutinesInput>
    create: XOR<AccountCreateWithoutSavedRoutinesInput, AccountUncheckedCreateWithoutSavedRoutinesInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutSavedRoutinesInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutSavedRoutinesInput, AccountUncheckedUpdateWithoutSavedRoutinesInput>
  }

  export type AccountUpdateManyWithWhereWithoutSavedRoutinesInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutSavedRoutinesInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    username?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    about?: StringNullableFilter<"Account"> | string | null
    isVerified?: BoolFilter<"Account"> | boolean
    image?: StringNullableFilter<"Account"> | string | null
    imageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    coverImage?: StringNullableFilter<"Account"> | string | null
    coverImageStorageProvider?: EnumStorageProviderNullableFilter<"Account"> | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    lastLoginTime?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type RoutinesJoinRequestUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    update: XOR<RoutinesJoinRequestUpdateWithoutRoutineInput, RoutinesJoinRequestUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutinesJoinRequestCreateWithoutRoutineInput, RoutinesJoinRequestUncheckedCreateWithoutRoutineInput>
  }

  export type RoutinesJoinRequestUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutinesJoinRequestWhereUniqueInput
    data: XOR<RoutinesJoinRequestUpdateWithoutRoutineInput, RoutinesJoinRequestUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutinesJoinRequestUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutinesJoinRequestScalarWhereInput
    data: XOR<RoutinesJoinRequestUpdateManyMutationInput, RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineInput>
  }

  export type SummaryUpsertWithWhereUniqueWithoutRoutineInput = {
    where: SummaryWhereUniqueInput
    update: XOR<SummaryUpdateWithoutRoutineInput, SummaryUncheckedUpdateWithoutRoutineInput>
    create: XOR<SummaryCreateWithoutRoutineInput, SummaryUncheckedCreateWithoutRoutineInput>
  }

  export type SummaryUpdateWithWhereUniqueWithoutRoutineInput = {
    where: SummaryWhereUniqueInput
    data: XOR<SummaryUpdateWithoutRoutineInput, SummaryUncheckedUpdateWithoutRoutineInput>
  }

  export type SummaryUpdateManyWithWhereWithoutRoutineInput = {
    where: SummaryScalarWhereInput
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyWithoutRoutineInput>
  }

  export type RoutineCreateWithoutClassesInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
    Summary?: SummaryCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutClassesInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutClassesInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutClassesInput, RoutineUncheckedCreateWithoutClassesInput>
  }

  export type WeekdayCreateWithoutClassInput = {
    id?: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutWeekdaysInput
  }

  export type WeekdayUncheckedCreateWithoutClassInput = {
    id?: string
    routineId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekdayCreateOrConnectWithoutClassInput = {
    where: WeekdayWhereUniqueInput
    create: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput>
  }

  export type WeekdayCreateManyClassInputEnvelope = {
    data: WeekdayCreateManyClassInput | WeekdayCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutClassInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner: AccountCreateNestedOneWithoutSummaryInput
    routine: RoutineCreateNestedOneWithoutSummaryInput
    Account?: AccountCreateNestedOneWithoutSaveSummaryInput
  }

  export type SummaryUncheckedCreateWithoutClassInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryCreateOrConnectWithoutClassInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput>
  }

  export type SummaryCreateManyClassInputEnvelope = {
    data: SummaryCreateManyClassInput | SummaryCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type RoutineUpsertWithoutClassesInput = {
    update: XOR<RoutineUpdateWithoutClassesInput, RoutineUncheckedUpdateWithoutClassesInput>
    create: XOR<RoutineCreateWithoutClassesInput, RoutineUncheckedCreateWithoutClassesInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutClassesInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutClassesInput, RoutineUncheckedUpdateWithoutClassesInput>
  }

  export type RoutineUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type WeekdayUpsertWithWhereUniqueWithoutClassInput = {
    where: WeekdayWhereUniqueInput
    update: XOR<WeekdayUpdateWithoutClassInput, WeekdayUncheckedUpdateWithoutClassInput>
    create: XOR<WeekdayCreateWithoutClassInput, WeekdayUncheckedCreateWithoutClassInput>
  }

  export type WeekdayUpdateWithWhereUniqueWithoutClassInput = {
    where: WeekdayWhereUniqueInput
    data: XOR<WeekdayUpdateWithoutClassInput, WeekdayUncheckedUpdateWithoutClassInput>
  }

  export type WeekdayUpdateManyWithWhereWithoutClassInput = {
    where: WeekdayScalarWhereInput
    data: XOR<WeekdayUpdateManyMutationInput, WeekdayUncheckedUpdateManyWithoutClassInput>
  }

  export type SummaryUpsertWithWhereUniqueWithoutClassInput = {
    where: SummaryWhereUniqueInput
    update: XOR<SummaryUpdateWithoutClassInput, SummaryUncheckedUpdateWithoutClassInput>
    create: XOR<SummaryCreateWithoutClassInput, SummaryUncheckedCreateWithoutClassInput>
  }

  export type SummaryUpdateWithWhereUniqueWithoutClassInput = {
    where: SummaryWhereUniqueInput
    data: XOR<SummaryUpdateWithoutClassInput, SummaryUncheckedUpdateWithoutClassInput>
  }

  export type SummaryUpdateManyWithWhereWithoutClassInput = {
    where: SummaryScalarWhereInput
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyWithoutClassInput>
  }

  export type AccountCreateWithoutSummaryInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    saveSummary?: SummaryCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSummaryInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    saveSummary?: SummaryUncheckedCreateNestedManyWithoutAccountInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSummaryInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSummaryInput, AccountUncheckedCreateWithoutSummaryInput>
  }

  export type RoutineCreateWithoutSummaryInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineOwner: AccountCreateNestedOneWithoutCreatedRoutinesInput
    routineMembers?: RoutineMemberCreateNestedManyWithoutRoutineInput
    classes?: ClassCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayCreateNestedManyWithoutRoutineInput
    savedBy?: AccountCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutSummaryInput = {
    id?: string
    routineName: string
    ownerAccountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routineMembers?: RoutineMemberUncheckedCreateNestedManyWithoutRoutineInput
    classes?: ClassUncheckedCreateNestedManyWithoutRoutineInput
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutRoutineInput
    savedBy?: AccountUncheckedCreateNestedManyWithoutSavedRoutinesInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutSummaryInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutSummaryInput, RoutineUncheckedCreateWithoutSummaryInput>
  }

  export type ClassCreateWithoutSummaryInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    routine: RoutineCreateNestedOneWithoutClassesInput
    weekdays?: WeekdayCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSummaryInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    routineId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekdays?: WeekdayUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSummaryInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSummaryInput, ClassUncheckedCreateWithoutSummaryInput>
  }

  export type AccountCreateWithoutSaveSummaryInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataCreateNestedOneWithoutAccountIDInput
    address?: AddressCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryCreateNestedManyWithoutOwnerInput
    publishedNotice?: NoticeCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSaveSummaryInput = {
    id?: string
    username: string
    name: string
    about?: string | null
    isVerified?: boolean
    image?: string | null
    imageStorageProvider?: $Enums.StorageProvider | null
    coverImage?: string | null
    coverImageStorageProvider?: $Enums.StorageProvider | null
    accountType?: $Enums.AccountType
    lastLoginTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountData?: AccountDataUncheckedCreateNestedOneWithoutAccountIDInput
    address?: AddressUncheckedCreateNestedOneWithoutAccountInput
    createdRoutines?: RoutineUncheckedCreateNestedManyWithoutRoutineOwnerInput
    routineMemberships?: RoutineMemberUncheckedCreateNestedManyWithoutMemberInput
    savedRoutines?: RoutineUncheckedCreateNestedManyWithoutSavedByInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedCreateNestedManyWithoutRequestedAccountInput
    Summary?: SummaryUncheckedCreateNestedManyWithoutOwnerInput
    publishedNotice?: NoticeUncheckedCreateNestedManyWithoutAccountInput
    rePublishedNotice?: rePublishUncheckedCreateNestedManyWithoutAccountInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSaveSummaryInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSaveSummaryInput, AccountUncheckedCreateWithoutSaveSummaryInput>
  }

  export type AccountUpsertWithoutSummaryInput = {
    update: XOR<AccountUpdateWithoutSummaryInput, AccountUncheckedUpdateWithoutSummaryInput>
    create: XOR<AccountCreateWithoutSummaryInput, AccountUncheckedCreateWithoutSummaryInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSummaryInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSummaryInput, AccountUncheckedUpdateWithoutSummaryInput>
  }

  export type AccountUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RoutineUpsertWithoutSummaryInput = {
    update: XOR<RoutineUpdateWithoutSummaryInput, RoutineUncheckedUpdateWithoutSummaryInput>
    create: XOR<RoutineCreateWithoutSummaryInput, RoutineUncheckedCreateWithoutSummaryInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutSummaryInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutSummaryInput, RoutineUncheckedUpdateWithoutSummaryInput>
  }

  export type RoutineUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type ClassUpsertWithoutSummaryInput = {
    update: XOR<ClassUpdateWithoutSummaryInput, ClassUncheckedUpdateWithoutSummaryInput>
    create: XOR<ClassCreateWithoutSummaryInput, ClassUncheckedCreateWithoutSummaryInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSummaryInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSummaryInput, ClassUncheckedUpdateWithoutSummaryInput>
  }

  export type ClassUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutClassesNestedInput
    weekdays?: WeekdayUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekdays?: WeekdayUncheckedUpdateManyWithoutClassNestedInput
  }

  export type AccountUpsertWithoutSaveSummaryInput = {
    update: XOR<AccountUpdateWithoutSaveSummaryInput, AccountUncheckedUpdateWithoutSaveSummaryInput>
    create: XOR<AccountCreateWithoutSaveSummaryInput, AccountUncheckedCreateWithoutSaveSummaryInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSaveSummaryInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSaveSummaryInput, AccountUncheckedUpdateWithoutSaveSummaryInput>
  }

  export type AccountUpdateWithoutSaveSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSaveSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    savedRoutines?: RoutineUncheckedUpdateManyWithoutSavedByNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type RoutineCreateManyRoutineOwnerInput = {
    id?: string
    routineName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineMemberCreateManyMemberInput = {
    id?: string
    routineId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutinesJoinRequestCreateManyRequestedAccountInput = {
    id?: string
    requestMessage?: string | null
    routineId: string
    createdAt?: Date | string
  }

  export type SummaryCreateManyOwnerInput = {
    id?: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type SummaryCreateManyAccountInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NoticeCreateManyAccountInput = {
    id?: string
    title: string
    pdf?: string | null
    description?: string | null
    category?: $Enums.NoticeCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type rePublishCreateManyAccountInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    noticeId?: string | null
  }

  export type NoticeBoardMemberCreateManyAccountInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
  }

  export type RoutineUpdateWithoutRoutineOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutRoutineOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    savedBy?: AccountUncheckedUpdateManyWithoutSavedRoutinesNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutRoutineOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutRoutineMembersNestedInput
  }

  export type RoutineMemberUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineOwner?: AccountUpdateOneRequiredWithoutCreatedRoutinesNestedInput
    routineMembers?: RoutineMemberUpdateManyWithoutRoutineNestedInput
    classes?: ClassUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUpdateManyWithoutRoutineNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routineMembers?: RoutineMemberUncheckedUpdateManyWithoutRoutineNestedInput
    classes?: ClassUncheckedUpdateManyWithoutRoutineNestedInput
    weekdays?: WeekdayUncheckedUpdateManyWithoutRoutineNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineName?: StringFieldUpdateOperationsInput | string
    ownerAccountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutinesJoinRequestUpdateWithoutRequestedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput
  }

  export type RoutinesJoinRequestUncheckedUpdateWithoutRequestedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    routineId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    routine?: RoutineUpdateOneRequiredWithoutSummaryNestedInput
    class?: ClassUpdateOneRequiredWithoutSummaryNestedInput
    Account?: AccountUpdateOneWithoutSaveSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner?: AccountUpdateOneRequiredWithoutSummaryNestedInput
    routine?: RoutineUpdateOneRequiredWithoutSummaryNestedInput
    class?: ClassUpdateOneRequiredWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SummaryUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NoticeUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rePublish?: rePublishUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rePublish?: rePublishUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumNoticeCategoryFieldUpdateOperationsInput | $Enums.NoticeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rePublishUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Notice?: NoticeUpdateOneWithoutRePublishNestedInput
  }

  export type rePublishUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rePublishUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeBoardMemberUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeBoardMemberUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeBoardMemberUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rePublishCreateManyNoticeInput = {
    id?: string
    republishedTitle: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rePublisherId: string
  }

  export type rePublishUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateOneWithoutRePublishedNoticeNestedInput
  }

  export type rePublishUncheckedUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rePublisherId?: StringFieldUpdateOperationsInput | string
  }

  export type rePublishUncheckedUpdateManyWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    republishedTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rePublisherId?: StringFieldUpdateOperationsInput | string
  }

  export type RoutineMemberCreateManyRoutineInput = {
    id?: string
    accountId: string
    notificationOn?: boolean
    captain?: boolean
    owner?: boolean
    isSaved?: boolean
    blacklist?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassCreateManyRoutineInput = {
    id?: string
    name: string
    instructorName: string
    subjectCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeekdayCreateManyRoutineInput = {
    id?: string
    classId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutinesJoinRequestCreateManyRoutineInput = {
    id?: string
    requestMessage?: string | null
    createdAt?: Date | string
    accountIdBy: string
  }

  export type SummaryCreateManyRoutineInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    classId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type RoutineMemberUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: AccountUpdateOneRequiredWithoutRoutineMembershipsNestedInput
  }

  export type RoutineMemberUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineMemberUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    notificationOn?: BoolFieldUpdateOperationsInput | boolean
    captain?: BoolFieldUpdateOperationsInput | boolean
    owner?: BoolFieldUpdateOperationsInput | boolean
    isSaved?: BoolFieldUpdateOperationsInput | boolean
    blacklist?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekdays?: WeekdayUpdateManyWithoutClassNestedInput
    Summary?: SummaryUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekdays?: WeekdayUncheckedUpdateManyWithoutClassNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructorName?: StringFieldUpdateOperationsInput | string
    subjectCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekdayUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutWeekdaysNestedInput
  }

  export type WeekdayUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekdayUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutSavedRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUpdateOneWithoutAccountIDNestedInput
    address?: AddressUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUpdateManyWithoutMemberNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSavedRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountData?: AccountDataUncheckedUpdateOneWithoutAccountIDNestedInput
    address?: AddressUncheckedUpdateOneWithoutAccountNestedInput
    createdRoutines?: RoutineUncheckedUpdateManyWithoutRoutineOwnerNestedInput
    routineMemberships?: RoutineMemberUncheckedUpdateManyWithoutMemberNestedInput
    RoutinesJoinRequest?: RoutinesJoinRequestUncheckedUpdateManyWithoutRequestedAccountNestedInput
    Summary?: SummaryUncheckedUpdateManyWithoutOwnerNestedInput
    saveSummary?: SummaryUncheckedUpdateManyWithoutAccountNestedInput
    publishedNotice?: NoticeUncheckedUpdateManyWithoutAccountNestedInput
    rePublishedNotice?: rePublishUncheckedUpdateManyWithoutAccountNestedInput
    NoticeBoardMember?: NoticeBoardMemberUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutSavedRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    accountType?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    lastLoginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutinesJoinRequestUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedAccount?: AccountUpdateOneRequiredWithoutRoutinesJoinRequestNestedInput
  }

  export type RoutinesJoinRequestUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountIdBy?: StringFieldUpdateOperationsInput | string
  }

  export type RoutinesJoinRequestUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountIdBy?: StringFieldUpdateOperationsInput | string
  }

  export type SummaryUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner?: AccountUpdateOneRequiredWithoutSummaryNestedInput
    class?: ClassUpdateOneRequiredWithoutSummaryNestedInput
    Account?: AccountUpdateOneWithoutSaveSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryUncheckedUpdateManyWithoutRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    classId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeekdayCreateManyClassInput = {
    id?: string
    routineId: string
    room: string
    Day: $Enums.Day
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SummaryCreateManyClassInput = {
    id?: string
    ownerId: string
    text: string
    imageLinks?: SummaryCreateimageLinksInput | string[]
    imageStorageProvider?: $Enums.StorageProvider | null
    routineId: string
    autoDeleteAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.SummaryType
    fileType?: string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: string | null
  }

  export type WeekdayUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routine?: RoutineUpdateOneRequiredWithoutWeekdaysNestedInput
  }

  export type WeekdayUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekdayUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    routineId?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    Day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SummaryUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    owner?: AccountUpdateOneRequiredWithoutSummaryNestedInput
    routine?: RoutineUpdateOneRequiredWithoutSummaryNestedInput
    Account?: AccountUpdateOneWithoutSaveSummaryNestedInput
  }

  export type SummaryUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    imageLinks?: SummaryUpdateimageLinksInput | string[]
    imageStorageProvider?: NullableEnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider | null
    routineId?: StringFieldUpdateOperationsInput | string
    autoDeleteAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumSummaryTypeFieldUpdateOperationsInput | $Enums.SummaryType
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    pollOptions?: NullableJsonNullValueInput | InputJsonValue
    savedAccountId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}