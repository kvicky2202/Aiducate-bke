
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model ClassMaterial
 * 
 */
export type ClassMaterial = $Result.DefaultSelection<Prisma.$ClassMaterialPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentResult
 * 
 */
export type AssignmentResult = $Result.DefaultSelection<Prisma.$AssignmentResultPayload>
/**
 * Model AssignmentQuiz
 * 
 */
export type AssignmentQuiz = $Result.DefaultSelection<Prisma.$AssignmentQuizPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizQuestionSet
 * 
 */
export type QuizQuestionSet = $Result.DefaultSelection<Prisma.$QuizQuestionSetPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model WardrobeItem
 * 
 */
export type WardrobeItem = $Result.DefaultSelection<Prisma.$WardrobeItemPayload>
/**
 * Model AiVoice
 * 
 */
export type AiVoice = $Result.DefaultSelection<Prisma.$AiVoicePayload>
/**
 * Model CodeModule
 * 
 */
export type CodeModule = $Result.DefaultSelection<Prisma.$CodeModulePayload>
/**
 * Model CodeModuleCurriculum
 * Full syllabus JSON for a module (lessons, quizzes, chapters)
 */
export type CodeModuleCurriculum = $Result.DefaultSelection<Prisma.$CodeModuleCurriculumPayload>
/**
 * Model DailyObjective
 * 
 */
export type DailyObjective = $Result.DefaultSelection<Prisma.$DailyObjectivePayload>
/**
 * Model UserCodeLabProgress
 * Per-user Code Lab hub progress, lesson states, and growth chart data
 */
export type UserCodeLabProgress = $Result.DefaultSelection<Prisma.$UserCodeLabProgressPayload>
/**
 * Model CodeLabProgress
 * 
 */
export type CodeLabProgress = $Result.DefaultSelection<Prisma.$CodeLabProgressPayload>
/**
 * Model GrowthJourney
 * 
 */
