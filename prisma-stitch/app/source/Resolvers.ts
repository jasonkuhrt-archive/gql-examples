import * as YogaTypes from "graphql-yoga/dist/types"
import * as F from "ramda"
import * as Context from "./Context"

type Resolvers = YogaTypes.IResolvers<Context.Context>

const resolvers: Resolvers = {
  Query: {
    users: (_, args, ctx, info) => {
      return ctx.core.query.users(
        F.mergeDeepRight(args, { where: { deactivated: false } }),
        info
      )
    },
    user: (_, args, ctx, info) => {
      return ctx.core.query
        .users(F.mergeDeepRight(args, { wheree: { deactivated: false } }), info)
        .then(users => users[0] || null)
    },
  },
  Mutation: {
    signup: (_, args, ctx, info) => {
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
    deactivateByEmail: (_, args, ctx, info) => {
      return ctx.core.mutation.updateUser(
        {
          data: { deactivated: true },
          where: { email: args.email },
        },
        info
      )
    },
    // TODO
    // SendMessage
  },
  // TODO
  // Subscription (forwardTo)
}

export { resolvers }
