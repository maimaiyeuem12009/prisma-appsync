import type { Options, PrismaAppSyncOptionsType, ResolveParams } from './defs';
import { PrismaClient } from './defs';
/**
 * ##  Prisma-AppSync Client ʲˢ
 *
 * Type-safe Prisma AppSync client for TypeScript & Node.js
 * @example
 * ```
 * const prismaAppSync = new PrismaAppSync()
 *
 * // lambda handler (AppSync Direct Lambda Resolver)
 * export const resolver = async (event: any, context: any) => {
 *     return await prismaAppSync.resolve({ event })
 * }
 * ```
 *
 *
 * Read more in our [docs](https://prisma-appsync.vercel.app).
 */
export declare class PrismaAppSync {
    options: Options;
    prismaClient: PrismaClient;
    /**
   * ### Client Constructor
   *
   * Instantiate Prisma-AppSync Client.
   * @example
   * ```
   * const prismaAppSync = new PrismaAppSync()
   * ```
   *
   * @param {PrismaAppSyncOptionsType} options
   * @param {string} options.connectionString? - Prisma connection string (database connection URL).
   * @param {boolean} options.sanitize? - Enable sanitize inputs (parse xss + encode html).
   * @param {'INFO' | 'WARN' | 'ERROR'} options.logLevel? - Server logs level (visible in CloudWatch).
   * @param {number|false} options.defaultPagination? - Default pagination for list Query (items per page).
   * @param {number} options.maxDepth? - Maximum allowed GraphQL query depth.
   * @param {number} options.maxReqPerUserMinute? - Maximum allowed requests per user, per minute.
   *
   * @default
   * ```
   * {
   *   connectionString: process.env.DATABASE_URL,
   *   sanitize: true,
   *   logLevel: 'INFO',
   *   defaultPagination: 50,
   *   maxDepth: 3,
   *   maxReqPerUserMinute: 200
   * }
   * ```
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    constructor(options?: PrismaAppSyncOptionsType);
    /**
   * ###  Resolver
   *
   * Resolve the API request, based on the AppSync `event` received by the Direct Lambda Resolver.
   * @example
   * ```
   * await prismaAppSync.resolve({ event })
   *
   * // custom resolvers
   * await prismaAppSync.resolve<'notify'|'listPosts'>(
   *     event,
   *     resolvers: {
   *         // extend CRUD API with a custom `notify` query
   *         notify: async ({ args }) => { return { message: args.message } },
   *
   *         // disable one of the generated CRUD API query
   *         listPosts: false,
   *     }
   * })
   * ```
   *
   * @param {ResolveParams} resolveParams
   * @param {any} resolveParams.event - AppSync event received by the Direct Lambda Resolver.
   * @param {any} resolveParams.resolvers? - Custom resolvers (to extend the CRUD API).
   * @param {function} resolveParams.shield? - Shield configuration (to protect your API).
   * @param {function} resolveParams.hooks? - Hooks (to trigger functions based on events).
   * @returns Promise<result>
   *
   *
   * Read more in our [docs](https://prisma-appsync.vercel.app).
   */
    resolve<CustomResolvers = void>(resolveParams: ResolveParams<"countAnswers" | "countCalls" | "countComments" | "countPolls" | "countQas" | "countUsers" | "createAnswer" | "createCall" | "createComment" | "createManyAnswers" | "createManyCalls" | "createManyComments" | "createManyPolls" | "createManyQas" | "createManyUsers" | "createPoll" | "createQa" | "createUser" | "deleteAnswer" | "deleteCall" | "deleteComment" | "deleteManyAnswers" | "deleteManyCalls" | "deleteManyComments" | "deleteManyPolls" | "deleteManyQas" | "deleteManyUsers" | "deletePoll" | "deleteQa" | "deleteUser" | "getAnswer" | "getCall" | "getComment" | "getPoll" | "getQa" | "getUser" | "listAnswers" | "listCalls" | "listComments" | "listPolls" | "listQas" | "listUsers" | "onCreatedAnswer" | "onCreatedCall" | "onCreatedComment" | "onCreatedManyAnswers" | "onCreatedManyCalls" | "onCreatedManyComments" | "onCreatedManyPolls" | "onCreatedManyQas" | "onCreatedManyUsers" | "onCreatedPoll" | "onCreatedQa" | "onCreatedUser" | "onDeletedAnswer" | "onDeletedCall" | "onDeletedComment" | "onDeletedManyAnswers" | "onDeletedManyCalls" | "onDeletedManyComments" | "onDeletedManyPolls" | "onDeletedManyQas" | "onDeletedManyUsers" | "onDeletedPoll" | "onDeletedQa" | "onDeletedUser" | "onMutatedAnswer" | "onMutatedCall" | "onMutatedComment" | "onMutatedManyAnswers" | "onMutatedManyCalls" | "onMutatedManyComments" | "onMutatedManyPolls" | "onMutatedManyQas" | "onMutatedManyUsers" | "onMutatedPoll" | "onMutatedQa" | "onMutatedUser" | "onUpdatedAnswer" | "onUpdatedCall" | "onUpdatedComment" | "onUpdatedManyAnswers" | "onUpdatedManyCalls" | "onUpdatedManyComments" | "onUpdatedManyPolls" | "onUpdatedManyQas" | "onUpdatedManyUsers" | "onUpdatedPoll" | "onUpdatedQa" | "onUpdatedUser" | "onUpsertedAnswer" | "onUpsertedCall" | "onUpsertedComment" | "onUpsertedPoll" | "onUpsertedQa" | "onUpsertedUser" | "updateAnswer" | "updateCall" | "updateComment" | "updateManyAnswers" | "updateManyCalls" | "updateManyComments" | "updateManyPolls" | "updateManyQas" | "updateManyUsers" | "updatePoll" | "updateQa" | "updateUser" | "upsertAnswer" | "upsertCall" | "upsertComment" | "upsertPoll" | "upsertQa" | "upsertUser", Extract<CustomResolvers, string>>): Promise<any>;
}
