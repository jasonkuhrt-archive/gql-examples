import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
  type Message {
    content: String!
  }

  type Query {
    messages(matching: String, foo: Boolean, bar: Boolean = null): [Message!]!
  }
`

const resolvers = {
  Query: {
    messages: (root: unknown, args: unknown, ctx: unknown, info: unknown) => {
      console.log("Query.messages resolver")
      console.log({
        root,
        args,
        ctx,
        info,
      })
      return []
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen({ port: 4000 }).then((serverInfo: any) => {
  console.log("listening at %s", serverInfo.url)
})
