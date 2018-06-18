import * as AL from "apollo-link-http"
import * as GQLTools from "graphql-tools"
import * as Yoga from "graphql-yoga"
import fetch from "node-fetch"

const run = async () => {
  // https://github.com/apollographql/graphql-tools/issues/726
  // https://github.com/apollographql/graphql-tools/issues/704
  const link: any = AL.createHttpLink({
    uri: "http://localhost:4466/passthrough-core/dev",
    fetch,
  })
  const schema = await GQLTools.introspectSchema(link)
  const executableSchema = GQLTools.makeRemoteExecutableSchema({ link, schema })
  const server = new Yoga.GraphQLServer({
    schema: executableSchema,
  })
  return server.start().then(() => {
    console.log("server is runnng on port 4000")
  })
}

run().catch(e => {
  console.error(e)
  process.exit(1)
})
