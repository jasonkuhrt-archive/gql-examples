import * as YogaTypes from "graphql-yoga/dist/types"
import * as PrismaBinding from "prisma-binding"
import * as Context from "./Context"
import * as Schema from "./Schema"

type Resolvers = YogaTypes.IResolvers<Context.Context>

const resolvers: Resolvers = {
  Query: {
    users: (_, args, ctx, info) => {
      return ctx.core.query.users(args, info)
    },
    // The following is a short hand. It could be written more verbosely like:
    // user: (_, args, ctx, info) => {
    //   return ctx.core.query.users(args, info)
    // }
    user: PrismaBinding.forwardTo("core"),
  },
  Mutation: {
    signup: (source, args: Schema.SignupMutationArgs, ctx, info) => {
      console.log({ source, ctx })
      return ctx.core.mutation.createUser({ data: args }, info)
    },
    // Deactivate
    //   Add a deactivated field to datamodel
    //   When querying users, check that they aren't deactivated
    // SendMessage
  },
  // Subscription (forwardTo)
}

export { resolvers }
