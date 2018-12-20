import * as Yoga from "graphql-yoga"
import * as Context from "./Context"
import * as Schema from "./Schema"

const server = new Yoga.GraphQLServer({
  schema: Schema.schemaTransformed,
  context: Context.create,
})

server.start().then((server: any) => {
  console.log("started server at %s", JSON.stringify(server.address()))
})