export type GrowthJourney = $Result.DefaultSelection<Prisma.$GrowthJourneyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classMaterial`: Exposes CRUD operations for the **ClassMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassMaterials
    * const classMaterials = await prisma.classMaterial.findMany()
    * ```
    */
  get classMaterial(): Prisma.ClassMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentResult`: Exposes CRUD operations for the **AssignmentResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentResults
    * const assignmentResults = await prisma.assignmentResult.findMany()
    * ```
    */
  get assignmentResult(): Prisma.AssignmentResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentQuiz`: Exposes CRUD operations for the **AssignmentQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentQuizs
    * const assignmentQuizs = await prisma.assignmentQuiz.findMany()
    * ```
    */
  get assignmentQuiz(): Prisma.AssignmentQuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestionSet`: Exposes CRUD operations for the **QuizQuestionSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestionSets
    * const quizQuestionSets = await prisma.quizQuestionSet.findMany()
    * ```
    */
  get quizQuestionSet(): Prisma.QuizQuestionSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wardrobeItem`: Exposes CRUD operations for the **WardrobeItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WardrobeItems
    * const wardrobeItems = await prisma.wardrobeItem.findMany()
    * ```
    */
  get wardrobeItem(): Prisma.WardrobeItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiVoice`: Exposes CRUD operations for the **AiVoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiVoices
    * const aiVoices = await prisma.aiVoice.findMany()
    * ```
    */
  get aiVoice(): Prisma.AiVoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeModule`: Exposes CRUD operations for the **CodeModule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeModules
    * const codeModules = await prisma.codeModule.findMany()
    * ```
    */
  get codeModule(): Prisma.CodeModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeModuleCurriculum`: Exposes CRUD operations for the **CodeModuleCurriculum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeModuleCurricula
    * const codeModuleCurricula = await prisma.codeModuleCurriculum.findMany()
    * ```
    */
  get codeModuleCurriculum(): Prisma.CodeModuleCurriculumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyObjective`: Exposes CRUD operations for the **DailyObjective** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyObjectives
    * const dailyObjectives = await prisma.dailyObjective.findMany()
    * ```
    */
  get dailyObjective(): Prisma.DailyObjectiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCodeLabProgress`: Exposes CRUD operations for the **UserCodeLabProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCodeLabProgresses
    * const userCodeLabProgresses = await prisma.userCodeLabProgress.findMany()
    * ```
    */
  get userCodeLabProgress(): Prisma.UserCodeLabProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeLabProgress`: Exposes CRUD operations for the **CodeLabProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeLabProgresses
    * const codeLabProgresses = await prisma.codeLabProgress.findMany()
    * ```
    */
  get codeLabProgress(): Prisma.CodeLabProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.growthJourney`: Exposes CRUD operations for the **GrowthJourney** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrowthJourneys
    * const growthJourneys = await prisma.growthJourney.findMany()
    * ```
    */
  get growthJourney(): Prisma.GrowthJourneyDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Classroom: 'Classroom',
    ClassMaterial: 'ClassMaterial',
    Assignment: 'Assignment',
    AssignmentResult: 'AssignmentResult',
    AssignmentQuiz: 'AssignmentQuiz',
    Quiz: 'Quiz',
    QuizQuestionSet: 'QuizQuestionSet',
    Story: 'Story',
    WardrobeItem: 'WardrobeItem',
    AiVoice: 'AiVoice',
    CodeModule: 'CodeModule',
    CodeModuleCurriculum: 'CodeModuleCurriculum',
    DailyObjective: 'DailyObjective',
    UserCodeLabProgress: 'UserCodeLabProgress',
    CodeLabProgress: 'CodeLabProgress',
    GrowthJourney: 'GrowthJourney'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "classroom" | "classMaterial" | "assignment" | "assignmentResult" | "assignmentQuiz" | "quiz" | "quizQuestionSet" | "story" | "wardrobeItem" | "aiVoice" | "codeModule" | "codeModuleCurriculum" | "dailyObjective" | "userCodeLabProgress" | "codeLabProgress" | "growthJourney"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      ClassMaterial: {
        payload: Prisma.$ClassMaterialPayload<ExtArgs>
        fields: Prisma.ClassMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          findFirst: {
            args: Prisma.ClassMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          findMany: {
            args: Prisma.ClassMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>[]
          }
          create: {
            args: Prisma.ClassMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          createMany: {
            args: Prisma.ClassMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>[]
          }
          delete: {
            args: Prisma.ClassMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          update: {
            args: Prisma.ClassMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          deleteMany: {
            args: Prisma.ClassMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>[]
          }
          upsert: {
            args: Prisma.ClassMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMaterialPayload>
          }
          aggregate: {
            args: Prisma.ClassMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassMaterial>
          }
          groupBy: {
            args: Prisma.ClassMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<ClassMaterialCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentResult: {
        payload: Prisma.$AssignmentResultPayload<ExtArgs>
        fields: Prisma.AssignmentResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          findFirst: {
            args: Prisma.AssignmentResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          findMany: {
            args: Prisma.AssignmentResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>[]
          }
          create: {
            args: Prisma.AssignmentResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          createMany: {
            args: Prisma.AssignmentResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>[]
          }
          delete: {
            args: Prisma.AssignmentResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          update: {
            args: Prisma.AssignmentResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentResultPayload>
          }
          aggregate: {
            args: Prisma.AssignmentResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentResult>
          }
          groupBy: {
            args: Prisma.AssignmentResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentResultCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentResultCountAggregateOutputType> | number
          }
        }
      }
      AssignmentQuiz: {
        payload: Prisma.$AssignmentQuizPayload<ExtArgs>
        fields: Prisma.AssignmentQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentQuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentQuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          findFirst: {
            args: Prisma.AssignmentQuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentQuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          findMany: {
            args: Prisma.AssignmentQuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>[]
          }
          create: {
            args: Prisma.AssignmentQuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          createMany: {
            args: Prisma.AssignmentQuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentQuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>[]
          }
          delete: {
            args: Prisma.AssignmentQuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          update: {
            args: Prisma.AssignmentQuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentQuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentQuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentQuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentQuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentQuizPayload>
          }
          aggregate: {
            args: Prisma.AssignmentQuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentQuiz>
          }
          groupBy: {
            args: Prisma.AssignmentQuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentQuizCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentQuizCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestionSet: {
        payload: Prisma.$QuizQuestionSetPayload<ExtArgs>
        fields: Prisma.QuizQuestionSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          update: {
            args: Prisma.QuizQuestionSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionSetPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestionSet>
          }
          groupBy: {
            args: Prisma.QuizQuestionSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionSetCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionSetCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      WardrobeItem: {
        payload: Prisma.$WardrobeItemPayload<ExtArgs>
        fields: Prisma.WardrobeItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WardrobeItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WardrobeItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          findFirst: {
            args: Prisma.WardrobeItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WardrobeItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          findMany: {
            args: Prisma.WardrobeItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[]
          }
          create: {
            args: Prisma.WardrobeItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          createMany: {
            args: Prisma.WardrobeItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WardrobeItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[]
          }
          delete: {
            args: Prisma.WardrobeItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          update: {
            args: Prisma.WardrobeItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          deleteMany: {
            args: Prisma.WardrobeItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WardrobeItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WardrobeItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>[]
          }
          upsert: {
            args: Prisma.WardrobeItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardrobeItemPayload>
          }
          aggregate: {
            args: Prisma.WardrobeItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWardrobeItem>
          }
          groupBy: {
            args: Prisma.WardrobeItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WardrobeItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WardrobeItemCountArgs<ExtArgs>
            result: $Utils.Optional<WardrobeItemCountAggregateOutputType> | number
          }
        }
      }
      AiVoice: {
        payload: Prisma.$AiVoicePayload<ExtArgs>
        fields: Prisma.AiVoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiVoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiVoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          findFirst: {
            args: Prisma.AiVoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiVoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          findMany: {
            args: Prisma.AiVoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>[]
          }
          create: {
            args: Prisma.AiVoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          createMany: {
            args: Prisma.AiVoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiVoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>[]
          }
          delete: {
            args: Prisma.AiVoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          update: {
            args: Prisma.AiVoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          deleteMany: {
            args: Prisma.AiVoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiVoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiVoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>[]
          }
          upsert: {
            args: Prisma.AiVoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiVoicePayload>
          }
          aggregate: {
            args: Prisma.AiVoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiVoice>
          }
          groupBy: {
            args: Prisma.AiVoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiVoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiVoiceCountArgs<ExtArgs>
            result: $Utils.Optional<AiVoiceCountAggregateOutputType> | number
          }
        }
      }
      CodeModule: {
        payload: Prisma.$CodeModulePayload<ExtArgs>
        fields: Prisma.CodeModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          findFirst: {
            args: Prisma.CodeModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          findMany: {
            args: Prisma.CodeModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>[]
          }
          create: {
            args: Prisma.CodeModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          createMany: {
            args: Prisma.CodeModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>[]
          }
          delete: {
            args: Prisma.CodeModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          update: {
            args: Prisma.CodeModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          deleteMany: {
            args: Prisma.CodeModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>[]
          }
          upsert: {
            args: Prisma.CodeModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModulePayload>
          }
          aggregate: {
            args: Prisma.CodeModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeModule>
          }
          groupBy: {
            args: Prisma.CodeModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeModuleCountArgs<ExtArgs>
            result: $Utils.Optional<CodeModuleCountAggregateOutputType> | number
          }
        }
      }
      CodeModuleCurriculum: {
        payload: Prisma.$CodeModuleCurriculumPayload<ExtArgs>
        fields: Prisma.CodeModuleCurriculumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeModuleCurriculumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeModuleCurriculumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          findFirst: {
            args: Prisma.CodeModuleCurriculumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeModuleCurriculumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          findMany: {
            args: Prisma.CodeModuleCurriculumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>[]
          }
          create: {
            args: Prisma.CodeModuleCurriculumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          createMany: {
            args: Prisma.CodeModuleCurriculumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeModuleCurriculumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>[]
          }
          delete: {
            args: Prisma.CodeModuleCurriculumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          update: {
            args: Prisma.CodeModuleCurriculumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          deleteMany: {
            args: Prisma.CodeModuleCurriculumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeModuleCurriculumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeModuleCurriculumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>[]
          }
          upsert: {
            args: Prisma.CodeModuleCurriculumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeModuleCurriculumPayload>
          }
          aggregate: {
            args: Prisma.CodeModuleCurriculumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeModuleCurriculum>
          }
          groupBy: {
            args: Prisma.CodeModuleCurriculumGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeModuleCurriculumGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeModuleCurriculumCountArgs<ExtArgs>
            result: $Utils.Optional<CodeModuleCurriculumCountAggregateOutputType> | number
          }
        }
      }
      DailyObjective: {
        payload: Prisma.$DailyObjectivePayload<ExtArgs>
        fields: Prisma.DailyObjectiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyObjectiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyObjectiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          findFirst: {
            args: Prisma.DailyObjectiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyObjectiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          findMany: {
            args: Prisma.DailyObjectiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>[]
          }
          create: {
            args: Prisma.DailyObjectiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          createMany: {
            args: Prisma.DailyObjectiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyObjectiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>[]
          }
          delete: {
            args: Prisma.DailyObjectiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          update: {
            args: Prisma.DailyObjectiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          deleteMany: {
            args: Prisma.DailyObjectiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyObjectiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyObjectiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>[]
          }
          upsert: {
            args: Prisma.DailyObjectiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyObjectivePayload>
          }
          aggregate: {
            args: Prisma.DailyObjectiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyObjective>
          }
          groupBy: {
            args: Prisma.DailyObjectiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyObjectiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyObjectiveCountArgs<ExtArgs>
            result: $Utils.Optional<DailyObjectiveCountAggregateOutputType> | number
          }
        }
      }
      UserCodeLabProgress: {
        payload: Prisma.$UserCodeLabProgressPayload<ExtArgs>
        fields: Prisma.UserCodeLabProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCodeLabProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCodeLabProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCodeLabProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCodeLabProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          findMany: {
            args: Prisma.UserCodeLabProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>[]
          }
          create: {
            args: Prisma.UserCodeLabProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          createMany: {
            args: Prisma.UserCodeLabProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCodeLabProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>[]
          }
          delete: {
            args: Prisma.UserCodeLabProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          update: {
            args: Prisma.UserCodeLabProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCodeLabProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCodeLabProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCodeLabProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserCodeLabProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCodeLabProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCodeLabProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCodeLabProgress>
          }
          groupBy: {
            args: Prisma.UserCodeLabProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCodeLabProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCodeLabProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCodeLabProgressCountAggregateOutputType> | number
          }
        }
      }
      CodeLabProgress: {
        payload: Prisma.$CodeLabProgressPayload<ExtArgs>
        fields: Prisma.CodeLabProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeLabProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeLabProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          findFirst: {
            args: Prisma.CodeLabProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeLabProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          findMany: {
            args: Prisma.CodeLabProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>[]
          }
          create: {
            args: Prisma.CodeLabProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          createMany: {
            args: Prisma.CodeLabProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeLabProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>[]
          }
          delete: {
            args: Prisma.CodeLabProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          update: {
            args: Prisma.CodeLabProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          deleteMany: {
            args: Prisma.CodeLabProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeLabProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeLabProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>[]
          }
          upsert: {
            args: Prisma.CodeLabProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeLabProgressPayload>
          }
          aggregate: {
            args: Prisma.CodeLabProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeLabProgress>
          }
          groupBy: {
            args: Prisma.CodeLabProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeLabProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeLabProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CodeLabProgressCountAggregateOutputType> | number
          }
        }
      }
      GrowthJourney: {
        payload: Prisma.$GrowthJourneyPayload<ExtArgs>
        fields: Prisma.GrowthJourneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrowthJourneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrowthJourneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          findFirst: {
            args: Prisma.GrowthJourneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrowthJourneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          findMany: {
            args: Prisma.GrowthJourneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>[]
          }
          create: {
            args: Prisma.GrowthJourneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          createMany: {
            args: Prisma.GrowthJourneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrowthJourneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>[]
          }
          delete: {
            args: Prisma.GrowthJourneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          update: {
            args: Prisma.GrowthJourneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          deleteMany: {
            args: Prisma.GrowthJourneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrowthJourneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrowthJourneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>[]
          }
          upsert: {
            args: Prisma.GrowthJourneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrowthJourneyPayload>
          }
          aggregate: {
            args: Prisma.GrowthJourneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrowthJourney>
          }
          groupBy: {
            args: Prisma.GrowthJourneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrowthJourneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrowthJourneyCountArgs<ExtArgs>
            result: $Utils.Optional<GrowthJourneyCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    classroom?: ClassroomOmit
    classMaterial?: ClassMaterialOmit
    assignment?: AssignmentOmit
    assignmentResult?: AssignmentResultOmit
    assignmentQuiz?: AssignmentQuizOmit
    quiz?: QuizOmit
    quizQuestionSet?: QuizQuestionSetOmit
    story?: StoryOmit
    wardrobeItem?: WardrobeItemOmit
    aiVoice?: AiVoiceOmit
    codeModule?: CodeModuleOmit
    codeModuleCurriculum?: CodeModuleCurriculumOmit
    dailyObjective?: DailyObjectiveOmit
    userCodeLabProgress?: UserCodeLabProgressOmit
    codeLabProgress?: CodeLabProgressOmit
    growthJourney?: GrowthJourneyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    stars: number | null
    exp: number | null
    streak: number | null
    speechSpeed: number | null
    progress: number | null
  }

  export type UserSumAggregateOutputType = {
    stars: number | null
    exp: number | null
    streak: number | null
    speechSpeed: number | null
    progress: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    teacherCardId: string | null
    avatarUrl: string | null
    initials: string | null
    email: string | null
    stars: number | null
    exp: number | null
    streak: number | null
    enrolledClassIds: string | null
    createdClassIds: string | null
    equippedGear: string | null
    voiceId: string | null
    speechSpeed: number | null
    avatarPreference: string | null
    status: string | null
    strength: string | null
    progress: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    teacherCardId: string | null
    avatarUrl: string | null
    initials: string | null
    email: string | null
    stars: number | null
    exp: number | null
    streak: number | null
    enrolledClassIds: string | null
    createdClassIds: string | null
    equippedGear: string | null
    voiceId: string | null
    speechSpeed: number | null
    avatarPreference: string | null
    status: string | null
    strength: string | null
    progress: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    name: number
    role: number
    teacherCardId: number
    avatarUrl: number
    initials: number
    email: number
    stars: number
    exp: number
    streak: number
    enrolledClassIds: number
    createdClassIds: number
    equippedGear: number
    voiceId: number
    speechSpeed: number
    avatarPreference: number
    status: number
    strength: number
    progress: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    stars?: true
    exp?: true
    streak?: true
    speechSpeed?: true
    progress?: true
  }

  export type UserSumAggregateInputType = {
    stars?: true
    exp?: true
    streak?: true
    speechSpeed?: true
    progress?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    teacherCardId?: true
    avatarUrl?: true
    initials?: true
    email?: true
    stars?: true
    exp?: true
    streak?: true
    enrolledClassIds?: true
    createdClassIds?: true
    equippedGear?: true
    voiceId?: true
    speechSpeed?: true
    avatarPreference?: true
    status?: true
    strength?: true
    progress?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    teacherCardId?: true
    avatarUrl?: true
    initials?: true
    email?: true
    stars?: true
    exp?: true
    streak?: true
    enrolledClassIds?: true
    createdClassIds?: true
    equippedGear?: true
    voiceId?: true
    speechSpeed?: true
    avatarPreference?: true
    status?: true
    strength?: true
    progress?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    name?: true
    role?: true
    teacherCardId?: true
    avatarUrl?: true
    initials?: true
    email?: true
    stars?: true
    exp?: true
    streak?: true
    enrolledClassIds?: true
    createdClassIds?: true
    equippedGear?: true
    voiceId?: true
    speechSpeed?: true
    avatarPreference?: true
    status?: true
    strength?: true
    progress?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    name: string
    role: string
    teacherCardId: string | null
    avatarUrl: string | null
    initials: string | null
    email: string | null
    stars: number
    exp: number
    streak: number
    enrolledClassIds: string
    createdClassIds: string
    equippedGear: string | null
    voiceId: string | null
    speechSpeed: number | null
    avatarPreference: string | null
    status: string | null
    strength: string | null
    progress: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    teacherCardId?: boolean
    avatarUrl?: boolean
    initials?: boolean
    email?: boolean
    stars?: boolean
    exp?: boolean
    streak?: boolean
    enrolledClassIds?: boolean
    createdClassIds?: boolean
    equippedGear?: boolean
    voiceId?: boolean
    speechSpeed?: boolean
    avatarPreference?: boolean
    status?: boolean
    strength?: boolean
    progress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    teacherCardId?: boolean
    avatarUrl?: boolean
    initials?: boolean
    email?: boolean
    stars?: boolean
    exp?: boolean
    streak?: boolean
    enrolledClassIds?: boolean
    createdClassIds?: boolean
    equippedGear?: boolean
    voiceId?: boolean
    speechSpeed?: boolean
    avatarPreference?: boolean
    status?: boolean
    strength?: boolean
    progress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    teacherCardId?: boolean
    avatarUrl?: boolean
    initials?: boolean
    email?: boolean
    stars?: boolean
    exp?: boolean
    streak?: boolean
    enrolledClassIds?: boolean
    createdClassIds?: boolean
    equippedGear?: boolean
    voiceId?: boolean
    speechSpeed?: boolean
    avatarPreference?: boolean
    status?: boolean
    strength?: boolean
    progress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    teacherCardId?: boolean
    avatarUrl?: boolean
    initials?: boolean
    email?: boolean
    stars?: boolean
    exp?: boolean
    streak?: boolean
    enrolledClassIds?: boolean
    createdClassIds?: boolean
    equippedGear?: boolean
    voiceId?: boolean
    speechSpeed?: boolean
    avatarPreference?: boolean
    status?: boolean
    strength?: boolean
    progress?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "name" | "role" | "teacherCardId" | "avatarUrl" | "initials" | "email" | "stars" | "exp" | "streak" | "enrolledClassIds" | "createdClassIds" | "equippedGear" | "voiceId" | "speechSpeed" | "avatarPreference" | "status" | "strength" | "progress" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      name: string
      role: string
      teacherCardId: string | null
      avatarUrl: string | null
      initials: string | null
      email: string | null
      stars: number
      exp: number
      streak: number
      enrolledClassIds: string
      createdClassIds: string
      equippedGear: string | null
      voiceId: string | null
      speechSpeed: number | null
      avatarPreference: string | null
      status: string | null
      strength: string | null
      progress: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly teacherCardId: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly initials: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly stars: FieldRef<"User", 'Int'>
    readonly exp: FieldRef<"User", 'Int'>
    readonly streak: FieldRef<"User", 'Int'>
    readonly enrolledClassIds: FieldRef<"User", 'String'>
    readonly createdClassIds: FieldRef<"User", 'String'>
    readonly equippedGear: FieldRef<"User", 'String'>
    readonly voiceId: FieldRef<"User", 'String'>
    readonly speechSpeed: FieldRef<"User", 'Float'>
    readonly avatarPreference: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly strength: FieldRef<"User", 'String'>
    readonly progress: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomAvgAggregateOutputType = {
    studentCount: number | null
    progress: number | null
  }

  export type ClassroomSumAggregateOutputType = {
    studentCount: number | null
    progress: number | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    section: string | null
    subject: string | null
    teacherId: string | null
    teacherName: string | null
    studentCount: number | null
    bannerColor: string | null
    schedule: string | null
    progress: number | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    section: string | null
    subject: string | null
    teacherId: string | null
    teacherName: string | null
    studentCount: number | null
    bannerColor: string | null
    schedule: string | null
    progress: number | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    code: number
    name: number
    section: number
    subject: number
    teacherId: number
    teacherName: number
    studentCount: number
    bannerColor: number
    schedule: number
    progress: number
    _all: number
  }


  export type ClassroomAvgAggregateInputType = {
    studentCount?: true
    progress?: true
  }

  export type ClassroomSumAggregateInputType = {
    studentCount?: true
    progress?: true
  }

  export type ClassroomMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    section?: true
    subject?: true
    teacherId?: true
    teacherName?: true
    studentCount?: true
    bannerColor?: true
    schedule?: true
    progress?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    section?: true
    subject?: true
    teacherId?: true
    teacherName?: true
    studentCount?: true
    bannerColor?: true
    schedule?: true
    progress?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    section?: true
    subject?: true
    teacherId?: true
    teacherName?: true
    studentCount?: true
    bannerColor?: true
    schedule?: true
    progress?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _avg?: ClassroomAvgAggregateInputType
    _sum?: ClassroomSumAggregateInputType
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: string
    code: string
    name: string
    section: string
    subject: string
    teacherId: string
    teacherName: string
    studentCount: number
    bannerColor: string
    schedule: string
    progress: number
    _count: ClassroomCountAggregateOutputType | null
    _avg: ClassroomAvgAggregateOutputType | null
    _sum: ClassroomSumAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    section?: boolean
    subject?: boolean
    teacherId?: boolean
    teacherName?: boolean
    studentCount?: boolean
    bannerColor?: boolean
    schedule?: boolean
    progress?: boolean
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    section?: boolean
    subject?: boolean
    teacherId?: boolean
    teacherName?: boolean
    studentCount?: boolean
    bannerColor?: boolean
    schedule?: boolean
    progress?: boolean
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    section?: boolean
    subject?: boolean
    teacherId?: boolean
    teacherName?: boolean
    studentCount?: boolean
    bannerColor?: boolean
    schedule?: boolean
    progress?: boolean
  }, ExtArgs["result"]["classroom"]>

  export type ClassroomSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    section?: boolean
    subject?: boolean
    teacherId?: boolean
    teacherName?: boolean
    studentCount?: boolean
    bannerColor?: boolean
    schedule?: boolean
    progress?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "section" | "subject" | "teacherId" | "teacherName" | "studentCount" | "bannerColor" | "schedule" | "progress", ExtArgs["result"]["classroom"]>

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      section: string
      subject: string
      teacherId: string
      teacherName: string
      studentCount: number
      bannerColor: string
      schedule: string
      progress: number
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classrooms and returns the data saved in the database.
     * @param {ClassroomCreateManyAndReturnArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms and returns the data updated in the database.
     * @param {ClassroomUpdateManyAndReturnArgs} args - Arguments to update many Classrooms.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classrooms and only return the `id`
     * const classroomWithIdOnly = await prisma.classroom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
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
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Classroom model
   */
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'String'>
    readonly code: FieldRef<"Classroom", 'String'>
    readonly name: FieldRef<"Classroom", 'String'>
    readonly section: FieldRef<"Classroom", 'String'>
    readonly subject: FieldRef<"Classroom", 'String'>
    readonly teacherId: FieldRef<"Classroom", 'String'>
    readonly teacherName: FieldRef<"Classroom", 'String'>
    readonly studentCount: FieldRef<"Classroom", 'Int'>
    readonly bannerColor: FieldRef<"Classroom", 'String'>
    readonly schedule: FieldRef<"Classroom", 'String'>
    readonly progress: FieldRef<"Classroom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
  }

  /**
   * Classroom createManyAndReturn
   */
  export type ClassroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom updateManyAndReturn
   */
  export type ClassroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
  }


  /**
   * Model ClassMaterial
   */

  export type AggregateClassMaterial = {
    _count: ClassMaterialCountAggregateOutputType | null
    _min: ClassMaterialMinAggregateOutputType | null
    _max: ClassMaterialMaxAggregateOutputType | null
  }

  export type ClassMaterialMinAggregateOutputType = {
    id: string | null
    classId: string | null
    title: string | null
    uploadedAt: string | null
    summary: string | null
    fileName: string | null
    filePath: string | null
    mimeType: string | null
    uploadedById: string | null
  }

  export type ClassMaterialMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    title: string | null
    uploadedAt: string | null
    summary: string | null
    fileName: string | null
    filePath: string | null
    mimeType: string | null
    uploadedById: string | null
  }

  export type ClassMaterialCountAggregateOutputType = {
    id: number
    classId: number
    title: number
    uploadedAt: number
    summary: number
    fileName: number
    filePath: number
    mimeType: number
    uploadedById: number
    _all: number
  }


  export type ClassMaterialMinAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    uploadedAt?: true
    summary?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    uploadedById?: true
  }

  export type ClassMaterialMaxAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    uploadedAt?: true
    summary?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    uploadedById?: true
  }

  export type ClassMaterialCountAggregateInputType = {
    id?: true
    classId?: true
    title?: true
    uploadedAt?: true
    summary?: true
    fileName?: true
    filePath?: true
    mimeType?: true
    uploadedById?: true
    _all?: true
  }

  export type ClassMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassMaterial to aggregate.
     */
    where?: ClassMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMaterials to fetch.
     */
    orderBy?: ClassMaterialOrderByWithRelationInput | ClassMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassMaterials
    **/
    _count?: true | ClassMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaterialMaxAggregateInputType
  }

  export type GetClassMaterialAggregateType<T extends ClassMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateClassMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassMaterial[P]>
      : GetScalarType<T[P], AggregateClassMaterial[P]>
  }




  export type ClassMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassMaterialWhereInput
    orderBy?: ClassMaterialOrderByWithAggregationInput | ClassMaterialOrderByWithAggregationInput[]
    by: ClassMaterialScalarFieldEnum[] | ClassMaterialScalarFieldEnum
    having?: ClassMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassMaterialCountAggregateInputType | true
    _min?: ClassMaterialMinAggregateInputType
    _max?: ClassMaterialMaxAggregateInputType
  }

  export type ClassMaterialGroupByOutputType = {
    id: string
    classId: string
    title: string
    uploadedAt: string
    summary: string
    fileName: string | null
    filePath: string | null
    mimeType: string | null
    uploadedById: string | null
    _count: ClassMaterialCountAggregateOutputType | null
    _min: ClassMaterialMinAggregateOutputType | null
    _max: ClassMaterialMaxAggregateOutputType | null
  }

  type GetClassMaterialGroupByPayload<T extends ClassMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], ClassMaterialGroupByOutputType[P]>
        }
      >
    >


  export type ClassMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    uploadedAt?: boolean
    summary?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    uploadedById?: boolean
  }, ExtArgs["result"]["classMaterial"]>

  export type ClassMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    uploadedAt?: boolean
    summary?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    uploadedById?: boolean
  }, ExtArgs["result"]["classMaterial"]>

  export type ClassMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    title?: boolean
    uploadedAt?: boolean
    summary?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    uploadedById?: boolean
  }, ExtArgs["result"]["classMaterial"]>

  export type ClassMaterialSelectScalar = {
    id?: boolean
    classId?: boolean
    title?: boolean
    uploadedAt?: boolean
    summary?: boolean
    fileName?: boolean
    filePath?: boolean
    mimeType?: boolean
    uploadedById?: boolean
  }

  export type ClassMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "title" | "uploadedAt" | "summary" | "fileName" | "filePath" | "mimeType" | "uploadedById", ExtArgs["result"]["classMaterial"]>

  export type $ClassMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassMaterial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      title: string
      uploadedAt: string
      summary: string
      fileName: string | null
      filePath: string | null
      mimeType: string | null
      uploadedById: string | null
    }, ExtArgs["result"]["classMaterial"]>
    composites: {}
  }

  type ClassMaterialGetPayload<S extends boolean | null | undefined | ClassMaterialDefaultArgs> = $Result.GetResult<Prisma.$ClassMaterialPayload, S>

  type ClassMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassMaterialCountAggregateInputType | true
    }

  export interface ClassMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassMaterial'], meta: { name: 'ClassMaterial' } }
    /**
     * Find zero or one ClassMaterial that matches the filter.
     * @param {ClassMaterialFindUniqueArgs} args - Arguments to find a ClassMaterial
     * @example
     * // Get one ClassMaterial
     * const classMaterial = await prisma.classMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassMaterialFindUniqueArgs>(args: SelectSubset<T, ClassMaterialFindUniqueArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassMaterialFindUniqueOrThrowArgs} args - Arguments to find a ClassMaterial
     * @example
     * // Get one ClassMaterial
     * const classMaterial = await prisma.classMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialFindFirstArgs} args - Arguments to find a ClassMaterial
     * @example
     * // Get one ClassMaterial
     * const classMaterial = await prisma.classMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassMaterialFindFirstArgs>(args?: SelectSubset<T, ClassMaterialFindFirstArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialFindFirstOrThrowArgs} args - Arguments to find a ClassMaterial
     * @example
     * // Get one ClassMaterial
     * const classMaterial = await prisma.classMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassMaterials
     * const classMaterials = await prisma.classMaterial.findMany()
     * 
     * // Get first 10 ClassMaterials
     * const classMaterials = await prisma.classMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classMaterialWithIdOnly = await prisma.classMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassMaterialFindManyArgs>(args?: SelectSubset<T, ClassMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassMaterial.
     * @param {ClassMaterialCreateArgs} args - Arguments to create a ClassMaterial.
     * @example
     * // Create one ClassMaterial
     * const ClassMaterial = await prisma.classMaterial.create({
     *   data: {
     *     // ... data to create a ClassMaterial
     *   }
     * })
     * 
     */
    create<T extends ClassMaterialCreateArgs>(args: SelectSubset<T, ClassMaterialCreateArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassMaterials.
     * @param {ClassMaterialCreateManyArgs} args - Arguments to create many ClassMaterials.
     * @example
     * // Create many ClassMaterials
     * const classMaterial = await prisma.classMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassMaterialCreateManyArgs>(args?: SelectSubset<T, ClassMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassMaterials and returns the data saved in the database.
     * @param {ClassMaterialCreateManyAndReturnArgs} args - Arguments to create many ClassMaterials.
     * @example
     * // Create many ClassMaterials
     * const classMaterial = await prisma.classMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassMaterials and only return the `id`
     * const classMaterialWithIdOnly = await prisma.classMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassMaterial.
     * @param {ClassMaterialDeleteArgs} args - Arguments to delete one ClassMaterial.
     * @example
     * // Delete one ClassMaterial
     * const ClassMaterial = await prisma.classMaterial.delete({
     *   where: {
     *     // ... filter to delete one ClassMaterial
     *   }
     * })
     * 
     */
    delete<T extends ClassMaterialDeleteArgs>(args: SelectSubset<T, ClassMaterialDeleteArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassMaterial.
     * @param {ClassMaterialUpdateArgs} args - Arguments to update one ClassMaterial.
     * @example
     * // Update one ClassMaterial
     * const classMaterial = await prisma.classMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassMaterialUpdateArgs>(args: SelectSubset<T, ClassMaterialUpdateArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassMaterials.
     * @param {ClassMaterialDeleteManyArgs} args - Arguments to filter ClassMaterials to delete.
     * @example
     * // Delete a few ClassMaterials
     * const { count } = await prisma.classMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassMaterialDeleteManyArgs>(args?: SelectSubset<T, ClassMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassMaterials
     * const classMaterial = await prisma.classMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassMaterialUpdateManyArgs>(args: SelectSubset<T, ClassMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassMaterials and returns the data updated in the database.
     * @param {ClassMaterialUpdateManyAndReturnArgs} args - Arguments to update many ClassMaterials.
     * @example
     * // Update many ClassMaterials
     * const classMaterial = await prisma.classMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassMaterials and only return the `id`
     * const classMaterialWithIdOnly = await prisma.classMaterial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassMaterial.
     * @param {ClassMaterialUpsertArgs} args - Arguments to update or create a ClassMaterial.
     * @example
     * // Update or create a ClassMaterial
     * const classMaterial = await prisma.classMaterial.upsert({
     *   create: {
     *     // ... data to create a ClassMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ClassMaterialUpsertArgs>(args: SelectSubset<T, ClassMaterialUpsertArgs<ExtArgs>>): Prisma__ClassMaterialClient<$Result.GetResult<Prisma.$ClassMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialCountArgs} args - Arguments to filter ClassMaterials to count.
     * @example
     * // Count the number of ClassMaterials
     * const count = await prisma.classMaterial.count({
     *   where: {
     *     // ... the filter for the ClassMaterials we want to count
     *   }
     * })
    **/
    count<T extends ClassMaterialCountArgs>(
      args?: Subset<T, ClassMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassMaterialAggregateArgs>(args: Subset<T, ClassMaterialAggregateArgs>): Prisma.PrismaPromise<GetClassMaterialAggregateType<T>>

    /**
     * Group by ClassMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMaterialGroupByArgs} args - Group by arguments.
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
      T extends ClassMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassMaterialGroupByArgs['orderBy'] }
        : { orderBy?: ClassMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassMaterial model
   */
  readonly fields: ClassMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ClassMaterial model
   */
  interface ClassMaterialFieldRefs {
    readonly id: FieldRef<"ClassMaterial", 'String'>
    readonly classId: FieldRef<"ClassMaterial", 'String'>
    readonly title: FieldRef<"ClassMaterial", 'String'>
    readonly uploadedAt: FieldRef<"ClassMaterial", 'String'>
    readonly summary: FieldRef<"ClassMaterial", 'String'>
    readonly fileName: FieldRef<"ClassMaterial", 'String'>
    readonly filePath: FieldRef<"ClassMaterial", 'String'>
    readonly mimeType: FieldRef<"ClassMaterial", 'String'>
    readonly uploadedById: FieldRef<"ClassMaterial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ClassMaterial findUnique
   */
  export type ClassMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter, which ClassMaterial to fetch.
     */
    where: ClassMaterialWhereUniqueInput
  }

  /**
   * ClassMaterial findUniqueOrThrow
   */
  export type ClassMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter, which ClassMaterial to fetch.
     */
    where: ClassMaterialWhereUniqueInput
  }

  /**
   * ClassMaterial findFirst
   */
  export type ClassMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter, which ClassMaterial to fetch.
     */
    where?: ClassMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMaterials to fetch.
     */
    orderBy?: ClassMaterialOrderByWithRelationInput | ClassMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassMaterials.
     */
    cursor?: ClassMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassMaterials.
     */
    distinct?: ClassMaterialScalarFieldEnum | ClassMaterialScalarFieldEnum[]
  }

  /**
   * ClassMaterial findFirstOrThrow
   */
  export type ClassMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter, which ClassMaterial to fetch.
     */
    where?: ClassMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMaterials to fetch.
     */
    orderBy?: ClassMaterialOrderByWithRelationInput | ClassMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassMaterials.
     */
    cursor?: ClassMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassMaterials.
     */
    distinct?: ClassMaterialScalarFieldEnum | ClassMaterialScalarFieldEnum[]
  }

  /**
   * ClassMaterial findMany
   */
  export type ClassMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter, which ClassMaterials to fetch.
     */
    where?: ClassMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMaterials to fetch.
     */
    orderBy?: ClassMaterialOrderByWithRelationInput | ClassMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassMaterials.
     */
    cursor?: ClassMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassMaterials.
     */
    distinct?: ClassMaterialScalarFieldEnum | ClassMaterialScalarFieldEnum[]
  }

  /**
   * ClassMaterial create
   */
  export type ClassMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * The data needed to create a ClassMaterial.
     */
    data: XOR<ClassMaterialCreateInput, ClassMaterialUncheckedCreateInput>
  }

  /**
   * ClassMaterial createMany
   */
  export type ClassMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassMaterials.
     */
    data: ClassMaterialCreateManyInput | ClassMaterialCreateManyInput[]
  }

  /**
   * ClassMaterial createManyAndReturn
   */
  export type ClassMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many ClassMaterials.
     */
    data: ClassMaterialCreateManyInput | ClassMaterialCreateManyInput[]
  }

  /**
   * ClassMaterial update
   */
  export type ClassMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * The data needed to update a ClassMaterial.
     */
    data: XOR<ClassMaterialUpdateInput, ClassMaterialUncheckedUpdateInput>
    /**
     * Choose, which ClassMaterial to update.
     */
    where: ClassMaterialWhereUniqueInput
  }

  /**
   * ClassMaterial updateMany
   */
  export type ClassMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassMaterials.
     */
    data: XOR<ClassMaterialUpdateManyMutationInput, ClassMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ClassMaterials to update
     */
    where?: ClassMaterialWhereInput
    /**
     * Limit how many ClassMaterials to update.
     */
    limit?: number
  }

  /**
   * ClassMaterial updateManyAndReturn
   */
  export type ClassMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * The data used to update ClassMaterials.
     */
    data: XOR<ClassMaterialUpdateManyMutationInput, ClassMaterialUncheckedUpdateManyInput>
    /**
     * Filter which ClassMaterials to update
     */
    where?: ClassMaterialWhereInput
    /**
     * Limit how many ClassMaterials to update.
     */
    limit?: number
  }

  /**
   * ClassMaterial upsert
   */
  export type ClassMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * The filter to search for the ClassMaterial to update in case it exists.
     */
    where: ClassMaterialWhereUniqueInput
    /**
     * In case the ClassMaterial found by the `where` argument doesn't exist, create a new ClassMaterial with this data.
     */
    create: XOR<ClassMaterialCreateInput, ClassMaterialUncheckedCreateInput>
    /**
     * In case the ClassMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassMaterialUpdateInput, ClassMaterialUncheckedUpdateInput>
  }

  /**
   * ClassMaterial delete
   */
  export type ClassMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
    /**
     * Filter which ClassMaterial to delete.
     */
    where: ClassMaterialWhereUniqueInput
  }

  /**
   * ClassMaterial deleteMany
   */
  export type ClassMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassMaterials to delete
     */
    where?: ClassMaterialWhereInput
    /**
     * Limit how many ClassMaterials to delete.
     */
    limit?: number
  }

  /**
   * ClassMaterial without action
   */
  export type ClassMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMaterial
     */
    select?: ClassMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMaterial
     */
    omit?: ClassMaterialOmit<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    totalPoints: number | null
    submissionCount: number | null
    score: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    totalPoints: number | null
    submissionCount: number | null
    score: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    classId: string | null
    materialId: string | null
    title: string | null
    dueDate: string | null
    totalPoints: number | null
    status: string | null
    submissionCount: number | null
    score: number | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    classId: string | null
    materialId: string | null
    title: string | null
    dueDate: string | null
    totalPoints: number | null
    status: string | null
    submissionCount: number | null
    score: number | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    classId: number
    materialId: number
    title: number
    dueDate: number
    totalPoints: number
    status: number
    submissionCount: number
    score: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    totalPoints?: true
    submissionCount?: true
    score?: true
  }

  export type AssignmentSumAggregateInputType = {
    totalPoints?: true
    submissionCount?: true
    score?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    classId?: true
    materialId?: true
    title?: true
    dueDate?: true
    totalPoints?: true
    status?: true
    submissionCount?: true
    score?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    classId?: true
    materialId?: true
    title?: true
    dueDate?: true
    totalPoints?: true
    status?: true
    submissionCount?: true
    score?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    classId?: true
    materialId?: true
    title?: true
    dueDate?: true
    totalPoints?: true
    status?: true
    submissionCount?: true
    score?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    classId: string
    materialId: string | null
    title: string
    dueDate: string
    totalPoints: number
    status: string
    submissionCount: number
    score: number | null
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    materialId?: boolean
    title?: boolean
    dueDate?: boolean
    totalPoints?: boolean
    status?: boolean
    submissionCount?: boolean
    score?: boolean
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    materialId?: boolean
    title?: boolean
    dueDate?: boolean
    totalPoints?: boolean
    status?: boolean
    submissionCount?: boolean
    score?: boolean
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    materialId?: boolean
    title?: boolean
    dueDate?: boolean
    totalPoints?: boolean
    status?: boolean
    submissionCount?: boolean
    score?: boolean
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    classId?: boolean
    materialId?: boolean
    title?: boolean
    dueDate?: boolean
    totalPoints?: boolean
    status?: boolean
    submissionCount?: boolean
    score?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "materialId" | "title" | "dueDate" | "totalPoints" | "status" | "submissionCount" | "score", ExtArgs["result"]["assignment"]>

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      classId: string
      materialId: string | null
      title: string
      dueDate: string
      totalPoints: number
      status: string
      submissionCount: number
      score: number | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly classId: FieldRef<"Assignment", 'String'>
    readonly materialId: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'String'>
    readonly totalPoints: FieldRef<"Assignment", 'Int'>
    readonly status: FieldRef<"Assignment", 'String'>
    readonly submissionCount: FieldRef<"Assignment", 'Int'>
    readonly score: FieldRef<"Assignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
  }


  /**
   * Model AssignmentResult
   */

  export type AggregateAssignmentResult = {
    _count: AssignmentResultCountAggregateOutputType | null
    _avg: AssignmentResultAvgAggregateOutputType | null
    _sum: AssignmentResultSumAggregateOutputType | null
    _min: AssignmentResultMinAggregateOutputType | null
    _max: AssignmentResultMaxAggregateOutputType | null
  }

  export type AssignmentResultAvgAggregateOutputType = {
    score: number | null
    totalPoints: number | null
  }

  export type AssignmentResultSumAggregateOutputType = {
    score: number | null
    totalPoints: number | null
  }

  export type AssignmentResultMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    studentId: string | null
    studentName: string | null
    score: number | null
    totalPoints: number | null
    answers: string | null
    status: string | null
    submittedAt: Date | null
  }

  export type AssignmentResultMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    studentId: string | null
    studentName: string | null
    score: number | null
    totalPoints: number | null
    answers: string | null
    status: string | null
    submittedAt: Date | null
  }

  export type AssignmentResultCountAggregateOutputType = {
    id: number
    assignmentId: number
    studentId: number
    studentName: number
    score: number
    totalPoints: number
    answers: number
    status: number
    submittedAt: number
    _all: number
  }


  export type AssignmentResultAvgAggregateInputType = {
    score?: true
    totalPoints?: true
  }

  export type AssignmentResultSumAggregateInputType = {
    score?: true
    totalPoints?: true
  }

  export type AssignmentResultMinAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    studentName?: true
    score?: true
    totalPoints?: true
    answers?: true
    status?: true
    submittedAt?: true
  }

  export type AssignmentResultMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    studentName?: true
    score?: true
    totalPoints?: true
    answers?: true
    status?: true
    submittedAt?: true
  }

  export type AssignmentResultCountAggregateInputType = {
    id?: true
    assignmentId?: true
    studentId?: true
    studentName?: true
    score?: true
    totalPoints?: true
    answers?: true
    status?: true
    submittedAt?: true
    _all?: true
  }

  export type AssignmentResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentResult to aggregate.
     */
    where?: AssignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentResults to fetch.
     */
    orderBy?: AssignmentResultOrderByWithRelationInput | AssignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentResults
    **/
    _count?: true | AssignmentResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentResultMaxAggregateInputType
  }

  export type GetAssignmentResultAggregateType<T extends AssignmentResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentResult[P]>
      : GetScalarType<T[P], AggregateAssignmentResult[P]>
  }




  export type AssignmentResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentResultWhereInput
    orderBy?: AssignmentResultOrderByWithAggregationInput | AssignmentResultOrderByWithAggregationInput[]
    by: AssignmentResultScalarFieldEnum[] | AssignmentResultScalarFieldEnum
    having?: AssignmentResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentResultCountAggregateInputType | true
    _avg?: AssignmentResultAvgAggregateInputType
    _sum?: AssignmentResultSumAggregateInputType
    _min?: AssignmentResultMinAggregateInputType
    _max?: AssignmentResultMaxAggregateInputType
  }

  export type AssignmentResultGroupByOutputType = {
    id: string
    assignmentId: string
    studentId: string
    studentName: string | null
    score: number
    totalPoints: number
    answers: string
    status: string
    submittedAt: Date
    _count: AssignmentResultCountAggregateOutputType | null
    _avg: AssignmentResultAvgAggregateOutputType | null
    _sum: AssignmentResultSumAggregateOutputType | null
    _min: AssignmentResultMinAggregateOutputType | null
    _max: AssignmentResultMaxAggregateOutputType | null
  }

  type GetAssignmentResultGroupByPayload<T extends AssignmentResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentResultGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentResultGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    studentName?: boolean
    score?: boolean
    totalPoints?: boolean
    answers?: boolean
    status?: boolean
    submittedAt?: boolean
  }, ExtArgs["result"]["assignmentResult"]>

  export type AssignmentResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    studentName?: boolean
    score?: boolean
    totalPoints?: boolean
    answers?: boolean
    status?: boolean
    submittedAt?: boolean
  }, ExtArgs["result"]["assignmentResult"]>

  export type AssignmentResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    studentName?: boolean
    score?: boolean
    totalPoints?: boolean
    answers?: boolean
    status?: boolean
    submittedAt?: boolean
  }, ExtArgs["result"]["assignmentResult"]>

  export type AssignmentResultSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    studentId?: boolean
    studentName?: boolean
    score?: boolean
    totalPoints?: boolean
    answers?: boolean
    status?: boolean
    submittedAt?: boolean
  }

  export type AssignmentResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "studentId" | "studentName" | "score" | "totalPoints" | "answers" | "status" | "submittedAt", ExtArgs["result"]["assignmentResult"]>

  export type $AssignmentResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentResult"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      studentId: string
      studentName: string | null
      score: number
      totalPoints: number
      answers: string
      status: string
      submittedAt: Date
    }, ExtArgs["result"]["assignmentResult"]>
    composites: {}
  }

  type AssignmentResultGetPayload<S extends boolean | null | undefined | AssignmentResultDefaultArgs> = $Result.GetResult<Prisma.$AssignmentResultPayload, S>

  type AssignmentResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentResultCountAggregateInputType | true
    }

  export interface AssignmentResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentResult'], meta: { name: 'AssignmentResult' } }
    /**
     * Find zero or one AssignmentResult that matches the filter.
     * @param {AssignmentResultFindUniqueArgs} args - Arguments to find a AssignmentResult
     * @example
     * // Get one AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentResultFindUniqueArgs>(args: SelectSubset<T, AssignmentResultFindUniqueArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentResultFindUniqueOrThrowArgs} args - Arguments to find a AssignmentResult
     * @example
     * // Get one AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultFindFirstArgs} args - Arguments to find a AssignmentResult
     * @example
     * // Get one AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentResultFindFirstArgs>(args?: SelectSubset<T, AssignmentResultFindFirstArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultFindFirstOrThrowArgs} args - Arguments to find a AssignmentResult
     * @example
     * // Get one AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentResults
     * const assignmentResults = await prisma.assignmentResult.findMany()
     * 
     * // Get first 10 AssignmentResults
     * const assignmentResults = await prisma.assignmentResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentResultWithIdOnly = await prisma.assignmentResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentResultFindManyArgs>(args?: SelectSubset<T, AssignmentResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentResult.
     * @param {AssignmentResultCreateArgs} args - Arguments to create a AssignmentResult.
     * @example
     * // Create one AssignmentResult
     * const AssignmentResult = await prisma.assignmentResult.create({
     *   data: {
     *     // ... data to create a AssignmentResult
     *   }
     * })
     * 
     */
    create<T extends AssignmentResultCreateArgs>(args: SelectSubset<T, AssignmentResultCreateArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentResults.
     * @param {AssignmentResultCreateManyArgs} args - Arguments to create many AssignmentResults.
     * @example
     * // Create many AssignmentResults
     * const assignmentResult = await prisma.assignmentResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentResultCreateManyArgs>(args?: SelectSubset<T, AssignmentResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentResults and returns the data saved in the database.
     * @param {AssignmentResultCreateManyAndReturnArgs} args - Arguments to create many AssignmentResults.
     * @example
     * // Create many AssignmentResults
     * const assignmentResult = await prisma.assignmentResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentResults and only return the `id`
     * const assignmentResultWithIdOnly = await prisma.assignmentResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentResult.
     * @param {AssignmentResultDeleteArgs} args - Arguments to delete one AssignmentResult.
     * @example
     * // Delete one AssignmentResult
     * const AssignmentResult = await prisma.assignmentResult.delete({
     *   where: {
     *     // ... filter to delete one AssignmentResult
     *   }
     * })
     * 
     */
    delete<T extends AssignmentResultDeleteArgs>(args: SelectSubset<T, AssignmentResultDeleteArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentResult.
     * @param {AssignmentResultUpdateArgs} args - Arguments to update one AssignmentResult.
     * @example
     * // Update one AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentResultUpdateArgs>(args: SelectSubset<T, AssignmentResultUpdateArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentResults.
     * @param {AssignmentResultDeleteManyArgs} args - Arguments to filter AssignmentResults to delete.
     * @example
     * // Delete a few AssignmentResults
     * const { count } = await prisma.assignmentResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentResultDeleteManyArgs>(args?: SelectSubset<T, AssignmentResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentResults
     * const assignmentResult = await prisma.assignmentResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentResultUpdateManyArgs>(args: SelectSubset<T, AssignmentResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentResults and returns the data updated in the database.
     * @param {AssignmentResultUpdateManyAndReturnArgs} args - Arguments to update many AssignmentResults.
     * @example
     * // Update many AssignmentResults
     * const assignmentResult = await prisma.assignmentResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentResults and only return the `id`
     * const assignmentResultWithIdOnly = await prisma.assignmentResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentResult.
     * @param {AssignmentResultUpsertArgs} args - Arguments to update or create a AssignmentResult.
     * @example
     * // Update or create a AssignmentResult
     * const assignmentResult = await prisma.assignmentResult.upsert({
     *   create: {
     *     // ... data to create a AssignmentResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentResult we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentResultUpsertArgs>(args: SelectSubset<T, AssignmentResultUpsertArgs<ExtArgs>>): Prisma__AssignmentResultClient<$Result.GetResult<Prisma.$AssignmentResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultCountArgs} args - Arguments to filter AssignmentResults to count.
     * @example
     * // Count the number of AssignmentResults
     * const count = await prisma.assignmentResult.count({
     *   where: {
     *     // ... the filter for the AssignmentResults we want to count
     *   }
     * })
    **/
    count<T extends AssignmentResultCountArgs>(
      args?: Subset<T, AssignmentResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentResultAggregateArgs>(args: Subset<T, AssignmentResultAggregateArgs>): Prisma.PrismaPromise<GetAssignmentResultAggregateType<T>>

    /**
     * Group by AssignmentResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentResultGroupByArgs} args - Group by arguments.
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
      T extends AssignmentResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentResultGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentResult model
   */
  readonly fields: AssignmentResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AssignmentResult model
   */
  interface AssignmentResultFieldRefs {
    readonly id: FieldRef<"AssignmentResult", 'String'>
    readonly assignmentId: FieldRef<"AssignmentResult", 'String'>
    readonly studentId: FieldRef<"AssignmentResult", 'String'>
    readonly studentName: FieldRef<"AssignmentResult", 'String'>
    readonly score: FieldRef<"AssignmentResult", 'Int'>
    readonly totalPoints: FieldRef<"AssignmentResult", 'Int'>
    readonly answers: FieldRef<"AssignmentResult", 'String'>
    readonly status: FieldRef<"AssignmentResult", 'String'>
    readonly submittedAt: FieldRef<"AssignmentResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentResult findUnique
   */
  export type AssignmentResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentResult to fetch.
     */
    where: AssignmentResultWhereUniqueInput
  }

  /**
   * AssignmentResult findUniqueOrThrow
   */
  export type AssignmentResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentResult to fetch.
     */
    where: AssignmentResultWhereUniqueInput
  }

  /**
   * AssignmentResult findFirst
   */
  export type AssignmentResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentResult to fetch.
     */
    where?: AssignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentResults to fetch.
     */
    orderBy?: AssignmentResultOrderByWithRelationInput | AssignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentResults.
     */
    cursor?: AssignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentResults.
     */
    distinct?: AssignmentResultScalarFieldEnum | AssignmentResultScalarFieldEnum[]
  }

  /**
   * AssignmentResult findFirstOrThrow
   */
  export type AssignmentResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentResult to fetch.
     */
    where?: AssignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentResults to fetch.
     */
    orderBy?: AssignmentResultOrderByWithRelationInput | AssignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentResults.
     */
    cursor?: AssignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentResults.
     */
    distinct?: AssignmentResultScalarFieldEnum | AssignmentResultScalarFieldEnum[]
  }

  /**
   * AssignmentResult findMany
   */
  export type AssignmentResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentResults to fetch.
     */
    where?: AssignmentResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentResults to fetch.
     */
    orderBy?: AssignmentResultOrderByWithRelationInput | AssignmentResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentResults.
     */
    cursor?: AssignmentResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentResults.
     */
    distinct?: AssignmentResultScalarFieldEnum | AssignmentResultScalarFieldEnum[]
  }

  /**
   * AssignmentResult create
   */
  export type AssignmentResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * The data needed to create a AssignmentResult.
     */
    data: XOR<AssignmentResultCreateInput, AssignmentResultUncheckedCreateInput>
  }

  /**
   * AssignmentResult createMany
   */
  export type AssignmentResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentResults.
     */
    data: AssignmentResultCreateManyInput | AssignmentResultCreateManyInput[]
  }

  /**
   * AssignmentResult createManyAndReturn
   */
  export type AssignmentResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentResults.
     */
    data: AssignmentResultCreateManyInput | AssignmentResultCreateManyInput[]
  }

  /**
   * AssignmentResult update
   */
  export type AssignmentResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * The data needed to update a AssignmentResult.
     */
    data: XOR<AssignmentResultUpdateInput, AssignmentResultUncheckedUpdateInput>
    /**
     * Choose, which AssignmentResult to update.
     */
    where: AssignmentResultWhereUniqueInput
  }

  /**
   * AssignmentResult updateMany
   */
  export type AssignmentResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentResults.
     */
    data: XOR<AssignmentResultUpdateManyMutationInput, AssignmentResultUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentResults to update
     */
    where?: AssignmentResultWhereInput
    /**
     * Limit how many AssignmentResults to update.
     */
    limit?: number
  }

  /**
   * AssignmentResult updateManyAndReturn
   */
  export type AssignmentResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentResults.
     */
    data: XOR<AssignmentResultUpdateManyMutationInput, AssignmentResultUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentResults to update
     */
    where?: AssignmentResultWhereInput
    /**
     * Limit how many AssignmentResults to update.
     */
    limit?: number
  }

  /**
   * AssignmentResult upsert
   */
  export type AssignmentResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * The filter to search for the AssignmentResult to update in case it exists.
     */
    where: AssignmentResultWhereUniqueInput
    /**
     * In case the AssignmentResult found by the `where` argument doesn't exist, create a new AssignmentResult with this data.
     */
    create: XOR<AssignmentResultCreateInput, AssignmentResultUncheckedCreateInput>
    /**
     * In case the AssignmentResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentResultUpdateInput, AssignmentResultUncheckedUpdateInput>
  }

  /**
   * AssignmentResult delete
   */
  export type AssignmentResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
    /**
     * Filter which AssignmentResult to delete.
     */
    where: AssignmentResultWhereUniqueInput
  }

  /**
   * AssignmentResult deleteMany
   */
  export type AssignmentResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentResults to delete
     */
    where?: AssignmentResultWhereInput
    /**
     * Limit how many AssignmentResults to delete.
     */
    limit?: number
  }

  /**
   * AssignmentResult without action
   */
  export type AssignmentResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentResult
     */
    select?: AssignmentResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentResult
     */
    omit?: AssignmentResultOmit<ExtArgs> | null
  }


  /**
   * Model AssignmentQuiz
   */

  export type AggregateAssignmentQuiz = {
    _count: AssignmentQuizCountAggregateOutputType | null
    _min: AssignmentQuizMinAggregateOutputType | null
    _max: AssignmentQuizMaxAggregateOutputType | null
  }

  export type AssignmentQuizMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    questions: string | null
  }

  export type AssignmentQuizMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    questions: string | null
  }

  export type AssignmentQuizCountAggregateOutputType = {
    id: number
    assignmentId: number
    questions: number
    _all: number
  }


  export type AssignmentQuizMinAggregateInputType = {
    id?: true
    assignmentId?: true
    questions?: true
  }

  export type AssignmentQuizMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    questions?: true
  }

  export type AssignmentQuizCountAggregateInputType = {
    id?: true
    assignmentId?: true
    questions?: true
    _all?: true
  }

  export type AssignmentQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentQuiz to aggregate.
     */
    where?: AssignmentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentQuizs to fetch.
     */
    orderBy?: AssignmentQuizOrderByWithRelationInput | AssignmentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentQuizs
    **/
    _count?: true | AssignmentQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentQuizMaxAggregateInputType
  }

  export type GetAssignmentQuizAggregateType<T extends AssignmentQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentQuiz[P]>
      : GetScalarType<T[P], AggregateAssignmentQuiz[P]>
  }




  export type AssignmentQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentQuizWhereInput
    orderBy?: AssignmentQuizOrderByWithAggregationInput | AssignmentQuizOrderByWithAggregationInput[]
    by: AssignmentQuizScalarFieldEnum[] | AssignmentQuizScalarFieldEnum
    having?: AssignmentQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentQuizCountAggregateInputType | true
    _min?: AssignmentQuizMinAggregateInputType
    _max?: AssignmentQuizMaxAggregateInputType
  }

  export type AssignmentQuizGroupByOutputType = {
    id: string
    assignmentId: string
    questions: string
    _count: AssignmentQuizCountAggregateOutputType | null
    _min: AssignmentQuizMinAggregateOutputType | null
    _max: AssignmentQuizMaxAggregateOutputType | null
  }

  type GetAssignmentQuizGroupByPayload<T extends AssignmentQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentQuizGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentQuizGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["assignmentQuiz"]>

  export type AssignmentQuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["assignmentQuiz"]>

  export type AssignmentQuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["assignmentQuiz"]>

  export type AssignmentQuizSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    questions?: boolean
  }

  export type AssignmentQuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "questions", ExtArgs["result"]["assignmentQuiz"]>

  export type $AssignmentQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentQuiz"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      questions: string
    }, ExtArgs["result"]["assignmentQuiz"]>
    composites: {}
  }

  type AssignmentQuizGetPayload<S extends boolean | null | undefined | AssignmentQuizDefaultArgs> = $Result.GetResult<Prisma.$AssignmentQuizPayload, S>

  type AssignmentQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentQuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentQuizCountAggregateInputType | true
    }

  export interface AssignmentQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentQuiz'], meta: { name: 'AssignmentQuiz' } }
    /**
     * Find zero or one AssignmentQuiz that matches the filter.
     * @param {AssignmentQuizFindUniqueArgs} args - Arguments to find a AssignmentQuiz
     * @example
     * // Get one AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentQuizFindUniqueArgs>(args: SelectSubset<T, AssignmentQuizFindUniqueArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentQuiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentQuizFindUniqueOrThrowArgs} args - Arguments to find a AssignmentQuiz
     * @example
     * // Get one AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentQuizFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentQuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizFindFirstArgs} args - Arguments to find a AssignmentQuiz
     * @example
     * // Get one AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentQuizFindFirstArgs>(args?: SelectSubset<T, AssignmentQuizFindFirstArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizFindFirstOrThrowArgs} args - Arguments to find a AssignmentQuiz
     * @example
     * // Get one AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentQuizFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentQuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentQuizs
     * const assignmentQuizs = await prisma.assignmentQuiz.findMany()
     * 
     * // Get first 10 AssignmentQuizs
     * const assignmentQuizs = await prisma.assignmentQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentQuizWithIdOnly = await prisma.assignmentQuiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentQuizFindManyArgs>(args?: SelectSubset<T, AssignmentQuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentQuiz.
     * @param {AssignmentQuizCreateArgs} args - Arguments to create a AssignmentQuiz.
     * @example
     * // Create one AssignmentQuiz
     * const AssignmentQuiz = await prisma.assignmentQuiz.create({
     *   data: {
     *     // ... data to create a AssignmentQuiz
     *   }
     * })
     * 
     */
    create<T extends AssignmentQuizCreateArgs>(args: SelectSubset<T, AssignmentQuizCreateArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentQuizs.
     * @param {AssignmentQuizCreateManyArgs} args - Arguments to create many AssignmentQuizs.
     * @example
     * // Create many AssignmentQuizs
     * const assignmentQuiz = await prisma.assignmentQuiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentQuizCreateManyArgs>(args?: SelectSubset<T, AssignmentQuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentQuizs and returns the data saved in the database.
     * @param {AssignmentQuizCreateManyAndReturnArgs} args - Arguments to create many AssignmentQuizs.
     * @example
     * // Create many AssignmentQuizs
     * const assignmentQuiz = await prisma.assignmentQuiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentQuizs and only return the `id`
     * const assignmentQuizWithIdOnly = await prisma.assignmentQuiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentQuizCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentQuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentQuiz.
     * @param {AssignmentQuizDeleteArgs} args - Arguments to delete one AssignmentQuiz.
     * @example
     * // Delete one AssignmentQuiz
     * const AssignmentQuiz = await prisma.assignmentQuiz.delete({
     *   where: {
     *     // ... filter to delete one AssignmentQuiz
     *   }
     * })
     * 
     */
    delete<T extends AssignmentQuizDeleteArgs>(args: SelectSubset<T, AssignmentQuizDeleteArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentQuiz.
     * @param {AssignmentQuizUpdateArgs} args - Arguments to update one AssignmentQuiz.
     * @example
     * // Update one AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentQuizUpdateArgs>(args: SelectSubset<T, AssignmentQuizUpdateArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentQuizs.
     * @param {AssignmentQuizDeleteManyArgs} args - Arguments to filter AssignmentQuizs to delete.
     * @example
     * // Delete a few AssignmentQuizs
     * const { count } = await prisma.assignmentQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentQuizDeleteManyArgs>(args?: SelectSubset<T, AssignmentQuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentQuizs
     * const assignmentQuiz = await prisma.assignmentQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentQuizUpdateManyArgs>(args: SelectSubset<T, AssignmentQuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentQuizs and returns the data updated in the database.
     * @param {AssignmentQuizUpdateManyAndReturnArgs} args - Arguments to update many AssignmentQuizs.
     * @example
     * // Update many AssignmentQuizs
     * const assignmentQuiz = await prisma.assignmentQuiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentQuizs and only return the `id`
     * const assignmentQuizWithIdOnly = await prisma.assignmentQuiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentQuizUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentQuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentQuiz.
     * @param {AssignmentQuizUpsertArgs} args - Arguments to update or create a AssignmentQuiz.
     * @example
     * // Update or create a AssignmentQuiz
     * const assignmentQuiz = await prisma.assignmentQuiz.upsert({
     *   create: {
     *     // ... data to create a AssignmentQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentQuiz we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentQuizUpsertArgs>(args: SelectSubset<T, AssignmentQuizUpsertArgs<ExtArgs>>): Prisma__AssignmentQuizClient<$Result.GetResult<Prisma.$AssignmentQuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizCountArgs} args - Arguments to filter AssignmentQuizs to count.
     * @example
     * // Count the number of AssignmentQuizs
     * const count = await prisma.assignmentQuiz.count({
     *   where: {
     *     // ... the filter for the AssignmentQuizs we want to count
     *   }
     * })
    **/
    count<T extends AssignmentQuizCountArgs>(
      args?: Subset<T, AssignmentQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentQuizAggregateArgs>(args: Subset<T, AssignmentQuizAggregateArgs>): Prisma.PrismaPromise<GetAssignmentQuizAggregateType<T>>

    /**
     * Group by AssignmentQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentQuizGroupByArgs} args - Group by arguments.
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
      T extends AssignmentQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentQuizGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentQuiz model
   */
  readonly fields: AssignmentQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AssignmentQuiz model
   */
  interface AssignmentQuizFieldRefs {
    readonly id: FieldRef<"AssignmentQuiz", 'String'>
    readonly assignmentId: FieldRef<"AssignmentQuiz", 'String'>
    readonly questions: FieldRef<"AssignmentQuiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentQuiz findUnique
   */
  export type AssignmentQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentQuiz to fetch.
     */
    where: AssignmentQuizWhereUniqueInput
  }

  /**
   * AssignmentQuiz findUniqueOrThrow
   */
  export type AssignmentQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentQuiz to fetch.
     */
    where: AssignmentQuizWhereUniqueInput
  }

  /**
   * AssignmentQuiz findFirst
   */
  export type AssignmentQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentQuiz to fetch.
     */
    where?: AssignmentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentQuizs to fetch.
     */
    orderBy?: AssignmentQuizOrderByWithRelationInput | AssignmentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentQuizs.
     */
    cursor?: AssignmentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentQuizs.
     */
    distinct?: AssignmentQuizScalarFieldEnum | AssignmentQuizScalarFieldEnum[]
  }

  /**
   * AssignmentQuiz findFirstOrThrow
   */
  export type AssignmentQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentQuiz to fetch.
     */
    where?: AssignmentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentQuizs to fetch.
     */
    orderBy?: AssignmentQuizOrderByWithRelationInput | AssignmentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentQuizs.
     */
    cursor?: AssignmentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentQuizs.
     */
    distinct?: AssignmentQuizScalarFieldEnum | AssignmentQuizScalarFieldEnum[]
  }

  /**
   * AssignmentQuiz findMany
   */
  export type AssignmentQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter, which AssignmentQuizs to fetch.
     */
    where?: AssignmentQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentQuizs to fetch.
     */
    orderBy?: AssignmentQuizOrderByWithRelationInput | AssignmentQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentQuizs.
     */
    cursor?: AssignmentQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentQuizs.
     */
    distinct?: AssignmentQuizScalarFieldEnum | AssignmentQuizScalarFieldEnum[]
  }

  /**
   * AssignmentQuiz create
   */
  export type AssignmentQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * The data needed to create a AssignmentQuiz.
     */
    data: XOR<AssignmentQuizCreateInput, AssignmentQuizUncheckedCreateInput>
  }

  /**
   * AssignmentQuiz createMany
   */
  export type AssignmentQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentQuizs.
     */
    data: AssignmentQuizCreateManyInput | AssignmentQuizCreateManyInput[]
  }

  /**
   * AssignmentQuiz createManyAndReturn
   */
  export type AssignmentQuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentQuizs.
     */
    data: AssignmentQuizCreateManyInput | AssignmentQuizCreateManyInput[]
  }

  /**
   * AssignmentQuiz update
   */
  export type AssignmentQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * The data needed to update a AssignmentQuiz.
     */
    data: XOR<AssignmentQuizUpdateInput, AssignmentQuizUncheckedUpdateInput>
    /**
     * Choose, which AssignmentQuiz to update.
     */
    where: AssignmentQuizWhereUniqueInput
  }

  /**
   * AssignmentQuiz updateMany
   */
  export type AssignmentQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentQuizs.
     */
    data: XOR<AssignmentQuizUpdateManyMutationInput, AssignmentQuizUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentQuizs to update
     */
    where?: AssignmentQuizWhereInput
    /**
     * Limit how many AssignmentQuizs to update.
     */
    limit?: number
  }

  /**
   * AssignmentQuiz updateManyAndReturn
   */
  export type AssignmentQuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentQuizs.
     */
    data: XOR<AssignmentQuizUpdateManyMutationInput, AssignmentQuizUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentQuizs to update
     */
    where?: AssignmentQuizWhereInput
    /**
     * Limit how many AssignmentQuizs to update.
     */
    limit?: number
  }

  /**
   * AssignmentQuiz upsert
   */
  export type AssignmentQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * The filter to search for the AssignmentQuiz to update in case it exists.
     */
    where: AssignmentQuizWhereUniqueInput
    /**
     * In case the AssignmentQuiz found by the `where` argument doesn't exist, create a new AssignmentQuiz with this data.
     */
    create: XOR<AssignmentQuizCreateInput, AssignmentQuizUncheckedCreateInput>
    /**
     * In case the AssignmentQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentQuizUpdateInput, AssignmentQuizUncheckedUpdateInput>
  }

  /**
   * AssignmentQuiz delete
   */
  export type AssignmentQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
    /**
     * Filter which AssignmentQuiz to delete.
     */
    where: AssignmentQuizWhereUniqueInput
  }

  /**
   * AssignmentQuiz deleteMany
   */
  export type AssignmentQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentQuizs to delete
     */
    where?: AssignmentQuizWhereInput
    /**
     * Limit how many AssignmentQuizs to delete.
     */
    limit?: number
  }

  /**
   * AssignmentQuiz without action
   */
  export type AssignmentQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentQuiz
     */
    select?: AssignmentQuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentQuiz
     */
    omit?: AssignmentQuizOmit<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    questionCount: number | null
    xpReward: number | null
  }

  export type QuizSumAggregateOutputType = {
    questionCount: number | null
    xpReward: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    subject: string | null
    title: string | null
    questionCount: number | null
    xpReward: number | null
    badgeColor: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    title: string | null
    questionCount: number | null
    xpReward: number | null
    badgeColor: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    subject: number
    title: number
    questionCount: number
    xpReward: number
    badgeColor: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    questionCount?: true
    xpReward?: true
  }

  export type QuizSumAggregateInputType = {
    questionCount?: true
    xpReward?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    subject?: true
    title?: true
    questionCount?: true
    xpReward?: true
    badgeColor?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    subject?: true
    title?: true
    questionCount?: true
    xpReward?: true
    badgeColor?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    subject?: true
    title?: true
    questionCount?: true
    xpReward?: true
    badgeColor?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    subject: string
    title: string
    questionCount: number
    xpReward: number
    badgeColor: string
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    title?: boolean
    questionCount?: boolean
    xpReward?: boolean
    badgeColor?: boolean
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    title?: boolean
    questionCount?: boolean
    xpReward?: boolean
    badgeColor?: boolean
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    title?: boolean
    questionCount?: boolean
    xpReward?: boolean
    badgeColor?: boolean
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    subject?: boolean
    title?: boolean
    questionCount?: boolean
    xpReward?: boolean
    badgeColor?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "title" | "questionCount" | "xpReward" | "badgeColor", ExtArgs["result"]["quiz"]>

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      title: string
      questionCount: number
      xpReward: number
      badgeColor: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly subject: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly questionCount: FieldRef<"Quiz", 'Int'>
    readonly xpReward: FieldRef<"Quiz", 'Int'>
    readonly badgeColor: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
  }


  /**
   * Model QuizQuestionSet
   */

  export type AggregateQuizQuestionSet = {
    _count: QuizQuestionSetCountAggregateOutputType | null
    _min: QuizQuestionSetMinAggregateOutputType | null
    _max: QuizQuestionSetMaxAggregateOutputType | null
  }

  export type QuizQuestionSetMinAggregateOutputType = {
    id: string | null
    quizId: string | null
    questions: string | null
  }

  export type QuizQuestionSetMaxAggregateOutputType = {
    id: string | null
    quizId: string | null
    questions: string | null
  }

  export type QuizQuestionSetCountAggregateOutputType = {
    id: number
    quizId: number
    questions: number
    _all: number
  }


  export type QuizQuestionSetMinAggregateInputType = {
    id?: true
    quizId?: true
    questions?: true
  }

  export type QuizQuestionSetMaxAggregateInputType = {
    id?: true
    quizId?: true
    questions?: true
  }

  export type QuizQuestionSetCountAggregateInputType = {
    id?: true
    quizId?: true
    questions?: true
    _all?: true
  }

  export type QuizQuestionSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestionSet to aggregate.
     */
    where?: QuizQuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionSets to fetch.
     */
    orderBy?: QuizQuestionSetOrderByWithRelationInput | QuizQuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestionSets
    **/
    _count?: true | QuizQuestionSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionSetMaxAggregateInputType
  }

  export type GetQuizQuestionSetAggregateType<T extends QuizQuestionSetAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestionSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestionSet[P]>
      : GetScalarType<T[P], AggregateQuizQuestionSet[P]>
  }




  export type QuizQuestionSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionSetWhereInput
    orderBy?: QuizQuestionSetOrderByWithAggregationInput | QuizQuestionSetOrderByWithAggregationInput[]
    by: QuizQuestionSetScalarFieldEnum[] | QuizQuestionSetScalarFieldEnum
    having?: QuizQuestionSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionSetCountAggregateInputType | true
    _min?: QuizQuestionSetMinAggregateInputType
    _max?: QuizQuestionSetMaxAggregateInputType
  }

  export type QuizQuestionSetGroupByOutputType = {
    id: string
    quizId: string
    questions: string
    _count: QuizQuestionSetCountAggregateOutputType | null
    _min: QuizQuestionSetMinAggregateOutputType | null
    _max: QuizQuestionSetMaxAggregateOutputType | null
  }

  type GetQuizQuestionSetGroupByPayload<T extends QuizQuestionSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionSetGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionSetGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["quizQuestionSet"]>

  export type QuizQuestionSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["quizQuestionSet"]>

  export type QuizQuestionSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizId?: boolean
    questions?: boolean
  }, ExtArgs["result"]["quizQuestionSet"]>

  export type QuizQuestionSetSelectScalar = {
    id?: boolean
    quizId?: boolean
    questions?: boolean
  }

  export type QuizQuestionSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizId" | "questions", ExtArgs["result"]["quizQuestionSet"]>

  export type $QuizQuestionSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestionSet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quizId: string
      questions: string
    }, ExtArgs["result"]["quizQuestionSet"]>
    composites: {}
  }

  type QuizQuestionSetGetPayload<S extends boolean | null | undefined | QuizQuestionSetDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionSetPayload, S>

  type QuizQuestionSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionSetCountAggregateInputType | true
    }

  export interface QuizQuestionSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestionSet'], meta: { name: 'QuizQuestionSet' } }
    /**
     * Find zero or one QuizQuestionSet that matches the filter.
     * @param {QuizQuestionSetFindUniqueArgs} args - Arguments to find a QuizQuestionSet
     * @example
     * // Get one QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionSetFindUniqueArgs>(args: SelectSubset<T, QuizQuestionSetFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestionSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionSetFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestionSet
     * @example
     * // Get one QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionSetFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestionSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetFindFirstArgs} args - Arguments to find a QuizQuestionSet
     * @example
     * // Get one QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionSetFindFirstArgs>(args?: SelectSubset<T, QuizQuestionSetFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestionSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetFindFirstOrThrowArgs} args - Arguments to find a QuizQuestionSet
     * @example
     * // Get one QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionSetFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestionSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestionSets
     * const quizQuestionSets = await prisma.quizQuestionSet.findMany()
     * 
     * // Get first 10 QuizQuestionSets
     * const quizQuestionSets = await prisma.quizQuestionSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionSetWithIdOnly = await prisma.quizQuestionSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionSetFindManyArgs>(args?: SelectSubset<T, QuizQuestionSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestionSet.
     * @param {QuizQuestionSetCreateArgs} args - Arguments to create a QuizQuestionSet.
     * @example
     * // Create one QuizQuestionSet
     * const QuizQuestionSet = await prisma.quizQuestionSet.create({
     *   data: {
     *     // ... data to create a QuizQuestionSet
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionSetCreateArgs>(args: SelectSubset<T, QuizQuestionSetCreateArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestionSets.
     * @param {QuizQuestionSetCreateManyArgs} args - Arguments to create many QuizQuestionSets.
     * @example
     * // Create many QuizQuestionSets
     * const quizQuestionSet = await prisma.quizQuestionSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionSetCreateManyArgs>(args?: SelectSubset<T, QuizQuestionSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestionSets and returns the data saved in the database.
     * @param {QuizQuestionSetCreateManyAndReturnArgs} args - Arguments to create many QuizQuestionSets.
     * @example
     * // Create many QuizQuestionSets
     * const quizQuestionSet = await prisma.quizQuestionSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestionSets and only return the `id`
     * const quizQuestionSetWithIdOnly = await prisma.quizQuestionSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionSetCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestionSet.
     * @param {QuizQuestionSetDeleteArgs} args - Arguments to delete one QuizQuestionSet.
     * @example
     * // Delete one QuizQuestionSet
     * const QuizQuestionSet = await prisma.quizQuestionSet.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestionSet
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionSetDeleteArgs>(args: SelectSubset<T, QuizQuestionSetDeleteArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestionSet.
     * @param {QuizQuestionSetUpdateArgs} args - Arguments to update one QuizQuestionSet.
     * @example
     * // Update one QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionSetUpdateArgs>(args: SelectSubset<T, QuizQuestionSetUpdateArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestionSets.
     * @param {QuizQuestionSetDeleteManyArgs} args - Arguments to filter QuizQuestionSets to delete.
     * @example
     * // Delete a few QuizQuestionSets
     * const { count } = await prisma.quizQuestionSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionSetDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestionSets
     * const quizQuestionSet = await prisma.quizQuestionSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionSetUpdateManyArgs>(args: SelectSubset<T, QuizQuestionSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestionSets and returns the data updated in the database.
     * @param {QuizQuestionSetUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestionSets.
     * @example
     * // Update many QuizQuestionSets
     * const quizQuestionSet = await prisma.quizQuestionSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestionSets and only return the `id`
     * const quizQuestionSetWithIdOnly = await prisma.quizQuestionSet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizQuestionSetUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestionSet.
     * @param {QuizQuestionSetUpsertArgs} args - Arguments to update or create a QuizQuestionSet.
     * @example
     * // Update or create a QuizQuestionSet
     * const quizQuestionSet = await prisma.quizQuestionSet.upsert({
     *   create: {
     *     // ... data to create a QuizQuestionSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestionSet we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionSetUpsertArgs>(args: SelectSubset<T, QuizQuestionSetUpsertArgs<ExtArgs>>): Prisma__QuizQuestionSetClient<$Result.GetResult<Prisma.$QuizQuestionSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetCountArgs} args - Arguments to filter QuizQuestionSets to count.
     * @example
     * // Count the number of QuizQuestionSets
     * const count = await prisma.quizQuestionSet.count({
     *   where: {
     *     // ... the filter for the QuizQuestionSets we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionSetCountArgs>(
      args?: Subset<T, QuizQuestionSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionSetAggregateArgs>(args: Subset<T, QuizQuestionSetAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionSetAggregateType<T>>

    /**
     * Group by QuizQuestionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionSetGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionSetGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestionSet model
   */
  readonly fields: QuizQuestionSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestionSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QuizQuestionSet model
   */
  interface QuizQuestionSetFieldRefs {
    readonly id: FieldRef<"QuizQuestionSet", 'String'>
    readonly quizId: FieldRef<"QuizQuestionSet", 'String'>
    readonly questions: FieldRef<"QuizQuestionSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestionSet findUnique
   */
  export type QuizQuestionSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter, which QuizQuestionSet to fetch.
     */
    where: QuizQuestionSetWhereUniqueInput
  }

  /**
   * QuizQuestionSet findUniqueOrThrow
   */
  export type QuizQuestionSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter, which QuizQuestionSet to fetch.
     */
    where: QuizQuestionSetWhereUniqueInput
  }

  /**
   * QuizQuestionSet findFirst
   */
  export type QuizQuestionSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter, which QuizQuestionSet to fetch.
     */
    where?: QuizQuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionSets to fetch.
     */
    orderBy?: QuizQuestionSetOrderByWithRelationInput | QuizQuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestionSets.
     */
    cursor?: QuizQuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestionSets.
     */
    distinct?: QuizQuestionSetScalarFieldEnum | QuizQuestionSetScalarFieldEnum[]
  }

  /**
   * QuizQuestionSet findFirstOrThrow
   */
  export type QuizQuestionSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter, which QuizQuestionSet to fetch.
     */
    where?: QuizQuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionSets to fetch.
     */
    orderBy?: QuizQuestionSetOrderByWithRelationInput | QuizQuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestionSets.
     */
    cursor?: QuizQuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestionSets.
     */
    distinct?: QuizQuestionSetScalarFieldEnum | QuizQuestionSetScalarFieldEnum[]
  }

  /**
   * QuizQuestionSet findMany
   */
  export type QuizQuestionSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter, which QuizQuestionSets to fetch.
     */
    where?: QuizQuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionSets to fetch.
     */
    orderBy?: QuizQuestionSetOrderByWithRelationInput | QuizQuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestionSets.
     */
    cursor?: QuizQuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestionSets.
     */
    distinct?: QuizQuestionSetScalarFieldEnum | QuizQuestionSetScalarFieldEnum[]
  }

  /**
   * QuizQuestionSet create
   */
  export type QuizQuestionSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestionSet.
     */
    data: XOR<QuizQuestionSetCreateInput, QuizQuestionSetUncheckedCreateInput>
  }

  /**
   * QuizQuestionSet createMany
   */
  export type QuizQuestionSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestionSets.
     */
    data: QuizQuestionSetCreateManyInput | QuizQuestionSetCreateManyInput[]
  }

  /**
   * QuizQuestionSet createManyAndReturn
   */
  export type QuizQuestionSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestionSets.
     */
    data: QuizQuestionSetCreateManyInput | QuizQuestionSetCreateManyInput[]
  }

  /**
   * QuizQuestionSet update
   */
  export type QuizQuestionSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestionSet.
     */
    data: XOR<QuizQuestionSetUpdateInput, QuizQuestionSetUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestionSet to update.
     */
    where: QuizQuestionSetWhereUniqueInput
  }

  /**
   * QuizQuestionSet updateMany
   */
  export type QuizQuestionSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestionSets.
     */
    data: XOR<QuizQuestionSetUpdateManyMutationInput, QuizQuestionSetUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestionSets to update
     */
    where?: QuizQuestionSetWhereInput
    /**
     * Limit how many QuizQuestionSets to update.
     */
    limit?: number
  }

  /**
   * QuizQuestionSet updateManyAndReturn
   */
  export type QuizQuestionSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestionSets.
     */
    data: XOR<QuizQuestionSetUpdateManyMutationInput, QuizQuestionSetUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestionSets to update
     */
    where?: QuizQuestionSetWhereInput
    /**
     * Limit how many QuizQuestionSets to update.
     */
    limit?: number
  }

  /**
   * QuizQuestionSet upsert
   */
  export type QuizQuestionSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestionSet to update in case it exists.
     */
    where: QuizQuestionSetWhereUniqueInput
    /**
     * In case the QuizQuestionSet found by the `where` argument doesn't exist, create a new QuizQuestionSet with this data.
     */
    create: XOR<QuizQuestionSetCreateInput, QuizQuestionSetUncheckedCreateInput>
    /**
     * In case the QuizQuestionSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionSetUpdateInput, QuizQuestionSetUncheckedUpdateInput>
  }

  /**
   * QuizQuestionSet delete
   */
  export type QuizQuestionSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
    /**
     * Filter which QuizQuestionSet to delete.
     */
    where: QuizQuestionSetWhereUniqueInput
  }

  /**
   * QuizQuestionSet deleteMany
   */
  export type QuizQuestionSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestionSets to delete
     */
    where?: QuizQuestionSetWhereInput
    /**
     * Limit how many QuizQuestionSets to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestionSet without action
   */
  export type QuizQuestionSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionSet
     */
    select?: QuizQuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionSet
     */
    omit?: QuizQuestionSetOmit<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    starsReward: number | null
  }

  export type StorySumAggregateOutputType = {
    starsReward: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: string | null
    starsReward: number | null
    content: string | null
  }

  export type StoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    difficulty: string | null
    starsReward: number | null
    content: string | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    title: number
    difficulty: number
    starsReward: number
    content: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    starsReward?: true
  }

  export type StorySumAggregateInputType = {
    starsReward?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    starsReward?: true
    content?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    starsReward?: true
    content?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    title?: true
    difficulty?: true
    starsReward?: true
    content?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: string
    title: string
    difficulty: string
    starsReward: number
    content: string
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    difficulty?: boolean
    starsReward?: boolean
    content?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    difficulty?: boolean
    starsReward?: boolean
    content?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    difficulty?: boolean
    starsReward?: boolean
    content?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    title?: boolean
    difficulty?: boolean
    starsReward?: boolean
    content?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "difficulty" | "starsReward" | "content", ExtArgs["result"]["story"]>

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      difficulty: string
      starsReward: number
      content: string
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {StoryUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
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
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'String'>
    readonly title: FieldRef<"Story", 'String'>
    readonly difficulty: FieldRef<"Story", 'String'>
    readonly starsReward: FieldRef<"Story", 'Int'>
    readonly content: FieldRef<"Story", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story updateManyAndReturn
   */
  export type StoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
  }


  /**
   * Model WardrobeItem
   */

  export type AggregateWardrobeItem = {
    _count: WardrobeItemCountAggregateOutputType | null
    _avg: WardrobeItemAvgAggregateOutputType | null
    _sum: WardrobeItemSumAggregateOutputType | null
    _min: WardrobeItemMinAggregateOutputType | null
    _max: WardrobeItemMaxAggregateOutputType | null
  }

  export type WardrobeItemAvgAggregateOutputType = {
    lvl: number | null
  }

  export type WardrobeItemSumAggregateOutputType = {
    lvl: number | null
  }

  export type WardrobeItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    locked: boolean | null
    lvl: number | null
  }

  export type WardrobeItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    locked: boolean | null
    lvl: number | null
  }

  export type WardrobeItemCountAggregateOutputType = {
    id: number
    name: number
    image: number
    locked: number
    lvl: number
    _all: number
  }


  export type WardrobeItemAvgAggregateInputType = {
    lvl?: true
  }

  export type WardrobeItemSumAggregateInputType = {
    lvl?: true
  }

  export type WardrobeItemMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    locked?: true
    lvl?: true
  }

  export type WardrobeItemMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    locked?: true
    lvl?: true
  }

  export type WardrobeItemCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    locked?: true
    lvl?: true
    _all?: true
  }

  export type WardrobeItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardrobeItem to aggregate.
     */
    where?: WardrobeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardrobeItems to fetch.
     */
    orderBy?: WardrobeItemOrderByWithRelationInput | WardrobeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WardrobeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardrobeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardrobeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WardrobeItems
    **/
    _count?: true | WardrobeItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WardrobeItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WardrobeItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WardrobeItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WardrobeItemMaxAggregateInputType
  }

  export type GetWardrobeItemAggregateType<T extends WardrobeItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWardrobeItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWardrobeItem[P]>
      : GetScalarType<T[P], AggregateWardrobeItem[P]>
  }




  export type WardrobeItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardrobeItemWhereInput
    orderBy?: WardrobeItemOrderByWithAggregationInput | WardrobeItemOrderByWithAggregationInput[]
    by: WardrobeItemScalarFieldEnum[] | WardrobeItemScalarFieldEnum
    having?: WardrobeItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WardrobeItemCountAggregateInputType | true
    _avg?: WardrobeItemAvgAggregateInputType
    _sum?: WardrobeItemSumAggregateInputType
    _min?: WardrobeItemMinAggregateInputType
    _max?: WardrobeItemMaxAggregateInputType
  }

  export type WardrobeItemGroupByOutputType = {
    id: string
    name: string
    image: string
    locked: boolean
    lvl: number | null
    _count: WardrobeItemCountAggregateOutputType | null
    _avg: WardrobeItemAvgAggregateOutputType | null
    _sum: WardrobeItemSumAggregateOutputType | null
    _min: WardrobeItemMinAggregateOutputType | null
    _max: WardrobeItemMaxAggregateOutputType | null
  }

  type GetWardrobeItemGroupByPayload<T extends WardrobeItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WardrobeItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WardrobeItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WardrobeItemGroupByOutputType[P]>
            : GetScalarType<T[P], WardrobeItemGroupByOutputType[P]>
        }
      >
    >


  export type WardrobeItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    locked?: boolean
    lvl?: boolean
  }, ExtArgs["result"]["wardrobeItem"]>

  export type WardrobeItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    locked?: boolean
    lvl?: boolean
  }, ExtArgs["result"]["wardrobeItem"]>

  export type WardrobeItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    locked?: boolean
    lvl?: boolean
  }, ExtArgs["result"]["wardrobeItem"]>

  export type WardrobeItemSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    locked?: boolean
    lvl?: boolean
  }

  export type WardrobeItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "locked" | "lvl", ExtArgs["result"]["wardrobeItem"]>

  export type $WardrobeItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WardrobeItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
      locked: boolean
      lvl: number | null
    }, ExtArgs["result"]["wardrobeItem"]>
    composites: {}
  }

  type WardrobeItemGetPayload<S extends boolean | null | undefined | WardrobeItemDefaultArgs> = $Result.GetResult<Prisma.$WardrobeItemPayload, S>

  type WardrobeItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WardrobeItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WardrobeItemCountAggregateInputType | true
    }

  export interface WardrobeItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WardrobeItem'], meta: { name: 'WardrobeItem' } }
    /**
     * Find zero or one WardrobeItem that matches the filter.
     * @param {WardrobeItemFindUniqueArgs} args - Arguments to find a WardrobeItem
     * @example
     * // Get one WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardrobeItemFindUniqueArgs>(args: SelectSubset<T, WardrobeItemFindUniqueArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WardrobeItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WardrobeItemFindUniqueOrThrowArgs} args - Arguments to find a WardrobeItem
     * @example
     * // Get one WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardrobeItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WardrobeItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardrobeItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemFindFirstArgs} args - Arguments to find a WardrobeItem
     * @example
     * // Get one WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardrobeItemFindFirstArgs>(args?: SelectSubset<T, WardrobeItemFindFirstArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WardrobeItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemFindFirstOrThrowArgs} args - Arguments to find a WardrobeItem
     * @example
     * // Get one WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardrobeItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WardrobeItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WardrobeItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WardrobeItems
     * const wardrobeItems = await prisma.wardrobeItem.findMany()
     * 
     * // Get first 10 WardrobeItems
     * const wardrobeItems = await prisma.wardrobeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wardrobeItemWithIdOnly = await prisma.wardrobeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WardrobeItemFindManyArgs>(args?: SelectSubset<T, WardrobeItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WardrobeItem.
     * @param {WardrobeItemCreateArgs} args - Arguments to create a WardrobeItem.
     * @example
     * // Create one WardrobeItem
     * const WardrobeItem = await prisma.wardrobeItem.create({
     *   data: {
     *     // ... data to create a WardrobeItem
     *   }
     * })
     * 
     */
    create<T extends WardrobeItemCreateArgs>(args: SelectSubset<T, WardrobeItemCreateArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WardrobeItems.
     * @param {WardrobeItemCreateManyArgs} args - Arguments to create many WardrobeItems.
     * @example
     * // Create many WardrobeItems
     * const wardrobeItem = await prisma.wardrobeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WardrobeItemCreateManyArgs>(args?: SelectSubset<T, WardrobeItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WardrobeItems and returns the data saved in the database.
     * @param {WardrobeItemCreateManyAndReturnArgs} args - Arguments to create many WardrobeItems.
     * @example
     * // Create many WardrobeItems
     * const wardrobeItem = await prisma.wardrobeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WardrobeItems and only return the `id`
     * const wardrobeItemWithIdOnly = await prisma.wardrobeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WardrobeItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WardrobeItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WardrobeItem.
     * @param {WardrobeItemDeleteArgs} args - Arguments to delete one WardrobeItem.
     * @example
     * // Delete one WardrobeItem
     * const WardrobeItem = await prisma.wardrobeItem.delete({
     *   where: {
     *     // ... filter to delete one WardrobeItem
     *   }
     * })
     * 
     */
    delete<T extends WardrobeItemDeleteArgs>(args: SelectSubset<T, WardrobeItemDeleteArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WardrobeItem.
     * @param {WardrobeItemUpdateArgs} args - Arguments to update one WardrobeItem.
     * @example
     * // Update one WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WardrobeItemUpdateArgs>(args: SelectSubset<T, WardrobeItemUpdateArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WardrobeItems.
     * @param {WardrobeItemDeleteManyArgs} args - Arguments to filter WardrobeItems to delete.
     * @example
     * // Delete a few WardrobeItems
     * const { count } = await prisma.wardrobeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WardrobeItemDeleteManyArgs>(args?: SelectSubset<T, WardrobeItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardrobeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WardrobeItems
     * const wardrobeItem = await prisma.wardrobeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WardrobeItemUpdateManyArgs>(args: SelectSubset<T, WardrobeItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WardrobeItems and returns the data updated in the database.
     * @param {WardrobeItemUpdateManyAndReturnArgs} args - Arguments to update many WardrobeItems.
     * @example
     * // Update many WardrobeItems
     * const wardrobeItem = await prisma.wardrobeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WardrobeItems and only return the `id`
     * const wardrobeItemWithIdOnly = await prisma.wardrobeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WardrobeItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WardrobeItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WardrobeItem.
     * @param {WardrobeItemUpsertArgs} args - Arguments to update or create a WardrobeItem.
     * @example
     * // Update or create a WardrobeItem
     * const wardrobeItem = await prisma.wardrobeItem.upsert({
     *   create: {
     *     // ... data to create a WardrobeItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WardrobeItem we want to update
     *   }
     * })
     */
    upsert<T extends WardrobeItemUpsertArgs>(args: SelectSubset<T, WardrobeItemUpsertArgs<ExtArgs>>): Prisma__WardrobeItemClient<$Result.GetResult<Prisma.$WardrobeItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WardrobeItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemCountArgs} args - Arguments to filter WardrobeItems to count.
     * @example
     * // Count the number of WardrobeItems
     * const count = await prisma.wardrobeItem.count({
     *   where: {
     *     // ... the filter for the WardrobeItems we want to count
     *   }
     * })
    **/
    count<T extends WardrobeItemCountArgs>(
      args?: Subset<T, WardrobeItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WardrobeItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WardrobeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WardrobeItemAggregateArgs>(args: Subset<T, WardrobeItemAggregateArgs>): Prisma.PrismaPromise<GetWardrobeItemAggregateType<T>>

    /**
     * Group by WardrobeItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardrobeItemGroupByArgs} args - Group by arguments.
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
      T extends WardrobeItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WardrobeItemGroupByArgs['orderBy'] }
        : { orderBy?: WardrobeItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WardrobeItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardrobeItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WardrobeItem model
   */
  readonly fields: WardrobeItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WardrobeItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WardrobeItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WardrobeItem model
   */
  interface WardrobeItemFieldRefs {
    readonly id: FieldRef<"WardrobeItem", 'String'>
    readonly name: FieldRef<"WardrobeItem", 'String'>
    readonly image: FieldRef<"WardrobeItem", 'String'>
    readonly locked: FieldRef<"WardrobeItem", 'Boolean'>
    readonly lvl: FieldRef<"WardrobeItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WardrobeItem findUnique
   */
  export type WardrobeItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter, which WardrobeItem to fetch.
     */
    where: WardrobeItemWhereUniqueInput
  }

  /**
   * WardrobeItem findUniqueOrThrow
   */
  export type WardrobeItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter, which WardrobeItem to fetch.
     */
    where: WardrobeItemWhereUniqueInput
  }

  /**
   * WardrobeItem findFirst
   */
  export type WardrobeItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter, which WardrobeItem to fetch.
     */
    where?: WardrobeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardrobeItems to fetch.
     */
    orderBy?: WardrobeItemOrderByWithRelationInput | WardrobeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardrobeItems.
     */
    cursor?: WardrobeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardrobeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardrobeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardrobeItems.
     */
    distinct?: WardrobeItemScalarFieldEnum | WardrobeItemScalarFieldEnum[]
  }

  /**
   * WardrobeItem findFirstOrThrow
   */
  export type WardrobeItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter, which WardrobeItem to fetch.
     */
    where?: WardrobeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardrobeItems to fetch.
     */
    orderBy?: WardrobeItemOrderByWithRelationInput | WardrobeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WardrobeItems.
     */
    cursor?: WardrobeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardrobeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardrobeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardrobeItems.
     */
    distinct?: WardrobeItemScalarFieldEnum | WardrobeItemScalarFieldEnum[]
  }

  /**
   * WardrobeItem findMany
   */
  export type WardrobeItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter, which WardrobeItems to fetch.
     */
    where?: WardrobeItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WardrobeItems to fetch.
     */
    orderBy?: WardrobeItemOrderByWithRelationInput | WardrobeItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WardrobeItems.
     */
    cursor?: WardrobeItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WardrobeItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WardrobeItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WardrobeItems.
     */
    distinct?: WardrobeItemScalarFieldEnum | WardrobeItemScalarFieldEnum[]
  }

  /**
   * WardrobeItem create
   */
  export type WardrobeItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * The data needed to create a WardrobeItem.
     */
    data: XOR<WardrobeItemCreateInput, WardrobeItemUncheckedCreateInput>
  }

  /**
   * WardrobeItem createMany
   */
  export type WardrobeItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WardrobeItems.
     */
    data: WardrobeItemCreateManyInput | WardrobeItemCreateManyInput[]
  }

  /**
   * WardrobeItem createManyAndReturn
   */
  export type WardrobeItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * The data used to create many WardrobeItems.
     */
    data: WardrobeItemCreateManyInput | WardrobeItemCreateManyInput[]
  }

  /**
   * WardrobeItem update
   */
  export type WardrobeItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * The data needed to update a WardrobeItem.
     */
    data: XOR<WardrobeItemUpdateInput, WardrobeItemUncheckedUpdateInput>
    /**
     * Choose, which WardrobeItem to update.
     */
    where: WardrobeItemWhereUniqueInput
  }

  /**
   * WardrobeItem updateMany
   */
  export type WardrobeItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WardrobeItems.
     */
    data: XOR<WardrobeItemUpdateManyMutationInput, WardrobeItemUncheckedUpdateManyInput>
    /**
     * Filter which WardrobeItems to update
     */
    where?: WardrobeItemWhereInput
    /**
     * Limit how many WardrobeItems to update.
     */
    limit?: number
  }

  /**
   * WardrobeItem updateManyAndReturn
   */
  export type WardrobeItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * The data used to update WardrobeItems.
     */
    data: XOR<WardrobeItemUpdateManyMutationInput, WardrobeItemUncheckedUpdateManyInput>
    /**
     * Filter which WardrobeItems to update
     */
    where?: WardrobeItemWhereInput
    /**
     * Limit how many WardrobeItems to update.
     */
    limit?: number
  }

  /**
   * WardrobeItem upsert
   */
  export type WardrobeItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * The filter to search for the WardrobeItem to update in case it exists.
     */
    where: WardrobeItemWhereUniqueInput
    /**
     * In case the WardrobeItem found by the `where` argument doesn't exist, create a new WardrobeItem with this data.
     */
    create: XOR<WardrobeItemCreateInput, WardrobeItemUncheckedCreateInput>
    /**
     * In case the WardrobeItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WardrobeItemUpdateInput, WardrobeItemUncheckedUpdateInput>
  }

  /**
   * WardrobeItem delete
   */
  export type WardrobeItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
    /**
     * Filter which WardrobeItem to delete.
     */
    where: WardrobeItemWhereUniqueInput
  }

  /**
   * WardrobeItem deleteMany
   */
  export type WardrobeItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WardrobeItems to delete
     */
    where?: WardrobeItemWhereInput
    /**
     * Limit how many WardrobeItems to delete.
     */
    limit?: number
  }

  /**
   * WardrobeItem without action
   */
  export type WardrobeItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardrobeItem
     */
    select?: WardrobeItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WardrobeItem
     */
    omit?: WardrobeItemOmit<ExtArgs> | null
  }


  /**
   * Model AiVoice
   */

  export type AggregateAiVoice = {
    _count: AiVoiceCountAggregateOutputType | null
    _min: AiVoiceMinAggregateOutputType | null
    _max: AiVoiceMaxAggregateOutputType | null
  }

  export type AiVoiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
  }

  export type AiVoiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
  }

  export type AiVoiceCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    _all: number
  }


  export type AiVoiceMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
  }

  export type AiVoiceMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
  }

  export type AiVoiceCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    _all?: true
  }

  export type AiVoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiVoice to aggregate.
     */
    where?: AiVoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiVoices to fetch.
     */
    orderBy?: AiVoiceOrderByWithRelationInput | AiVoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiVoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiVoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiVoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiVoices
    **/
    _count?: true | AiVoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiVoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiVoiceMaxAggregateInputType
  }

  export type GetAiVoiceAggregateType<T extends AiVoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateAiVoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiVoice[P]>
      : GetScalarType<T[P], AggregateAiVoice[P]>
  }




  export type AiVoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiVoiceWhereInput
    orderBy?: AiVoiceOrderByWithAggregationInput | AiVoiceOrderByWithAggregationInput[]
    by: AiVoiceScalarFieldEnum[] | AiVoiceScalarFieldEnum
    having?: AiVoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiVoiceCountAggregateInputType | true
    _min?: AiVoiceMinAggregateInputType
    _max?: AiVoiceMaxAggregateInputType
  }

  export type AiVoiceGroupByOutputType = {
    id: string
    name: string
    desc: string
    _count: AiVoiceCountAggregateOutputType | null
    _min: AiVoiceMinAggregateOutputType | null
    _max: AiVoiceMaxAggregateOutputType | null
  }

  type GetAiVoiceGroupByPayload<T extends AiVoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiVoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiVoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiVoiceGroupByOutputType[P]>
            : GetScalarType<T[P], AiVoiceGroupByOutputType[P]>
        }
      >
    >


  export type AiVoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
  }, ExtArgs["result"]["aiVoice"]>

  export type AiVoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
  }, ExtArgs["result"]["aiVoice"]>

  export type AiVoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
  }, ExtArgs["result"]["aiVoice"]>

  export type AiVoiceSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
  }

  export type AiVoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc", ExtArgs["result"]["aiVoice"]>

  export type $AiVoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiVoice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string
    }, ExtArgs["result"]["aiVoice"]>
    composites: {}
  }

  type AiVoiceGetPayload<S extends boolean | null | undefined | AiVoiceDefaultArgs> = $Result.GetResult<Prisma.$AiVoicePayload, S>

  type AiVoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiVoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiVoiceCountAggregateInputType | true
    }

  export interface AiVoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiVoice'], meta: { name: 'AiVoice' } }
    /**
     * Find zero or one AiVoice that matches the filter.
     * @param {AiVoiceFindUniqueArgs} args - Arguments to find a AiVoice
     * @example
     * // Get one AiVoice
     * const aiVoice = await prisma.aiVoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiVoiceFindUniqueArgs>(args: SelectSubset<T, AiVoiceFindUniqueArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiVoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiVoiceFindUniqueOrThrowArgs} args - Arguments to find a AiVoice
     * @example
     * // Get one AiVoice
     * const aiVoice = await prisma.aiVoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiVoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, AiVoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiVoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceFindFirstArgs} args - Arguments to find a AiVoice
     * @example
     * // Get one AiVoice
     * const aiVoice = await prisma.aiVoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiVoiceFindFirstArgs>(args?: SelectSubset<T, AiVoiceFindFirstArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiVoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceFindFirstOrThrowArgs} args - Arguments to find a AiVoice
     * @example
     * // Get one AiVoice
     * const aiVoice = await prisma.aiVoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiVoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, AiVoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiVoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiVoices
     * const aiVoices = await prisma.aiVoice.findMany()
     * 
     * // Get first 10 AiVoices
     * const aiVoices = await prisma.aiVoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiVoiceWithIdOnly = await prisma.aiVoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiVoiceFindManyArgs>(args?: SelectSubset<T, AiVoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiVoice.
     * @param {AiVoiceCreateArgs} args - Arguments to create a AiVoice.
     * @example
     * // Create one AiVoice
     * const AiVoice = await prisma.aiVoice.create({
     *   data: {
     *     // ... data to create a AiVoice
     *   }
     * })
     * 
     */
    create<T extends AiVoiceCreateArgs>(args: SelectSubset<T, AiVoiceCreateArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiVoices.
     * @param {AiVoiceCreateManyArgs} args - Arguments to create many AiVoices.
     * @example
     * // Create many AiVoices
     * const aiVoice = await prisma.aiVoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiVoiceCreateManyArgs>(args?: SelectSubset<T, AiVoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiVoices and returns the data saved in the database.
     * @param {AiVoiceCreateManyAndReturnArgs} args - Arguments to create many AiVoices.
     * @example
     * // Create many AiVoices
     * const aiVoice = await prisma.aiVoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiVoices and only return the `id`
     * const aiVoiceWithIdOnly = await prisma.aiVoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiVoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, AiVoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiVoice.
     * @param {AiVoiceDeleteArgs} args - Arguments to delete one AiVoice.
     * @example
     * // Delete one AiVoice
     * const AiVoice = await prisma.aiVoice.delete({
     *   where: {
     *     // ... filter to delete one AiVoice
     *   }
     * })
     * 
     */
    delete<T extends AiVoiceDeleteArgs>(args: SelectSubset<T, AiVoiceDeleteArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiVoice.
     * @param {AiVoiceUpdateArgs} args - Arguments to update one AiVoice.
     * @example
     * // Update one AiVoice
     * const aiVoice = await prisma.aiVoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiVoiceUpdateArgs>(args: SelectSubset<T, AiVoiceUpdateArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiVoices.
     * @param {AiVoiceDeleteManyArgs} args - Arguments to filter AiVoices to delete.
     * @example
     * // Delete a few AiVoices
     * const { count } = await prisma.aiVoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiVoiceDeleteManyArgs>(args?: SelectSubset<T, AiVoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiVoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiVoices
     * const aiVoice = await prisma.aiVoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiVoiceUpdateManyArgs>(args: SelectSubset<T, AiVoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiVoices and returns the data updated in the database.
     * @param {AiVoiceUpdateManyAndReturnArgs} args - Arguments to update many AiVoices.
     * @example
     * // Update many AiVoices
     * const aiVoice = await prisma.aiVoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiVoices and only return the `id`
     * const aiVoiceWithIdOnly = await prisma.aiVoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiVoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, AiVoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiVoice.
     * @param {AiVoiceUpsertArgs} args - Arguments to update or create a AiVoice.
     * @example
     * // Update or create a AiVoice
     * const aiVoice = await prisma.aiVoice.upsert({
     *   create: {
     *     // ... data to create a AiVoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiVoice we want to update
     *   }
     * })
     */
    upsert<T extends AiVoiceUpsertArgs>(args: SelectSubset<T, AiVoiceUpsertArgs<ExtArgs>>): Prisma__AiVoiceClient<$Result.GetResult<Prisma.$AiVoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiVoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceCountArgs} args - Arguments to filter AiVoices to count.
     * @example
     * // Count the number of AiVoices
     * const count = await prisma.aiVoice.count({
     *   where: {
     *     // ... the filter for the AiVoices we want to count
     *   }
     * })
    **/
    count<T extends AiVoiceCountArgs>(
      args?: Subset<T, AiVoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiVoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiVoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiVoiceAggregateArgs>(args: Subset<T, AiVoiceAggregateArgs>): Prisma.PrismaPromise<GetAiVoiceAggregateType<T>>

    /**
     * Group by AiVoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiVoiceGroupByArgs} args - Group by arguments.
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
      T extends AiVoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiVoiceGroupByArgs['orderBy'] }
        : { orderBy?: AiVoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiVoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiVoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiVoice model
   */
  readonly fields: AiVoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiVoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiVoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AiVoice model
   */
  interface AiVoiceFieldRefs {
    readonly id: FieldRef<"AiVoice", 'String'>
    readonly name: FieldRef<"AiVoice", 'String'>
    readonly desc: FieldRef<"AiVoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AiVoice findUnique
   */
  export type AiVoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter, which AiVoice to fetch.
     */
    where: AiVoiceWhereUniqueInput
  }

  /**
   * AiVoice findUniqueOrThrow
   */
  export type AiVoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter, which AiVoice to fetch.
     */
    where: AiVoiceWhereUniqueInput
  }

  /**
   * AiVoice findFirst
   */
  export type AiVoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter, which AiVoice to fetch.
     */
    where?: AiVoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiVoices to fetch.
     */
    orderBy?: AiVoiceOrderByWithRelationInput | AiVoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiVoices.
     */
    cursor?: AiVoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiVoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiVoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiVoices.
     */
    distinct?: AiVoiceScalarFieldEnum | AiVoiceScalarFieldEnum[]
  }

  /**
   * AiVoice findFirstOrThrow
   */
  export type AiVoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter, which AiVoice to fetch.
     */
    where?: AiVoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiVoices to fetch.
     */
    orderBy?: AiVoiceOrderByWithRelationInput | AiVoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiVoices.
     */
    cursor?: AiVoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiVoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiVoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiVoices.
     */
    distinct?: AiVoiceScalarFieldEnum | AiVoiceScalarFieldEnum[]
  }

  /**
   * AiVoice findMany
   */
  export type AiVoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter, which AiVoices to fetch.
     */
    where?: AiVoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiVoices to fetch.
     */
    orderBy?: AiVoiceOrderByWithRelationInput | AiVoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiVoices.
     */
    cursor?: AiVoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiVoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiVoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiVoices.
     */
    distinct?: AiVoiceScalarFieldEnum | AiVoiceScalarFieldEnum[]
  }

  /**
   * AiVoice create
   */
  export type AiVoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * The data needed to create a AiVoice.
     */
    data: XOR<AiVoiceCreateInput, AiVoiceUncheckedCreateInput>
  }

  /**
   * AiVoice createMany
   */
  export type AiVoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiVoices.
     */
    data: AiVoiceCreateManyInput | AiVoiceCreateManyInput[]
  }

  /**
   * AiVoice createManyAndReturn
   */
  export type AiVoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * The data used to create many AiVoices.
     */
    data: AiVoiceCreateManyInput | AiVoiceCreateManyInput[]
  }

  /**
   * AiVoice update
   */
  export type AiVoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * The data needed to update a AiVoice.
     */
    data: XOR<AiVoiceUpdateInput, AiVoiceUncheckedUpdateInput>
    /**
     * Choose, which AiVoice to update.
     */
    where: AiVoiceWhereUniqueInput
  }

  /**
   * AiVoice updateMany
   */
  export type AiVoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiVoices.
     */
    data: XOR<AiVoiceUpdateManyMutationInput, AiVoiceUncheckedUpdateManyInput>
    /**
     * Filter which AiVoices to update
     */
    where?: AiVoiceWhereInput
    /**
     * Limit how many AiVoices to update.
     */
    limit?: number
  }

  /**
   * AiVoice updateManyAndReturn
   */
  export type AiVoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * The data used to update AiVoices.
     */
    data: XOR<AiVoiceUpdateManyMutationInput, AiVoiceUncheckedUpdateManyInput>
    /**
     * Filter which AiVoices to update
     */
    where?: AiVoiceWhereInput
    /**
     * Limit how many AiVoices to update.
     */
    limit?: number
  }

  /**
   * AiVoice upsert
   */
  export type AiVoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * The filter to search for the AiVoice to update in case it exists.
     */
    where: AiVoiceWhereUniqueInput
    /**
     * In case the AiVoice found by the `where` argument doesn't exist, create a new AiVoice with this data.
     */
    create: XOR<AiVoiceCreateInput, AiVoiceUncheckedCreateInput>
    /**
     * In case the AiVoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiVoiceUpdateInput, AiVoiceUncheckedUpdateInput>
  }

  /**
   * AiVoice delete
   */
  export type AiVoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
    /**
     * Filter which AiVoice to delete.
     */
    where: AiVoiceWhereUniqueInput
  }

  /**
   * AiVoice deleteMany
   */
  export type AiVoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiVoices to delete
     */
    where?: AiVoiceWhereInput
    /**
     * Limit how many AiVoices to delete.
     */
    limit?: number
  }

  /**
   * AiVoice without action
   */
  export type AiVoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiVoice
     */
    select?: AiVoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiVoice
     */
    omit?: AiVoiceOmit<ExtArgs> | null
  }


  /**
   * Model CodeModule
   */

  export type AggregateCodeModule = {
    _count: CodeModuleCountAggregateOutputType | null
    _avg: CodeModuleAvgAggregateOutputType | null
    _sum: CodeModuleSumAggregateOutputType | null
    _min: CodeModuleMinAggregateOutputType | null
    _max: CodeModuleMaxAggregateOutputType | null
  }

  export type CodeModuleAvgAggregateOutputType = {
    lessons: number | null
    hours: number | null
  }

  export type CodeModuleSumAggregateOutputType = {
    lessons: number | null
    hours: number | null
  }

  export type CodeModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: string | null
    icon: string | null
    lessons: number | null
    hours: number | null
    accentClass: string | null
    bgIconClass: string | null
    isWide: boolean | null
    isNew: boolean | null
    comingSoon: boolean | null
    category: string | null
  }

  export type CodeModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    level: string | null
    icon: string | null
    lessons: number | null
    hours: number | null
    accentClass: string | null
    bgIconClass: string | null
    isWide: boolean | null
    isNew: boolean | null
    comingSoon: boolean | null
    category: string | null
  }

  export type CodeModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    level: number
    icon: number
    lessons: number
    hours: number
    accentClass: number
    bgIconClass: number
    isWide: number
    isNew: number
    comingSoon: number
    category: number
    _all: number
  }


  export type CodeModuleAvgAggregateInputType = {
    lessons?: true
    hours?: true
  }

  export type CodeModuleSumAggregateInputType = {
    lessons?: true
    hours?: true
  }

  export type CodeModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    icon?: true
    lessons?: true
    hours?: true
    accentClass?: true
    bgIconClass?: true
    isWide?: true
    isNew?: true
    comingSoon?: true
    category?: true
  }

  export type CodeModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    icon?: true
    lessons?: true
    hours?: true
    accentClass?: true
    bgIconClass?: true
    isWide?: true
    isNew?: true
    comingSoon?: true
    category?: true
  }

  export type CodeModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    level?: true
    icon?: true
    lessons?: true
    hours?: true
    accentClass?: true
    bgIconClass?: true
    isWide?: true
    isNew?: true
    comingSoon?: true
    category?: true
    _all?: true
  }

  export type CodeModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeModule to aggregate.
     */
    where?: CodeModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModules to fetch.
     */
    orderBy?: CodeModuleOrderByWithRelationInput | CodeModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeModules
    **/
    _count?: true | CodeModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeModuleMaxAggregateInputType
  }

  export type GetCodeModuleAggregateType<T extends CodeModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeModule[P]>
      : GetScalarType<T[P], AggregateCodeModule[P]>
  }




  export type CodeModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeModuleWhereInput
    orderBy?: CodeModuleOrderByWithAggregationInput | CodeModuleOrderByWithAggregationInput[]
    by: CodeModuleScalarFieldEnum[] | CodeModuleScalarFieldEnum
    having?: CodeModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeModuleCountAggregateInputType | true
    _avg?: CodeModuleAvgAggregateInputType
    _sum?: CodeModuleSumAggregateInputType
    _min?: CodeModuleMinAggregateInputType
    _max?: CodeModuleMaxAggregateInputType
  }

  export type CodeModuleGroupByOutputType = {
    id: string
    title: string
    description: string
    level: string
    icon: string
    lessons: number
    hours: number
    accentClass: string
    bgIconClass: string
    isWide: boolean
    isNew: boolean
    comingSoon: boolean
    category: string
    _count: CodeModuleCountAggregateOutputType | null
    _avg: CodeModuleAvgAggregateOutputType | null
    _sum: CodeModuleSumAggregateOutputType | null
    _min: CodeModuleMinAggregateOutputType | null
    _max: CodeModuleMaxAggregateOutputType | null
  }

  type GetCodeModuleGroupByPayload<T extends CodeModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeModuleGroupByOutputType[P]>
            : GetScalarType<T[P], CodeModuleGroupByOutputType[P]>
        }
      >
    >


  export type CodeModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    icon?: boolean
    lessons?: boolean
    hours?: boolean
    accentClass?: boolean
    bgIconClass?: boolean
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: boolean
  }, ExtArgs["result"]["codeModule"]>

  export type CodeModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    icon?: boolean
    lessons?: boolean
    hours?: boolean
    accentClass?: boolean
    bgIconClass?: boolean
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: boolean
  }, ExtArgs["result"]["codeModule"]>

  export type CodeModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    icon?: boolean
    lessons?: boolean
    hours?: boolean
    accentClass?: boolean
    bgIconClass?: boolean
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: boolean
  }, ExtArgs["result"]["codeModule"]>

  export type CodeModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    level?: boolean
    icon?: boolean
    lessons?: boolean
    hours?: boolean
    accentClass?: boolean
    bgIconClass?: boolean
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: boolean
  }

  export type CodeModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "level" | "icon" | "lessons" | "hours" | "accentClass" | "bgIconClass" | "isWide" | "isNew" | "comingSoon" | "category", ExtArgs["result"]["codeModule"]>

  export type $CodeModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeModule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      level: string
      icon: string
      lessons: number
      hours: number
      accentClass: string
      bgIconClass: string
      isWide: boolean
      isNew: boolean
      comingSoon: boolean
      category: string
    }, ExtArgs["result"]["codeModule"]>
    composites: {}
  }

  type CodeModuleGetPayload<S extends boolean | null | undefined | CodeModuleDefaultArgs> = $Result.GetResult<Prisma.$CodeModulePayload, S>

  type CodeModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeModuleCountAggregateInputType | true
    }

  export interface CodeModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeModule'], meta: { name: 'CodeModule' } }
    /**
     * Find zero or one CodeModule that matches the filter.
     * @param {CodeModuleFindUniqueArgs} args - Arguments to find a CodeModule
     * @example
     * // Get one CodeModule
     * const codeModule = await prisma.codeModule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeModuleFindUniqueArgs>(args: SelectSubset<T, CodeModuleFindUniqueArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeModule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeModuleFindUniqueOrThrowArgs} args - Arguments to find a CodeModule
     * @example
     * // Get one CodeModule
     * const codeModule = await prisma.codeModule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeModule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleFindFirstArgs} args - Arguments to find a CodeModule
     * @example
     * // Get one CodeModule
     * const codeModule = await prisma.codeModule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeModuleFindFirstArgs>(args?: SelectSubset<T, CodeModuleFindFirstArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeModule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleFindFirstOrThrowArgs} args - Arguments to find a CodeModule
     * @example
     * // Get one CodeModule
     * const codeModule = await prisma.codeModule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeModules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeModules
     * const codeModules = await prisma.codeModule.findMany()
     * 
     * // Get first 10 CodeModules
     * const codeModules = await prisma.codeModule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeModuleWithIdOnly = await prisma.codeModule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeModuleFindManyArgs>(args?: SelectSubset<T, CodeModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeModule.
     * @param {CodeModuleCreateArgs} args - Arguments to create a CodeModule.
     * @example
     * // Create one CodeModule
     * const CodeModule = await prisma.codeModule.create({
     *   data: {
     *     // ... data to create a CodeModule
     *   }
     * })
     * 
     */
    create<T extends CodeModuleCreateArgs>(args: SelectSubset<T, CodeModuleCreateArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeModules.
     * @param {CodeModuleCreateManyArgs} args - Arguments to create many CodeModules.
     * @example
     * // Create many CodeModules
     * const codeModule = await prisma.codeModule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeModuleCreateManyArgs>(args?: SelectSubset<T, CodeModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeModules and returns the data saved in the database.
     * @param {CodeModuleCreateManyAndReturnArgs} args - Arguments to create many CodeModules.
     * @example
     * // Create many CodeModules
     * const codeModule = await prisma.codeModule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeModules and only return the `id`
     * const codeModuleWithIdOnly = await prisma.codeModule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeModule.
     * @param {CodeModuleDeleteArgs} args - Arguments to delete one CodeModule.
     * @example
     * // Delete one CodeModule
     * const CodeModule = await prisma.codeModule.delete({
     *   where: {
     *     // ... filter to delete one CodeModule
     *   }
     * })
     * 
     */
    delete<T extends CodeModuleDeleteArgs>(args: SelectSubset<T, CodeModuleDeleteArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeModule.
     * @param {CodeModuleUpdateArgs} args - Arguments to update one CodeModule.
     * @example
     * // Update one CodeModule
     * const codeModule = await prisma.codeModule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeModuleUpdateArgs>(args: SelectSubset<T, CodeModuleUpdateArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeModules.
     * @param {CodeModuleDeleteManyArgs} args - Arguments to filter CodeModules to delete.
     * @example
     * // Delete a few CodeModules
     * const { count } = await prisma.codeModule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeModuleDeleteManyArgs>(args?: SelectSubset<T, CodeModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeModules
     * const codeModule = await prisma.codeModule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeModuleUpdateManyArgs>(args: SelectSubset<T, CodeModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeModules and returns the data updated in the database.
     * @param {CodeModuleUpdateManyAndReturnArgs} args - Arguments to update many CodeModules.
     * @example
     * // Update many CodeModules
     * const codeModule = await prisma.codeModule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeModules and only return the `id`
     * const codeModuleWithIdOnly = await prisma.codeModule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeModule.
     * @param {CodeModuleUpsertArgs} args - Arguments to update or create a CodeModule.
     * @example
     * // Update or create a CodeModule
     * const codeModule = await prisma.codeModule.upsert({
     *   create: {
     *     // ... data to create a CodeModule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeModule we want to update
     *   }
     * })
     */
    upsert<T extends CodeModuleUpsertArgs>(args: SelectSubset<T, CodeModuleUpsertArgs<ExtArgs>>): Prisma__CodeModuleClient<$Result.GetResult<Prisma.$CodeModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeModules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCountArgs} args - Arguments to filter CodeModules to count.
     * @example
     * // Count the number of CodeModules
     * const count = await prisma.codeModule.count({
     *   where: {
     *     // ... the filter for the CodeModules we want to count
     *   }
     * })
    **/
    count<T extends CodeModuleCountArgs>(
      args?: Subset<T, CodeModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeModuleAggregateArgs>(args: Subset<T, CodeModuleAggregateArgs>): Prisma.PrismaPromise<GetCodeModuleAggregateType<T>>

    /**
     * Group by CodeModule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleGroupByArgs} args - Group by arguments.
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
      T extends CodeModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeModuleGroupByArgs['orderBy'] }
        : { orderBy?: CodeModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeModule model
   */
  readonly fields: CodeModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeModule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CodeModule model
   */
  interface CodeModuleFieldRefs {
    readonly id: FieldRef<"CodeModule", 'String'>
    readonly title: FieldRef<"CodeModule", 'String'>
    readonly description: FieldRef<"CodeModule", 'String'>
    readonly level: FieldRef<"CodeModule", 'String'>
    readonly icon: FieldRef<"CodeModule", 'String'>
    readonly lessons: FieldRef<"CodeModule", 'Int'>
    readonly hours: FieldRef<"CodeModule", 'Int'>
    readonly accentClass: FieldRef<"CodeModule", 'String'>
    readonly bgIconClass: FieldRef<"CodeModule", 'String'>
    readonly isWide: FieldRef<"CodeModule", 'Boolean'>
    readonly isNew: FieldRef<"CodeModule", 'Boolean'>
    readonly comingSoon: FieldRef<"CodeModule", 'Boolean'>
    readonly category: FieldRef<"CodeModule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodeModule findUnique
   */
  export type CodeModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter, which CodeModule to fetch.
     */
    where: CodeModuleWhereUniqueInput
  }

  /**
   * CodeModule findUniqueOrThrow
   */
  export type CodeModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter, which CodeModule to fetch.
     */
    where: CodeModuleWhereUniqueInput
  }

  /**
   * CodeModule findFirst
   */
  export type CodeModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter, which CodeModule to fetch.
     */
    where?: CodeModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModules to fetch.
     */
    orderBy?: CodeModuleOrderByWithRelationInput | CodeModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeModules.
     */
    cursor?: CodeModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModules.
     */
    distinct?: CodeModuleScalarFieldEnum | CodeModuleScalarFieldEnum[]
  }

  /**
   * CodeModule findFirstOrThrow
   */
  export type CodeModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter, which CodeModule to fetch.
     */
    where?: CodeModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModules to fetch.
     */
    orderBy?: CodeModuleOrderByWithRelationInput | CodeModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeModules.
     */
    cursor?: CodeModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModules.
     */
    distinct?: CodeModuleScalarFieldEnum | CodeModuleScalarFieldEnum[]
  }

  /**
   * CodeModule findMany
   */
  export type CodeModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter, which CodeModules to fetch.
     */
    where?: CodeModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModules to fetch.
     */
    orderBy?: CodeModuleOrderByWithRelationInput | CodeModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeModules.
     */
    cursor?: CodeModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModules.
     */
    distinct?: CodeModuleScalarFieldEnum | CodeModuleScalarFieldEnum[]
  }

  /**
   * CodeModule create
   */
  export type CodeModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeModule.
     */
    data: XOR<CodeModuleCreateInput, CodeModuleUncheckedCreateInput>
  }

  /**
   * CodeModule createMany
   */
  export type CodeModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeModules.
     */
    data: CodeModuleCreateManyInput | CodeModuleCreateManyInput[]
  }

  /**
   * CodeModule createManyAndReturn
   */
  export type CodeModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * The data used to create many CodeModules.
     */
    data: CodeModuleCreateManyInput | CodeModuleCreateManyInput[]
  }

  /**
   * CodeModule update
   */
  export type CodeModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeModule.
     */
    data: XOR<CodeModuleUpdateInput, CodeModuleUncheckedUpdateInput>
    /**
     * Choose, which CodeModule to update.
     */
    where: CodeModuleWhereUniqueInput
  }

  /**
   * CodeModule updateMany
   */
  export type CodeModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeModules.
     */
    data: XOR<CodeModuleUpdateManyMutationInput, CodeModuleUncheckedUpdateManyInput>
    /**
     * Filter which CodeModules to update
     */
    where?: CodeModuleWhereInput
    /**
     * Limit how many CodeModules to update.
     */
    limit?: number
  }

  /**
   * CodeModule updateManyAndReturn
   */
  export type CodeModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * The data used to update CodeModules.
     */
    data: XOR<CodeModuleUpdateManyMutationInput, CodeModuleUncheckedUpdateManyInput>
    /**
     * Filter which CodeModules to update
     */
    where?: CodeModuleWhereInput
    /**
     * Limit how many CodeModules to update.
     */
    limit?: number
  }

  /**
   * CodeModule upsert
   */
  export type CodeModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeModule to update in case it exists.
     */
    where: CodeModuleWhereUniqueInput
    /**
     * In case the CodeModule found by the `where` argument doesn't exist, create a new CodeModule with this data.
     */
    create: XOR<CodeModuleCreateInput, CodeModuleUncheckedCreateInput>
    /**
     * In case the CodeModule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeModuleUpdateInput, CodeModuleUncheckedUpdateInput>
  }

  /**
   * CodeModule delete
   */
  export type CodeModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
    /**
     * Filter which CodeModule to delete.
     */
    where: CodeModuleWhereUniqueInput
  }

  /**
   * CodeModule deleteMany
   */
  export type CodeModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeModules to delete
     */
    where?: CodeModuleWhereInput
    /**
     * Limit how many CodeModules to delete.
     */
    limit?: number
  }

  /**
   * CodeModule without action
   */
  export type CodeModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModule
     */
    select?: CodeModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModule
     */
    omit?: CodeModuleOmit<ExtArgs> | null
  }


  /**
   * Model CodeModuleCurriculum
   */

  export type AggregateCodeModuleCurriculum = {
    _count: CodeModuleCurriculumCountAggregateOutputType | null
    _min: CodeModuleCurriculumMinAggregateOutputType | null
    _max: CodeModuleCurriculumMaxAggregateOutputType | null
  }

  export type CodeModuleCurriculumMinAggregateOutputType = {
    moduleId: string | null
    sourceUrl: string | null
    sourceLabel: string | null
    curriculum: string | null
  }

  export type CodeModuleCurriculumMaxAggregateOutputType = {
    moduleId: string | null
    sourceUrl: string | null
    sourceLabel: string | null
    curriculum: string | null
  }

  export type CodeModuleCurriculumCountAggregateOutputType = {
    moduleId: number
    sourceUrl: number
    sourceLabel: number
    curriculum: number
    _all: number
  }


  export type CodeModuleCurriculumMinAggregateInputType = {
    moduleId?: true
    sourceUrl?: true
    sourceLabel?: true
    curriculum?: true
  }

  export type CodeModuleCurriculumMaxAggregateInputType = {
    moduleId?: true
    sourceUrl?: true
    sourceLabel?: true
    curriculum?: true
  }

  export type CodeModuleCurriculumCountAggregateInputType = {
    moduleId?: true
    sourceUrl?: true
    sourceLabel?: true
    curriculum?: true
    _all?: true
  }

  export type CodeModuleCurriculumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeModuleCurriculum to aggregate.
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModuleCurricula to fetch.
     */
    orderBy?: CodeModuleCurriculumOrderByWithRelationInput | CodeModuleCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeModuleCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModuleCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModuleCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeModuleCurricula
    **/
    _count?: true | CodeModuleCurriculumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeModuleCurriculumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeModuleCurriculumMaxAggregateInputType
  }

  export type GetCodeModuleCurriculumAggregateType<T extends CodeModuleCurriculumAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeModuleCurriculum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeModuleCurriculum[P]>
      : GetScalarType<T[P], AggregateCodeModuleCurriculum[P]>
  }




  export type CodeModuleCurriculumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeModuleCurriculumWhereInput
    orderBy?: CodeModuleCurriculumOrderByWithAggregationInput | CodeModuleCurriculumOrderByWithAggregationInput[]
    by: CodeModuleCurriculumScalarFieldEnum[] | CodeModuleCurriculumScalarFieldEnum
    having?: CodeModuleCurriculumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeModuleCurriculumCountAggregateInputType | true
    _min?: CodeModuleCurriculumMinAggregateInputType
    _max?: CodeModuleCurriculumMaxAggregateInputType
  }

  export type CodeModuleCurriculumGroupByOutputType = {
    moduleId: string
    sourceUrl: string
    sourceLabel: string
    curriculum: string
    _count: CodeModuleCurriculumCountAggregateOutputType | null
    _min: CodeModuleCurriculumMinAggregateOutputType | null
    _max: CodeModuleCurriculumMaxAggregateOutputType | null
  }

  type GetCodeModuleCurriculumGroupByPayload<T extends CodeModuleCurriculumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeModuleCurriculumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeModuleCurriculumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeModuleCurriculumGroupByOutputType[P]>
            : GetScalarType<T[P], CodeModuleCurriculumGroupByOutputType[P]>
        }
      >
    >


  export type CodeModuleCurriculumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    moduleId?: boolean
    sourceUrl?: boolean
    sourceLabel?: boolean
    curriculum?: boolean
  }, ExtArgs["result"]["codeModuleCurriculum"]>

  export type CodeModuleCurriculumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    moduleId?: boolean
    sourceUrl?: boolean
    sourceLabel?: boolean
    curriculum?: boolean
  }, ExtArgs["result"]["codeModuleCurriculum"]>

  export type CodeModuleCurriculumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    moduleId?: boolean
    sourceUrl?: boolean
    sourceLabel?: boolean
    curriculum?: boolean
  }, ExtArgs["result"]["codeModuleCurriculum"]>

  export type CodeModuleCurriculumSelectScalar = {
    moduleId?: boolean
    sourceUrl?: boolean
    sourceLabel?: boolean
    curriculum?: boolean
  }

  export type CodeModuleCurriculumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"moduleId" | "sourceUrl" | "sourceLabel" | "curriculum", ExtArgs["result"]["codeModuleCurriculum"]>

  export type $CodeModuleCurriculumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeModuleCurriculum"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      moduleId: string
      sourceUrl: string
      sourceLabel: string
      curriculum: string
    }, ExtArgs["result"]["codeModuleCurriculum"]>
    composites: {}
  }

  type CodeModuleCurriculumGetPayload<S extends boolean | null | undefined | CodeModuleCurriculumDefaultArgs> = $Result.GetResult<Prisma.$CodeModuleCurriculumPayload, S>

  type CodeModuleCurriculumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeModuleCurriculumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeModuleCurriculumCountAggregateInputType | true
    }

  export interface CodeModuleCurriculumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeModuleCurriculum'], meta: { name: 'CodeModuleCurriculum' } }
    /**
     * Find zero or one CodeModuleCurriculum that matches the filter.
     * @param {CodeModuleCurriculumFindUniqueArgs} args - Arguments to find a CodeModuleCurriculum
     * @example
     * // Get one CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeModuleCurriculumFindUniqueArgs>(args: SelectSubset<T, CodeModuleCurriculumFindUniqueArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeModuleCurriculum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeModuleCurriculumFindUniqueOrThrowArgs} args - Arguments to find a CodeModuleCurriculum
     * @example
     * // Get one CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeModuleCurriculumFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeModuleCurriculumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeModuleCurriculum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumFindFirstArgs} args - Arguments to find a CodeModuleCurriculum
     * @example
     * // Get one CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeModuleCurriculumFindFirstArgs>(args?: SelectSubset<T, CodeModuleCurriculumFindFirstArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeModuleCurriculum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumFindFirstOrThrowArgs} args - Arguments to find a CodeModuleCurriculum
     * @example
     * // Get one CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeModuleCurriculumFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeModuleCurriculumFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeModuleCurricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeModuleCurricula
     * const codeModuleCurricula = await prisma.codeModuleCurriculum.findMany()
     * 
     * // Get first 10 CodeModuleCurricula
     * const codeModuleCurricula = await prisma.codeModuleCurriculum.findMany({ take: 10 })
     * 
     * // Only select the `moduleId`
     * const codeModuleCurriculumWithModuleIdOnly = await prisma.codeModuleCurriculum.findMany({ select: { moduleId: true } })
     * 
     */
    findMany<T extends CodeModuleCurriculumFindManyArgs>(args?: SelectSubset<T, CodeModuleCurriculumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeModuleCurriculum.
     * @param {CodeModuleCurriculumCreateArgs} args - Arguments to create a CodeModuleCurriculum.
     * @example
     * // Create one CodeModuleCurriculum
     * const CodeModuleCurriculum = await prisma.codeModuleCurriculum.create({
     *   data: {
     *     // ... data to create a CodeModuleCurriculum
     *   }
     * })
     * 
     */
    create<T extends CodeModuleCurriculumCreateArgs>(args: SelectSubset<T, CodeModuleCurriculumCreateArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeModuleCurricula.
     * @param {CodeModuleCurriculumCreateManyArgs} args - Arguments to create many CodeModuleCurricula.
     * @example
     * // Create many CodeModuleCurricula
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeModuleCurriculumCreateManyArgs>(args?: SelectSubset<T, CodeModuleCurriculumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeModuleCurricula and returns the data saved in the database.
     * @param {CodeModuleCurriculumCreateManyAndReturnArgs} args - Arguments to create many CodeModuleCurricula.
     * @example
     * // Create many CodeModuleCurricula
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeModuleCurricula and only return the `moduleId`
     * const codeModuleCurriculumWithModuleIdOnly = await prisma.codeModuleCurriculum.createManyAndReturn({
     *   select: { moduleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeModuleCurriculumCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeModuleCurriculumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeModuleCurriculum.
     * @param {CodeModuleCurriculumDeleteArgs} args - Arguments to delete one CodeModuleCurriculum.
     * @example
     * // Delete one CodeModuleCurriculum
     * const CodeModuleCurriculum = await prisma.codeModuleCurriculum.delete({
     *   where: {
     *     // ... filter to delete one CodeModuleCurriculum
     *   }
     * })
     * 
     */
    delete<T extends CodeModuleCurriculumDeleteArgs>(args: SelectSubset<T, CodeModuleCurriculumDeleteArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeModuleCurriculum.
     * @param {CodeModuleCurriculumUpdateArgs} args - Arguments to update one CodeModuleCurriculum.
     * @example
     * // Update one CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeModuleCurriculumUpdateArgs>(args: SelectSubset<T, CodeModuleCurriculumUpdateArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeModuleCurricula.
     * @param {CodeModuleCurriculumDeleteManyArgs} args - Arguments to filter CodeModuleCurricula to delete.
     * @example
     * // Delete a few CodeModuleCurricula
     * const { count } = await prisma.codeModuleCurriculum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeModuleCurriculumDeleteManyArgs>(args?: SelectSubset<T, CodeModuleCurriculumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeModuleCurricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeModuleCurricula
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeModuleCurriculumUpdateManyArgs>(args: SelectSubset<T, CodeModuleCurriculumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeModuleCurricula and returns the data updated in the database.
     * @param {CodeModuleCurriculumUpdateManyAndReturnArgs} args - Arguments to update many CodeModuleCurricula.
     * @example
     * // Update many CodeModuleCurricula
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeModuleCurricula and only return the `moduleId`
     * const codeModuleCurriculumWithModuleIdOnly = await prisma.codeModuleCurriculum.updateManyAndReturn({
     *   select: { moduleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeModuleCurriculumUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeModuleCurriculumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeModuleCurriculum.
     * @param {CodeModuleCurriculumUpsertArgs} args - Arguments to update or create a CodeModuleCurriculum.
     * @example
     * // Update or create a CodeModuleCurriculum
     * const codeModuleCurriculum = await prisma.codeModuleCurriculum.upsert({
     *   create: {
     *     // ... data to create a CodeModuleCurriculum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeModuleCurriculum we want to update
     *   }
     * })
     */
    upsert<T extends CodeModuleCurriculumUpsertArgs>(args: SelectSubset<T, CodeModuleCurriculumUpsertArgs<ExtArgs>>): Prisma__CodeModuleCurriculumClient<$Result.GetResult<Prisma.$CodeModuleCurriculumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeModuleCurricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumCountArgs} args - Arguments to filter CodeModuleCurricula to count.
     * @example
     * // Count the number of CodeModuleCurricula
     * const count = await prisma.codeModuleCurriculum.count({
     *   where: {
     *     // ... the filter for the CodeModuleCurricula we want to count
     *   }
     * })
    **/
    count<T extends CodeModuleCurriculumCountArgs>(
      args?: Subset<T, CodeModuleCurriculumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeModuleCurriculumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeModuleCurriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeModuleCurriculumAggregateArgs>(args: Subset<T, CodeModuleCurriculumAggregateArgs>): Prisma.PrismaPromise<GetCodeModuleCurriculumAggregateType<T>>

    /**
     * Group by CodeModuleCurriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeModuleCurriculumGroupByArgs} args - Group by arguments.
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
      T extends CodeModuleCurriculumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeModuleCurriculumGroupByArgs['orderBy'] }
        : { orderBy?: CodeModuleCurriculumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeModuleCurriculumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeModuleCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeModuleCurriculum model
   */
  readonly fields: CodeModuleCurriculumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeModuleCurriculum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeModuleCurriculumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CodeModuleCurriculum model
   */
  interface CodeModuleCurriculumFieldRefs {
    readonly moduleId: FieldRef<"CodeModuleCurriculum", 'String'>
    readonly sourceUrl: FieldRef<"CodeModuleCurriculum", 'String'>
    readonly sourceLabel: FieldRef<"CodeModuleCurriculum", 'String'>
    readonly curriculum: FieldRef<"CodeModuleCurriculum", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodeModuleCurriculum findUnique
   */
  export type CodeModuleCurriculumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter, which CodeModuleCurriculum to fetch.
     */
    where: CodeModuleCurriculumWhereUniqueInput
  }

  /**
   * CodeModuleCurriculum findUniqueOrThrow
   */
  export type CodeModuleCurriculumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter, which CodeModuleCurriculum to fetch.
     */
    where: CodeModuleCurriculumWhereUniqueInput
  }

  /**
   * CodeModuleCurriculum findFirst
   */
  export type CodeModuleCurriculumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter, which CodeModuleCurriculum to fetch.
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModuleCurricula to fetch.
     */
    orderBy?: CodeModuleCurriculumOrderByWithRelationInput | CodeModuleCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeModuleCurricula.
     */
    cursor?: CodeModuleCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModuleCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModuleCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModuleCurricula.
     */
    distinct?: CodeModuleCurriculumScalarFieldEnum | CodeModuleCurriculumScalarFieldEnum[]
  }

  /**
   * CodeModuleCurriculum findFirstOrThrow
   */
  export type CodeModuleCurriculumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter, which CodeModuleCurriculum to fetch.
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModuleCurricula to fetch.
     */
    orderBy?: CodeModuleCurriculumOrderByWithRelationInput | CodeModuleCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeModuleCurricula.
     */
    cursor?: CodeModuleCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModuleCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModuleCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModuleCurricula.
     */
    distinct?: CodeModuleCurriculumScalarFieldEnum | CodeModuleCurriculumScalarFieldEnum[]
  }

  /**
   * CodeModuleCurriculum findMany
   */
  export type CodeModuleCurriculumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter, which CodeModuleCurricula to fetch.
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeModuleCurricula to fetch.
     */
    orderBy?: CodeModuleCurriculumOrderByWithRelationInput | CodeModuleCurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeModuleCurricula.
     */
    cursor?: CodeModuleCurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeModuleCurricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeModuleCurricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeModuleCurricula.
     */
    distinct?: CodeModuleCurriculumScalarFieldEnum | CodeModuleCurriculumScalarFieldEnum[]
  }

  /**
   * CodeModuleCurriculum create
   */
  export type CodeModuleCurriculumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeModuleCurriculum.
     */
    data: XOR<CodeModuleCurriculumCreateInput, CodeModuleCurriculumUncheckedCreateInput>
  }

  /**
   * CodeModuleCurriculum createMany
   */
  export type CodeModuleCurriculumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeModuleCurricula.
     */
    data: CodeModuleCurriculumCreateManyInput | CodeModuleCurriculumCreateManyInput[]
  }

  /**
   * CodeModuleCurriculum createManyAndReturn
   */
  export type CodeModuleCurriculumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * The data used to create many CodeModuleCurricula.
     */
    data: CodeModuleCurriculumCreateManyInput | CodeModuleCurriculumCreateManyInput[]
  }

  /**
   * CodeModuleCurriculum update
   */
  export type CodeModuleCurriculumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeModuleCurriculum.
     */
    data: XOR<CodeModuleCurriculumUpdateInput, CodeModuleCurriculumUncheckedUpdateInput>
    /**
     * Choose, which CodeModuleCurriculum to update.
     */
    where: CodeModuleCurriculumWhereUniqueInput
  }

  /**
   * CodeModuleCurriculum updateMany
   */
  export type CodeModuleCurriculumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeModuleCurricula.
     */
    data: XOR<CodeModuleCurriculumUpdateManyMutationInput, CodeModuleCurriculumUncheckedUpdateManyInput>
    /**
     * Filter which CodeModuleCurricula to update
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * Limit how many CodeModuleCurricula to update.
     */
    limit?: number
  }

  /**
   * CodeModuleCurriculum updateManyAndReturn
   */
  export type CodeModuleCurriculumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * The data used to update CodeModuleCurricula.
     */
    data: XOR<CodeModuleCurriculumUpdateManyMutationInput, CodeModuleCurriculumUncheckedUpdateManyInput>
    /**
     * Filter which CodeModuleCurricula to update
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * Limit how many CodeModuleCurricula to update.
     */
    limit?: number
  }

  /**
   * CodeModuleCurriculum upsert
   */
  export type CodeModuleCurriculumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeModuleCurriculum to update in case it exists.
     */
    where: CodeModuleCurriculumWhereUniqueInput
    /**
     * In case the CodeModuleCurriculum found by the `where` argument doesn't exist, create a new CodeModuleCurriculum with this data.
     */
    create: XOR<CodeModuleCurriculumCreateInput, CodeModuleCurriculumUncheckedCreateInput>
    /**
     * In case the CodeModuleCurriculum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeModuleCurriculumUpdateInput, CodeModuleCurriculumUncheckedUpdateInput>
  }

  /**
   * CodeModuleCurriculum delete
   */
  export type CodeModuleCurriculumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
    /**
     * Filter which CodeModuleCurriculum to delete.
     */
    where: CodeModuleCurriculumWhereUniqueInput
  }

  /**
   * CodeModuleCurriculum deleteMany
   */
  export type CodeModuleCurriculumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeModuleCurricula to delete
     */
    where?: CodeModuleCurriculumWhereInput
    /**
     * Limit how many CodeModuleCurricula to delete.
     */
    limit?: number
  }

  /**
   * CodeModuleCurriculum without action
   */
  export type CodeModuleCurriculumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeModuleCurriculum
     */
    select?: CodeModuleCurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeModuleCurriculum
     */
    omit?: CodeModuleCurriculumOmit<ExtArgs> | null
  }


  /**
   * Model DailyObjective
   */

  export type AggregateDailyObjective = {
    _count: DailyObjectiveCountAggregateOutputType | null
    _avg: DailyObjectiveAvgAggregateOutputType | null
    _sum: DailyObjectiveSumAggregateOutputType | null
    _min: DailyObjectiveMinAggregateOutputType | null
    _max: DailyObjectiveMaxAggregateOutputType | null
  }

  export type DailyObjectiveAvgAggregateOutputType = {
    completedQuizzes: number | null
    targetQuizzes: number | null
  }

  export type DailyObjectiveSumAggregateOutputType = {
    completedQuizzes: number | null
    targetQuizzes: number | null
  }

  export type DailyObjectiveMinAggregateOutputType = {
    id: string | null
    completedQuizzes: number | null
    targetQuizzes: number | null
    bonusUnlocked: boolean | null
  }

  export type DailyObjectiveMaxAggregateOutputType = {
    id: string | null
    completedQuizzes: number | null
    targetQuizzes: number | null
    bonusUnlocked: boolean | null
  }

  export type DailyObjectiveCountAggregateOutputType = {
    id: number
    completedQuizzes: number
    targetQuizzes: number
    bonusUnlocked: number
    _all: number
  }


  export type DailyObjectiveAvgAggregateInputType = {
    completedQuizzes?: true
    targetQuizzes?: true
  }

  export type DailyObjectiveSumAggregateInputType = {
    completedQuizzes?: true
    targetQuizzes?: true
  }

  export type DailyObjectiveMinAggregateInputType = {
    id?: true
    completedQuizzes?: true
    targetQuizzes?: true
    bonusUnlocked?: true
  }

  export type DailyObjectiveMaxAggregateInputType = {
    id?: true
    completedQuizzes?: true
    targetQuizzes?: true
    bonusUnlocked?: true
  }

  export type DailyObjectiveCountAggregateInputType = {
    id?: true
    completedQuizzes?: true
    targetQuizzes?: true
    bonusUnlocked?: true
    _all?: true
  }

  export type DailyObjectiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyObjective to aggregate.
     */
    where?: DailyObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyObjectives to fetch.
     */
    orderBy?: DailyObjectiveOrderByWithRelationInput | DailyObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyObjectives
    **/
    _count?: true | DailyObjectiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyObjectiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyObjectiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyObjectiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyObjectiveMaxAggregateInputType
  }

  export type GetDailyObjectiveAggregateType<T extends DailyObjectiveAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyObjective]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyObjective[P]>
      : GetScalarType<T[P], AggregateDailyObjective[P]>
  }




  export type DailyObjectiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyObjectiveWhereInput
    orderBy?: DailyObjectiveOrderByWithAggregationInput | DailyObjectiveOrderByWithAggregationInput[]
    by: DailyObjectiveScalarFieldEnum[] | DailyObjectiveScalarFieldEnum
    having?: DailyObjectiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyObjectiveCountAggregateInputType | true
    _avg?: DailyObjectiveAvgAggregateInputType
    _sum?: DailyObjectiveSumAggregateInputType
    _min?: DailyObjectiveMinAggregateInputType
    _max?: DailyObjectiveMaxAggregateInputType
  }

  export type DailyObjectiveGroupByOutputType = {
    id: string
    completedQuizzes: number
    targetQuizzes: number
    bonusUnlocked: boolean
    _count: DailyObjectiveCountAggregateOutputType | null
    _avg: DailyObjectiveAvgAggregateOutputType | null
    _sum: DailyObjectiveSumAggregateOutputType | null
    _min: DailyObjectiveMinAggregateOutputType | null
    _max: DailyObjectiveMaxAggregateOutputType | null
  }

  type GetDailyObjectiveGroupByPayload<T extends DailyObjectiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyObjectiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyObjectiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyObjectiveGroupByOutputType[P]>
            : GetScalarType<T[P], DailyObjectiveGroupByOutputType[P]>
        }
      >
    >


  export type DailyObjectiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedQuizzes?: boolean
    targetQuizzes?: boolean
    bonusUnlocked?: boolean
  }, ExtArgs["result"]["dailyObjective"]>

  export type DailyObjectiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedQuizzes?: boolean
    targetQuizzes?: boolean
    bonusUnlocked?: boolean
  }, ExtArgs["result"]["dailyObjective"]>

  export type DailyObjectiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedQuizzes?: boolean
    targetQuizzes?: boolean
    bonusUnlocked?: boolean
  }, ExtArgs["result"]["dailyObjective"]>

  export type DailyObjectiveSelectScalar = {
    id?: boolean
    completedQuizzes?: boolean
    targetQuizzes?: boolean
    bonusUnlocked?: boolean
  }

  export type DailyObjectiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completedQuizzes" | "targetQuizzes" | "bonusUnlocked", ExtArgs["result"]["dailyObjective"]>

  export type $DailyObjectivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyObjective"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      completedQuizzes: number
      targetQuizzes: number
      bonusUnlocked: boolean
    }, ExtArgs["result"]["dailyObjective"]>
    composites: {}
  }

  type DailyObjectiveGetPayload<S extends boolean | null | undefined | DailyObjectiveDefaultArgs> = $Result.GetResult<Prisma.$DailyObjectivePayload, S>

  type DailyObjectiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyObjectiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyObjectiveCountAggregateInputType | true
    }

  export interface DailyObjectiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyObjective'], meta: { name: 'DailyObjective' } }
    /**
     * Find zero or one DailyObjective that matches the filter.
     * @param {DailyObjectiveFindUniqueArgs} args - Arguments to find a DailyObjective
     * @example
     * // Get one DailyObjective
     * const dailyObjective = await prisma.dailyObjective.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyObjectiveFindUniqueArgs>(args: SelectSubset<T, DailyObjectiveFindUniqueArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyObjective that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyObjectiveFindUniqueOrThrowArgs} args - Arguments to find a DailyObjective
     * @example
     * // Get one DailyObjective
     * const dailyObjective = await prisma.dailyObjective.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyObjectiveFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyObjectiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyObjective that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveFindFirstArgs} args - Arguments to find a DailyObjective
     * @example
     * // Get one DailyObjective
     * const dailyObjective = await prisma.dailyObjective.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyObjectiveFindFirstArgs>(args?: SelectSubset<T, DailyObjectiveFindFirstArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyObjective that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveFindFirstOrThrowArgs} args - Arguments to find a DailyObjective
     * @example
     * // Get one DailyObjective
     * const dailyObjective = await prisma.dailyObjective.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyObjectiveFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyObjectiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyObjectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyObjectives
     * const dailyObjectives = await prisma.dailyObjective.findMany()
     * 
     * // Get first 10 DailyObjectives
     * const dailyObjectives = await prisma.dailyObjective.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyObjectiveWithIdOnly = await prisma.dailyObjective.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyObjectiveFindManyArgs>(args?: SelectSubset<T, DailyObjectiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyObjective.
     * @param {DailyObjectiveCreateArgs} args - Arguments to create a DailyObjective.
     * @example
     * // Create one DailyObjective
     * const DailyObjective = await prisma.dailyObjective.create({
     *   data: {
     *     // ... data to create a DailyObjective
     *   }
     * })
     * 
     */
    create<T extends DailyObjectiveCreateArgs>(args: SelectSubset<T, DailyObjectiveCreateArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyObjectives.
     * @param {DailyObjectiveCreateManyArgs} args - Arguments to create many DailyObjectives.
     * @example
     * // Create many DailyObjectives
     * const dailyObjective = await prisma.dailyObjective.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyObjectiveCreateManyArgs>(args?: SelectSubset<T, DailyObjectiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyObjectives and returns the data saved in the database.
     * @param {DailyObjectiveCreateManyAndReturnArgs} args - Arguments to create many DailyObjectives.
     * @example
     * // Create many DailyObjectives
     * const dailyObjective = await prisma.dailyObjective.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyObjectives and only return the `id`
     * const dailyObjectiveWithIdOnly = await prisma.dailyObjective.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyObjectiveCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyObjectiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyObjective.
     * @param {DailyObjectiveDeleteArgs} args - Arguments to delete one DailyObjective.
     * @example
     * // Delete one DailyObjective
     * const DailyObjective = await prisma.dailyObjective.delete({
     *   where: {
     *     // ... filter to delete one DailyObjective
     *   }
     * })
     * 
     */
    delete<T extends DailyObjectiveDeleteArgs>(args: SelectSubset<T, DailyObjectiveDeleteArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyObjective.
     * @param {DailyObjectiveUpdateArgs} args - Arguments to update one DailyObjective.
     * @example
     * // Update one DailyObjective
     * const dailyObjective = await prisma.dailyObjective.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyObjectiveUpdateArgs>(args: SelectSubset<T, DailyObjectiveUpdateArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyObjectives.
     * @param {DailyObjectiveDeleteManyArgs} args - Arguments to filter DailyObjectives to delete.
     * @example
     * // Delete a few DailyObjectives
     * const { count } = await prisma.dailyObjective.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyObjectiveDeleteManyArgs>(args?: SelectSubset<T, DailyObjectiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyObjectives
     * const dailyObjective = await prisma.dailyObjective.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyObjectiveUpdateManyArgs>(args: SelectSubset<T, DailyObjectiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyObjectives and returns the data updated in the database.
     * @param {DailyObjectiveUpdateManyAndReturnArgs} args - Arguments to update many DailyObjectives.
     * @example
     * // Update many DailyObjectives
     * const dailyObjective = await prisma.dailyObjective.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyObjectives and only return the `id`
     * const dailyObjectiveWithIdOnly = await prisma.dailyObjective.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyObjectiveUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyObjectiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyObjective.
     * @param {DailyObjectiveUpsertArgs} args - Arguments to update or create a DailyObjective.
     * @example
     * // Update or create a DailyObjective
     * const dailyObjective = await prisma.dailyObjective.upsert({
     *   create: {
     *     // ... data to create a DailyObjective
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyObjective we want to update
     *   }
     * })
     */
    upsert<T extends DailyObjectiveUpsertArgs>(args: SelectSubset<T, DailyObjectiveUpsertArgs<ExtArgs>>): Prisma__DailyObjectiveClient<$Result.GetResult<Prisma.$DailyObjectivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyObjectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveCountArgs} args - Arguments to filter DailyObjectives to count.
     * @example
     * // Count the number of DailyObjectives
     * const count = await prisma.dailyObjective.count({
     *   where: {
     *     // ... the filter for the DailyObjectives we want to count
     *   }
     * })
    **/
    count<T extends DailyObjectiveCountArgs>(
      args?: Subset<T, DailyObjectiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyObjectiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyObjective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyObjectiveAggregateArgs>(args: Subset<T, DailyObjectiveAggregateArgs>): Prisma.PrismaPromise<GetDailyObjectiveAggregateType<T>>

    /**
     * Group by DailyObjective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyObjectiveGroupByArgs} args - Group by arguments.
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
      T extends DailyObjectiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyObjectiveGroupByArgs['orderBy'] }
        : { orderBy?: DailyObjectiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyObjectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyObjectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyObjective model
   */
  readonly fields: DailyObjectiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyObjective.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyObjectiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyObjective model
   */
  interface DailyObjectiveFieldRefs {
    readonly id: FieldRef<"DailyObjective", 'String'>
    readonly completedQuizzes: FieldRef<"DailyObjective", 'Int'>
    readonly targetQuizzes: FieldRef<"DailyObjective", 'Int'>
    readonly bonusUnlocked: FieldRef<"DailyObjective", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DailyObjective findUnique
   */
  export type DailyObjectiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter, which DailyObjective to fetch.
     */
    where: DailyObjectiveWhereUniqueInput
  }

  /**
   * DailyObjective findUniqueOrThrow
   */
  export type DailyObjectiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter, which DailyObjective to fetch.
     */
    where: DailyObjectiveWhereUniqueInput
  }

  /**
   * DailyObjective findFirst
   */
  export type DailyObjectiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter, which DailyObjective to fetch.
     */
    where?: DailyObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyObjectives to fetch.
     */
    orderBy?: DailyObjectiveOrderByWithRelationInput | DailyObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyObjectives.
     */
    cursor?: DailyObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyObjectives.
     */
    distinct?: DailyObjectiveScalarFieldEnum | DailyObjectiveScalarFieldEnum[]
  }

  /**
   * DailyObjective findFirstOrThrow
   */
  export type DailyObjectiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter, which DailyObjective to fetch.
     */
    where?: DailyObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyObjectives to fetch.
     */
    orderBy?: DailyObjectiveOrderByWithRelationInput | DailyObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyObjectives.
     */
    cursor?: DailyObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyObjectives.
     */
    distinct?: DailyObjectiveScalarFieldEnum | DailyObjectiveScalarFieldEnum[]
  }

  /**
   * DailyObjective findMany
   */
  export type DailyObjectiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter, which DailyObjectives to fetch.
     */
    where?: DailyObjectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyObjectives to fetch.
     */
    orderBy?: DailyObjectiveOrderByWithRelationInput | DailyObjectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyObjectives.
     */
    cursor?: DailyObjectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyObjectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyObjectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyObjectives.
     */
    distinct?: DailyObjectiveScalarFieldEnum | DailyObjectiveScalarFieldEnum[]
  }

  /**
   * DailyObjective create
   */
  export type DailyObjectiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyObjective.
     */
    data: XOR<DailyObjectiveCreateInput, DailyObjectiveUncheckedCreateInput>
  }

  /**
   * DailyObjective createMany
   */
  export type DailyObjectiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyObjectives.
     */
    data: DailyObjectiveCreateManyInput | DailyObjectiveCreateManyInput[]
  }

  /**
   * DailyObjective createManyAndReturn
   */
  export type DailyObjectiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * The data used to create many DailyObjectives.
     */
    data: DailyObjectiveCreateManyInput | DailyObjectiveCreateManyInput[]
  }

  /**
   * DailyObjective update
   */
  export type DailyObjectiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyObjective.
     */
    data: XOR<DailyObjectiveUpdateInput, DailyObjectiveUncheckedUpdateInput>
    /**
     * Choose, which DailyObjective to update.
     */
    where: DailyObjectiveWhereUniqueInput
  }

  /**
   * DailyObjective updateMany
   */
  export type DailyObjectiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyObjectives.
     */
    data: XOR<DailyObjectiveUpdateManyMutationInput, DailyObjectiveUncheckedUpdateManyInput>
    /**
     * Filter which DailyObjectives to update
     */
    where?: DailyObjectiveWhereInput
    /**
     * Limit how many DailyObjectives to update.
     */
    limit?: number
  }

  /**
   * DailyObjective updateManyAndReturn
   */
  export type DailyObjectiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * The data used to update DailyObjectives.
     */
    data: XOR<DailyObjectiveUpdateManyMutationInput, DailyObjectiveUncheckedUpdateManyInput>
    /**
     * Filter which DailyObjectives to update
     */
    where?: DailyObjectiveWhereInput
    /**
     * Limit how many DailyObjectives to update.
     */
    limit?: number
  }

  /**
   * DailyObjective upsert
   */
  export type DailyObjectiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyObjective to update in case it exists.
     */
    where: DailyObjectiveWhereUniqueInput
    /**
     * In case the DailyObjective found by the `where` argument doesn't exist, create a new DailyObjective with this data.
     */
    create: XOR<DailyObjectiveCreateInput, DailyObjectiveUncheckedCreateInput>
    /**
     * In case the DailyObjective was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyObjectiveUpdateInput, DailyObjectiveUncheckedUpdateInput>
  }

  /**
   * DailyObjective delete
   */
  export type DailyObjectiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
    /**
     * Filter which DailyObjective to delete.
     */
    where: DailyObjectiveWhereUniqueInput
  }

  /**
   * DailyObjective deleteMany
   */
  export type DailyObjectiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyObjectives to delete
     */
    where?: DailyObjectiveWhereInput
    /**
     * Limit how many DailyObjectives to delete.
     */
    limit?: number
  }

  /**
   * DailyObjective without action
   */
  export type DailyObjectiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyObjective
     */
    select?: DailyObjectiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyObjective
     */
    omit?: DailyObjectiveOmit<ExtArgs> | null
  }


  /**
   * Model UserCodeLabProgress
   */

  export type AggregateUserCodeLabProgress = {
    _count: UserCodeLabProgressCountAggregateOutputType | null
    _min: UserCodeLabProgressMinAggregateOutputType | null
    _max: UserCodeLabProgressMaxAggregateOutputType | null
  }

  export type UserCodeLabProgressMinAggregateOutputType = {
    userId: string | null
    activeModuleId: string | null
    itemProgress: string | null
    weeklyGoal: string | null
    growthDays: string | null
    updatedAt: Date | null
  }

  export type UserCodeLabProgressMaxAggregateOutputType = {
    userId: string | null
    activeModuleId: string | null
    itemProgress: string | null
    weeklyGoal: string | null
    growthDays: string | null
    updatedAt: Date | null
  }

  export type UserCodeLabProgressCountAggregateOutputType = {
    userId: number
    activeModuleId: number
    itemProgress: number
    weeklyGoal: number
    growthDays: number
    updatedAt: number
    _all: number
  }


  export type UserCodeLabProgressMinAggregateInputType = {
    userId?: true
    activeModuleId?: true
    itemProgress?: true
    weeklyGoal?: true
    growthDays?: true
    updatedAt?: true
  }

  export type UserCodeLabProgressMaxAggregateInputType = {
    userId?: true
    activeModuleId?: true
    itemProgress?: true
    weeklyGoal?: true
    growthDays?: true
    updatedAt?: true
  }

  export type UserCodeLabProgressCountAggregateInputType = {
    userId?: true
    activeModuleId?: true
    itemProgress?: true
    weeklyGoal?: true
    growthDays?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCodeLabProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCodeLabProgress to aggregate.
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCodeLabProgresses to fetch.
     */
    orderBy?: UserCodeLabProgressOrderByWithRelationInput | UserCodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCodeLabProgresses
    **/
    _count?: true | UserCodeLabProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCodeLabProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCodeLabProgressMaxAggregateInputType
  }

  export type GetUserCodeLabProgressAggregateType<T extends UserCodeLabProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCodeLabProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCodeLabProgress[P]>
      : GetScalarType<T[P], AggregateUserCodeLabProgress[P]>
  }




  export type UserCodeLabProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCodeLabProgressWhereInput
    orderBy?: UserCodeLabProgressOrderByWithAggregationInput | UserCodeLabProgressOrderByWithAggregationInput[]
    by: UserCodeLabProgressScalarFieldEnum[] | UserCodeLabProgressScalarFieldEnum
    having?: UserCodeLabProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCodeLabProgressCountAggregateInputType | true
    _min?: UserCodeLabProgressMinAggregateInputType
    _max?: UserCodeLabProgressMaxAggregateInputType
  }

  export type UserCodeLabProgressGroupByOutputType = {
    userId: string
    activeModuleId: string
    itemProgress: string
    weeklyGoal: string
    growthDays: string
    updatedAt: Date
    _count: UserCodeLabProgressCountAggregateOutputType | null
    _min: UserCodeLabProgressMinAggregateOutputType | null
    _max: UserCodeLabProgressMaxAggregateOutputType | null
  }

  type GetUserCodeLabProgressGroupByPayload<T extends UserCodeLabProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCodeLabProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCodeLabProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCodeLabProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCodeLabProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCodeLabProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    activeModuleId?: boolean
    itemProgress?: boolean
    weeklyGoal?: boolean
    growthDays?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userCodeLabProgress"]>

  export type UserCodeLabProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    activeModuleId?: boolean
    itemProgress?: boolean
    weeklyGoal?: boolean
    growthDays?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userCodeLabProgress"]>

  export type UserCodeLabProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    activeModuleId?: boolean
    itemProgress?: boolean
    weeklyGoal?: boolean
    growthDays?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userCodeLabProgress"]>

  export type UserCodeLabProgressSelectScalar = {
    userId?: boolean
    activeModuleId?: boolean
    itemProgress?: boolean
    weeklyGoal?: boolean
    growthDays?: boolean
    updatedAt?: boolean
  }

  export type UserCodeLabProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "activeModuleId" | "itemProgress" | "weeklyGoal" | "growthDays" | "updatedAt", ExtArgs["result"]["userCodeLabProgress"]>

  export type $UserCodeLabProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCodeLabProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      activeModuleId: string
      itemProgress: string
      weeklyGoal: string
      growthDays: string
      updatedAt: Date
    }, ExtArgs["result"]["userCodeLabProgress"]>
    composites: {}
  }

  type UserCodeLabProgressGetPayload<S extends boolean | null | undefined | UserCodeLabProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCodeLabProgressPayload, S>

  type UserCodeLabProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCodeLabProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCodeLabProgressCountAggregateInputType | true
    }

  export interface UserCodeLabProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCodeLabProgress'], meta: { name: 'UserCodeLabProgress' } }
    /**
     * Find zero or one UserCodeLabProgress that matches the filter.
     * @param {UserCodeLabProgressFindUniqueArgs} args - Arguments to find a UserCodeLabProgress
     * @example
     * // Get one UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCodeLabProgressFindUniqueArgs>(args: SelectSubset<T, UserCodeLabProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCodeLabProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCodeLabProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCodeLabProgress
     * @example
     * // Get one UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCodeLabProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCodeLabProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCodeLabProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressFindFirstArgs} args - Arguments to find a UserCodeLabProgress
     * @example
     * // Get one UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCodeLabProgressFindFirstArgs>(args?: SelectSubset<T, UserCodeLabProgressFindFirstArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCodeLabProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressFindFirstOrThrowArgs} args - Arguments to find a UserCodeLabProgress
     * @example
     * // Get one UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCodeLabProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCodeLabProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCodeLabProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCodeLabProgresses
     * const userCodeLabProgresses = await prisma.userCodeLabProgress.findMany()
     * 
     * // Get first 10 UserCodeLabProgresses
     * const userCodeLabProgresses = await prisma.userCodeLabProgress.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userCodeLabProgressWithUserIdOnly = await prisma.userCodeLabProgress.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserCodeLabProgressFindManyArgs>(args?: SelectSubset<T, UserCodeLabProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCodeLabProgress.
     * @param {UserCodeLabProgressCreateArgs} args - Arguments to create a UserCodeLabProgress.
     * @example
     * // Create one UserCodeLabProgress
     * const UserCodeLabProgress = await prisma.userCodeLabProgress.create({
     *   data: {
     *     // ... data to create a UserCodeLabProgress
     *   }
     * })
     * 
     */
    create<T extends UserCodeLabProgressCreateArgs>(args: SelectSubset<T, UserCodeLabProgressCreateArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCodeLabProgresses.
     * @param {UserCodeLabProgressCreateManyArgs} args - Arguments to create many UserCodeLabProgresses.
     * @example
     * // Create many UserCodeLabProgresses
     * const userCodeLabProgress = await prisma.userCodeLabProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCodeLabProgressCreateManyArgs>(args?: SelectSubset<T, UserCodeLabProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCodeLabProgresses and returns the data saved in the database.
     * @param {UserCodeLabProgressCreateManyAndReturnArgs} args - Arguments to create many UserCodeLabProgresses.
     * @example
     * // Create many UserCodeLabProgresses
     * const userCodeLabProgress = await prisma.userCodeLabProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCodeLabProgresses and only return the `userId`
     * const userCodeLabProgressWithUserIdOnly = await prisma.userCodeLabProgress.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCodeLabProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCodeLabProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCodeLabProgress.
     * @param {UserCodeLabProgressDeleteArgs} args - Arguments to delete one UserCodeLabProgress.
     * @example
     * // Delete one UserCodeLabProgress
     * const UserCodeLabProgress = await prisma.userCodeLabProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCodeLabProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCodeLabProgressDeleteArgs>(args: SelectSubset<T, UserCodeLabProgressDeleteArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCodeLabProgress.
     * @param {UserCodeLabProgressUpdateArgs} args - Arguments to update one UserCodeLabProgress.
     * @example
     * // Update one UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCodeLabProgressUpdateArgs>(args: SelectSubset<T, UserCodeLabProgressUpdateArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCodeLabProgresses.
     * @param {UserCodeLabProgressDeleteManyArgs} args - Arguments to filter UserCodeLabProgresses to delete.
     * @example
     * // Delete a few UserCodeLabProgresses
     * const { count } = await prisma.userCodeLabProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCodeLabProgressDeleteManyArgs>(args?: SelectSubset<T, UserCodeLabProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCodeLabProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCodeLabProgresses
     * const userCodeLabProgress = await prisma.userCodeLabProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCodeLabProgressUpdateManyArgs>(args: SelectSubset<T, UserCodeLabProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCodeLabProgresses and returns the data updated in the database.
     * @param {UserCodeLabProgressUpdateManyAndReturnArgs} args - Arguments to update many UserCodeLabProgresses.
     * @example
     * // Update many UserCodeLabProgresses
     * const userCodeLabProgress = await prisma.userCodeLabProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCodeLabProgresses and only return the `userId`
     * const userCodeLabProgressWithUserIdOnly = await prisma.userCodeLabProgress.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCodeLabProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCodeLabProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCodeLabProgress.
     * @param {UserCodeLabProgressUpsertArgs} args - Arguments to update or create a UserCodeLabProgress.
     * @example
     * // Update or create a UserCodeLabProgress
     * const userCodeLabProgress = await prisma.userCodeLabProgress.upsert({
     *   create: {
     *     // ... data to create a UserCodeLabProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCodeLabProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCodeLabProgressUpsertArgs>(args: SelectSubset<T, UserCodeLabProgressUpsertArgs<ExtArgs>>): Prisma__UserCodeLabProgressClient<$Result.GetResult<Prisma.$UserCodeLabProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCodeLabProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressCountArgs} args - Arguments to filter UserCodeLabProgresses to count.
     * @example
     * // Count the number of UserCodeLabProgresses
     * const count = await prisma.userCodeLabProgress.count({
     *   where: {
     *     // ... the filter for the UserCodeLabProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCodeLabProgressCountArgs>(
      args?: Subset<T, UserCodeLabProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCodeLabProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCodeLabProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCodeLabProgressAggregateArgs>(args: Subset<T, UserCodeLabProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCodeLabProgressAggregateType<T>>

    /**
     * Group by UserCodeLabProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCodeLabProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCodeLabProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCodeLabProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCodeLabProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCodeLabProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCodeLabProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCodeLabProgress model
   */
  readonly fields: UserCodeLabProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCodeLabProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCodeLabProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserCodeLabProgress model
   */
  interface UserCodeLabProgressFieldRefs {
    readonly userId: FieldRef<"UserCodeLabProgress", 'String'>
    readonly activeModuleId: FieldRef<"UserCodeLabProgress", 'String'>
    readonly itemProgress: FieldRef<"UserCodeLabProgress", 'String'>
    readonly weeklyGoal: FieldRef<"UserCodeLabProgress", 'String'>
    readonly growthDays: FieldRef<"UserCodeLabProgress", 'String'>
    readonly updatedAt: FieldRef<"UserCodeLabProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCodeLabProgress findUnique
   */
  export type UserCodeLabProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which UserCodeLabProgress to fetch.
     */
    where: UserCodeLabProgressWhereUniqueInput
  }

  /**
   * UserCodeLabProgress findUniqueOrThrow
   */
  export type UserCodeLabProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which UserCodeLabProgress to fetch.
     */
    where: UserCodeLabProgressWhereUniqueInput
  }

  /**
   * UserCodeLabProgress findFirst
   */
  export type UserCodeLabProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which UserCodeLabProgress to fetch.
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCodeLabProgresses to fetch.
     */
    orderBy?: UserCodeLabProgressOrderByWithRelationInput | UserCodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCodeLabProgresses.
     */
    cursor?: UserCodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCodeLabProgresses.
     */
    distinct?: UserCodeLabProgressScalarFieldEnum | UserCodeLabProgressScalarFieldEnum[]
  }

  /**
   * UserCodeLabProgress findFirstOrThrow
   */
  export type UserCodeLabProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which UserCodeLabProgress to fetch.
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCodeLabProgresses to fetch.
     */
    orderBy?: UserCodeLabProgressOrderByWithRelationInput | UserCodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCodeLabProgresses.
     */
    cursor?: UserCodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCodeLabProgresses.
     */
    distinct?: UserCodeLabProgressScalarFieldEnum | UserCodeLabProgressScalarFieldEnum[]
  }

  /**
   * UserCodeLabProgress findMany
   */
  export type UserCodeLabProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which UserCodeLabProgresses to fetch.
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCodeLabProgresses to fetch.
     */
    orderBy?: UserCodeLabProgressOrderByWithRelationInput | UserCodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCodeLabProgresses.
     */
    cursor?: UserCodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCodeLabProgresses.
     */
    distinct?: UserCodeLabProgressScalarFieldEnum | UserCodeLabProgressScalarFieldEnum[]
  }

  /**
   * UserCodeLabProgress create
   */
  export type UserCodeLabProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a UserCodeLabProgress.
     */
    data: XOR<UserCodeLabProgressCreateInput, UserCodeLabProgressUncheckedCreateInput>
  }

  /**
   * UserCodeLabProgress createMany
   */
  export type UserCodeLabProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCodeLabProgresses.
     */
    data: UserCodeLabProgressCreateManyInput | UserCodeLabProgressCreateManyInput[]
  }

  /**
   * UserCodeLabProgress createManyAndReturn
   */
  export type UserCodeLabProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserCodeLabProgresses.
     */
    data: UserCodeLabProgressCreateManyInput | UserCodeLabProgressCreateManyInput[]
  }

  /**
   * UserCodeLabProgress update
   */
  export type UserCodeLabProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a UserCodeLabProgress.
     */
    data: XOR<UserCodeLabProgressUpdateInput, UserCodeLabProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCodeLabProgress to update.
     */
    where: UserCodeLabProgressWhereUniqueInput
  }

  /**
   * UserCodeLabProgress updateMany
   */
  export type UserCodeLabProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCodeLabProgresses.
     */
    data: XOR<UserCodeLabProgressUpdateManyMutationInput, UserCodeLabProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCodeLabProgresses to update
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * Limit how many UserCodeLabProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCodeLabProgress updateManyAndReturn
   */
  export type UserCodeLabProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserCodeLabProgresses.
     */
    data: XOR<UserCodeLabProgressUpdateManyMutationInput, UserCodeLabProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCodeLabProgresses to update
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * Limit how many UserCodeLabProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCodeLabProgress upsert
   */
  export type UserCodeLabProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the UserCodeLabProgress to update in case it exists.
     */
    where: UserCodeLabProgressWhereUniqueInput
    /**
     * In case the UserCodeLabProgress found by the `where` argument doesn't exist, create a new UserCodeLabProgress with this data.
     */
    create: XOR<UserCodeLabProgressCreateInput, UserCodeLabProgressUncheckedCreateInput>
    /**
     * In case the UserCodeLabProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCodeLabProgressUpdateInput, UserCodeLabProgressUncheckedUpdateInput>
  }

  /**
   * UserCodeLabProgress delete
   */
  export type UserCodeLabProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter which UserCodeLabProgress to delete.
     */
    where: UserCodeLabProgressWhereUniqueInput
  }

  /**
   * UserCodeLabProgress deleteMany
   */
  export type UserCodeLabProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCodeLabProgresses to delete
     */
    where?: UserCodeLabProgressWhereInput
    /**
     * Limit how many UserCodeLabProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCodeLabProgress without action
   */
  export type UserCodeLabProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCodeLabProgress
     */
    select?: UserCodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCodeLabProgress
     */
    omit?: UserCodeLabProgressOmit<ExtArgs> | null
  }


  /**
   * Model CodeLabProgress
   */

  export type AggregateCodeLabProgress = {
    _count: CodeLabProgressCountAggregateOutputType | null
    _avg: CodeLabProgressAvgAggregateOutputType | null
    _sum: CodeLabProgressSumAggregateOutputType | null
    _min: CodeLabProgressMinAggregateOutputType | null
    _max: CodeLabProgressMaxAggregateOutputType | null
  }

  export type CodeLabProgressAvgAggregateOutputType = {
    completionPercentage: number | null
  }

  export type CodeLabProgressSumAggregateOutputType = {
    completionPercentage: number | null
  }

  export type CodeLabProgressMinAggregateOutputType = {
    id: string | null
    currentPath: string | null
    description: string | null
    completionPercentage: number | null
    status: string | null
  }

  export type CodeLabProgressMaxAggregateOutputType = {
    id: string | null
    currentPath: string | null
    description: string | null
    completionPercentage: number | null
    status: string | null
  }

  export type CodeLabProgressCountAggregateOutputType = {
    id: number
    currentPath: number
    description: number
    completionPercentage: number
    status: number
    _all: number
  }


  export type CodeLabProgressAvgAggregateInputType = {
    completionPercentage?: true
  }

  export type CodeLabProgressSumAggregateInputType = {
    completionPercentage?: true
  }

  export type CodeLabProgressMinAggregateInputType = {
    id?: true
    currentPath?: true
    description?: true
    completionPercentage?: true
    status?: true
  }

  export type CodeLabProgressMaxAggregateInputType = {
    id?: true
    currentPath?: true
    description?: true
    completionPercentage?: true
    status?: true
  }

  export type CodeLabProgressCountAggregateInputType = {
    id?: true
    currentPath?: true
    description?: true
    completionPercentage?: true
    status?: true
    _all?: true
  }

  export type CodeLabProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeLabProgress to aggregate.
     */
    where?: CodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLabProgresses to fetch.
     */
    orderBy?: CodeLabProgressOrderByWithRelationInput | CodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeLabProgresses
    **/
    _count?: true | CodeLabProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeLabProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeLabProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeLabProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeLabProgressMaxAggregateInputType
  }

  export type GetCodeLabProgressAggregateType<T extends CodeLabProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeLabProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeLabProgress[P]>
      : GetScalarType<T[P], AggregateCodeLabProgress[P]>
  }




  export type CodeLabProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeLabProgressWhereInput
    orderBy?: CodeLabProgressOrderByWithAggregationInput | CodeLabProgressOrderByWithAggregationInput[]
    by: CodeLabProgressScalarFieldEnum[] | CodeLabProgressScalarFieldEnum
    having?: CodeLabProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeLabProgressCountAggregateInputType | true
    _avg?: CodeLabProgressAvgAggregateInputType
    _sum?: CodeLabProgressSumAggregateInputType
    _min?: CodeLabProgressMinAggregateInputType
    _max?: CodeLabProgressMaxAggregateInputType
  }

  export type CodeLabProgressGroupByOutputType = {
    id: string
    currentPath: string
    description: string
    completionPercentage: number
    status: string
    _count: CodeLabProgressCountAggregateOutputType | null
    _avg: CodeLabProgressAvgAggregateOutputType | null
    _sum: CodeLabProgressSumAggregateOutputType | null
    _min: CodeLabProgressMinAggregateOutputType | null
    _max: CodeLabProgressMaxAggregateOutputType | null
  }

  type GetCodeLabProgressGroupByPayload<T extends CodeLabProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeLabProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeLabProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeLabProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CodeLabProgressGroupByOutputType[P]>
        }
      >
    >


  export type CodeLabProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPath?: boolean
    description?: boolean
    completionPercentage?: boolean
    status?: boolean
  }, ExtArgs["result"]["codeLabProgress"]>

  export type CodeLabProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPath?: boolean
    description?: boolean
    completionPercentage?: boolean
    status?: boolean
  }, ExtArgs["result"]["codeLabProgress"]>

  export type CodeLabProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currentPath?: boolean
    description?: boolean
    completionPercentage?: boolean
    status?: boolean
  }, ExtArgs["result"]["codeLabProgress"]>

  export type CodeLabProgressSelectScalar = {
    id?: boolean
    currentPath?: boolean
    description?: boolean
    completionPercentage?: boolean
    status?: boolean
  }

  export type CodeLabProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currentPath" | "description" | "completionPercentage" | "status", ExtArgs["result"]["codeLabProgress"]>

  export type $CodeLabProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeLabProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currentPath: string
      description: string
      completionPercentage: number
      status: string
    }, ExtArgs["result"]["codeLabProgress"]>
    composites: {}
  }

  type CodeLabProgressGetPayload<S extends boolean | null | undefined | CodeLabProgressDefaultArgs> = $Result.GetResult<Prisma.$CodeLabProgressPayload, S>

  type CodeLabProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeLabProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeLabProgressCountAggregateInputType | true
    }

  export interface CodeLabProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeLabProgress'], meta: { name: 'CodeLabProgress' } }
    /**
     * Find zero or one CodeLabProgress that matches the filter.
     * @param {CodeLabProgressFindUniqueArgs} args - Arguments to find a CodeLabProgress
     * @example
     * // Get one CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeLabProgressFindUniqueArgs>(args: SelectSubset<T, CodeLabProgressFindUniqueArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeLabProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeLabProgressFindUniqueOrThrowArgs} args - Arguments to find a CodeLabProgress
     * @example
     * // Get one CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeLabProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeLabProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeLabProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressFindFirstArgs} args - Arguments to find a CodeLabProgress
     * @example
     * // Get one CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeLabProgressFindFirstArgs>(args?: SelectSubset<T, CodeLabProgressFindFirstArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeLabProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressFindFirstOrThrowArgs} args - Arguments to find a CodeLabProgress
     * @example
     * // Get one CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeLabProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeLabProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeLabProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeLabProgresses
     * const codeLabProgresses = await prisma.codeLabProgress.findMany()
     * 
     * // Get first 10 CodeLabProgresses
     * const codeLabProgresses = await prisma.codeLabProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeLabProgressWithIdOnly = await prisma.codeLabProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeLabProgressFindManyArgs>(args?: SelectSubset<T, CodeLabProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeLabProgress.
     * @param {CodeLabProgressCreateArgs} args - Arguments to create a CodeLabProgress.
     * @example
     * // Create one CodeLabProgress
     * const CodeLabProgress = await prisma.codeLabProgress.create({
     *   data: {
     *     // ... data to create a CodeLabProgress
     *   }
     * })
     * 
     */
    create<T extends CodeLabProgressCreateArgs>(args: SelectSubset<T, CodeLabProgressCreateArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeLabProgresses.
     * @param {CodeLabProgressCreateManyArgs} args - Arguments to create many CodeLabProgresses.
     * @example
     * // Create many CodeLabProgresses
     * const codeLabProgress = await prisma.codeLabProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeLabProgressCreateManyArgs>(args?: SelectSubset<T, CodeLabProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeLabProgresses and returns the data saved in the database.
     * @param {CodeLabProgressCreateManyAndReturnArgs} args - Arguments to create many CodeLabProgresses.
     * @example
     * // Create many CodeLabProgresses
     * const codeLabProgress = await prisma.codeLabProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeLabProgresses and only return the `id`
     * const codeLabProgressWithIdOnly = await prisma.codeLabProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeLabProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeLabProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeLabProgress.
     * @param {CodeLabProgressDeleteArgs} args - Arguments to delete one CodeLabProgress.
     * @example
     * // Delete one CodeLabProgress
     * const CodeLabProgress = await prisma.codeLabProgress.delete({
     *   where: {
     *     // ... filter to delete one CodeLabProgress
     *   }
     * })
     * 
     */
    delete<T extends CodeLabProgressDeleteArgs>(args: SelectSubset<T, CodeLabProgressDeleteArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeLabProgress.
     * @param {CodeLabProgressUpdateArgs} args - Arguments to update one CodeLabProgress.
     * @example
     * // Update one CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeLabProgressUpdateArgs>(args: SelectSubset<T, CodeLabProgressUpdateArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeLabProgresses.
     * @param {CodeLabProgressDeleteManyArgs} args - Arguments to filter CodeLabProgresses to delete.
     * @example
     * // Delete a few CodeLabProgresses
     * const { count } = await prisma.codeLabProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeLabProgressDeleteManyArgs>(args?: SelectSubset<T, CodeLabProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeLabProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeLabProgresses
     * const codeLabProgress = await prisma.codeLabProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeLabProgressUpdateManyArgs>(args: SelectSubset<T, CodeLabProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeLabProgresses and returns the data updated in the database.
     * @param {CodeLabProgressUpdateManyAndReturnArgs} args - Arguments to update many CodeLabProgresses.
     * @example
     * // Update many CodeLabProgresses
     * const codeLabProgress = await prisma.codeLabProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeLabProgresses and only return the `id`
     * const codeLabProgressWithIdOnly = await prisma.codeLabProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeLabProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeLabProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeLabProgress.
     * @param {CodeLabProgressUpsertArgs} args - Arguments to update or create a CodeLabProgress.
     * @example
     * // Update or create a CodeLabProgress
     * const codeLabProgress = await prisma.codeLabProgress.upsert({
     *   create: {
     *     // ... data to create a CodeLabProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeLabProgress we want to update
     *   }
     * })
     */
    upsert<T extends CodeLabProgressUpsertArgs>(args: SelectSubset<T, CodeLabProgressUpsertArgs<ExtArgs>>): Prisma__CodeLabProgressClient<$Result.GetResult<Prisma.$CodeLabProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeLabProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressCountArgs} args - Arguments to filter CodeLabProgresses to count.
     * @example
     * // Count the number of CodeLabProgresses
     * const count = await prisma.codeLabProgress.count({
     *   where: {
     *     // ... the filter for the CodeLabProgresses we want to count
     *   }
     * })
    **/
    count<T extends CodeLabProgressCountArgs>(
      args?: Subset<T, CodeLabProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeLabProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeLabProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeLabProgressAggregateArgs>(args: Subset<T, CodeLabProgressAggregateArgs>): Prisma.PrismaPromise<GetCodeLabProgressAggregateType<T>>

    /**
     * Group by CodeLabProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeLabProgressGroupByArgs} args - Group by arguments.
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
      T extends CodeLabProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeLabProgressGroupByArgs['orderBy'] }
        : { orderBy?: CodeLabProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeLabProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeLabProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeLabProgress model
   */
  readonly fields: CodeLabProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeLabProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeLabProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CodeLabProgress model
   */
  interface CodeLabProgressFieldRefs {
    readonly id: FieldRef<"CodeLabProgress", 'String'>
    readonly currentPath: FieldRef<"CodeLabProgress", 'String'>
    readonly description: FieldRef<"CodeLabProgress", 'String'>
    readonly completionPercentage: FieldRef<"CodeLabProgress", 'Int'>
    readonly status: FieldRef<"CodeLabProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CodeLabProgress findUnique
   */
  export type CodeLabProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which CodeLabProgress to fetch.
     */
    where: CodeLabProgressWhereUniqueInput
  }

  /**
   * CodeLabProgress findUniqueOrThrow
   */
  export type CodeLabProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which CodeLabProgress to fetch.
     */
    where: CodeLabProgressWhereUniqueInput
  }

  /**
   * CodeLabProgress findFirst
   */
  export type CodeLabProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which CodeLabProgress to fetch.
     */
    where?: CodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLabProgresses to fetch.
     */
    orderBy?: CodeLabProgressOrderByWithRelationInput | CodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeLabProgresses.
     */
    cursor?: CodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeLabProgresses.
     */
    distinct?: CodeLabProgressScalarFieldEnum | CodeLabProgressScalarFieldEnum[]
  }

  /**
   * CodeLabProgress findFirstOrThrow
   */
  export type CodeLabProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which CodeLabProgress to fetch.
     */
    where?: CodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLabProgresses to fetch.
     */
    orderBy?: CodeLabProgressOrderByWithRelationInput | CodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeLabProgresses.
     */
    cursor?: CodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeLabProgresses.
     */
    distinct?: CodeLabProgressScalarFieldEnum | CodeLabProgressScalarFieldEnum[]
  }

  /**
   * CodeLabProgress findMany
   */
  export type CodeLabProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter, which CodeLabProgresses to fetch.
     */
    where?: CodeLabProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeLabProgresses to fetch.
     */
    orderBy?: CodeLabProgressOrderByWithRelationInput | CodeLabProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeLabProgresses.
     */
    cursor?: CodeLabProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeLabProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeLabProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeLabProgresses.
     */
    distinct?: CodeLabProgressScalarFieldEnum | CodeLabProgressScalarFieldEnum[]
  }

  /**
   * CodeLabProgress create
   */
  export type CodeLabProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeLabProgress.
     */
    data: XOR<CodeLabProgressCreateInput, CodeLabProgressUncheckedCreateInput>
  }

  /**
   * CodeLabProgress createMany
   */
  export type CodeLabProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeLabProgresses.
     */
    data: CodeLabProgressCreateManyInput | CodeLabProgressCreateManyInput[]
  }

  /**
   * CodeLabProgress createManyAndReturn
   */
  export type CodeLabProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CodeLabProgresses.
     */
    data: CodeLabProgressCreateManyInput | CodeLabProgressCreateManyInput[]
  }

  /**
   * CodeLabProgress update
   */
  export type CodeLabProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeLabProgress.
     */
    data: XOR<CodeLabProgressUpdateInput, CodeLabProgressUncheckedUpdateInput>
    /**
     * Choose, which CodeLabProgress to update.
     */
    where: CodeLabProgressWhereUniqueInput
  }

  /**
   * CodeLabProgress updateMany
   */
  export type CodeLabProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeLabProgresses.
     */
    data: XOR<CodeLabProgressUpdateManyMutationInput, CodeLabProgressUncheckedUpdateManyInput>
    /**
     * Filter which CodeLabProgresses to update
     */
    where?: CodeLabProgressWhereInput
    /**
     * Limit how many CodeLabProgresses to update.
     */
    limit?: number
  }

  /**
   * CodeLabProgress updateManyAndReturn
   */
  export type CodeLabProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * The data used to update CodeLabProgresses.
     */
    data: XOR<CodeLabProgressUpdateManyMutationInput, CodeLabProgressUncheckedUpdateManyInput>
    /**
     * Filter which CodeLabProgresses to update
     */
    where?: CodeLabProgressWhereInput
    /**
     * Limit how many CodeLabProgresses to update.
     */
    limit?: number
  }

  /**
   * CodeLabProgress upsert
   */
  export type CodeLabProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeLabProgress to update in case it exists.
     */
    where: CodeLabProgressWhereUniqueInput
    /**
     * In case the CodeLabProgress found by the `where` argument doesn't exist, create a new CodeLabProgress with this data.
     */
    create: XOR<CodeLabProgressCreateInput, CodeLabProgressUncheckedCreateInput>
    /**
     * In case the CodeLabProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeLabProgressUpdateInput, CodeLabProgressUncheckedUpdateInput>
  }

  /**
   * CodeLabProgress delete
   */
  export type CodeLabProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
    /**
     * Filter which CodeLabProgress to delete.
     */
    where: CodeLabProgressWhereUniqueInput
  }

  /**
   * CodeLabProgress deleteMany
   */
  export type CodeLabProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeLabProgresses to delete
     */
    where?: CodeLabProgressWhereInput
    /**
     * Limit how many CodeLabProgresses to delete.
     */
    limit?: number
  }

  /**
   * CodeLabProgress without action
   */
  export type CodeLabProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeLabProgress
     */
    select?: CodeLabProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeLabProgress
     */
    omit?: CodeLabProgressOmit<ExtArgs> | null
  }


  /**
   * Model GrowthJourney
   */

  export type AggregateGrowthJourney = {
    _count: GrowthJourneyCountAggregateOutputType | null
    _min: GrowthJourneyMinAggregateOutputType | null
    _max: GrowthJourneyMaxAggregateOutputType | null
  }

  export type GrowthJourneyMinAggregateOutputType = {
    id: string | null
    weeklyGoal: string | null
    days: string | null
  }

  export type GrowthJourneyMaxAggregateOutputType = {
    id: string | null
    weeklyGoal: string | null
    days: string | null
  }

  export type GrowthJourneyCountAggregateOutputType = {
    id: number
    weeklyGoal: number
    days: number
    _all: number
  }


  export type GrowthJourneyMinAggregateInputType = {
    id?: true
    weeklyGoal?: true
    days?: true
  }

  export type GrowthJourneyMaxAggregateInputType = {
    id?: true
    weeklyGoal?: true
    days?: true
  }

  export type GrowthJourneyCountAggregateInputType = {
    id?: true
    weeklyGoal?: true
    days?: true
    _all?: true
  }

  export type GrowthJourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrowthJourney to aggregate.
     */
    where?: GrowthJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrowthJourneys to fetch.
     */
    orderBy?: GrowthJourneyOrderByWithRelationInput | GrowthJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrowthJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrowthJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrowthJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrowthJourneys
    **/
    _count?: true | GrowthJourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrowthJourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrowthJourneyMaxAggregateInputType
  }

  export type GetGrowthJourneyAggregateType<T extends GrowthJourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateGrowthJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrowthJourney[P]>
      : GetScalarType<T[P], AggregateGrowthJourney[P]>
  }




  export type GrowthJourneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrowthJourneyWhereInput
    orderBy?: GrowthJourneyOrderByWithAggregationInput | GrowthJourneyOrderByWithAggregationInput[]
    by: GrowthJourneyScalarFieldEnum[] | GrowthJourneyScalarFieldEnum
    having?: GrowthJourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrowthJourneyCountAggregateInputType | true
    _min?: GrowthJourneyMinAggregateInputType
    _max?: GrowthJourneyMaxAggregateInputType
  }

  export type GrowthJourneyGroupByOutputType = {
    id: string
    weeklyGoal: string
    days: string
    _count: GrowthJourneyCountAggregateOutputType | null
    _min: GrowthJourneyMinAggregateOutputType | null
    _max: GrowthJourneyMaxAggregateOutputType | null
  }

  type GetGrowthJourneyGroupByPayload<T extends GrowthJourneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrowthJourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrowthJourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrowthJourneyGroupByOutputType[P]>
            : GetScalarType<T[P], GrowthJourneyGroupByOutputType[P]>
        }
      >
    >


  export type GrowthJourneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklyGoal?: boolean
    days?: boolean
  }, ExtArgs["result"]["growthJourney"]>

  export type GrowthJourneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklyGoal?: boolean
    days?: boolean
  }, ExtArgs["result"]["growthJourney"]>

  export type GrowthJourneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weeklyGoal?: boolean
    days?: boolean
  }, ExtArgs["result"]["growthJourney"]>

  export type GrowthJourneySelectScalar = {
    id?: boolean
    weeklyGoal?: boolean
    days?: boolean
  }

  export type GrowthJourneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weeklyGoal" | "days", ExtArgs["result"]["growthJourney"]>

  export type $GrowthJourneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrowthJourney"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weeklyGoal: string
      days: string
    }, ExtArgs["result"]["growthJourney"]>
    composites: {}
  }

  type GrowthJourneyGetPayload<S extends boolean | null | undefined | GrowthJourneyDefaultArgs> = $Result.GetResult<Prisma.$GrowthJourneyPayload, S>

  type GrowthJourneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrowthJourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrowthJourneyCountAggregateInputType | true
    }

  export interface GrowthJourneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrowthJourney'], meta: { name: 'GrowthJourney' } }
    /**
     * Find zero or one GrowthJourney that matches the filter.
     * @param {GrowthJourneyFindUniqueArgs} args - Arguments to find a GrowthJourney
     * @example
     * // Get one GrowthJourney
     * const growthJourney = await prisma.growthJourney.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrowthJourneyFindUniqueArgs>(args: SelectSubset<T, GrowthJourneyFindUniqueArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrowthJourney that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrowthJourneyFindUniqueOrThrowArgs} args - Arguments to find a GrowthJourney
     * @example
     * // Get one GrowthJourney
     * const growthJourney = await prisma.growthJourney.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrowthJourneyFindUniqueOrThrowArgs>(args: SelectSubset<T, GrowthJourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrowthJourney that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyFindFirstArgs} args - Arguments to find a GrowthJourney
     * @example
     * // Get one GrowthJourney
     * const growthJourney = await prisma.growthJourney.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrowthJourneyFindFirstArgs>(args?: SelectSubset<T, GrowthJourneyFindFirstArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrowthJourney that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyFindFirstOrThrowArgs} args - Arguments to find a GrowthJourney
     * @example
     * // Get one GrowthJourney
     * const growthJourney = await prisma.growthJourney.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrowthJourneyFindFirstOrThrowArgs>(args?: SelectSubset<T, GrowthJourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrowthJourneys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrowthJourneys
     * const growthJourneys = await prisma.growthJourney.findMany()
     * 
     * // Get first 10 GrowthJourneys
     * const growthJourneys = await prisma.growthJourney.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const growthJourneyWithIdOnly = await prisma.growthJourney.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrowthJourneyFindManyArgs>(args?: SelectSubset<T, GrowthJourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrowthJourney.
     * @param {GrowthJourneyCreateArgs} args - Arguments to create a GrowthJourney.
     * @example
     * // Create one GrowthJourney
     * const GrowthJourney = await prisma.growthJourney.create({
     *   data: {
     *     // ... data to create a GrowthJourney
     *   }
     * })
     * 
     */
    create<T extends GrowthJourneyCreateArgs>(args: SelectSubset<T, GrowthJourneyCreateArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrowthJourneys.
     * @param {GrowthJourneyCreateManyArgs} args - Arguments to create many GrowthJourneys.
     * @example
     * // Create many GrowthJourneys
     * const growthJourney = await prisma.growthJourney.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrowthJourneyCreateManyArgs>(args?: SelectSubset<T, GrowthJourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrowthJourneys and returns the data saved in the database.
     * @param {GrowthJourneyCreateManyAndReturnArgs} args - Arguments to create many GrowthJourneys.
     * @example
     * // Create many GrowthJourneys
     * const growthJourney = await prisma.growthJourney.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrowthJourneys and only return the `id`
     * const growthJourneyWithIdOnly = await prisma.growthJourney.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrowthJourneyCreateManyAndReturnArgs>(args?: SelectSubset<T, GrowthJourneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrowthJourney.
     * @param {GrowthJourneyDeleteArgs} args - Arguments to delete one GrowthJourney.
     * @example
     * // Delete one GrowthJourney
     * const GrowthJourney = await prisma.growthJourney.delete({
     *   where: {
     *     // ... filter to delete one GrowthJourney
     *   }
     * })
     * 
     */
    delete<T extends GrowthJourneyDeleteArgs>(args: SelectSubset<T, GrowthJourneyDeleteArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrowthJourney.
     * @param {GrowthJourneyUpdateArgs} args - Arguments to update one GrowthJourney.
     * @example
     * // Update one GrowthJourney
     * const growthJourney = await prisma.growthJourney.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrowthJourneyUpdateArgs>(args: SelectSubset<T, GrowthJourneyUpdateArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrowthJourneys.
     * @param {GrowthJourneyDeleteManyArgs} args - Arguments to filter GrowthJourneys to delete.
     * @example
     * // Delete a few GrowthJourneys
     * const { count } = await prisma.growthJourney.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrowthJourneyDeleteManyArgs>(args?: SelectSubset<T, GrowthJourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrowthJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrowthJourneys
     * const growthJourney = await prisma.growthJourney.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrowthJourneyUpdateManyArgs>(args: SelectSubset<T, GrowthJourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrowthJourneys and returns the data updated in the database.
     * @param {GrowthJourneyUpdateManyAndReturnArgs} args - Arguments to update many GrowthJourneys.
     * @example
     * // Update many GrowthJourneys
     * const growthJourney = await prisma.growthJourney.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrowthJourneys and only return the `id`
     * const growthJourneyWithIdOnly = await prisma.growthJourney.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GrowthJourneyUpdateManyAndReturnArgs>(args: SelectSubset<T, GrowthJourneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrowthJourney.
     * @param {GrowthJourneyUpsertArgs} args - Arguments to update or create a GrowthJourney.
     * @example
     * // Update or create a GrowthJourney
     * const growthJourney = await prisma.growthJourney.upsert({
     *   create: {
     *     // ... data to create a GrowthJourney
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrowthJourney we want to update
     *   }
     * })
     */
    upsert<T extends GrowthJourneyUpsertArgs>(args: SelectSubset<T, GrowthJourneyUpsertArgs<ExtArgs>>): Prisma__GrowthJourneyClient<$Result.GetResult<Prisma.$GrowthJourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrowthJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyCountArgs} args - Arguments to filter GrowthJourneys to count.
     * @example
     * // Count the number of GrowthJourneys
     * const count = await prisma.growthJourney.count({
     *   where: {
     *     // ... the filter for the GrowthJourneys we want to count
     *   }
     * })
    **/
    count<T extends GrowthJourneyCountArgs>(
      args?: Subset<T, GrowthJourneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrowthJourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrowthJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrowthJourneyAggregateArgs>(args: Subset<T, GrowthJourneyAggregateArgs>): Prisma.PrismaPromise<GetGrowthJourneyAggregateType<T>>

    /**
     * Group by GrowthJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrowthJourneyGroupByArgs} args - Group by arguments.
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
      T extends GrowthJourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrowthJourneyGroupByArgs['orderBy'] }
        : { orderBy?: GrowthJourneyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrowthJourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrowthJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrowthJourney model
   */
  readonly fields: GrowthJourneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrowthJourney.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrowthJourneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GrowthJourney model
   */
  interface GrowthJourneyFieldRefs {
    readonly id: FieldRef<"GrowthJourney", 'String'>
    readonly weeklyGoal: FieldRef<"GrowthJourney", 'String'>
    readonly days: FieldRef<"GrowthJourney", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrowthJourney findUnique
   */
  export type GrowthJourneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter, which GrowthJourney to fetch.
     */
    where: GrowthJourneyWhereUniqueInput
  }

  /**
   * GrowthJourney findUniqueOrThrow
   */
  export type GrowthJourneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter, which GrowthJourney to fetch.
     */
    where: GrowthJourneyWhereUniqueInput
  }

  /**
   * GrowthJourney findFirst
   */
  export type GrowthJourneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter, which GrowthJourney to fetch.
     */
    where?: GrowthJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrowthJourneys to fetch.
     */
    orderBy?: GrowthJourneyOrderByWithRelationInput | GrowthJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrowthJourneys.
     */
    cursor?: GrowthJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrowthJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrowthJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrowthJourneys.
     */
    distinct?: GrowthJourneyScalarFieldEnum | GrowthJourneyScalarFieldEnum[]
  }

  /**
   * GrowthJourney findFirstOrThrow
   */
  export type GrowthJourneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter, which GrowthJourney to fetch.
     */
    where?: GrowthJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrowthJourneys to fetch.
     */
    orderBy?: GrowthJourneyOrderByWithRelationInput | GrowthJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrowthJourneys.
     */
    cursor?: GrowthJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrowthJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrowthJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrowthJourneys.
     */
    distinct?: GrowthJourneyScalarFieldEnum | GrowthJourneyScalarFieldEnum[]
  }

  /**
   * GrowthJourney findMany
   */
  export type GrowthJourneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter, which GrowthJourneys to fetch.
     */
    where?: GrowthJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrowthJourneys to fetch.
     */
    orderBy?: GrowthJourneyOrderByWithRelationInput | GrowthJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrowthJourneys.
     */
    cursor?: GrowthJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrowthJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrowthJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrowthJourneys.
     */
    distinct?: GrowthJourneyScalarFieldEnum | GrowthJourneyScalarFieldEnum[]
  }

  /**
   * GrowthJourney create
   */
  export type GrowthJourneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * The data needed to create a GrowthJourney.
     */
    data: XOR<GrowthJourneyCreateInput, GrowthJourneyUncheckedCreateInput>
  }

  /**
   * GrowthJourney createMany
   */
  export type GrowthJourneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrowthJourneys.
     */
    data: GrowthJourneyCreateManyInput | GrowthJourneyCreateManyInput[]
  }

  /**
   * GrowthJourney createManyAndReturn
   */
  export type GrowthJourneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * The data used to create many GrowthJourneys.
     */
    data: GrowthJourneyCreateManyInput | GrowthJourneyCreateManyInput[]
  }

  /**
   * GrowthJourney update
   */
  export type GrowthJourneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * The data needed to update a GrowthJourney.
     */
    data: XOR<GrowthJourneyUpdateInput, GrowthJourneyUncheckedUpdateInput>
    /**
     * Choose, which GrowthJourney to update.
     */
    where: GrowthJourneyWhereUniqueInput
  }

  /**
   * GrowthJourney updateMany
   */
  export type GrowthJourneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrowthJourneys.
     */
    data: XOR<GrowthJourneyUpdateManyMutationInput, GrowthJourneyUncheckedUpdateManyInput>
    /**
     * Filter which GrowthJourneys to update
     */
    where?: GrowthJourneyWhereInput
    /**
     * Limit how many GrowthJourneys to update.
     */
    limit?: number
  }

  /**
   * GrowthJourney updateManyAndReturn
   */
  export type GrowthJourneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * The data used to update GrowthJourneys.
     */
    data: XOR<GrowthJourneyUpdateManyMutationInput, GrowthJourneyUncheckedUpdateManyInput>
    /**
     * Filter which GrowthJourneys to update
     */
    where?: GrowthJourneyWhereInput
    /**
     * Limit how many GrowthJourneys to update.
     */
    limit?: number
  }

  /**
   * GrowthJourney upsert
   */
  export type GrowthJourneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * The filter to search for the GrowthJourney to update in case it exists.
     */
    where: GrowthJourneyWhereUniqueInput
    /**
     * In case the GrowthJourney found by the `where` argument doesn't exist, create a new GrowthJourney with this data.
     */
    create: XOR<GrowthJourneyCreateInput, GrowthJourneyUncheckedCreateInput>
    /**
     * In case the GrowthJourney was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrowthJourneyUpdateInput, GrowthJourneyUncheckedUpdateInput>
  }

  /**
   * GrowthJourney delete
   */
  export type GrowthJourneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
    /**
     * Filter which GrowthJourney to delete.
     */
    where: GrowthJourneyWhereUniqueInput
  }

  /**
   * GrowthJourney deleteMany
   */
  export type GrowthJourneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrowthJourneys to delete
     */
    where?: GrowthJourneyWhereInput
    /**
     * Limit how many GrowthJourneys to delete.
     */
    limit?: number
  }

  /**
   * GrowthJourney without action
   */
  export type GrowthJourneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrowthJourney
     */
    select?: GrowthJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrowthJourney
     */
    omit?: GrowthJourneyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    teacherCardId: 'teacherCardId',
    avatarUrl: 'avatarUrl',
    initials: 'initials',
    email: 'email',
    stars: 'stars',
    exp: 'exp',
    streak: 'streak',
    enrolledClassIds: 'enrolledClassIds',
    createdClassIds: 'createdClassIds',
    equippedGear: 'equippedGear',
    voiceId: 'voiceId',
    speechSpeed: 'speechSpeed',
    avatarPreference: 'avatarPreference',
    status: 'status',
    strength: 'strength',
    progress: 'progress',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    section: 'section',
    subject: 'subject',
    teacherId: 'teacherId',
    teacherName: 'teacherName',
    studentCount: 'studentCount',
    bannerColor: 'bannerColor',
    schedule: 'schedule',
    progress: 'progress'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const ClassMaterialScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    title: 'title',
    uploadedAt: 'uploadedAt',
    summary: 'summary',
    fileName: 'fileName',
    filePath: 'filePath',
    mimeType: 'mimeType',
    uploadedById: 'uploadedById'
  };

  export type ClassMaterialScalarFieldEnum = (typeof ClassMaterialScalarFieldEnum)[keyof typeof ClassMaterialScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    materialId: 'materialId',
    title: 'title',
    dueDate: 'dueDate',
    totalPoints: 'totalPoints',
    status: 'status',
    submissionCount: 'submissionCount',
    score: 'score'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentResultScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    studentId: 'studentId',
    studentName: 'studentName',
    score: 'score',
    totalPoints: 'totalPoints',
    answers: 'answers',
    status: 'status',
    submittedAt: 'submittedAt'
  };

  export type AssignmentResultScalarFieldEnum = (typeof AssignmentResultScalarFieldEnum)[keyof typeof AssignmentResultScalarFieldEnum]


  export const AssignmentQuizScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    questions: 'questions'
  };

  export type AssignmentQuizScalarFieldEnum = (typeof AssignmentQuizScalarFieldEnum)[keyof typeof AssignmentQuizScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    title: 'title',
    questionCount: 'questionCount',
    xpReward: 'xpReward',
    badgeColor: 'badgeColor'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizQuestionSetScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    questions: 'questions'
  };

  export type QuizQuestionSetScalarFieldEnum = (typeof QuizQuestionSetScalarFieldEnum)[keyof typeof QuizQuestionSetScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    difficulty: 'difficulty',
    starsReward: 'starsReward',
    content: 'content'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const WardrobeItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    locked: 'locked',
    lvl: 'lvl'
  };

  export type WardrobeItemScalarFieldEnum = (typeof WardrobeItemScalarFieldEnum)[keyof typeof WardrobeItemScalarFieldEnum]


  export const AiVoiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc'
  };

  export type AiVoiceScalarFieldEnum = (typeof AiVoiceScalarFieldEnum)[keyof typeof AiVoiceScalarFieldEnum]


  export const CodeModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    level: 'level',
    icon: 'icon',
    lessons: 'lessons',
    hours: 'hours',
    accentClass: 'accentClass',
    bgIconClass: 'bgIconClass',
    isWide: 'isWide',
    isNew: 'isNew',
    comingSoon: 'comingSoon',
    category: 'category'
  };

  export type CodeModuleScalarFieldEnum = (typeof CodeModuleScalarFieldEnum)[keyof typeof CodeModuleScalarFieldEnum]


  export const CodeModuleCurriculumScalarFieldEnum: {
    moduleId: 'moduleId',
    sourceUrl: 'sourceUrl',
    sourceLabel: 'sourceLabel',
    curriculum: 'curriculum'
  };

  export type CodeModuleCurriculumScalarFieldEnum = (typeof CodeModuleCurriculumScalarFieldEnum)[keyof typeof CodeModuleCurriculumScalarFieldEnum]


  export const DailyObjectiveScalarFieldEnum: {
    id: 'id',
    completedQuizzes: 'completedQuizzes',
    targetQuizzes: 'targetQuizzes',
    bonusUnlocked: 'bonusUnlocked'
  };

  export type DailyObjectiveScalarFieldEnum = (typeof DailyObjectiveScalarFieldEnum)[keyof typeof DailyObjectiveScalarFieldEnum]


  export const UserCodeLabProgressScalarFieldEnum: {
    userId: 'userId',
    activeModuleId: 'activeModuleId',
    itemProgress: 'itemProgress',
    weeklyGoal: 'weeklyGoal',
    growthDays: 'growthDays',
    updatedAt: 'updatedAt'
  };

  export type UserCodeLabProgressScalarFieldEnum = (typeof UserCodeLabProgressScalarFieldEnum)[keyof typeof UserCodeLabProgressScalarFieldEnum]


  export const CodeLabProgressScalarFieldEnum: {
    id: 'id',
    currentPath: 'currentPath',
    description: 'description',
    completionPercentage: 'completionPercentage',
    status: 'status'
  };

  export type CodeLabProgressScalarFieldEnum = (typeof CodeLabProgressScalarFieldEnum)[keyof typeof CodeLabProgressScalarFieldEnum]


  export const GrowthJourneyScalarFieldEnum: {
    id: 'id',
    weeklyGoal: 'weeklyGoal',
    days: 'days'
  };

  export type GrowthJourneyScalarFieldEnum = (typeof GrowthJourneyScalarFieldEnum)[keyof typeof GrowthJourneyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    teacherCardId?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    initials?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    stars?: IntFilter<"User"> | number
    exp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    enrolledClassIds?: StringFilter<"User"> | string
    createdClassIds?: StringFilter<"User"> | string
    equippedGear?: StringNullableFilter<"User"> | string | null
    voiceId?: StringNullableFilter<"User"> | string | null
    speechSpeed?: FloatNullableFilter<"User"> | number | null
    avatarPreference?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    strength?: StringNullableFilter<"User"> | string | null
    progress?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    teacherCardId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    initials?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    enrolledClassIds?: SortOrder
    createdClassIds?: SortOrder
    equippedGear?: SortOrderInput | SortOrder
    voiceId?: SortOrderInput | SortOrder
    speechSpeed?: SortOrderInput | SortOrder
    avatarPreference?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    strength?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    teacherCardId?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    initials?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    stars?: IntFilter<"User"> | number
    exp?: IntFilter<"User"> | number
    streak?: IntFilter<"User"> | number
    enrolledClassIds?: StringFilter<"User"> | string
    createdClassIds?: StringFilter<"User"> | string
    equippedGear?: StringNullableFilter<"User"> | string | null
    voiceId?: StringNullableFilter<"User"> | string | null
    speechSpeed?: FloatNullableFilter<"User"> | number | null
    avatarPreference?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    strength?: StringNullableFilter<"User"> | string | null
    progress?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    teacherCardId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    initials?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    enrolledClassIds?: SortOrder
    createdClassIds?: SortOrder
    equippedGear?: SortOrderInput | SortOrder
    voiceId?: SortOrderInput | SortOrder
    speechSpeed?: SortOrderInput | SortOrder
    avatarPreference?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    strength?: SortOrderInput | SortOrder
    progress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    teacherCardId?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    initials?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    stars?: IntWithAggregatesFilter<"User"> | number
    exp?: IntWithAggregatesFilter<"User"> | number
    streak?: IntWithAggregatesFilter<"User"> | number
    enrolledClassIds?: StringWithAggregatesFilter<"User"> | string
    createdClassIds?: StringWithAggregatesFilter<"User"> | string
    equippedGear?: StringNullableWithAggregatesFilter<"User"> | string | null
    voiceId?: StringNullableWithAggregatesFilter<"User"> | string | null
    speechSpeed?: FloatNullableWithAggregatesFilter<"User"> | number | null
    avatarPreference?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    strength?: StringNullableWithAggregatesFilter<"User"> | string | null
    progress?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: StringFilter<"Classroom"> | string
    code?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    teacherId?: StringFilter<"Classroom"> | string
    teacherName?: StringFilter<"Classroom"> | string
    studentCount?: IntFilter<"Classroom"> | number
    bannerColor?: StringFilter<"Classroom"> | string
    schedule?: StringFilter<"Classroom"> | string
    progress?: IntFilter<"Classroom"> | number
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    studentCount?: SortOrder
    bannerColor?: SortOrder
    schedule?: SortOrder
    progress?: SortOrder
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    name?: StringFilter<"Classroom"> | string
    section?: StringFilter<"Classroom"> | string
    subject?: StringFilter<"Classroom"> | string
    teacherId?: StringFilter<"Classroom"> | string
    teacherName?: StringFilter<"Classroom"> | string
    studentCount?: IntFilter<"Classroom"> | number
    bannerColor?: StringFilter<"Classroom"> | string
    schedule?: StringFilter<"Classroom"> | string
    progress?: IntFilter<"Classroom"> | number
  }, "id" | "code">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    studentCount?: SortOrder
    bannerColor?: SortOrder
    schedule?: SortOrder
    progress?: SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _avg?: ClassroomAvgOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
    _sum?: ClassroomSumOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classroom"> | string
    code?: StringWithAggregatesFilter<"Classroom"> | string
    name?: StringWithAggregatesFilter<"Classroom"> | string
    section?: StringWithAggregatesFilter<"Classroom"> | string
    subject?: StringWithAggregatesFilter<"Classroom"> | string
    teacherId?: StringWithAggregatesFilter<"Classroom"> | string
    teacherName?: StringWithAggregatesFilter<"Classroom"> | string
    studentCount?: IntWithAggregatesFilter<"Classroom"> | number
    bannerColor?: StringWithAggregatesFilter<"Classroom"> | string
    schedule?: StringWithAggregatesFilter<"Classroom"> | string
    progress?: IntWithAggregatesFilter<"Classroom"> | number
  }

  export type ClassMaterialWhereInput = {
    AND?: ClassMaterialWhereInput | ClassMaterialWhereInput[]
    OR?: ClassMaterialWhereInput[]
    NOT?: ClassMaterialWhereInput | ClassMaterialWhereInput[]
    id?: StringFilter<"ClassMaterial"> | string
    classId?: StringFilter<"ClassMaterial"> | string
    title?: StringFilter<"ClassMaterial"> | string
    uploadedAt?: StringFilter<"ClassMaterial"> | string
    summary?: StringFilter<"ClassMaterial"> | string
    fileName?: StringNullableFilter<"ClassMaterial"> | string | null
    filePath?: StringNullableFilter<"ClassMaterial"> | string | null
    mimeType?: StringNullableFilter<"ClassMaterial"> | string | null
    uploadedById?: StringNullableFilter<"ClassMaterial"> | string | null
  }

  export type ClassMaterialOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    uploadedAt?: SortOrder
    summary?: SortOrder
    fileName?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
  }

  export type ClassMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassMaterialWhereInput | ClassMaterialWhereInput[]
    OR?: ClassMaterialWhereInput[]
    NOT?: ClassMaterialWhereInput | ClassMaterialWhereInput[]
    classId?: StringFilter<"ClassMaterial"> | string
    title?: StringFilter<"ClassMaterial"> | string
    uploadedAt?: StringFilter<"ClassMaterial"> | string
    summary?: StringFilter<"ClassMaterial"> | string
    fileName?: StringNullableFilter<"ClassMaterial"> | string | null
    filePath?: StringNullableFilter<"ClassMaterial"> | string | null
    mimeType?: StringNullableFilter<"ClassMaterial"> | string | null
    uploadedById?: StringNullableFilter<"ClassMaterial"> | string | null
  }, "id">

  export type ClassMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    uploadedAt?: SortOrder
    summary?: SortOrder
    fileName?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    uploadedById?: SortOrderInput | SortOrder
    _count?: ClassMaterialCountOrderByAggregateInput
    _max?: ClassMaterialMaxOrderByAggregateInput
    _min?: ClassMaterialMinOrderByAggregateInput
  }

  export type ClassMaterialScalarWhereWithAggregatesInput = {
    AND?: ClassMaterialScalarWhereWithAggregatesInput | ClassMaterialScalarWhereWithAggregatesInput[]
    OR?: ClassMaterialScalarWhereWithAggregatesInput[]
    NOT?: ClassMaterialScalarWhereWithAggregatesInput | ClassMaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassMaterial"> | string
    classId?: StringWithAggregatesFilter<"ClassMaterial"> | string
    title?: StringWithAggregatesFilter<"ClassMaterial"> | string
    uploadedAt?: StringWithAggregatesFilter<"ClassMaterial"> | string
    summary?: StringWithAggregatesFilter<"ClassMaterial"> | string
    fileName?: StringNullableWithAggregatesFilter<"ClassMaterial"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"ClassMaterial"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"ClassMaterial"> | string | null
    uploadedById?: StringNullableWithAggregatesFilter<"ClassMaterial"> | string | null
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    classId?: StringFilter<"Assignment"> | string
    materialId?: StringNullableFilter<"Assignment"> | string | null
    title?: StringFilter<"Assignment"> | string
    dueDate?: StringFilter<"Assignment"> | string
    totalPoints?: IntFilter<"Assignment"> | number
    status?: StringFilter<"Assignment"> | string
    submissionCount?: IntFilter<"Assignment"> | number
    score?: IntNullableFilter<"Assignment"> | number | null
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    materialId?: SortOrderInput | SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    totalPoints?: SortOrder
    status?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrderInput | SortOrder
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    classId?: StringFilter<"Assignment"> | string
    materialId?: StringNullableFilter<"Assignment"> | string | null
    title?: StringFilter<"Assignment"> | string
    dueDate?: StringFilter<"Assignment"> | string
    totalPoints?: IntFilter<"Assignment"> | number
    status?: StringFilter<"Assignment"> | string
    submissionCount?: IntFilter<"Assignment"> | number
    score?: IntNullableFilter<"Assignment"> | number | null
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    materialId?: SortOrderInput | SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    totalPoints?: SortOrder
    status?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    classId?: StringWithAggregatesFilter<"Assignment"> | string
    materialId?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    title?: StringWithAggregatesFilter<"Assignment"> | string
    dueDate?: StringWithAggregatesFilter<"Assignment"> | string
    totalPoints?: IntWithAggregatesFilter<"Assignment"> | number
    status?: StringWithAggregatesFilter<"Assignment"> | string
    submissionCount?: IntWithAggregatesFilter<"Assignment"> | number
    score?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
  }

  export type AssignmentResultWhereInput = {
    AND?: AssignmentResultWhereInput | AssignmentResultWhereInput[]
    OR?: AssignmentResultWhereInput[]
    NOT?: AssignmentResultWhereInput | AssignmentResultWhereInput[]
    id?: StringFilter<"AssignmentResult"> | string
    assignmentId?: StringFilter<"AssignmentResult"> | string
    studentId?: StringFilter<"AssignmentResult"> | string
    studentName?: StringNullableFilter<"AssignmentResult"> | string | null
    score?: IntFilter<"AssignmentResult"> | number
    totalPoints?: IntFilter<"AssignmentResult"> | number
    answers?: StringFilter<"AssignmentResult"> | string
    status?: StringFilter<"AssignmentResult"> | string
    submittedAt?: DateTimeFilter<"AssignmentResult"> | Date | string
  }

  export type AssignmentResultOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrderInput | SortOrder
    score?: SortOrder
    totalPoints?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignmentId_studentId?: AssignmentResultAssignmentIdStudentIdCompoundUniqueInput
    AND?: AssignmentResultWhereInput | AssignmentResultWhereInput[]
    OR?: AssignmentResultWhereInput[]
    NOT?: AssignmentResultWhereInput | AssignmentResultWhereInput[]
    assignmentId?: StringFilter<"AssignmentResult"> | string
    studentId?: StringFilter<"AssignmentResult"> | string
    studentName?: StringNullableFilter<"AssignmentResult"> | string | null
    score?: IntFilter<"AssignmentResult"> | number
    totalPoints?: IntFilter<"AssignmentResult"> | number
    answers?: StringFilter<"AssignmentResult"> | string
    status?: StringFilter<"AssignmentResult"> | string
    submittedAt?: DateTimeFilter<"AssignmentResult"> | Date | string
  }, "id" | "assignmentId_studentId">

  export type AssignmentResultOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrderInput | SortOrder
    score?: SortOrder
    totalPoints?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    _count?: AssignmentResultCountOrderByAggregateInput
    _avg?: AssignmentResultAvgOrderByAggregateInput
    _max?: AssignmentResultMaxOrderByAggregateInput
    _min?: AssignmentResultMinOrderByAggregateInput
    _sum?: AssignmentResultSumOrderByAggregateInput
  }

  export type AssignmentResultScalarWhereWithAggregatesInput = {
    AND?: AssignmentResultScalarWhereWithAggregatesInput | AssignmentResultScalarWhereWithAggregatesInput[]
    OR?: AssignmentResultScalarWhereWithAggregatesInput[]
    NOT?: AssignmentResultScalarWhereWithAggregatesInput | AssignmentResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentResult"> | string
    assignmentId?: StringWithAggregatesFilter<"AssignmentResult"> | string
    studentId?: StringWithAggregatesFilter<"AssignmentResult"> | string
    studentName?: StringNullableWithAggregatesFilter<"AssignmentResult"> | string | null
    score?: IntWithAggregatesFilter<"AssignmentResult"> | number
    totalPoints?: IntWithAggregatesFilter<"AssignmentResult"> | number
    answers?: StringWithAggregatesFilter<"AssignmentResult"> | string
    status?: StringWithAggregatesFilter<"AssignmentResult"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"AssignmentResult"> | Date | string
  }

  export type AssignmentQuizWhereInput = {
    AND?: AssignmentQuizWhereInput | AssignmentQuizWhereInput[]
    OR?: AssignmentQuizWhereInput[]
    NOT?: AssignmentQuizWhereInput | AssignmentQuizWhereInput[]
    id?: StringFilter<"AssignmentQuiz"> | string
    assignmentId?: StringFilter<"AssignmentQuiz"> | string
    questions?: StringFilter<"AssignmentQuiz"> | string
  }

  export type AssignmentQuizOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    questions?: SortOrder
  }

  export type AssignmentQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignmentId?: string
    AND?: AssignmentQuizWhereInput | AssignmentQuizWhereInput[]
    OR?: AssignmentQuizWhereInput[]
    NOT?: AssignmentQuizWhereInput | AssignmentQuizWhereInput[]
    questions?: StringFilter<"AssignmentQuiz"> | string
  }, "id" | "assignmentId">

  export type AssignmentQuizOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    questions?: SortOrder
    _count?: AssignmentQuizCountOrderByAggregateInput
    _max?: AssignmentQuizMaxOrderByAggregateInput
    _min?: AssignmentQuizMinOrderByAggregateInput
  }

  export type AssignmentQuizScalarWhereWithAggregatesInput = {
    AND?: AssignmentQuizScalarWhereWithAggregatesInput | AssignmentQuizScalarWhereWithAggregatesInput[]
    OR?: AssignmentQuizScalarWhereWithAggregatesInput[]
    NOT?: AssignmentQuizScalarWhereWithAggregatesInput | AssignmentQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentQuiz"> | string
    assignmentId?: StringWithAggregatesFilter<"AssignmentQuiz"> | string
    questions?: StringWithAggregatesFilter<"AssignmentQuiz"> | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    subject?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questionCount?: IntFilter<"Quiz"> | number
    xpReward?: IntFilter<"Quiz"> | number
    badgeColor?: StringFilter<"Quiz"> | string
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    questionCount?: SortOrder
    xpReward?: SortOrder
    badgeColor?: SortOrder
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    subject?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    questionCount?: IntFilter<"Quiz"> | number
    xpReward?: IntFilter<"Quiz"> | number
    badgeColor?: StringFilter<"Quiz"> | string
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    questionCount?: SortOrder
    xpReward?: SortOrder
    badgeColor?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    subject?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    questionCount?: IntWithAggregatesFilter<"Quiz"> | number
    xpReward?: IntWithAggregatesFilter<"Quiz"> | number
    badgeColor?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuizQuestionSetWhereInput = {
    AND?: QuizQuestionSetWhereInput | QuizQuestionSetWhereInput[]
    OR?: QuizQuestionSetWhereInput[]
    NOT?: QuizQuestionSetWhereInput | QuizQuestionSetWhereInput[]
    id?: StringFilter<"QuizQuestionSet"> | string
    quizId?: StringFilter<"QuizQuestionSet"> | string
    questions?: StringFilter<"QuizQuestionSet"> | string
  }

  export type QuizQuestionSetOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    questions?: SortOrder
  }

  export type QuizQuestionSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    quizId?: string
    AND?: QuizQuestionSetWhereInput | QuizQuestionSetWhereInput[]
    OR?: QuizQuestionSetWhereInput[]
    NOT?: QuizQuestionSetWhereInput | QuizQuestionSetWhereInput[]
    questions?: StringFilter<"QuizQuestionSet"> | string
  }, "id" | "quizId">

  export type QuizQuestionSetOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    questions?: SortOrder
    _count?: QuizQuestionSetCountOrderByAggregateInput
    _max?: QuizQuestionSetMaxOrderByAggregateInput
    _min?: QuizQuestionSetMinOrderByAggregateInput
  }

  export type QuizQuestionSetScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionSetScalarWhereWithAggregatesInput | QuizQuestionSetScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionSetScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionSetScalarWhereWithAggregatesInput | QuizQuestionSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizQuestionSet"> | string
    quizId?: StringWithAggregatesFilter<"QuizQuestionSet"> | string
    questions?: StringWithAggregatesFilter<"QuizQuestionSet"> | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: StringFilter<"Story"> | string
    title?: StringFilter<"Story"> | string
    difficulty?: StringFilter<"Story"> | string
    starsReward?: IntFilter<"Story"> | number
    content?: StringFilter<"Story"> | string
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    starsReward?: SortOrder
    content?: SortOrder
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    title?: StringFilter<"Story"> | string
    difficulty?: StringFilter<"Story"> | string
    starsReward?: IntFilter<"Story"> | number
    content?: StringFilter<"Story"> | string
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    starsReward?: SortOrder
    content?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Story"> | string
    title?: StringWithAggregatesFilter<"Story"> | string
    difficulty?: StringWithAggregatesFilter<"Story"> | string
    starsReward?: IntWithAggregatesFilter<"Story"> | number
    content?: StringWithAggregatesFilter<"Story"> | string
  }

  export type WardrobeItemWhereInput = {
    AND?: WardrobeItemWhereInput | WardrobeItemWhereInput[]
    OR?: WardrobeItemWhereInput[]
    NOT?: WardrobeItemWhereInput | WardrobeItemWhereInput[]
    id?: StringFilter<"WardrobeItem"> | string
    name?: StringFilter<"WardrobeItem"> | string
    image?: StringFilter<"WardrobeItem"> | string
    locked?: BoolFilter<"WardrobeItem"> | boolean
    lvl?: IntNullableFilter<"WardrobeItem"> | number | null
  }

  export type WardrobeItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    locked?: SortOrder
    lvl?: SortOrderInput | SortOrder
  }

  export type WardrobeItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WardrobeItemWhereInput | WardrobeItemWhereInput[]
    OR?: WardrobeItemWhereInput[]
    NOT?: WardrobeItemWhereInput | WardrobeItemWhereInput[]
    name?: StringFilter<"WardrobeItem"> | string
    image?: StringFilter<"WardrobeItem"> | string
    locked?: BoolFilter<"WardrobeItem"> | boolean
    lvl?: IntNullableFilter<"WardrobeItem"> | number | null
  }, "id">

  export type WardrobeItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    locked?: SortOrder
    lvl?: SortOrderInput | SortOrder
    _count?: WardrobeItemCountOrderByAggregateInput
    _avg?: WardrobeItemAvgOrderByAggregateInput
    _max?: WardrobeItemMaxOrderByAggregateInput
    _min?: WardrobeItemMinOrderByAggregateInput
    _sum?: WardrobeItemSumOrderByAggregateInput
  }

  export type WardrobeItemScalarWhereWithAggregatesInput = {
    AND?: WardrobeItemScalarWhereWithAggregatesInput | WardrobeItemScalarWhereWithAggregatesInput[]
    OR?: WardrobeItemScalarWhereWithAggregatesInput[]
    NOT?: WardrobeItemScalarWhereWithAggregatesInput | WardrobeItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WardrobeItem"> | string
    name?: StringWithAggregatesFilter<"WardrobeItem"> | string
    image?: StringWithAggregatesFilter<"WardrobeItem"> | string
    locked?: BoolWithAggregatesFilter<"WardrobeItem"> | boolean
    lvl?: IntNullableWithAggregatesFilter<"WardrobeItem"> | number | null
  }

  export type AiVoiceWhereInput = {
    AND?: AiVoiceWhereInput | AiVoiceWhereInput[]
    OR?: AiVoiceWhereInput[]
    NOT?: AiVoiceWhereInput | AiVoiceWhereInput[]
    id?: StringFilter<"AiVoice"> | string
    name?: StringFilter<"AiVoice"> | string
    desc?: StringFilter<"AiVoice"> | string
  }

  export type AiVoiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
  }

  export type AiVoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiVoiceWhereInput | AiVoiceWhereInput[]
    OR?: AiVoiceWhereInput[]
    NOT?: AiVoiceWhereInput | AiVoiceWhereInput[]
    name?: StringFilter<"AiVoice"> | string
    desc?: StringFilter<"AiVoice"> | string
  }, "id">

  export type AiVoiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    _count?: AiVoiceCountOrderByAggregateInput
    _max?: AiVoiceMaxOrderByAggregateInput
    _min?: AiVoiceMinOrderByAggregateInput
  }

  export type AiVoiceScalarWhereWithAggregatesInput = {
    AND?: AiVoiceScalarWhereWithAggregatesInput | AiVoiceScalarWhereWithAggregatesInput[]
    OR?: AiVoiceScalarWhereWithAggregatesInput[]
    NOT?: AiVoiceScalarWhereWithAggregatesInput | AiVoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiVoice"> | string
    name?: StringWithAggregatesFilter<"AiVoice"> | string
    desc?: StringWithAggregatesFilter<"AiVoice"> | string
  }

  export type CodeModuleWhereInput = {
    AND?: CodeModuleWhereInput | CodeModuleWhereInput[]
    OR?: CodeModuleWhereInput[]
    NOT?: CodeModuleWhereInput | CodeModuleWhereInput[]
    id?: StringFilter<"CodeModule"> | string
    title?: StringFilter<"CodeModule"> | string
    description?: StringFilter<"CodeModule"> | string
    level?: StringFilter<"CodeModule"> | string
    icon?: StringFilter<"CodeModule"> | string
    lessons?: IntFilter<"CodeModule"> | number
    hours?: IntFilter<"CodeModule"> | number
    accentClass?: StringFilter<"CodeModule"> | string
    bgIconClass?: StringFilter<"CodeModule"> | string
    isWide?: BoolFilter<"CodeModule"> | boolean
    isNew?: BoolFilter<"CodeModule"> | boolean
    comingSoon?: BoolFilter<"CodeModule"> | boolean
    category?: StringFilter<"CodeModule"> | string
  }

  export type CodeModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    icon?: SortOrder
    lessons?: SortOrder
    hours?: SortOrder
    accentClass?: SortOrder
    bgIconClass?: SortOrder
    isWide?: SortOrder
    isNew?: SortOrder
    comingSoon?: SortOrder
    category?: SortOrder
  }

  export type CodeModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeModuleWhereInput | CodeModuleWhereInput[]
    OR?: CodeModuleWhereInput[]
    NOT?: CodeModuleWhereInput | CodeModuleWhereInput[]
    title?: StringFilter<"CodeModule"> | string
    description?: StringFilter<"CodeModule"> | string
    level?: StringFilter<"CodeModule"> | string
    icon?: StringFilter<"CodeModule"> | string
    lessons?: IntFilter<"CodeModule"> | number
    hours?: IntFilter<"CodeModule"> | number
    accentClass?: StringFilter<"CodeModule"> | string
    bgIconClass?: StringFilter<"CodeModule"> | string
    isWide?: BoolFilter<"CodeModule"> | boolean
    isNew?: BoolFilter<"CodeModule"> | boolean
    comingSoon?: BoolFilter<"CodeModule"> | boolean
    category?: StringFilter<"CodeModule"> | string
  }, "id">

  export type CodeModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    icon?: SortOrder
    lessons?: SortOrder
    hours?: SortOrder
    accentClass?: SortOrder
    bgIconClass?: SortOrder
    isWide?: SortOrder
    isNew?: SortOrder
    comingSoon?: SortOrder
    category?: SortOrder
    _count?: CodeModuleCountOrderByAggregateInput
    _avg?: CodeModuleAvgOrderByAggregateInput
    _max?: CodeModuleMaxOrderByAggregateInput
    _min?: CodeModuleMinOrderByAggregateInput
    _sum?: CodeModuleSumOrderByAggregateInput
  }

  export type CodeModuleScalarWhereWithAggregatesInput = {
    AND?: CodeModuleScalarWhereWithAggregatesInput | CodeModuleScalarWhereWithAggregatesInput[]
    OR?: CodeModuleScalarWhereWithAggregatesInput[]
    NOT?: CodeModuleScalarWhereWithAggregatesInput | CodeModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeModule"> | string
    title?: StringWithAggregatesFilter<"CodeModule"> | string
    description?: StringWithAggregatesFilter<"CodeModule"> | string
    level?: StringWithAggregatesFilter<"CodeModule"> | string
    icon?: StringWithAggregatesFilter<"CodeModule"> | string
    lessons?: IntWithAggregatesFilter<"CodeModule"> | number
    hours?: IntWithAggregatesFilter<"CodeModule"> | number
    accentClass?: StringWithAggregatesFilter<"CodeModule"> | string
    bgIconClass?: StringWithAggregatesFilter<"CodeModule"> | string
    isWide?: BoolWithAggregatesFilter<"CodeModule"> | boolean
    isNew?: BoolWithAggregatesFilter<"CodeModule"> | boolean
    comingSoon?: BoolWithAggregatesFilter<"CodeModule"> | boolean
    category?: StringWithAggregatesFilter<"CodeModule"> | string
  }

  export type CodeModuleCurriculumWhereInput = {
    AND?: CodeModuleCurriculumWhereInput | CodeModuleCurriculumWhereInput[]
    OR?: CodeModuleCurriculumWhereInput[]
    NOT?: CodeModuleCurriculumWhereInput | CodeModuleCurriculumWhereInput[]
    moduleId?: StringFilter<"CodeModuleCurriculum"> | string
    sourceUrl?: StringFilter<"CodeModuleCurriculum"> | string
    sourceLabel?: StringFilter<"CodeModuleCurriculum"> | string
    curriculum?: StringFilter<"CodeModuleCurriculum"> | string
  }

  export type CodeModuleCurriculumOrderByWithRelationInput = {
    moduleId?: SortOrder
    sourceUrl?: SortOrder
    sourceLabel?: SortOrder
    curriculum?: SortOrder
  }

  export type CodeModuleCurriculumWhereUniqueInput = Prisma.AtLeast<{
    moduleId?: string
    AND?: CodeModuleCurriculumWhereInput | CodeModuleCurriculumWhereInput[]
    OR?: CodeModuleCurriculumWhereInput[]
    NOT?: CodeModuleCurriculumWhereInput | CodeModuleCurriculumWhereInput[]
    sourceUrl?: StringFilter<"CodeModuleCurriculum"> | string
    sourceLabel?: StringFilter<"CodeModuleCurriculum"> | string
    curriculum?: StringFilter<"CodeModuleCurriculum"> | string
  }, "moduleId">

  export type CodeModuleCurriculumOrderByWithAggregationInput = {
    moduleId?: SortOrder
    sourceUrl?: SortOrder
    sourceLabel?: SortOrder
    curriculum?: SortOrder
    _count?: CodeModuleCurriculumCountOrderByAggregateInput
    _max?: CodeModuleCurriculumMaxOrderByAggregateInput
    _min?: CodeModuleCurriculumMinOrderByAggregateInput
  }

  export type CodeModuleCurriculumScalarWhereWithAggregatesInput = {
    AND?: CodeModuleCurriculumScalarWhereWithAggregatesInput | CodeModuleCurriculumScalarWhereWithAggregatesInput[]
    OR?: CodeModuleCurriculumScalarWhereWithAggregatesInput[]
    NOT?: CodeModuleCurriculumScalarWhereWithAggregatesInput | CodeModuleCurriculumScalarWhereWithAggregatesInput[]
    moduleId?: StringWithAggregatesFilter<"CodeModuleCurriculum"> | string
    sourceUrl?: StringWithAggregatesFilter<"CodeModuleCurriculum"> | string
    sourceLabel?: StringWithAggregatesFilter<"CodeModuleCurriculum"> | string
    curriculum?: StringWithAggregatesFilter<"CodeModuleCurriculum"> | string
  }

  export type DailyObjectiveWhereInput = {
    AND?: DailyObjectiveWhereInput | DailyObjectiveWhereInput[]
    OR?: DailyObjectiveWhereInput[]
    NOT?: DailyObjectiveWhereInput | DailyObjectiveWhereInput[]
    id?: StringFilter<"DailyObjective"> | string
    completedQuizzes?: IntFilter<"DailyObjective"> | number
    targetQuizzes?: IntFilter<"DailyObjective"> | number
    bonusUnlocked?: BoolFilter<"DailyObjective"> | boolean
  }

  export type DailyObjectiveOrderByWithRelationInput = {
    id?: SortOrder
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
    bonusUnlocked?: SortOrder
  }

  export type DailyObjectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyObjectiveWhereInput | DailyObjectiveWhereInput[]
    OR?: DailyObjectiveWhereInput[]
    NOT?: DailyObjectiveWhereInput | DailyObjectiveWhereInput[]
    completedQuizzes?: IntFilter<"DailyObjective"> | number
    targetQuizzes?: IntFilter<"DailyObjective"> | number
    bonusUnlocked?: BoolFilter<"DailyObjective"> | boolean
  }, "id">

  export type DailyObjectiveOrderByWithAggregationInput = {
    id?: SortOrder
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
    bonusUnlocked?: SortOrder
    _count?: DailyObjectiveCountOrderByAggregateInput
    _avg?: DailyObjectiveAvgOrderByAggregateInput
    _max?: DailyObjectiveMaxOrderByAggregateInput
    _min?: DailyObjectiveMinOrderByAggregateInput
    _sum?: DailyObjectiveSumOrderByAggregateInput
  }

  export type DailyObjectiveScalarWhereWithAggregatesInput = {
    AND?: DailyObjectiveScalarWhereWithAggregatesInput | DailyObjectiveScalarWhereWithAggregatesInput[]
    OR?: DailyObjectiveScalarWhereWithAggregatesInput[]
    NOT?: DailyObjectiveScalarWhereWithAggregatesInput | DailyObjectiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyObjective"> | string
    completedQuizzes?: IntWithAggregatesFilter<"DailyObjective"> | number
    targetQuizzes?: IntWithAggregatesFilter<"DailyObjective"> | number
    bonusUnlocked?: BoolWithAggregatesFilter<"DailyObjective"> | boolean
  }

  export type UserCodeLabProgressWhereInput = {
    AND?: UserCodeLabProgressWhereInput | UserCodeLabProgressWhereInput[]
    OR?: UserCodeLabProgressWhereInput[]
    NOT?: UserCodeLabProgressWhereInput | UserCodeLabProgressWhereInput[]
    userId?: StringFilter<"UserCodeLabProgress"> | string
    activeModuleId?: StringFilter<"UserCodeLabProgress"> | string
    itemProgress?: StringFilter<"UserCodeLabProgress"> | string
    weeklyGoal?: StringFilter<"UserCodeLabProgress"> | string
    growthDays?: StringFilter<"UserCodeLabProgress"> | string
    updatedAt?: DateTimeFilter<"UserCodeLabProgress"> | Date | string
  }

  export type UserCodeLabProgressOrderByWithRelationInput = {
    userId?: SortOrder
    activeModuleId?: SortOrder
    itemProgress?: SortOrder
    weeklyGoal?: SortOrder
    growthDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCodeLabProgressWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserCodeLabProgressWhereInput | UserCodeLabProgressWhereInput[]
    OR?: UserCodeLabProgressWhereInput[]
    NOT?: UserCodeLabProgressWhereInput | UserCodeLabProgressWhereInput[]
    activeModuleId?: StringFilter<"UserCodeLabProgress"> | string
    itemProgress?: StringFilter<"UserCodeLabProgress"> | string
    weeklyGoal?: StringFilter<"UserCodeLabProgress"> | string
    growthDays?: StringFilter<"UserCodeLabProgress"> | string
    updatedAt?: DateTimeFilter<"UserCodeLabProgress"> | Date | string
  }, "userId">

  export type UserCodeLabProgressOrderByWithAggregationInput = {
    userId?: SortOrder
    activeModuleId?: SortOrder
    itemProgress?: SortOrder
    weeklyGoal?: SortOrder
    growthDays?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCodeLabProgressCountOrderByAggregateInput
    _max?: UserCodeLabProgressMaxOrderByAggregateInput
    _min?: UserCodeLabProgressMinOrderByAggregateInput
  }

  export type UserCodeLabProgressScalarWhereWithAggregatesInput = {
    AND?: UserCodeLabProgressScalarWhereWithAggregatesInput | UserCodeLabProgressScalarWhereWithAggregatesInput[]
    OR?: UserCodeLabProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCodeLabProgressScalarWhereWithAggregatesInput | UserCodeLabProgressScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserCodeLabProgress"> | string
    activeModuleId?: StringWithAggregatesFilter<"UserCodeLabProgress"> | string
    itemProgress?: StringWithAggregatesFilter<"UserCodeLabProgress"> | string
    weeklyGoal?: StringWithAggregatesFilter<"UserCodeLabProgress"> | string
    growthDays?: StringWithAggregatesFilter<"UserCodeLabProgress"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserCodeLabProgress"> | Date | string
  }

  export type CodeLabProgressWhereInput = {
    AND?: CodeLabProgressWhereInput | CodeLabProgressWhereInput[]
    OR?: CodeLabProgressWhereInput[]
    NOT?: CodeLabProgressWhereInput | CodeLabProgressWhereInput[]
    id?: StringFilter<"CodeLabProgress"> | string
    currentPath?: StringFilter<"CodeLabProgress"> | string
    description?: StringFilter<"CodeLabProgress"> | string
    completionPercentage?: IntFilter<"CodeLabProgress"> | number
    status?: StringFilter<"CodeLabProgress"> | string
  }

  export type CodeLabProgressOrderByWithRelationInput = {
    id?: SortOrder
    currentPath?: SortOrder
    description?: SortOrder
    completionPercentage?: SortOrder
    status?: SortOrder
  }

  export type CodeLabProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeLabProgressWhereInput | CodeLabProgressWhereInput[]
    OR?: CodeLabProgressWhereInput[]
    NOT?: CodeLabProgressWhereInput | CodeLabProgressWhereInput[]
    currentPath?: StringFilter<"CodeLabProgress"> | string
    description?: StringFilter<"CodeLabProgress"> | string
    completionPercentage?: IntFilter<"CodeLabProgress"> | number
    status?: StringFilter<"CodeLabProgress"> | string
  }, "id">

  export type CodeLabProgressOrderByWithAggregationInput = {
    id?: SortOrder
    currentPath?: SortOrder
    description?: SortOrder
    completionPercentage?: SortOrder
    status?: SortOrder
    _count?: CodeLabProgressCountOrderByAggregateInput
    _avg?: CodeLabProgressAvgOrderByAggregateInput
    _max?: CodeLabProgressMaxOrderByAggregateInput
    _min?: CodeLabProgressMinOrderByAggregateInput
    _sum?: CodeLabProgressSumOrderByAggregateInput
  }

  export type CodeLabProgressScalarWhereWithAggregatesInput = {
    AND?: CodeLabProgressScalarWhereWithAggregatesInput | CodeLabProgressScalarWhereWithAggregatesInput[]
    OR?: CodeLabProgressScalarWhereWithAggregatesInput[]
    NOT?: CodeLabProgressScalarWhereWithAggregatesInput | CodeLabProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeLabProgress"> | string
    currentPath?: StringWithAggregatesFilter<"CodeLabProgress"> | string
    description?: StringWithAggregatesFilter<"CodeLabProgress"> | string
    completionPercentage?: IntWithAggregatesFilter<"CodeLabProgress"> | number
    status?: StringWithAggregatesFilter<"CodeLabProgress"> | string
  }

  export type GrowthJourneyWhereInput = {
    AND?: GrowthJourneyWhereInput | GrowthJourneyWhereInput[]
    OR?: GrowthJourneyWhereInput[]
    NOT?: GrowthJourneyWhereInput | GrowthJourneyWhereInput[]
    id?: StringFilter<"GrowthJourney"> | string
    weeklyGoal?: StringFilter<"GrowthJourney"> | string
    days?: StringFilter<"GrowthJourney"> | string
  }

  export type GrowthJourneyOrderByWithRelationInput = {
    id?: SortOrder
    weeklyGoal?: SortOrder
    days?: SortOrder
  }

  export type GrowthJourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GrowthJourneyWhereInput | GrowthJourneyWhereInput[]
    OR?: GrowthJourneyWhereInput[]
    NOT?: GrowthJourneyWhereInput | GrowthJourneyWhereInput[]
    weeklyGoal?: StringFilter<"GrowthJourney"> | string
    days?: StringFilter<"GrowthJourney"> | string
  }, "id">

  export type GrowthJourneyOrderByWithAggregationInput = {
    id?: SortOrder
    weeklyGoal?: SortOrder
    days?: SortOrder
    _count?: GrowthJourneyCountOrderByAggregateInput
    _max?: GrowthJourneyMaxOrderByAggregateInput
    _min?: GrowthJourneyMinOrderByAggregateInput
  }

  export type GrowthJourneyScalarWhereWithAggregatesInput = {
    AND?: GrowthJourneyScalarWhereWithAggregatesInput | GrowthJourneyScalarWhereWithAggregatesInput[]
    OR?: GrowthJourneyScalarWhereWithAggregatesInput[]
    NOT?: GrowthJourneyScalarWhereWithAggregatesInput | GrowthJourneyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GrowthJourney"> | string
    weeklyGoal?: StringWithAggregatesFilter<"GrowthJourney"> | string
    days?: StringWithAggregatesFilter<"GrowthJourney"> | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    passwordHash: string
    name: string
    role: string
    teacherCardId?: string | null
    avatarUrl?: string | null
    initials?: string | null
    email?: string | null
    stars?: number
    exp?: number
    streak?: number
    enrolledClassIds?: string
    createdClassIds?: string
    equippedGear?: string | null
    voiceId?: string | null
    speechSpeed?: number | null
    avatarPreference?: string | null
    status?: string | null
    strength?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    passwordHash: string
    name: string
    role: string
    teacherCardId?: string | null
    avatarUrl?: string | null
    initials?: string | null
    email?: string | null
    stars?: number
    exp?: number
    streak?: number
    enrolledClassIds?: string
    createdClassIds?: string
    equippedGear?: string | null
    voiceId?: string | null
    speechSpeed?: number | null
    avatarPreference?: string | null
    status?: string | null
    strength?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teacherCardId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    enrolledClassIds?: StringFieldUpdateOperationsInput | string
    createdClassIds?: StringFieldUpdateOperationsInput | string
    equippedGear?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    speechSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarPreference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teacherCardId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    enrolledClassIds?: StringFieldUpdateOperationsInput | string
    createdClassIds?: StringFieldUpdateOperationsInput | string
    equippedGear?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    speechSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarPreference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    passwordHash: string
    name: string
    role: string
    teacherCardId?: string | null
    avatarUrl?: string | null
    initials?: string | null
    email?: string | null
    stars?: number
    exp?: number
    streak?: number
    enrolledClassIds?: string
    createdClassIds?: string
    equippedGear?: string | null
    voiceId?: string | null
    speechSpeed?: number | null
    avatarPreference?: string | null
    status?: string | null
    strength?: string | null
    progress?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teacherCardId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    enrolledClassIds?: StringFieldUpdateOperationsInput | string
    createdClassIds?: StringFieldUpdateOperationsInput | string
    equippedGear?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    speechSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarPreference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teacherCardId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    initials?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    stars?: IntFieldUpdateOperationsInput | number
    exp?: IntFieldUpdateOperationsInput | number
    streak?: IntFieldUpdateOperationsInput | number
    enrolledClassIds?: StringFieldUpdateOperationsInput | string
    createdClassIds?: StringFieldUpdateOperationsInput | string
    equippedGear?: NullableStringFieldUpdateOperationsInput | string | null
    voiceId?: NullableStringFieldUpdateOperationsInput | string | null
    speechSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    avatarPreference?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    strength?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassroomCreateInput = {
    id: string
    code: string
    name: string
    section: string
    subject: string
    teacherId: string
    teacherName: string
    studentCount?: number
    bannerColor: string
    schedule: string
    progress?: number
  }

  export type ClassroomUncheckedCreateInput = {
    id: string
    code: string
    name: string
    section: string
    subject: string
    teacherId: string
    teacherName: string
    studentCount?: number
    bannerColor: string
    schedule: string
    progress?: number
  }

  export type ClassroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    bannerColor?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    bannerColor?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomCreateManyInput = {
    id: string
    code: string
    name: string
    section: string
    subject: string
    teacherId: string
    teacherName: string
    studentCount?: number
    bannerColor: string
    schedule: string
    progress?: number
  }

  export type ClassroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    bannerColor?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    teacherName?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    bannerColor?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type ClassMaterialCreateInput = {
    id: string
    classId: string
    title: string
    uploadedAt: string
    summary?: string
    fileName?: string | null
    filePath?: string | null
    mimeType?: string | null
    uploadedById?: string | null
  }

  export type ClassMaterialUncheckedCreateInput = {
    id: string
    classId: string
    title: string
    uploadedAt: string
    summary?: string
    fileName?: string | null
    filePath?: string | null
    mimeType?: string | null
    uploadedById?: string | null
  }

  export type ClassMaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassMaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassMaterialCreateManyInput = {
    id: string
    classId: string
    title: string
    uploadedAt: string
    summary?: string
    fileName?: string | null
    filePath?: string | null
    mimeType?: string | null
    uploadedById?: string | null
  }

  export type ClassMaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassMaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignmentCreateInput = {
    id: string
    classId: string
    materialId?: string | null
    title: string
    dueDate: string
    totalPoints: number
    status: string
    submissionCount?: number
    score?: number | null
  }

  export type AssignmentUncheckedCreateInput = {
    id: string
    classId: string
    materialId?: string | null
    title: string
    dueDate: string
    totalPoints: number
    status: string
    submissionCount?: number
    score?: number | null
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    submissionCount?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    submissionCount?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentCreateManyInput = {
    id: string
    classId: string
    materialId?: string | null
    title: string
    dueDate: string
    totalPoints: number
    status: string
    submissionCount?: number
    score?: number | null
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    submissionCount?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    materialId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    submissionCount?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentResultCreateInput = {
    id: string
    assignmentId: string
    studentId: string
    studentName?: string | null
    score: number
    totalPoints: number
    answers?: string
    status?: string
    submittedAt?: Date | string
  }

  export type AssignmentResultUncheckedCreateInput = {
    id: string
    assignmentId: string
    studentId: string
    studentName?: string | null
    score: number
    totalPoints: number
    answers?: string
    status?: string
    submittedAt?: Date | string
  }

  export type AssignmentResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentResultCreateManyInput = {
    id: string
    assignmentId: string
    studentId: string
    studentName?: string | null
    score: number
    totalPoints: number
    answers?: string
    status?: string
    submittedAt?: Date | string
  }

  export type AssignmentResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentQuizCreateInput = {
    id: string
    assignmentId: string
    questions: string
  }

  export type AssignmentQuizUncheckedCreateInput = {
    id: string
    assignmentId: string
    questions: string
  }

  export type AssignmentQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentQuizCreateManyInput = {
    id: string
    assignmentId: string
    questions: string
  }

  export type AssignmentQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type AssignmentQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateInput = {
    id: string
    subject: string
    title: string
    questionCount: number
    xpReward: number
    badgeColor: string
  }

  export type QuizUncheckedCreateInput = {
    id: string
    subject: string
    title: string
    questionCount: number
    xpReward: number
    badgeColor: string
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionCount?: IntFieldUpdateOperationsInput | number
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionCount?: IntFieldUpdateOperationsInput | number
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuizCreateManyInput = {
    id: string
    subject: string
    title: string
    questionCount: number
    xpReward: number
    badgeColor: string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionCount?: IntFieldUpdateOperationsInput | number
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    questionCount?: IntFieldUpdateOperationsInput | number
    xpReward?: IntFieldUpdateOperationsInput | number
    badgeColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionSetCreateInput = {
    id: string
    quizId: string
    questions: string
  }

  export type QuizQuestionSetUncheckedCreateInput = {
    id: string
    quizId: string
    questions: string
  }

  export type QuizQuestionSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionSetCreateManyInput = {
    id: string
    quizId: string
    questions: string
  }

  export type QuizQuestionSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    questions?: StringFieldUpdateOperationsInput | string
  }

  export type StoryCreateInput = {
    id: string
    title: string
    difficulty: string
    starsReward: number
    content: string
  }

  export type StoryUncheckedCreateInput = {
    id: string
    title: string
    difficulty: string
    starsReward: number
    content: string
  }

  export type StoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    starsReward?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    starsReward?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StoryCreateManyInput = {
    id: string
    title: string
    difficulty: string
    starsReward: number
    content: string
  }

  export type StoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    starsReward?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    starsReward?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type WardrobeItemCreateInput = {
    id: string
    name: string
    image?: string
    locked?: boolean
    lvl?: number | null
  }

  export type WardrobeItemUncheckedCreateInput = {
    id: string
    name: string
    image?: string
    locked?: boolean
    lvl?: number | null
  }

  export type WardrobeItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    lvl?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WardrobeItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    lvl?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WardrobeItemCreateManyInput = {
    id: string
    name: string
    image?: string
    locked?: boolean
    lvl?: number | null
  }

  export type WardrobeItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    lvl?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WardrobeItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    lvl?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AiVoiceCreateInput = {
    id: string
    name: string
    desc: string
  }

  export type AiVoiceUncheckedCreateInput = {
    id: string
    name: string
    desc: string
  }

  export type AiVoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type AiVoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type AiVoiceCreateManyInput = {
    id: string
    name: string
    desc: string
  }

  export type AiVoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type AiVoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCreateInput = {
    id: string
    title: string
    description: string
    level: string
    icon: string
    lessons: number
    hours: number
    accentClass: string
    bgIconClass: string
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: string
  }

  export type CodeModuleUncheckedCreateInput = {
    id: string
    title: string
    description: string
    level: string
    icon: string
    lessons: number
    hours: number
    accentClass: string
    bgIconClass: string
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: string
  }

  export type CodeModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    lessons?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    accentClass?: StringFieldUpdateOperationsInput | string
    bgIconClass?: StringFieldUpdateOperationsInput | string
    isWide?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    comingSoon?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    lessons?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    accentClass?: StringFieldUpdateOperationsInput | string
    bgIconClass?: StringFieldUpdateOperationsInput | string
    isWide?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    comingSoon?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCreateManyInput = {
    id: string
    title: string
    description: string
    level: string
    icon: string
    lessons: number
    hours: number
    accentClass: string
    bgIconClass: string
    isWide?: boolean
    isNew?: boolean
    comingSoon?: boolean
    category?: string
  }

  export type CodeModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    lessons?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    accentClass?: StringFieldUpdateOperationsInput | string
    bgIconClass?: StringFieldUpdateOperationsInput | string
    isWide?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    comingSoon?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    lessons?: IntFieldUpdateOperationsInput | number
    hours?: IntFieldUpdateOperationsInput | number
    accentClass?: StringFieldUpdateOperationsInput | string
    bgIconClass?: StringFieldUpdateOperationsInput | string
    isWide?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    comingSoon?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCurriculumCreateInput = {
    moduleId: string
    sourceUrl: string
    sourceLabel: string
    curriculum: string
  }

  export type CodeModuleCurriculumUncheckedCreateInput = {
    moduleId: string
    sourceUrl: string
    sourceLabel: string
    curriculum: string
  }

  export type CodeModuleCurriculumUpdateInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceLabel?: StringFieldUpdateOperationsInput | string
    curriculum?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCurriculumUncheckedUpdateInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceLabel?: StringFieldUpdateOperationsInput | string
    curriculum?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCurriculumCreateManyInput = {
    moduleId: string
    sourceUrl: string
    sourceLabel: string
    curriculum: string
  }

  export type CodeModuleCurriculumUpdateManyMutationInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceLabel?: StringFieldUpdateOperationsInput | string
    curriculum?: StringFieldUpdateOperationsInput | string
  }

  export type CodeModuleCurriculumUncheckedUpdateManyInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    sourceLabel?: StringFieldUpdateOperationsInput | string
    curriculum?: StringFieldUpdateOperationsInput | string
  }

  export type DailyObjectiveCreateInput = {
    id: string
    completedQuizzes?: number
    targetQuizzes?: number
    bonusUnlocked?: boolean
  }

  export type DailyObjectiveUncheckedCreateInput = {
    id: string
    completedQuizzes?: number
    targetQuizzes?: number
    bonusUnlocked?: boolean
  }

  export type DailyObjectiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedQuizzes?: IntFieldUpdateOperationsInput | number
    targetQuizzes?: IntFieldUpdateOperationsInput | number
    bonusUnlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyObjectiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedQuizzes?: IntFieldUpdateOperationsInput | number
    targetQuizzes?: IntFieldUpdateOperationsInput | number
    bonusUnlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyObjectiveCreateManyInput = {
    id: string
    completedQuizzes?: number
    targetQuizzes?: number
    bonusUnlocked?: boolean
  }

  export type DailyObjectiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedQuizzes?: IntFieldUpdateOperationsInput | number
    targetQuizzes?: IntFieldUpdateOperationsInput | number
    bonusUnlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyObjectiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedQuizzes?: IntFieldUpdateOperationsInput | number
    targetQuizzes?: IntFieldUpdateOperationsInput | number
    bonusUnlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCodeLabProgressCreateInput = {
    userId: string
    activeModuleId?: string
    itemProgress?: string
    weeklyGoal?: string
    growthDays?: string
    updatedAt?: Date | string
  }

  export type UserCodeLabProgressUncheckedCreateInput = {
    userId: string
    activeModuleId?: string
    itemProgress?: string
    weeklyGoal?: string
    growthDays?: string
    updatedAt?: Date | string
  }

  export type UserCodeLabProgressUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    activeModuleId?: StringFieldUpdateOperationsInput | string
    itemProgress?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    growthDays?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCodeLabProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    activeModuleId?: StringFieldUpdateOperationsInput | string
    itemProgress?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    growthDays?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCodeLabProgressCreateManyInput = {
    userId: string
    activeModuleId?: string
    itemProgress?: string
    weeklyGoal?: string
    growthDays?: string
    updatedAt?: Date | string
  }

  export type UserCodeLabProgressUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    activeModuleId?: StringFieldUpdateOperationsInput | string
    itemProgress?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    growthDays?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCodeLabProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    activeModuleId?: StringFieldUpdateOperationsInput | string
    itemProgress?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    growthDays?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeLabProgressCreateInput = {
    id?: string
    currentPath: string
    description: string
    completionPercentage: number
    status: string
  }

  export type CodeLabProgressUncheckedCreateInput = {
    id?: string
    currentPath: string
    description: string
    completionPercentage: number
    status: string
  }

  export type CodeLabProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completionPercentage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLabProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completionPercentage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLabProgressCreateManyInput = {
    id?: string
    currentPath: string
    description: string
    completionPercentage: number
    status: string
  }

  export type CodeLabProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completionPercentage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CodeLabProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentPath?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completionPercentage?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GrowthJourneyCreateInput = {
    id?: string
    weeklyGoal: string
    days: string
  }

  export type GrowthJourneyUncheckedCreateInput = {
    id?: string
    weeklyGoal: string
    days: string
  }

  export type GrowthJourneyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type GrowthJourneyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type GrowthJourneyCreateManyInput = {
    id?: string
    weeklyGoal: string
    days: string
  }

  export type GrowthJourneyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type GrowthJourneyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyGoal?: StringFieldUpdateOperationsInput | string
    days?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    teacherCardId?: SortOrder
    avatarUrl?: SortOrder
    initials?: SortOrder
    email?: SortOrder
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    enrolledClassIds?: SortOrder
    createdClassIds?: SortOrder
    equippedGear?: SortOrder
    voiceId?: SortOrder
    speechSpeed?: SortOrder
    avatarPreference?: SortOrder
    status?: SortOrder
    strength?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    speechSpeed?: SortOrder
    progress?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    teacherCardId?: SortOrder
    avatarUrl?: SortOrder
    initials?: SortOrder
    email?: SortOrder
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    enrolledClassIds?: SortOrder
    createdClassIds?: SortOrder
    equippedGear?: SortOrder
    voiceId?: SortOrder
    speechSpeed?: SortOrder
    avatarPreference?: SortOrder
    status?: SortOrder
    strength?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    teacherCardId?: SortOrder
    avatarUrl?: SortOrder
    initials?: SortOrder
    email?: SortOrder
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    enrolledClassIds?: SortOrder
    createdClassIds?: SortOrder
    equippedGear?: SortOrder
    voiceId?: SortOrder
    speechSpeed?: SortOrder
    avatarPreference?: SortOrder
    status?: SortOrder
    strength?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    stars?: SortOrder
    exp?: SortOrder
    streak?: SortOrder
    speechSpeed?: SortOrder
    progress?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    studentCount?: SortOrder
    bannerColor?: SortOrder
    schedule?: SortOrder
    progress?: SortOrder
  }

  export type ClassroomAvgOrderByAggregateInput = {
    studentCount?: SortOrder
    progress?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    studentCount?: SortOrder
    bannerColor?: SortOrder
    schedule?: SortOrder
    progress?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    section?: SortOrder
    subject?: SortOrder
    teacherId?: SortOrder
    teacherName?: SortOrder
    studentCount?: SortOrder
    bannerColor?: SortOrder
    schedule?: SortOrder
    progress?: SortOrder
  }

  export type ClassroomSumOrderByAggregateInput = {
    studentCount?: SortOrder
    progress?: SortOrder
  }

  export type ClassMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    uploadedAt?: SortOrder
    summary?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
  }

  export type ClassMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    uploadedAt?: SortOrder
    summary?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
  }

  export type ClassMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    title?: SortOrder
    uploadedAt?: SortOrder
    summary?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    mimeType?: SortOrder
    uploadedById?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    totalPoints?: SortOrder
    status?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    totalPoints?: SortOrder
    status?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    materialId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    totalPoints?: SortOrder
    status?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    submissionCount?: SortOrder
    score?: SortOrder
  }

  export type AssignmentResultAssignmentIdStudentIdCompoundUniqueInput = {
    assignmentId: string
    studentId: string
  }

  export type AssignmentResultCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    score?: SortOrder
    totalPoints?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentResultAvgOrderByAggregateInput = {
    score?: SortOrder
    totalPoints?: SortOrder
  }

  export type AssignmentResultMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    score?: SortOrder
    totalPoints?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentResultMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    score?: SortOrder
    totalPoints?: SortOrder
    answers?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type AssignmentResultSumOrderByAggregateInput = {
    score?: SortOrder
    totalPoints?: SortOrder
  }

  export type AssignmentQuizCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    questions?: SortOrder
  }

  export type AssignmentQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    questions?: SortOrder
  }

  export type AssignmentQuizMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    questions?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    questionCount?: SortOrder
    xpReward?: SortOrder
    badgeColor?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    questionCount?: SortOrder
    xpReward?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    questionCount?: SortOrder
    xpReward?: SortOrder
    badgeColor?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    title?: SortOrder
    questionCount?: SortOrder
    xpReward?: SortOrder
    badgeColor?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    questionCount?: SortOrder
    xpReward?: SortOrder
  }

  export type QuizQuestionSetCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questions?: SortOrder
  }

  export type QuizQuestionSetMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questions?: SortOrder
  }

  export type QuizQuestionSetMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    questions?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    starsReward?: SortOrder
    content?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    starsReward?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    starsReward?: SortOrder
    content?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    difficulty?: SortOrder
    starsReward?: SortOrder
    content?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    starsReward?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WardrobeItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    locked?: SortOrder
    lvl?: SortOrder
  }

  export type WardrobeItemAvgOrderByAggregateInput = {
    lvl?: SortOrder
  }

  export type WardrobeItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    locked?: SortOrder
    lvl?: SortOrder
  }

  export type WardrobeItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    locked?: SortOrder
    lvl?: SortOrder
  }

  export type WardrobeItemSumOrderByAggregateInput = {
    lvl?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AiVoiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
  }

  export type AiVoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
  }

  export type AiVoiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
  }

  export type CodeModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    icon?: SortOrder
    lessons?: SortOrder
    hours?: SortOrder
    accentClass?: SortOrder
    bgIconClass?: SortOrder
    isWide?: SortOrder
    isNew?: SortOrder
    comingSoon?: SortOrder
    category?: SortOrder
  }

  export type CodeModuleAvgOrderByAggregateInput = {
    lessons?: SortOrder
    hours?: SortOrder
  }

  export type CodeModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    icon?: SortOrder
    lessons?: SortOrder
    hours?: SortOrder
    accentClass?: SortOrder
    bgIconClass?: SortOrder
    isWide?: SortOrder
    isNew?: SortOrder
    comingSoon?: SortOrder
    category?: SortOrder
  }

  export type CodeModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    level?: SortOrder
    icon?: SortOrder
    lessons?: SortOrder
    hours?: SortOrder
    accentClass?: SortOrder
    bgIconClass?: SortOrder
    isWide?: SortOrder
    isNew?: SortOrder
    comingSoon?: SortOrder
    category?: SortOrder
  }

  export type CodeModuleSumOrderByAggregateInput = {
    lessons?: SortOrder
    hours?: SortOrder
  }

  export type CodeModuleCurriculumCountOrderByAggregateInput = {
    moduleId?: SortOrder
    sourceUrl?: SortOrder
    sourceLabel?: SortOrder
    curriculum?: SortOrder
  }

  export type CodeModuleCurriculumMaxOrderByAggregateInput = {
    moduleId?: SortOrder
    sourceUrl?: SortOrder
    sourceLabel?: SortOrder
    curriculum?: SortOrder
  }

  export type CodeModuleCurriculumMinOrderByAggregateInput = {
    moduleId?: SortOrder
    sourceUrl?: SortOrder
    sourceLabel?: SortOrder
    curriculum?: SortOrder
  }

  export type DailyObjectiveCountOrderByAggregateInput = {
    id?: SortOrder
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
    bonusUnlocked?: SortOrder
  }

  export type DailyObjectiveAvgOrderByAggregateInput = {
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
  }

  export type DailyObjectiveMaxOrderByAggregateInput = {
    id?: SortOrder
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
    bonusUnlocked?: SortOrder
  }

  export type DailyObjectiveMinOrderByAggregateInput = {
    id?: SortOrder
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
    bonusUnlocked?: SortOrder
  }

  export type DailyObjectiveSumOrderByAggregateInput = {
    completedQuizzes?: SortOrder
    targetQuizzes?: SortOrder
  }

  export type UserCodeLabProgressCountOrderByAggregateInput = {
    userId?: SortOrder
    activeModuleId?: SortOrder
    itemProgress?: SortOrder
    weeklyGoal?: SortOrder
    growthDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCodeLabProgressMaxOrderByAggregateInput = {
    userId?: SortOrder
    activeModuleId?: SortOrder
    itemProgress?: SortOrder
    weeklyGoal?: SortOrder
    growthDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCodeLabProgressMinOrderByAggregateInput = {
    userId?: SortOrder
    activeModuleId?: SortOrder
    itemProgress?: SortOrder
    weeklyGoal?: SortOrder
    growthDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeLabProgressCountOrderByAggregateInput = {
    id?: SortOrder
    currentPath?: SortOrder
    description?: SortOrder
    completionPercentage?: SortOrder
    status?: SortOrder
  }

  export type CodeLabProgressAvgOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type CodeLabProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    currentPath?: SortOrder
    description?: SortOrder
    completionPercentage?: SortOrder
    status?: SortOrder
  }

  export type CodeLabProgressMinOrderByAggregateInput = {
    id?: SortOrder
    currentPath?: SortOrder
    description?: SortOrder
    completionPercentage?: SortOrder
    status?: SortOrder
  }

  export type CodeLabProgressSumOrderByAggregateInput = {
    completionPercentage?: SortOrder
  }

  export type GrowthJourneyCountOrderByAggregateInput = {
    id?: SortOrder
    weeklyGoal?: SortOrder
    days?: SortOrder
  }

  export type GrowthJourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    weeklyGoal?: SortOrder
    days?: SortOrder
  }

  export type GrowthJourneyMinOrderByAggregateInput = {
    id?: SortOrder
    weeklyGoal?: SortOrder
    days?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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