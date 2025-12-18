/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model GrantOpportunity
 *
 */
export type GrantOpportunity = $Result.DefaultSelection<Prisma.$GrantOpportunityPayload>;
/**
 * Model InternalGrantSource
 *
 */
export type InternalGrantSource = $Result.DefaultSelection<Prisma.$InternalGrantSourcePayload>;
/**
 * Model LetterOfIntent
 *
 */
export type LetterOfIntent = $Result.DefaultSelection<Prisma.$LetterOfIntentPayload>;
/**
 * Model Organization
 *
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model ProposalDraft
 *
 */
export type ProposalDraft = $Result.DefaultSelection<Prisma.$ProposalDraftPayload>;
/**
 * Model ReadinessScore
 *
 */
export type ReadinessScore = $Result.DefaultSelection<Prisma.$ReadinessScorePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GrantOpportunities
 * const grantOpportunities = await prisma.grantOpportunity.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    const U = "log" extends keyof ClientOptions
        ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
            ? Prisma.GetEvents<ClientOptions["log"]>
            : never
        : never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

    /**
     * ##  Prisma Client ʲˢ
     *
     * Type-safe database client for TypeScript & Node.js
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more GrantOpportunities
     * const grantOpportunities = await prisma.grantOpportunity.findMany()
     * ```
     *
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */

    constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
    $on<V extends U>(
        eventType: V,
        callback: (event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent) => void,
    ): PrismaClient;

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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<number>;

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
    $queryRaw<T = unknown>(
        query: TemplateStringsArray | Prisma.Sql,
        ...values: any[]
    ): Prisma.PrismaPromise<T>;

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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(
        arg: [...P],
        options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
    ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

    $transaction<R>(
        fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
        options?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        },
    ): $Utils.JsPromise<R>;

    $extends: $Extensions.ExtendsHook<
        "extends",
        Prisma.TypeMapCb<ClientOptions>,
        ExtArgs,
        $Utils.Call<
            Prisma.TypeMapCb<ClientOptions>,
            {
                extArgs: ExtArgs;
            }
        >
    >;

    /**
     * `prisma.grantOpportunity`: Exposes CRUD operations for the **GrantOpportunity** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more GrantOpportunities
     * const grantOpportunities = await prisma.grantOpportunity.findMany()
     * ```
     */
    get grantOpportunity(): Prisma.GrantOpportunityDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.internalGrantSource`: Exposes CRUD operations for the **InternalGrantSource** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more InternalGrantSources
     * const internalGrantSources = await prisma.internalGrantSource.findMany()
     * ```
     */
    get internalGrantSource(): Prisma.InternalGrantSourceDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.letterOfIntent`: Exposes CRUD operations for the **LetterOfIntent** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more LetterOfIntents
     * const letterOfIntents = await prisma.letterOfIntent.findMany()
     * ```
     */
    get letterOfIntent(): Prisma.LetterOfIntentDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Organizations
     * const organizations = await prisma.organization.findMany()
     * ```
     */
    get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.proposalDraft`: Exposes CRUD operations for the **ProposalDraft** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ProposalDrafts
     * const proposalDrafts = await prisma.proposalDraft.findMany()
     * ```
     */
    get proposalDraft(): Prisma.ProposalDraftDelegate<ExtArgs, ClientOptions>;

    /**
     * `prisma.readinessScore`: Exposes CRUD operations for the **ReadinessScore** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more ReadinessScores
     * const readinessScores = await prisma.readinessScore.findMany()
     * ```
     */
    get readinessScore(): Prisma.ReadinessScoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
    export import DMMF = runtime.DMMF;

    export type PrismaPromise<T> = $Public.PrismaPromise<T>;

    /**
     * Validator
     */
    export import validator = runtime.Public.validator;

    /**
     * Prisma Errors
     */
    export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
    export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
    export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
    export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
    export import PrismaClientValidationError = runtime.PrismaClientValidationError;

    /**
     * Re-export of sql-template-tag
     */
    export import sql = runtime.sqltag;
    export import empty = runtime.empty;
    export import join = runtime.join;
    export import raw = runtime.raw;
    export import Sql = runtime.Sql;

    /**
     * Decimal.js
     */
    export import Decimal = runtime.Decimal;

    export type DecimalJsLike = runtime.DecimalJsLike;

    /**
     * Metrics
     */
    export type Metrics = runtime.Metrics;
    export type Metric<T> = runtime.Metric<T>;
    export type MetricHistogram = runtime.MetricHistogram;
    export type MetricHistogramBucket = runtime.MetricHistogramBucket;

    /**
     * Extensions
     */
    export import Extension = $Extensions.UserArgs;
    export import getExtensionContext = runtime.Extensions.getExtensionContext;
    export import Args = $Public.Args;
    export import Payload = $Public.Payload;
    export import Result = $Public.Result;
    export import Exact = $Public.Exact;

    /**
     * Prisma Client JS version: 6.19.1
     * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
     */
    export type PrismaVersion = {
        client: string;
    };

    export const prismaVersion: PrismaVersion;

    /**
     * Utility Types
     */

    export import Bytes = runtime.Bytes;
    export import JsonObject = runtime.JsonObject;
    export import JsonArray = runtime.JsonArray;
    export import JsonValue = runtime.JsonValue;
    export import InputJsonObject = runtime.InputJsonObject;
    export import InputJsonArray = runtime.InputJsonArray;
    export import InputJsonValue = runtime.InputJsonValue;

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
            private DbNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.JsonNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class JsonNull {
            private JsonNull: never;
            private constructor();
        }

        /**
         * Type of `Prisma.AnyNull`.
         *
         * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
         *
         * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
         */
        class AnyNull {
            private AnyNull: never;
            private constructor();
        }
    }

    /**
     * Helper for filtering JSON entries that have `null` on the database (empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const DbNull: NullTypes.DbNull;

    /**
     * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const JsonNull: NullTypes.JsonNull;

    /**
     * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    export const AnyNull: NullTypes.AnyNull;

    type SelectAndInclude = {
        select: any;
        include: any;
    };

    type SelectAndOmit = {
        select: any;
        omit: any;
    };

    /**
     * Get the type of the value, that the Promise holds.
     */
    export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

    /**
     * Get the return type of a function which returns a Promise.
     */
    export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
        ReturnType<T>
    >;

    /**
     * From T, pick a set of properties whose keys are in the union K
     */
    type Prisma__Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    export type Enumerable<T> = T | Array<T>;

    export type RequiredKeys<T> = {
        [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
    }[keyof T];

    export type TruthyKeys<T> = keyof {
        [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
    };

    export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & (T extends SelectAndInclude
        ? "Please either choose `select` or `include`."
        : T extends SelectAndOmit
          ? "Please either choose `select` or `omit`."
          : {});

    /**
     * Subset + Intersection
     * @desc From `T` pick properties that exist in `U` and intersect `K`
     */
    export type SubsetIntersection<T, U, K> = {
        [key in keyof T]: key extends keyof U ? T[key] : never;
    } & K;

    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    /**
     * XOR is needed to have a real mutually exclusive union type
     * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
     */
    type XOR<T, U> = T extends object
        ? U extends object
            ? (Without<T, U> & U) | (Without<U, T> & T)
            : U
        : T;

    /**
     * Is T a Record?
     */
    type IsObject<T extends any> =
        T extends Array<any>
            ? False
            : T extends Date
              ? False
              : T extends Uint8Array
                ? False
                : T extends BigInt
                  ? False
                  : T extends object
                    ? True
                    : False;

    /**
     * If it's T[], return T
     */
    export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

    /**
     * From ts-toolbelt
     */

    type __Either<O extends object, K extends Key> = Omit<O, K> &
        {
            // Merge all but K
            [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
        }[K];

    type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

    type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

    type _Either<O extends object, K extends Key, strict extends Boolean> = {
        1: EitherStrict<O, K>;
        0: EitherLoose<O, K>;
    }[strict];

    type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
        ? _Either<O, K, strict>
        : never;

    export type Union = any;

    type PatchUndefined<O extends object, O1 extends object> = {
        [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
    } & {};

    /** Helper Types for "Merge" **/
    export type IntersectOf<U extends Union> = (
        U extends unknown ? (k: U) => void : never
    ) extends (k: infer I) => void
        ? I
        : never;

    export type Overwrite<O extends object, O1 extends object> = {
        [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
    } & {};

    type _Merge<U extends object> = IntersectOf<
        Overwrite<
            U,
            {
                [K in keyof U]-?: At<U, K>;
            }
        >
    >;

    type Key = string | number | symbol;
    type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
    type AtStrict<O extends object, K extends Key> = O[K & keyof O];
    type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
    export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
        1: AtStrict<O, K>;
        0: AtLoose<O, K>;
    }[strict];

    export type ComputeRaw<A extends any> = A extends Function
        ? A
        : {
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
            ?
                  | (K extends keyof O ? { [P in K]: O[P] } & O : O)
                  | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
            : never
    >;

    type _Strict<U, _U = U> = U extends unknown
        ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
        : never;

    export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
    /** End Helper Types for "Merge" **/

    export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

    /**
  A [[Boolean]]
  */
    export type Boolean = True | False;

    // /**
    // 1
    // */
    export type True = 1;

    /**
  0
  */
    export type False = 0;

    export type Not<B extends Boolean> = {
        0: 1;
        1: 0;
    }[B];

    export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
        ? 0 // anything `never` is false
        : A1 extends A2
          ? 1
          : 0;

    export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

    export type Or<B1 extends Boolean, B2 extends Boolean> = {
        0: {
            0: 0;
            1: 1;
        };
        1: {
            0: 1;
            1: 1;
        };
    }[B1][B2];

    export type Keys<U extends Union> = U extends unknown ? keyof U : never;

    type Cast<A, B> = A extends B ? A : B;

    export const type: unique symbol;

    /**
     * Used by group by
     */

    export type GetScalarType<T, O> = O extends object
        ? {
              [P in keyof T]: P extends keyof O ? O[P] : never;
          }
        : never;

    type FieldPaths<T, U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">> =
        IsObject<T> extends True ? U : T;

    type GetHavingFields<T> = {
        [K in keyof T]: Or<Or<Extends<"OR", K>, Extends<"AND", K>>, Extends<"NOT", K>> extends True
            ? // infer is only needed to not hit TS limit
              // based on the brilliant idea of Pierre-Antoine Mills
              // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
              T[K] extends infer TK
                ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
                : never
            : {} extends FieldPaths<T[K]>
              ? never
              : K;
    }[keyof T];

    /**
     * Convert tuple to union
     */
    type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
    type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
    type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

    /**
     * Like `Pick`, but additionally can also accept an array of keys
     */
    type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
        T,
        MaybeTupleToUnion<K>
    >;

    /**
     * Exclude all keys with underscores
     */
    type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

    export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

    type FieldRefInputType<Model, FieldType> = Model extends never
        ? never
        : FieldRef<Model, FieldType>;

    export const ModelName: {
        GrantOpportunity: "GrantOpportunity";
        InternalGrantSource: "InternalGrantSource";
        LetterOfIntent: "LetterOfIntent";
        Organization: "Organization";
        ProposalDraft: "ProposalDraft";
        ReadinessScore: "ReadinessScore";
    };

    export type ModelName = (typeof ModelName)[keyof typeof ModelName];

    export type Datasources = {
        db?: Datasource;
    };

    interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
        { extArgs: $Extensions.InternalArgs },
        $Utils.Record<string, any>
    > {
        returns: Prisma.TypeMap<
            this["params"]["extArgs"],
            ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
        >;
    }

    export type TypeMap<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > = {
        globalOmitOptions: {
            omit: GlobalOmitOptions;
        };
        meta: {
            modelProps:
                | "grantOpportunity"
                | "internalGrantSource"
                | "letterOfIntent"
                | "organization"
                | "proposalDraft"
                | "readinessScore";
            txIsolationLevel: Prisma.TransactionIsolationLevel;
        };
        model: {
            GrantOpportunity: {
                payload: Prisma.$GrantOpportunityPayload<ExtArgs>;
                fields: Prisma.GrantOpportunityFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.GrantOpportunityFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.GrantOpportunityFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    findFirst: {
                        args: Prisma.GrantOpportunityFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.GrantOpportunityFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    findMany: {
                        args: Prisma.GrantOpportunityFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>[];
                    };
                    create: {
                        args: Prisma.GrantOpportunityCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    createMany: {
                        args: Prisma.GrantOpportunityCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.GrantOpportunityCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>[];
                    };
                    delete: {
                        args: Prisma.GrantOpportunityDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    update: {
                        args: Prisma.GrantOpportunityUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    deleteMany: {
                        args: Prisma.GrantOpportunityDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.GrantOpportunityUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.GrantOpportunityUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>[];
                    };
                    upsert: {
                        args: Prisma.GrantOpportunityUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$GrantOpportunityPayload>;
                    };
                    aggregate: {
                        args: Prisma.GrantOpportunityAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateGrantOpportunity>;
                    };
                    groupBy: {
                        args: Prisma.GrantOpportunityGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<GrantOpportunityGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.GrantOpportunityCountArgs<ExtArgs>;
                        result: $Utils.Optional<GrantOpportunityCountAggregateOutputType> | number;
                    };
                };
            };
            InternalGrantSource: {
                payload: Prisma.$InternalGrantSourcePayload<ExtArgs>;
                fields: Prisma.InternalGrantSourceFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.InternalGrantSourceFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.InternalGrantSourceFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    findFirst: {
                        args: Prisma.InternalGrantSourceFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.InternalGrantSourceFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    findMany: {
                        args: Prisma.InternalGrantSourceFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>[];
                    };
                    create: {
                        args: Prisma.InternalGrantSourceCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    createMany: {
                        args: Prisma.InternalGrantSourceCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.InternalGrantSourceCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>[];
                    };
                    delete: {
                        args: Prisma.InternalGrantSourceDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    update: {
                        args: Prisma.InternalGrantSourceUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    deleteMany: {
                        args: Prisma.InternalGrantSourceDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.InternalGrantSourceUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.InternalGrantSourceUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>[];
                    };
                    upsert: {
                        args: Prisma.InternalGrantSourceUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$InternalGrantSourcePayload>;
                    };
                    aggregate: {
                        args: Prisma.InternalGrantSourceAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateInternalGrantSource>;
                    };
                    groupBy: {
                        args: Prisma.InternalGrantSourceGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<InternalGrantSourceGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.InternalGrantSourceCountArgs<ExtArgs>;
                        result:
                            | $Utils.Optional<InternalGrantSourceCountAggregateOutputType>
                            | number;
                    };
                };
            };
            LetterOfIntent: {
                payload: Prisma.$LetterOfIntentPayload<ExtArgs>;
                fields: Prisma.LetterOfIntentFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.LetterOfIntentFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.LetterOfIntentFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    findFirst: {
                        args: Prisma.LetterOfIntentFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.LetterOfIntentFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    findMany: {
                        args: Prisma.LetterOfIntentFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>[];
                    };
                    create: {
                        args: Prisma.LetterOfIntentCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    createMany: {
                        args: Prisma.LetterOfIntentCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.LetterOfIntentCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>[];
                    };
                    delete: {
                        args: Prisma.LetterOfIntentDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    update: {
                        args: Prisma.LetterOfIntentUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    deleteMany: {
                        args: Prisma.LetterOfIntentDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.LetterOfIntentUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.LetterOfIntentUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>[];
                    };
                    upsert: {
                        args: Prisma.LetterOfIntentUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$LetterOfIntentPayload>;
                    };
                    aggregate: {
                        args: Prisma.LetterOfIntentAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateLetterOfIntent>;
                    };
                    groupBy: {
                        args: Prisma.LetterOfIntentGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<LetterOfIntentGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.LetterOfIntentCountArgs<ExtArgs>;
                        result: $Utils.Optional<LetterOfIntentCountAggregateOutputType> | number;
                    };
                };
            };
            Organization: {
                payload: Prisma.$OrganizationPayload<ExtArgs>;
                fields: Prisma.OrganizationFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    findFirst: {
                        args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    findMany: {
                        args: Prisma.OrganizationFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                    };
                    create: {
                        args: Prisma.OrganizationCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    createMany: {
                        args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                    };
                    delete: {
                        args: Prisma.OrganizationDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    update: {
                        args: Prisma.OrganizationUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    deleteMany: {
                        args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
                    };
                    upsert: {
                        args: Prisma.OrganizationUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
                    };
                    aggregate: {
                        args: Prisma.OrganizationAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateOrganization>;
                    };
                    groupBy: {
                        args: Prisma.OrganizationGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<OrganizationGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.OrganizationCountArgs<ExtArgs>;
                        result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
                    };
                };
            };
            ProposalDraft: {
                payload: Prisma.$ProposalDraftPayload<ExtArgs>;
                fields: Prisma.ProposalDraftFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ProposalDraftFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ProposalDraftFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    findFirst: {
                        args: Prisma.ProposalDraftFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ProposalDraftFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    findMany: {
                        args: Prisma.ProposalDraftFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>[];
                    };
                    create: {
                        args: Prisma.ProposalDraftCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    createMany: {
                        args: Prisma.ProposalDraftCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ProposalDraftCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>[];
                    };
                    delete: {
                        args: Prisma.ProposalDraftDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    update: {
                        args: Prisma.ProposalDraftUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    deleteMany: {
                        args: Prisma.ProposalDraftDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ProposalDraftUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ProposalDraftUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>[];
                    };
                    upsert: {
                        args: Prisma.ProposalDraftUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ProposalDraftPayload>;
                    };
                    aggregate: {
                        args: Prisma.ProposalDraftAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateProposalDraft>;
                    };
                    groupBy: {
                        args: Prisma.ProposalDraftGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ProposalDraftGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ProposalDraftCountArgs<ExtArgs>;
                        result: $Utils.Optional<ProposalDraftCountAggregateOutputType> | number;
                    };
                };
            };
            ReadinessScore: {
                payload: Prisma.$ReadinessScorePayload<ExtArgs>;
                fields: Prisma.ReadinessScoreFieldRefs;
                operations: {
                    findUnique: {
                        args: Prisma.ReadinessScoreFindUniqueArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload> | null;
                    };
                    findUniqueOrThrow: {
                        args: Prisma.ReadinessScoreFindUniqueOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    findFirst: {
                        args: Prisma.ReadinessScoreFindFirstArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload> | null;
                    };
                    findFirstOrThrow: {
                        args: Prisma.ReadinessScoreFindFirstOrThrowArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    findMany: {
                        args: Prisma.ReadinessScoreFindManyArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>[];
                    };
                    create: {
                        args: Prisma.ReadinessScoreCreateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    createMany: {
                        args: Prisma.ReadinessScoreCreateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    createManyAndReturn: {
                        args: Prisma.ReadinessScoreCreateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>[];
                    };
                    delete: {
                        args: Prisma.ReadinessScoreDeleteArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    update: {
                        args: Prisma.ReadinessScoreUpdateArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    deleteMany: {
                        args: Prisma.ReadinessScoreDeleteManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateMany: {
                        args: Prisma.ReadinessScoreUpdateManyArgs<ExtArgs>;
                        result: BatchPayload;
                    };
                    updateManyAndReturn: {
                        args: Prisma.ReadinessScoreUpdateManyAndReturnArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>[];
                    };
                    upsert: {
                        args: Prisma.ReadinessScoreUpsertArgs<ExtArgs>;
                        result: $Utils.PayloadToResult<Prisma.$ReadinessScorePayload>;
                    };
                    aggregate: {
                        args: Prisma.ReadinessScoreAggregateArgs<ExtArgs>;
                        result: $Utils.Optional<AggregateReadinessScore>;
                    };
                    groupBy: {
                        args: Prisma.ReadinessScoreGroupByArgs<ExtArgs>;
                        result: $Utils.Optional<ReadinessScoreGroupByOutputType>[];
                    };
                    count: {
                        args: Prisma.ReadinessScoreCountArgs<ExtArgs>;
                        result: $Utils.Optional<ReadinessScoreCountAggregateOutputType> | number;
                    };
                };
            };
        };
    } & {
        other: {
            payload: any;
            operations: {
                $executeRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
                    result: any;
                };
                $executeRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
                $queryRaw: {
                    args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
                    result: any;
                };
                $queryRawUnsafe: {
                    args: [query: string, ...values: any[]];
                    result: any;
                };
            };
        };
    };
    export const defineExtension: $Extensions.ExtendsHook<
        "define",
        Prisma.TypeMapCb,
        $Extensions.DefaultArgs
    >;
    export type DefaultPrismaClient = PrismaClient;
    export type ErrorFormat = "pretty" | "colorless" | "minimal";
    export interface PrismaClientOptions {
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasources?: Datasources;
        /**
         * Overwrites the datasource url from your schema.prisma file
         */
        datasourceUrl?: string;
        /**
         * @default "colorless"
         */
        errorFormat?: ErrorFormat;
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
         * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
         */
        log?: (LogLevel | LogDefinition)[];
        /**
         * The default values for transactionOptions
         * maxWait ?= 2000
         * timeout ?= 5000
         */
        transactionOptions?: {
            maxWait?: number;
            timeout?: number;
            isolationLevel?: Prisma.TransactionIsolationLevel;
        };
        /**
         * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
         */
        adapter?: runtime.SqlDriverAdapterFactory | null;
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
        omit?: Prisma.GlobalOmitConfig;
    }
    export type GlobalOmitConfig = {
        grantOpportunity?: GrantOpportunityOmit;
        internalGrantSource?: InternalGrantSourceOmit;
        letterOfIntent?: LetterOfIntentOmit;
        organization?: OrganizationOmit;
        proposalDraft?: ProposalDraftOmit;
        readinessScore?: ReadinessScoreOmit;
    };

    /* Types for Logging */
    export type LogLevel = "info" | "query" | "warn" | "error";
    export type LogDefinition = {
        level: LogLevel;
        emit: "stdout" | "event";
    };

    export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

    export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T["level"] : T>;

    export type GetEvents<T extends any[]> =
        T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

    export type QueryEvent = {
        timestamp: Date;
        query: string;
        params: string;
        duration: number;
        target: string;
    };

    export type LogEvent = {
        timestamp: Date;
        message: string;
        target: string;
    };
    /* End Types for Logging */

    export type PrismaAction =
        | "findUnique"
        | "findUniqueOrThrow"
        | "findMany"
        | "findFirst"
        | "findFirstOrThrow"
        | "create"
        | "createMany"
        | "createManyAndReturn"
        | "update"
        | "updateMany"
        | "updateManyAndReturn"
        | "upsert"
        | "delete"
        | "deleteMany"
        | "executeRaw"
        | "queryRaw"
        | "aggregate"
        | "count"
        | "runCommandRaw"
        | "findRaw"
        | "groupBy";

    // tested in getLogLevel.test.ts
    export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

    /**
     * `PrismaClient` proxy available in interactive transactions.
     */
    export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

    export type Datasource = {
        url?: string;
    };

    /**
     * Count Types
     */

    /**
     * Count Type GrantOpportunityCountOutputType
     */

    export type GrantOpportunityCountOutputType = {
        readinessScores: number;
        lettersOfIntent: number;
        proposalDrafts: number;
    };

    export type GrantOpportunityCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        readinessScores?: boolean | GrantOpportunityCountOutputTypeCountReadinessScoresArgs;
        lettersOfIntent?: boolean | GrantOpportunityCountOutputTypeCountLettersOfIntentArgs;
        proposalDrafts?: boolean | GrantOpportunityCountOutputTypeCountProposalDraftsArgs;
    };

    // Custom InputTypes
    /**
     * GrantOpportunityCountOutputType without action
     */
    export type GrantOpportunityCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunityCountOutputType
         */
        select?: GrantOpportunityCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * GrantOpportunityCountOutputType without action
     */
    export type GrantOpportunityCountOutputTypeCountReadinessScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ReadinessScoreWhereInput;
    };

    /**
     * GrantOpportunityCountOutputType without action
     */
    export type GrantOpportunityCountOutputTypeCountLettersOfIntentArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: LetterOfIntentWhereInput;
    };

    /**
     * GrantOpportunityCountOutputType without action
     */
    export type GrantOpportunityCountOutputTypeCountProposalDraftsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ProposalDraftWhereInput;
    };

    /**
     * Count Type InternalGrantSourceCountOutputType
     */

    export type InternalGrantSourceCountOutputType = {
        grantOpportunities: number;
    };

    export type InternalGrantSourceCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        grantOpportunities?:
            | boolean
            | InternalGrantSourceCountOutputTypeCountGrantOpportunitiesArgs;
    };

    // Custom InputTypes
    /**
     * InternalGrantSourceCountOutputType without action
     */
    export type InternalGrantSourceCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSourceCountOutputType
         */
        select?: InternalGrantSourceCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * InternalGrantSourceCountOutputType without action
     */
    export type InternalGrantSourceCountOutputTypeCountGrantOpportunitiesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: GrantOpportunityWhereInput;
    };

    /**
     * Count Type OrganizationCountOutputType
     */

    export type OrganizationCountOutputType = {
        grantOpportunities: number;
        internalGrantSources: number;
        readinessScores: number;
        lettersOfIntent: number;
        proposalDrafts: number;
    };

    export type OrganizationCountOutputTypeSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        grantOpportunities?: boolean | OrganizationCountOutputTypeCountGrantOpportunitiesArgs;
        internalGrantSources?: boolean | OrganizationCountOutputTypeCountInternalGrantSourcesArgs;
        readinessScores?: boolean | OrganizationCountOutputTypeCountReadinessScoresArgs;
        lettersOfIntent?: boolean | OrganizationCountOutputTypeCountLettersOfIntentArgs;
        proposalDrafts?: boolean | OrganizationCountOutputTypeCountProposalDraftsArgs;
    };

    // Custom InputTypes
    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the OrganizationCountOutputType
         */
        select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
    };

    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeCountGrantOpportunitiesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: GrantOpportunityWhereInput;
    };

    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeCountInternalGrantSourcesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: InternalGrantSourceWhereInput;
    };

    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeCountReadinessScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ReadinessScoreWhereInput;
    };

    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeCountLettersOfIntentArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: LetterOfIntentWhereInput;
    };

    /**
     * OrganizationCountOutputType without action
     */
    export type OrganizationCountOutputTypeCountProposalDraftsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ProposalDraftWhereInput;
    };

    /**
     * Models
     */

    /**
     * Model GrantOpportunity
     */

    export type AggregateGrantOpportunity = {
        _count: GrantOpportunityCountAggregateOutputType | null;
        _avg: GrantOpportunityAvgAggregateOutputType | null;
        _sum: GrantOpportunitySumAggregateOutputType | null;
        _min: GrantOpportunityMinAggregateOutputType | null;
        _max: GrantOpportunityMaxAggregateOutputType | null;
    };

    export type GrantOpportunityAvgAggregateOutputType = {
        amountUsd: Decimal | null;
    };

    export type GrantOpportunitySumAggregateOutputType = {
        amountUsd: Decimal | null;
    };

    export type GrantOpportunityMinAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        funderName: string | null;
        focusArea: string | null;
        deadline: Date | null;
        amountUsd: Decimal | null;
        eligibility: string | null;
        attachmentsRequired: string | null;
        applicationFormat: string | null;
        funderProfileUrl: string | null;
        recipGsProfileLink: string | null;
        source: string | null;
        internalSourceId: string | null;
        grantType: string | null;
        createdAt: Date | null;
    };

    export type GrantOpportunityMaxAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        funderName: string | null;
        focusArea: string | null;
        deadline: Date | null;
        amountUsd: Decimal | null;
        eligibility: string | null;
        attachmentsRequired: string | null;
        applicationFormat: string | null;
        funderProfileUrl: string | null;
        recipGsProfileLink: string | null;
        source: string | null;
        internalSourceId: string | null;
        grantType: string | null;
        createdAt: Date | null;
    };

    export type GrantOpportunityCountAggregateOutputType = {
        id: number;
        organizationId: number;
        funderName: number;
        focusArea: number;
        deadline: number;
        amountUsd: number;
        eligibility: number;
        attachmentsRequired: number;
        applicationFormat: number;
        funderProfileUrl: number;
        recipGsProfileLink: number;
        source: number;
        internalSourceId: number;
        grantType: number;
        createdAt: number;
        _all: number;
    };

    export type GrantOpportunityAvgAggregateInputType = {
        amountUsd?: true;
    };

    export type GrantOpportunitySumAggregateInputType = {
        amountUsd?: true;
    };

    export type GrantOpportunityMinAggregateInputType = {
        id?: true;
        organizationId?: true;
        funderName?: true;
        focusArea?: true;
        deadline?: true;
        amountUsd?: true;
        eligibility?: true;
        attachmentsRequired?: true;
        applicationFormat?: true;
        funderProfileUrl?: true;
        recipGsProfileLink?: true;
        source?: true;
        internalSourceId?: true;
        grantType?: true;
        createdAt?: true;
    };

    export type GrantOpportunityMaxAggregateInputType = {
        id?: true;
        organizationId?: true;
        funderName?: true;
        focusArea?: true;
        deadline?: true;
        amountUsd?: true;
        eligibility?: true;
        attachmentsRequired?: true;
        applicationFormat?: true;
        funderProfileUrl?: true;
        recipGsProfileLink?: true;
        source?: true;
        internalSourceId?: true;
        grantType?: true;
        createdAt?: true;
    };

    export type GrantOpportunityCountAggregateInputType = {
        id?: true;
        organizationId?: true;
        funderName?: true;
        focusArea?: true;
        deadline?: true;
        amountUsd?: true;
        eligibility?: true;
        attachmentsRequired?: true;
        applicationFormat?: true;
        funderProfileUrl?: true;
        recipGsProfileLink?: true;
        source?: true;
        internalSourceId?: true;
        grantType?: true;
        createdAt?: true;
        _all?: true;
    };

    export type GrantOpportunityAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which GrantOpportunity to aggregate.
         */
        where?: GrantOpportunityWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of GrantOpportunities to fetch.
         */
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: GrantOpportunityWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` GrantOpportunities from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` GrantOpportunities.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned GrantOpportunities
         **/
        _count?: true | GrantOpportunityCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: GrantOpportunityAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: GrantOpportunitySumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: GrantOpportunityMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: GrantOpportunityMaxAggregateInputType;
    };

    export type GetGrantOpportunityAggregateType<T extends GrantOpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateGrantOpportunity]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateGrantOpportunity[P]>
            : GetScalarType<T[P], AggregateGrantOpportunity[P]>;
    };

    export type GrantOpportunityGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: GrantOpportunityWhereInput;
        orderBy?:
            | GrantOpportunityOrderByWithAggregationInput
            | GrantOpportunityOrderByWithAggregationInput[];
        by: GrantOpportunityScalarFieldEnum[] | GrantOpportunityScalarFieldEnum;
        having?: GrantOpportunityScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: GrantOpportunityCountAggregateInputType | true;
        _avg?: GrantOpportunityAvgAggregateInputType;
        _sum?: GrantOpportunitySumAggregateInputType;
        _min?: GrantOpportunityMinAggregateInputType;
        _max?: GrantOpportunityMaxAggregateInputType;
    };

    export type GrantOpportunityGroupByOutputType = {
        id: string;
        organizationId: string;
        funderName: string;
        focusArea: string | null;
        deadline: Date | null;
        amountUsd: Decimal | null;
        eligibility: string | null;
        attachmentsRequired: string | null;
        applicationFormat: string | null;
        funderProfileUrl: string | null;
        recipGsProfileLink: string | null;
        source: string | null;
        internalSourceId: string | null;
        grantType: string | null;
        createdAt: Date;
        _count: GrantOpportunityCountAggregateOutputType | null;
        _avg: GrantOpportunityAvgAggregateOutputType | null;
        _sum: GrantOpportunitySumAggregateOutputType | null;
        _min: GrantOpportunityMinAggregateOutputType | null;
        _max: GrantOpportunityMaxAggregateOutputType | null;
    };

    type GetGrantOpportunityGroupByPayload<T extends GrantOpportunityGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<GrantOpportunityGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof GrantOpportunityGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], GrantOpportunityGroupByOutputType[P]>
                        : GetScalarType<T[P], GrantOpportunityGroupByOutputType[P]>;
                }
            >
        >;

    export type GrantOpportunitySelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            funderName?: boolean;
            focusArea?: boolean;
            deadline?: boolean;
            amountUsd?: boolean;
            eligibility?: boolean;
            attachmentsRequired?: boolean;
            applicationFormat?: boolean;
            funderProfileUrl?: boolean;
            recipGsProfileLink?: boolean;
            source?: boolean;
            internalSourceId?: boolean;
            grantType?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
            readinessScores?: boolean | GrantOpportunity$readinessScoresArgs<ExtArgs>;
            lettersOfIntent?: boolean | GrantOpportunity$lettersOfIntentArgs<ExtArgs>;
            proposalDrafts?: boolean | GrantOpportunity$proposalDraftsArgs<ExtArgs>;
            _count?: boolean | GrantOpportunityCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["grantOpportunity"]
    >;

    export type GrantOpportunitySelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            funderName?: boolean;
            focusArea?: boolean;
            deadline?: boolean;
            amountUsd?: boolean;
            eligibility?: boolean;
            attachmentsRequired?: boolean;
            applicationFormat?: boolean;
            funderProfileUrl?: boolean;
            recipGsProfileLink?: boolean;
            source?: boolean;
            internalSourceId?: boolean;
            grantType?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
        },
        ExtArgs["result"]["grantOpportunity"]
    >;

    export type GrantOpportunitySelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            funderName?: boolean;
            focusArea?: boolean;
            deadline?: boolean;
            amountUsd?: boolean;
            eligibility?: boolean;
            attachmentsRequired?: boolean;
            applicationFormat?: boolean;
            funderProfileUrl?: boolean;
            recipGsProfileLink?: boolean;
            source?: boolean;
            internalSourceId?: boolean;
            grantType?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
        },
        ExtArgs["result"]["grantOpportunity"]
    >;

    export type GrantOpportunitySelectScalar = {
        id?: boolean;
        organizationId?: boolean;
        funderName?: boolean;
        focusArea?: boolean;
        deadline?: boolean;
        amountUsd?: boolean;
        eligibility?: boolean;
        attachmentsRequired?: boolean;
        applicationFormat?: boolean;
        funderProfileUrl?: boolean;
        recipGsProfileLink?: boolean;
        source?: boolean;
        internalSourceId?: boolean;
        grantType?: boolean;
        createdAt?: boolean;
    };

    export type GrantOpportunityOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationId"
        | "funderName"
        | "focusArea"
        | "deadline"
        | "amountUsd"
        | "eligibility"
        | "attachmentsRequired"
        | "applicationFormat"
        | "funderProfileUrl"
        | "recipGsProfileLink"
        | "source"
        | "internalSourceId"
        | "grantType"
        | "createdAt",
        ExtArgs["result"]["grantOpportunity"]
    >;
    export type GrantOpportunityInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
        readinessScores?: boolean | GrantOpportunity$readinessScoresArgs<ExtArgs>;
        lettersOfIntent?: boolean | GrantOpportunity$lettersOfIntentArgs<ExtArgs>;
        proposalDrafts?: boolean | GrantOpportunity$proposalDraftsArgs<ExtArgs>;
        _count?: boolean | GrantOpportunityCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type GrantOpportunityIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
    };
    export type GrantOpportunityIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        internalSource?: boolean | GrantOpportunity$internalSourceArgs<ExtArgs>;
    };

    export type $GrantOpportunityPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "GrantOpportunity";
        objects: {
            organization: Prisma.$OrganizationPayload<ExtArgs>;
            internalSource: Prisma.$InternalGrantSourcePayload<ExtArgs> | null;
            readinessScores: Prisma.$ReadinessScorePayload<ExtArgs>[];
            lettersOfIntent: Prisma.$LetterOfIntentPayload<ExtArgs>[];
            proposalDrafts: Prisma.$ProposalDraftPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationId: string;
                funderName: string;
                focusArea: string | null;
                deadline: Date | null;
                amountUsd: Prisma.Decimal | null;
                eligibility: string | null;
                attachmentsRequired: string | null;
                applicationFormat: string | null;
                funderProfileUrl: string | null;
                recipGsProfileLink: string | null;
                source: string | null;
                internalSourceId: string | null;
                grantType: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["grantOpportunity"]
        >;
        composites: {};
    };

    type GrantOpportunityGetPayload<
        S extends boolean | null | undefined | GrantOpportunityDefaultArgs,
    > = $Result.GetResult<Prisma.$GrantOpportunityPayload, S>;

    type GrantOpportunityCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<GrantOpportunityFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: GrantOpportunityCountAggregateInputType | true;
    };

    export interface GrantOpportunityDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["GrantOpportunity"];
            meta: { name: "GrantOpportunity" };
        };
        /**
         * Find zero or one GrantOpportunity that matches the filter.
         * @param {GrantOpportunityFindUniqueArgs} args - Arguments to find a GrantOpportunity
         * @example
         * // Get one GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends GrantOpportunityFindUniqueArgs>(
            args: SelectSubset<T, GrantOpportunityFindUniqueArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one GrantOpportunity that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {GrantOpportunityFindUniqueOrThrowArgs} args - Arguments to find a GrantOpportunity
         * @example
         * // Get one GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends GrantOpportunityFindUniqueOrThrowArgs>(
            args: SelectSubset<T, GrantOpportunityFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first GrantOpportunity that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityFindFirstArgs} args - Arguments to find a GrantOpportunity
         * @example
         * // Get one GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends GrantOpportunityFindFirstArgs>(
            args?: SelectSubset<T, GrantOpportunityFindFirstArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first GrantOpportunity that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityFindFirstOrThrowArgs} args - Arguments to find a GrantOpportunity
         * @example
         * // Get one GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends GrantOpportunityFindFirstOrThrowArgs>(
            args?: SelectSubset<T, GrantOpportunityFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more GrantOpportunities that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all GrantOpportunities
         * const grantOpportunities = await prisma.grantOpportunity.findMany()
         *
         * // Get first 10 GrantOpportunities
         * const grantOpportunities = await prisma.grantOpportunity.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const grantOpportunityWithIdOnly = await prisma.grantOpportunity.findMany({ select: { id: true } })
         *
         */
        findMany<T extends GrantOpportunityFindManyArgs>(
            args?: SelectSubset<T, GrantOpportunityFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a GrantOpportunity.
         * @param {GrantOpportunityCreateArgs} args - Arguments to create a GrantOpportunity.
         * @example
         * // Create one GrantOpportunity
         * const GrantOpportunity = await prisma.grantOpportunity.create({
         *   data: {
         *     // ... data to create a GrantOpportunity
         *   }
         * })
         *
         */
        create<T extends GrantOpportunityCreateArgs>(
            args: SelectSubset<T, GrantOpportunityCreateArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many GrantOpportunities.
         * @param {GrantOpportunityCreateManyArgs} args - Arguments to create many GrantOpportunities.
         * @example
         * // Create many GrantOpportunities
         * const grantOpportunity = await prisma.grantOpportunity.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends GrantOpportunityCreateManyArgs>(
            args?: SelectSubset<T, GrantOpportunityCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many GrantOpportunities and returns the data saved in the database.
         * @param {GrantOpportunityCreateManyAndReturnArgs} args - Arguments to create many GrantOpportunities.
         * @example
         * // Create many GrantOpportunities
         * const grantOpportunity = await prisma.grantOpportunity.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many GrantOpportunities and only return the `id`
         * const grantOpportunityWithIdOnly = await prisma.grantOpportunity.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends GrantOpportunityCreateManyAndReturnArgs>(
            args?: SelectSubset<T, GrantOpportunityCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a GrantOpportunity.
         * @param {GrantOpportunityDeleteArgs} args - Arguments to delete one GrantOpportunity.
         * @example
         * // Delete one GrantOpportunity
         * const GrantOpportunity = await prisma.grantOpportunity.delete({
         *   where: {
         *     // ... filter to delete one GrantOpportunity
         *   }
         * })
         *
         */
        delete<T extends GrantOpportunityDeleteArgs>(
            args: SelectSubset<T, GrantOpportunityDeleteArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one GrantOpportunity.
         * @param {GrantOpportunityUpdateArgs} args - Arguments to update one GrantOpportunity.
         * @example
         * // Update one GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends GrantOpportunityUpdateArgs>(
            args: SelectSubset<T, GrantOpportunityUpdateArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more GrantOpportunities.
         * @param {GrantOpportunityDeleteManyArgs} args - Arguments to filter GrantOpportunities to delete.
         * @example
         * // Delete a few GrantOpportunities
         * const { count } = await prisma.grantOpportunity.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends GrantOpportunityDeleteManyArgs>(
            args?: SelectSubset<T, GrantOpportunityDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more GrantOpportunities.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many GrantOpportunities
         * const grantOpportunity = await prisma.grantOpportunity.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends GrantOpportunityUpdateManyArgs>(
            args: SelectSubset<T, GrantOpportunityUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more GrantOpportunities and returns the data updated in the database.
         * @param {GrantOpportunityUpdateManyAndReturnArgs} args - Arguments to update many GrantOpportunities.
         * @example
         * // Update many GrantOpportunities
         * const grantOpportunity = await prisma.grantOpportunity.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more GrantOpportunities and only return the `id`
         * const grantOpportunityWithIdOnly = await prisma.grantOpportunity.updateManyAndReturn({
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
        updateManyAndReturn<T extends GrantOpportunityUpdateManyAndReturnArgs>(
            args: SelectSubset<T, GrantOpportunityUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one GrantOpportunity.
         * @param {GrantOpportunityUpsertArgs} args - Arguments to update or create a GrantOpportunity.
         * @example
         * // Update or create a GrantOpportunity
         * const grantOpportunity = await prisma.grantOpportunity.upsert({
         *   create: {
         *     // ... data to create a GrantOpportunity
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the GrantOpportunity we want to update
         *   }
         * })
         */
        upsert<T extends GrantOpportunityUpsertArgs>(
            args: SelectSubset<T, GrantOpportunityUpsertArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            $Result.GetResult<
                Prisma.$GrantOpportunityPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of GrantOpportunities.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityCountArgs} args - Arguments to filter GrantOpportunities to count.
         * @example
         * // Count the number of GrantOpportunities
         * const count = await prisma.grantOpportunity.count({
         *   where: {
         *     // ... the filter for the GrantOpportunities we want to count
         *   }
         * })
         **/
        count<T extends GrantOpportunityCountArgs>(
            args?: Subset<T, GrantOpportunityCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], GrantOpportunityCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a GrantOpportunity.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends GrantOpportunityAggregateArgs>(
            args: Subset<T, GrantOpportunityAggregateArgs>,
        ): Prisma.PrismaPromise<GetGrantOpportunityAggregateType<T>>;

        /**
         * Group by GrantOpportunity.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {GrantOpportunityGroupByArgs} args - Group by arguments.
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
            T extends GrantOpportunityGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: GrantOpportunityGroupByArgs["orderBy"] }
                : { orderBy?: GrantOpportunityGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, GrantOpportunityGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetGrantOpportunityGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the GrantOpportunity model
         */
        readonly fields: GrantOpportunityFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for GrantOpportunity.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__GrantOpportunityClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            | $Result.GetResult<
                  Prisma.$OrganizationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        internalSource<T extends GrantOpportunity$internalSourceArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunity$internalSourceArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;
        readinessScores<T extends GrantOpportunity$readinessScoresArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunity$readinessScoresArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ReadinessScorePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        lettersOfIntent<T extends GrantOpportunity$lettersOfIntentArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunity$lettersOfIntentArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$LetterOfIntentPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        proposalDrafts<T extends GrantOpportunity$proposalDraftsArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunity$proposalDraftsArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ProposalDraftPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the GrantOpportunity model
     */
    interface GrantOpportunityFieldRefs {
        readonly id: FieldRef<"GrantOpportunity", "String">;
        readonly organizationId: FieldRef<"GrantOpportunity", "String">;
        readonly funderName: FieldRef<"GrantOpportunity", "String">;
        readonly focusArea: FieldRef<"GrantOpportunity", "String">;
        readonly deadline: FieldRef<"GrantOpportunity", "DateTime">;
        readonly amountUsd: FieldRef<"GrantOpportunity", "Decimal">;
        readonly eligibility: FieldRef<"GrantOpportunity", "String">;
        readonly attachmentsRequired: FieldRef<"GrantOpportunity", "String">;
        readonly applicationFormat: FieldRef<"GrantOpportunity", "String">;
        readonly funderProfileUrl: FieldRef<"GrantOpportunity", "String">;
        readonly recipGsProfileLink: FieldRef<"GrantOpportunity", "String">;
        readonly source: FieldRef<"GrantOpportunity", "String">;
        readonly internalSourceId: FieldRef<"GrantOpportunity", "String">;
        readonly grantType: FieldRef<"GrantOpportunity", "String">;
        readonly createdAt: FieldRef<"GrantOpportunity", "DateTime">;
    }

    // Custom InputTypes
    /**
     * GrantOpportunity findUnique
     */
    export type GrantOpportunityFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter, which GrantOpportunity to fetch.
         */
        where: GrantOpportunityWhereUniqueInput;
    };

    /**
     * GrantOpportunity findUniqueOrThrow
     */
    export type GrantOpportunityFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter, which GrantOpportunity to fetch.
         */
        where: GrantOpportunityWhereUniqueInput;
    };

    /**
     * GrantOpportunity findFirst
     */
    export type GrantOpportunityFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter, which GrantOpportunity to fetch.
         */
        where?: GrantOpportunityWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of GrantOpportunities to fetch.
         */
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for GrantOpportunities.
         */
        cursor?: GrantOpportunityWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` GrantOpportunities from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` GrantOpportunities.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of GrantOpportunities.
         */
        distinct?: GrantOpportunityScalarFieldEnum | GrantOpportunityScalarFieldEnum[];
    };

    /**
     * GrantOpportunity findFirstOrThrow
     */
    export type GrantOpportunityFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter, which GrantOpportunity to fetch.
         */
        where?: GrantOpportunityWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of GrantOpportunities to fetch.
         */
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for GrantOpportunities.
         */
        cursor?: GrantOpportunityWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` GrantOpportunities from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` GrantOpportunities.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of GrantOpportunities.
         */
        distinct?: GrantOpportunityScalarFieldEnum | GrantOpportunityScalarFieldEnum[];
    };

    /**
     * GrantOpportunity findMany
     */
    export type GrantOpportunityFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter, which GrantOpportunities to fetch.
         */
        where?: GrantOpportunityWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of GrantOpportunities to fetch.
         */
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing GrantOpportunities.
         */
        cursor?: GrantOpportunityWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` GrantOpportunities from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` GrantOpportunities.
         */
        skip?: number;
        distinct?: GrantOpportunityScalarFieldEnum | GrantOpportunityScalarFieldEnum[];
    };

    /**
     * GrantOpportunity create
     */
    export type GrantOpportunityCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * The data needed to create a GrantOpportunity.
         */
        data: XOR<GrantOpportunityCreateInput, GrantOpportunityUncheckedCreateInput>;
    };

    /**
     * GrantOpportunity createMany
     */
    export type GrantOpportunityCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many GrantOpportunities.
         */
        data: GrantOpportunityCreateManyInput | GrantOpportunityCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * GrantOpportunity createManyAndReturn
     */
    export type GrantOpportunityCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * The data used to create many GrantOpportunities.
         */
        data: GrantOpportunityCreateManyInput | GrantOpportunityCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * GrantOpportunity update
     */
    export type GrantOpportunityUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * The data needed to update a GrantOpportunity.
         */
        data: XOR<GrantOpportunityUpdateInput, GrantOpportunityUncheckedUpdateInput>;
        /**
         * Choose, which GrantOpportunity to update.
         */
        where: GrantOpportunityWhereUniqueInput;
    };

    /**
     * GrantOpportunity updateMany
     */
    export type GrantOpportunityUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update GrantOpportunities.
         */
        data: XOR<
            GrantOpportunityUpdateManyMutationInput,
            GrantOpportunityUncheckedUpdateManyInput
        >;
        /**
         * Filter which GrantOpportunities to update
         */
        where?: GrantOpportunityWhereInput;
        /**
         * Limit how many GrantOpportunities to update.
         */
        limit?: number;
    };

    /**
     * GrantOpportunity updateManyAndReturn
     */
    export type GrantOpportunityUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * The data used to update GrantOpportunities.
         */
        data: XOR<
            GrantOpportunityUpdateManyMutationInput,
            GrantOpportunityUncheckedUpdateManyInput
        >;
        /**
         * Filter which GrantOpportunities to update
         */
        where?: GrantOpportunityWhereInput;
        /**
         * Limit how many GrantOpportunities to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * GrantOpportunity upsert
     */
    export type GrantOpportunityUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * The filter to search for the GrantOpportunity to update in case it exists.
         */
        where: GrantOpportunityWhereUniqueInput;
        /**
         * In case the GrantOpportunity found by the `where` argument doesn't exist, create a new GrantOpportunity with this data.
         */
        create: XOR<GrantOpportunityCreateInput, GrantOpportunityUncheckedCreateInput>;
        /**
         * In case the GrantOpportunity was found with the provided `where` argument, update it with this data.
         */
        update: XOR<GrantOpportunityUpdateInput, GrantOpportunityUncheckedUpdateInput>;
    };

    /**
     * GrantOpportunity delete
     */
    export type GrantOpportunityDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        /**
         * Filter which GrantOpportunity to delete.
         */
        where: GrantOpportunityWhereUniqueInput;
    };

    /**
     * GrantOpportunity deleteMany
     */
    export type GrantOpportunityDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which GrantOpportunities to delete
         */
        where?: GrantOpportunityWhereInput;
        /**
         * Limit how many GrantOpportunities to delete.
         */
        limit?: number;
    };

    /**
     * GrantOpportunity.internalSource
     */
    export type GrantOpportunity$internalSourceArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        where?: InternalGrantSourceWhereInput;
    };

    /**
     * GrantOpportunity.readinessScores
     */
    export type GrantOpportunity$readinessScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        where?: ReadinessScoreWhereInput;
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        cursor?: ReadinessScoreWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ReadinessScoreScalarFieldEnum | ReadinessScoreScalarFieldEnum[];
    };

    /**
     * GrantOpportunity.lettersOfIntent
     */
    export type GrantOpportunity$lettersOfIntentArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        where?: LetterOfIntentWhereInput;
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        cursor?: LetterOfIntentWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: LetterOfIntentScalarFieldEnum | LetterOfIntentScalarFieldEnum[];
    };

    /**
     * GrantOpportunity.proposalDrafts
     */
    export type GrantOpportunity$proposalDraftsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        where?: ProposalDraftWhereInput;
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        cursor?: ProposalDraftWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ProposalDraftScalarFieldEnum | ProposalDraftScalarFieldEnum[];
    };

    /**
     * GrantOpportunity without action
     */
    export type GrantOpportunityDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
    };

    /**
     * Model InternalGrantSource
     */

    export type AggregateInternalGrantSource = {
        _count: InternalGrantSourceCountAggregateOutputType | null;
        _min: InternalGrantSourceMinAggregateOutputType | null;
        _max: InternalGrantSourceMaxAggregateOutputType | null;
    };

    export type InternalGrantSourceMinAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        opportunityText: string | null;
        opportunityUrl: string | null;
        opportunityPdf: string | null;
        createdAt: Date | null;
    };

    export type InternalGrantSourceMaxAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        opportunityText: string | null;
        opportunityUrl: string | null;
        opportunityPdf: string | null;
        createdAt: Date | null;
    };

    export type InternalGrantSourceCountAggregateOutputType = {
        id: number;
        organizationId: number;
        opportunityText: number;
        opportunityUrl: number;
        opportunityPdf: number;
        createdAt: number;
        _all: number;
    };

    export type InternalGrantSourceMinAggregateInputType = {
        id?: true;
        organizationId?: true;
        opportunityText?: true;
        opportunityUrl?: true;
        opportunityPdf?: true;
        createdAt?: true;
    };

    export type InternalGrantSourceMaxAggregateInputType = {
        id?: true;
        organizationId?: true;
        opportunityText?: true;
        opportunityUrl?: true;
        opportunityPdf?: true;
        createdAt?: true;
    };

    export type InternalGrantSourceCountAggregateInputType = {
        id?: true;
        organizationId?: true;
        opportunityText?: true;
        opportunityUrl?: true;
        opportunityPdf?: true;
        createdAt?: true;
        _all?: true;
    };

    export type InternalGrantSourceAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which InternalGrantSource to aggregate.
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InternalGrantSources to fetch.
         */
        orderBy?:
            | InternalGrantSourceOrderByWithRelationInput
            | InternalGrantSourceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: InternalGrantSourceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InternalGrantSources from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InternalGrantSources.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned InternalGrantSources
         **/
        _count?: true | InternalGrantSourceCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: InternalGrantSourceMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: InternalGrantSourceMaxAggregateInputType;
    };

    export type GetInternalGrantSourceAggregateType<T extends InternalGrantSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalGrantSource]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateInternalGrantSource[P]>
            : GetScalarType<T[P], AggregateInternalGrantSource[P]>;
    };

    export type InternalGrantSourceGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: InternalGrantSourceWhereInput;
        orderBy?:
            | InternalGrantSourceOrderByWithAggregationInput
            | InternalGrantSourceOrderByWithAggregationInput[];
        by: InternalGrantSourceScalarFieldEnum[] | InternalGrantSourceScalarFieldEnum;
        having?: InternalGrantSourceScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: InternalGrantSourceCountAggregateInputType | true;
        _min?: InternalGrantSourceMinAggregateInputType;
        _max?: InternalGrantSourceMaxAggregateInputType;
    };

    export type InternalGrantSourceGroupByOutputType = {
        id: string;
        organizationId: string;
        opportunityText: string | null;
        opportunityUrl: string | null;
        opportunityPdf: string | null;
        createdAt: Date;
        _count: InternalGrantSourceCountAggregateOutputType | null;
        _min: InternalGrantSourceMinAggregateOutputType | null;
        _max: InternalGrantSourceMaxAggregateOutputType | null;
    };

    type GetInternalGrantSourceGroupByPayload<T extends InternalGrantSourceGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<InternalGrantSourceGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof InternalGrantSourceGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], InternalGrantSourceGroupByOutputType[P]>
                        : GetScalarType<T[P], InternalGrantSourceGroupByOutputType[P]>;
                }
            >
        >;

    export type InternalGrantSourceSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            opportunityText?: boolean;
            opportunityUrl?: boolean;
            opportunityPdf?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grantOpportunities?: boolean | InternalGrantSource$grantOpportunitiesArgs<ExtArgs>;
            _count?: boolean | InternalGrantSourceCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["internalGrantSource"]
    >;

    export type InternalGrantSourceSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            opportunityText?: boolean;
            opportunityUrl?: boolean;
            opportunityPdf?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["internalGrantSource"]
    >;

    export type InternalGrantSourceSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            opportunityText?: boolean;
            opportunityUrl?: boolean;
            opportunityPdf?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["internalGrantSource"]
    >;

    export type InternalGrantSourceSelectScalar = {
        id?: boolean;
        organizationId?: boolean;
        opportunityText?: boolean;
        opportunityUrl?: boolean;
        opportunityPdf?: boolean;
        createdAt?: boolean;
    };

    export type InternalGrantSourceOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationId"
        | "opportunityText"
        | "opportunityUrl"
        | "opportunityPdf"
        | "createdAt",
        ExtArgs["result"]["internalGrantSource"]
    >;
    export type InternalGrantSourceInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grantOpportunities?: boolean | InternalGrantSource$grantOpportunitiesArgs<ExtArgs>;
        _count?: boolean | InternalGrantSourceCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type InternalGrantSourceIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    };
    export type InternalGrantSourceIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    };

    export type $InternalGrantSourcePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "InternalGrantSource";
        objects: {
            organization: Prisma.$OrganizationPayload<ExtArgs>;
            grantOpportunities: Prisma.$GrantOpportunityPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationId: string;
                opportunityText: string | null;
                opportunityUrl: string | null;
                opportunityPdf: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["internalGrantSource"]
        >;
        composites: {};
    };

    type InternalGrantSourceGetPayload<
        S extends boolean | null | undefined | InternalGrantSourceDefaultArgs,
    > = $Result.GetResult<Prisma.$InternalGrantSourcePayload, S>;

    type InternalGrantSourceCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<InternalGrantSourceFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: InternalGrantSourceCountAggregateInputType | true;
    };

    export interface InternalGrantSourceDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["InternalGrantSource"];
            meta: { name: "InternalGrantSource" };
        };
        /**
         * Find zero or one InternalGrantSource that matches the filter.
         * @param {InternalGrantSourceFindUniqueArgs} args - Arguments to find a InternalGrantSource
         * @example
         * // Get one InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends InternalGrantSourceFindUniqueArgs>(
            args: SelectSubset<T, InternalGrantSourceFindUniqueArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one InternalGrantSource that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {InternalGrantSourceFindUniqueOrThrowArgs} args - Arguments to find a InternalGrantSource
         * @example
         * // Get one InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends InternalGrantSourceFindUniqueOrThrowArgs>(
            args: SelectSubset<T, InternalGrantSourceFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first InternalGrantSource that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceFindFirstArgs} args - Arguments to find a InternalGrantSource
         * @example
         * // Get one InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends InternalGrantSourceFindFirstArgs>(
            args?: SelectSubset<T, InternalGrantSourceFindFirstArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first InternalGrantSource that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceFindFirstOrThrowArgs} args - Arguments to find a InternalGrantSource
         * @example
         * // Get one InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends InternalGrantSourceFindFirstOrThrowArgs>(
            args?: SelectSubset<T, InternalGrantSourceFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more InternalGrantSources that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all InternalGrantSources
         * const internalGrantSources = await prisma.internalGrantSource.findMany()
         *
         * // Get first 10 InternalGrantSources
         * const internalGrantSources = await prisma.internalGrantSource.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const internalGrantSourceWithIdOnly = await prisma.internalGrantSource.findMany({ select: { id: true } })
         *
         */
        findMany<T extends InternalGrantSourceFindManyArgs>(
            args?: SelectSubset<T, InternalGrantSourceFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a InternalGrantSource.
         * @param {InternalGrantSourceCreateArgs} args - Arguments to create a InternalGrantSource.
         * @example
         * // Create one InternalGrantSource
         * const InternalGrantSource = await prisma.internalGrantSource.create({
         *   data: {
         *     // ... data to create a InternalGrantSource
         *   }
         * })
         *
         */
        create<T extends InternalGrantSourceCreateArgs>(
            args: SelectSubset<T, InternalGrantSourceCreateArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many InternalGrantSources.
         * @param {InternalGrantSourceCreateManyArgs} args - Arguments to create many InternalGrantSources.
         * @example
         * // Create many InternalGrantSources
         * const internalGrantSource = await prisma.internalGrantSource.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends InternalGrantSourceCreateManyArgs>(
            args?: SelectSubset<T, InternalGrantSourceCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many InternalGrantSources and returns the data saved in the database.
         * @param {InternalGrantSourceCreateManyAndReturnArgs} args - Arguments to create many InternalGrantSources.
         * @example
         * // Create many InternalGrantSources
         * const internalGrantSource = await prisma.internalGrantSource.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many InternalGrantSources and only return the `id`
         * const internalGrantSourceWithIdOnly = await prisma.internalGrantSource.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends InternalGrantSourceCreateManyAndReturnArgs>(
            args?: SelectSubset<T, InternalGrantSourceCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a InternalGrantSource.
         * @param {InternalGrantSourceDeleteArgs} args - Arguments to delete one InternalGrantSource.
         * @example
         * // Delete one InternalGrantSource
         * const InternalGrantSource = await prisma.internalGrantSource.delete({
         *   where: {
         *     // ... filter to delete one InternalGrantSource
         *   }
         * })
         *
         */
        delete<T extends InternalGrantSourceDeleteArgs>(
            args: SelectSubset<T, InternalGrantSourceDeleteArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one InternalGrantSource.
         * @param {InternalGrantSourceUpdateArgs} args - Arguments to update one InternalGrantSource.
         * @example
         * // Update one InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends InternalGrantSourceUpdateArgs>(
            args: SelectSubset<T, InternalGrantSourceUpdateArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more InternalGrantSources.
         * @param {InternalGrantSourceDeleteManyArgs} args - Arguments to filter InternalGrantSources to delete.
         * @example
         * // Delete a few InternalGrantSources
         * const { count } = await prisma.internalGrantSource.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends InternalGrantSourceDeleteManyArgs>(
            args?: SelectSubset<T, InternalGrantSourceDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more InternalGrantSources.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many InternalGrantSources
         * const internalGrantSource = await prisma.internalGrantSource.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends InternalGrantSourceUpdateManyArgs>(
            args: SelectSubset<T, InternalGrantSourceUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more InternalGrantSources and returns the data updated in the database.
         * @param {InternalGrantSourceUpdateManyAndReturnArgs} args - Arguments to update many InternalGrantSources.
         * @example
         * // Update many InternalGrantSources
         * const internalGrantSource = await prisma.internalGrantSource.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more InternalGrantSources and only return the `id`
         * const internalGrantSourceWithIdOnly = await prisma.internalGrantSource.updateManyAndReturn({
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
        updateManyAndReturn<T extends InternalGrantSourceUpdateManyAndReturnArgs>(
            args: SelectSubset<T, InternalGrantSourceUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one InternalGrantSource.
         * @param {InternalGrantSourceUpsertArgs} args - Arguments to update or create a InternalGrantSource.
         * @example
         * // Update or create a InternalGrantSource
         * const internalGrantSource = await prisma.internalGrantSource.upsert({
         *   create: {
         *     // ... data to create a InternalGrantSource
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the InternalGrantSource we want to update
         *   }
         * })
         */
        upsert<T extends InternalGrantSourceUpsertArgs>(
            args: SelectSubset<T, InternalGrantSourceUpsertArgs<ExtArgs>>,
        ): Prisma__InternalGrantSourceClient<
            $Result.GetResult<
                Prisma.$InternalGrantSourcePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of InternalGrantSources.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceCountArgs} args - Arguments to filter InternalGrantSources to count.
         * @example
         * // Count the number of InternalGrantSources
         * const count = await prisma.internalGrantSource.count({
         *   where: {
         *     // ... the filter for the InternalGrantSources we want to count
         *   }
         * })
         **/
        count<T extends InternalGrantSourceCountArgs>(
            args?: Subset<T, InternalGrantSourceCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], InternalGrantSourceCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a InternalGrantSource.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends InternalGrantSourceAggregateArgs>(
            args: Subset<T, InternalGrantSourceAggregateArgs>,
        ): Prisma.PrismaPromise<GetInternalGrantSourceAggregateType<T>>;

        /**
         * Group by InternalGrantSource.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {InternalGrantSourceGroupByArgs} args - Group by arguments.
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
            T extends InternalGrantSourceGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: InternalGrantSourceGroupByArgs["orderBy"] }
                : { orderBy?: InternalGrantSourceGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, InternalGrantSourceGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetInternalGrantSourceGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the InternalGrantSource model
         */
        readonly fields: InternalGrantSourceFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for InternalGrantSource.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__InternalGrantSourceClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            | $Result.GetResult<
                  Prisma.$OrganizationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        grantOpportunities<T extends InternalGrantSource$grantOpportunitiesArgs<ExtArgs> = {}>(
            args?: Subset<T, InternalGrantSource$grantOpportunitiesArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$GrantOpportunityPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the InternalGrantSource model
     */
    interface InternalGrantSourceFieldRefs {
        readonly id: FieldRef<"InternalGrantSource", "String">;
        readonly organizationId: FieldRef<"InternalGrantSource", "String">;
        readonly opportunityText: FieldRef<"InternalGrantSource", "String">;
        readonly opportunityUrl: FieldRef<"InternalGrantSource", "String">;
        readonly opportunityPdf: FieldRef<"InternalGrantSource", "String">;
        readonly createdAt: FieldRef<"InternalGrantSource", "DateTime">;
    }

    // Custom InputTypes
    /**
     * InternalGrantSource findUnique
     */
    export type InternalGrantSourceFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter, which InternalGrantSource to fetch.
         */
        where: InternalGrantSourceWhereUniqueInput;
    };

    /**
     * InternalGrantSource findUniqueOrThrow
     */
    export type InternalGrantSourceFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter, which InternalGrantSource to fetch.
         */
        where: InternalGrantSourceWhereUniqueInput;
    };

    /**
     * InternalGrantSource findFirst
     */
    export type InternalGrantSourceFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter, which InternalGrantSource to fetch.
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InternalGrantSources to fetch.
         */
        orderBy?:
            | InternalGrantSourceOrderByWithRelationInput
            | InternalGrantSourceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for InternalGrantSources.
         */
        cursor?: InternalGrantSourceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InternalGrantSources from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InternalGrantSources.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of InternalGrantSources.
         */
        distinct?: InternalGrantSourceScalarFieldEnum | InternalGrantSourceScalarFieldEnum[];
    };

    /**
     * InternalGrantSource findFirstOrThrow
     */
    export type InternalGrantSourceFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter, which InternalGrantSource to fetch.
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InternalGrantSources to fetch.
         */
        orderBy?:
            | InternalGrantSourceOrderByWithRelationInput
            | InternalGrantSourceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for InternalGrantSources.
         */
        cursor?: InternalGrantSourceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InternalGrantSources from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InternalGrantSources.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of InternalGrantSources.
         */
        distinct?: InternalGrantSourceScalarFieldEnum | InternalGrantSourceScalarFieldEnum[];
    };

    /**
     * InternalGrantSource findMany
     */
    export type InternalGrantSourceFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter, which InternalGrantSources to fetch.
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of InternalGrantSources to fetch.
         */
        orderBy?:
            | InternalGrantSourceOrderByWithRelationInput
            | InternalGrantSourceOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing InternalGrantSources.
         */
        cursor?: InternalGrantSourceWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` InternalGrantSources from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` InternalGrantSources.
         */
        skip?: number;
        distinct?: InternalGrantSourceScalarFieldEnum | InternalGrantSourceScalarFieldEnum[];
    };

    /**
     * InternalGrantSource create
     */
    export type InternalGrantSourceCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * The data needed to create a InternalGrantSource.
         */
        data: XOR<InternalGrantSourceCreateInput, InternalGrantSourceUncheckedCreateInput>;
    };

    /**
     * InternalGrantSource createMany
     */
    export type InternalGrantSourceCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many InternalGrantSources.
         */
        data: InternalGrantSourceCreateManyInput | InternalGrantSourceCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * InternalGrantSource createManyAndReturn
     */
    export type InternalGrantSourceCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * The data used to create many InternalGrantSources.
         */
        data: InternalGrantSourceCreateManyInput | InternalGrantSourceCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * InternalGrantSource update
     */
    export type InternalGrantSourceUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * The data needed to update a InternalGrantSource.
         */
        data: XOR<InternalGrantSourceUpdateInput, InternalGrantSourceUncheckedUpdateInput>;
        /**
         * Choose, which InternalGrantSource to update.
         */
        where: InternalGrantSourceWhereUniqueInput;
    };

    /**
     * InternalGrantSource updateMany
     */
    export type InternalGrantSourceUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update InternalGrantSources.
         */
        data: XOR<
            InternalGrantSourceUpdateManyMutationInput,
            InternalGrantSourceUncheckedUpdateManyInput
        >;
        /**
         * Filter which InternalGrantSources to update
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * Limit how many InternalGrantSources to update.
         */
        limit?: number;
    };

    /**
     * InternalGrantSource updateManyAndReturn
     */
    export type InternalGrantSourceUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * The data used to update InternalGrantSources.
         */
        data: XOR<
            InternalGrantSourceUpdateManyMutationInput,
            InternalGrantSourceUncheckedUpdateManyInput
        >;
        /**
         * Filter which InternalGrantSources to update
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * Limit how many InternalGrantSources to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * InternalGrantSource upsert
     */
    export type InternalGrantSourceUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * The filter to search for the InternalGrantSource to update in case it exists.
         */
        where: InternalGrantSourceWhereUniqueInput;
        /**
         * In case the InternalGrantSource found by the `where` argument doesn't exist, create a new InternalGrantSource with this data.
         */
        create: XOR<InternalGrantSourceCreateInput, InternalGrantSourceUncheckedCreateInput>;
        /**
         * In case the InternalGrantSource was found with the provided `where` argument, update it with this data.
         */
        update: XOR<InternalGrantSourceUpdateInput, InternalGrantSourceUncheckedUpdateInput>;
    };

    /**
     * InternalGrantSource delete
     */
    export type InternalGrantSourceDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        /**
         * Filter which InternalGrantSource to delete.
         */
        where: InternalGrantSourceWhereUniqueInput;
    };

    /**
     * InternalGrantSource deleteMany
     */
    export type InternalGrantSourceDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which InternalGrantSources to delete
         */
        where?: InternalGrantSourceWhereInput;
        /**
         * Limit how many InternalGrantSources to delete.
         */
        limit?: number;
    };

    /**
     * InternalGrantSource.grantOpportunities
     */
    export type InternalGrantSource$grantOpportunitiesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        where?: GrantOpportunityWhereInput;
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        cursor?: GrantOpportunityWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: GrantOpportunityScalarFieldEnum | GrantOpportunityScalarFieldEnum[];
    };

    /**
     * InternalGrantSource without action
     */
    export type InternalGrantSourceDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
    };

    /**
     * Model LetterOfIntent
     */

    export type AggregateLetterOfIntent = {
        _count: LetterOfIntentCountAggregateOutputType | null;
        _avg: LetterOfIntentAvgAggregateOutputType | null;
        _sum: LetterOfIntentSumAggregateOutputType | null;
        _min: LetterOfIntentMinAggregateOutputType | null;
        _max: LetterOfIntentMaxAggregateOutputType | null;
    };

    export type LetterOfIntentAvgAggregateOutputType = {
        fundingRequest: Decimal | null;
    };

    export type LetterOfIntentSumAggregateOutputType = {
        fundingRequest: Decimal | null;
    };

    export type LetterOfIntentMinAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        introduction: string | null;
        organizationalSummary: string | null;
        projectOverview: string | null;
        fundingRequest: Decimal | null;
        closingStatement: string | null;
        createdAt: Date | null;
    };

    export type LetterOfIntentMaxAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        introduction: string | null;
        organizationalSummary: string | null;
        projectOverview: string | null;
        fundingRequest: Decimal | null;
        closingStatement: string | null;
        createdAt: Date | null;
    };

    export type LetterOfIntentCountAggregateOutputType = {
        id: number;
        organizationId: number;
        grantId: number;
        introduction: number;
        organizationalSummary: number;
        projectOverview: number;
        fundingRequest: number;
        closingStatement: number;
        createdAt: number;
        _all: number;
    };

    export type LetterOfIntentAvgAggregateInputType = {
        fundingRequest?: true;
    };

    export type LetterOfIntentSumAggregateInputType = {
        fundingRequest?: true;
    };

    export type LetterOfIntentMinAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        introduction?: true;
        organizationalSummary?: true;
        projectOverview?: true;
        fundingRequest?: true;
        closingStatement?: true;
        createdAt?: true;
    };

    export type LetterOfIntentMaxAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        introduction?: true;
        organizationalSummary?: true;
        projectOverview?: true;
        fundingRequest?: true;
        closingStatement?: true;
        createdAt?: true;
    };

    export type LetterOfIntentCountAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        introduction?: true;
        organizationalSummary?: true;
        projectOverview?: true;
        fundingRequest?: true;
        closingStatement?: true;
        createdAt?: true;
        _all?: true;
    };

    export type LetterOfIntentAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which LetterOfIntent to aggregate.
         */
        where?: LetterOfIntentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of LetterOfIntents to fetch.
         */
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: LetterOfIntentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` LetterOfIntents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` LetterOfIntents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned LetterOfIntents
         **/
        _count?: true | LetterOfIntentCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: LetterOfIntentAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: LetterOfIntentSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: LetterOfIntentMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: LetterOfIntentMaxAggregateInputType;
    };

    export type GetLetterOfIntentAggregateType<T extends LetterOfIntentAggregateArgs> = {
        [P in keyof T & keyof AggregateLetterOfIntent]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateLetterOfIntent[P]>
            : GetScalarType<T[P], AggregateLetterOfIntent[P]>;
    };

    export type LetterOfIntentGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: LetterOfIntentWhereInput;
        orderBy?:
            | LetterOfIntentOrderByWithAggregationInput
            | LetterOfIntentOrderByWithAggregationInput[];
        by: LetterOfIntentScalarFieldEnum[] | LetterOfIntentScalarFieldEnum;
        having?: LetterOfIntentScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: LetterOfIntentCountAggregateInputType | true;
        _avg?: LetterOfIntentAvgAggregateInputType;
        _sum?: LetterOfIntentSumAggregateInputType;
        _min?: LetterOfIntentMinAggregateInputType;
        _max?: LetterOfIntentMaxAggregateInputType;
    };

    export type LetterOfIntentGroupByOutputType = {
        id: string;
        organizationId: string;
        grantId: string;
        introduction: string | null;
        organizationalSummary: string | null;
        projectOverview: string | null;
        fundingRequest: Decimal | null;
        closingStatement: string | null;
        createdAt: Date;
        _count: LetterOfIntentCountAggregateOutputType | null;
        _avg: LetterOfIntentAvgAggregateOutputType | null;
        _sum: LetterOfIntentSumAggregateOutputType | null;
        _min: LetterOfIntentMinAggregateOutputType | null;
        _max: LetterOfIntentMaxAggregateOutputType | null;
    };

    type GetLetterOfIntentGroupByPayload<T extends LetterOfIntentGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<LetterOfIntentGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof LetterOfIntentGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], LetterOfIntentGroupByOutputType[P]>
                        : GetScalarType<T[P], LetterOfIntentGroupByOutputType[P]>;
                }
            >
        >;

    export type LetterOfIntentSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            introduction?: boolean;
            organizationalSummary?: boolean;
            projectOverview?: boolean;
            fundingRequest?: boolean;
            closingStatement?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["letterOfIntent"]
    >;

    export type LetterOfIntentSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            introduction?: boolean;
            organizationalSummary?: boolean;
            projectOverview?: boolean;
            fundingRequest?: boolean;
            closingStatement?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["letterOfIntent"]
    >;

    export type LetterOfIntentSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            introduction?: boolean;
            organizationalSummary?: boolean;
            projectOverview?: boolean;
            fundingRequest?: boolean;
            closingStatement?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["letterOfIntent"]
    >;

    export type LetterOfIntentSelectScalar = {
        id?: boolean;
        organizationId?: boolean;
        grantId?: boolean;
        introduction?: boolean;
        organizationalSummary?: boolean;
        projectOverview?: boolean;
        fundingRequest?: boolean;
        closingStatement?: boolean;
        createdAt?: boolean;
    };

    export type LetterOfIntentOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationId"
        | "grantId"
        | "introduction"
        | "organizationalSummary"
        | "projectOverview"
        | "fundingRequest"
        | "closingStatement"
        | "createdAt",
        ExtArgs["result"]["letterOfIntent"]
    >;
    export type LetterOfIntentInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type LetterOfIntentIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type LetterOfIntentIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };

    export type $LetterOfIntentPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "LetterOfIntent";
        objects: {
            organization: Prisma.$OrganizationPayload<ExtArgs>;
            grant: Prisma.$GrantOpportunityPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationId: string;
                grantId: string;
                introduction: string | null;
                organizationalSummary: string | null;
                projectOverview: string | null;
                fundingRequest: Prisma.Decimal | null;
                closingStatement: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["letterOfIntent"]
        >;
        composites: {};
    };

    type LetterOfIntentGetPayload<
        S extends boolean | null | undefined | LetterOfIntentDefaultArgs,
    > = $Result.GetResult<Prisma.$LetterOfIntentPayload, S>;

    type LetterOfIntentCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<LetterOfIntentFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: LetterOfIntentCountAggregateInputType | true;
    };

    export interface LetterOfIntentDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["LetterOfIntent"];
            meta: { name: "LetterOfIntent" };
        };
        /**
         * Find zero or one LetterOfIntent that matches the filter.
         * @param {LetterOfIntentFindUniqueArgs} args - Arguments to find a LetterOfIntent
         * @example
         * // Get one LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends LetterOfIntentFindUniqueArgs>(
            args: SelectSubset<T, LetterOfIntentFindUniqueArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one LetterOfIntent that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {LetterOfIntentFindUniqueOrThrowArgs} args - Arguments to find a LetterOfIntent
         * @example
         * // Get one LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends LetterOfIntentFindUniqueOrThrowArgs>(
            args: SelectSubset<T, LetterOfIntentFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first LetterOfIntent that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentFindFirstArgs} args - Arguments to find a LetterOfIntent
         * @example
         * // Get one LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends LetterOfIntentFindFirstArgs>(
            args?: SelectSubset<T, LetterOfIntentFindFirstArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first LetterOfIntent that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentFindFirstOrThrowArgs} args - Arguments to find a LetterOfIntent
         * @example
         * // Get one LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends LetterOfIntentFindFirstOrThrowArgs>(
            args?: SelectSubset<T, LetterOfIntentFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more LetterOfIntents that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all LetterOfIntents
         * const letterOfIntents = await prisma.letterOfIntent.findMany()
         *
         * // Get first 10 LetterOfIntents
         * const letterOfIntents = await prisma.letterOfIntent.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const letterOfIntentWithIdOnly = await prisma.letterOfIntent.findMany({ select: { id: true } })
         *
         */
        findMany<T extends LetterOfIntentFindManyArgs>(
            args?: SelectSubset<T, LetterOfIntentFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a LetterOfIntent.
         * @param {LetterOfIntentCreateArgs} args - Arguments to create a LetterOfIntent.
         * @example
         * // Create one LetterOfIntent
         * const LetterOfIntent = await prisma.letterOfIntent.create({
         *   data: {
         *     // ... data to create a LetterOfIntent
         *   }
         * })
         *
         */
        create<T extends LetterOfIntentCreateArgs>(
            args: SelectSubset<T, LetterOfIntentCreateArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many LetterOfIntents.
         * @param {LetterOfIntentCreateManyArgs} args - Arguments to create many LetterOfIntents.
         * @example
         * // Create many LetterOfIntents
         * const letterOfIntent = await prisma.letterOfIntent.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends LetterOfIntentCreateManyArgs>(
            args?: SelectSubset<T, LetterOfIntentCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many LetterOfIntents and returns the data saved in the database.
         * @param {LetterOfIntentCreateManyAndReturnArgs} args - Arguments to create many LetterOfIntents.
         * @example
         * // Create many LetterOfIntents
         * const letterOfIntent = await prisma.letterOfIntent.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many LetterOfIntents and only return the `id`
         * const letterOfIntentWithIdOnly = await prisma.letterOfIntent.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends LetterOfIntentCreateManyAndReturnArgs>(
            args?: SelectSubset<T, LetterOfIntentCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a LetterOfIntent.
         * @param {LetterOfIntentDeleteArgs} args - Arguments to delete one LetterOfIntent.
         * @example
         * // Delete one LetterOfIntent
         * const LetterOfIntent = await prisma.letterOfIntent.delete({
         *   where: {
         *     // ... filter to delete one LetterOfIntent
         *   }
         * })
         *
         */
        delete<T extends LetterOfIntentDeleteArgs>(
            args: SelectSubset<T, LetterOfIntentDeleteArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one LetterOfIntent.
         * @param {LetterOfIntentUpdateArgs} args - Arguments to update one LetterOfIntent.
         * @example
         * // Update one LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends LetterOfIntentUpdateArgs>(
            args: SelectSubset<T, LetterOfIntentUpdateArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more LetterOfIntents.
         * @param {LetterOfIntentDeleteManyArgs} args - Arguments to filter LetterOfIntents to delete.
         * @example
         * // Delete a few LetterOfIntents
         * const { count } = await prisma.letterOfIntent.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends LetterOfIntentDeleteManyArgs>(
            args?: SelectSubset<T, LetterOfIntentDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more LetterOfIntents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many LetterOfIntents
         * const letterOfIntent = await prisma.letterOfIntent.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends LetterOfIntentUpdateManyArgs>(
            args: SelectSubset<T, LetterOfIntentUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more LetterOfIntents and returns the data updated in the database.
         * @param {LetterOfIntentUpdateManyAndReturnArgs} args - Arguments to update many LetterOfIntents.
         * @example
         * // Update many LetterOfIntents
         * const letterOfIntent = await prisma.letterOfIntent.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more LetterOfIntents and only return the `id`
         * const letterOfIntentWithIdOnly = await prisma.letterOfIntent.updateManyAndReturn({
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
        updateManyAndReturn<T extends LetterOfIntentUpdateManyAndReturnArgs>(
            args: SelectSubset<T, LetterOfIntentUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one LetterOfIntent.
         * @param {LetterOfIntentUpsertArgs} args - Arguments to update or create a LetterOfIntent.
         * @example
         * // Update or create a LetterOfIntent
         * const letterOfIntent = await prisma.letterOfIntent.upsert({
         *   create: {
         *     // ... data to create a LetterOfIntent
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the LetterOfIntent we want to update
         *   }
         * })
         */
        upsert<T extends LetterOfIntentUpsertArgs>(
            args: SelectSubset<T, LetterOfIntentUpsertArgs<ExtArgs>>,
        ): Prisma__LetterOfIntentClient<
            $Result.GetResult<
                Prisma.$LetterOfIntentPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of LetterOfIntents.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentCountArgs} args - Arguments to filter LetterOfIntents to count.
         * @example
         * // Count the number of LetterOfIntents
         * const count = await prisma.letterOfIntent.count({
         *   where: {
         *     // ... the filter for the LetterOfIntents we want to count
         *   }
         * })
         **/
        count<T extends LetterOfIntentCountArgs>(
            args?: Subset<T, LetterOfIntentCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], LetterOfIntentCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a LetterOfIntent.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends LetterOfIntentAggregateArgs>(
            args: Subset<T, LetterOfIntentAggregateArgs>,
        ): Prisma.PrismaPromise<GetLetterOfIntentAggregateType<T>>;

        /**
         * Group by LetterOfIntent.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {LetterOfIntentGroupByArgs} args - Group by arguments.
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
            T extends LetterOfIntentGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: LetterOfIntentGroupByArgs["orderBy"] }
                : { orderBy?: LetterOfIntentGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, LetterOfIntentGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetLetterOfIntentGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the LetterOfIntent model
         */
        readonly fields: LetterOfIntentFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for LetterOfIntent.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__LetterOfIntentClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            | $Result.GetResult<
                  Prisma.$OrganizationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        grant<T extends GrantOpportunityDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunityDefaultArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            | $Result.GetResult<
                  Prisma.$GrantOpportunityPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the LetterOfIntent model
     */
    interface LetterOfIntentFieldRefs {
        readonly id: FieldRef<"LetterOfIntent", "String">;
        readonly organizationId: FieldRef<"LetterOfIntent", "String">;
        readonly grantId: FieldRef<"LetterOfIntent", "String">;
        readonly introduction: FieldRef<"LetterOfIntent", "String">;
        readonly organizationalSummary: FieldRef<"LetterOfIntent", "String">;
        readonly projectOverview: FieldRef<"LetterOfIntent", "String">;
        readonly fundingRequest: FieldRef<"LetterOfIntent", "Decimal">;
        readonly closingStatement: FieldRef<"LetterOfIntent", "String">;
        readonly createdAt: FieldRef<"LetterOfIntent", "DateTime">;
    }

    // Custom InputTypes
    /**
     * LetterOfIntent findUnique
     */
    export type LetterOfIntentFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter, which LetterOfIntent to fetch.
         */
        where: LetterOfIntentWhereUniqueInput;
    };

    /**
     * LetterOfIntent findUniqueOrThrow
     */
    export type LetterOfIntentFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter, which LetterOfIntent to fetch.
         */
        where: LetterOfIntentWhereUniqueInput;
    };

    /**
     * LetterOfIntent findFirst
     */
    export type LetterOfIntentFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter, which LetterOfIntent to fetch.
         */
        where?: LetterOfIntentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of LetterOfIntents to fetch.
         */
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for LetterOfIntents.
         */
        cursor?: LetterOfIntentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` LetterOfIntents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` LetterOfIntents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of LetterOfIntents.
         */
        distinct?: LetterOfIntentScalarFieldEnum | LetterOfIntentScalarFieldEnum[];
    };

    /**
     * LetterOfIntent findFirstOrThrow
     */
    export type LetterOfIntentFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter, which LetterOfIntent to fetch.
         */
        where?: LetterOfIntentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of LetterOfIntents to fetch.
         */
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for LetterOfIntents.
         */
        cursor?: LetterOfIntentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` LetterOfIntents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` LetterOfIntents.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of LetterOfIntents.
         */
        distinct?: LetterOfIntentScalarFieldEnum | LetterOfIntentScalarFieldEnum[];
    };

    /**
     * LetterOfIntent findMany
     */
    export type LetterOfIntentFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter, which LetterOfIntents to fetch.
         */
        where?: LetterOfIntentWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of LetterOfIntents to fetch.
         */
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing LetterOfIntents.
         */
        cursor?: LetterOfIntentWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` LetterOfIntents from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` LetterOfIntents.
         */
        skip?: number;
        distinct?: LetterOfIntentScalarFieldEnum | LetterOfIntentScalarFieldEnum[];
    };

    /**
     * LetterOfIntent create
     */
    export type LetterOfIntentCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * The data needed to create a LetterOfIntent.
         */
        data: XOR<LetterOfIntentCreateInput, LetterOfIntentUncheckedCreateInput>;
    };

    /**
     * LetterOfIntent createMany
     */
    export type LetterOfIntentCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many LetterOfIntents.
         */
        data: LetterOfIntentCreateManyInput | LetterOfIntentCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * LetterOfIntent createManyAndReturn
     */
    export type LetterOfIntentCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * The data used to create many LetterOfIntents.
         */
        data: LetterOfIntentCreateManyInput | LetterOfIntentCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * LetterOfIntent update
     */
    export type LetterOfIntentUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * The data needed to update a LetterOfIntent.
         */
        data: XOR<LetterOfIntentUpdateInput, LetterOfIntentUncheckedUpdateInput>;
        /**
         * Choose, which LetterOfIntent to update.
         */
        where: LetterOfIntentWhereUniqueInput;
    };

    /**
     * LetterOfIntent updateMany
     */
    export type LetterOfIntentUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update LetterOfIntents.
         */
        data: XOR<LetterOfIntentUpdateManyMutationInput, LetterOfIntentUncheckedUpdateManyInput>;
        /**
         * Filter which LetterOfIntents to update
         */
        where?: LetterOfIntentWhereInput;
        /**
         * Limit how many LetterOfIntents to update.
         */
        limit?: number;
    };

    /**
     * LetterOfIntent updateManyAndReturn
     */
    export type LetterOfIntentUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * The data used to update LetterOfIntents.
         */
        data: XOR<LetterOfIntentUpdateManyMutationInput, LetterOfIntentUncheckedUpdateManyInput>;
        /**
         * Filter which LetterOfIntents to update
         */
        where?: LetterOfIntentWhereInput;
        /**
         * Limit how many LetterOfIntents to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * LetterOfIntent upsert
     */
    export type LetterOfIntentUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * The filter to search for the LetterOfIntent to update in case it exists.
         */
        where: LetterOfIntentWhereUniqueInput;
        /**
         * In case the LetterOfIntent found by the `where` argument doesn't exist, create a new LetterOfIntent with this data.
         */
        create: XOR<LetterOfIntentCreateInput, LetterOfIntentUncheckedCreateInput>;
        /**
         * In case the LetterOfIntent was found with the provided `where` argument, update it with this data.
         */
        update: XOR<LetterOfIntentUpdateInput, LetterOfIntentUncheckedUpdateInput>;
    };

    /**
     * LetterOfIntent delete
     */
    export type LetterOfIntentDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        /**
         * Filter which LetterOfIntent to delete.
         */
        where: LetterOfIntentWhereUniqueInput;
    };

    /**
     * LetterOfIntent deleteMany
     */
    export type LetterOfIntentDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which LetterOfIntents to delete
         */
        where?: LetterOfIntentWhereInput;
        /**
         * Limit how many LetterOfIntents to delete.
         */
        limit?: number;
    };

    /**
     * LetterOfIntent without action
     */
    export type LetterOfIntentDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
    };

    /**
     * Model Organization
     */

    export type AggregateOrganization = {
        _count: OrganizationCountAggregateOutputType | null;
        _avg: OrganizationAvgAggregateOutputType | null;
        _sum: OrganizationSumAggregateOutputType | null;
        _min: OrganizationMinAggregateOutputType | null;
        _max: OrganizationMaxAggregateOutputType | null;
    };

    export type OrganizationAvgAggregateOutputType = {
        noOfGrants: number | null;
    };

    export type OrganizationSumAggregateOutputType = {
        noOfGrants: number | null;
    };

    export type OrganizationMinAggregateOutputType = {
        id: string | null;
        organizationName: string | null;
        organizationWebsite: string | null;
        missionStatement: string | null;
        refinedMissionStatement: string | null;
        corePurpose: string | null;
        typeOfWork: string | null;
        goalsAspirations: string | null;
        programs: string | null;
        achievements: string | null;
        budget: string | null;
        evaluation: string | null;
        noOfGrants: number | null;
        sharedLink: string | null;
        isGrant: boolean | null;
        createdAt: Date | null;
    };

    export type OrganizationMaxAggregateOutputType = {
        id: string | null;
        organizationName: string | null;
        organizationWebsite: string | null;
        missionStatement: string | null;
        refinedMissionStatement: string | null;
        corePurpose: string | null;
        typeOfWork: string | null;
        goalsAspirations: string | null;
        programs: string | null;
        achievements: string | null;
        budget: string | null;
        evaluation: string | null;
        noOfGrants: number | null;
        sharedLink: string | null;
        isGrant: boolean | null;
        createdAt: Date | null;
    };

    export type OrganizationCountAggregateOutputType = {
        id: number;
        organizationName: number;
        organizationWebsite: number;
        missionStatement: number;
        refinedMissionStatement: number;
        corePurpose: number;
        typeOfWork: number;
        goalsAspirations: number;
        programs: number;
        achievements: number;
        budget: number;
        evaluation: number;
        noOfGrants: number;
        sharedLink: number;
        isGrant: number;
        createdAt: number;
        _all: number;
    };

    export type OrganizationAvgAggregateInputType = {
        noOfGrants?: true;
    };

    export type OrganizationSumAggregateInputType = {
        noOfGrants?: true;
    };

    export type OrganizationMinAggregateInputType = {
        id?: true;
        organizationName?: true;
        organizationWebsite?: true;
        missionStatement?: true;
        refinedMissionStatement?: true;
        corePurpose?: true;
        typeOfWork?: true;
        goalsAspirations?: true;
        programs?: true;
        achievements?: true;
        budget?: true;
        evaluation?: true;
        noOfGrants?: true;
        sharedLink?: true;
        isGrant?: true;
        createdAt?: true;
    };

    export type OrganizationMaxAggregateInputType = {
        id?: true;
        organizationName?: true;
        organizationWebsite?: true;
        missionStatement?: true;
        refinedMissionStatement?: true;
        corePurpose?: true;
        typeOfWork?: true;
        goalsAspirations?: true;
        programs?: true;
        achievements?: true;
        budget?: true;
        evaluation?: true;
        noOfGrants?: true;
        sharedLink?: true;
        isGrant?: true;
        createdAt?: true;
    };

    export type OrganizationCountAggregateInputType = {
        id?: true;
        organizationName?: true;
        organizationWebsite?: true;
        missionStatement?: true;
        refinedMissionStatement?: true;
        corePurpose?: true;
        typeOfWork?: true;
        goalsAspirations?: true;
        programs?: true;
        achievements?: true;
        budget?: true;
        evaluation?: true;
        noOfGrants?: true;
        sharedLink?: true;
        isGrant?: true;
        createdAt?: true;
        _all?: true;
    };

    export type OrganizationAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Organization to aggregate.
         */
        where?: OrganizationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Organizations to fetch.
         */
        orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: OrganizationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Organizations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Organizations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned Organizations
         **/
        _count?: true | OrganizationCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: OrganizationAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: OrganizationSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: OrganizationMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: OrganizationMaxAggregateInputType;
    };

    export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateOrganization[P]>
            : GetScalarType<T[P], AggregateOrganization[P]>;
    };

    export type OrganizationGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: OrganizationWhereInput;
        orderBy?:
            | OrganizationOrderByWithAggregationInput
            | OrganizationOrderByWithAggregationInput[];
        by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
        having?: OrganizationScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: OrganizationCountAggregateInputType | true;
        _avg?: OrganizationAvgAggregateInputType;
        _sum?: OrganizationSumAggregateInputType;
        _min?: OrganizationMinAggregateInputType;
        _max?: OrganizationMaxAggregateInputType;
    };

    export type OrganizationGroupByOutputType = {
        id: string;
        organizationName: string;
        organizationWebsite: string | null;
        missionStatement: string | null;
        refinedMissionStatement: string | null;
        corePurpose: string | null;
        typeOfWork: string | null;
        goalsAspirations: string | null;
        programs: string | null;
        achievements: string | null;
        budget: string | null;
        evaluation: string | null;
        noOfGrants: number | null;
        sharedLink: string | null;
        isGrant: boolean;
        createdAt: Date;
        _count: OrganizationCountAggregateOutputType | null;
        _avg: OrganizationAvgAggregateOutputType | null;
        _sum: OrganizationSumAggregateOutputType | null;
        _min: OrganizationMinAggregateOutputType | null;
        _max: OrganizationMaxAggregateOutputType | null;
    };

    type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<OrganizationGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof OrganizationGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
                    : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
            }
        >
    >;

    export type OrganizationSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationName?: boolean;
            organizationWebsite?: boolean;
            missionStatement?: boolean;
            refinedMissionStatement?: boolean;
            corePurpose?: boolean;
            typeOfWork?: boolean;
            goalsAspirations?: boolean;
            programs?: boolean;
            achievements?: boolean;
            budget?: boolean;
            evaluation?: boolean;
            noOfGrants?: boolean;
            sharedLink?: boolean;
            isGrant?: boolean;
            createdAt?: boolean;
            grantOpportunities?: boolean | Organization$grantOpportunitiesArgs<ExtArgs>;
            internalGrantSources?: boolean | Organization$internalGrantSourcesArgs<ExtArgs>;
            readinessScores?: boolean | Organization$readinessScoresArgs<ExtArgs>;
            lettersOfIntent?: boolean | Organization$lettersOfIntentArgs<ExtArgs>;
            proposalDrafts?: boolean | Organization$proposalDraftsArgs<ExtArgs>;
            _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["organization"]
    >;

    export type OrganizationSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationName?: boolean;
            organizationWebsite?: boolean;
            missionStatement?: boolean;
            refinedMissionStatement?: boolean;
            corePurpose?: boolean;
            typeOfWork?: boolean;
            goalsAspirations?: boolean;
            programs?: boolean;
            achievements?: boolean;
            budget?: boolean;
            evaluation?: boolean;
            noOfGrants?: boolean;
            sharedLink?: boolean;
            isGrant?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["organization"]
    >;

    export type OrganizationSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationName?: boolean;
            organizationWebsite?: boolean;
            missionStatement?: boolean;
            refinedMissionStatement?: boolean;
            corePurpose?: boolean;
            typeOfWork?: boolean;
            goalsAspirations?: boolean;
            programs?: boolean;
            achievements?: boolean;
            budget?: boolean;
            evaluation?: boolean;
            noOfGrants?: boolean;
            sharedLink?: boolean;
            isGrant?: boolean;
            createdAt?: boolean;
        },
        ExtArgs["result"]["organization"]
    >;

    export type OrganizationSelectScalar = {
        id?: boolean;
        organizationName?: boolean;
        organizationWebsite?: boolean;
        missionStatement?: boolean;
        refinedMissionStatement?: boolean;
        corePurpose?: boolean;
        typeOfWork?: boolean;
        goalsAspirations?: boolean;
        programs?: boolean;
        achievements?: boolean;
        budget?: boolean;
        evaluation?: boolean;
        noOfGrants?: boolean;
        sharedLink?: boolean;
        isGrant?: boolean;
        createdAt?: boolean;
    };

    export type OrganizationOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationName"
        | "organizationWebsite"
        | "missionStatement"
        | "refinedMissionStatement"
        | "corePurpose"
        | "typeOfWork"
        | "goalsAspirations"
        | "programs"
        | "achievements"
        | "budget"
        | "evaluation"
        | "noOfGrants"
        | "sharedLink"
        | "isGrant"
        | "createdAt",
        ExtArgs["result"]["organization"]
    >;
    export type OrganizationInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        grantOpportunities?: boolean | Organization$grantOpportunitiesArgs<ExtArgs>;
        internalGrantSources?: boolean | Organization$internalGrantSourcesArgs<ExtArgs>;
        readinessScores?: boolean | Organization$readinessScoresArgs<ExtArgs>;
        lettersOfIntent?: boolean | Organization$lettersOfIntentArgs<ExtArgs>;
        proposalDrafts?: boolean | Organization$proposalDraftsArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    };
    export type OrganizationIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};
    export type OrganizationIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {};

    export type $OrganizationPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "Organization";
        objects: {
            grantOpportunities: Prisma.$GrantOpportunityPayload<ExtArgs>[];
            internalGrantSources: Prisma.$InternalGrantSourcePayload<ExtArgs>[];
            readinessScores: Prisma.$ReadinessScorePayload<ExtArgs>[];
            lettersOfIntent: Prisma.$LetterOfIntentPayload<ExtArgs>[];
            proposalDrafts: Prisma.$ProposalDraftPayload<ExtArgs>[];
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationName: string;
                organizationWebsite: string | null;
                missionStatement: string | null;
                refinedMissionStatement: string | null;
                corePurpose: string | null;
                typeOfWork: string | null;
                goalsAspirations: string | null;
                programs: string | null;
                achievements: string | null;
                budget: string | null;
                evaluation: string | null;
                noOfGrants: number | null;
                sharedLink: string | null;
                isGrant: boolean;
                createdAt: Date;
            },
            ExtArgs["result"]["organization"]
        >;
        composites: {};
    };

    type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> =
        $Result.GetResult<Prisma.$OrganizationPayload, S>;

    type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
        Omit<OrganizationFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
            select?: OrganizationCountAggregateInputType | true;
        };

    export interface OrganizationDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["Organization"];
            meta: { name: "Organization" };
        };
        /**
         * Find zero or one Organization that matches the filter.
         * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
         * @example
         * // Get one Organization
         * const organization = await prisma.organization.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends OrganizationFindUniqueArgs>(
            args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
         * @example
         * // Get one Organization
         * const organization = await prisma.organization.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
            args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Organization that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
         * @example
         * // Get one Organization
         * const organization = await prisma.organization.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends OrganizationFindFirstArgs>(
            args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first Organization that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
         * @example
         * // Get one Organization
         * const organization = await prisma.organization.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
            args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more Organizations that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all Organizations
         * const organizations = await prisma.organization.findMany()
         *
         * // Get first 10 Organizations
         * const organizations = await prisma.organization.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
         *
         */
        findMany<T extends OrganizationFindManyArgs>(
            args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a Organization.
         * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
         * @example
         * // Create one Organization
         * const Organization = await prisma.organization.create({
         *   data: {
         *     // ... data to create a Organization
         *   }
         * })
         *
         */
        create<T extends OrganizationCreateArgs>(
            args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many Organizations.
         * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
         * @example
         * // Create many Organizations
         * const organization = await prisma.organization.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends OrganizationCreateManyArgs>(
            args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many Organizations and returns the data saved in the database.
         * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
         * @example
         * // Create many Organizations
         * const organization = await prisma.organization.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many Organizations and only return the `id`
         * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
            args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a Organization.
         * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
         * @example
         * // Delete one Organization
         * const Organization = await prisma.organization.delete({
         *   where: {
         *     // ... filter to delete one Organization
         *   }
         * })
         *
         */
        delete<T extends OrganizationDeleteArgs>(
            args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one Organization.
         * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
         * @example
         * // Update one Organization
         * const organization = await prisma.organization.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends OrganizationUpdateArgs>(
            args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more Organizations.
         * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
         * @example
         * // Delete a few Organizations
         * const { count } = await prisma.organization.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends OrganizationDeleteManyArgs>(
            args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Organizations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many Organizations
         * const organization = await prisma.organization.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends OrganizationUpdateManyArgs>(
            args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more Organizations and returns the data updated in the database.
         * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
         * @example
         * // Update many Organizations
         * const organization = await prisma.organization.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more Organizations and only return the `id`
         * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
        updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(
            args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$OrganizationPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one Organization.
         * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
         * @example
         * // Update or create a Organization
         * const organization = await prisma.organization.upsert({
         *   create: {
         *     // ... data to create a Organization
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the Organization we want to update
         *   }
         * })
         */
        upsert<T extends OrganizationUpsertArgs>(
            args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            $Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of Organizations.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
         * @example
         * // Count the number of Organizations
         * const count = await prisma.organization.count({
         *   where: {
         *     // ... the filter for the Organizations we want to count
         *   }
         * })
         **/
        count<T extends OrganizationCountArgs>(
            args?: Subset<T, OrganizationCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], OrganizationCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a Organization.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends OrganizationAggregateArgs>(
            args: Subset<T, OrganizationAggregateArgs>,
        ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

        /**
         * Group by Organization.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {OrganizationGroupByArgs} args - Group by arguments.
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
            T extends OrganizationGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: OrganizationGroupByArgs["orderBy"] }
                : { orderBy?: OrganizationGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetOrganizationGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the Organization model
         */
        readonly fields: OrganizationFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for Organization.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__OrganizationClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        grantOpportunities<T extends Organization$grantOpportunitiesArgs<ExtArgs> = {}>(
            args?: Subset<T, Organization$grantOpportunitiesArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$GrantOpportunityPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        internalGrantSources<T extends Organization$internalGrantSourcesArgs<ExtArgs> = {}>(
            args?: Subset<T, Organization$internalGrantSourcesArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$InternalGrantSourcePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        readinessScores<T extends Organization$readinessScoresArgs<ExtArgs> = {}>(
            args?: Subset<T, Organization$readinessScoresArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ReadinessScorePayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        lettersOfIntent<T extends Organization$lettersOfIntentArgs<ExtArgs> = {}>(
            args?: Subset<T, Organization$lettersOfIntentArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$LetterOfIntentPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        proposalDrafts<T extends Organization$proposalDraftsArgs<ExtArgs> = {}>(
            args?: Subset<T, Organization$proposalDraftsArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            | $Result.GetResult<
                  Prisma.$ProposalDraftPayload<ExtArgs>,
                  T,
                  "findMany",
                  GlobalOmitOptions
              >
            | Null
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the Organization model
     */
    interface OrganizationFieldRefs {
        readonly id: FieldRef<"Organization", "String">;
        readonly organizationName: FieldRef<"Organization", "String">;
        readonly organizationWebsite: FieldRef<"Organization", "String">;
        readonly missionStatement: FieldRef<"Organization", "String">;
        readonly refinedMissionStatement: FieldRef<"Organization", "String">;
        readonly corePurpose: FieldRef<"Organization", "String">;
        readonly typeOfWork: FieldRef<"Organization", "String">;
        readonly goalsAspirations: FieldRef<"Organization", "String">;
        readonly programs: FieldRef<"Organization", "String">;
        readonly achievements: FieldRef<"Organization", "String">;
        readonly budget: FieldRef<"Organization", "String">;
        readonly evaluation: FieldRef<"Organization", "String">;
        readonly noOfGrants: FieldRef<"Organization", "Int">;
        readonly sharedLink: FieldRef<"Organization", "String">;
        readonly isGrant: FieldRef<"Organization", "Boolean">;
        readonly createdAt: FieldRef<"Organization", "DateTime">;
    }

    // Custom InputTypes
    /**
     * Organization findUnique
     */
    export type OrganizationFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter, which Organization to fetch.
         */
        where: OrganizationWhereUniqueInput;
    };

    /**
     * Organization findUniqueOrThrow
     */
    export type OrganizationFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter, which Organization to fetch.
         */
        where: OrganizationWhereUniqueInput;
    };

    /**
     * Organization findFirst
     */
    export type OrganizationFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter, which Organization to fetch.
         */
        where?: OrganizationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Organizations to fetch.
         */
        orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Organizations.
         */
        cursor?: OrganizationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Organizations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Organizations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Organizations.
         */
        distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
    };

    /**
     * Organization findFirstOrThrow
     */
    export type OrganizationFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter, which Organization to fetch.
         */
        where?: OrganizationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Organizations to fetch.
         */
        orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for Organizations.
         */
        cursor?: OrganizationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Organizations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Organizations.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of Organizations.
         */
        distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
    };

    /**
     * Organization findMany
     */
    export type OrganizationFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter, which Organizations to fetch.
         */
        where?: OrganizationWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of Organizations to fetch.
         */
        orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing Organizations.
         */
        cursor?: OrganizationWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` Organizations from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` Organizations.
         */
        skip?: number;
        distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
    };

    /**
     * Organization create
     */
    export type OrganizationCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * The data needed to create a Organization.
         */
        data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
    };

    /**
     * Organization createMany
     */
    export type OrganizationCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many Organizations.
         */
        data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Organization createManyAndReturn
     */
    export type OrganizationCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * The data used to create many Organizations.
         */
        data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * Organization update
     */
    export type OrganizationUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * The data needed to update a Organization.
         */
        data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
        /**
         * Choose, which Organization to update.
         */
        where: OrganizationWhereUniqueInput;
    };

    /**
     * Organization updateMany
     */
    export type OrganizationUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update Organizations.
         */
        data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>;
        /**
         * Filter which Organizations to update
         */
        where?: OrganizationWhereInput;
        /**
         * Limit how many Organizations to update.
         */
        limit?: number;
    };

    /**
     * Organization updateManyAndReturn
     */
    export type OrganizationUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * The data used to update Organizations.
         */
        data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>;
        /**
         * Filter which Organizations to update
         */
        where?: OrganizationWhereInput;
        /**
         * Limit how many Organizations to update.
         */
        limit?: number;
    };

    /**
     * Organization upsert
     */
    export type OrganizationUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * The filter to search for the Organization to update in case it exists.
         */
        where: OrganizationWhereUniqueInput;
        /**
         * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
         */
        create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
        /**
         * In case the Organization was found with the provided `where` argument, update it with this data.
         */
        update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
    };

    /**
     * Organization delete
     */
    export type OrganizationDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
        /**
         * Filter which Organization to delete.
         */
        where: OrganizationWhereUniqueInput;
    };

    /**
     * Organization deleteMany
     */
    export type OrganizationDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which Organizations to delete
         */
        where?: OrganizationWhereInput;
        /**
         * Limit how many Organizations to delete.
         */
        limit?: number;
    };

    /**
     * Organization.grantOpportunities
     */
    export type Organization$grantOpportunitiesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the GrantOpportunity
         */
        select?: GrantOpportunitySelect<ExtArgs> | null;
        /**
         * Omit specific fields from the GrantOpportunity
         */
        omit?: GrantOpportunityOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: GrantOpportunityInclude<ExtArgs> | null;
        where?: GrantOpportunityWhereInput;
        orderBy?:
            | GrantOpportunityOrderByWithRelationInput
            | GrantOpportunityOrderByWithRelationInput[];
        cursor?: GrantOpportunityWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: GrantOpportunityScalarFieldEnum | GrantOpportunityScalarFieldEnum[];
    };

    /**
     * Organization.internalGrantSources
     */
    export type Organization$internalGrantSourcesArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the InternalGrantSource
         */
        select?: InternalGrantSourceSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the InternalGrantSource
         */
        omit?: InternalGrantSourceOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: InternalGrantSourceInclude<ExtArgs> | null;
        where?: InternalGrantSourceWhereInput;
        orderBy?:
            | InternalGrantSourceOrderByWithRelationInput
            | InternalGrantSourceOrderByWithRelationInput[];
        cursor?: InternalGrantSourceWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: InternalGrantSourceScalarFieldEnum | InternalGrantSourceScalarFieldEnum[];
    };

    /**
     * Organization.readinessScores
     */
    export type Organization$readinessScoresArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        where?: ReadinessScoreWhereInput;
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        cursor?: ReadinessScoreWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ReadinessScoreScalarFieldEnum | ReadinessScoreScalarFieldEnum[];
    };

    /**
     * Organization.lettersOfIntent
     */
    export type Organization$lettersOfIntentArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the LetterOfIntent
         */
        select?: LetterOfIntentSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the LetterOfIntent
         */
        omit?: LetterOfIntentOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: LetterOfIntentInclude<ExtArgs> | null;
        where?: LetterOfIntentWhereInput;
        orderBy?: LetterOfIntentOrderByWithRelationInput | LetterOfIntentOrderByWithRelationInput[];
        cursor?: LetterOfIntentWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: LetterOfIntentScalarFieldEnum | LetterOfIntentScalarFieldEnum[];
    };

    /**
     * Organization.proposalDrafts
     */
    export type Organization$proposalDraftsArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        where?: ProposalDraftWhereInput;
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        cursor?: ProposalDraftWhereUniqueInput;
        take?: number;
        skip?: number;
        distinct?: ProposalDraftScalarFieldEnum | ProposalDraftScalarFieldEnum[];
    };

    /**
     * Organization without action
     */
    export type OrganizationDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the Organization
         */
        select?: OrganizationSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the Organization
         */
        omit?: OrganizationOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: OrganizationInclude<ExtArgs> | null;
    };

    /**
     * Model ProposalDraft
     */

    export type AggregateProposalDraft = {
        _count: ProposalDraftCountAggregateOutputType | null;
        _min: ProposalDraftMinAggregateOutputType | null;
        _max: ProposalDraftMaxAggregateOutputType | null;
    };

    export type ProposalDraftMinAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        executiveSummary: string | null;
        introductionToOrganization: string | null;
        problemStatement: string | null;
        goalsAndObjectives: string | null;
        methodsAndActivities: string | null;
        evaluationPlan: string | null;
        sustainabilityPlan: string | null;
        budgetSummary: string | null;
        conclusion: string | null;
        status: boolean | null;
        createdAt: Date | null;
    };

    export type ProposalDraftMaxAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        executiveSummary: string | null;
        introductionToOrganization: string | null;
        problemStatement: string | null;
        goalsAndObjectives: string | null;
        methodsAndActivities: string | null;
        evaluationPlan: string | null;
        sustainabilityPlan: string | null;
        budgetSummary: string | null;
        conclusion: string | null;
        status: boolean | null;
        createdAt: Date | null;
    };

    export type ProposalDraftCountAggregateOutputType = {
        id: number;
        organizationId: number;
        grantId: number;
        executiveSummary: number;
        introductionToOrganization: number;
        problemStatement: number;
        goalsAndObjectives: number;
        methodsAndActivities: number;
        evaluationPlan: number;
        sustainabilityPlan: number;
        budgetSummary: number;
        conclusion: number;
        status: number;
        createdAt: number;
        _all: number;
    };

    export type ProposalDraftMinAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        executiveSummary?: true;
        introductionToOrganization?: true;
        problemStatement?: true;
        goalsAndObjectives?: true;
        methodsAndActivities?: true;
        evaluationPlan?: true;
        sustainabilityPlan?: true;
        budgetSummary?: true;
        conclusion?: true;
        status?: true;
        createdAt?: true;
    };

    export type ProposalDraftMaxAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        executiveSummary?: true;
        introductionToOrganization?: true;
        problemStatement?: true;
        goalsAndObjectives?: true;
        methodsAndActivities?: true;
        evaluationPlan?: true;
        sustainabilityPlan?: true;
        budgetSummary?: true;
        conclusion?: true;
        status?: true;
        createdAt?: true;
    };

    export type ProposalDraftCountAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        executiveSummary?: true;
        introductionToOrganization?: true;
        problemStatement?: true;
        goalsAndObjectives?: true;
        methodsAndActivities?: true;
        evaluationPlan?: true;
        sustainabilityPlan?: true;
        budgetSummary?: true;
        conclusion?: true;
        status?: true;
        createdAt?: true;
        _all?: true;
    };

    export type ProposalDraftAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ProposalDraft to aggregate.
         */
        where?: ProposalDraftWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ProposalDrafts to fetch.
         */
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ProposalDraftWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ProposalDrafts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ProposalDrafts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ProposalDrafts
         **/
        _count?: true | ProposalDraftCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ProposalDraftMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ProposalDraftMaxAggregateInputType;
    };

    export type GetProposalDraftAggregateType<T extends ProposalDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateProposalDraft]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateProposalDraft[P]>
            : GetScalarType<T[P], AggregateProposalDraft[P]>;
    };

    export type ProposalDraftGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ProposalDraftWhereInput;
        orderBy?:
            | ProposalDraftOrderByWithAggregationInput
            | ProposalDraftOrderByWithAggregationInput[];
        by: ProposalDraftScalarFieldEnum[] | ProposalDraftScalarFieldEnum;
        having?: ProposalDraftScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ProposalDraftCountAggregateInputType | true;
        _min?: ProposalDraftMinAggregateInputType;
        _max?: ProposalDraftMaxAggregateInputType;
    };

    export type ProposalDraftGroupByOutputType = {
        id: string;
        organizationId: string;
        grantId: string;
        executiveSummary: string | null;
        introductionToOrganization: string | null;
        problemStatement: string | null;
        goalsAndObjectives: string | null;
        methodsAndActivities: string | null;
        evaluationPlan: string | null;
        sustainabilityPlan: string | null;
        budgetSummary: string | null;
        conclusion: string | null;
        status: boolean;
        createdAt: Date;
        _count: ProposalDraftCountAggregateOutputType | null;
        _min: ProposalDraftMinAggregateOutputType | null;
        _max: ProposalDraftMaxAggregateOutputType | null;
    };

    type GetProposalDraftGroupByPayload<T extends ProposalDraftGroupByArgs> = Prisma.PrismaPromise<
        Array<
            PickEnumerable<ProposalDraftGroupByOutputType, T["by"]> & {
                [P in keyof T & keyof ProposalDraftGroupByOutputType]: P extends "_count"
                    ? T[P] extends boolean
                        ? number
                        : GetScalarType<T[P], ProposalDraftGroupByOutputType[P]>
                    : GetScalarType<T[P], ProposalDraftGroupByOutputType[P]>;
            }
        >
    >;

    export type ProposalDraftSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            executiveSummary?: boolean;
            introductionToOrganization?: boolean;
            problemStatement?: boolean;
            goalsAndObjectives?: boolean;
            methodsAndActivities?: boolean;
            evaluationPlan?: boolean;
            sustainabilityPlan?: boolean;
            budgetSummary?: boolean;
            conclusion?: boolean;
            status?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["proposalDraft"]
    >;

    export type ProposalDraftSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            executiveSummary?: boolean;
            introductionToOrganization?: boolean;
            problemStatement?: boolean;
            goalsAndObjectives?: boolean;
            methodsAndActivities?: boolean;
            evaluationPlan?: boolean;
            sustainabilityPlan?: boolean;
            budgetSummary?: boolean;
            conclusion?: boolean;
            status?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["proposalDraft"]
    >;

    export type ProposalDraftSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            executiveSummary?: boolean;
            introductionToOrganization?: boolean;
            problemStatement?: boolean;
            goalsAndObjectives?: boolean;
            methodsAndActivities?: boolean;
            evaluationPlan?: boolean;
            sustainabilityPlan?: boolean;
            budgetSummary?: boolean;
            conclusion?: boolean;
            status?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["proposalDraft"]
    >;

    export type ProposalDraftSelectScalar = {
        id?: boolean;
        organizationId?: boolean;
        grantId?: boolean;
        executiveSummary?: boolean;
        introductionToOrganization?: boolean;
        problemStatement?: boolean;
        goalsAndObjectives?: boolean;
        methodsAndActivities?: boolean;
        evaluationPlan?: boolean;
        sustainabilityPlan?: boolean;
        budgetSummary?: boolean;
        conclusion?: boolean;
        status?: boolean;
        createdAt?: boolean;
    };

    export type ProposalDraftOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationId"
        | "grantId"
        | "executiveSummary"
        | "introductionToOrganization"
        | "problemStatement"
        | "goalsAndObjectives"
        | "methodsAndActivities"
        | "evaluationPlan"
        | "sustainabilityPlan"
        | "budgetSummary"
        | "conclusion"
        | "status"
        | "createdAt",
        ExtArgs["result"]["proposalDraft"]
    >;
    export type ProposalDraftInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type ProposalDraftIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type ProposalDraftIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };

    export type $ProposalDraftPayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ProposalDraft";
        objects: {
            organization: Prisma.$OrganizationPayload<ExtArgs>;
            grant: Prisma.$GrantOpportunityPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationId: string;
                grantId: string;
                executiveSummary: string | null;
                introductionToOrganization: string | null;
                problemStatement: string | null;
                goalsAndObjectives: string | null;
                methodsAndActivities: string | null;
                evaluationPlan: string | null;
                sustainabilityPlan: string | null;
                budgetSummary: string | null;
                conclusion: string | null;
                status: boolean;
                createdAt: Date;
            },
            ExtArgs["result"]["proposalDraft"]
        >;
        composites: {};
    };

    type ProposalDraftGetPayload<S extends boolean | null | undefined | ProposalDraftDefaultArgs> =
        $Result.GetResult<Prisma.$ProposalDraftPayload, S>;

    type ProposalDraftCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<ProposalDraftFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: ProposalDraftCountAggregateInputType | true;
    };

    export interface ProposalDraftDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ProposalDraft"];
            meta: { name: "ProposalDraft" };
        };
        /**
         * Find zero or one ProposalDraft that matches the filter.
         * @param {ProposalDraftFindUniqueArgs} args - Arguments to find a ProposalDraft
         * @example
         * // Get one ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ProposalDraftFindUniqueArgs>(
            args: SelectSubset<T, ProposalDraftFindUniqueArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ProposalDraft that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ProposalDraftFindUniqueOrThrowArgs} args - Arguments to find a ProposalDraft
         * @example
         * // Get one ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ProposalDraftFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ProposalDraftFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ProposalDraft that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftFindFirstArgs} args - Arguments to find a ProposalDraft
         * @example
         * // Get one ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ProposalDraftFindFirstArgs>(
            args?: SelectSubset<T, ProposalDraftFindFirstArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ProposalDraft that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftFindFirstOrThrowArgs} args - Arguments to find a ProposalDraft
         * @example
         * // Get one ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ProposalDraftFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ProposalDraftFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ProposalDrafts that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ProposalDrafts
         * const proposalDrafts = await prisma.proposalDraft.findMany()
         *
         * // Get first 10 ProposalDrafts
         * const proposalDrafts = await prisma.proposalDraft.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const proposalDraftWithIdOnly = await prisma.proposalDraft.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ProposalDraftFindManyArgs>(
            args?: SelectSubset<T, ProposalDraftFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ProposalDraft.
         * @param {ProposalDraftCreateArgs} args - Arguments to create a ProposalDraft.
         * @example
         * // Create one ProposalDraft
         * const ProposalDraft = await prisma.proposalDraft.create({
         *   data: {
         *     // ... data to create a ProposalDraft
         *   }
         * })
         *
         */
        create<T extends ProposalDraftCreateArgs>(
            args: SelectSubset<T, ProposalDraftCreateArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ProposalDrafts.
         * @param {ProposalDraftCreateManyArgs} args - Arguments to create many ProposalDrafts.
         * @example
         * // Create many ProposalDrafts
         * const proposalDraft = await prisma.proposalDraft.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ProposalDraftCreateManyArgs>(
            args?: SelectSubset<T, ProposalDraftCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ProposalDrafts and returns the data saved in the database.
         * @param {ProposalDraftCreateManyAndReturnArgs} args - Arguments to create many ProposalDrafts.
         * @example
         * // Create many ProposalDrafts
         * const proposalDraft = await prisma.proposalDraft.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ProposalDrafts and only return the `id`
         * const proposalDraftWithIdOnly = await prisma.proposalDraft.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ProposalDraftCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ProposalDraftCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ProposalDraft.
         * @param {ProposalDraftDeleteArgs} args - Arguments to delete one ProposalDraft.
         * @example
         * // Delete one ProposalDraft
         * const ProposalDraft = await prisma.proposalDraft.delete({
         *   where: {
         *     // ... filter to delete one ProposalDraft
         *   }
         * })
         *
         */
        delete<T extends ProposalDraftDeleteArgs>(
            args: SelectSubset<T, ProposalDraftDeleteArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ProposalDraft.
         * @param {ProposalDraftUpdateArgs} args - Arguments to update one ProposalDraft.
         * @example
         * // Update one ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ProposalDraftUpdateArgs>(
            args: SelectSubset<T, ProposalDraftUpdateArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ProposalDrafts.
         * @param {ProposalDraftDeleteManyArgs} args - Arguments to filter ProposalDrafts to delete.
         * @example
         * // Delete a few ProposalDrafts
         * const { count } = await prisma.proposalDraft.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ProposalDraftDeleteManyArgs>(
            args?: SelectSubset<T, ProposalDraftDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ProposalDrafts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ProposalDrafts
         * const proposalDraft = await prisma.proposalDraft.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ProposalDraftUpdateManyArgs>(
            args: SelectSubset<T, ProposalDraftUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ProposalDrafts and returns the data updated in the database.
         * @param {ProposalDraftUpdateManyAndReturnArgs} args - Arguments to update many ProposalDrafts.
         * @example
         * // Update many ProposalDrafts
         * const proposalDraft = await prisma.proposalDraft.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ProposalDrafts and only return the `id`
         * const proposalDraftWithIdOnly = await prisma.proposalDraft.updateManyAndReturn({
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
        updateManyAndReturn<T extends ProposalDraftUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ProposalDraftUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ProposalDraft.
         * @param {ProposalDraftUpsertArgs} args - Arguments to update or create a ProposalDraft.
         * @example
         * // Update or create a ProposalDraft
         * const proposalDraft = await prisma.proposalDraft.upsert({
         *   create: {
         *     // ... data to create a ProposalDraft
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ProposalDraft we want to update
         *   }
         * })
         */
        upsert<T extends ProposalDraftUpsertArgs>(
            args: SelectSubset<T, ProposalDraftUpsertArgs<ExtArgs>>,
        ): Prisma__ProposalDraftClient<
            $Result.GetResult<
                Prisma.$ProposalDraftPayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ProposalDrafts.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftCountArgs} args - Arguments to filter ProposalDrafts to count.
         * @example
         * // Count the number of ProposalDrafts
         * const count = await prisma.proposalDraft.count({
         *   where: {
         *     // ... the filter for the ProposalDrafts we want to count
         *   }
         * })
         **/
        count<T extends ProposalDraftCountArgs>(
            args?: Subset<T, ProposalDraftCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], ProposalDraftCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ProposalDraft.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ProposalDraftAggregateArgs>(
            args: Subset<T, ProposalDraftAggregateArgs>,
        ): Prisma.PrismaPromise<GetProposalDraftAggregateType<T>>;

        /**
         * Group by ProposalDraft.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ProposalDraftGroupByArgs} args - Group by arguments.
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
            T extends ProposalDraftGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ProposalDraftGroupByArgs["orderBy"] }
                : { orderBy?: ProposalDraftGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, ProposalDraftGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetProposalDraftGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ProposalDraft model
         */
        readonly fields: ProposalDraftFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ProposalDraft.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ProposalDraftClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            | $Result.GetResult<
                  Prisma.$OrganizationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        grant<T extends GrantOpportunityDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunityDefaultArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            | $Result.GetResult<
                  Prisma.$GrantOpportunityPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the ProposalDraft model
     */
    interface ProposalDraftFieldRefs {
        readonly id: FieldRef<"ProposalDraft", "String">;
        readonly organizationId: FieldRef<"ProposalDraft", "String">;
        readonly grantId: FieldRef<"ProposalDraft", "String">;
        readonly executiveSummary: FieldRef<"ProposalDraft", "String">;
        readonly introductionToOrganization: FieldRef<"ProposalDraft", "String">;
        readonly problemStatement: FieldRef<"ProposalDraft", "String">;
        readonly goalsAndObjectives: FieldRef<"ProposalDraft", "String">;
        readonly methodsAndActivities: FieldRef<"ProposalDraft", "String">;
        readonly evaluationPlan: FieldRef<"ProposalDraft", "String">;
        readonly sustainabilityPlan: FieldRef<"ProposalDraft", "String">;
        readonly budgetSummary: FieldRef<"ProposalDraft", "String">;
        readonly conclusion: FieldRef<"ProposalDraft", "String">;
        readonly status: FieldRef<"ProposalDraft", "Boolean">;
        readonly createdAt: FieldRef<"ProposalDraft", "DateTime">;
    }

    // Custom InputTypes
    /**
     * ProposalDraft findUnique
     */
    export type ProposalDraftFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter, which ProposalDraft to fetch.
         */
        where: ProposalDraftWhereUniqueInput;
    };

    /**
     * ProposalDraft findUniqueOrThrow
     */
    export type ProposalDraftFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter, which ProposalDraft to fetch.
         */
        where: ProposalDraftWhereUniqueInput;
    };

    /**
     * ProposalDraft findFirst
     */
    export type ProposalDraftFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter, which ProposalDraft to fetch.
         */
        where?: ProposalDraftWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ProposalDrafts to fetch.
         */
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ProposalDrafts.
         */
        cursor?: ProposalDraftWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ProposalDrafts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ProposalDrafts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ProposalDrafts.
         */
        distinct?: ProposalDraftScalarFieldEnum | ProposalDraftScalarFieldEnum[];
    };

    /**
     * ProposalDraft findFirstOrThrow
     */
    export type ProposalDraftFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter, which ProposalDraft to fetch.
         */
        where?: ProposalDraftWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ProposalDrafts to fetch.
         */
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ProposalDrafts.
         */
        cursor?: ProposalDraftWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ProposalDrafts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ProposalDrafts.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ProposalDrafts.
         */
        distinct?: ProposalDraftScalarFieldEnum | ProposalDraftScalarFieldEnum[];
    };

    /**
     * ProposalDraft findMany
     */
    export type ProposalDraftFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter, which ProposalDrafts to fetch.
         */
        where?: ProposalDraftWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ProposalDrafts to fetch.
         */
        orderBy?: ProposalDraftOrderByWithRelationInput | ProposalDraftOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ProposalDrafts.
         */
        cursor?: ProposalDraftWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ProposalDrafts from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ProposalDrafts.
         */
        skip?: number;
        distinct?: ProposalDraftScalarFieldEnum | ProposalDraftScalarFieldEnum[];
    };

    /**
     * ProposalDraft create
     */
    export type ProposalDraftCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * The data needed to create a ProposalDraft.
         */
        data: XOR<ProposalDraftCreateInput, ProposalDraftUncheckedCreateInput>;
    };

    /**
     * ProposalDraft createMany
     */
    export type ProposalDraftCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ProposalDrafts.
         */
        data: ProposalDraftCreateManyInput | ProposalDraftCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ProposalDraft createManyAndReturn
     */
    export type ProposalDraftCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * The data used to create many ProposalDrafts.
         */
        data: ProposalDraftCreateManyInput | ProposalDraftCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ProposalDraft update
     */
    export type ProposalDraftUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * The data needed to update a ProposalDraft.
         */
        data: XOR<ProposalDraftUpdateInput, ProposalDraftUncheckedUpdateInput>;
        /**
         * Choose, which ProposalDraft to update.
         */
        where: ProposalDraftWhereUniqueInput;
    };

    /**
     * ProposalDraft updateMany
     */
    export type ProposalDraftUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ProposalDrafts.
         */
        data: XOR<ProposalDraftUpdateManyMutationInput, ProposalDraftUncheckedUpdateManyInput>;
        /**
         * Filter which ProposalDrafts to update
         */
        where?: ProposalDraftWhereInput;
        /**
         * Limit how many ProposalDrafts to update.
         */
        limit?: number;
    };

    /**
     * ProposalDraft updateManyAndReturn
     */
    export type ProposalDraftUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * The data used to update ProposalDrafts.
         */
        data: XOR<ProposalDraftUpdateManyMutationInput, ProposalDraftUncheckedUpdateManyInput>;
        /**
         * Filter which ProposalDrafts to update
         */
        where?: ProposalDraftWhereInput;
        /**
         * Limit how many ProposalDrafts to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ProposalDraft upsert
     */
    export type ProposalDraftUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * The filter to search for the ProposalDraft to update in case it exists.
         */
        where: ProposalDraftWhereUniqueInput;
        /**
         * In case the ProposalDraft found by the `where` argument doesn't exist, create a new ProposalDraft with this data.
         */
        create: XOR<ProposalDraftCreateInput, ProposalDraftUncheckedCreateInput>;
        /**
         * In case the ProposalDraft was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ProposalDraftUpdateInput, ProposalDraftUncheckedUpdateInput>;
    };

    /**
     * ProposalDraft delete
     */
    export type ProposalDraftDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
        /**
         * Filter which ProposalDraft to delete.
         */
        where: ProposalDraftWhereUniqueInput;
    };

    /**
     * ProposalDraft deleteMany
     */
    export type ProposalDraftDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ProposalDrafts to delete
         */
        where?: ProposalDraftWhereInput;
        /**
         * Limit how many ProposalDrafts to delete.
         */
        limit?: number;
    };

    /**
     * ProposalDraft without action
     */
    export type ProposalDraftDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ProposalDraft
         */
        select?: ProposalDraftSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ProposalDraft
         */
        omit?: ProposalDraftOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ProposalDraftInclude<ExtArgs> | null;
    };

    /**
     * Model ReadinessScore
     */

    export type AggregateReadinessScore = {
        _count: ReadinessScoreCountAggregateOutputType | null;
        _avg: ReadinessScoreAvgAggregateOutputType | null;
        _sum: ReadinessScoreSumAggregateOutputType | null;
        _min: ReadinessScoreMinAggregateOutputType | null;
        _max: ReadinessScoreMaxAggregateOutputType | null;
    };

    export type ReadinessScoreAvgAggregateOutputType = {
        readinessScore: number | null;
    };

    export type ReadinessScoreSumAggregateOutputType = {
        readinessScore: number | null;
    };

    export type ReadinessScoreMinAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        readinessScore: number | null;
        strengths: string | null;
        improvementAreas: string | null;
        createdAt: Date | null;
    };

    export type ReadinessScoreMaxAggregateOutputType = {
        id: string | null;
        organizationId: string | null;
        grantId: string | null;
        readinessScore: number | null;
        strengths: string | null;
        improvementAreas: string | null;
        createdAt: Date | null;
    };

    export type ReadinessScoreCountAggregateOutputType = {
        id: number;
        organizationId: number;
        grantId: number;
        readinessScore: number;
        strengths: number;
        improvementAreas: number;
        createdAt: number;
        _all: number;
    };

    export type ReadinessScoreAvgAggregateInputType = {
        readinessScore?: true;
    };

    export type ReadinessScoreSumAggregateInputType = {
        readinessScore?: true;
    };

    export type ReadinessScoreMinAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        readinessScore?: true;
        strengths?: true;
        improvementAreas?: true;
        createdAt?: true;
    };

    export type ReadinessScoreMaxAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        readinessScore?: true;
        strengths?: true;
        improvementAreas?: true;
        createdAt?: true;
    };

    export type ReadinessScoreCountAggregateInputType = {
        id?: true;
        organizationId?: true;
        grantId?: true;
        readinessScore?: true;
        strengths?: true;
        improvementAreas?: true;
        createdAt?: true;
        _all?: true;
    };

    export type ReadinessScoreAggregateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ReadinessScore to aggregate.
         */
        where?: ReadinessScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ReadinessScores to fetch.
         */
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the start position
         */
        cursor?: ReadinessScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ReadinessScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ReadinessScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Count returned ReadinessScores
         **/
        _count?: true | ReadinessScoreCountAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to average
         **/
        _avg?: ReadinessScoreAvgAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to sum
         **/
        _sum?: ReadinessScoreSumAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the minimum value
         **/
        _min?: ReadinessScoreMinAggregateInputType;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
         *
         * Select which fields to find the maximum value
         **/
        _max?: ReadinessScoreMaxAggregateInputType;
    };

    export type GetReadinessScoreAggregateType<T extends ReadinessScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateReadinessScore]: P extends "_count" | "count"
            ? T[P] extends true
                ? number
                : GetScalarType<T[P], AggregateReadinessScore[P]>
            : GetScalarType<T[P], AggregateReadinessScore[P]>;
    };

    export type ReadinessScoreGroupByArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        where?: ReadinessScoreWhereInput;
        orderBy?:
            | ReadinessScoreOrderByWithAggregationInput
            | ReadinessScoreOrderByWithAggregationInput[];
        by: ReadinessScoreScalarFieldEnum[] | ReadinessScoreScalarFieldEnum;
        having?: ReadinessScoreScalarWhereWithAggregatesInput;
        take?: number;
        skip?: number;
        _count?: ReadinessScoreCountAggregateInputType | true;
        _avg?: ReadinessScoreAvgAggregateInputType;
        _sum?: ReadinessScoreSumAggregateInputType;
        _min?: ReadinessScoreMinAggregateInputType;
        _max?: ReadinessScoreMaxAggregateInputType;
    };

    export type ReadinessScoreGroupByOutputType = {
        id: string;
        organizationId: string;
        grantId: string;
        readinessScore: number;
        strengths: string | null;
        improvementAreas: string | null;
        createdAt: Date;
        _count: ReadinessScoreCountAggregateOutputType | null;
        _avg: ReadinessScoreAvgAggregateOutputType | null;
        _sum: ReadinessScoreSumAggregateOutputType | null;
        _min: ReadinessScoreMinAggregateOutputType | null;
        _max: ReadinessScoreMaxAggregateOutputType | null;
    };

    type GetReadinessScoreGroupByPayload<T extends ReadinessScoreGroupByArgs> =
        Prisma.PrismaPromise<
            Array<
                PickEnumerable<ReadinessScoreGroupByOutputType, T["by"]> & {
                    [P in keyof T & keyof ReadinessScoreGroupByOutputType]: P extends "_count"
                        ? T[P] extends boolean
                            ? number
                            : GetScalarType<T[P], ReadinessScoreGroupByOutputType[P]>
                        : GetScalarType<T[P], ReadinessScoreGroupByOutputType[P]>;
                }
            >
        >;

    export type ReadinessScoreSelect<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            readinessScore?: boolean;
            strengths?: boolean;
            improvementAreas?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["readinessScore"]
    >;

    export type ReadinessScoreSelectCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            readinessScore?: boolean;
            strengths?: boolean;
            improvementAreas?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["readinessScore"]
    >;

    export type ReadinessScoreSelectUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetSelect<
        {
            id?: boolean;
            organizationId?: boolean;
            grantId?: boolean;
            readinessScore?: boolean;
            strengths?: boolean;
            improvementAreas?: boolean;
            createdAt?: boolean;
            organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
            grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
        },
        ExtArgs["result"]["readinessScore"]
    >;

    export type ReadinessScoreSelectScalar = {
        id?: boolean;
        organizationId?: boolean;
        grantId?: boolean;
        readinessScore?: boolean;
        strengths?: boolean;
        improvementAreas?: boolean;
        createdAt?: boolean;
    };

    export type ReadinessScoreOmit<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = $Extensions.GetOmit<
        | "id"
        | "organizationId"
        | "grantId"
        | "readinessScore"
        | "strengths"
        | "improvementAreas"
        | "createdAt",
        ExtArgs["result"]["readinessScore"]
    >;
    export type ReadinessScoreInclude<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type ReadinessScoreIncludeCreateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };
    export type ReadinessScoreIncludeUpdateManyAndReturn<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
        grant?: boolean | GrantOpportunityDefaultArgs<ExtArgs>;
    };

    export type $ReadinessScorePayload<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        name: "ReadinessScore";
        objects: {
            organization: Prisma.$OrganizationPayload<ExtArgs>;
            grant: Prisma.$GrantOpportunityPayload<ExtArgs>;
        };
        scalars: $Extensions.GetPayloadResult<
            {
                id: string;
                organizationId: string;
                grantId: string;
                readinessScore: number;
                strengths: string | null;
                improvementAreas: string | null;
                createdAt: Date;
            },
            ExtArgs["result"]["readinessScore"]
        >;
        composites: {};
    };

    type ReadinessScoreGetPayload<
        S extends boolean | null | undefined | ReadinessScoreDefaultArgs,
    > = $Result.GetResult<Prisma.$ReadinessScorePayload, S>;

    type ReadinessScoreCountArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = Omit<ReadinessScoreFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
        select?: ReadinessScoreCountAggregateInputType | true;
    };

    export interface ReadinessScoreDelegate<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > {
        [K: symbol]: {
            types: Prisma.TypeMap<ExtArgs>["model"]["ReadinessScore"];
            meta: { name: "ReadinessScore" };
        };
        /**
         * Find zero or one ReadinessScore that matches the filter.
         * @param {ReadinessScoreFindUniqueArgs} args - Arguments to find a ReadinessScore
         * @example
         * // Get one ReadinessScore
         * const readinessScore = await prisma.readinessScore.findUnique({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUnique<T extends ReadinessScoreFindUniqueArgs>(
            args: SelectSubset<T, ReadinessScoreFindUniqueArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "findUnique",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find one ReadinessScore that matches the filter or throw an error with `error.code='P2025'`
         * if no matches were found.
         * @param {ReadinessScoreFindUniqueOrThrowArgs} args - Arguments to find a ReadinessScore
         * @example
         * // Get one ReadinessScore
         * const readinessScore = await prisma.readinessScore.findUniqueOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findUniqueOrThrow<T extends ReadinessScoreFindUniqueOrThrowArgs>(
            args: SelectSubset<T, ReadinessScoreFindUniqueOrThrowArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "findUniqueOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ReadinessScore that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreFindFirstArgs} args - Arguments to find a ReadinessScore
         * @example
         * // Get one ReadinessScore
         * const readinessScore = await prisma.readinessScore.findFirst({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirst<T extends ReadinessScoreFindFirstArgs>(
            args?: SelectSubset<T, ReadinessScoreFindFirstArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "findFirst",
                GlobalOmitOptions
            > | null,
            null,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find the first ReadinessScore that matches the filter or
         * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreFindFirstOrThrowArgs} args - Arguments to find a ReadinessScore
         * @example
         * // Get one ReadinessScore
         * const readinessScore = await prisma.readinessScore.findFirstOrThrow({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         */
        findFirstOrThrow<T extends ReadinessScoreFindFirstOrThrowArgs>(
            args?: SelectSubset<T, ReadinessScoreFindFirstOrThrowArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "findFirstOrThrow",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Find zero or more ReadinessScores that matches the filter.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreFindManyArgs} args - Arguments to filter and select certain fields only.
         * @example
         * // Get all ReadinessScores
         * const readinessScores = await prisma.readinessScore.findMany()
         *
         * // Get first 10 ReadinessScores
         * const readinessScores = await prisma.readinessScore.findMany({ take: 10 })
         *
         * // Only select the `id`
         * const readinessScoreWithIdOnly = await prisma.readinessScore.findMany({ select: { id: true } })
         *
         */
        findMany<T extends ReadinessScoreFindManyArgs>(
            args?: SelectSubset<T, ReadinessScoreFindManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "findMany",
                GlobalOmitOptions
            >
        >;

        /**
         * Create a ReadinessScore.
         * @param {ReadinessScoreCreateArgs} args - Arguments to create a ReadinessScore.
         * @example
         * // Create one ReadinessScore
         * const ReadinessScore = await prisma.readinessScore.create({
         *   data: {
         *     // ... data to create a ReadinessScore
         *   }
         * })
         *
         */
        create<T extends ReadinessScoreCreateArgs>(
            args: SelectSubset<T, ReadinessScoreCreateArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "create",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Create many ReadinessScores.
         * @param {ReadinessScoreCreateManyArgs} args - Arguments to create many ReadinessScores.
         * @example
         * // Create many ReadinessScores
         * const readinessScore = await prisma.readinessScore.createMany({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         */
        createMany<T extends ReadinessScoreCreateManyArgs>(
            args?: SelectSubset<T, ReadinessScoreCreateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Create many ReadinessScores and returns the data saved in the database.
         * @param {ReadinessScoreCreateManyAndReturnArgs} args - Arguments to create many ReadinessScores.
         * @example
         * // Create many ReadinessScores
         * const readinessScore = await prisma.readinessScore.createManyAndReturn({
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Create many ReadinessScores and only return the `id`
         * const readinessScoreWithIdOnly = await prisma.readinessScore.createManyAndReturn({
         *   select: { id: true },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         *
         */
        createManyAndReturn<T extends ReadinessScoreCreateManyAndReturnArgs>(
            args?: SelectSubset<T, ReadinessScoreCreateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "createManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Delete a ReadinessScore.
         * @param {ReadinessScoreDeleteArgs} args - Arguments to delete one ReadinessScore.
         * @example
         * // Delete one ReadinessScore
         * const ReadinessScore = await prisma.readinessScore.delete({
         *   where: {
         *     // ... filter to delete one ReadinessScore
         *   }
         * })
         *
         */
        delete<T extends ReadinessScoreDeleteArgs>(
            args: SelectSubset<T, ReadinessScoreDeleteArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "delete",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Update one ReadinessScore.
         * @param {ReadinessScoreUpdateArgs} args - Arguments to update one ReadinessScore.
         * @example
         * // Update one ReadinessScore
         * const readinessScore = await prisma.readinessScore.update({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        update<T extends ReadinessScoreUpdateArgs>(
            args: SelectSubset<T, ReadinessScoreUpdateArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "update",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Delete zero or more ReadinessScores.
         * @param {ReadinessScoreDeleteManyArgs} args - Arguments to filter ReadinessScores to delete.
         * @example
         * // Delete a few ReadinessScores
         * const { count } = await prisma.readinessScore.deleteMany({
         *   where: {
         *     // ... provide filter here
         *   }
         * })
         *
         */
        deleteMany<T extends ReadinessScoreDeleteManyArgs>(
            args?: SelectSubset<T, ReadinessScoreDeleteManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ReadinessScores.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreUpdateManyArgs} args - Arguments to update one or more rows.
         * @example
         * // Update many ReadinessScores
         * const readinessScore = await prisma.readinessScore.updateMany({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: {
         *     // ... provide data here
         *   }
         * })
         *
         */
        updateMany<T extends ReadinessScoreUpdateManyArgs>(
            args: SelectSubset<T, ReadinessScoreUpdateManyArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<BatchPayload>;

        /**
         * Update zero or more ReadinessScores and returns the data updated in the database.
         * @param {ReadinessScoreUpdateManyAndReturnArgs} args - Arguments to update many ReadinessScores.
         * @example
         * // Update many ReadinessScores
         * const readinessScore = await prisma.readinessScore.updateManyAndReturn({
         *   where: {
         *     // ... provide filter here
         *   },
         *   data: [
         *     // ... provide data here
         *   ]
         * })
         *
         * // Update zero or more ReadinessScores and only return the `id`
         * const readinessScoreWithIdOnly = await prisma.readinessScore.updateManyAndReturn({
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
        updateManyAndReturn<T extends ReadinessScoreUpdateManyAndReturnArgs>(
            args: SelectSubset<T, ReadinessScoreUpdateManyAndReturnArgs<ExtArgs>>,
        ): Prisma.PrismaPromise<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "updateManyAndReturn",
                GlobalOmitOptions
            >
        >;

        /**
         * Create or update one ReadinessScore.
         * @param {ReadinessScoreUpsertArgs} args - Arguments to update or create a ReadinessScore.
         * @example
         * // Update or create a ReadinessScore
         * const readinessScore = await prisma.readinessScore.upsert({
         *   create: {
         *     // ... data to create a ReadinessScore
         *   },
         *   update: {
         *     // ... in case it already exists, update
         *   },
         *   where: {
         *     // ... the filter for the ReadinessScore we want to update
         *   }
         * })
         */
        upsert<T extends ReadinessScoreUpsertArgs>(
            args: SelectSubset<T, ReadinessScoreUpsertArgs<ExtArgs>>,
        ): Prisma__ReadinessScoreClient<
            $Result.GetResult<
                Prisma.$ReadinessScorePayload<ExtArgs>,
                T,
                "upsert",
                GlobalOmitOptions
            >,
            never,
            ExtArgs,
            GlobalOmitOptions
        >;

        /**
         * Count the number of ReadinessScores.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreCountArgs} args - Arguments to filter ReadinessScores to count.
         * @example
         * // Count the number of ReadinessScores
         * const count = await prisma.readinessScore.count({
         *   where: {
         *     // ... the filter for the ReadinessScores we want to count
         *   }
         * })
         **/
        count<T extends ReadinessScoreCountArgs>(
            args?: Subset<T, ReadinessScoreCountArgs>,
        ): Prisma.PrismaPromise<
            T extends $Utils.Record<"select", any>
                ? T["select"] extends true
                    ? number
                    : GetScalarType<T["select"], ReadinessScoreCountAggregateOutputType>
                : number
        >;

        /**
         * Allows you to perform aggregations operations on a ReadinessScore.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
        aggregate<T extends ReadinessScoreAggregateArgs>(
            args: Subset<T, ReadinessScoreAggregateArgs>,
        ): Prisma.PrismaPromise<GetReadinessScoreAggregateType<T>>;

        /**
         * Group by ReadinessScore.
         * Note, that providing `undefined` is treated as the value not being there.
         * Read more here: https://pris.ly/d/null-undefined
         * @param {ReadinessScoreGroupByArgs} args - Group by arguments.
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
            T extends ReadinessScoreGroupByArgs,
            HasSelectOrTake extends Or<Extends<"skip", Keys<T>>, Extends<"take", Keys<T>>>,
            OrderByArg extends True extends HasSelectOrTake
                ? { orderBy: ReadinessScoreGroupByArgs["orderBy"] }
                : { orderBy?: ReadinessScoreGroupByArgs["orderBy"] },
            OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T["orderBy"]>>>,
            ByFields extends MaybeTupleToUnion<T["by"]>,
            ByValid extends Has<ByFields, OrderFields>,
            HavingFields extends GetHavingFields<T["having"]>,
            HavingValid extends Has<ByFields, HavingFields>,
            ByEmpty extends T["by"] extends never[] ? True : False,
            InputErrors extends ByEmpty extends True
                ? `Error: "by" must not be empty.`
                : HavingValid extends False
                  ? {
                        [P in HavingFields]: P extends ByFields
                            ? never
                            : P extends string
                              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                              : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
                    }[HavingFields]
                  : "take" extends Keys<T>
                    ? "orderBy" extends Keys<T>
                        ? ByValid extends True
                            ? {}
                            : {
                                  [P in OrderFields]: P extends ByFields
                                      ? never
                                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                              }[OrderFields]
                        : 'Error: If you provide "take", you also need to provide "orderBy"'
                    : "skip" extends Keys<T>
                      ? "orderBy" extends Keys<T>
                          ? ByValid extends True
                              ? {}
                              : {
                                    [P in OrderFields]: P extends ByFields
                                        ? never
                                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                                }[OrderFields]
                          : 'Error: If you provide "skip", you also need to provide "orderBy"'
                      : ByValid extends True
                        ? {}
                        : {
                              [P in OrderFields]: P extends ByFields
                                  ? never
                                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields],
        >(
            args: SubsetIntersection<T, ReadinessScoreGroupByArgs, OrderByArg> & InputErrors,
        ): {} extends InputErrors
            ? GetReadinessScoreGroupByPayload<T>
            : Prisma.PrismaPromise<InputErrors>;
        /**
         * Fields of the ReadinessScore model
         */
        readonly fields: ReadinessScoreFieldRefs;
    }

    /**
     * The delegate class that acts as a "Promise-like" for ReadinessScore.
     * Why is this prefixed with `Prisma__`?
     * Because we want to prevent naming conflicts as mentioned in
     * https://github.com/prisma/prisma-client-js/issues/707
     */
    export interface Prisma__ReadinessScoreClient<
        T,
        Null = never,
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
        GlobalOmitOptions = {},
    > extends Prisma.PrismaPromise<T> {
        readonly [Symbol.toStringTag]: "PrismaPromise";
        organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
        ): Prisma__OrganizationClient<
            | $Result.GetResult<
                  Prisma.$OrganizationPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        grant<T extends GrantOpportunityDefaultArgs<ExtArgs> = {}>(
            args?: Subset<T, GrantOpportunityDefaultArgs<ExtArgs>>,
        ): Prisma__GrantOpportunityClient<
            | $Result.GetResult<
                  Prisma.$GrantOpportunityPayload<ExtArgs>,
                  T,
                  "findUniqueOrThrow",
                  GlobalOmitOptions
              >
            | Null,
            Null,
            ExtArgs,
            GlobalOmitOptions
        >;
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): $Utils.JsPromise<TResult1 | TResult2>;
        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): $Utils.JsPromise<T | TResult>;
        /**
         * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
         * resolved value cannot be modified from the callback.
         * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
         * @returns A Promise for the completion of the callback.
         */
        finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }

    /**
     * Fields of the ReadinessScore model
     */
    interface ReadinessScoreFieldRefs {
        readonly id: FieldRef<"ReadinessScore", "String">;
        readonly organizationId: FieldRef<"ReadinessScore", "String">;
        readonly grantId: FieldRef<"ReadinessScore", "String">;
        readonly readinessScore: FieldRef<"ReadinessScore", "Int">;
        readonly strengths: FieldRef<"ReadinessScore", "String">;
        readonly improvementAreas: FieldRef<"ReadinessScore", "String">;
        readonly createdAt: FieldRef<"ReadinessScore", "DateTime">;
    }

    // Custom InputTypes
    /**
     * ReadinessScore findUnique
     */
    export type ReadinessScoreFindUniqueArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter, which ReadinessScore to fetch.
         */
        where: ReadinessScoreWhereUniqueInput;
    };

    /**
     * ReadinessScore findUniqueOrThrow
     */
    export type ReadinessScoreFindUniqueOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter, which ReadinessScore to fetch.
         */
        where: ReadinessScoreWhereUniqueInput;
    };

    /**
     * ReadinessScore findFirst
     */
    export type ReadinessScoreFindFirstArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter, which ReadinessScore to fetch.
         */
        where?: ReadinessScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ReadinessScores to fetch.
         */
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ReadinessScores.
         */
        cursor?: ReadinessScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ReadinessScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ReadinessScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ReadinessScores.
         */
        distinct?: ReadinessScoreScalarFieldEnum | ReadinessScoreScalarFieldEnum[];
    };

    /**
     * ReadinessScore findFirstOrThrow
     */
    export type ReadinessScoreFindFirstOrThrowArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter, which ReadinessScore to fetch.
         */
        where?: ReadinessScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ReadinessScores to fetch.
         */
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for searching for ReadinessScores.
         */
        cursor?: ReadinessScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ReadinessScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ReadinessScores.
         */
        skip?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
         *
         * Filter by unique combinations of ReadinessScores.
         */
        distinct?: ReadinessScoreScalarFieldEnum | ReadinessScoreScalarFieldEnum[];
    };

    /**
     * ReadinessScore findMany
     */
    export type ReadinessScoreFindManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter, which ReadinessScores to fetch.
         */
        where?: ReadinessScoreWhereInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
         *
         * Determine the order of ReadinessScores to fetch.
         */
        orderBy?: ReadinessScoreOrderByWithRelationInput | ReadinessScoreOrderByWithRelationInput[];
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
         *
         * Sets the position for listing ReadinessScores.
         */
        cursor?: ReadinessScoreWhereUniqueInput;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Take `±n` ReadinessScores from the position of the cursor.
         */
        take?: number;
        /**
         * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
         *
         * Skip the first `n` ReadinessScores.
         */
        skip?: number;
        distinct?: ReadinessScoreScalarFieldEnum | ReadinessScoreScalarFieldEnum[];
    };

    /**
     * ReadinessScore create
     */
    export type ReadinessScoreCreateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * The data needed to create a ReadinessScore.
         */
        data: XOR<ReadinessScoreCreateInput, ReadinessScoreUncheckedCreateInput>;
    };

    /**
     * ReadinessScore createMany
     */
    export type ReadinessScoreCreateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to create many ReadinessScores.
         */
        data: ReadinessScoreCreateManyInput | ReadinessScoreCreateManyInput[];
        skipDuplicates?: boolean;
    };

    /**
     * ReadinessScore createManyAndReturn
     */
    export type ReadinessScoreCreateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelectCreateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * The data used to create many ReadinessScores.
         */
        data: ReadinessScoreCreateManyInput | ReadinessScoreCreateManyInput[];
        skipDuplicates?: boolean;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreIncludeCreateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ReadinessScore update
     */
    export type ReadinessScoreUpdateArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * The data needed to update a ReadinessScore.
         */
        data: XOR<ReadinessScoreUpdateInput, ReadinessScoreUncheckedUpdateInput>;
        /**
         * Choose, which ReadinessScore to update.
         */
        where: ReadinessScoreWhereUniqueInput;
    };

    /**
     * ReadinessScore updateMany
     */
    export type ReadinessScoreUpdateManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * The data used to update ReadinessScores.
         */
        data: XOR<ReadinessScoreUpdateManyMutationInput, ReadinessScoreUncheckedUpdateManyInput>;
        /**
         * Filter which ReadinessScores to update
         */
        where?: ReadinessScoreWhereInput;
        /**
         * Limit how many ReadinessScores to update.
         */
        limit?: number;
    };

    /**
     * ReadinessScore updateManyAndReturn
     */
    export type ReadinessScoreUpdateManyAndReturnArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelectUpdateManyAndReturn<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * The data used to update ReadinessScores.
         */
        data: XOR<ReadinessScoreUpdateManyMutationInput, ReadinessScoreUncheckedUpdateManyInput>;
        /**
         * Filter which ReadinessScores to update
         */
        where?: ReadinessScoreWhereInput;
        /**
         * Limit how many ReadinessScores to update.
         */
        limit?: number;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
    };

    /**
     * ReadinessScore upsert
     */
    export type ReadinessScoreUpsertArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * The filter to search for the ReadinessScore to update in case it exists.
         */
        where: ReadinessScoreWhereUniqueInput;
        /**
         * In case the ReadinessScore found by the `where` argument doesn't exist, create a new ReadinessScore with this data.
         */
        create: XOR<ReadinessScoreCreateInput, ReadinessScoreUncheckedCreateInput>;
        /**
         * In case the ReadinessScore was found with the provided `where` argument, update it with this data.
         */
        update: XOR<ReadinessScoreUpdateInput, ReadinessScoreUncheckedUpdateInput>;
    };

    /**
     * ReadinessScore delete
     */
    export type ReadinessScoreDeleteArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
        /**
         * Filter which ReadinessScore to delete.
         */
        where: ReadinessScoreWhereUniqueInput;
    };

    /**
     * ReadinessScore deleteMany
     */
    export type ReadinessScoreDeleteManyArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Filter which ReadinessScores to delete
         */
        where?: ReadinessScoreWhereInput;
        /**
         * Limit how many ReadinessScores to delete.
         */
        limit?: number;
    };

    /**
     * ReadinessScore without action
     */
    export type ReadinessScoreDefaultArgs<
        ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    > = {
        /**
         * Select specific fields to fetch from the ReadinessScore
         */
        select?: ReadinessScoreSelect<ExtArgs> | null;
        /**
         * Omit specific fields from the ReadinessScore
         */
        omit?: ReadinessScoreOmit<ExtArgs> | null;
        /**
         * Choose, which related nodes to fetch as well
         */
        include?: ReadinessScoreInclude<ExtArgs> | null;
    };

    /**
     * Enums
     */

    export const TransactionIsolationLevel: {
        ReadUncommitted: "ReadUncommitted";
        ReadCommitted: "ReadCommitted";
        RepeatableRead: "RepeatableRead";
        Serializable: "Serializable";
    };

    export type TransactionIsolationLevel =
        (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

    export const GrantOpportunityScalarFieldEnum: {
        id: "id";
        organizationId: "organizationId";
        funderName: "funderName";
        focusArea: "focusArea";
        deadline: "deadline";
        amountUsd: "amountUsd";
        eligibility: "eligibility";
        attachmentsRequired: "attachmentsRequired";
        applicationFormat: "applicationFormat";
        funderProfileUrl: "funderProfileUrl";
        recipGsProfileLink: "recipGsProfileLink";
        source: "source";
        internalSourceId: "internalSourceId";
        grantType: "grantType";
        createdAt: "createdAt";
    };

    export type GrantOpportunityScalarFieldEnum =
        (typeof GrantOpportunityScalarFieldEnum)[keyof typeof GrantOpportunityScalarFieldEnum];

    export const InternalGrantSourceScalarFieldEnum: {
        id: "id";
        organizationId: "organizationId";
        opportunityText: "opportunityText";
        opportunityUrl: "opportunityUrl";
        opportunityPdf: "opportunityPdf";
        createdAt: "createdAt";
    };

    export type InternalGrantSourceScalarFieldEnum =
        (typeof InternalGrantSourceScalarFieldEnum)[keyof typeof InternalGrantSourceScalarFieldEnum];

    export const LetterOfIntentScalarFieldEnum: {
        id: "id";
        organizationId: "organizationId";
        grantId: "grantId";
        introduction: "introduction";
        organizationalSummary: "organizationalSummary";
        projectOverview: "projectOverview";
        fundingRequest: "fundingRequest";
        closingStatement: "closingStatement";
        createdAt: "createdAt";
    };

    export type LetterOfIntentScalarFieldEnum =
        (typeof LetterOfIntentScalarFieldEnum)[keyof typeof LetterOfIntentScalarFieldEnum];

    export const OrganizationScalarFieldEnum: {
        id: "id";
        organizationName: "organizationName";
        organizationWebsite: "organizationWebsite";
        missionStatement: "missionStatement";
        refinedMissionStatement: "refinedMissionStatement";
        corePurpose: "corePurpose";
        typeOfWork: "typeOfWork";
        goalsAspirations: "goalsAspirations";
        programs: "programs";
        achievements: "achievements";
        budget: "budget";
        evaluation: "evaluation";
        noOfGrants: "noOfGrants";
        sharedLink: "sharedLink";
        isGrant: "isGrant";
        createdAt: "createdAt";
    };

    export type OrganizationScalarFieldEnum =
        (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

    export const ProposalDraftScalarFieldEnum: {
        id: "id";
        organizationId: "organizationId";
        grantId: "grantId";
        executiveSummary: "executiveSummary";
        introductionToOrganization: "introductionToOrganization";
        problemStatement: "problemStatement";
        goalsAndObjectives: "goalsAndObjectives";
        methodsAndActivities: "methodsAndActivities";
        evaluationPlan: "evaluationPlan";
        sustainabilityPlan: "sustainabilityPlan";
        budgetSummary: "budgetSummary";
        conclusion: "conclusion";
        status: "status";
        createdAt: "createdAt";
    };

    export type ProposalDraftScalarFieldEnum =
        (typeof ProposalDraftScalarFieldEnum)[keyof typeof ProposalDraftScalarFieldEnum];

    export const ReadinessScoreScalarFieldEnum: {
        id: "id";
        organizationId: "organizationId";
        grantId: "grantId";
        readinessScore: "readinessScore";
        strengths: "strengths";
        improvementAreas: "improvementAreas";
        createdAt: "createdAt";
    };

    export type ReadinessScoreScalarFieldEnum =
        (typeof ReadinessScoreScalarFieldEnum)[keyof typeof ReadinessScoreScalarFieldEnum];

    export const SortOrder: {
        asc: "asc";
        desc: "desc";
    };

    export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

    export const QueryMode: {
        default: "default";
        insensitive: "insensitive";
    };

    export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

    export const NullsOrder: {
        first: "first";
        last: "last";
    };

    export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

    /**
     * Field references
     */

    /**
     * Reference to a field of type 'String'
     */
    export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String">;

    /**
     * Reference to a field of type 'String[]'
     */
    export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "String[]">;

    /**
     * Reference to a field of type 'DateTime'
     */
    export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "DateTime">;

    /**
     * Reference to a field of type 'DateTime[]'
     */
    export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "DateTime[]"
    >;

    /**
     * Reference to a field of type 'Decimal'
     */
    export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Decimal">;

    /**
     * Reference to a field of type 'Decimal[]'
     */
    export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
        $PrismaModel,
        "Decimal[]"
    >;

    /**
     * Reference to a field of type 'Int'
     */
    export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int">;

    /**
     * Reference to a field of type 'Int[]'
     */
    export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Int[]">;

    /**
     * Reference to a field of type 'Boolean'
     */
    export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Boolean">;

    /**
     * Reference to a field of type 'Float'
     */
    export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float">;

    /**
     * Reference to a field of type 'Float[]'
     */
    export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, "Float[]">;

    /**
     * Deep Input Types
     */

    export type GrantOpportunityWhereInput = {
        AND?: GrantOpportunityWhereInput | GrantOpportunityWhereInput[];
        OR?: GrantOpportunityWhereInput[];
        NOT?: GrantOpportunityWhereInput | GrantOpportunityWhereInput[];
        id?: UuidFilter<"GrantOpportunity"> | string;
        organizationId?: UuidFilter<"GrantOpportunity"> | string;
        funderName?: StringFilter<"GrantOpportunity"> | string;
        focusArea?: StringNullableFilter<"GrantOpportunity"> | string | null;
        deadline?: DateTimeNullableFilter<"GrantOpportunity"> | Date | string | null;
        amountUsd?:
            | DecimalNullableFilter<"GrantOpportunity">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: StringNullableFilter<"GrantOpportunity"> | string | null;
        attachmentsRequired?: StringNullableFilter<"GrantOpportunity"> | string | null;
        applicationFormat?: StringNullableFilter<"GrantOpportunity"> | string | null;
        funderProfileUrl?: StringNullableFilter<"GrantOpportunity"> | string | null;
        recipGsProfileLink?: StringNullableFilter<"GrantOpportunity"> | string | null;
        source?: StringNullableFilter<"GrantOpportunity"> | string | null;
        internalSourceId?: UuidNullableFilter<"GrantOpportunity"> | string | null;
        grantType?: StringNullableFilter<"GrantOpportunity"> | string | null;
        createdAt?: DateTimeFilter<"GrantOpportunity"> | Date | string;
        organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
        internalSource?: XOR<
            InternalGrantSourceNullableScalarRelationFilter,
            InternalGrantSourceWhereInput
        > | null;
        readinessScores?: ReadinessScoreListRelationFilter;
        lettersOfIntent?: LetterOfIntentListRelationFilter;
        proposalDrafts?: ProposalDraftListRelationFilter;
    };

    export type GrantOpportunityOrderByWithRelationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        funderName?: SortOrder;
        focusArea?: SortOrderInput | SortOrder;
        deadline?: SortOrderInput | SortOrder;
        amountUsd?: SortOrderInput | SortOrder;
        eligibility?: SortOrderInput | SortOrder;
        attachmentsRequired?: SortOrderInput | SortOrder;
        applicationFormat?: SortOrderInput | SortOrder;
        funderProfileUrl?: SortOrderInput | SortOrder;
        recipGsProfileLink?: SortOrderInput | SortOrder;
        source?: SortOrderInput | SortOrder;
        internalSourceId?: SortOrderInput | SortOrder;
        grantType?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        organization?: OrganizationOrderByWithRelationInput;
        internalSource?: InternalGrantSourceOrderByWithRelationInput;
        readinessScores?: ReadinessScoreOrderByRelationAggregateInput;
        lettersOfIntent?: LetterOfIntentOrderByRelationAggregateInput;
        proposalDrafts?: ProposalDraftOrderByRelationAggregateInput;
    };

    export type GrantOpportunityWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: GrantOpportunityWhereInput | GrantOpportunityWhereInput[];
            OR?: GrantOpportunityWhereInput[];
            NOT?: GrantOpportunityWhereInput | GrantOpportunityWhereInput[];
            organizationId?: UuidFilter<"GrantOpportunity"> | string;
            funderName?: StringFilter<"GrantOpportunity"> | string;
            focusArea?: StringNullableFilter<"GrantOpportunity"> | string | null;
            deadline?: DateTimeNullableFilter<"GrantOpportunity"> | Date | string | null;
            amountUsd?:
                | DecimalNullableFilter<"GrantOpportunity">
                | Decimal
                | DecimalJsLike
                | number
                | string
                | null;
            eligibility?: StringNullableFilter<"GrantOpportunity"> | string | null;
            attachmentsRequired?: StringNullableFilter<"GrantOpportunity"> | string | null;
            applicationFormat?: StringNullableFilter<"GrantOpportunity"> | string | null;
            funderProfileUrl?: StringNullableFilter<"GrantOpportunity"> | string | null;
            recipGsProfileLink?: StringNullableFilter<"GrantOpportunity"> | string | null;
            source?: StringNullableFilter<"GrantOpportunity"> | string | null;
            internalSourceId?: UuidNullableFilter<"GrantOpportunity"> | string | null;
            grantType?: StringNullableFilter<"GrantOpportunity"> | string | null;
            createdAt?: DateTimeFilter<"GrantOpportunity"> | Date | string;
            organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
            internalSource?: XOR<
                InternalGrantSourceNullableScalarRelationFilter,
                InternalGrantSourceWhereInput
            > | null;
            readinessScores?: ReadinessScoreListRelationFilter;
            lettersOfIntent?: LetterOfIntentListRelationFilter;
            proposalDrafts?: ProposalDraftListRelationFilter;
        },
        "id"
    >;

    export type GrantOpportunityOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        funderName?: SortOrder;
        focusArea?: SortOrderInput | SortOrder;
        deadline?: SortOrderInput | SortOrder;
        amountUsd?: SortOrderInput | SortOrder;
        eligibility?: SortOrderInput | SortOrder;
        attachmentsRequired?: SortOrderInput | SortOrder;
        applicationFormat?: SortOrderInput | SortOrder;
        funderProfileUrl?: SortOrderInput | SortOrder;
        recipGsProfileLink?: SortOrderInput | SortOrder;
        source?: SortOrderInput | SortOrder;
        internalSourceId?: SortOrderInput | SortOrder;
        grantType?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: GrantOpportunityCountOrderByAggregateInput;
        _avg?: GrantOpportunityAvgOrderByAggregateInput;
        _max?: GrantOpportunityMaxOrderByAggregateInput;
        _min?: GrantOpportunityMinOrderByAggregateInput;
        _sum?: GrantOpportunitySumOrderByAggregateInput;
    };

    export type GrantOpportunityScalarWhereWithAggregatesInput = {
        AND?:
            | GrantOpportunityScalarWhereWithAggregatesInput
            | GrantOpportunityScalarWhereWithAggregatesInput[];
        OR?: GrantOpportunityScalarWhereWithAggregatesInput[];
        NOT?:
            | GrantOpportunityScalarWhereWithAggregatesInput
            | GrantOpportunityScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"GrantOpportunity"> | string;
        organizationId?: UuidWithAggregatesFilter<"GrantOpportunity"> | string;
        funderName?: StringWithAggregatesFilter<"GrantOpportunity"> | string;
        focusArea?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        deadline?: DateTimeNullableWithAggregatesFilter<"GrantOpportunity"> | Date | string | null;
        amountUsd?:
            | DecimalNullableWithAggregatesFilter<"GrantOpportunity">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        attachmentsRequired?:
            | StringNullableWithAggregatesFilter<"GrantOpportunity">
            | string
            | null;
        applicationFormat?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        funderProfileUrl?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        recipGsProfileLink?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        source?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        internalSourceId?: UuidNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        grantType?: StringNullableWithAggregatesFilter<"GrantOpportunity"> | string | null;
        createdAt?: DateTimeWithAggregatesFilter<"GrantOpportunity"> | Date | string;
    };

    export type InternalGrantSourceWhereInput = {
        AND?: InternalGrantSourceWhereInput | InternalGrantSourceWhereInput[];
        OR?: InternalGrantSourceWhereInput[];
        NOT?: InternalGrantSourceWhereInput | InternalGrantSourceWhereInput[];
        id?: UuidFilter<"InternalGrantSource"> | string;
        organizationId?: UuidFilter<"InternalGrantSource"> | string;
        opportunityText?: StringNullableFilter<"InternalGrantSource"> | string | null;
        opportunityUrl?: StringNullableFilter<"InternalGrantSource"> | string | null;
        opportunityPdf?: StringNullableFilter<"InternalGrantSource"> | string | null;
        createdAt?: DateTimeFilter<"InternalGrantSource"> | Date | string;
        organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
        grantOpportunities?: GrantOpportunityListRelationFilter;
    };

    export type InternalGrantSourceOrderByWithRelationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        opportunityText?: SortOrderInput | SortOrder;
        opportunityUrl?: SortOrderInput | SortOrder;
        opportunityPdf?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        organization?: OrganizationOrderByWithRelationInput;
        grantOpportunities?: GrantOpportunityOrderByRelationAggregateInput;
    };

    export type InternalGrantSourceWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: InternalGrantSourceWhereInput | InternalGrantSourceWhereInput[];
            OR?: InternalGrantSourceWhereInput[];
            NOT?: InternalGrantSourceWhereInput | InternalGrantSourceWhereInput[];
            organizationId?: UuidFilter<"InternalGrantSource"> | string;
            opportunityText?: StringNullableFilter<"InternalGrantSource"> | string | null;
            opportunityUrl?: StringNullableFilter<"InternalGrantSource"> | string | null;
            opportunityPdf?: StringNullableFilter<"InternalGrantSource"> | string | null;
            createdAt?: DateTimeFilter<"InternalGrantSource"> | Date | string;
            organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
            grantOpportunities?: GrantOpportunityListRelationFilter;
        },
        "id"
    >;

    export type InternalGrantSourceOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        opportunityText?: SortOrderInput | SortOrder;
        opportunityUrl?: SortOrderInput | SortOrder;
        opportunityPdf?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: InternalGrantSourceCountOrderByAggregateInput;
        _max?: InternalGrantSourceMaxOrderByAggregateInput;
        _min?: InternalGrantSourceMinOrderByAggregateInput;
    };

    export type InternalGrantSourceScalarWhereWithAggregatesInput = {
        AND?:
            | InternalGrantSourceScalarWhereWithAggregatesInput
            | InternalGrantSourceScalarWhereWithAggregatesInput[];
        OR?: InternalGrantSourceScalarWhereWithAggregatesInput[];
        NOT?:
            | InternalGrantSourceScalarWhereWithAggregatesInput
            | InternalGrantSourceScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"InternalGrantSource"> | string;
        organizationId?: UuidWithAggregatesFilter<"InternalGrantSource"> | string;
        opportunityText?: StringNullableWithAggregatesFilter<"InternalGrantSource"> | string | null;
        opportunityUrl?: StringNullableWithAggregatesFilter<"InternalGrantSource"> | string | null;
        opportunityPdf?: StringNullableWithAggregatesFilter<"InternalGrantSource"> | string | null;
        createdAt?: DateTimeWithAggregatesFilter<"InternalGrantSource"> | Date | string;
    };

    export type LetterOfIntentWhereInput = {
        AND?: LetterOfIntentWhereInput | LetterOfIntentWhereInput[];
        OR?: LetterOfIntentWhereInput[];
        NOT?: LetterOfIntentWhereInput | LetterOfIntentWhereInput[];
        id?: UuidFilter<"LetterOfIntent"> | string;
        organizationId?: UuidFilter<"LetterOfIntent"> | string;
        grantId?: UuidFilter<"LetterOfIntent"> | string;
        introduction?: StringNullableFilter<"LetterOfIntent"> | string | null;
        organizationalSummary?: StringNullableFilter<"LetterOfIntent"> | string | null;
        projectOverview?: StringNullableFilter<"LetterOfIntent"> | string | null;
        fundingRequest?:
            | DecimalNullableFilter<"LetterOfIntent">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: StringNullableFilter<"LetterOfIntent"> | string | null;
        createdAt?: DateTimeFilter<"LetterOfIntent"> | Date | string;
        organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
        grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
    };

    export type LetterOfIntentOrderByWithRelationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        introduction?: SortOrderInput | SortOrder;
        organizationalSummary?: SortOrderInput | SortOrder;
        projectOverview?: SortOrderInput | SortOrder;
        fundingRequest?: SortOrderInput | SortOrder;
        closingStatement?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        organization?: OrganizationOrderByWithRelationInput;
        grant?: GrantOpportunityOrderByWithRelationInput;
    };

    export type LetterOfIntentWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: LetterOfIntentWhereInput | LetterOfIntentWhereInput[];
            OR?: LetterOfIntentWhereInput[];
            NOT?: LetterOfIntentWhereInput | LetterOfIntentWhereInput[];
            organizationId?: UuidFilter<"LetterOfIntent"> | string;
            grantId?: UuidFilter<"LetterOfIntent"> | string;
            introduction?: StringNullableFilter<"LetterOfIntent"> | string | null;
            organizationalSummary?: StringNullableFilter<"LetterOfIntent"> | string | null;
            projectOverview?: StringNullableFilter<"LetterOfIntent"> | string | null;
            fundingRequest?:
                | DecimalNullableFilter<"LetterOfIntent">
                | Decimal
                | DecimalJsLike
                | number
                | string
                | null;
            closingStatement?: StringNullableFilter<"LetterOfIntent"> | string | null;
            createdAt?: DateTimeFilter<"LetterOfIntent"> | Date | string;
            organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
            grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
        },
        "id"
    >;

    export type LetterOfIntentOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        introduction?: SortOrderInput | SortOrder;
        organizationalSummary?: SortOrderInput | SortOrder;
        projectOverview?: SortOrderInput | SortOrder;
        fundingRequest?: SortOrderInput | SortOrder;
        closingStatement?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: LetterOfIntentCountOrderByAggregateInput;
        _avg?: LetterOfIntentAvgOrderByAggregateInput;
        _max?: LetterOfIntentMaxOrderByAggregateInput;
        _min?: LetterOfIntentMinOrderByAggregateInput;
        _sum?: LetterOfIntentSumOrderByAggregateInput;
    };

    export type LetterOfIntentScalarWhereWithAggregatesInput = {
        AND?:
            | LetterOfIntentScalarWhereWithAggregatesInput
            | LetterOfIntentScalarWhereWithAggregatesInput[];
        OR?: LetterOfIntentScalarWhereWithAggregatesInput[];
        NOT?:
            | LetterOfIntentScalarWhereWithAggregatesInput
            | LetterOfIntentScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"LetterOfIntent"> | string;
        organizationId?: UuidWithAggregatesFilter<"LetterOfIntent"> | string;
        grantId?: UuidWithAggregatesFilter<"LetterOfIntent"> | string;
        introduction?: StringNullableWithAggregatesFilter<"LetterOfIntent"> | string | null;
        organizationalSummary?:
            | StringNullableWithAggregatesFilter<"LetterOfIntent">
            | string
            | null;
        projectOverview?: StringNullableWithAggregatesFilter<"LetterOfIntent"> | string | null;
        fundingRequest?:
            | DecimalNullableWithAggregatesFilter<"LetterOfIntent">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: StringNullableWithAggregatesFilter<"LetterOfIntent"> | string | null;
        createdAt?: DateTimeWithAggregatesFilter<"LetterOfIntent"> | Date | string;
    };

    export type OrganizationWhereInput = {
        AND?: OrganizationWhereInput | OrganizationWhereInput[];
        OR?: OrganizationWhereInput[];
        NOT?: OrganizationWhereInput | OrganizationWhereInput[];
        id?: UuidFilter<"Organization"> | string;
        organizationName?: StringFilter<"Organization"> | string;
        organizationWebsite?: StringNullableFilter<"Organization"> | string | null;
        missionStatement?: StringNullableFilter<"Organization"> | string | null;
        refinedMissionStatement?: StringNullableFilter<"Organization"> | string | null;
        corePurpose?: StringNullableFilter<"Organization"> | string | null;
        typeOfWork?: StringNullableFilter<"Organization"> | string | null;
        goalsAspirations?: StringNullableFilter<"Organization"> | string | null;
        programs?: StringNullableFilter<"Organization"> | string | null;
        achievements?: StringNullableFilter<"Organization"> | string | null;
        budget?: StringNullableFilter<"Organization"> | string | null;
        evaluation?: StringNullableFilter<"Organization"> | string | null;
        noOfGrants?: IntNullableFilter<"Organization"> | number | null;
        sharedLink?: StringNullableFilter<"Organization"> | string | null;
        isGrant?: BoolFilter<"Organization"> | boolean;
        createdAt?: DateTimeFilter<"Organization"> | Date | string;
        grantOpportunities?: GrantOpportunityListRelationFilter;
        internalGrantSources?: InternalGrantSourceListRelationFilter;
        readinessScores?: ReadinessScoreListRelationFilter;
        lettersOfIntent?: LetterOfIntentListRelationFilter;
        proposalDrafts?: ProposalDraftListRelationFilter;
    };

    export type OrganizationOrderByWithRelationInput = {
        id?: SortOrder;
        organizationName?: SortOrder;
        organizationWebsite?: SortOrderInput | SortOrder;
        missionStatement?: SortOrderInput | SortOrder;
        refinedMissionStatement?: SortOrderInput | SortOrder;
        corePurpose?: SortOrderInput | SortOrder;
        typeOfWork?: SortOrderInput | SortOrder;
        goalsAspirations?: SortOrderInput | SortOrder;
        programs?: SortOrderInput | SortOrder;
        achievements?: SortOrderInput | SortOrder;
        budget?: SortOrderInput | SortOrder;
        evaluation?: SortOrderInput | SortOrder;
        noOfGrants?: SortOrderInput | SortOrder;
        sharedLink?: SortOrderInput | SortOrder;
        isGrant?: SortOrder;
        createdAt?: SortOrder;
        grantOpportunities?: GrantOpportunityOrderByRelationAggregateInput;
        internalGrantSources?: InternalGrantSourceOrderByRelationAggregateInput;
        readinessScores?: ReadinessScoreOrderByRelationAggregateInput;
        lettersOfIntent?: LetterOfIntentOrderByRelationAggregateInput;
        proposalDrafts?: ProposalDraftOrderByRelationAggregateInput;
    };

    export type OrganizationWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: OrganizationWhereInput | OrganizationWhereInput[];
            OR?: OrganizationWhereInput[];
            NOT?: OrganizationWhereInput | OrganizationWhereInput[];
            organizationName?: StringFilter<"Organization"> | string;
            organizationWebsite?: StringNullableFilter<"Organization"> | string | null;
            missionStatement?: StringNullableFilter<"Organization"> | string | null;
            refinedMissionStatement?: StringNullableFilter<"Organization"> | string | null;
            corePurpose?: StringNullableFilter<"Organization"> | string | null;
            typeOfWork?: StringNullableFilter<"Organization"> | string | null;
            goalsAspirations?: StringNullableFilter<"Organization"> | string | null;
            programs?: StringNullableFilter<"Organization"> | string | null;
            achievements?: StringNullableFilter<"Organization"> | string | null;
            budget?: StringNullableFilter<"Organization"> | string | null;
            evaluation?: StringNullableFilter<"Organization"> | string | null;
            noOfGrants?: IntNullableFilter<"Organization"> | number | null;
            sharedLink?: StringNullableFilter<"Organization"> | string | null;
            isGrant?: BoolFilter<"Organization"> | boolean;
            createdAt?: DateTimeFilter<"Organization"> | Date | string;
            grantOpportunities?: GrantOpportunityListRelationFilter;
            internalGrantSources?: InternalGrantSourceListRelationFilter;
            readinessScores?: ReadinessScoreListRelationFilter;
            lettersOfIntent?: LetterOfIntentListRelationFilter;
            proposalDrafts?: ProposalDraftListRelationFilter;
        },
        "id"
    >;

    export type OrganizationOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationName?: SortOrder;
        organizationWebsite?: SortOrderInput | SortOrder;
        missionStatement?: SortOrderInput | SortOrder;
        refinedMissionStatement?: SortOrderInput | SortOrder;
        corePurpose?: SortOrderInput | SortOrder;
        typeOfWork?: SortOrderInput | SortOrder;
        goalsAspirations?: SortOrderInput | SortOrder;
        programs?: SortOrderInput | SortOrder;
        achievements?: SortOrderInput | SortOrder;
        budget?: SortOrderInput | SortOrder;
        evaluation?: SortOrderInput | SortOrder;
        noOfGrants?: SortOrderInput | SortOrder;
        sharedLink?: SortOrderInput | SortOrder;
        isGrant?: SortOrder;
        createdAt?: SortOrder;
        _count?: OrganizationCountOrderByAggregateInput;
        _avg?: OrganizationAvgOrderByAggregateInput;
        _max?: OrganizationMaxOrderByAggregateInput;
        _min?: OrganizationMinOrderByAggregateInput;
        _sum?: OrganizationSumOrderByAggregateInput;
    };

    export type OrganizationScalarWhereWithAggregatesInput = {
        AND?:
            | OrganizationScalarWhereWithAggregatesInput
            | OrganizationScalarWhereWithAggregatesInput[];
        OR?: OrganizationScalarWhereWithAggregatesInput[];
        NOT?:
            | OrganizationScalarWhereWithAggregatesInput
            | OrganizationScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"Organization"> | string;
        organizationName?: StringWithAggregatesFilter<"Organization"> | string;
        organizationWebsite?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        missionStatement?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        refinedMissionStatement?:
            | StringNullableWithAggregatesFilter<"Organization">
            | string
            | null;
        corePurpose?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        typeOfWork?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        goalsAspirations?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        programs?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        achievements?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        budget?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        evaluation?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        noOfGrants?: IntNullableWithAggregatesFilter<"Organization"> | number | null;
        sharedLink?: StringNullableWithAggregatesFilter<"Organization"> | string | null;
        isGrant?: BoolWithAggregatesFilter<"Organization"> | boolean;
        createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    };

    export type ProposalDraftWhereInput = {
        AND?: ProposalDraftWhereInput | ProposalDraftWhereInput[];
        OR?: ProposalDraftWhereInput[];
        NOT?: ProposalDraftWhereInput | ProposalDraftWhereInput[];
        id?: UuidFilter<"ProposalDraft"> | string;
        organizationId?: UuidFilter<"ProposalDraft"> | string;
        grantId?: UuidFilter<"ProposalDraft"> | string;
        executiveSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
        introductionToOrganization?: StringNullableFilter<"ProposalDraft"> | string | null;
        problemStatement?: StringNullableFilter<"ProposalDraft"> | string | null;
        goalsAndObjectives?: StringNullableFilter<"ProposalDraft"> | string | null;
        methodsAndActivities?: StringNullableFilter<"ProposalDraft"> | string | null;
        evaluationPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
        sustainabilityPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
        budgetSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
        conclusion?: StringNullableFilter<"ProposalDraft"> | string | null;
        status?: BoolFilter<"ProposalDraft"> | boolean;
        createdAt?: DateTimeFilter<"ProposalDraft"> | Date | string;
        organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
        grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
    };

    export type ProposalDraftOrderByWithRelationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        executiveSummary?: SortOrderInput | SortOrder;
        introductionToOrganization?: SortOrderInput | SortOrder;
        problemStatement?: SortOrderInput | SortOrder;
        goalsAndObjectives?: SortOrderInput | SortOrder;
        methodsAndActivities?: SortOrderInput | SortOrder;
        evaluationPlan?: SortOrderInput | SortOrder;
        sustainabilityPlan?: SortOrderInput | SortOrder;
        budgetSummary?: SortOrderInput | SortOrder;
        conclusion?: SortOrderInput | SortOrder;
        status?: SortOrder;
        createdAt?: SortOrder;
        organization?: OrganizationOrderByWithRelationInput;
        grant?: GrantOpportunityOrderByWithRelationInput;
    };

    export type ProposalDraftWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: ProposalDraftWhereInput | ProposalDraftWhereInput[];
            OR?: ProposalDraftWhereInput[];
            NOT?: ProposalDraftWhereInput | ProposalDraftWhereInput[];
            organizationId?: UuidFilter<"ProposalDraft"> | string;
            grantId?: UuidFilter<"ProposalDraft"> | string;
            executiveSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
            introductionToOrganization?: StringNullableFilter<"ProposalDraft"> | string | null;
            problemStatement?: StringNullableFilter<"ProposalDraft"> | string | null;
            goalsAndObjectives?: StringNullableFilter<"ProposalDraft"> | string | null;
            methodsAndActivities?: StringNullableFilter<"ProposalDraft"> | string | null;
            evaluationPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
            sustainabilityPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
            budgetSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
            conclusion?: StringNullableFilter<"ProposalDraft"> | string | null;
            status?: BoolFilter<"ProposalDraft"> | boolean;
            createdAt?: DateTimeFilter<"ProposalDraft"> | Date | string;
            organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
            grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
        },
        "id"
    >;

    export type ProposalDraftOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        executiveSummary?: SortOrderInput | SortOrder;
        introductionToOrganization?: SortOrderInput | SortOrder;
        problemStatement?: SortOrderInput | SortOrder;
        goalsAndObjectives?: SortOrderInput | SortOrder;
        methodsAndActivities?: SortOrderInput | SortOrder;
        evaluationPlan?: SortOrderInput | SortOrder;
        sustainabilityPlan?: SortOrderInput | SortOrder;
        budgetSummary?: SortOrderInput | SortOrder;
        conclusion?: SortOrderInput | SortOrder;
        status?: SortOrder;
        createdAt?: SortOrder;
        _count?: ProposalDraftCountOrderByAggregateInput;
        _max?: ProposalDraftMaxOrderByAggregateInput;
        _min?: ProposalDraftMinOrderByAggregateInput;
    };

    export type ProposalDraftScalarWhereWithAggregatesInput = {
        AND?:
            | ProposalDraftScalarWhereWithAggregatesInput
            | ProposalDraftScalarWhereWithAggregatesInput[];
        OR?: ProposalDraftScalarWhereWithAggregatesInput[];
        NOT?:
            | ProposalDraftScalarWhereWithAggregatesInput
            | ProposalDraftScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"ProposalDraft"> | string;
        organizationId?: UuidWithAggregatesFilter<"ProposalDraft"> | string;
        grantId?: UuidWithAggregatesFilter<"ProposalDraft"> | string;
        executiveSummary?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        introductionToOrganization?:
            | StringNullableWithAggregatesFilter<"ProposalDraft">
            | string
            | null;
        problemStatement?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        goalsAndObjectives?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        methodsAndActivities?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        evaluationPlan?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        sustainabilityPlan?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        budgetSummary?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        conclusion?: StringNullableWithAggregatesFilter<"ProposalDraft"> | string | null;
        status?: BoolWithAggregatesFilter<"ProposalDraft"> | boolean;
        createdAt?: DateTimeWithAggregatesFilter<"ProposalDraft"> | Date | string;
    };

    export type ReadinessScoreWhereInput = {
        AND?: ReadinessScoreWhereInput | ReadinessScoreWhereInput[];
        OR?: ReadinessScoreWhereInput[];
        NOT?: ReadinessScoreWhereInput | ReadinessScoreWhereInput[];
        id?: UuidFilter<"ReadinessScore"> | string;
        organizationId?: UuidFilter<"ReadinessScore"> | string;
        grantId?: UuidFilter<"ReadinessScore"> | string;
        readinessScore?: IntFilter<"ReadinessScore"> | number;
        strengths?: StringNullableFilter<"ReadinessScore"> | string | null;
        improvementAreas?: StringNullableFilter<"ReadinessScore"> | string | null;
        createdAt?: DateTimeFilter<"ReadinessScore"> | Date | string;
        organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
        grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
    };

    export type ReadinessScoreOrderByWithRelationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        readinessScore?: SortOrder;
        strengths?: SortOrderInput | SortOrder;
        improvementAreas?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        organization?: OrganizationOrderByWithRelationInput;
        grant?: GrantOpportunityOrderByWithRelationInput;
    };

    export type ReadinessScoreWhereUniqueInput = Prisma.AtLeast<
        {
            id?: string;
            AND?: ReadinessScoreWhereInput | ReadinessScoreWhereInput[];
            OR?: ReadinessScoreWhereInput[];
            NOT?: ReadinessScoreWhereInput | ReadinessScoreWhereInput[];
            organizationId?: UuidFilter<"ReadinessScore"> | string;
            grantId?: UuidFilter<"ReadinessScore"> | string;
            readinessScore?: IntFilter<"ReadinessScore"> | number;
            strengths?: StringNullableFilter<"ReadinessScore"> | string | null;
            improvementAreas?: StringNullableFilter<"ReadinessScore"> | string | null;
            createdAt?: DateTimeFilter<"ReadinessScore"> | Date | string;
            organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>;
            grant?: XOR<GrantOpportunityScalarRelationFilter, GrantOpportunityWhereInput>;
        },
        "id"
    >;

    export type ReadinessScoreOrderByWithAggregationInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        readinessScore?: SortOrder;
        strengths?: SortOrderInput | SortOrder;
        improvementAreas?: SortOrderInput | SortOrder;
        createdAt?: SortOrder;
        _count?: ReadinessScoreCountOrderByAggregateInput;
        _avg?: ReadinessScoreAvgOrderByAggregateInput;
        _max?: ReadinessScoreMaxOrderByAggregateInput;
        _min?: ReadinessScoreMinOrderByAggregateInput;
        _sum?: ReadinessScoreSumOrderByAggregateInput;
    };

    export type ReadinessScoreScalarWhereWithAggregatesInput = {
        AND?:
            | ReadinessScoreScalarWhereWithAggregatesInput
            | ReadinessScoreScalarWhereWithAggregatesInput[];
        OR?: ReadinessScoreScalarWhereWithAggregatesInput[];
        NOT?:
            | ReadinessScoreScalarWhereWithAggregatesInput
            | ReadinessScoreScalarWhereWithAggregatesInput[];
        id?: UuidWithAggregatesFilter<"ReadinessScore"> | string;
        organizationId?: UuidWithAggregatesFilter<"ReadinessScore"> | string;
        grantId?: UuidWithAggregatesFilter<"ReadinessScore"> | string;
        readinessScore?: IntWithAggregatesFilter<"ReadinessScore"> | number;
        strengths?: StringNullableWithAggregatesFilter<"ReadinessScore"> | string | null;
        improvementAreas?: StringNullableWithAggregatesFilter<"ReadinessScore"> | string | null;
        createdAt?: DateTimeWithAggregatesFilter<"ReadinessScore"> | Date | string;
    };

    export type GrantOpportunityCreateInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutGrantOpportunitiesInput;
        internalSource?: InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput;
        internalSource?: InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityCreateManyInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
    };

    export type GrantOpportunityUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type GrantOpportunityUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type InternalGrantSourceCreateInput = {
        id?: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutInternalGrantSourcesInput;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutInternalSourceInput;
    };

    export type InternalGrantSourceUncheckedCreateInput = {
        id?: string;
        organizationId: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutInternalSourceInput;
    };

    export type InternalGrantSourceUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutInternalGrantSourcesNestedInput;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutInternalSourceNestedInput;
    };

    export type InternalGrantSourceUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutInternalSourceNestedInput;
    };

    export type InternalGrantSourceCreateManyInput = {
        id?: string;
        organizationId: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
    };

    export type InternalGrantSourceUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type InternalGrantSourceUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentCreateInput = {
        id?: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutLettersOfIntentInput;
        grant: GrantOpportunityCreateNestedOneWithoutLettersOfIntentInput;
    };

    export type LetterOfIntentUncheckedCreateInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutLettersOfIntentNestedInput;
        grant?: GrantOpportunityUpdateOneRequiredWithoutLettersOfIntentNestedInput;
    };

    export type LetterOfIntentUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentCreateManyInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrganizationCreateInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationCreateManyInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
    };

    export type OrganizationUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type OrganizationUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftCreateInput = {
        id?: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutProposalDraftsInput;
        grant: GrantOpportunityCreateNestedOneWithoutProposalDraftsInput;
    };

    export type ProposalDraftUncheckedCreateInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type ProposalDraftUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutProposalDraftsNestedInput;
        grant?: GrantOpportunityUpdateOneRequiredWithoutProposalDraftsNestedInput;
    };

    export type ProposalDraftUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftCreateManyInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type ProposalDraftUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreCreateInput = {
        id?: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutReadinessScoresInput;
        grant: GrantOpportunityCreateNestedOneWithoutReadinessScoresInput;
    };

    export type ReadinessScoreUncheckedCreateInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type ReadinessScoreUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutReadinessScoresNestedInput;
        grant?: GrantOpportunityUpdateOneRequiredWithoutReadinessScoresNestedInput;
    };

    export type ReadinessScoreUncheckedUpdateInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreCreateManyInput = {
        id?: string;
        organizationId: string;
        grantId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type ReadinessScoreUpdateManyMutationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreUncheckedUpdateManyInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type UuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidFilter<$PrismaModel> | string;
    };

    export type StringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type StringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type DateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type DecimalNullableFilter<$PrismaModel = never> = {
        equals?:
            | Decimal
            | DecimalJsLike
            | number
            | string
            | DecimalFieldRefInput<$PrismaModel>
            | null;
        in?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        not?:
            | NestedDecimalNullableFilter<$PrismaModel>
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
    };

    export type UuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
    };

    export type DateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type OrganizationScalarRelationFilter = {
        is?: OrganizationWhereInput;
        isNot?: OrganizationWhereInput;
    };

    export type InternalGrantSourceNullableScalarRelationFilter = {
        is?: InternalGrantSourceWhereInput | null;
        isNot?: InternalGrantSourceWhereInput | null;
    };

    export type ReadinessScoreListRelationFilter = {
        every?: ReadinessScoreWhereInput;
        some?: ReadinessScoreWhereInput;
        none?: ReadinessScoreWhereInput;
    };

    export type LetterOfIntentListRelationFilter = {
        every?: LetterOfIntentWhereInput;
        some?: LetterOfIntentWhereInput;
        none?: LetterOfIntentWhereInput;
    };

    export type ProposalDraftListRelationFilter = {
        every?: ProposalDraftWhereInput;
        some?: ProposalDraftWhereInput;
        none?: ProposalDraftWhereInput;
    };

    export type SortOrderInput = {
        sort: SortOrder;
        nulls?: NullsOrder;
    };

    export type ReadinessScoreOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type LetterOfIntentOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type ProposalDraftOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type GrantOpportunityCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        funderName?: SortOrder;
        focusArea?: SortOrder;
        deadline?: SortOrder;
        amountUsd?: SortOrder;
        eligibility?: SortOrder;
        attachmentsRequired?: SortOrder;
        applicationFormat?: SortOrder;
        funderProfileUrl?: SortOrder;
        recipGsProfileLink?: SortOrder;
        source?: SortOrder;
        internalSourceId?: SortOrder;
        grantType?: SortOrder;
        createdAt?: SortOrder;
    };

    export type GrantOpportunityAvgOrderByAggregateInput = {
        amountUsd?: SortOrder;
    };

    export type GrantOpportunityMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        funderName?: SortOrder;
        focusArea?: SortOrder;
        deadline?: SortOrder;
        amountUsd?: SortOrder;
        eligibility?: SortOrder;
        attachmentsRequired?: SortOrder;
        applicationFormat?: SortOrder;
        funderProfileUrl?: SortOrder;
        recipGsProfileLink?: SortOrder;
        source?: SortOrder;
        internalSourceId?: SortOrder;
        grantType?: SortOrder;
        createdAt?: SortOrder;
    };

    export type GrantOpportunityMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        funderName?: SortOrder;
        focusArea?: SortOrder;
        deadline?: SortOrder;
        amountUsd?: SortOrder;
        eligibility?: SortOrder;
        attachmentsRequired?: SortOrder;
        applicationFormat?: SortOrder;
        funderProfileUrl?: SortOrder;
        recipGsProfileLink?: SortOrder;
        source?: SortOrder;
        internalSourceId?: SortOrder;
        grantType?: SortOrder;
        createdAt?: SortOrder;
    };

    export type GrantOpportunitySumOrderByAggregateInput = {
        amountUsd?: SortOrder;
    };

    export type UuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type StringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

    export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?:
            | Decimal
            | DecimalJsLike
            | number
            | string
            | DecimalFieldRefInput<$PrismaModel>
            | null;
        in?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        not?:
            | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _avg?: NestedDecimalNullableFilter<$PrismaModel>;
        _sum?: NestedDecimalNullableFilter<$PrismaModel>;
        _min?: NestedDecimalNullableFilter<$PrismaModel>;
        _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

    export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        mode?: QueryMode;
        not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type GrantOpportunityListRelationFilter = {
        every?: GrantOpportunityWhereInput;
        some?: GrantOpportunityWhereInput;
        none?: GrantOpportunityWhereInput;
    };

    export type GrantOpportunityOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type InternalGrantSourceCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        opportunityText?: SortOrder;
        opportunityUrl?: SortOrder;
        opportunityPdf?: SortOrder;
        createdAt?: SortOrder;
    };

    export type InternalGrantSourceMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        opportunityText?: SortOrder;
        opportunityUrl?: SortOrder;
        opportunityPdf?: SortOrder;
        createdAt?: SortOrder;
    };

    export type InternalGrantSourceMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        opportunityText?: SortOrder;
        opportunityUrl?: SortOrder;
        opportunityPdf?: SortOrder;
        createdAt?: SortOrder;
    };

    export type GrantOpportunityScalarRelationFilter = {
        is?: GrantOpportunityWhereInput;
        isNot?: GrantOpportunityWhereInput;
    };

    export type LetterOfIntentCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        introduction?: SortOrder;
        organizationalSummary?: SortOrder;
        projectOverview?: SortOrder;
        fundingRequest?: SortOrder;
        closingStatement?: SortOrder;
        createdAt?: SortOrder;
    };

    export type LetterOfIntentAvgOrderByAggregateInput = {
        fundingRequest?: SortOrder;
    };

    export type LetterOfIntentMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        introduction?: SortOrder;
        organizationalSummary?: SortOrder;
        projectOverview?: SortOrder;
        fundingRequest?: SortOrder;
        closingStatement?: SortOrder;
        createdAt?: SortOrder;
    };

    export type LetterOfIntentMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        introduction?: SortOrder;
        organizationalSummary?: SortOrder;
        projectOverview?: SortOrder;
        fundingRequest?: SortOrder;
        closingStatement?: SortOrder;
        createdAt?: SortOrder;
    };

    export type LetterOfIntentSumOrderByAggregateInput = {
        fundingRequest?: SortOrder;
    };

    export type IntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type BoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type InternalGrantSourceListRelationFilter = {
        every?: InternalGrantSourceWhereInput;
        some?: InternalGrantSourceWhereInput;
        none?: InternalGrantSourceWhereInput;
    };

    export type InternalGrantSourceOrderByRelationAggregateInput = {
        _count?: SortOrder;
    };

    export type OrganizationCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationName?: SortOrder;
        organizationWebsite?: SortOrder;
        missionStatement?: SortOrder;
        refinedMissionStatement?: SortOrder;
        corePurpose?: SortOrder;
        typeOfWork?: SortOrder;
        goalsAspirations?: SortOrder;
        programs?: SortOrder;
        achievements?: SortOrder;
        budget?: SortOrder;
        evaluation?: SortOrder;
        noOfGrants?: SortOrder;
        sharedLink?: SortOrder;
        isGrant?: SortOrder;
        createdAt?: SortOrder;
    };

    export type OrganizationAvgOrderByAggregateInput = {
        noOfGrants?: SortOrder;
    };

    export type OrganizationMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationName?: SortOrder;
        organizationWebsite?: SortOrder;
        missionStatement?: SortOrder;
        refinedMissionStatement?: SortOrder;
        corePurpose?: SortOrder;
        typeOfWork?: SortOrder;
        goalsAspirations?: SortOrder;
        programs?: SortOrder;
        achievements?: SortOrder;
        budget?: SortOrder;
        evaluation?: SortOrder;
        noOfGrants?: SortOrder;
        sharedLink?: SortOrder;
        isGrant?: SortOrder;
        createdAt?: SortOrder;
    };

    export type OrganizationMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationName?: SortOrder;
        organizationWebsite?: SortOrder;
        missionStatement?: SortOrder;
        refinedMissionStatement?: SortOrder;
        corePurpose?: SortOrder;
        typeOfWork?: SortOrder;
        goalsAspirations?: SortOrder;
        programs?: SortOrder;
        achievements?: SortOrder;
        budget?: SortOrder;
        evaluation?: SortOrder;
        noOfGrants?: SortOrder;
        sharedLink?: SortOrder;
        isGrant?: SortOrder;
        createdAt?: SortOrder;
    };

    export type OrganizationSumOrderByAggregateInput = {
        noOfGrants?: SortOrder;
    };

    export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _avg?: NestedFloatNullableFilter<$PrismaModel>;
        _sum?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedIntNullableFilter<$PrismaModel>;
        _max?: NestedIntNullableFilter<$PrismaModel>;
    };

    export type BoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type ProposalDraftCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        executiveSummary?: SortOrder;
        introductionToOrganization?: SortOrder;
        problemStatement?: SortOrder;
        goalsAndObjectives?: SortOrder;
        methodsAndActivities?: SortOrder;
        evaluationPlan?: SortOrder;
        sustainabilityPlan?: SortOrder;
        budgetSummary?: SortOrder;
        conclusion?: SortOrder;
        status?: SortOrder;
        createdAt?: SortOrder;
    };

    export type ProposalDraftMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        executiveSummary?: SortOrder;
        introductionToOrganization?: SortOrder;
        problemStatement?: SortOrder;
        goalsAndObjectives?: SortOrder;
        methodsAndActivities?: SortOrder;
        evaluationPlan?: SortOrder;
        sustainabilityPlan?: SortOrder;
        budgetSummary?: SortOrder;
        conclusion?: SortOrder;
        status?: SortOrder;
        createdAt?: SortOrder;
    };

    export type ProposalDraftMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        executiveSummary?: SortOrder;
        introductionToOrganization?: SortOrder;
        problemStatement?: SortOrder;
        goalsAndObjectives?: SortOrder;
        methodsAndActivities?: SortOrder;
        evaluationPlan?: SortOrder;
        sustainabilityPlan?: SortOrder;
        budgetSummary?: SortOrder;
        conclusion?: SortOrder;
        status?: SortOrder;
        createdAt?: SortOrder;
    };

    export type IntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type ReadinessScoreCountOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        readinessScore?: SortOrder;
        strengths?: SortOrder;
        improvementAreas?: SortOrder;
        createdAt?: SortOrder;
    };

    export type ReadinessScoreAvgOrderByAggregateInput = {
        readinessScore?: SortOrder;
    };

    export type ReadinessScoreMaxOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        readinessScore?: SortOrder;
        strengths?: SortOrder;
        improvementAreas?: SortOrder;
        createdAt?: SortOrder;
    };

    export type ReadinessScoreMinOrderByAggregateInput = {
        id?: SortOrder;
        organizationId?: SortOrder;
        grantId?: SortOrder;
        readinessScore?: SortOrder;
        strengths?: SortOrder;
        improvementAreas?: SortOrder;
        createdAt?: SortOrder;
    };

    export type ReadinessScoreSumOrderByAggregateInput = {
        readinessScore?: SortOrder;
    };

    export type IntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type OrganizationCreateNestedOneWithoutGrantOpportunitiesInput = {
        create?: XOR<
            OrganizationCreateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutGrantOpportunitiesInput;
        connect?: OrganizationWhereUniqueInput;
    };

    export type InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput = {
        create?: XOR<
            InternalGrantSourceCreateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        connectOrCreate?: InternalGrantSourceCreateOrConnectWithoutGrantOpportunitiesInput;
        connect?: InternalGrantSourceWhereUniqueInput;
    };

    export type ReadinessScoreCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutGrantInput,
                  ReadinessScoreUncheckedCreateWithoutGrantInput
              >
            | ReadinessScoreCreateWithoutGrantInput[]
            | ReadinessScoreUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutGrantInput
            | ReadinessScoreCreateOrConnectWithoutGrantInput[];
        createMany?: ReadinessScoreCreateManyGrantInputEnvelope;
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
    };

    export type LetterOfIntentCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutGrantInput,
                  LetterOfIntentUncheckedCreateWithoutGrantInput
              >
            | LetterOfIntentCreateWithoutGrantInput[]
            | LetterOfIntentUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutGrantInput
            | LetterOfIntentCreateOrConnectWithoutGrantInput[];
        createMany?: LetterOfIntentCreateManyGrantInputEnvelope;
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
    };

    export type ProposalDraftCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutGrantInput,
                  ProposalDraftUncheckedCreateWithoutGrantInput
              >
            | ProposalDraftCreateWithoutGrantInput[]
            | ProposalDraftUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutGrantInput
            | ProposalDraftCreateOrConnectWithoutGrantInput[];
        createMany?: ProposalDraftCreateManyGrantInputEnvelope;
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
    };

    export type ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutGrantInput,
                  ReadinessScoreUncheckedCreateWithoutGrantInput
              >
            | ReadinessScoreCreateWithoutGrantInput[]
            | ReadinessScoreUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutGrantInput
            | ReadinessScoreCreateOrConnectWithoutGrantInput[];
        createMany?: ReadinessScoreCreateManyGrantInputEnvelope;
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
    };

    export type LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutGrantInput,
                  LetterOfIntentUncheckedCreateWithoutGrantInput
              >
            | LetterOfIntentCreateWithoutGrantInput[]
            | LetterOfIntentUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutGrantInput
            | LetterOfIntentCreateOrConnectWithoutGrantInput[];
        createMany?: LetterOfIntentCreateManyGrantInputEnvelope;
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
    };

    export type ProposalDraftUncheckedCreateNestedManyWithoutGrantInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutGrantInput,
                  ProposalDraftUncheckedCreateWithoutGrantInput
              >
            | ProposalDraftCreateWithoutGrantInput[]
            | ProposalDraftUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutGrantInput
            | ProposalDraftCreateOrConnectWithoutGrantInput[];
        createMany?: ProposalDraftCreateManyGrantInputEnvelope;
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
    };

    export type StringFieldUpdateOperationsInput = {
        set?: string;
    };

    export type NullableStringFieldUpdateOperationsInput = {
        set?: string | null;
    };

    export type NullableDateTimeFieldUpdateOperationsInput = {
        set?: Date | string | null;
    };

    export type NullableDecimalFieldUpdateOperationsInput = {
        set?: Decimal | DecimalJsLike | number | string | null;
        increment?: Decimal | DecimalJsLike | number | string;
        decrement?: Decimal | DecimalJsLike | number | string;
        multiply?: Decimal | DecimalJsLike | number | string;
        divide?: Decimal | DecimalJsLike | number | string;
    };

    export type DateTimeFieldUpdateOperationsInput = {
        set?: Date | string;
    };

    export type OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput = {
        create?: XOR<
            OrganizationCreateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutGrantOpportunitiesInput;
        upsert?: OrganizationUpsertWithoutGrantOpportunitiesInput;
        connect?: OrganizationWhereUniqueInput;
        update?: XOR<
            XOR<
                OrganizationUpdateToOneWithWhereWithoutGrantOpportunitiesInput,
                OrganizationUpdateWithoutGrantOpportunitiesInput
            >,
            OrganizationUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
    };

    export type InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput = {
        create?: XOR<
            InternalGrantSourceCreateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        connectOrCreate?: InternalGrantSourceCreateOrConnectWithoutGrantOpportunitiesInput;
        upsert?: InternalGrantSourceUpsertWithoutGrantOpportunitiesInput;
        disconnect?: InternalGrantSourceWhereInput | boolean;
        delete?: InternalGrantSourceWhereInput | boolean;
        connect?: InternalGrantSourceWhereUniqueInput;
        update?: XOR<
            XOR<
                InternalGrantSourceUpdateToOneWithWhereWithoutGrantOpportunitiesInput,
                InternalGrantSourceUpdateWithoutGrantOpportunitiesInput
            >,
            InternalGrantSourceUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
    };

    export type ReadinessScoreUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutGrantInput,
                  ReadinessScoreUncheckedCreateWithoutGrantInput
              >
            | ReadinessScoreCreateWithoutGrantInput[]
            | ReadinessScoreUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutGrantInput
            | ReadinessScoreCreateOrConnectWithoutGrantInput[];
        upsert?:
            | ReadinessScoreUpsertWithWhereUniqueWithoutGrantInput
            | ReadinessScoreUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: ReadinessScoreCreateManyGrantInputEnvelope;
        set?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        disconnect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        delete?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        update?:
            | ReadinessScoreUpdateWithWhereUniqueWithoutGrantInput
            | ReadinessScoreUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | ReadinessScoreUpdateManyWithWhereWithoutGrantInput
            | ReadinessScoreUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
    };

    export type LetterOfIntentUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutGrantInput,
                  LetterOfIntentUncheckedCreateWithoutGrantInput
              >
            | LetterOfIntentCreateWithoutGrantInput[]
            | LetterOfIntentUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutGrantInput
            | LetterOfIntentCreateOrConnectWithoutGrantInput[];
        upsert?:
            | LetterOfIntentUpsertWithWhereUniqueWithoutGrantInput
            | LetterOfIntentUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: LetterOfIntentCreateManyGrantInputEnvelope;
        set?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        disconnect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        delete?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        update?:
            | LetterOfIntentUpdateWithWhereUniqueWithoutGrantInput
            | LetterOfIntentUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | LetterOfIntentUpdateManyWithWhereWithoutGrantInput
            | LetterOfIntentUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
    };

    export type ProposalDraftUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutGrantInput,
                  ProposalDraftUncheckedCreateWithoutGrantInput
              >
            | ProposalDraftCreateWithoutGrantInput[]
            | ProposalDraftUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutGrantInput
            | ProposalDraftCreateOrConnectWithoutGrantInput[];
        upsert?:
            | ProposalDraftUpsertWithWhereUniqueWithoutGrantInput
            | ProposalDraftUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: ProposalDraftCreateManyGrantInputEnvelope;
        set?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        disconnect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        delete?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        update?:
            | ProposalDraftUpdateWithWhereUniqueWithoutGrantInput
            | ProposalDraftUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | ProposalDraftUpdateManyWithWhereWithoutGrantInput
            | ProposalDraftUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
    };

    export type ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutGrantInput,
                  ReadinessScoreUncheckedCreateWithoutGrantInput
              >
            | ReadinessScoreCreateWithoutGrantInput[]
            | ReadinessScoreUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutGrantInput
            | ReadinessScoreCreateOrConnectWithoutGrantInput[];
        upsert?:
            | ReadinessScoreUpsertWithWhereUniqueWithoutGrantInput
            | ReadinessScoreUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: ReadinessScoreCreateManyGrantInputEnvelope;
        set?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        disconnect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        delete?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        update?:
            | ReadinessScoreUpdateWithWhereUniqueWithoutGrantInput
            | ReadinessScoreUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | ReadinessScoreUpdateManyWithWhereWithoutGrantInput
            | ReadinessScoreUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
    };

    export type LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutGrantInput,
                  LetterOfIntentUncheckedCreateWithoutGrantInput
              >
            | LetterOfIntentCreateWithoutGrantInput[]
            | LetterOfIntentUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutGrantInput
            | LetterOfIntentCreateOrConnectWithoutGrantInput[];
        upsert?:
            | LetterOfIntentUpsertWithWhereUniqueWithoutGrantInput
            | LetterOfIntentUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: LetterOfIntentCreateManyGrantInputEnvelope;
        set?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        disconnect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        delete?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        update?:
            | LetterOfIntentUpdateWithWhereUniqueWithoutGrantInput
            | LetterOfIntentUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | LetterOfIntentUpdateManyWithWhereWithoutGrantInput
            | LetterOfIntentUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
    };

    export type ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutGrantInput,
                  ProposalDraftUncheckedCreateWithoutGrantInput
              >
            | ProposalDraftCreateWithoutGrantInput[]
            | ProposalDraftUncheckedCreateWithoutGrantInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutGrantInput
            | ProposalDraftCreateOrConnectWithoutGrantInput[];
        upsert?:
            | ProposalDraftUpsertWithWhereUniqueWithoutGrantInput
            | ProposalDraftUpsertWithWhereUniqueWithoutGrantInput[];
        createMany?: ProposalDraftCreateManyGrantInputEnvelope;
        set?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        disconnect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        delete?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        update?:
            | ProposalDraftUpdateWithWhereUniqueWithoutGrantInput
            | ProposalDraftUpdateWithWhereUniqueWithoutGrantInput[];
        updateMany?:
            | ProposalDraftUpdateManyWithWhereWithoutGrantInput
            | ProposalDraftUpdateManyWithWhereWithoutGrantInput[];
        deleteMany?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
    };

    export type OrganizationCreateNestedOneWithoutInternalGrantSourcesInput = {
        create?: XOR<
            OrganizationCreateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedCreateWithoutInternalGrantSourcesInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutInternalGrantSourcesInput;
        connect?: OrganizationWhereUniqueInput;
    };

    export type GrantOpportunityCreateNestedManyWithoutInternalSourceInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutInternalSourceInput,
                  GrantOpportunityUncheckedCreateWithoutInternalSourceInput
              >
            | GrantOpportunityCreateWithoutInternalSourceInput[]
            | GrantOpportunityUncheckedCreateWithoutInternalSourceInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput[];
        createMany?: GrantOpportunityCreateManyInternalSourceInputEnvelope;
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
    };

    export type GrantOpportunityUncheckedCreateNestedManyWithoutInternalSourceInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutInternalSourceInput,
                  GrantOpportunityUncheckedCreateWithoutInternalSourceInput
              >
            | GrantOpportunityCreateWithoutInternalSourceInput[]
            | GrantOpportunityUncheckedCreateWithoutInternalSourceInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput[];
        createMany?: GrantOpportunityCreateManyInternalSourceInputEnvelope;
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
    };

    export type OrganizationUpdateOneRequiredWithoutInternalGrantSourcesNestedInput = {
        create?: XOR<
            OrganizationCreateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedCreateWithoutInternalGrantSourcesInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutInternalGrantSourcesInput;
        upsert?: OrganizationUpsertWithoutInternalGrantSourcesInput;
        connect?: OrganizationWhereUniqueInput;
        update?: XOR<
            XOR<
                OrganizationUpdateToOneWithWhereWithoutInternalGrantSourcesInput,
                OrganizationUpdateWithoutInternalGrantSourcesInput
            >,
            OrganizationUncheckedUpdateWithoutInternalGrantSourcesInput
        >;
    };

    export type GrantOpportunityUpdateManyWithoutInternalSourceNestedInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutInternalSourceInput,
                  GrantOpportunityUncheckedCreateWithoutInternalSourceInput
              >
            | GrantOpportunityCreateWithoutInternalSourceInput[]
            | GrantOpportunityUncheckedCreateWithoutInternalSourceInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput[];
        upsert?:
            | GrantOpportunityUpsertWithWhereUniqueWithoutInternalSourceInput
            | GrantOpportunityUpsertWithWhereUniqueWithoutInternalSourceInput[];
        createMany?: GrantOpportunityCreateManyInternalSourceInputEnvelope;
        set?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        disconnect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        delete?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        update?:
            | GrantOpportunityUpdateWithWhereUniqueWithoutInternalSourceInput
            | GrantOpportunityUpdateWithWhereUniqueWithoutInternalSourceInput[];
        updateMany?:
            | GrantOpportunityUpdateManyWithWhereWithoutInternalSourceInput
            | GrantOpportunityUpdateManyWithWhereWithoutInternalSourceInput[];
        deleteMany?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
    };

    export type GrantOpportunityUncheckedUpdateManyWithoutInternalSourceNestedInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutInternalSourceInput,
                  GrantOpportunityUncheckedCreateWithoutInternalSourceInput
              >
            | GrantOpportunityCreateWithoutInternalSourceInput[]
            | GrantOpportunityUncheckedCreateWithoutInternalSourceInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput
            | GrantOpportunityCreateOrConnectWithoutInternalSourceInput[];
        upsert?:
            | GrantOpportunityUpsertWithWhereUniqueWithoutInternalSourceInput
            | GrantOpportunityUpsertWithWhereUniqueWithoutInternalSourceInput[];
        createMany?: GrantOpportunityCreateManyInternalSourceInputEnvelope;
        set?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        disconnect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        delete?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        update?:
            | GrantOpportunityUpdateWithWhereUniqueWithoutInternalSourceInput
            | GrantOpportunityUpdateWithWhereUniqueWithoutInternalSourceInput[];
        updateMany?:
            | GrantOpportunityUpdateManyWithWhereWithoutInternalSourceInput
            | GrantOpportunityUpdateManyWithWhereWithoutInternalSourceInput[];
        deleteMany?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
    };

    export type OrganizationCreateNestedOneWithoutLettersOfIntentInput = {
        create?: XOR<
            OrganizationCreateWithoutLettersOfIntentInput,
            OrganizationUncheckedCreateWithoutLettersOfIntentInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutLettersOfIntentInput;
        connect?: OrganizationWhereUniqueInput;
    };

    export type GrantOpportunityCreateNestedOneWithoutLettersOfIntentInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedCreateWithoutLettersOfIntentInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutLettersOfIntentInput;
        connect?: GrantOpportunityWhereUniqueInput;
    };

    export type OrganizationUpdateOneRequiredWithoutLettersOfIntentNestedInput = {
        create?: XOR<
            OrganizationCreateWithoutLettersOfIntentInput,
            OrganizationUncheckedCreateWithoutLettersOfIntentInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutLettersOfIntentInput;
        upsert?: OrganizationUpsertWithoutLettersOfIntentInput;
        connect?: OrganizationWhereUniqueInput;
        update?: XOR<
            XOR<
                OrganizationUpdateToOneWithWhereWithoutLettersOfIntentInput,
                OrganizationUpdateWithoutLettersOfIntentInput
            >,
            OrganizationUncheckedUpdateWithoutLettersOfIntentInput
        >;
    };

    export type GrantOpportunityUpdateOneRequiredWithoutLettersOfIntentNestedInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedCreateWithoutLettersOfIntentInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutLettersOfIntentInput;
        upsert?: GrantOpportunityUpsertWithoutLettersOfIntentInput;
        connect?: GrantOpportunityWhereUniqueInput;
        update?: XOR<
            XOR<
                GrantOpportunityUpdateToOneWithWhereWithoutLettersOfIntentInput,
                GrantOpportunityUpdateWithoutLettersOfIntentInput
            >,
            GrantOpportunityUncheckedUpdateWithoutLettersOfIntentInput
        >;
    };

    export type GrantOpportunityCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutOrganizationInput,
                  GrantOpportunityUncheckedCreateWithoutOrganizationInput
              >
            | GrantOpportunityCreateWithoutOrganizationInput[]
            | GrantOpportunityUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput[];
        createMany?: GrantOpportunityCreateManyOrganizationInputEnvelope;
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
    };

    export type InternalGrantSourceCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  InternalGrantSourceCreateWithoutOrganizationInput,
                  InternalGrantSourceUncheckedCreateWithoutOrganizationInput
              >
            | InternalGrantSourceCreateWithoutOrganizationInput[]
            | InternalGrantSourceUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput[];
        createMany?: InternalGrantSourceCreateManyOrganizationInputEnvelope;
        connect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
    };

    export type ReadinessScoreCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutOrganizationInput,
                  ReadinessScoreUncheckedCreateWithoutOrganizationInput
              >
            | ReadinessScoreCreateWithoutOrganizationInput[]
            | ReadinessScoreUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput[];
        createMany?: ReadinessScoreCreateManyOrganizationInputEnvelope;
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
    };

    export type LetterOfIntentCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutOrganizationInput,
                  LetterOfIntentUncheckedCreateWithoutOrganizationInput
              >
            | LetterOfIntentCreateWithoutOrganizationInput[]
            | LetterOfIntentUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput[];
        createMany?: LetterOfIntentCreateManyOrganizationInputEnvelope;
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
    };

    export type ProposalDraftCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutOrganizationInput,
                  ProposalDraftUncheckedCreateWithoutOrganizationInput
              >
            | ProposalDraftCreateWithoutOrganizationInput[]
            | ProposalDraftUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutOrganizationInput
            | ProposalDraftCreateOrConnectWithoutOrganizationInput[];
        createMany?: ProposalDraftCreateManyOrganizationInputEnvelope;
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
    };

    export type GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutOrganizationInput,
                  GrantOpportunityUncheckedCreateWithoutOrganizationInput
              >
            | GrantOpportunityCreateWithoutOrganizationInput[]
            | GrantOpportunityUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput[];
        createMany?: GrantOpportunityCreateManyOrganizationInputEnvelope;
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
    };

    export type InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  InternalGrantSourceCreateWithoutOrganizationInput,
                  InternalGrantSourceUncheckedCreateWithoutOrganizationInput
              >
            | InternalGrantSourceCreateWithoutOrganizationInput[]
            | InternalGrantSourceUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput[];
        createMany?: InternalGrantSourceCreateManyOrganizationInputEnvelope;
        connect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
    };

    export type ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutOrganizationInput,
                  ReadinessScoreUncheckedCreateWithoutOrganizationInput
              >
            | ReadinessScoreCreateWithoutOrganizationInput[]
            | ReadinessScoreUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput[];
        createMany?: ReadinessScoreCreateManyOrganizationInputEnvelope;
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
    };

    export type LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutOrganizationInput,
                  LetterOfIntentUncheckedCreateWithoutOrganizationInput
              >
            | LetterOfIntentCreateWithoutOrganizationInput[]
            | LetterOfIntentUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput[];
        createMany?: LetterOfIntentCreateManyOrganizationInputEnvelope;
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
    };

    export type ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutOrganizationInput,
                  ProposalDraftUncheckedCreateWithoutOrganizationInput
              >
            | ProposalDraftCreateWithoutOrganizationInput[]
            | ProposalDraftUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutOrganizationInput
            | ProposalDraftCreateOrConnectWithoutOrganizationInput[];
        createMany?: ProposalDraftCreateManyOrganizationInputEnvelope;
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
    };

    export type NullableIntFieldUpdateOperationsInput = {
        set?: number | null;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type BoolFieldUpdateOperationsInput = {
        set?: boolean;
    };

    export type GrantOpportunityUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutOrganizationInput,
                  GrantOpportunityUncheckedCreateWithoutOrganizationInput
              >
            | GrantOpportunityCreateWithoutOrganizationInput[]
            | GrantOpportunityUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | GrantOpportunityUpsertWithWhereUniqueWithoutOrganizationInput
            | GrantOpportunityUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: GrantOpportunityCreateManyOrganizationInputEnvelope;
        set?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        disconnect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        delete?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        update?:
            | GrantOpportunityUpdateWithWhereUniqueWithoutOrganizationInput
            | GrantOpportunityUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | GrantOpportunityUpdateManyWithWhereWithoutOrganizationInput
            | GrantOpportunityUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
    };

    export type InternalGrantSourceUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  InternalGrantSourceCreateWithoutOrganizationInput,
                  InternalGrantSourceUncheckedCreateWithoutOrganizationInput
              >
            | InternalGrantSourceCreateWithoutOrganizationInput[]
            | InternalGrantSourceUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | InternalGrantSourceUpsertWithWhereUniqueWithoutOrganizationInput
            | InternalGrantSourceUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: InternalGrantSourceCreateManyOrganizationInputEnvelope;
        set?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        disconnect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        delete?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        connect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        update?:
            | InternalGrantSourceUpdateWithWhereUniqueWithoutOrganizationInput
            | InternalGrantSourceUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | InternalGrantSourceUpdateManyWithWhereWithoutOrganizationInput
            | InternalGrantSourceUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: InternalGrantSourceScalarWhereInput | InternalGrantSourceScalarWhereInput[];
    };

    export type ReadinessScoreUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutOrganizationInput,
                  ReadinessScoreUncheckedCreateWithoutOrganizationInput
              >
            | ReadinessScoreCreateWithoutOrganizationInput[]
            | ReadinessScoreUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | ReadinessScoreUpsertWithWhereUniqueWithoutOrganizationInput
            | ReadinessScoreUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: ReadinessScoreCreateManyOrganizationInputEnvelope;
        set?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        disconnect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        delete?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        update?:
            | ReadinessScoreUpdateWithWhereUniqueWithoutOrganizationInput
            | ReadinessScoreUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | ReadinessScoreUpdateManyWithWhereWithoutOrganizationInput
            | ReadinessScoreUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
    };

    export type LetterOfIntentUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutOrganizationInput,
                  LetterOfIntentUncheckedCreateWithoutOrganizationInput
              >
            | LetterOfIntentCreateWithoutOrganizationInput[]
            | LetterOfIntentUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | LetterOfIntentUpsertWithWhereUniqueWithoutOrganizationInput
            | LetterOfIntentUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: LetterOfIntentCreateManyOrganizationInputEnvelope;
        set?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        disconnect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        delete?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        update?:
            | LetterOfIntentUpdateWithWhereUniqueWithoutOrganizationInput
            | LetterOfIntentUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | LetterOfIntentUpdateManyWithWhereWithoutOrganizationInput
            | LetterOfIntentUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
    };

    export type ProposalDraftUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutOrganizationInput,
                  ProposalDraftUncheckedCreateWithoutOrganizationInput
              >
            | ProposalDraftCreateWithoutOrganizationInput[]
            | ProposalDraftUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutOrganizationInput
            | ProposalDraftCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | ProposalDraftUpsertWithWhereUniqueWithoutOrganizationInput
            | ProposalDraftUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: ProposalDraftCreateManyOrganizationInputEnvelope;
        set?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        disconnect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        delete?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        update?:
            | ProposalDraftUpdateWithWhereUniqueWithoutOrganizationInput
            | ProposalDraftUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | ProposalDraftUpdateManyWithWhereWithoutOrganizationInput
            | ProposalDraftUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
    };

    export type GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  GrantOpportunityCreateWithoutOrganizationInput,
                  GrantOpportunityUncheckedCreateWithoutOrganizationInput
              >
            | GrantOpportunityCreateWithoutOrganizationInput[]
            | GrantOpportunityUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput
            | GrantOpportunityCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | GrantOpportunityUpsertWithWhereUniqueWithoutOrganizationInput
            | GrantOpportunityUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: GrantOpportunityCreateManyOrganizationInputEnvelope;
        set?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        disconnect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        delete?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        connect?: GrantOpportunityWhereUniqueInput | GrantOpportunityWhereUniqueInput[];
        update?:
            | GrantOpportunityUpdateWithWhereUniqueWithoutOrganizationInput
            | GrantOpportunityUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | GrantOpportunityUpdateManyWithWhereWithoutOrganizationInput
            | GrantOpportunityUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
    };

    export type InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  InternalGrantSourceCreateWithoutOrganizationInput,
                  InternalGrantSourceUncheckedCreateWithoutOrganizationInput
              >
            | InternalGrantSourceCreateWithoutOrganizationInput[]
            | InternalGrantSourceUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput
            | InternalGrantSourceCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | InternalGrantSourceUpsertWithWhereUniqueWithoutOrganizationInput
            | InternalGrantSourceUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: InternalGrantSourceCreateManyOrganizationInputEnvelope;
        set?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        disconnect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        delete?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        connect?: InternalGrantSourceWhereUniqueInput | InternalGrantSourceWhereUniqueInput[];
        update?:
            | InternalGrantSourceUpdateWithWhereUniqueWithoutOrganizationInput
            | InternalGrantSourceUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | InternalGrantSourceUpdateManyWithWhereWithoutOrganizationInput
            | InternalGrantSourceUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: InternalGrantSourceScalarWhereInput | InternalGrantSourceScalarWhereInput[];
    };

    export type ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  ReadinessScoreCreateWithoutOrganizationInput,
                  ReadinessScoreUncheckedCreateWithoutOrganizationInput
              >
            | ReadinessScoreCreateWithoutOrganizationInput[]
            | ReadinessScoreUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput
            | ReadinessScoreCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | ReadinessScoreUpsertWithWhereUniqueWithoutOrganizationInput
            | ReadinessScoreUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: ReadinessScoreCreateManyOrganizationInputEnvelope;
        set?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        disconnect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        delete?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        connect?: ReadinessScoreWhereUniqueInput | ReadinessScoreWhereUniqueInput[];
        update?:
            | ReadinessScoreUpdateWithWhereUniqueWithoutOrganizationInput
            | ReadinessScoreUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | ReadinessScoreUpdateManyWithWhereWithoutOrganizationInput
            | ReadinessScoreUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
    };

    export type LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  LetterOfIntentCreateWithoutOrganizationInput,
                  LetterOfIntentUncheckedCreateWithoutOrganizationInput
              >
            | LetterOfIntentCreateWithoutOrganizationInput[]
            | LetterOfIntentUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput
            | LetterOfIntentCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | LetterOfIntentUpsertWithWhereUniqueWithoutOrganizationInput
            | LetterOfIntentUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: LetterOfIntentCreateManyOrganizationInputEnvelope;
        set?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        disconnect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        delete?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        connect?: LetterOfIntentWhereUniqueInput | LetterOfIntentWhereUniqueInput[];
        update?:
            | LetterOfIntentUpdateWithWhereUniqueWithoutOrganizationInput
            | LetterOfIntentUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | LetterOfIntentUpdateManyWithWhereWithoutOrganizationInput
            | LetterOfIntentUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
    };

    export type ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput = {
        create?:
            | XOR<
                  ProposalDraftCreateWithoutOrganizationInput,
                  ProposalDraftUncheckedCreateWithoutOrganizationInput
              >
            | ProposalDraftCreateWithoutOrganizationInput[]
            | ProposalDraftUncheckedCreateWithoutOrganizationInput[];
        connectOrCreate?:
            | ProposalDraftCreateOrConnectWithoutOrganizationInput
            | ProposalDraftCreateOrConnectWithoutOrganizationInput[];
        upsert?:
            | ProposalDraftUpsertWithWhereUniqueWithoutOrganizationInput
            | ProposalDraftUpsertWithWhereUniqueWithoutOrganizationInput[];
        createMany?: ProposalDraftCreateManyOrganizationInputEnvelope;
        set?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        disconnect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        delete?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        connect?: ProposalDraftWhereUniqueInput | ProposalDraftWhereUniqueInput[];
        update?:
            | ProposalDraftUpdateWithWhereUniqueWithoutOrganizationInput
            | ProposalDraftUpdateWithWhereUniqueWithoutOrganizationInput[];
        updateMany?:
            | ProposalDraftUpdateManyWithWhereWithoutOrganizationInput
            | ProposalDraftUpdateManyWithWhereWithoutOrganizationInput[];
        deleteMany?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
    };

    export type OrganizationCreateNestedOneWithoutProposalDraftsInput = {
        create?: XOR<
            OrganizationCreateWithoutProposalDraftsInput,
            OrganizationUncheckedCreateWithoutProposalDraftsInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutProposalDraftsInput;
        connect?: OrganizationWhereUniqueInput;
    };

    export type GrantOpportunityCreateNestedOneWithoutProposalDraftsInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedCreateWithoutProposalDraftsInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutProposalDraftsInput;
        connect?: GrantOpportunityWhereUniqueInput;
    };

    export type OrganizationUpdateOneRequiredWithoutProposalDraftsNestedInput = {
        create?: XOR<
            OrganizationCreateWithoutProposalDraftsInput,
            OrganizationUncheckedCreateWithoutProposalDraftsInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutProposalDraftsInput;
        upsert?: OrganizationUpsertWithoutProposalDraftsInput;
        connect?: OrganizationWhereUniqueInput;
        update?: XOR<
            XOR<
                OrganizationUpdateToOneWithWhereWithoutProposalDraftsInput,
                OrganizationUpdateWithoutProposalDraftsInput
            >,
            OrganizationUncheckedUpdateWithoutProposalDraftsInput
        >;
    };

    export type GrantOpportunityUpdateOneRequiredWithoutProposalDraftsNestedInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedCreateWithoutProposalDraftsInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutProposalDraftsInput;
        upsert?: GrantOpportunityUpsertWithoutProposalDraftsInput;
        connect?: GrantOpportunityWhereUniqueInput;
        update?: XOR<
            XOR<
                GrantOpportunityUpdateToOneWithWhereWithoutProposalDraftsInput,
                GrantOpportunityUpdateWithoutProposalDraftsInput
            >,
            GrantOpportunityUncheckedUpdateWithoutProposalDraftsInput
        >;
    };

    export type OrganizationCreateNestedOneWithoutReadinessScoresInput = {
        create?: XOR<
            OrganizationCreateWithoutReadinessScoresInput,
            OrganizationUncheckedCreateWithoutReadinessScoresInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutReadinessScoresInput;
        connect?: OrganizationWhereUniqueInput;
    };

    export type GrantOpportunityCreateNestedOneWithoutReadinessScoresInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedCreateWithoutReadinessScoresInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutReadinessScoresInput;
        connect?: GrantOpportunityWhereUniqueInput;
    };

    export type IntFieldUpdateOperationsInput = {
        set?: number;
        increment?: number;
        decrement?: number;
        multiply?: number;
        divide?: number;
    };

    export type OrganizationUpdateOneRequiredWithoutReadinessScoresNestedInput = {
        create?: XOR<
            OrganizationCreateWithoutReadinessScoresInput,
            OrganizationUncheckedCreateWithoutReadinessScoresInput
        >;
        connectOrCreate?: OrganizationCreateOrConnectWithoutReadinessScoresInput;
        upsert?: OrganizationUpsertWithoutReadinessScoresInput;
        connect?: OrganizationWhereUniqueInput;
        update?: XOR<
            XOR<
                OrganizationUpdateToOneWithWhereWithoutReadinessScoresInput,
                OrganizationUpdateWithoutReadinessScoresInput
            >,
            OrganizationUncheckedUpdateWithoutReadinessScoresInput
        >;
    };

    export type GrantOpportunityUpdateOneRequiredWithoutReadinessScoresNestedInput = {
        create?: XOR<
            GrantOpportunityCreateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedCreateWithoutReadinessScoresInput
        >;
        connectOrCreate?: GrantOpportunityCreateOrConnectWithoutReadinessScoresInput;
        upsert?: GrantOpportunityUpsertWithoutReadinessScoresInput;
        connect?: GrantOpportunityWhereUniqueInput;
        update?: XOR<
            XOR<
                GrantOpportunityUpdateToOneWithWhereWithoutReadinessScoresInput,
                GrantOpportunityUpdateWithoutReadinessScoresInput
            >,
            GrantOpportunityUncheckedUpdateWithoutReadinessScoresInput
        >;
    };

    export type NestedUuidFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidFilter<$PrismaModel> | string;
    };

    export type NestedStringFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringFilter<$PrismaModel> | string;
    };

    export type NestedStringNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
    };

    export type NestedDecimalNullableFilter<$PrismaModel = never> = {
        equals?:
            | Decimal
            | DecimalJsLike
            | number
            | string
            | DecimalFieldRefInput<$PrismaModel>
            | null;
        in?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        not?:
            | NestedDecimalNullableFilter<$PrismaModel>
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
    };

    export type NestedUuidNullableFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
    };

    export type NestedDateTimeFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
    };

    export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedIntFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntFilter<$PrismaModel> | number;
    };

    export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel>;
        in?: string[] | ListStringFieldRefInput<$PrismaModel>;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedStringFilter<$PrismaModel>;
        _max?: NestedStringFilter<$PrismaModel>;
    };

    export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        contains?: string | StringFieldRefInput<$PrismaModel>;
        startsWith?: string | StringFieldRefInput<$PrismaModel>;
        endsWith?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type NestedIntNullableFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedDateTimeNullableFilter<$PrismaModel>;
        _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

    export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?:
            | Decimal
            | DecimalJsLike
            | number
            | string
            | DecimalFieldRefInput<$PrismaModel>
            | null;
        in?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        notIn?:
            | Decimal[]
            | DecimalJsLike[]
            | number[]
            | string[]
            | ListDecimalFieldRefInput<$PrismaModel>
            | null;
        lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
        not?:
            | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _avg?: NestedDecimalNullableFilter<$PrismaModel>;
        _sum?: NestedDecimalNullableFilter<$PrismaModel>;
        _min?: NestedDecimalNullableFilter<$PrismaModel>;
        _max?: NestedDecimalNullableFilter<$PrismaModel>;
    };

    export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: string | StringFieldRefInput<$PrismaModel> | null;
        in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
        lt?: string | StringFieldRefInput<$PrismaModel>;
        lte?: string | StringFieldRefInput<$PrismaModel>;
        gt?: string | StringFieldRefInput<$PrismaModel>;
        gte?: string | StringFieldRefInput<$PrismaModel>;
        not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedStringNullableFilter<$PrismaModel>;
        _max?: NestedStringNullableFilter<$PrismaModel>;
    };

    export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
        equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
        lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
        not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedDateTimeFilter<$PrismaModel>;
        _max?: NestedDateTimeFilter<$PrismaModel>;
    };

    export type NestedBoolFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolFilter<$PrismaModel> | boolean;
    };

    export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
        _count?: NestedIntNullableFilter<$PrismaModel>;
        _avg?: NestedFloatNullableFilter<$PrismaModel>;
        _sum?: NestedIntNullableFilter<$PrismaModel>;
        _min?: NestedIntNullableFilter<$PrismaModel>;
        _max?: NestedIntNullableFilter<$PrismaModel>;
    };

    export type NestedFloatNullableFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel> | null;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    };

    export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
        equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
        not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
        _count?: NestedIntFilter<$PrismaModel>;
        _min?: NestedBoolFilter<$PrismaModel>;
        _max?: NestedBoolFilter<$PrismaModel>;
    };

    export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
        equals?: number | IntFieldRefInput<$PrismaModel>;
        in?: number[] | ListIntFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
        lt?: number | IntFieldRefInput<$PrismaModel>;
        lte?: number | IntFieldRefInput<$PrismaModel>;
        gt?: number | IntFieldRefInput<$PrismaModel>;
        gte?: number | IntFieldRefInput<$PrismaModel>;
        not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
        _count?: NestedIntFilter<$PrismaModel>;
        _avg?: NestedFloatFilter<$PrismaModel>;
        _sum?: NestedIntFilter<$PrismaModel>;
        _min?: NestedIntFilter<$PrismaModel>;
        _max?: NestedIntFilter<$PrismaModel>;
    };

    export type NestedFloatFilter<$PrismaModel = never> = {
        equals?: number | FloatFieldRefInput<$PrismaModel>;
        in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
        lt?: number | FloatFieldRefInput<$PrismaModel>;
        lte?: number | FloatFieldRefInput<$PrismaModel>;
        gt?: number | FloatFieldRefInput<$PrismaModel>;
        gte?: number | FloatFieldRefInput<$PrismaModel>;
        not?: NestedFloatFilter<$PrismaModel> | number;
    };

    export type OrganizationCreateWithoutGrantOpportunitiesInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        internalGrantSources?: InternalGrantSourceCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateWithoutGrantOpportunitiesInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        internalGrantSources?: InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationCreateOrConnectWithoutGrantOpportunitiesInput = {
        where: OrganizationWhereUniqueInput;
        create: XOR<
            OrganizationCreateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedCreateWithoutGrantOpportunitiesInput
        >;
    };

    export type InternalGrantSourceCreateWithoutGrantOpportunitiesInput = {
        id?: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutInternalGrantSourcesInput;
    };

    export type InternalGrantSourceUncheckedCreateWithoutGrantOpportunitiesInput = {
        id?: string;
        organizationId: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
    };

    export type InternalGrantSourceCreateOrConnectWithoutGrantOpportunitiesInput = {
        where: InternalGrantSourceWhereUniqueInput;
        create: XOR<
            InternalGrantSourceCreateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedCreateWithoutGrantOpportunitiesInput
        >;
    };

    export type ReadinessScoreCreateWithoutGrantInput = {
        id?: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutReadinessScoresInput;
    };

    export type ReadinessScoreUncheckedCreateWithoutGrantInput = {
        id?: string;
        organizationId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type ReadinessScoreCreateOrConnectWithoutGrantInput = {
        where: ReadinessScoreWhereUniqueInput;
        create: XOR<
            ReadinessScoreCreateWithoutGrantInput,
            ReadinessScoreUncheckedCreateWithoutGrantInput
        >;
    };

    export type ReadinessScoreCreateManyGrantInputEnvelope = {
        data: ReadinessScoreCreateManyGrantInput | ReadinessScoreCreateManyGrantInput[];
        skipDuplicates?: boolean;
    };

    export type LetterOfIntentCreateWithoutGrantInput = {
        id?: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutLettersOfIntentInput;
    };

    export type LetterOfIntentUncheckedCreateWithoutGrantInput = {
        id?: string;
        organizationId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentCreateOrConnectWithoutGrantInput = {
        where: LetterOfIntentWhereUniqueInput;
        create: XOR<
            LetterOfIntentCreateWithoutGrantInput,
            LetterOfIntentUncheckedCreateWithoutGrantInput
        >;
    };

    export type LetterOfIntentCreateManyGrantInputEnvelope = {
        data: LetterOfIntentCreateManyGrantInput | LetterOfIntentCreateManyGrantInput[];
        skipDuplicates?: boolean;
    };

    export type ProposalDraftCreateWithoutGrantInput = {
        id?: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutProposalDraftsInput;
    };

    export type ProposalDraftUncheckedCreateWithoutGrantInput = {
        id?: string;
        organizationId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type ProposalDraftCreateOrConnectWithoutGrantInput = {
        where: ProposalDraftWhereUniqueInput;
        create: XOR<
            ProposalDraftCreateWithoutGrantInput,
            ProposalDraftUncheckedCreateWithoutGrantInput
        >;
    };

    export type ProposalDraftCreateManyGrantInputEnvelope = {
        data: ProposalDraftCreateManyGrantInput | ProposalDraftCreateManyGrantInput[];
        skipDuplicates?: boolean;
    };

    export type OrganizationUpsertWithoutGrantOpportunitiesInput = {
        update: XOR<
            OrganizationUpdateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
        create: XOR<
            OrganizationCreateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        where?: OrganizationWhereInput;
    };

    export type OrganizationUpdateToOneWithWhereWithoutGrantOpportunitiesInput = {
        where?: OrganizationWhereInput;
        data: XOR<
            OrganizationUpdateWithoutGrantOpportunitiesInput,
            OrganizationUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
    };

    export type OrganizationUpdateWithoutGrantOpportunitiesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        internalGrantSources?: InternalGrantSourceUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateWithoutGrantOpportunitiesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        internalGrantSources?: InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type InternalGrantSourceUpsertWithoutGrantOpportunitiesInput = {
        update: XOR<
            InternalGrantSourceUpdateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
        create: XOR<
            InternalGrantSourceCreateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedCreateWithoutGrantOpportunitiesInput
        >;
        where?: InternalGrantSourceWhereInput;
    };

    export type InternalGrantSourceUpdateToOneWithWhereWithoutGrantOpportunitiesInput = {
        where?: InternalGrantSourceWhereInput;
        data: XOR<
            InternalGrantSourceUpdateWithoutGrantOpportunitiesInput,
            InternalGrantSourceUncheckedUpdateWithoutGrantOpportunitiesInput
        >;
    };

    export type InternalGrantSourceUpdateWithoutGrantOpportunitiesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutInternalGrantSourcesNestedInput;
    };

    export type InternalGrantSourceUncheckedUpdateWithoutGrantOpportunitiesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreUpsertWithWhereUniqueWithoutGrantInput = {
        where: ReadinessScoreWhereUniqueInput;
        update: XOR<
            ReadinessScoreUpdateWithoutGrantInput,
            ReadinessScoreUncheckedUpdateWithoutGrantInput
        >;
        create: XOR<
            ReadinessScoreCreateWithoutGrantInput,
            ReadinessScoreUncheckedCreateWithoutGrantInput
        >;
    };

    export type ReadinessScoreUpdateWithWhereUniqueWithoutGrantInput = {
        where: ReadinessScoreWhereUniqueInput;
        data: XOR<
            ReadinessScoreUpdateWithoutGrantInput,
            ReadinessScoreUncheckedUpdateWithoutGrantInput
        >;
    };

    export type ReadinessScoreUpdateManyWithWhereWithoutGrantInput = {
        where: ReadinessScoreScalarWhereInput;
        data: XOR<
            ReadinessScoreUpdateManyMutationInput,
            ReadinessScoreUncheckedUpdateManyWithoutGrantInput
        >;
    };

    export type ReadinessScoreScalarWhereInput = {
        AND?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
        OR?: ReadinessScoreScalarWhereInput[];
        NOT?: ReadinessScoreScalarWhereInput | ReadinessScoreScalarWhereInput[];
        id?: UuidFilter<"ReadinessScore"> | string;
        organizationId?: UuidFilter<"ReadinessScore"> | string;
        grantId?: UuidFilter<"ReadinessScore"> | string;
        readinessScore?: IntFilter<"ReadinessScore"> | number;
        strengths?: StringNullableFilter<"ReadinessScore"> | string | null;
        improvementAreas?: StringNullableFilter<"ReadinessScore"> | string | null;
        createdAt?: DateTimeFilter<"ReadinessScore"> | Date | string;
    };

    export type LetterOfIntentUpsertWithWhereUniqueWithoutGrantInput = {
        where: LetterOfIntentWhereUniqueInput;
        update: XOR<
            LetterOfIntentUpdateWithoutGrantInput,
            LetterOfIntentUncheckedUpdateWithoutGrantInput
        >;
        create: XOR<
            LetterOfIntentCreateWithoutGrantInput,
            LetterOfIntentUncheckedCreateWithoutGrantInput
        >;
    };

    export type LetterOfIntentUpdateWithWhereUniqueWithoutGrantInput = {
        where: LetterOfIntentWhereUniqueInput;
        data: XOR<
            LetterOfIntentUpdateWithoutGrantInput,
            LetterOfIntentUncheckedUpdateWithoutGrantInput
        >;
    };

    export type LetterOfIntentUpdateManyWithWhereWithoutGrantInput = {
        where: LetterOfIntentScalarWhereInput;
        data: XOR<
            LetterOfIntentUpdateManyMutationInput,
            LetterOfIntentUncheckedUpdateManyWithoutGrantInput
        >;
    };

    export type LetterOfIntentScalarWhereInput = {
        AND?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
        OR?: LetterOfIntentScalarWhereInput[];
        NOT?: LetterOfIntentScalarWhereInput | LetterOfIntentScalarWhereInput[];
        id?: UuidFilter<"LetterOfIntent"> | string;
        organizationId?: UuidFilter<"LetterOfIntent"> | string;
        grantId?: UuidFilter<"LetterOfIntent"> | string;
        introduction?: StringNullableFilter<"LetterOfIntent"> | string | null;
        organizationalSummary?: StringNullableFilter<"LetterOfIntent"> | string | null;
        projectOverview?: StringNullableFilter<"LetterOfIntent"> | string | null;
        fundingRequest?:
            | DecimalNullableFilter<"LetterOfIntent">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: StringNullableFilter<"LetterOfIntent"> | string | null;
        createdAt?: DateTimeFilter<"LetterOfIntent"> | Date | string;
    };

    export type ProposalDraftUpsertWithWhereUniqueWithoutGrantInput = {
        where: ProposalDraftWhereUniqueInput;
        update: XOR<
            ProposalDraftUpdateWithoutGrantInput,
            ProposalDraftUncheckedUpdateWithoutGrantInput
        >;
        create: XOR<
            ProposalDraftCreateWithoutGrantInput,
            ProposalDraftUncheckedCreateWithoutGrantInput
        >;
    };

    export type ProposalDraftUpdateWithWhereUniqueWithoutGrantInput = {
        where: ProposalDraftWhereUniqueInput;
        data: XOR<
            ProposalDraftUpdateWithoutGrantInput,
            ProposalDraftUncheckedUpdateWithoutGrantInput
        >;
    };

    export type ProposalDraftUpdateManyWithWhereWithoutGrantInput = {
        where: ProposalDraftScalarWhereInput;
        data: XOR<
            ProposalDraftUpdateManyMutationInput,
            ProposalDraftUncheckedUpdateManyWithoutGrantInput
        >;
    };

    export type ProposalDraftScalarWhereInput = {
        AND?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
        OR?: ProposalDraftScalarWhereInput[];
        NOT?: ProposalDraftScalarWhereInput | ProposalDraftScalarWhereInput[];
        id?: UuidFilter<"ProposalDraft"> | string;
        organizationId?: UuidFilter<"ProposalDraft"> | string;
        grantId?: UuidFilter<"ProposalDraft"> | string;
        executiveSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
        introductionToOrganization?: StringNullableFilter<"ProposalDraft"> | string | null;
        problemStatement?: StringNullableFilter<"ProposalDraft"> | string | null;
        goalsAndObjectives?: StringNullableFilter<"ProposalDraft"> | string | null;
        methodsAndActivities?: StringNullableFilter<"ProposalDraft"> | string | null;
        evaluationPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
        sustainabilityPlan?: StringNullableFilter<"ProposalDraft"> | string | null;
        budgetSummary?: StringNullableFilter<"ProposalDraft"> | string | null;
        conclusion?: StringNullableFilter<"ProposalDraft"> | string | null;
        status?: BoolFilter<"ProposalDraft"> | boolean;
        createdAt?: DateTimeFilter<"ProposalDraft"> | Date | string;
    };

    export type OrganizationCreateWithoutInternalGrantSourcesInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateWithoutInternalGrantSourcesInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationCreateOrConnectWithoutInternalGrantSourcesInput = {
        where: OrganizationWhereUniqueInput;
        create: XOR<
            OrganizationCreateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedCreateWithoutInternalGrantSourcesInput
        >;
    };

    export type GrantOpportunityCreateWithoutInternalSourceInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutGrantOpportunitiesInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateWithoutInternalSourceInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityCreateOrConnectWithoutInternalSourceInput = {
        where: GrantOpportunityWhereUniqueInput;
        create: XOR<
            GrantOpportunityCreateWithoutInternalSourceInput,
            GrantOpportunityUncheckedCreateWithoutInternalSourceInput
        >;
    };

    export type GrantOpportunityCreateManyInternalSourceInputEnvelope = {
        data:
            | GrantOpportunityCreateManyInternalSourceInput
            | GrantOpportunityCreateManyInternalSourceInput[];
        skipDuplicates?: boolean;
    };

    export type OrganizationUpsertWithoutInternalGrantSourcesInput = {
        update: XOR<
            OrganizationUpdateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedUpdateWithoutInternalGrantSourcesInput
        >;
        create: XOR<
            OrganizationCreateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedCreateWithoutInternalGrantSourcesInput
        >;
        where?: OrganizationWhereInput;
    };

    export type OrganizationUpdateToOneWithWhereWithoutInternalGrantSourcesInput = {
        where?: OrganizationWhereInput;
        data: XOR<
            OrganizationUpdateWithoutInternalGrantSourcesInput,
            OrganizationUncheckedUpdateWithoutInternalGrantSourcesInput
        >;
    };

    export type OrganizationUpdateWithoutInternalGrantSourcesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateWithoutInternalGrantSourcesInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type GrantOpportunityUpsertWithWhereUniqueWithoutInternalSourceInput = {
        where: GrantOpportunityWhereUniqueInput;
        update: XOR<
            GrantOpportunityUpdateWithoutInternalSourceInput,
            GrantOpportunityUncheckedUpdateWithoutInternalSourceInput
        >;
        create: XOR<
            GrantOpportunityCreateWithoutInternalSourceInput,
            GrantOpportunityUncheckedCreateWithoutInternalSourceInput
        >;
    };

    export type GrantOpportunityUpdateWithWhereUniqueWithoutInternalSourceInput = {
        where: GrantOpportunityWhereUniqueInput;
        data: XOR<
            GrantOpportunityUpdateWithoutInternalSourceInput,
            GrantOpportunityUncheckedUpdateWithoutInternalSourceInput
        >;
    };

    export type GrantOpportunityUpdateManyWithWhereWithoutInternalSourceInput = {
        where: GrantOpportunityScalarWhereInput;
        data: XOR<
            GrantOpportunityUpdateManyMutationInput,
            GrantOpportunityUncheckedUpdateManyWithoutInternalSourceInput
        >;
    };

    export type GrantOpportunityScalarWhereInput = {
        AND?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
        OR?: GrantOpportunityScalarWhereInput[];
        NOT?: GrantOpportunityScalarWhereInput | GrantOpportunityScalarWhereInput[];
        id?: UuidFilter<"GrantOpportunity"> | string;
        organizationId?: UuidFilter<"GrantOpportunity"> | string;
        funderName?: StringFilter<"GrantOpportunity"> | string;
        focusArea?: StringNullableFilter<"GrantOpportunity"> | string | null;
        deadline?: DateTimeNullableFilter<"GrantOpportunity"> | Date | string | null;
        amountUsd?:
            | DecimalNullableFilter<"GrantOpportunity">
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: StringNullableFilter<"GrantOpportunity"> | string | null;
        attachmentsRequired?: StringNullableFilter<"GrantOpportunity"> | string | null;
        applicationFormat?: StringNullableFilter<"GrantOpportunity"> | string | null;
        funderProfileUrl?: StringNullableFilter<"GrantOpportunity"> | string | null;
        recipGsProfileLink?: StringNullableFilter<"GrantOpportunity"> | string | null;
        source?: StringNullableFilter<"GrantOpportunity"> | string | null;
        internalSourceId?: UuidNullableFilter<"GrantOpportunity"> | string | null;
        grantType?: StringNullableFilter<"GrantOpportunity"> | string | null;
        createdAt?: DateTimeFilter<"GrantOpportunity"> | Date | string;
    };

    export type OrganizationCreateWithoutLettersOfIntentInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateWithoutLettersOfIntentInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationCreateOrConnectWithoutLettersOfIntentInput = {
        where: OrganizationWhereUniqueInput;
        create: XOR<
            OrganizationCreateWithoutLettersOfIntentInput,
            OrganizationUncheckedCreateWithoutLettersOfIntentInput
        >;
    };

    export type GrantOpportunityCreateWithoutLettersOfIntentInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutGrantOpportunitiesInput;
        internalSource?: InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateWithoutLettersOfIntentInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityCreateOrConnectWithoutLettersOfIntentInput = {
        where: GrantOpportunityWhereUniqueInput;
        create: XOR<
            GrantOpportunityCreateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedCreateWithoutLettersOfIntentInput
        >;
    };

    export type OrganizationUpsertWithoutLettersOfIntentInput = {
        update: XOR<
            OrganizationUpdateWithoutLettersOfIntentInput,
            OrganizationUncheckedUpdateWithoutLettersOfIntentInput
        >;
        create: XOR<
            OrganizationCreateWithoutLettersOfIntentInput,
            OrganizationUncheckedCreateWithoutLettersOfIntentInput
        >;
        where?: OrganizationWhereInput;
    };

    export type OrganizationUpdateToOneWithWhereWithoutLettersOfIntentInput = {
        where?: OrganizationWhereInput;
        data: XOR<
            OrganizationUpdateWithoutLettersOfIntentInput,
            OrganizationUncheckedUpdateWithoutLettersOfIntentInput
        >;
    };

    export type OrganizationUpdateWithoutLettersOfIntentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateWithoutLettersOfIntentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type GrantOpportunityUpsertWithoutLettersOfIntentInput = {
        update: XOR<
            GrantOpportunityUpdateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedUpdateWithoutLettersOfIntentInput
        >;
        create: XOR<
            GrantOpportunityCreateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedCreateWithoutLettersOfIntentInput
        >;
        where?: GrantOpportunityWhereInput;
    };

    export type GrantOpportunityUpdateToOneWithWhereWithoutLettersOfIntentInput = {
        where?: GrantOpportunityWhereInput;
        data: XOR<
            GrantOpportunityUpdateWithoutLettersOfIntentInput,
            GrantOpportunityUncheckedUpdateWithoutLettersOfIntentInput
        >;
    };

    export type GrantOpportunityUpdateWithoutLettersOfIntentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput;
        internalSource?: InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateWithoutLettersOfIntentInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityCreateWithoutOrganizationInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        internalSource?: InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateWithoutOrganizationInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityCreateOrConnectWithoutOrganizationInput = {
        where: GrantOpportunityWhereUniqueInput;
        create: XOR<
            GrantOpportunityCreateWithoutOrganizationInput,
            GrantOpportunityUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type GrantOpportunityCreateManyOrganizationInputEnvelope = {
        data:
            | GrantOpportunityCreateManyOrganizationInput
            | GrantOpportunityCreateManyOrganizationInput[];
        skipDuplicates?: boolean;
    };

    export type InternalGrantSourceCreateWithoutOrganizationInput = {
        id?: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutInternalSourceInput;
    };

    export type InternalGrantSourceUncheckedCreateWithoutOrganizationInput = {
        id?: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutInternalSourceInput;
    };

    export type InternalGrantSourceCreateOrConnectWithoutOrganizationInput = {
        where: InternalGrantSourceWhereUniqueInput;
        create: XOR<
            InternalGrantSourceCreateWithoutOrganizationInput,
            InternalGrantSourceUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type InternalGrantSourceCreateManyOrganizationInputEnvelope = {
        data:
            | InternalGrantSourceCreateManyOrganizationInput
            | InternalGrantSourceCreateManyOrganizationInput[];
        skipDuplicates?: boolean;
    };

    export type ReadinessScoreCreateWithoutOrganizationInput = {
        id?: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
        grant: GrantOpportunityCreateNestedOneWithoutReadinessScoresInput;
    };

    export type ReadinessScoreUncheckedCreateWithoutOrganizationInput = {
        id?: string;
        grantId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type ReadinessScoreCreateOrConnectWithoutOrganizationInput = {
        where: ReadinessScoreWhereUniqueInput;
        create: XOR<
            ReadinessScoreCreateWithoutOrganizationInput,
            ReadinessScoreUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type ReadinessScoreCreateManyOrganizationInputEnvelope = {
        data:
            | ReadinessScoreCreateManyOrganizationInput
            | ReadinessScoreCreateManyOrganizationInput[];
        skipDuplicates?: boolean;
    };

    export type LetterOfIntentCreateWithoutOrganizationInput = {
        id?: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
        grant: GrantOpportunityCreateNestedOneWithoutLettersOfIntentInput;
    };

    export type LetterOfIntentUncheckedCreateWithoutOrganizationInput = {
        id?: string;
        grantId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentCreateOrConnectWithoutOrganizationInput = {
        where: LetterOfIntentWhereUniqueInput;
        create: XOR<
            LetterOfIntentCreateWithoutOrganizationInput,
            LetterOfIntentUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type LetterOfIntentCreateManyOrganizationInputEnvelope = {
        data:
            | LetterOfIntentCreateManyOrganizationInput
            | LetterOfIntentCreateManyOrganizationInput[];
        skipDuplicates?: boolean;
    };

    export type ProposalDraftCreateWithoutOrganizationInput = {
        id?: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
        grant: GrantOpportunityCreateNestedOneWithoutProposalDraftsInput;
    };

    export type ProposalDraftUncheckedCreateWithoutOrganizationInput = {
        id?: string;
        grantId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type ProposalDraftCreateOrConnectWithoutOrganizationInput = {
        where: ProposalDraftWhereUniqueInput;
        create: XOR<
            ProposalDraftCreateWithoutOrganizationInput,
            ProposalDraftUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type ProposalDraftCreateManyOrganizationInputEnvelope = {
        data: ProposalDraftCreateManyOrganizationInput | ProposalDraftCreateManyOrganizationInput[];
        skipDuplicates?: boolean;
    };

    export type GrantOpportunityUpsertWithWhereUniqueWithoutOrganizationInput = {
        where: GrantOpportunityWhereUniqueInput;
        update: XOR<
            GrantOpportunityUpdateWithoutOrganizationInput,
            GrantOpportunityUncheckedUpdateWithoutOrganizationInput
        >;
        create: XOR<
            GrantOpportunityCreateWithoutOrganizationInput,
            GrantOpportunityUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type GrantOpportunityUpdateWithWhereUniqueWithoutOrganizationInput = {
        where: GrantOpportunityWhereUniqueInput;
        data: XOR<
            GrantOpportunityUpdateWithoutOrganizationInput,
            GrantOpportunityUncheckedUpdateWithoutOrganizationInput
        >;
    };

    export type GrantOpportunityUpdateManyWithWhereWithoutOrganizationInput = {
        where: GrantOpportunityScalarWhereInput;
        data: XOR<
            GrantOpportunityUpdateManyMutationInput,
            GrantOpportunityUncheckedUpdateManyWithoutOrganizationInput
        >;
    };

    export type InternalGrantSourceUpsertWithWhereUniqueWithoutOrganizationInput = {
        where: InternalGrantSourceWhereUniqueInput;
        update: XOR<
            InternalGrantSourceUpdateWithoutOrganizationInput,
            InternalGrantSourceUncheckedUpdateWithoutOrganizationInput
        >;
        create: XOR<
            InternalGrantSourceCreateWithoutOrganizationInput,
            InternalGrantSourceUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type InternalGrantSourceUpdateWithWhereUniqueWithoutOrganizationInput = {
        where: InternalGrantSourceWhereUniqueInput;
        data: XOR<
            InternalGrantSourceUpdateWithoutOrganizationInput,
            InternalGrantSourceUncheckedUpdateWithoutOrganizationInput
        >;
    };

    export type InternalGrantSourceUpdateManyWithWhereWithoutOrganizationInput = {
        where: InternalGrantSourceScalarWhereInput;
        data: XOR<
            InternalGrantSourceUpdateManyMutationInput,
            InternalGrantSourceUncheckedUpdateManyWithoutOrganizationInput
        >;
    };

    export type InternalGrantSourceScalarWhereInput = {
        AND?: InternalGrantSourceScalarWhereInput | InternalGrantSourceScalarWhereInput[];
        OR?: InternalGrantSourceScalarWhereInput[];
        NOT?: InternalGrantSourceScalarWhereInput | InternalGrantSourceScalarWhereInput[];
        id?: UuidFilter<"InternalGrantSource"> | string;
        organizationId?: UuidFilter<"InternalGrantSource"> | string;
        opportunityText?: StringNullableFilter<"InternalGrantSource"> | string | null;
        opportunityUrl?: StringNullableFilter<"InternalGrantSource"> | string | null;
        opportunityPdf?: StringNullableFilter<"InternalGrantSource"> | string | null;
        createdAt?: DateTimeFilter<"InternalGrantSource"> | Date | string;
    };

    export type ReadinessScoreUpsertWithWhereUniqueWithoutOrganizationInput = {
        where: ReadinessScoreWhereUniqueInput;
        update: XOR<
            ReadinessScoreUpdateWithoutOrganizationInput,
            ReadinessScoreUncheckedUpdateWithoutOrganizationInput
        >;
        create: XOR<
            ReadinessScoreCreateWithoutOrganizationInput,
            ReadinessScoreUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type ReadinessScoreUpdateWithWhereUniqueWithoutOrganizationInput = {
        where: ReadinessScoreWhereUniqueInput;
        data: XOR<
            ReadinessScoreUpdateWithoutOrganizationInput,
            ReadinessScoreUncheckedUpdateWithoutOrganizationInput
        >;
    };

    export type ReadinessScoreUpdateManyWithWhereWithoutOrganizationInput = {
        where: ReadinessScoreScalarWhereInput;
        data: XOR<
            ReadinessScoreUpdateManyMutationInput,
            ReadinessScoreUncheckedUpdateManyWithoutOrganizationInput
        >;
    };

    export type LetterOfIntentUpsertWithWhereUniqueWithoutOrganizationInput = {
        where: LetterOfIntentWhereUniqueInput;
        update: XOR<
            LetterOfIntentUpdateWithoutOrganizationInput,
            LetterOfIntentUncheckedUpdateWithoutOrganizationInput
        >;
        create: XOR<
            LetterOfIntentCreateWithoutOrganizationInput,
            LetterOfIntentUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type LetterOfIntentUpdateWithWhereUniqueWithoutOrganizationInput = {
        where: LetterOfIntentWhereUniqueInput;
        data: XOR<
            LetterOfIntentUpdateWithoutOrganizationInput,
            LetterOfIntentUncheckedUpdateWithoutOrganizationInput
        >;
    };

    export type LetterOfIntentUpdateManyWithWhereWithoutOrganizationInput = {
        where: LetterOfIntentScalarWhereInput;
        data: XOR<
            LetterOfIntentUpdateManyMutationInput,
            LetterOfIntentUncheckedUpdateManyWithoutOrganizationInput
        >;
    };

    export type ProposalDraftUpsertWithWhereUniqueWithoutOrganizationInput = {
        where: ProposalDraftWhereUniqueInput;
        update: XOR<
            ProposalDraftUpdateWithoutOrganizationInput,
            ProposalDraftUncheckedUpdateWithoutOrganizationInput
        >;
        create: XOR<
            ProposalDraftCreateWithoutOrganizationInput,
            ProposalDraftUncheckedCreateWithoutOrganizationInput
        >;
    };

    export type ProposalDraftUpdateWithWhereUniqueWithoutOrganizationInput = {
        where: ProposalDraftWhereUniqueInput;
        data: XOR<
            ProposalDraftUpdateWithoutOrganizationInput,
            ProposalDraftUncheckedUpdateWithoutOrganizationInput
        >;
    };

    export type ProposalDraftUpdateManyWithWhereWithoutOrganizationInput = {
        where: ProposalDraftScalarWhereInput;
        data: XOR<
            ProposalDraftUpdateManyMutationInput,
            ProposalDraftUncheckedUpdateManyWithoutOrganizationInput
        >;
    };

    export type OrganizationCreateWithoutProposalDraftsInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateWithoutProposalDraftsInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationCreateOrConnectWithoutProposalDraftsInput = {
        where: OrganizationWhereUniqueInput;
        create: XOR<
            OrganizationCreateWithoutProposalDraftsInput,
            OrganizationUncheckedCreateWithoutProposalDraftsInput
        >;
    };

    export type GrantOpportunityCreateWithoutProposalDraftsInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutGrantOpportunitiesInput;
        internalSource?: InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput;
        readinessScores?: ReadinessScoreCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateWithoutProposalDraftsInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        readinessScores?: ReadinessScoreUncheckedCreateNestedManyWithoutGrantInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityCreateOrConnectWithoutProposalDraftsInput = {
        where: GrantOpportunityWhereUniqueInput;
        create: XOR<
            GrantOpportunityCreateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedCreateWithoutProposalDraftsInput
        >;
    };

    export type OrganizationUpsertWithoutProposalDraftsInput = {
        update: XOR<
            OrganizationUpdateWithoutProposalDraftsInput,
            OrganizationUncheckedUpdateWithoutProposalDraftsInput
        >;
        create: XOR<
            OrganizationCreateWithoutProposalDraftsInput,
            OrganizationUncheckedCreateWithoutProposalDraftsInput
        >;
        where?: OrganizationWhereInput;
    };

    export type OrganizationUpdateToOneWithWhereWithoutProposalDraftsInput = {
        where?: OrganizationWhereInput;
        data: XOR<
            OrganizationUpdateWithoutProposalDraftsInput,
            OrganizationUncheckedUpdateWithoutProposalDraftsInput
        >;
    };

    export type OrganizationUpdateWithoutProposalDraftsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateWithoutProposalDraftsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type GrantOpportunityUpsertWithoutProposalDraftsInput = {
        update: XOR<
            GrantOpportunityUpdateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedUpdateWithoutProposalDraftsInput
        >;
        create: XOR<
            GrantOpportunityCreateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedCreateWithoutProposalDraftsInput
        >;
        where?: GrantOpportunityWhereInput;
    };

    export type GrantOpportunityUpdateToOneWithWhereWithoutProposalDraftsInput = {
        where?: GrantOpportunityWhereInput;
        data: XOR<
            GrantOpportunityUpdateWithoutProposalDraftsInput,
            GrantOpportunityUncheckedUpdateWithoutProposalDraftsInput
        >;
    };

    export type GrantOpportunityUpdateWithoutProposalDraftsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput;
        internalSource?: InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateWithoutProposalDraftsInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type OrganizationCreateWithoutReadinessScoresInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationUncheckedCreateWithoutReadinessScoresInput = {
        id?: string;
        organizationName: string;
        organizationWebsite?: string | null;
        missionStatement?: string | null;
        refinedMissionStatement?: string | null;
        corePurpose?: string | null;
        typeOfWork?: string | null;
        goalsAspirations?: string | null;
        programs?: string | null;
        achievements?: string | null;
        budget?: string | null;
        evaluation?: string | null;
        noOfGrants?: number | null;
        sharedLink?: string | null;
        isGrant?: boolean;
        createdAt?: Date | string;
        grantOpportunities?: GrantOpportunityUncheckedCreateNestedManyWithoutOrganizationInput;
        internalGrantSources?: InternalGrantSourceUncheckedCreateNestedManyWithoutOrganizationInput;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutOrganizationInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutOrganizationInput;
    };

    export type OrganizationCreateOrConnectWithoutReadinessScoresInput = {
        where: OrganizationWhereUniqueInput;
        create: XOR<
            OrganizationCreateWithoutReadinessScoresInput,
            OrganizationUncheckedCreateWithoutReadinessScoresInput
        >;
    };

    export type GrantOpportunityCreateWithoutReadinessScoresInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        organization: OrganizationCreateNestedOneWithoutGrantOpportunitiesInput;
        internalSource?: InternalGrantSourceCreateNestedOneWithoutGrantOpportunitiesInput;
        lettersOfIntent?: LetterOfIntentCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityUncheckedCreateWithoutReadinessScoresInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
        lettersOfIntent?: LetterOfIntentUncheckedCreateNestedManyWithoutGrantInput;
        proposalDrafts?: ProposalDraftUncheckedCreateNestedManyWithoutGrantInput;
    };

    export type GrantOpportunityCreateOrConnectWithoutReadinessScoresInput = {
        where: GrantOpportunityWhereUniqueInput;
        create: XOR<
            GrantOpportunityCreateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedCreateWithoutReadinessScoresInput
        >;
    };

    export type OrganizationUpsertWithoutReadinessScoresInput = {
        update: XOR<
            OrganizationUpdateWithoutReadinessScoresInput,
            OrganizationUncheckedUpdateWithoutReadinessScoresInput
        >;
        create: XOR<
            OrganizationCreateWithoutReadinessScoresInput,
            OrganizationUncheckedCreateWithoutReadinessScoresInput
        >;
        where?: OrganizationWhereInput;
    };

    export type OrganizationUpdateToOneWithWhereWithoutReadinessScoresInput = {
        where?: OrganizationWhereInput;
        data: XOR<
            OrganizationUpdateWithoutReadinessScoresInput,
            OrganizationUncheckedUpdateWithoutReadinessScoresInput
        >;
    };

    export type OrganizationUpdateWithoutReadinessScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutOrganizationNestedInput;
    };

    export type OrganizationUncheckedUpdateWithoutReadinessScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationName?: StringFieldUpdateOperationsInput | string;
        organizationWebsite?: NullableStringFieldUpdateOperationsInput | string | null;
        missionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        refinedMissionStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        corePurpose?: NullableStringFieldUpdateOperationsInput | string | null;
        typeOfWork?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAspirations?: NullableStringFieldUpdateOperationsInput | string | null;
        programs?: NullableStringFieldUpdateOperationsInput | string | null;
        achievements?: NullableStringFieldUpdateOperationsInput | string | null;
        budget?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluation?: NullableStringFieldUpdateOperationsInput | string | null;
        noOfGrants?: NullableIntFieldUpdateOperationsInput | number | null;
        sharedLink?: NullableStringFieldUpdateOperationsInput | string | null;
        isGrant?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutOrganizationNestedInput;
        internalGrantSources?: InternalGrantSourceUncheckedUpdateManyWithoutOrganizationNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutOrganizationNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutOrganizationNestedInput;
    };

    export type GrantOpportunityUpsertWithoutReadinessScoresInput = {
        update: XOR<
            GrantOpportunityUpdateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedUpdateWithoutReadinessScoresInput
        >;
        create: XOR<
            GrantOpportunityCreateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedCreateWithoutReadinessScoresInput
        >;
        where?: GrantOpportunityWhereInput;
    };

    export type GrantOpportunityUpdateToOneWithWhereWithoutReadinessScoresInput = {
        where?: GrantOpportunityWhereInput;
        data: XOR<
            GrantOpportunityUpdateWithoutReadinessScoresInput,
            GrantOpportunityUncheckedUpdateWithoutReadinessScoresInput
        >;
    };

    export type GrantOpportunityUpdateWithoutReadinessScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput;
        internalSource?: InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateWithoutReadinessScoresInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type ReadinessScoreCreateManyGrantInput = {
        id?: string;
        organizationId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentCreateManyGrantInput = {
        id?: string;
        organizationId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type ProposalDraftCreateManyGrantInput = {
        id?: string;
        organizationId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type ReadinessScoreUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutReadinessScoresNestedInput;
    };

    export type ReadinessScoreUncheckedUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreUncheckedUpdateManyWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutLettersOfIntentNestedInput;
    };

    export type LetterOfIntentUncheckedUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentUncheckedUpdateManyWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutProposalDraftsNestedInput;
    };

    export type ProposalDraftUncheckedUpdateWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftUncheckedUpdateManyWithoutGrantInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type GrantOpportunityCreateManyInternalSourceInput = {
        id?: string;
        organizationId: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
    };

    export type GrantOpportunityUpdateWithoutInternalSourceInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        organization?: OrganizationUpdateOneRequiredWithoutGrantOpportunitiesNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateWithoutInternalSourceInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateManyWithoutInternalSourceInput = {
        id?: StringFieldUpdateOperationsInput | string;
        organizationId?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type GrantOpportunityCreateManyOrganizationInput = {
        id?: string;
        funderName: string;
        focusArea?: string | null;
        deadline?: Date | string | null;
        amountUsd?: Decimal | DecimalJsLike | number | string | null;
        eligibility?: string | null;
        attachmentsRequired?: string | null;
        applicationFormat?: string | null;
        funderProfileUrl?: string | null;
        recipGsProfileLink?: string | null;
        source?: string | null;
        internalSourceId?: string | null;
        grantType?: string | null;
        createdAt?: Date | string;
    };

    export type InternalGrantSourceCreateManyOrganizationInput = {
        id?: string;
        opportunityText?: string | null;
        opportunityUrl?: string | null;
        opportunityPdf?: string | null;
        createdAt?: Date | string;
    };

    export type ReadinessScoreCreateManyOrganizationInput = {
        id?: string;
        grantId: string;
        readinessScore: number;
        strengths?: string | null;
        improvementAreas?: string | null;
        createdAt?: Date | string;
    };

    export type LetterOfIntentCreateManyOrganizationInput = {
        id?: string;
        grantId: string;
        introduction?: string | null;
        organizationalSummary?: string | null;
        projectOverview?: string | null;
        fundingRequest?: Decimal | DecimalJsLike | number | string | null;
        closingStatement?: string | null;
        createdAt?: Date | string;
    };

    export type ProposalDraftCreateManyOrganizationInput = {
        id?: string;
        grantId: string;
        executiveSummary?: string | null;
        introductionToOrganization?: string | null;
        problemStatement?: string | null;
        goalsAndObjectives?: string | null;
        methodsAndActivities?: string | null;
        evaluationPlan?: string | null;
        sustainabilityPlan?: string | null;
        budgetSummary?: string | null;
        conclusion?: string | null;
        status?: boolean;
        createdAt?: Date | string;
    };

    export type GrantOpportunityUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        internalSource?: InternalGrantSourceUpdateOneWithoutGrantOpportunitiesNestedInput;
        readinessScores?: ReadinessScoreUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        readinessScores?: ReadinessScoreUncheckedUpdateManyWithoutGrantNestedInput;
        lettersOfIntent?: LetterOfIntentUncheckedUpdateManyWithoutGrantNestedInput;
        proposalDrafts?: ProposalDraftUncheckedUpdateManyWithoutGrantNestedInput;
    };

    export type GrantOpportunityUncheckedUpdateManyWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        funderName?: StringFieldUpdateOperationsInput | string;
        focusArea?: NullableStringFieldUpdateOperationsInput | string | null;
        deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
        amountUsd?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        eligibility?: NullableStringFieldUpdateOperationsInput | string | null;
        attachmentsRequired?: NullableStringFieldUpdateOperationsInput | string | null;
        applicationFormat?: NullableStringFieldUpdateOperationsInput | string | null;
        funderProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        recipGsProfileLink?: NullableStringFieldUpdateOperationsInput | string | null;
        source?: NullableStringFieldUpdateOperationsInput | string | null;
        internalSourceId?: NullableStringFieldUpdateOperationsInput | string | null;
        grantType?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type InternalGrantSourceUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUpdateManyWithoutInternalSourceNestedInput;
    };

    export type InternalGrantSourceUncheckedUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grantOpportunities?: GrantOpportunityUncheckedUpdateManyWithoutInternalSourceNestedInput;
    };

    export type InternalGrantSourceUncheckedUpdateManyWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        opportunityText?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityUrl?: NullableStringFieldUpdateOperationsInput | string | null;
        opportunityPdf?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grant?: GrantOpportunityUpdateOneRequiredWithoutReadinessScoresNestedInput;
    };

    export type ReadinessScoreUncheckedUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ReadinessScoreUncheckedUpdateManyWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        readinessScore?: IntFieldUpdateOperationsInput | number;
        strengths?: NullableStringFieldUpdateOperationsInput | string | null;
        improvementAreas?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grant?: GrantOpportunityUpdateOneRequiredWithoutLettersOfIntentNestedInput;
    };

    export type LetterOfIntentUncheckedUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type LetterOfIntentUncheckedUpdateManyWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        introduction?: NullableStringFieldUpdateOperationsInput | string | null;
        organizationalSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        projectOverview?: NullableStringFieldUpdateOperationsInput | string | null;
        fundingRequest?:
            | NullableDecimalFieldUpdateOperationsInput
            | Decimal
            | DecimalJsLike
            | number
            | string
            | null;
        closingStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
        grant?: GrantOpportunityUpdateOneRequiredWithoutProposalDraftsNestedInput;
    };

    export type ProposalDraftUncheckedUpdateWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    export type ProposalDraftUncheckedUpdateManyWithoutOrganizationInput = {
        id?: StringFieldUpdateOperationsInput | string;
        grantId?: StringFieldUpdateOperationsInput | string;
        executiveSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        introductionToOrganization?: NullableStringFieldUpdateOperationsInput | string | null;
        problemStatement?: NullableStringFieldUpdateOperationsInput | string | null;
        goalsAndObjectives?: NullableStringFieldUpdateOperationsInput | string | null;
        methodsAndActivities?: NullableStringFieldUpdateOperationsInput | string | null;
        evaluationPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        sustainabilityPlan?: NullableStringFieldUpdateOperationsInput | string | null;
        budgetSummary?: NullableStringFieldUpdateOperationsInput | string | null;
        conclusion?: NullableStringFieldUpdateOperationsInput | string | null;
        status?: BoolFieldUpdateOperationsInput | boolean;
        createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

    /**
     * Batch Payload for updateMany & deleteMany & createMany
     */

    export type BatchPayload = {
        count: number;
    };

    /**
     * DMMF
     */
    export const dmmf: runtime.BaseDMMF;
}
