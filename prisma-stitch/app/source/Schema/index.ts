import * as GQLImport from "graphql-import"
import * as Tools from "graphql-tools"
import * as H from "../Helpers"
import * as Resolvers from "../Resolvers"

const typeDefs = GQLImport.importSchema(`${__dirname}/Main.graphql`)

const schema = Tools.makeExecutableSchema({
  resolvers: Resolvers.resolvers,
  typeDefs,
  resolverValidationOptions: {
    allowResolversNotInSchema: true,
  },
})

const transforms: Tools.Transform[] = [
  H.hideQueriesMatching(/node|.*Connection/),
]

const schemaTransformed = Tools.transformSchema(schema, transforms)

export * from "./Types"
export { typeDefs, schema, schemaTransformed }
