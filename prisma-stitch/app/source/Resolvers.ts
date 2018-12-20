import * as PrismaBinding from "prisma-binding"
import * as F from "ramda"

const resolvers: any = {
  Query: {
    users: (_: any, args: any, ctx: any, info: any) => {
      return ctx.core.query.users(
        F.mergeDeepRight(args, { where: { deactivated: false } }),
        info
      )
    },
    user: (_: any, args: any, ctx: any, info: any) => {
      return ctx.core.query
        .users(F.mergeDeepRight(args, { where: { deactivated: false } }), info)
        .then((users: any) => users[0] || null)
    },
    channel: PrismaBinding.forwardTo("core"),
  },
  Mutation: {
    signup: (_: any, args: any, ctx: any, info: any) => {
      // NOTE If the user is NOT deactivated then this query
      // will still go through but be like a noop. Arguably
      // this case should return a client error analogous
      // to HTTP 409 but its unclear how to do that without
      // doing multiple roundtrips. Ideally upsertUser could
      // return a "signal" about if it was a create or update
      // and if it was an update then return error. Note that
      // if we allowed more fields to be supplied during
      // signup then it would no longer be a noop during update
      // case and could no longer simply return error. Such
      // a case seems likely, just not here b/c app is trivial.
      // To handle this while still doing a single round trip
      // would require server-side conditional check on
      // arbitrary fields, our case being IF deactivated: true
      return ctx.core.mutation.upsertUser(
        {
          where: args,
          update: { deactivated: false },
          create: args,
        },
        info
      )
    },
    deactivateByEmail: (_: any, args: any, ctx: any, info: any) => {
      return ctx.core.mutation.updateUser(
        {
          data: { deactivated: true },
          where: { email: args.email },
        },
        info
      )
    },
    sendMessage: (_: any, args: any, ctx: any, info: any) => {
      // NOTE
      // Prisma create mutations are rather clever. They support
      // either connecting to relations or creating them as well
      // in turn. This is referred to as nested mutationsl Read more here:
      // https://www.prisma.io/docs/reference/prisma-api/mutations-ol0yuoz6go#nested-mutations
      return ctx.core.mutation.createMessage(
        {
          data: {
            content: args.content,
            sent_at: args.sentAt,
            channel: { connect: { id: args.channelId } },
            author: {
              // NOTE
              // It is possible to do a create instead of connect
              connect: {
                // NOTE
                // Since users have @unique on email
                // I could connect to a user, e.g. here,
                // based on their email, instead of id
                id: args.authorId,
              },
            },
          },
        },
        info
      )
    },
    createChannel: PrismaBinding.forwardTo("core"),
    updateUser: PrismaBinding.forwardTo("core"),
  },
  Subscription: {
    message: {
      subscribe: async (_: any, args: any, ctx: any, info: any) => {
        return ctx.core.subscription.user(args, info)
      },
    },
    channel: {
      subscribe: async (_: any, args: any, ctx: any, info: any) => {
        return ctx.core.subscription.channel(args, info)
      },
    },
  },
}

export { resolvers }
