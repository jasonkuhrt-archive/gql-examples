import * as GQLImport from "graphql-import"
import * as Yoga from "graphql-yoga"
import * as YogaTypes from "graphql-yoga/dist/types"
import * as PrismaBinding from "prisma-binding"
import * as Context from "./Context"
import * as Schema from "./Schema"

const typeDefs = GQLImport.importSchema(__dirname + "/Schema.graphql")
const port = 4000

const resolvers: YogaTypes.IResolvers<Context.Context> = {
  Query: {
    users: PrismaBinding.forwardTo("core"),
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

const server = new Yoga.GraphQLServer({
  typeDefs,
  resolvers,
  context: Context.create,
})

server.start({ port }).then(server => {
  console.log("started server at %s", JSON.stringify(server.address()))
})
