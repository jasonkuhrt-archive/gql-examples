import * as Yoga from "graphql-yoga"
import * as Context from "./Context"
import * as Resolvers from "./Resolvers"
import * as Schema from "./Schema"

const server = new Yoga.GraphQLServer({
  typeDefs: Schema.typeDefs,
  resolvers: Resolvers.resolvers,
  context: Context.create,
})

server.start().then(server => {
  console.log("started server at %s", JSON.stringify(server.address()))
})
